require("dotenv").config(); // Add this line if you're using a .env file
const mongoose = require("mongoose");

const uri = process.env.DATABASE_PROD;
// if (!uri) {
//   throw new Error("DATABASE is not set in .env file");
// }
mongoose
  .connect(
    "mongodb+srv://saidkourbisse:uPx2ENOND3bqUmj7@cluster0.3yaac.mongodb.net/"
  )
  .then(() => {
    console.log(`Database connected`);
  })
  .catch(() => console.log(`Database not connected`));

module.exports = mongoose;
