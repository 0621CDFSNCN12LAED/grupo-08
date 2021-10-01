function authUserMiddleware(req, res, next) {
    if (!req.session.userLogged) {
        return res.redirect("/login");
    }
    next();
}

module.exports = authUserMiddleware;
