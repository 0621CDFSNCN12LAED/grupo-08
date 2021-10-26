/* Recuerden colocar comentarios al inicio */

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
CREATE TABLE product_image(
    id INT UNSIGNED AUTO_INCREMENT,
    product_id PRIMARY KEY,
    img_name VARCHAR NOT NULL,
)
/* Fin tabla Product Image */

/* Inicio tabla user */
CREATE TABLE user (
  id INT NOT NULL AUTO_INCREMENT,
  FirstName VARCHAR(100) NOT NULL,
  LastName VARCHAR(100) NOT NULL,
  Email VARCHAR(100) NOT NULL,
  Password VARCHAR(50) NOT NULL,
  Terms TINYINT(1) NOT NULL,
  Image VARCHAR NOT NULL,
);
/* Fin tabla user */

/* Inicio tabla product_categoryProduct */
CREATE TABLE product_categoryProduct (
  id INT UNSIGNED AUTO_INCREMENT,
  product_id PRIMARY KEY,
  categoryProduct_id PRIMARY KEY,
);
/* Fin tabla product_categoryProduct  */


/* Y al fin de cada tabla */