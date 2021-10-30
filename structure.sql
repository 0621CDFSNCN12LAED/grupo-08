/* Recuerden colocar comentarios al inicio */
/* Y al fin de cada tabla */

/* Inicio tabla product */
CREATE TABLE product (
     id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    productDescription TEXT NULL,
    sku INT(10) UNSIGNED NOT NULL,
    color VARCHAR(100) NOT NULL,
    price DECIMAL NOT NULL,
    size VARCHAR(100) NOT NULL,
    stock INT(10) NOT NULL,
    discount INT(10) NULL,
    PRIMARY KEY(id)
);
/* Fin tabla product */

/* Inicio tabla category_product */
CREATE TABLE category_product(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    categorySport VARCHAR(100) NOT NULL,
    categoryGender VARCHAR(100) NOT NULL,
    /* Podemos añadir una lógica que
    En los formularios, solo se pueda seleccionar in-sale o visited */
    status VARCHAR(7) NOT NULL,
    status_in_sale VARCHAR(3) NOT NULL, /* "on" "off" */
    status_visited VARCHAR(3) NOT NULL, /* "on" "off" */
    brand VARCHAR(100) NOT NULL, /* Marca */
    category_type VARCHAR(100) NOT NULL,
)
/* Fin tabla category_product */

/* Inicio tabla product_user */
CREATE TABLE product_user(
    id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
    users_id INT(10) UNSIGNED NOT NULL,
    products_id INT(10) UNSIGNED NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (users_id) REFERENCES user (id),
    FOREIGN KEY (products_id) REFERENCES product (id)
);
/* Fin tabla product_user */

/* Inicio tabla Product Image */
CREATE TABLE product_image(
    id INT UNSIGNED AUTO_INCREMENT,
    product_id PRIMARY KEY,
    img_name VARCHAR NOT NULL,
)
/* Fin tabla Product Image */

/* Inicio tabla user */
CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  user_password VARCHAR(50) NOT NULL,
  terms TINYINT(1) NOT NULL,
  user_image VARCHAR NOT NULL,
);
/* Fin tabla user */

/* Inicio tabla product_categoryProduct */
CREATE TABLE product_categoryProduct (
  id INT UNSIGNED AUTO_INCREMENT,
  product_id PRIMARY KEY,
  categoryProduct_id PRIMARY KEY,
);
/* Fin tabla product_categoryProduct  */









