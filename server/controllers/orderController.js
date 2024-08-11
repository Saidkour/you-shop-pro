const Order = require("../modules/order");
const Product = require("../modules/product");
exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await Order.find({}).populate({
      path: "products.id",
      model: Product,
      select: "name price img",
    });
    res.json({ status: "success", orders });
  } catch (err) {
    next(err);
  }
};
exports.addOrder = async (req, res, next) => {
  try {
    const orderToAdd = {
      user: {
        email: req.body.user.email,
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        companyName: req.body.user.companyName,
        country: req.body.user.country,
        address: req.body.user.address,
        apartment: req.body.user.apartment,
        city: req.body.user.city,
        zip: req.body.user.zip,
        phone: req.body.user.phone,
        notes: req.body.user.notes,
      },
      products: req.body.order,
    };
    const newOrder = new Order(orderToAdd);
    const result = await newOrder.save();
    console.log(result);

    res.json({ status: "success", result });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};
