const express = require("express");
const router = express.Router();
const controladorMain = require("../controllers/main-controller");

router.get("/", controladorMain.index);

module.exports = router;
