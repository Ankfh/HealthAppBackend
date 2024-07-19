const User = require("../../../Models/userModels/userModel");
const { getUserByEmail } = require("../../../services/userServices/getUser");
const handleResponse = require("../../../shared/handleResponse/handleResponse");

////////////////
///.............................................
const registerUser = async (req, res) => {
  try {
    console.log(req.body);
    const userData = req.body.data;
    const existingUser = await getUserByEmail(userData.email);
    if (existingUser) {
      return handleResponse(
        res,
        409,
        "Email already exists",
        null,
        "emailError"
      );
    }
    const newData = {
      userName: userData.name,
      email: userData.email,
      password: userData.password,
    };
    const user = new User(newData);
    await user.save();
    const userResponse = user.toObject();
    delete userResponse.password;
    return handleResponse(res, 201, "SignUp successfully",userResponse);
  } catch (error) {
    console.log(error);
    return handleResponse(res, 500, error.message);
  }
};

module.exports = {
  registerUser,
};
