module.exports = (sequelize, dataTypes) => {
    let alias = "ProductImage";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        productId: dataTypes.INTEGER,
        imgName: dataTypes.TEXT,
    };
    let config = {
        tableName: "productImage",
        timestamps: false,
    };

    const ProductImage = sequelize.define(alias, cols, config);

    return ProductImage;
};
