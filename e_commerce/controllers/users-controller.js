const db = require("../database/models");
const { validationResult } = require("express-validator");
const { render } = require("ejs");

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

        
        
        //let bcryptPass = bcryptjs.hashSync(req.body.password, 10);
        const usuario = {
            ...req.body,
            firstName: req.body.name,
            lastName: req.body.apellido,
            //userPassword: bcryptPass,
            userPassword: req.body.password,
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
        let userToLoginQuery = await db.User.findAll({
            where: { email: req.body.email }
        })
        const userToLogin = userToLoginQuery[0].toJSON();
        if (userToLogin) {
            /*let passwordIsOkey = bcryptjs.compareSync(
                req.body.password,
                userToLogin.userPassword
            );*/
            let passwordIsOkey = userToLogin.userPassword === req.body.password;
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

    editProfile: async (req, res) =>{
        let userInDB = await db.User.findByPk(req.session.userLogged.id);
         res.render('editProfile',{user: userInDB.toJSON()})
    },

    confirmEditProfile: async (req, res) =>{
    let updatedUser = await db.User.findByPk(req.body.id);
    await updatedUser.update({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        userPassword: req.body.userPassword,
        //userImage: DataTypes.TEXT,
    });
    await updatedUser.save();
    res.render('profile', {user: updatedUser.toJSON()});
    },

    logout: (req, res) => {
        res.clearCookie("userEmail");
        req.session.destroy();
        return res.redirect("/");
    },

 
   

};




module.exports = controladorUsers;
