const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productosDataBase.json");
const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controladorMain = {
    index: (req, res) => {
        const productosVisitados = productos.filter((producto) => {
            return producto.categoryProduct == "visited";
        });
        const productosOfertas = productos.filter((producto) => {
            return producto.categoryProduct == "in-sale";
        });
        res.render("index", {
            productosVisitados,
            productosOfertas,
            toThousand,
        });
    },
};

module.exports = controladorMain;
