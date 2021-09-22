const express = require("express");
const { diskStorage } = require("multer");
const router = express.Router();
const multer = require('multer');
const path = require("path");
// const path = require("path/posix");   //lo comente porque no se que es, me da error y creo que se instalo solo.
const controlladorProductos = require("../controllers/product-controller");


var storage = multer.diskStorage({
    destination: function(req,file,cb){
cb(null, path.join(__dirname,'../public/img/products'));
    },
    filename: function (req,file,cb) {
        const newFilename = 'NuevoProducto-' + Date.now() + path.extname(file.originalname) ;
        cb(null, newFilename);
    }
})
const upload = multer({ storage : storage });

      
// Ver todos los productos
router.get("/productos", controlladorProductos.productos);

// carrito del producto
router.get("/productCart", controlladorProductos.productCart);

//detalle del producto
router.get("/productDetail/:id", controlladorProductos.productDetail);

// crear un producto
router.get("/crearProducto", controlladorProductos.nuevoProducto);
router.post("/views/productos", upload.single('img'), controlladorProductos.crearNuevoProducto);

// modificar un producto
router.get("/modificarProducto/:id", controlladorProductos.modificarProducto);
router.put("/:id", controlladorProductos.updateNewProduct);

//borrar un producto
router.delete("/:id", controlladorProductos.delete);

module.exports = router;
