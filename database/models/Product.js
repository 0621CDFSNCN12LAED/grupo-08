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
    };
    let config = {
        tableName: "products",
        timestamps: false,
    };

    const Product = sequelize.define(alias, cols, config);

    return Product;
};
/* Asociaciones
  model.associate = (models) => {
        model.belongsToMany(models.Users, {
      as: "users",
      through: "",
      foreignKey: "",
      otherKey: "",
      timestamps: false,
    });
  };*/
