const Order = require("../modules/order");
const Product = require("../modules/product");
exports.getAllOrders = async (req, res, next) => {
  try {
    const fields = req.query?.fields?.split(",").join(" ");

    // search
    const excludeFields = ["fields", "limit", "sort", "page"];
    let searchQuery = { ...req.query };
    console.log(searchQuery);
    excludeFields.forEach((e) => {
      delete searchQuery[e];
    });

    Object.keys({ ...searchQuery }).forEach((k) => {
      searchQuery[k] = {
        $regex: new RegExp(`\\b\\w*${searchQuery[k]}\\w*\\b`, "gi"),
      };
    });

    const sort = req.query?.sort?.split(",").join(" ");
    const limit = req.query?.limit || 10;
    const page = req.query?.page * 1 > 0 ? req.query?.page * 1 : 1;

    const query = Order.find({ ...searchQuery })
      .select(fields)
      .sort(sort)
      .populate({
        path: "products.id",
        model: Product,
        select: "name price img",
      })
      .limit(limit)
      .skip((page - 1) * limit)
      .sort("-_id");
    const orders = await query;
    const count = await Order.countDocuments({ ...searchQuery });

    // const orders = await Order.find({}).populate({
    //   path: "products.id",
    //   model: Product,
    //   select: "name price img",
    // });
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
      totalP: req.body.orderP,
    };
    const newOrder = new Order(orderToAdd);
    const result = await newOrder.save();

    res.json({ status: "success", result });
  } catch (err) {
    console.log(err.message);
    next(err);
  }
};
exports.updateOrder = async (req, res) => {
  const id = req.params.id;
  const { status } = req.body;
  if (!(await Order.findByIdAndUpdate(id, { status }, { runValidators: true })))
    return res.status(404).json({ status: "fail", message: "Order not found" });
  res.json({ status: "success", message: "Order updated" });
};
exports.getOrder = async (req, res) => {
  const id = req.params.id;
  const order = await Order.findById(id);
  if (!order)
    return res.status(404).json({ status: "fail", message: "Order not Found" });
  res.json({
    status: "success",
    order: order,
  });
};
