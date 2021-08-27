const express = require("express");
const router = express.Router();

const controllerOrders = require("../controllers/ControllerOrders");

router.route("/").post(controllerOrders.postOrder);

module.exports = router;
