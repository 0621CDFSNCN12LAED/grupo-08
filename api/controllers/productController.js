const DB = require('../database/models');
const Op = DB.Sequelize.Op 

module.exports = {
    listProducts: (req, res) =>{
        DB.Product.findAll()
        .then(productos =>{
            return res.status(200).json({
                total: productos.length,
                data: productos,
                status: 200
            })
        })
    },
    detailProduct: (req, res) =>{
        DB.Product.findByPk(req.params.id)
        .then(producto =>{
            return res.status(200).json({
                data: producto,
                status: 200
            })
        })
    },
    store: (req, res) =>{
        DB.Product.create(req.body)
        .then(producto =>{
            return res.status(200).json({
                data: producto,
                status: 200,
                created: "ok"
            })
        })
    },
    delete: (req, res) =>{
        DB.Product.destroy({
            where: {
                id: req.params.id
            }
        })
        .then(respuesta =>{
            return res.json({
                data: respuesta,
                status:200,
                deleted: "Okey"
            })
        })
    },
    search: (req, res) =>{
        DB.Product.findAll({
            where:{
                title: { [Op.like]: '%' + req.query.keyword + '%' }
            }
        })
        .then(producto =>{
            if(producto.length > 0){
                return res.status(200).json(producto)
            }
            return res.status(200).json("No se encontró el producto buscado")
        })
    },
}