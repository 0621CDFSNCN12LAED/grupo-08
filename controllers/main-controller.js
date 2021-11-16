const fs = require("fs");
const path = require("path");

const productos = require("../servicesControllers/productsServices");
const db = require("../database/models");
const { Op } = require("sequelize");

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controladorMain = {

index: (req,res) =>{
    db.Product.findAll().then(productosArray, {
        where:{
            visited : 1,
        }
    })
res.render("index", { productosArray });
}
}








// codigo que funciona y trae todas las peliculas pero no filtra por categorias de tabla asociada

    // index: async(req,res) =>{ 
    //     db.Product.findAll().then(
    //         function (productos) {
    //             res.render("index", { productos });
    //         }
    //     );
    // },
    // }




//codigo anterior:

//     index: async (req, res) => {
//         //filterByCategory
//         const productosVisitados = await db.Product.findAll({
//             include:["categories"].then((prods) =>{
//                 if(prods.statusVisited == 'visited'){
//                     return productosVisitados
//                 }
//             })
//         });

//         //filterByCategory
//         // const productosOfertas = productos.filtrarPorCategoria("in-sale");
//         res.render("index", {
//             productosVisitados,
//             // productosOfertas,
//             toThousand,
//         });
//     },
//     ayuda: (req, res) => {
//         res.render("ayuda");
//     },
// };

module.exports = controladorMain;
