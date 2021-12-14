const user = require("../models/oneUser");
function userLoggedNavBarMiddleware(req, res, next) {
    res.locals.isLogged = false;

    //Proceso Cookie
    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = user.findByField("email", emailInCookie);

    if (userFromCookie) {
        req.session.userLogged = userFromCookie;
    }

    if (req.session.userLogged) {
        res.locals.isLogged = true;
        /* Esto manda los datos que se recibió para colocarlo al navbar, 
       por ej. Si se quiere colocar el nombre del usuario registrado en el navbar */
        // res.locals.userLogged = req.session.userLogged;
    }

    next();
}

module.exports = userLoggedNavBarMiddleware;
