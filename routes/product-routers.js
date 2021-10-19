const express = require("express");
// const { diskStorage } = require("multer");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const controlladorProductos = require("../controllers/product-controller");
const upload = require("../middlewares/productMulter");

// Ver todos los productos
router.get("/productos", controlladorProductos.productos);

// carrito del producto
router.get("/productCart", controlladorProductos.productCart);

//detalle del producto
router.get("/productDetail/:id", controlladorProductos.productDetail);

// crear un producto
router.get("/crearProducto", controlladorProductos.nuevoProducto);
router.post(
    "/views/productos",
    upload.single("img"),
    controlladorProductos.crearNuevoProducto
);

// modificar un producto
router.get("/modificarProducto/:id", controlladorProductos.modificarProducto);
router.put(
    "/:id",
    upload.single("img"),
    controlladorProductos.updateNewProduct
);

//borrar un producto
router.delete("/:id", controlladorProductos.delete);

module.exports = router;
