const mongoose = require("mongoose");
const handleResponse = require("../../../shared/handleResponse/handleResponse");
const UserDetails = require("../../../Models/userModels/userDetailsModel");

const AddUserDetails = async (req, res) => {
  try {
    const userDetailsData = req.body.data;

    const newUserDetails = new UserDetails(userDetailsData);

    await newUserDetails.save();

    // Return a success response
    return handleResponse(
      res,
      200,
      "User details added successfully",
      newUserDetails
    );
  } catch (error) {
    console.error(error);
    // Check if the error is a Mongoose validation error
    if (error.name === "ValidationError") {
      return handleResponse(res, 400, "Validation Error", error.errors);
    } else {
      // Handle general errors
      return handleResponse(res, 500, "Internal Server Error", error.message);
    }
  }
};

module.exports = {
  AddUserDetails,
};
