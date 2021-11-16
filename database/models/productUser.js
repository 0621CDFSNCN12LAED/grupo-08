module.exports = function (sequelize, dataTypes) {
    let alias = "productUser";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: dataTypes.STRING,
        },
        productId: {
            type: dataTypes.TEXT,
        },
        visited: {
            type: dataTypes.TINYINT,
        }
    };
    let config = {
        tableName: "productUser",
        timestamps: false,
    };

    const productUser = sequelize.define(alias, cols, config);

    return productUser;
};
