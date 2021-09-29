const fs = require("fs");
const path = require("path");
const productsFilePath = path.join(__dirname, "../data/productosDataBase.json");
const productos = JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));

const servicesControllers = {
    findAllProducts() {
        return productos;
    },
    filtrarPorCategoria(categoryProduct) {
        return productos.filter((producto) => {
            return producto.categoryProduct == "visited";
        });
    },

    findOnlyOneById(id) {
        const productoFiltrado = productos.find((producto) => {
            return producto.id == id;
        });
        return productoFiltrado;
    },
    save() {
        const jsonString = JSON.stringify(productos, null, 4);
        fs.writeFileSync(productsFilePath, jsonString);
    },
    editOneProduct(id, payload, image) {
        const productoEditar = this.findOnlyOneById(id);
        productoEditar.title = payload.title;
        productoEditar.description = payload.description;
        productoEditar.sku = payload.sku;
        productoEditar.category = payload.category;
        productoEditar.size = payload.size;
        productoEditar.color = payload.color;
        productoEditar.price = Number(payload.price);
        productoEditar.stock = Number(payload.stock);
        productoEditar.image = image ? image.filename : productos.image;
        this.save();
    },
    deleteOneProduct(id) {
        const productoFiltradoDelete = productos.findIndex((producto) => {
            return producto.id == id;
        });
        productos.splice(productoFiltradoDelete, 1);
        this.save();
    },
};

module.exports = servicesControllers;
