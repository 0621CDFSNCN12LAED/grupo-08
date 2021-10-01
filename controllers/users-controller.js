const fs = require("fs");
const path = require("path");
let bcryptjs = require("bcryptjs");

const usuariosFilePath = path.join(__dirname, "../data/usuariosDataBase.json");
const usuarios = JSON.parse(fs.readFileSync(usuariosFilePath, "utf-8"));

const user = require("../models/oneUser");

const controladorUsers = {
    //ver formulario de registro

    formularioRegistro: (req, res) => {
        res.render("register");
    },

    //Registrar nuevo usuario
    register: (req, res) => {
        let userInDB = user.findByField("email", req.body.email);

        //Mensaje de error de mail repetido
        if (userInDB) {
            //Acá va el render con las validaciones hechas en el registe, pero para el login
            res.send("El mail introducido ya está utilizado");
        }

        const biggestUser = usuarios[usuarios.length - 1];
        const lastUserId = usuarios.length > 0 ? biggestUser.id : 1;
        let bcryptPass = bcryptjs.hashSync(req.body.password, 10);
        const usuario = {
            id: lastUserId + 1,
            ...req.body,
            password: bcryptPass,
            img: "/img/avatars/" + req.file.filename,
        };
        //usuarios.push(usuario); lo comenté ya que pusheo el usuario al loguearlo
        fs.writeFileSync(usuariosFilePath, JSON.stringify(usuarios, null, 4));
        /* Método Login */
        user.createUser(usuario);
        /* Fin método login */
        return res.redirect("/login");

        console.log(req.body);
    },

    login: (req, res) => {
        res.render("login");
    },

    loginProcess: (req, res) => {
        let userToLogin = user.findByField("email", req.body.email);
        if (userToLogin) {
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
        return res.send("Mensaje de error contraseña");
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
