const UserDetails = require("../../Models/userModels/userDetailsModel");

const getUserDetailsById = async (id) => {
  try {
    const userDetails = await UserDetails.findById(id).populate('userId');
    if (!userDetails) {
      throw new Error("UserDetails not found");
    }
    return userDetails;
  } catch (error) {
    throw new Error(`Error getting UserDetails: ${error.message}`);
  }
};

module.exports = {
  getUserDetailsById,
};
