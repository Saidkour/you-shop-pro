exports.errorHandler = (err, req, res, next) => {
  if (process.env.ENV === "development") {
    if (err.name === "CastError") {
      res.status(400).json({ status: "error", message: "Invalid ID" });
    } else if (err.name === "ValidationError") {
      res.status(400).json({ status: "error", message: err.message });
    } else if (err.name === "JsonWebTokenError") {
      res.status(401).json({ status: "error", message: "Unauthorized" });
    } else if (err.name === "TokenExpiredError") {
      res.status(401).json({ status: "error", message: "Token expired" });
    } else if (err.name === "MongoServerError" && err.code === 11000) {
      res
        .status(409)
        .json({ status: "error", message: "Duplicate field value" });
    } else {
      res.status(500).json({ status: "error", message: err.message, err });
    }
  } else if (process.env.ENV === "production") {
    if (err.name === "CastError") {
      res.status(400).json({ status: "error", message: "Invalid ID" });
    } else if (err.name === "ValidationError") {
      res.status(400).json({ status: "error", message: "Bad Request" });
    } else if (err.name === "JsonWebTokenError") {
      res.status(401).json({ status: "error", message: "Unauthorized" });
    } else if (err.name === "TokenExpiredError") {
      res.status(401).json({ status: "error", message: "Token expired" });
    } else if (err.name === "MongoServerError" && err.code === 11000) {
      res
        .status(409)
        .json({ status: "error", message: "Duplicate field value" });
    } else {
      res
        .status(500)
        .json({ status: "error", message: "Something went very wrong" });
    }
  }
};
