// backend/database.js
const mongoose = require("mongoose");
require("dotenv").config();  // Ensure this loads the .env file correctly

const connectDatabase = async () => {
    const mongoUri = process.env.MONGODB_URI;  // Get Mongo URI from environment variables

    if (!mongoUri) {
        console.error('❌ MONGODB_URI is not defined in environment variables.');
        process.exit(1);  // Exit the application if MONGODB_URI is missing
    }

    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`✅ MongoDB Connected: ${mongoose.connection.host}`);
    } catch (error) {
        console.error(`❌ Database connection failed: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
};

const getConnection = () => {
    return mongoose.connection.readyState === 1 ? "Connected" : "Not Connected";
};

module.exports = { connectDatabase, getConnection };
