const express = require("express");
const productsRouter = require("./routes/products");
const orderRouter = require("./routes/order");
const cors = require("cors");
const app = express();

app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use("/products", productsRouter);
app.use("/orders", orderRouter);



app.use((err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";
  if (process.env.ENV === "developpment") {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
      error: err,
    });
  } else if (process.env.ENV === "production") {
    res.status(err.statusCode).json({
      status: err.status,
      message: "There was an error",
    });
  }
});

module.exports = app;
