const express = require("express");
const path = require("path");
const app = express();
const mainRouter = require('./routes/main-routes');
const methodOverride = require('method-override');
app.listen(3000, () => { console.log("Todo en orden"); });

app.use(express.static(path.join(__dirname, "./public")));
app.use(mainRouter);
app.set('view engine', 'ejs');
app.use(methodOverride('_method'))