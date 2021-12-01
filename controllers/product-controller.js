const db = require("../database/models");
const { Op } = require("sequelize");
const Product = require("../database/models/Product");
const { validationResult } = require("express-validator");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const controllerProducts = {
    productos: (req, res) => {
        db.Product.findAll().then(
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
        const productValidationResult = validationResult(req);
        if (productValidationResult.errors.length > 0) {
            return res.render("crearProducto", {
                errors: productValidationResult.mapped(),
                oldData: req.body,
            });
        }
        await db.Product.create({
            title: req.body.title,
            productDescription: req.body.productDescription,
            sku: (Math.random()*1000000000),
            category: req.body.category,     
            color: req.body.color,
            categoryGender: req.body.categoryGender,
            categorySport: req.body.categorySport,
            brand: req.body.marca,
            price: req.body.price,
            size: req.body.size,
            stock: req.body.stock,
            discount: (req.body.discount) ? req.body.discount: 0,
            images: "/img/products/" + req.file.filename,
        });
        res.redirect("/productos");
    },

    //VIENDO LA LOGICA PARA QUE NO SE REPITAN LOS SKU
            // sku: function skuF()=>{
            //    let productSkus = [];
            //      Product.forEach(product =>{
            //     productSkus.push[product.sku]
            //      }
            //      return (Math.random()*10000000000 != productSkus)
            //     }



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
                images: "/img/products/" + req.file.filename,
                title: req.body.title,
                productDescription: req.body.productDescription,
                category: req.body.category,     
                color: req.body.color,
                categoryGender: req.body.categoryGender,
                categorySport: req.body.categorySport,
                brand: req.body.marca,
                price: req.body.price,
                size: req.body.size,
                stock: req.body.stock,
                discount: (req.body.discount) ? req.body.discount: 0,

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
