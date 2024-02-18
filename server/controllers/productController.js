const Product = require("../modules/product");
const AppError = require("../utils/AppError");
const productArray = require("../../data/db");

exports.getProducts = async (req, res, next) => {
  try {
    const fields = req.query.fields?.split(",").join(" ") ?? {};

    const excludeKeys = ["sort", "fields", "limit", "page"];
    let queryString = { ...req.query };
    excludeKeys.map((e) => delete queryString[e]);

    queryString = JSON.parse(
      JSON.stringify(queryString)
        .replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)
        .replace(
          /"~(\w+)":"((\w+\s*)+)"/g,
          '"$1": { "$regex": ".*$2.*", "$options": "i" }'
        )
    );

    let query;
    let count;

    if (req.query.sort === "random") {
      query = Product.aggregate([
        {
          $addFields: {
            id: "$_id",
          },
        },
        {
          $project: {
            _id: 0,
            id: 1,
            name: 1,
            price: 1,
            img: 1,
            category: 1,
          },
        },
        { $sample: { size: 4 } },
      ]);
      count = 4;
    } else {
      query = Product.find(queryString).select(fields).select("-__v");
      count = await Product.find(queryString).countDocuments();

      if (req.query.sort) {
        const sort = req.query.sort.split(",").join(" ");
        query = query.sort(sort);
      }

      if (req.query.page) {
        query = query.skip(req.query.page - 1 * req.query.limit);
      }

      if (req.query.limit) {
        query = query.limit(req.query.limit);
      }
    }

    let products = await query;
    // console.log(products);

    res.json({
      status: "success",
      length: count,
      products,
    });
  } catch (err) {
    next(err);
  }
};

exports.addManyProducts = async (req, res, next) => {
  try {
    if (!Array.isArray(productArray)) {
      throw new Error("Products data is not an array");
    }

    const result = await productArray.map(async (p) => {
      return await Product.create(p);
    });

    res.status(201).json({
      status: "success",
      result,
    });
  } catch (err) {
    next(err);
  }
};

exports.getOneProduct = async (req, res, next) => {
  try {
    const product = await Product.find({ _id: req.params.id }).select("-__v");
    res.status(200).json({
      status: "success",
      product,
    });
  } catch (err) {
    next(err);
  }
};
