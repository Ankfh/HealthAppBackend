const { registerUser } = require("./Services/ResgisterUser");
const { getSingleUserById } = require("./getuser/getUser");
const { LoginController } = require("./login/controller/LoginController");

module.exports = {
  registerUser,
  LoginController,
  getSingleUserById
};
