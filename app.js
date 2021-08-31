const path = require("path");
const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Todo en orden");
});

app.use(express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "./views/index.html"));
});

app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/register.html"));
});

app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/login.html"));
});

app.get("/terminos", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/terminos.html"));
});

app.get("/productCart", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/productCart.html"));
});

app.get("/productDetail", (req, res) => {
    res.sendFile(path.join(__dirname, "/views/indexProdDetail.html"));
});