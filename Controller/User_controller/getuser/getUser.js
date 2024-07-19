const { getUserById } = require("../../../services/userServices/getUserById");
const handleResponse = require("../../../shared/handleResponse/handleResponse");

const getSingleUserById = async (req, res) => {
  try {
    
    const user = await getUserById(req.params.id);
    
    if (!user) {
      return handleResponse(res, 404, "User not found");
    }

    return handleResponse(res, 200, "User retrieved successfully", user);
  } catch (error) {
    console.log(error);
    return handleResponse(res, 500, "Internal Server Error");
  }
};

module.exports = {
  getSingleUserById,
};
