const express = require("express");
const { CreateAppointmentController } = require("../../Controller/Appointment-controller/CreateAppointment.controller");
const { getAppointmentsByUserIdController } = require("../../Controller/Appointment-controller/getAppointmentController");
const appointmentRouter = express.Router();


appointmentRouter.post("/add", CreateAppointmentController);
appointmentRouter.get("/get/:id", getAppointmentsByUserIdController);

module.exports = appointmentRouter;
