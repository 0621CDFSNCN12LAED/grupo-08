const path = require("path");
const { body } = require("express-validator");
const validaciones = [
    body("name")
        .notEmpty()
        .withMessage("Tienes que colocar un nombre para continuar"),

    body("apellido")
        .notEmpty()
        .withMessage("Tienes que colocar un apellido para continuar"),

    body("email")
        .notEmpty()
        .withMessage("Tienes que colocar un mail para continuar")
        .bail()
        .isEmail()
        .withMessage("Debes introducir un mail válido"),

    body("password")
        .notEmpty()
        .withMessage("Es necesario colocar una cotraseña")
        .bail()
        .isLength({ min: 4, max: 20 })
        .withMessage(
            "La contraseña debe contener como mínimo 4 caracteres y 20 como máximo"
        ),

    body("terminos")
        .notEmpty()
        .withMessage("Debes aceptar los términos y condiciones"),

    body("imagen").custom((value, { req }) => {
        let file = req.file;
        let extensionesPermitidas = [".jpg", ".png", ".gif"];

        if (!file) {
            throw new Error("Debes subir una imagen");
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!extensionesPermitidas.includes(fileExtension)) {
                throw new Error(
                    `Las extensiones permitidas son ${extensionesPermitidas.join(
                        ", "
                    )}`
                );
            }
        }
        return true;
    }),
];

module.exports = validaciones;
