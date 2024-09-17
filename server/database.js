const mongoose = require("mongoose");
require('dotenv').config();
const uri =
  process.env.DATABASE_PROD ||
  "mongodb+srv://saidkourbisse:uPx2ENOND3bqUmj7@cluster0.3yaac.mongodb.net/?retryWrites=true&w=majority";
console.log(uri);
if (!uri) {
  throw new Error("DATABASE is not set in .env file");
}
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log(`Database connected`);
  })
  .catch(() => console.log(`Database not connected`));
module.exports = mongoose;
