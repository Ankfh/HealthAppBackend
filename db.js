const mongoose = require("mongoose");

// const URI = "mongodb://localhost:27017";

const connectDB = async (req, res) => {
  try {
    // mongoose.set("useUnifiedTopology", true);
    const conn = await mongoose.connect(process.env.LOCAL_URI);

    console.log(`MongoDB connected:`);
  } catch (error) {
    return console.log(error);
  }
};

module.exports = connectDB;
