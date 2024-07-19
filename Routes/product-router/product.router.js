const express = require("express");
const { addProductController } = require("../../Controller/product-Controller/controller/addProductController");
const upload = require("../../middleware/multer/uploadMultifiles");
const { getAllProductController } = require("../../Controller/product-Controller/controller/getAllProductController");
const productRouter = express.Router();
productRouter.post("/add",upload('images',5) , addProductController);
productRouter.get("/all", getAllProductController);

module.exports = productRouter;
