//const fs = require("fs");
//const path = require("path");

const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/products"));
    },
    filename: function (req, file, cb) {
        const newFilename =
            "NuevoProducto-" + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    },
});
const upload = multer({ storage: storage });

module.exports = upload;

// const productos = require("../servicesControllers/productsServices");
const db = require("../database/models");

const { Op } = require("sequelize");
const Product = require("../database/models/Product");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const controllerProducts = {

    //Se ve imagen. La association "users" no tiene sentido, abria que asociarlo con categories.
    productos: (req, res) => {
        db.Product.findAll({ include: [{ association: "users" }] }).then(
            function (allProducts) {
                res.render("productos", { allProducts });
            }
        );
    },

    search: async (req, res) => {
        const titulo = req.query.titulo; //.replace(new RegExp(`/[áéíóú]/g`), "_");
        const productos = await db.Product.findAll({
            where: {
                title: {
                    [Op.like]: `%${req.query.titulo}%`,
                },
            },
        });
        if (productos.length > 0) {
            res.render("productos", { allProducts: productos });
        } else {
            res.render("productNotFound");
            console.log("No se encontró el producto");
            res.send("Error");
        }
        console.log(productos.length);
    },
    productCart: (req, res) => {
        res.render("productCart");
    },

    //detalle de el producto, aún no se ve la imagen.
    productDetail: (req, res) => {
        db.Product.findByPk(req.params.id).then(function (productos) {
            res.render("indexProdDetail", { productoFiltrado: productos });
        });
        //con async await, requerir todas las imagenes de un producto
    },

    //Vista para crear nuevo producto
    nuevoProducto: (req, res) => {
        res.render("crearProducto");
    },

    crearNuevoProducto: async (req, res) => {
        await db.Product.create({
            images: "/img/products/" + req.file.filename,
            title: req.body.title,
            productDescription: req.body.productDescription,
            sku: (Math.random()*10000000000), 

            //VIENDO LA LOGICA PARA QUE NO SE REPITAN LOS SKU
            // sku: function skuF()=>{
            //    let productSkus = [];
            //      Product.forEach(product =>{
            //     productSkus.push[product.sku]
            //      }
            //      return (Math.random()*10000000000 != productSkus)
            //     }
            color: req.body.color,
            price: req.body.price,
            size: req.body.size,
            stock: req.body.stock,
            discount: req.body.discount,
        });
        res.redirect("/productos");
    },

    // Ya esta funcionando em servicios pero comentado hasta poder probarlo un poquito mas.
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

    modificarProducto: async (req, res) => {
        const productoFiltradoEdit = await db.Product.findByPk(req.params.id);
        res.render("modificarProducto", { productoFiltradoEdit });
    },

    updateNewProduct: async (req, res) => {
        await db.Product.update(
            {
                title: req.body.title,
                productDescription: req.body.productDescription,
                // sku: req.body.sku, creo que no deberiamos tocar esto
                color: req.body.color,
                price: req.body.price,
                size: req.body.size,
                stock: req.body.stock,
                discount: req.body.discount,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );
        res.redirect("/productos");
    },

    delete: (req, res) => {
        db.Product.destroy({
            where: {
                id: req.params.id,
            },
        });
        res.redirect("/");
    },
    //productos.deleteOneProduct(req.params.id);
};

module.exports = controllerProducts;
