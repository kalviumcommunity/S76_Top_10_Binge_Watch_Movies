const mongoose = require("mongoose");

// Function to connect to the MongoDB database
const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI );
    console.log("MongoDB Connected Successfully ✅");
  } catch (error) {
    console.error(`MongoDB Connection Failed ❌: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};

// Function to get the connection status
const getConnection = () => {
  return mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
};

// Export the functions
module.exports = { connectDatabase, getConnection };
