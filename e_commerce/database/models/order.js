module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Order';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // dateOder: {
        //     type:  dataTypes.DATE, con DATETIME daba error, chequear con DATE
        // },
        direction: {
            type: dataTypes.TEXT
             },
        userId: { 
            type: dataTypes.INTEGER  
        },
        totalPrice: { 
            type: dataTypes.DECIMAL 
        },
        userId: {
            type: dataTypes.INTEGER 
            },
    };
    let config = {
        tableName: 'orders',
        timestamps: false
    }

    const Order = sequelize.define(alias, cols, config);


     Order.associate = function(models){
        Order.belongsTo(models.User,{
            as:"users",
            foreignKey: "userId"
        });
        Order.belongsToMany(models.Product,{
            as: 'products',
            through: 'productOrder',
            foreignKey: 'idOrder',
            otherKey: 'idProduct',
            timestamps:false,
        })
    }

    return Order;
}