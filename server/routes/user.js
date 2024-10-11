const express = require("express");
const {
  signUp,
  login,
  logout,
  passwordResetToken,
  passwordResetTokenVerify,
  getCurrentUser,
  auth,
  updateUser,
} = require("../controllers/usersController");

const router = express.Router();

router
  .route("/")
  .get(auth, getCurrentUser)
  .post(signUp)
  .patch(auth, updateUser);

router.route("/login").post(login);

router
  .route("/resetPassword")
  .post(passwordResetToken)
  .patch(passwordResetTokenVerify);

router.route("/logout").get(auth, logout);

module.exports = router;
