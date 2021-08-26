const express = require("express");
const router = express.Router();

const controllerProducts = require("../controllers/ControllerProducts");

router.route("/").get(controllerProducts.getProducts);
router.route("/").post(controllerProducts.postProduct);
router.route("/:id").delete(controllerProducts.deleteProduct);

module.exports = router;
