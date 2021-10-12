const express = require("express");
// const { diskStorage } = require("multer");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const controladorUsers = require("../controllers/users-controller");

/* Middlewares */
const guestMiddleware = require("../middlewares/guestMiddleware");
const authUserMiddleware = require("../middlewares/authUserMiddleware");
const validacionMsg = require("../middlewares/messageValidationError");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/avatars"));
    },
    filename: function (req, file, cb) {
        const newFilename =
            "NuevoAvatar-" + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    },
});
const upload = multer({ storage: storage });

//registrarse
router.get("/register", guestMiddleware, controladorUsers.formularioRegistro);
router.post(
    "/register",
    upload.single("imagen"),
    validacionMsg,
    controladorUsers.register
);

//login
router.get("/login", guestMiddleware, controladorUsers.login);

router.post("/login", validacionMsg, controladorUsers.loginProcess);

//Vista de terminos y condiciones de nuestro sitio web.
router.get("/terminos", controladorUsers.terminos);

router.get("/profile", authUserMiddleware, controladorUsers.profile);

router.get("/logout", controladorUsers.logout);

module.exports = router;
