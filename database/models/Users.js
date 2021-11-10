module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: dataTypes.TEXT,
        lastName: dataTypes.TEXT,
        email: dataTypes.TEXT,
        password: dataTypes.TEXT,
        // image: dataTypes.VARBINARY, Arroja error por el tipo de dato
    };
    let config = {
        tableName: "users",
        timestamps: false,
    };

    const User = sequelize.define(alias, cols, config);

    /* Asociaciones*/
    User.associate = function (models) {
        User.belongsToMany(models.Product, {
            as: "products",
            through: "productUser",
            foreignKey: "userId",
            otherKey: "productId",
            timestamps: false,
        });
    };

    return User;
};
