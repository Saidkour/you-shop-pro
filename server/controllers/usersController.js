const User = require("../modules/user");
const asyncWrapper = require("express-async-wrapper");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const nodeMailer = require("nodemailer");

const createJwt = (user, res, statusCode) => {
  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
  res.cookie("token", token, {
    httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
    secure: true, // Ensures cookie is only sent over HTTPS in production
    maxAge: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    sameSite: "none", // Ensures the cookie is sent with cross-site requests <also in production >
  });
  res.status(statusCode).json({
    status: "success",
    user: {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      role: user.role,
      email: user.email,
    },
    token,
  });
};

exports.auth = async (req, res, next) => {
  // httpOnly
  const token = req.cookies.token;
  console.log("token", token);
  if (!token || !(await jwt.verify(token, process.env.JWT_SECRET)))
    return res.status(401).json({
      status: "error",
      message: "unautorized or invalid token",
    });
  // jwt{id}
  const { id } = jwt.decode(token);
  // verify the id
  if (!id || !(await User.findById(id)))
    return res.status(401).json({
      status: "error",
      message: "unautorized or invalid user",
    });
  const user = await User.findById(id);
  req.user = user;
  next();
};

exports.getCurrentUser = asyncWrapper(async (req, res) => {
  const user = {
    id: req.user.id,
    firstName: req.user.firstName,
    lastName: req.user.lastName,
    role: req.user.role,
    email: req.user.email,
  };
  res.json({
    status: "success",
    user,
  });
});

exports.login = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);
  const user = await User.findOne({ email });
  if (!user) return handleFaildLogin(res);
  if (!(await bcrypt.compare(password, user.password)))
    return handleFaildLogin(res);

  createJwt(user, res, 200);
});

const handleFaildLogin = (res) => {
  return res.status(401).json({
    status: "unautorized",
    message: "Invalide User name or password",
  });
};

exports.signUp = asyncWrapper(async (req, res, next) => {
  const { firstName, lastName, role, email, password } = req.body;
  if (!firstName || !lastName || !email || !password) {
    return res.status(400).json({
      status: "error",
      message: "Bad Request sign up",
    });
  }
  const user = await User.create({
    firstName,
    lastName,
    role: role ? role : "user",
    email,
    password,
  });
  createJwt(user, res, 201);
});

// exports.logout = async (req, res) => {
//   res.clearCookie("token");
//   res.status(200).json({
//     status: "success",
//   });
// };

exports.logout = async (req, res) => {
  // Clear the token cookie
  res.cookie("token", "", {
    httpOnly: true, // Cookie is only accessible via the server
    expires: new Date(0), // Expire the cookie immediately
    secure: true, // Use only in HTTPS (set to true in production)
    sameSite: "None", // Allow cross-site cookie sharing if needed
  });
  // Alternatively, if you want to send a JSON response instead of redirecting, uncomment the next two lines
  return res.status(200).json({
    status: "success",
  });
};

exports.allowedRoles = (...roles) => {
  return (req, res, next) => {
    const user = req.user;
    if (!roles.includes(user.role))
      return res.status(403).json({
        status: "error",
        message: "Forbidden",
      });
    next();
  };
};

exports.passwordResetToken = asyncWrapper(async (req, res) => {
  const { email } = req.body;
  if (!email)
    return res.status(400).json({ status: "error", message: "Bad Request" });

  const user = await User.findOne({ email });
  if (!user) res.status(404).json({ status: "error", message: "Not Found" });
  const { id } = user;
  // random token
  const token = crypto.randomBytes(32).toString("hex");

  const result = await User.findByIdAndUpdate(id, {
    passwordReset: {
      token: await bcrypt.hash(token, 12),
      expires: Date.now() + 60 * 60 * 1000,
    },
  });
  console.log(result);
  if (!result)
    res.status(500).json({
      status: "error",
      message: "Couldn't generate passwordReset token for this user ",
    });

  sendEmailNodeMailer(token, email, res);
});

exports.passwordResetTokenVerify = asyncWrapper(async (req, res, next) => {
  const { newPassword, token, email } = req.body;

  // console.log(newPassword, token, email);
  if (!token || !email || !newPassword)
    return res.status(400).json({ status: "error", message: "Bad Request" });

  const user = await User.findOne({ email });
  if (!user) res.status(404).json({ status: "error", message: "Not Found" });

  if (user.passwordReset.expires < Date.now())
    res.status(401).json({ status: "error", message: "Expired token" });

  if (!(await bcrypt.compare(token, user.passwordReset.token)))
    res.status(401).json({ status: "error", message: "Invalid token" });

  if (
    await User.findByIdAndUpdate(user.id, {
      password: newPassword,
      passwordReset: { token: null, expires: null },
    })
  )
    res.json({
      status: "success",
      message: "Password reset successful",
    });
  else
    res
      .status(500)
      .json({ status: "error", message: "Couldn't reset password" });
});

const sendEmailNodeMailer = async (token, email, res) => {
  const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: email,
    port: 587,
    host: "smtp.gmail.com",
    subject: "Password Reset",
    html: `<h1>Click on the link to reset your password</h1>
      <p>${process.env.CLIENT_URL}/newpassword?token=${token}&email=${email}</p>`,
    secure: false,
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    if (result) res.json({ status: "success", message: "Email sent" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ status: "error", error, message: "Couldn't send email" });
  }
};

exports.updateUser = asyncWrapper(async (req, res) => {
  const { fistName, lastName, email, password, newPassword } = req.body;

  let newUser = {};

  if (newPassword) {
    newUser = { password: newPassword };
  } else {
    if (!fistName || !lastName || !email || !password)
      return res.status(400).json({ status: "error", message: "Bad Request" });
    newUser = { fistName, lastName, email };
  }

  if (!(await bcrypt.compare(password, req.user.password)))
    return res
      .status(401)
      .json({ status: "error", message: "Invalid password" });

  const user = await User.findById(req.user.id);
  if (!user)
    return res.status(404).json({ status: "error", message: "Not Found" });

  const resUser = await User.findByIdAndUpdate(req.user.id, newUser, {
    new: true,
  });
  if (!resUser)
    return res.status(500).json({
      status: "error",
      message: "Couldn't update user",
    });

  createJwt(resUser, res, 200);
});
