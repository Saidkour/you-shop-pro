const express = require("express");
const productsRouter = require("./routes/products");
const orderRouter = require("./routes/order");
const cors = require("cors");
const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://you-shop-ecom.netlify.app",
  "https://you-shop-pro.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (e.g. mobile apps, curl requests)
      if (!origin) return callback(null, true);
      if (allowedOrigins.indexOf(origin) === -1) {
        const msg =
          "The CORS policy for this site does not allow access from the specified origin.";
        return callback(new Error(msg), false);
      }
      return callback(null, true);
    },
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
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
