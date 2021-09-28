const express = require("express");
// const { diskStorage } = require("multer");
const router = express.Router();
const multer = require('multer');
const path = require("path");
const controladorUsers = require("../controllers/users-controller");




var storage = multer.diskStorage({
    destination: function(req,file,cb){
cb(null, path.join(__dirname,'../public/img/avatars'));
    },
    filename: function (req,file,cb) {
        const newFilename = 'NuevoAvatar-' + Date.now() + path.extname(file.originalname) ;
        cb(null, newFilename);
    }
})
const upload = multer({ storage : storage });



//registrarse
router.get("/register", controladorUsers.formularioRegistro);
router.post("/register", upload.single('imagen'), controladorUsers.register);



//login
router.get("/login", controladorUsers.login);


//Vista de terminos y condiciones de nuestro sitio web.
router.get("/terminos", controladorUsers.terminos);



module.exports = router;


