const fs = require("fs");
const path = require("path");
let bcryptjs = require("bcryptjs");

//const usuariosFilePath = path.join(__dirname, "../data/usuariosDataBase.json");
//const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));
const db = require("../database/models");
const { Op } = require("sequelize");
const { validationResult } = require("express-validator");

//const user = require("../models/oneUser"); - reemplazada por db.user

const controladorUsers = {
    //ver formulario de registro

    formularioRegistro: (req, res) => {
        res.render("register");
    },

    //Registrar nuevo usuario
    register: async (req, res) => {
        //Mensaje de error registro
        const resultadoValidacion = validationResult(req);

        if (resultadoValidacion.errors.length > 0) {
            return res.render("register", {
                errors: resultadoValidacion.mapped(),
                oldData: req.body,
            });
        }

        //Mensaje de error de mail repetido
        let userInDB = await db.User.findAll({
            where:{email: req.body.email}
        });
         console.log(userInDB, '============================================')
        if (userInDB.length > 0 ) {
            //Acá va el render con las validaciones hechas en el registe, pero para el login
            return res.render("register", {
                errors: {
                    email: {
                        msg: "Este mail ya se encuentra registrado",
                    },
                },
                oldData: req.body,
            });
        }

        
        
        let bcryptPass = bcryptjs.hashSync(req.body.password, 10);
        const usuario = {
            ...req.body,
            firstName: req.body.name,
            lastName: req.body.apellido,
            userPassword: bcryptPass,
            userImage: "/img/avatars/" + req.file.filename,
        };
        
        //usuarios.push(usuario); lo comenté ya que pusheo el usuario al loguearlo
        //fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 4));
        /* Método Login */
        const createdUser = await db.User.create(usuario);
        
        /* Fin método login */
        return res.redirect("/login");

        //console.log(req.body);
    },

    login: (req, res) => {
        res.render("login");
    },

    loginProcess: async (req, res) => {
        let userToLogin = await db.User.findAll({
            where: { email: req.body.email }
        });
        console.log(userToLogin, '============================================')
        if (userToLogin.length > 0) {
            let passwordIsOkey = bcryptjs.compareSync(
                req.body.password,
                userToLogin.password
            );
            if (passwordIsOkey) {
                delete userToLogin.password;
                req.session.userLogged = userToLogin;

                if (req.body.rememberMe) {
                    res.cookie("userEmail", req.body.email, {
                        maxAge: 1000 * 60 * 5,
                    });
                }
                return res.redirect("/profile");
            }
        }
        return res.render("login", {
            errors: {
                email: {
                    msg: "Los datos ingresados no coinciden, intentelo nuevamente",
                },
            },
        });
    },

    terminos: (req, res) => {
        res.render("terminos");
    },
    profile: (req, res) => {
        res.render("profile", { user: req.session.userLogged });
    },
    logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
    },

   

};




module.exports = controladorUsers;
