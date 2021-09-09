const controladorUsers = {
    register: (req, res) => {
        res.render("register");
    },
    login: (req, res) => {
        res.render("login");
    },
    terminos: (req, res) => {
        res.render("terminos");
    },
};

module.exports = controladorUsers;
