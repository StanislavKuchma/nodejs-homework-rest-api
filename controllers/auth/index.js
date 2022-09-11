const register = require("./register");
const login = require("./login");
const logout = require("./logout");
const current = require("./current");
const updateAvatar = require("./updateAvatar");
const verifyEmail = "./verifyEmail.js";
const resendVerifyEmail = "./resendVerifyEmail.js";

module.exports = {
  register,
  login,
  logout,
  current,
  updateAvatar,
  verifyEmail,
  resendVerifyEmail,
};
