const userModel = require("../../Models/userModels/userModel");

const getUserById = async (id) => {
    try {
        const existingUser = await userModel.findById(id);
        return existingUser;
      } catch (error) {
        console.log(error.message, "Error getting user by ID");
        throw new Error("Error retrieving user");
      }
};

/////
module.exports = {
  getUserById,
};
