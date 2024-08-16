const mongoose = require("mongoose");
require("dotenv").config();

const mongoURL = process.env.mongoURL;

// Configure connection options
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  connectTimeoutMS: 10000, // 10 seconds for connection timeout
  socketTimeoutMS: 45000,  // 45 seconds for socket timeout
};

// Connect to MongoDB
const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://muralideva443:murali477@cluster0.j9eaa.mongodb.net/Notes-Application");
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process if connection fails
  }
};

// Call the connection function
connectToDatabase();

module.exports = {
  mongoose,
};
