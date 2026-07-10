const Product = require("../models/Product");

const createProduct = async (req, res) => {
  try {
    const { name, description, price, category, stock } = req.body;
    if (!name || !description || !price || !category || !stock) {
      return res
        .status(400)
        .json({ success: false, message: "All fileds  requied" });
    }

    const product = await Product.create({
      name,
      description,
      price,
      category,
      stock,
    });
    res.status(201).json({
      success: true,
      message: "Product added succesfully",
      data: product,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal  server  error!",
      error: error.message,
    });
  }
};

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).populate(
      "category",
      "name description",
    );

    res.status(200).json({
      success: true,
      count: products.length,
      data: products,
    });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { createProduct ,getProducts};
