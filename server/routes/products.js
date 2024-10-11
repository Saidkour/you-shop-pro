const express = require("express");
const productController = require("../controllers/productController");
const { auth } = require("../controllers/usersController");
const router = express.Router();

router
  .route("/")
  .get(productController.getProducts)
  .post(auth, productController.addManyProducts);

router.route("/:id").get(productController.getOneProduct);

module.exports = router;
