const express = require("express");
const router = express.Router();

const controllerOrders = require("../controllers/ControllerOrders");

router.route("/").get(controllerOrders.getOrder);
router.route("/").post(controllerOrders.postOrder);
router.route("/:id").delete(controllerOrders.deleteOrder);

module.exports = router;
