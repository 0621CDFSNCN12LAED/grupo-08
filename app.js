const express = require("express");
const expressSession = require("express-session");
const cookie = require("cookie-parser");
const { body } = require("express-validator");
const path = require("path");
const app = express();
const mainRouter = require("./routes/main-routes");
const productRouters = require("./routes/product-routers");
const userRouter = require("./routes/user-routers");
const methodOverride = require("method-override");
const session = require("express-session");
app.listen(3000, () => {
    console.log("Todo en orden");
});
const userLoggedNavBarMiddleware = require("./middlewares/userLoggedNavBarMiddleware");

app.use(
    session({
        secret: "fPQJ&dLA2WA-NHs0|LuayurgPts%oG2P9Em3Y=TzSh99UK?&GOwtPRD7uK&MD^m|26l8u?QL0-nw2ixN4!P%6A?7uhBZ2o31Ds0g#|j_ZT%Q%DO_InmJORk%l2A496SYOnM24iW69vgd*GJ_f$oC$1PDN|!%@-@dBq1a0mDgWNx^|*j9GAC@iB!71wJ#bOH4bj&$v8rN|_6Fe$?gwUaPu9mA-7ctwuevq@69%tJZFl*njx?vHYC4+=3#pna$oHpM",
        resave: false,
        saveUninitialized: false,
    })
);
app.use(cookie());
app.use(userLoggedNavBarMiddleware);

app.use(methodOverride("_method"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(mainRouter);
app.use(productRouters);
app.use(userRouter);

//app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");
