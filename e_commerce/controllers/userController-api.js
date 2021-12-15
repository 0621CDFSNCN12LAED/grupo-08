const DB = require('../database/models');
const Op = DB.Sequelize.Op 

module.exports = {
    listUsers: (req, res) =>{
        DB.User.findAll()
        .then(users =>{
            return res.status(200).json({
                total: users.length,
                data: users,
                status: 200
            })
        })
    },
}