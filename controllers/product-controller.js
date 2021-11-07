const fs = require("fs");
const path = require("path");

const productos = require("../servicesControllers/productsServices");
const db = require("../database/models")

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const controllerProducts = {
    productos: (req, res) => {
        const allProducts = productos.findAllProducts();
        res.render("productos", { allProducts });
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    productDetail: (req, res) => {
        const productoFiltrado = productos.findOnlyOneById(req.params.id);
        res.render("indexProdDetail", { productoFiltrado });
    },

    //Vista para crear nuevo producto
    nuevoProducto: (req, res) => {
        res.render("crearProducto");
    },

    crearNuevoProducto: (req, res) => {
        productos.createOne(req.body, req.file);
        res.redirect("/productos");
    },

    //Ya esta funcionando em servicios pero comentado hasta poder probarlo un poquito mas.
    // crearNuevoProducto: (req, res) => {
    //     const biggestProduct = productos[productos.length - 1];
    //     const lastProductId = productos.length > 0 ? biggestProduct.id : 1;
    //     const producto = {
    //         id: lastProductId + 1,
    //         ...req.body,
    //         img: "/img/products/" + req.file.filename,
    //         price: Number(req.body.price),
    //     };
    //     productos.push(producto);
    //     fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 4));
    //     res.redirect("/productos");
    //     console.log(req.body);
    // },

    //Encuentra producto a editar producto
    //Modificar producto producto Get
    modificarProducto: (req, res) => {
        const productoFiltradoEdit = productos.findOnlyOneById(req.params.id);
        res.render("modificarProducto", { productoFiltradoEdit });
    },
    updateNewProduct: (req, res) => {
        productos.editOneProduct(req.params.id, req.body); //req.file

        res.redirect("/productos");
    },

    delete: (req, res) => {

        //db.

        productos.deleteOneProduct(req.params.id);

        res.redirect("/");
    },
};

module.exports = controllerProducts;
