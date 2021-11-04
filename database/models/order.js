module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Order';
    let cols = {
        id: dataTypes.INTEGER,
        dateOrder: dataTypes.DATETIME,
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