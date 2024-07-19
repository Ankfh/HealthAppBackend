const { getUserByEmail } = require("../../../../services/userServices/getUser");
const handleResponse = require("../../../../shared/handleResponse/handleResponse");
const { checkPassword } = require("../validator/checkPassword");

const LoginController = async (req, res) => {
  try {
    const { email, password } = req.body.data;
    console.log(req.body, "req.bosyyyyyyyyy");
    const user = await getUserByEmail(email);
    if (!user) {
      return handleResponse(res, 404, "Email not found", null, "emailError");
    }
    const isCorrect = checkPassword(user, password);
    if (!isCorrect) {
      return handleResponse(
        res,
        401,
        "Password incorrect",
        null,
        "passwordError"
      );
    }
    return handleResponse(res, 201, "Login successfully", user);
  } catch (error) {
    console.log(error);
    return handleResponse(res, 500, error.message);
  }
};

module.exports = {
  LoginController,
};
