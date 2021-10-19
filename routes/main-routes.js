const express = require("express");
const router = express.Router();
const controladorMain = require("../controllers/main-controller");

router.get("/", controladorMain.index);

router.get("/ayuda", controladorMain.ayuda);

module.exports = router;
