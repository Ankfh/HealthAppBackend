const express = require("express");
const userRouter = express.Router();

const {
  registerUser,
  LoginController,
  getSingleUserById
} = require("../../Controller/User_controller/userController");
const { AddUserDetails } = require("../../Controller/User_controller/AddUserDetails/AddUserDetails");
LoginController;
userRouter.post("/register", registerUser);
userRouter.post("/login", LoginController);
userRouter.post("/detail", AddUserDetails);
userRouter.get("/get/:id", getSingleUserById);

module.exports = userRouter;
