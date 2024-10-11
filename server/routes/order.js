const express = require("express");

const {
  getAllOrders,
  addOrder,
  updateOrder,
  getOrder,
} = require("../controllers/orderController");
const { auth } = require("../controllers/usersController");

const router = express.Router();

router.route("/").get(auth, getAllOrders).post(addOrder);
router.route("/:id").get(auth, getOrder).patch(auth, updateOrder);
module.exports = router;
