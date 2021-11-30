const path = require("path");
const { body } = require("express-validator");

const productValidations = [
    body("title")
        .notEmpty()
        .withMessage(
            "Tienes que colocar el nombre del producto para continuar."
        )
        .isLength({ min: 5 })
        .withMessage(
            "El nombre del producto tiene que tener al menos 5 caracteres."
        ),
    body("productDescription")
        .isLength({ min: 20 })
        .withMessage("Escribe una descripción de más de 20 caracteres."),
    body("color")
        .notEmpty()
        .withMessage("Designa el color de tu prenda/calzado.")
        .bail(),
    body("price")
        .notEmpty()
        .withMessage("Debes asignarle un valor a tu producto.")
        .bail(),
    body("size")
        .notEmpty()
        .withMessage("Agrega el talle de tu prenda/calzado.")
        .bail(),
    body("stock")
        .notEmpty()
        .withMessage("Debes asignarle la cantidad de stock de tu producto.")
        .bail(),

    body("images").custom((value, { req }) => {
        let file = req.file;
        let extensionesValidas = [".jpg", ".jpeg", ".png", ".gif"];

        if (!file) {
            throw new Error(
                "Tienes que colocar una imagen del producto para continuar."
            );
        } else {
            let fileExtension = path.extname(file.originalname);
            if (!extensionesValidas.includes(fileExtension)) {
                throw new Error(
                    `Las extensiones permitidas son ${extensionesValidas.join(
                        ", "
                    )}`
                );
            }
        }
        return true;
    }),
];

module.exports = productValidations;
