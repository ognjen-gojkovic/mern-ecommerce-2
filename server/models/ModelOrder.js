const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    cartItems: [
      {
        _id: String,
        title: String,
        price: Number,
        count: Number,
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", OrderSchema);
