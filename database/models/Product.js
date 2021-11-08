module.exports = (sequelize, dataTypes) => {
    let alias = "Product";
    let cols = {
        id: dataTypes.INTEGER, //primaryKey: true, autoIncrement: true //
        title: dataTypes.STRING,
        description: dataTypes.TEXT,
        sku: dataTypes.INTEGER,
        color: dataTypes.STRING,
        price: dataTypes.DECIMAL,
        size: dataTypes.STRING,
        stock: dataTypes.INTEGER,
        discount: dataTypes.INTEGER,
    };
    let config = {
        tableName: "products",
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;
};
