const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productosDataBase.json");
const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const controllerProducts = {
    productos: (req, res) => {
        res.render("productos", { productos });
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    productDetail: (req, res) => {
        const productDetail = productos.find((producto) => {
            return producto.id == req.params.id;
        });
        res.render("indexProdDetail", { productDetail });
    },
    administrarProductos: (req, res) => {
        res.render("administrarProductos");
    },
};

module.exports = controllerProducts;
