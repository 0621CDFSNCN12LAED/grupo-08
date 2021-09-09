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

app.use(express.static(path.join(__dirname, "./public")));
app.use(mainRouter);
app.use(productRouters);
app.use(userRouter);
app.use(express.json());
//app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
app.use(methodOverride("_method"));
