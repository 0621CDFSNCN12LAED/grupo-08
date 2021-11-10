const fs = require("fs");
const path = require("path");

const productos = require("../servicesControllers/productsServices");
const db = require("../database/models");
const {Op} = require("sequelize");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const controllerProducts = {
    //listado de productos,  aún no se ve la imagen.
    productos: (req,res) =>{
        db.Product.findAll()
        .then(function(allProducts){
            res.render("productos", {allProducts});
        })
    },

    search: async(req, res) =>{
        const titulo = req.query.titulo//.replace(new RegExp(`/[áéíóú]/g`), "_");
        const productos = await db.Product.findAll({
            where: {
                title: {
                    [Op.like]: `%${req.query.titulo}%`,
                }
            }
        });
        if(productos.length > 0){
            res.render("productos", {allProducts:productos})
        }else{
            res.render("productNotFound")
            console.log("No se encontró el producto");
            res.send("Error")
        }
        console.log(productos.length);
    },
    productCart: (req, res) => {
        res.render("productCart");
    },


//detalle de el producto, aún no se ve la imagen.
    productDetail: (req,res) =>{
        db.Product.findByPk(req.params.id)
        .then(function(producto){
            res.render("indexProdDetail", {productoFiltrado:productos})
        })
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

        db.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/');
    },
    //productos.deleteOneProduct(req.params.id);
};

module.exports = controllerProducts;
