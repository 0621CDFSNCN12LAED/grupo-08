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
    //Encuentra producto a editar producto
    modificarProducto: (req, res) => {
        let productoAEditar = productos.find((producto) => {
            return producto.id == req.params.id;
        });
        res.render("modificarProducto", { productoAEditar: productoAEditar });
    },
    updateNewProduct: (req, res) => {
        let productoAEditar = productos.find((producto) => {
            return producto.id == req.params.id;
        });
        productoAEditar.title = req.body.title;
        productoAEditar.description = req.body.description;
        productoAEditar.sku = req.body.sku;
        productoAEditar.category = req.body.category;
        productoAEditar.size = req.body.size;
        productoAEditar.color = req.body.color;
        productoAEditar.price = Number(req.body.price);
        productoAEditar.stock = Number(req.body.stock);
        //Save in JSON
        const jsonString = JSON.stringify(productos, null, 4);
        fs.writeFileSync(productsFilePath, jsonString);
        //Redirecciona
        res.redirect("/productos");
    },

    //vista de creación de producto
    nuevoProducto: (req, res) => {
        res.render("crearProducto");
    },


 // Crea nuevos produtos. debo agregar stock y mejorar el sistema de ID.
 crearNuevoProducto: (req, res) => {
    const productId = productos.length;
    // const file = req.file;
    const producto = {
        id: productId +1,
        ...req.body,
    img: "/img/products/" + req.file.filename, 
    price: Number (req.body.price),
    };
    // productos.push(file);
    productos.push(producto);
    fs.writeFileSync(productsFilePath, JSON.stringify(productos,null,4));
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
