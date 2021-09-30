const fs = require("fs");
const path = require("path");
let bcrypt = require('bcrypt');

const usuariosFilePath = path.join(__dirname, "../data/usuariosDataBase.json");
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));



const controladorUsers = {
    

    //ver formulario de registro

    formularioRegistro: (req, res) =>{
        res.render("register")
    },
  
    //Registrar nuevo usuario      
        register: (req,res) =>{
        const biggestUser = usuarios[usuarios.length -1];
        const lastUserId =  usuarios.length > 0 ? biggestUser.id : 1;
        let bcryptPass = bcrypt.hashSync(req.body.password, 10);
        const usuario = {
            id: lastUserId + 1,
            ...req.body,
            password: bcryptPass,
        img: "/img/avatars/" + req.file.filename, 
        };
        usuarios.push(usuario);
        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 4));
        res.redirect("/login");
        console.log(req.body);
    },



    login: (req, res) => {
        res.render("login");
    },

    terminos: (req, res) => {
        res.render("terminos");
    },
};




module.exports = controladorUsers;
