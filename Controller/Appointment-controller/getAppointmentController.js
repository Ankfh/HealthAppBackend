const { getAppointmentsByUserId } = require("../../services/AppointmentServices/getAppointment");
const handleResponse = require("../../shared/handleResponse/handleResponse");

const getAppointmentsByUserIdController = async (req, res) => {
    try {
      const appointments = await getAppointmentsByUserId(req.params.id);
  
      if (!appointments || appointments.length === 0) {
        return handleResponse(res, 404, "No appointments found for this user");
      }
  
      return handleResponse(res, 200, "Appointments retrieved successfully", appointments);
    } catch (error) {
      console.log(error);
      return handleResponse(res, 500, "Internal Server Error");
    }
  };
  
  module.exports = {
    getAppointmentsByUserIdController,
  };