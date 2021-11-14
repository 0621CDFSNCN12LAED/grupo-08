module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        categorySport: dataTypes.TEXT,
        categoryGender: dataTypes.TEXT,
        statusProduct: dataTypes.TEXT,
        statusInSale: dataTypes.BOOLEAN,
        statusVisited: dataTypes.BOOLEAN,
        brand: dataTypes.TEXT,
        categoryType: dataTypes.TEXT,
    };
    let config = {
        tableName: "categories",
        timestamps: false,
    };

    const Category = sequelize.define(alias, cols, config);

 Category.associate = function (models) {
        Category.belongsToMany(models.Product, {
            as: "categoryProducts",
            through: "categoryProduct",
            foreignKey: "categoryProductId",
            otherKey: "productId",
            timestamps: false,
        })
    }; 
    return Category;
};
