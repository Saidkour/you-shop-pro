require("dotenv").config(); // Add this line if you're using a .env file
const mongoose = require("mongoose");

const uri = process.env.DATABASE;
if (!uri) {
  throw new Error("DATABASE is not set in .env file");
}
mongoose
  .connect(uri)
  .then(() => {
    console.log(`Database connected`);
  })
  .catch(() => console.log(`Database not connected`));

module.exports = mongoose;
