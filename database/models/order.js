module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Order';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        //dateOrder: dataTypes.DATETIME, Arroja error por el tipo de dato
        direction: dataTypes.TEXT,
        userId: dataTypes.INTEGER,
        totalPrice: dataTypes.DECIMAL,
 
    };
    let config = {
        tableName: 'orders',
        timestamps: false
    }
    
    const Order = sequelize.define(alias, cols, config);
    
    return Order;
}