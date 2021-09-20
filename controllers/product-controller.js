const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "../data/productosDataBase.json");
const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const toThousand = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
const controllerProducts = {
    productos: (req, res) => {
        res.render("productos", { productos });
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
    productDetail: (req, res) => {
        const productDetail = productos.find((producto) => {
            return producto.id == req.params.id;
        });
        res.render("indexProdDetail", { productDetail });
    },
    //Editar producto
    modificarProducto: (req, res) => {
        let productoAEditar = productos.find((producto) => {
            return producto.id == req.params.id;
        });
        res.render("modificarProducto", { productoAEditar: productoAEditar });
    },

    nuevoProducto: (req, res) => {
        res.render("crearProducto");
    },

    // Crea nuevos produtos. Aún no solucione que cargue imagenes.
    crearNuevoProducto: (req, res) => {
        const productId = productos.length;
        const producto = {
            id: productId + 1,
            ...req.body,
        };
        productos.push(producto);
        fs.writeFileSync(productsFilePath, JSON.stringify(productos));
        res.redirect("/productos");
        console.log(req.body);
    },

    //Eliminar productos
    delete: (req, res) => {
        //Filtrar productos
        const filterProductsForDeleteOne = productos.findIndex((producto) => {
            return producto.id == req.params.id;
        });
        productos.splice(filterProductsForDeleteOne, 1);

        //Guardar filtro en el archivo JSON
        const jsonString = JSON.stringify(productos, null, 4);
        fs.writeFileSync(productsFilePath, jsonString);

        //Redirect
        res.redirect("/");
    },
};

module.exports = controllerProducts;
