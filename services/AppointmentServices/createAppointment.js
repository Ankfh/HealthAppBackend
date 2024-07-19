const Appointment = require("../../Models/Appointment/appointmentModel");

const createAppointment = async (appointmentData) => {
  try {
    const appointment = new Appointment(appointmentData);
    await appointment.save();
    return appointment;
  } catch (error) {
    throw new Error(`Error creating appointment: ${error.message}`);
  }
};

module.exports = {
  createAppointment,
};
