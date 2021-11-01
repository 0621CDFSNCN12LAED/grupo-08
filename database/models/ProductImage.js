module.exports = (sequelize, dataTypes) => {
    let alias = "ProductImage";
    let cols = {
        id: dataTypes.INTEGER,
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
