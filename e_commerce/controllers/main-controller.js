const fs = require("fs");
const path = require("path");
const productos = require("../servicesControllers/productsServices");
const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const db = require("../database/models");
const Product = require("../database/models/Product");
const { Op } = require("sequelize");

const controladorMain = {
    index: (req, res) => {
        db.Product.findAll({ 
            where: {
                discount: {
                  [Op.not]: [0]
                }
              },
              limit: 5,
              order: [
                  ['discount', 'DESC']
              ]
         })
        .then(
            function (productosOfertas) {
                res.render("index", { productosOfertas });
            }
        );

    },
    ayuda: (req, res) => {
        res.render("ayuda");
    },
};

module.exports = controladorMain;
