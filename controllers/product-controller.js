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


  //Vista para crear nuevo producto
  nuevoProducto: (req, res) => {
    res.render("crearProducto");
},

// Crear nuevo producto
crearNuevoProducto: (req, res) => {
const biggestProduct = productos[productos.length -1];
const lastProductId =  productos.length > 0 ? biggestProduct.id : 1;
const producto = {
    id: lastProductId + 1,
    ...req.body,
img: "/img/products/" + req.file.filename, 
price: Number (req.body.price),
};
productos.push(producto);
fs.writeFileSync(productsFilePath, JSON.stringify(productos,null,4));
res.redirect("/productos");
console.log(req.body);
},


    //Encuentra producto a editar producto
    modificarProducto: (req, res) => {
        let productoAEditar = productos.find((producto) => {
            return producto.id == req.params.id;
        });
        res.render("modificarProducto", { productoAEditar: productoAEditar });
    },

    //Edita el producto encontrado
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

