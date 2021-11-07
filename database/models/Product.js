module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: dataTypes.INTEGER,
        title: dataTypes.TEXT,
        description: dataTypes.TEXT,
        sku: dataTypes.INTEGER,
        color: dataTypes.TEXT,
        price: dataTypes.INTEGER,
        size: dataTypes.DECIMAL,
        stock: dataTypes.INTEGER,
        discount: dataTypes.INTEGER,
    };
    let config = {
        tableName: "product",
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;
};
