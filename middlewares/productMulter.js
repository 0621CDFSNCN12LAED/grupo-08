const multer = require("multer");
const path = require("path");

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/img/products"));
    },
    filename: function (req, file, cb) {
        const newFilename =
            "NuevoProducto-" + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    },
});
const upload = multer({ storage: storage });

module.exports = upload;
