const express = require("express");
const router = express.Router();
const controlladorProductos = require("../controllers/product-controller");

// Ver todos los productos 
router.get("/productos", controlladorProductos.productos);


// carrito del producto
router.get("/productCart", controlladorProductos.productCart);


//detalle del producto
router.get("/productDetail/:id", controlladorProductos.productDetail);


// crear un producto
router.get("/crearProducto", controlladorProductos.nuevoProducto);
router.post("/views/productos", controlladorProductos.crearNuevoProducto)


// modificar un producto
router.get("/modificarProducto", controlladorProductos.modificarProducto);


//borrar un producto

module.exports = router;
