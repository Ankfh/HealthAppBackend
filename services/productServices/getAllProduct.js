const { Product } = require("../../Models/productModel/productModel");

const getAllProduct = async (query, page, limit) => {
  try {
    const skip = (page - 1) * limit;
    const results = await Product.find(query)
      .sort({ created: -1 })
      .skip(skip)
      .limit(limit)
      .populate("userId")
      .exec();
    return results;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  getAllProduct,
};
