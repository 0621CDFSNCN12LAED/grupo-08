const fs = require("fs");
const path = require("path");

const productos = require("../servicesControllers/productsServices");

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
    //Encuentra producto a editar producto
    //Modificar producto producto Get
    modificarProducto: (req, res) => {
        const productoFiltradoEdit = productos.findOnlyOneById(req.params.id);
        res.render("modificarProducto", { productoFiltradoEdit });
    },
    //Modificar producto producto Post
    updateNewProduct: (req, res) => {
        productos.editOneProduct(req.params.id, req.body); //req.file

        res.redirect("/productos");
    },

    nuevoProducto: (req, res) => {
        res.render("crearProducto");
    },

    // Crea nuevos produtos. Aún no solucione que cargue imagenes.
    crearNuevoProducto: (req, res) => {
        const productId = productos.length;
        const producto = {
            id: productId + 1,
            ...req.body,
        };
        productos.push(producto);
        fs.writeFileSync(productsFilePath, JSON.stringify(productos));
        res.redirect("/productos");
        console.log(req.body);
    },

    delete: (req, res) => {
        productos.deleteOneProduct(req.params.id);

        res.redirect("/");
    },
};

module.exports = controllerProducts;
