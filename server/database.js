const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://saidkourbisse:uPx2ENOND3bqUmj7@cluster0.3yaac.mongodb.net/"
  )
  .then(() => {
    console.log(`Database connected`);
  })
  .catch(() => console.log(`Database not connected`));

module.exports = mongoose;
