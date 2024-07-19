const express = require("express");
const userRouter = require("./userRoutes/user");
const productRouter = require("./product-router/product.router");
const appointmentRouter = require("./Appointment-routes/Appointment.route");
const router = express.Router();

//all routerss
router.use('/user',userRouter)
router.use('/product',productRouter)
router.use('/appointment',appointmentRouter)

module.exports = router;
