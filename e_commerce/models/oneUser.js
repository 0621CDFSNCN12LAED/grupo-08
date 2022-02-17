// 1- Guardar al usuario en la Base de Datos
// 2- Buscar al usuario que se quiere loguear por su email
// 3- Buscar a un usuario por su ID
// 4- Editar la información de un usuario
// 5- Eliminar a un usuario de la Base de Datos
const fs = require("fs");

const oneUser = {
    fileName: "./data/usuariosDataBase.json",

    getData: function () {
        return JSON.parse(fs.readFileSync(this.fileName, "utf-8"));
    },

    generateId: function () {
        let allUsers = this.findAllUsers();
        let lastUser = allUsers.pop();
        if (lastUser) {
            return lastUser.id + 1;
        }
        return 1;
    },

    findAllUsers: function () {
        return this.getData();
    },

    findByPk: function (id) {
        let allUsers = this.findAllUsers();
        let userFound = allUsers.find((oneUser) => oneUser.id === id);
        return userFound;
    },

    findByField: function (field, text) {
        let allUsers = this.findAllUsers();
        let userFound = allUsers.find((oneUser) => oneUser[field] === text);
        return userFound;
    },

    createUser: function (userData) {
        let allUsers = this.findAllUsers();
        let newUser = {
            id: this.generateId(),
            ...userData,
        };
        allUsers.push(newUser);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, " "));
        return newUser;
    },

    deleteUser: function (id) {
        let allUsers = this.findAllUsers();
        let finalUsers = allUsers.filter((oneUser) => oneUser.id !== id);

        fs.writeFileSync(this.fileName, JSON.stringify(finalUsers, null, " "));
    },
};
module.exports = oneUser;
