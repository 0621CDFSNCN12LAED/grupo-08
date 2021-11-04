module.exports = (sequelize, dataTypes) => {
    let alias = "User";
    let cols = {
        id: dataTypes.INTEGER,
        firstName: dataTypes.TEXT,
        lastName: dataTypes.TEXT,
        email: dataTypes.TEXT,
        password: dataTypes.TEXT,
        image: dataTypes.VARBINARY,
    };
    let config = {
        tableName: "users",
        timestamps: false,
    };

    const User = sequelize.define(alias, cols, config);

    return User;
};