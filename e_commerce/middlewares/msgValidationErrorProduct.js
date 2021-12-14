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
    body("category")
        .notEmpty()
        .withMessage("Debes indicar el tipo de producto."),
    body("categoryGender")
        .notEmpty()
        .withMessage("Debes indicar para quien esta pensado tu producto."),
    body("categorySport")
        .notEmpty()
        .withMessage("Por favor, indica una categoria para tu producto."),
    body("color")
        .notEmpty()
        .withMessage("Designa el color de tu prenda/calzado."),
    body("price")
        .notEmpty()
        .withMessage("Debes asignarle un valor a tu producto."),
    //.isDecimal()
    //.withMessage('')

    body("size")
        .notEmpty()
        .withMessage("Agrega el talle de tu prenda/calzado."),
    body("stock")
        .notEmpty()
        .withMessage("Debes asignarle la cantidad de stock de tu producto."),

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
