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

    createOne: (payload, image) => {
        const biggestProduct = productos[productos.length - 1];
        const lastProductId = productos.length > 0 ? biggestProduct.id : 1;
        const producto = {
            id: lastProductId + 1,
            ...payload,
            img: "/img/products/" + image.filename,
            price: Number(payload.price),
        };
        productos.push(producto);
        fs.writeFileSync(productsFilePath, JSON.stringify(productos, null, 4));
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
        /*const deleteImg = productos.find(function (producto) {
            return producto.id == id;
        });
        fs.unlinkSync(path.join(__dirname, "../public" + deleteImg.image));*/
        const productoFiltradoDelete = productos.findIndex((producto) => {
            return producto.id == id;
        });
        productos.splice(productoFiltradoDelete, 1);
        this.save();
    },
};

module.exports = servicesControllers;
