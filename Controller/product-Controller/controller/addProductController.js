const {
  createProduct,
} = require("../../../services/productServices/createProduct");
const handleResponse = require("../../../shared/handleResponse/handleResponse");

// Controller function to handle POST request for creating a new product
const addProductController = async (req, res) => {
  try {
    const imagesName = req?.files?.map((item) => item.filename);
    const { productName, price, userId} = req.body;
    const newProduct = await createProduct(
      productName,
      imagesName,
      price,
      userId   
    );
    handleResponse(res, 201, "create product successfully", newProduct);
  } catch (err) {
    console.log(err);
    handleResponse(res, 400, "error in creatinng prodcut ", {
      message: err.message,
    });
  }
};

module.exports = {
  addProductController,
};
