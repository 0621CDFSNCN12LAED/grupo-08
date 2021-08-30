const express = require('express')
const router = express.Router();


router.get("/", (req, res) => {
    res.render("index");
});

router.get("/register", (req, res) => {
    res.render("register");
});

router.get("/login", (req, res) => {
    res.render("login");
});

router.get("/terminos", (req, res) => {
    res.render("terminos");
});

router.get("/productCart", (req, res) => {
    res.render("productCart");
});

module.exports = router