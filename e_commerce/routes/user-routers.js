const express = require("express");
// const { diskStorage } = require("multer");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const controladorUsers = require("../controllers/users-controller");
const userControllerApi = require("../controllers/userController-api")

/* Middlewares */
const guestMiddleware = require("../middlewares/guestMiddleware");
const authUserMiddleware = require("../middlewares/authUserMiddleware");
const validacionMsg = require("../middlewares/messageValidationError");
const upload = require("../middlewares/userMulter");

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
router.get("/profile/edit", authUserMiddleware, controladorUsers.editProfile);
router.post("/profile/edit", authUserMiddleware, controladorUsers.confirmEditProfile);

router.get("/logout", controladorUsers.logout);



//Rutas API
//All users
router.get('/userList', userControllerApi.listUsers);

// router.get('/list/search', productControllerAPI.search);
//Product by id
// router.get('/list/:id', userControllerApi.detailProduct);


module.exports = router;
