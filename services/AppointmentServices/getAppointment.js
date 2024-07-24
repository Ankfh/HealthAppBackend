const Appointment = require("../../Models/Appointment/appointmentModel");

const getAppointmentsByUserId = async (userId) => {
    try {
      const appointments = await Appointment.findOne({ userId }).populate('userDetailId').exec();
      return appointments;
    } catch (error) {
      throw new Error(`Unable to retrieve appointments: ${error.message}`);
    }
  };
  
  module.exports = {
    getAppointmentsByUserId,
  };