const express = require("express");
const router = express.Router();
const controladorMain = require("../controllers/main-controller");

router.get("/", controladorMain.index);

// router.get("/ayuda", controladorMain.ayuda); comentado mientras arreglo bases de datos index

module.exports = router;
