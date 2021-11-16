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
        color: {
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
            type:dataTypes.STRING,
        }
    };
    let config = {
        tableName: "products",
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config);

    /* Asociaciones*/
    Product.associate = function (models) {
        Product.belongsToMany(models.Order,{
            as: 'orders',
            through: 'productOrder',
            foreignKey: 'idProduct',
            otherKey: 'idOrder',
            timestamps:false,
        });
        Product.belongsToMany(models.Category, {
            as: "categories",
            through: "categoryProduct",
            foreignKey: "productId",
            otherKey: "categoryProductId",
            timestamps: false,
        });
        Product.hasMany(models.ProductImage, {
            as: "productImage",
            foreignKey: "imageId",
            timestamps: false,
        });
         Product.belongsToMany (models.User, {
            as: "users",
            through: "productUser",
            foreignKey: "productId",
            otherKey: "userId",
            timestamps: false,
        });
    }

    return Product;
};
