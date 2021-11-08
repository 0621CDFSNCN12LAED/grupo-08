module.exports = (sequelize, dataTypes) => {
    
const Order = sequelize.define(alias, cols, config);

    let alias = 'Order';
    let cols = {
        id: dataTypes.INTEGER,
        dateOrder: dataTypes.DATETIME,
        direction: dataTypes.VARCHAR,
        totalPrice: dataTypes.DECIMAL,
        userId: dataTypes.INTEGER,
    };
    let config = {
        tableName: 'orders',
        timestamps: false
    }
    
    return Order;
}