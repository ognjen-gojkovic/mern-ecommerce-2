const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  price: Number,
  availableSizes: [String],
});

module.exports = mongoose.model("products", productsSchema);
