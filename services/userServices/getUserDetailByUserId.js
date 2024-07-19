const { default: mongoose } = require('mongoose');
const UserDetails = require('../../Models/userModels/userDetailsModel');


const getUserDetailsByUserId = async (userId) => {
  try {
    // Validate userId (assuming it's an ObjectId)
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new Error('Invalid user ID');
    }

    const userDetails = await UserDetails.findOne({ userId }).exec();
    if (!userDetails) {
      throw new Error('User details not found');
    }

    return userDetails;
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = {
  getUserDetailsByUserId,
};
