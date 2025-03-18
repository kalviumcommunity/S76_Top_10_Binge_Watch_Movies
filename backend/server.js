// Load environment variables from .env file
require("dotenv").config();

const express = require("express");
const { connectDatabase, getConnection } = require("./database");

// Initialize Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDatabase();

// Define a simple home route to check DB status
app.get("/", async (req, res) => {
  res.send(`Database Connection Status: ${getConnection()}`);
});
  // This should print the URI correctly.

// Add a simple ping-pong route to test server health
app.get("/ping", (req, res) => {  
  res.send("pong");
});

// Define PORT from environment variables or default to 3000
const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});
