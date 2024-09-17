// Load environment variables
require("dotenv").config();
const mongoose = require("mongoose");

// Retrieve the database URI from environment variables or use a default value
const uri =
  process.env.DATABASE_PROD ||
  "mongodb+srv://saidkourbisse:uPx2ENOND3bqUmj7@cluster0.3yaac.mongodb.net/?retryWrites=true&w=majority";

// Log the database URI (ensure sensitive data is not exposed in production logs)
console.log("Database URI:", uri);

// Check if the URI is provided
if (!process.env.DATABASE_PROD) {
  console.error("DATABASE_PROD environment variable is not set.");
  throw new Error("DATABASE_PROD is not set in environment variables.");
}

// Connect to the database
mongoose
  .connect(uri)
  .then(() => {
    console.log("Database connected");
  })
  .catch((error) => {
    console.error("Database connection error:", error.message);
    console.error(error);
  });

module.exports = mongoose;
