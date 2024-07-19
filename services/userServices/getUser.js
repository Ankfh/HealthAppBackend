const userModel = require("../../Models/userModels/userModel");

const getUserByEmail = async (email) => {
  try {
    const existingUser = await userModel.findOne({ email: email });
    return existingUser ? existingUser : null;
  } catch (error) {
    console.log(error, "error getting user by email");
  }
};

/////
module.exports = {
  getUserByEmail,
};
