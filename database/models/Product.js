module.exports = (sequelize, DataTypes) => {
    let alias = "Product";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        title: DataTypes.STRING,
        description: DataTypes.TEXT,
        sku: DataTypes.INTEGER,
        color: DataTypes.STRING,
        price: DataTypes.DECIMAL,
        size: DataTypes.STRING,
        stock: DataTypes.INTEGER,
        discount: DataTypes.INTEGER,
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
