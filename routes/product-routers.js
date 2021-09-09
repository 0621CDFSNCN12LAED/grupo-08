const express = require("express");
const router = express.Router();
const controlladorProductos = require("../controllers/product-controller");

router.get("/productos", controlladorProductos.productos);

router.get("/productCart", controlladorProductos.productCart);

router.get("/productDetail/:id", controlladorProductos.productDetail);

router.get("/administarProductos", controlladorProductos.administrarProductos);

module.exports = router;
