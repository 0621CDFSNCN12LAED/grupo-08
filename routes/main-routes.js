const express = require('express')
const router = express.Router();
const controlladorProductos = require('../controllers/product-controller')

router.get("/", controlladorProductos.index);

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

router.get("/productDetail", (req, res) => {
    res.render("indexProdDetail");
});


module.exports = router