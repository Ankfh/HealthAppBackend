const express = require("express");
const { CreateAppointmentController } = require("../../Controller/Appointment-controller/CreateAppointment.controller");
const appointmentRouter = express.Router();


appointmentRouter.post("/add", CreateAppointmentController);

module.exports = appointmentRouter;
