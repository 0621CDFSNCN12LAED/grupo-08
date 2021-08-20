const express = require('express');
const app = express();
const path = require('path');

app.listen(3000, () => {
    console.log('servidor funcionando')
})

app.use(express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/login.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/register.html'))
});

app.get('/terminos', (req, res) => {
    res.sendFile(path.join(__dirname, '/views/terminos.html'))
});