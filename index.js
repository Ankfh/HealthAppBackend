const express = require("express");
const cors = require("cors");
require("dotenv").config();

const path = require("path");
const fileupload = require("express-fileupload");

//routers
const mainRouter = require("./Routes/routers");

const connectDB = require("./db");
const multer = require("multer");
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use("/public", express.static(path.join(__dirname, "/public")));
// app.use(express.static(path.join(__dirname, 'build')));

app.use("/", mainRouter);

const port = process.env.PORT || 5002;
app.listen(port, () => {
  console.log(`server is running 0n localhost:${port}`);
});
