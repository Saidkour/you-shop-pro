const express = require("express");
const productsRouter = require("./routes/products");
const orderRouter = require("./routes/order");
const userRouter = require("./routes/user");
const cors = require("cors");
const path = require("path");
const { errorHandler } = require("./controllers/errorController");
const app = express();
const helmet = require("helmet");
const xss = require("xss-clean");
const hpp = require("hpp");
const cookieParser = require("cookie-parser");

// Protect against HTTP Parameter Pollution
app.use(hpp());
app.use(cookieParser());

// Prevent Cross-Site Scripting Attacks
app.use(xss());

// Trust first proxy (this is required for production deployments, especially on platforms like Vercel or Heroku)
app.set("trust proxy", 1);
// Security Headers with Helmet
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        frameSrc: ["'self'", "https://www.google.com", "http://localhost:8000"],
      },
    },
    frameguard: { action: "deny" }, // Prevent Clickjacking
    hsts: {
      maxAge: 31536000, // 1 year
      includeSubDomains: true,
      preload: true,
    },
    noSniff: true, // Prevent MIME type sniffing
    xssFilter: true, // Enable cross-site scripting filter
  })
);

const allowedOrigins = [
  "http://localhost:5173",
  "http://192.168.1.104:3000",
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
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World");
});
app.use("/products", productsRouter);
app.use("/orders", orderRouter);
app.use(`/user`, userRouter);

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
app.use(
  express.static(path.resolve(__dirname, "../dist"), {
    maxAge: "1y", // Cache assets for 1 year
    etag: false, // Disable etag for simplicity
  })
);
app.use(errorHandler);

module.exports = app;
