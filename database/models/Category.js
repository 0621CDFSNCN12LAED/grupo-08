module.exports = (sequelize, dataTypes) => {
    let alias = "Category";
    let cols = {
        id: dataTypes.INTEGER,
        categorySport: dataTypes.TEXT,
        categoryGender: dataTypes.TEXT,
        statusProduct: dataTypes.TEXT,
        statusInSale: dataTypes.BOOLEAN,
        statusVisited: dataTypes.BOOLEAN,
        brand: dataTypes.TEXT,
        categoryType: dataTypes.TEXT,
    };
    let config = {
        tableName: "category",
        timestamps: false,
    };

    const Category = sequelize.define(alias, cols, config);

    return Category;
};
