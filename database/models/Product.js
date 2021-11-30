module.exports = function (sequelize, dataTypes) {
    let alias = "Product";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
          title: {
            type: dataTypes.STRING,
        },
         productDescription: {
            type: dataTypes.TEXT,
        },
        sku: {
            type: dataTypes.INTEGER,
        },
        category: {
             type: dataTypes.STRING,
         },
          color: {
            type: dataTypes.STRING,
        },
        categoryGender: {
            type: dataTypes.STRING,
        },
        categorySport: {
            type: dataTypes.STRING,
        },
         brand: {
            type: dataTypes.STRING,
        },
        price: {
            type: dataTypes.DECIMAL,
        },
          size: {
            type: dataTypes.STRING,
        },
         stock: {
            type: dataTypes.INTEGER,
        },
        discount: {
            type: dataTypes.INTEGER,
        },
        images: {
            type: dataTypes.TEXT,
        },
    };
    let config = {
        tableName: "products",
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;
};
