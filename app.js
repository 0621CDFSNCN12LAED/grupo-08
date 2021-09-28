const express = require("express");
const path = require("path");
const app = express();
const mainRouter = require("./routes/main-routes");
const productRouters = require("./routes/product-routers");
const userRouter = require("./routes/user-routers");
const methodOverride = require("method-override");
app.listen(3000, () => {
    console.log("Todo en orden");
});

app.use(methodOverride("_method"));
app.use(express.json());


app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(mainRouter);
app.use(productRouters);
app.use( userRouter);
//app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
