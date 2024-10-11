const bcrypt = require("bcrypt");
const { mongoose } = require("../database");

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "FisrtName is required"],
  },
  lastName: {
    type: String,
    required: [true, "Lastname is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    validation: {
      validator: function (email) {
        if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
          throw new Error("email is invalid");
        } else {
          return email;
        }
      },
      message: (props) => `${props.value} is not a valid email`,
    },
  },
  role: {
    type: String,
    default: "user",
    enum: ["user", "admin"],
  },
  password: {
    type: String,
    maxlength: 100,
    minlength: 2,
    required: [true, "Password is required"],
  },

  passwordReset: {
    token: String,
    expires: Date,
  },
});

// hash password before saving bycript also fter updating password

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 12);
  next();
});

UserSchema.pre("findOneAndUpdate", async function (next) {
  if (!this._update.password) return next();
  this._update.password = await bcrypt.hash(this._update.password, 12);
  next();
});

module.exports = mongoose.model("User", UserSchema);
