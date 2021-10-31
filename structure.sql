/* Recuerden colocar comentarios al inicio */
/* Y al fin de cada tabla */

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

/* Inicio tabla Product Image */
CREATE TABLE productImage(
    id INT UNSIGNED AUTO_INCREMENT,
    productId PRIMARY KEY,
    imgName VARCHAR NOT NULL,
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
CREATE TABLE categoryProduct (
  id INT UNSIGNED AUTO_INCREMENT,
  productId PRIMARY KEY,
  categoryProductId PRIMARY KEY,
);
/* Fin tabla product_categoryProduct  */









