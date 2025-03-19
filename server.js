// backend/server.js
require("dotenv").config();  // Load environment variables from .env
const express = require("express");
const { connectDatabase, getConnection } = require("./database");

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDatabase();

// Define a simple home route to check DB status
app.get("/", (req, res) => {
  res.send(`Welcome to the server. Database Connection Status: ${getConnection()}`);
});

// Define PORT from environment variables or default to 3000
const PORT = process.env.PORT || 10000;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
