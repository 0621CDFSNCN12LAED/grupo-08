const { DataTypes } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    let alias = "User";
    let cols = {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstName: DataTypes.TEXT,
        lastName: DataTypes.TEXT,
        email: DataTypes.TEXT,
        userPassword: DataTypes.TEXT,
        userImage:DataTypes.TEXT 
    };
    let config = {
        tableName: "users",
        timestamps: false,
    };

    const User = sequelize.define(alias, cols, config);

    return User;
};