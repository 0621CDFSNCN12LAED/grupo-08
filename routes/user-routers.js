const express = require("express");
const router = express.Router();
const controladorUsers = require("../controllers/users-controller");

router.get("/register", controladorUsers.register);

router.get("/login", controladorUsers.login);

router.get("/terminos", controladorUsers.terminos);

module.exports = router;
