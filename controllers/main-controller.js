const fs = require("fs");
const path = require("path");

const productos = require("../servicesControllers/productsServices");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controladorMain = {
    index: (req, res) => {
        //filterByCategory
        const productosVisitados = productos.filtrarPorCategoria("visited");
        //filterByCategory
        const productosOfertas = productos.filtrarPorCategoria("in-sale");

        res.render("index", {
            productosVisitados,
            productosOfertas,
            toThousand,
        });
    },
};

module.exports = controladorMain;
