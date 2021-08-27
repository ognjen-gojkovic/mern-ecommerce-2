const Order = require("../models/ModelOrder");
const Products = require("../models/ModelProducts");

const orderController = {
  postOrder: async (req, res) => {
    try {
      if (
        !req.body.name ||
        !req.body.email ||
        !req.body.address ||
        !req.body.total ||
        !req.body.cartItems
      ) {
        return res
          .status(400)
          .json({ success: false, msg: "All input fields are required!" });
      }

      const order = await Order.create(req.body);

      res.status(200).json({ success: true, order });
    } catch (error) {
      return res.status(500).json({ success: false, msg: error.msg });
    }
  },
};

module.exports = orderController;
