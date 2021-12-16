const express = require("express");
// const { diskStorage } = require("multer");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const controlladorProductos = require("../controllers/product-controller");
const productControllerAPI = require("../controllers/productController-api");

/* Middlewares */

const authUserMiddleware = require("../middlewares/authUserMiddleware");
const validacionMensaje = require("../middlewares/msgValidationErrorProduct");
const upload = require("../middlewares/productMulter");

// Ver todos los productos
router.get("/productos", controlladorProductos.productos);

// Busqueda productos
router.get("/productos/search", controlladorProductos.search);

// carrito del producto
router.get("/productCart", controlladorProductos.productCart);

//detalle del producto
router.get("/productDetail/:id", controlladorProductos.productDetail);

// crear un producto
router.get(
    "/crearProducto",
    authUserMiddleware,
    controlladorProductos.nuevoProducto
);
router.post(
    "/views/productos",
    authUserMiddleware,
    upload.single("images"),
    validacionMensaje,
    controlladorProductos.crearNuevoProducto
);

// modificar un producto
router.get(
    "/modificarProducto/:id",
    authUserMiddleware,
    controlladorProductos.modificarProducto
);
router.put(
    "/:id",
    authUserMiddleware,
    upload.single("images"),
    validacionMensaje,
    controlladorProductos.updateNewProduct
);

//borrar un producto
router.delete("/:id", authUserMiddleware, controlladorProductos.delete);

//Rutas API
//All products
router.get("/list", productControllerAPI.listProducts);

router.get("/list/search", productControllerAPI.search);
//Product by id
router.get("/list/:id", productControllerAPI.detailProduct);

//Create product
router.post("/list", productControllerAPI.store);

//Delete product
router.delete("/list/:id", productControllerAPI.delete);

module.exports = router;
