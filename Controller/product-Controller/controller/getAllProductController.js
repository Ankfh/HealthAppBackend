const {
  getAllProduct,
} = require("../../../services/productServices/getAllProduct");
const handleResponse = require("../../../shared/handleResponse/handleResponse");

const getAllProductController = async (req, res) => {
  const page = parseInt(req?.query?.page) || 1;
  const limit = parseInt(req?.query?.limit) || 10;

  try {
    const allProducts = await getAllProduct({}, page, limit);
    console.log(req.query, "bopdy");
    console.log(allProducts, "bopdy");
    handleResponse(res, 200, "Products retrieved successfully", allProducts);
  } catch (err) {
    console.error("Error fetching products:", err);
    handleResponse(res, 500, "Error retrieving products", {
      message: err.message,
    });
  }
};

module.exports = {
  getAllProductController,
};
