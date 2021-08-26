const Products = require("../models/ModelProducts");

const controllerProducts = {
  getProducts: async (req, res) => {
    try {
      const products = await Products.find({});

      return res.status(200).json({ success: true, products });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error.message });
    }
  },

  postProduct: async (req, res) => {
    try {
      const newProduct = req.body;
      const doc = await Products.create(newProduct);

      return res.status(200).json({ success: true, product: doc });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error.message });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const productID = req.params.id;
      const product = await Products.findByIdAndDelete({ _id: productID });

      return res.status(200).json({ success: true, product });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error.message });
    }
  },
};

module.exports = controllerProducts;
