const {
  createAppointment,
} = require("../../services/AppointmentServices/createAppointment");
const {
  getUserDetailsByUserId,
} = require("../../services/userServices/getUserDetailByUserId");
const handleResponse = require("../../shared/handleResponse/handleResponse");

const CreateAppointmentController = async (req, res) => {
  try {
    // Destructure request body
    const { userId, date, time, reason } = req.body;

    // Validate input
    if (!userId || !date) {
      return handleResponse(res, 400, "Missing required fields");
    }

    // Fetch user details
    const userDetails = await getUserDetailsByUserId(userId);

    if (!userDetails) {
      return handleResponse(res, 404, "User details not found");
    }

    // Prepare appointment data
    const appointmentData = {
      userId,
      userDetailId: userDetails._id,
      appointmentDate: date,
      appointmentTime: time,
      reason,
      // Include other fields as necessary
    };
    const responseData = await createAppointment(appointmentData);
    return handleResponse(
      res,
      201,
      "Appointment created successfully",
      responseData
    );
  } catch (error) {
    console.error("Error in CreateAppointmentController:", error.message);
    return handleResponse(res, 500, "Internal Server Error", {
      message: error.message,
    });
  }
};

module.exports = {
  CreateAppointmentController,
};
