const { Product } = require("../../Models/productModel/productModel");

// Service function to create a new product
const createProduct = async (productName, imagesName, price, userId) => {
  try {
    const newProduct = new Product({
      productName,
      imagesName,
      price,
      userId,
    });
    return await newProduct.save();
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  createProduct,
};
