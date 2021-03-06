/* Recuerden colocar comentarios al inicio */
/* Y al fin de cada tabla */

/* Inicio tabla product */
DROP DATABASE IF EXISTS all4sports;
CREATE DATABASE all4sports;
USE all4sports;

SET FOREIGN_KEY_CHECKS=1;
DROP TABLE IF EXISTS products;

CREATE TABLE products(
    id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
    title VARCHAR(100) NOT NULL,
    productDescription TEXT NULL,
    sku INT(10) UNSIGNED NOT NULL,
    category VARCHAR(100) NOT NULL,
    color VARCHAR(100) NOT NULL,
    categoryGender VARCHAR(100) NOT NULL,
    categorySport VARCHAR(100) NOT NULL,
    brand VARCHAR(100) NULL,
    price DECIMAL NOT NULL,
    size VARCHAR(100) NOT NULL,
    stock INT(10) NOT NULL,
    discount INT(10) NULL,
    images VARCHAR(100) NOT NULL,
    PRIMARY KEY(id)
);
/* Fin tabla product */

-- /* Inicio tabla category */
-- CREATE TABLE categories(
--     id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
--     categorySport VARCHAR(100) NOT NULL,
--     categoryGender VARCHAR(100) NOT NULL,
--     ofertProduct INT(10) NOT NULL,
--     brand VARCHAR(100) NOT NULL,
--     categoryType VARCHAR(100) NOT NULL
-- );
/* Fin tabla category */



/* Inicio tabla Product Image */
-- CREATE TABLE productImages(
--     id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
--     productId INT(10) UNSIGNED NULL, 
--     imgName VARCHAR(100) NOT NULL,
--     FOREIGN KEY (productId)  REFERENCES products (id)
-- );
/* Fin tabla Product Image */

/* Inicio tabla user */
CREATE TABLE users (
  id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
  firstName VARCHAR(100) NOT NULL,
  lastName VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  userPassword VARCHAR(50) NOT NULL,
  userImage VARCHAR(100) NOT NULL
);
/* Fin tabla user */

/* Inicio tabla product_categoryProduct */
-- CREATE TABLE categoryProduct(
--   id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
--   productId INT(10) UNSIGNED NOT NULL,
--   categoryProductId INT(10) UNSIGNED NOT NULL,
--   FOREIGN KEY (productId)  REFERENCES products (id),
--   FOREIGN KEY (categoryProductId)  REFERENCES categories (id)
-- );
/* Fin tabla product_categoryProduct  */

/* Comienzo tabla orders */

CREATE TABLE orders(
id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
dateOrder DATETIME NOT NULL,
direction VARCHAR(100) NOT NULL,
totalPrice DECIMAL NOT NULL,
userId INT(10) UNSIGNED NOT NULL,
FOREIGN KEY (userId)  REFERENCES users (id)
);
/* Fin tabla order */

/* Comienzo tabla productOrder */
CREATE TABLE productOrder(
id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
price DECIMAL NOT NULL,
idProduct INT(10) UNSIGNED NOT NULL,
idOrder INT(10) UNSIGNED NOT NULL,
FOREIGN KEY (idProduct)  REFERENCES products (id),
FOREIGN KEY (idOrder)  REFERENCES orders (id)
);
/* Fin tabla productOrder */

/* Inicio tabla product_user */
-- CREATE TABLE productUser(
--     id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
--     userId INT(10) UNSIGNED NOT NULL,
--     productId INT(10) UNSIGNED NOT NULL,
--     visited TINYINT(0) NOT NULL,
--     PRIMARY KEY (id),
--     FOREIGN KEY (userId) REFERENCES users (id),
--     FOREIGN KEY (productId) REFERENCES products (id)
-- );
/* Fin tabla product_user */



/* Inicio valores de tabla product */
INSERT INTO products(id, title, productDescription, sku, category, color, categoryGender, categorySport,brand ,price, size, stock, discount, images)
VALUES 
(default,"Camiseta Barcelona Nike Tercer Recambio Stadium Verde","La camiseta de f??tbol para hombre 3?? Recambio Stadium del FC Barcelona 2019/20 est?? confeccionada con tela transpirable Dri-Fit que absorbe el sudor y te mantiene fresco, seco y c??modo tanto dentro como fuera de la cancha. El ajuste est??ndar hace que la prenda se adapte al cuerpo y ofrezca m??s espacio para mayor movilidad.", 559389192, "Camisetas","Cyan","Hombres","F??tbol","Nike",8199, "L", 100, 20, "/img/products/barcelona-nike.jpg"),
(default, "Buzo color negro de alta calidad para esos d??as fr??os","Dise??ado por especialistas para los que aman el deporte todo el a??o y quieren tener siempre un buzo traspirable, de alta calidad y con estilo.", 928371073,"Buzos", "Negro","Unisex/otros","Casual","",6788, "M", 100, 10,"/img/products/buzo-negro.jpg"),
(default,"Camiseta de Argentina Adidas Alternativa Messi 10 ni??o Petroleo","Su dise??o es un emblema pintado en tonos azules que reflejan el esplendor de los glaciares del pa??s. Est?? confeccionada con tecnologia Aeroready que mantiene tu cuerpo fresco y seco. El escudo aplicado de la Selecci??n le demuestra a todos lo que sent??s por el equipo.", 1774695020,"Camisetas","Azul","Ni??os","F??tbol","Adidas",7999,"L",50,0, "/img/products/camisa-argentina-messi.jpg"),
(default,"Remera Puma Entrenamiento RTG Azul","Ya sea que salgas a la calle o vayas al gimnasio, esta remera cl??sica te mantendr?? seco y c??modo con nuestra tecnolog??a dryCELL que absorbe la humedad y mangas ragl??n cortas. El estampado del logo de PUMA Cat le da un toque caracter??stico a esta prenda ajustada.", 449217699,"Camisetas", "Azul","Unisex/otros","Running","Puma",3299,"L",19,5, "/img/products/remera-puma-entrenamiento.jpg"),
(default, "Zapatillas Running Topper Boro 2 Azul","Segunda generaci??n de este calzado, un concepto cerrado y reforzado ideal para uso diario. Posee lengua textil que brinda mayor respirabilidad. Su capellada en cuero sint??tico con perforaciones tiene un refuerzo en tal??n para mayor estabilidad.",124401457,"Calzado","Azul","Unisex/otros","Running","Topper",5799,"46",30,0,"/img/products/zapatillas-running-topper.jpg"),
(default,"Short de San Lorenzo Nike Oficial","Presentamos el nuevo Short NIKE Titular San Lorenzo 2021/22, llev?? tu amor por el Cicl??n vayas donde vayas y lucite en la cancha con los colores m??s lindos. El tejido Dri Fit absorbe el sudor, reduciendo el roce y ayudando a mantenerte seco y c??modo. Cintura elastizada con cord??n de ajuste interno. Logo NIKE bordado. Escudo CASLA aplicado.",44819363,"Pantalon corto","Blanco","Hombres","F??tbol","Nike",4499,"M",100,5, "/img/products/shortDeportivoSanLorenzo.png"),
(default, "Gorra Nike Legacy91 Negra","Cuenta con cierre ajustable y una suave banda para la frente.",11451103,"Gorras","Gris","Unisex/otros","Casual","Nike",2500,"L",100,0, "/img/products/gorraNike.png"),
(default, "Calcetines de Chelsea FC","Pensados para la mejor traspirabilidad y llevar siempre contigo unos calcetines de tu cuadro favorito.",87281561,"Medias","Amarillo","Unisex/otros","Casual","",1999,"46",50,0, "/img/products/mediasCFC.png"),
(default,"Zapatillas deportivas Blue sky","Con cordones, detalles reflectantes, flexibles y traspirables. Acolchadas para su mayor comodidad al realizar deporte.",194783726,"Calzado","Azul","Unisex/otros","Running","",5499,"44",50,10, "/img/products/zapatillasBlue.png"),
(default,"Campera impermeable deportiva","Cualidades impermeable y traspirable. De poliester y tejido reforzado.",73371960,"Camisetas","Negro","Unisex/otros","Casual","",8999,"XL",50,15, "/img/products/camperaDeportiva.png"),
(default,"Pantal??n Puma training mujer","Pantal??n Puma para mujer. Con cintura alta, de color negro y hecho de poliester. Ideal para cualquier actividad en la que se busque comodidad y estilo. ",29304244,"Pantalones","Negro","Mujeres","Running","Puma",6789,"M",100,10, "/img/products/pantalonMujerPuma.jpg"),
(default,"Remera Nike Run Dvn Miler","Los materiales livianos se combinan con detalles reflectantes que los vuelven muy funcionales para todo el d??a. Tecnolog??a Dri-FIT.",95830429,"Camisetas","Negro","Unisex/otros","Running","Nike",4999,"L",100,5, "/img/products/remeraNikeMujer.png"),
(default,"Rompevientos Nike Mujer","Rompevientos Essential Jacket, con un tejido Woven repelente al agua que te protege de la lluvia. Incluye capucha para protecci??n total.",83163856,"Camperas","Rosado","Mujeres","Casual","",13999,"S",70,10, "/img/products/rompevientosNikeMujer.jpg"),
(default,"Top Reebok High Neck","El top Reebok Workout Ready High Neck tiene tecnolog??a Speedwick que absorbe el sudor para que entrenes sin dificultades. Tejido entrelazado 91% poli??ster reciclado / 9% elastano.",576302248,"Camisetas","Negro","Unisex/otros","Running","",4679,"M",50,15, "/img/products/topReebokMujer.jpg"),
(default,"Zapatilla Skechers Dynamight 2.0","Zapatilla deportiva de entrenamiento y de confort con cordones y el??stico. Tiene entresuela el??stica, plantilla Memory Foam insole y parte superior malla knit con acabado jaspeado.",24584019,"Calzado","Gris","Unisex/otros","Casual","",8899,"38",40,10, "/img/products/zapatillasSkechersMujer.jpg"),
(default,"Pantal??n Nike Ni??o NSW PANT","Pantal??n para ni??os Nike NSW Jersey Jogger. Confeccionado en algod??n rustico.",78965444,"Pantalones","Azul","Ni??os","Casual","Nike",5299,"S",100,0, "/img/products/pantalonNikeNino.jpg"),
(default,"Remera Vans Ni??o","Remera Vans manga corta con escote redondo y estampa en el frente. Un b??sico para la comodidad y la moda de un ni??o.",55792481,"Camisetas","Rojo","Ni??os","Casual","Vans",2799,"M",60,0, "/img/products/remeraVansNino.jpg"),
(default,"Zapatilla New Balance Ni??o 247","Zapatillas New Balance 247 classic para ni??os, pensadas para todo tipo de actividad infantil. Empeine de mesh completamente transpirable y un ajuste el??stico muy c??modo.",57498523,"Calzado","Salm??n","Ni??os","Casual","New balance",6749,"26",80,20, "/img/products/zapatillaNewBalanceNino.jpg"),
(default,"Sandalias Crocs Ni??o","Hechas con material Croslite, moldeable y resistente al agua que permite tener un calzado confortable. Los puertos de ventilaci??n drenan el agua y la suciedad.",03033454,"Calzado","Verde","Ni??os","Casual","Crocs",2999,"24",100,0, "/img/products/sandaliasCrocsNino.jpg"),
(default,"Buzo Vans Ni??o","Buzo cuello redondo Cassic Crew Vans Boys. De algodon con frisa y terminaciones con pu??o, da como resultado un cl??sico de la indumentaria usable para todo tipo de actividades.",85358355,"Camperas","Azul","Ni??os","Casual","Vans",5299,"S",50,10, "/img/products/buzoVansNino.jpg");
/* Fin valores de tabla product */


-- SET FOREIGN_KEY_CHECKS = 0;
/* Inicio valores de tabla productImage */
-- INSERT INTO productImages(id, productId, imgName)
-- VALUES 
-- (default, 1, 1),
-- (default, 1, 7),
-- (default, 1, 2),
-- (default, 2, 12),
-- (default, 2, 8),
-- (default, 3, 11),
-- (default, 3, 15),
-- (default, 3, 3),
-- (default, 4, 9),
-- (default, 4, 13),
-- (default, 4, 18),
-- (default, 4, 16),
-- (default, 5, 10),
-- (default, 5, 14),
-- (default, 5, 6),
-- (default, 1, 4),
-- (default, 4, 19);
/* Fin valores de tabla productImage */



/* Inicio valores de tabla category */
-- INSERT INTO categories(id, categorySport, categoryGender, ofertProduct, brand, categoryType)
-- VALUES
-- (default, "futbol", "hombre", "15", "Nike", "Remera"),
-- (default, "Tenis", "hombre", "25", "Adidas", "Pantal??n"),
-- (default, "futbol", "ni??o", "20", "Adidas", "Zapatillas"),
-- (default, "Voley", "mujer", "40", "Puma", "Remera"),
-- (default, "Basket", "hombre", "30", "Nike", "Medias");

/* Fin valores de tabla category */


/* Inicio valores de tabla categoryProduct */
-- INSERT INTO categoryProduct(id, productId, categoryProductId)
-- VALUES 
-- (default, 1, 1),
-- (default, 3, 2),
-- (default, 1, 5),
-- (default, 2, 2),
-- (default, 4, 2),
-- (default, 3, 1),
-- (default, 3, 5),
-- (default, 2, 3),
-- (default, 4, 2),
-- (default, 1, 1),
-- (default, 1, 2),
-- (default, 4, 1),
-- (default, 6, 4),
-- (default, 5, 1),
-- (default, 8, 2),
-- (default, 1, 4),
-- (default, 4, 1);

/* Fin valores de tabla product_categoryProduct */

/* Inicio valores de tabla user */
INSERT INTO users (id, firstName, lastName, email, userPassword, userImage)
VALUES
(default, 'Emiliano', 'Martinez', 'emimartinez@gmail.com', 'aulasDH34', '/img/avatars/usuarioEmiliano.jpeg'),
(default, 'Leandro', 'Paredes', 'leandroparedes@gmail.com', 'aulasDH35', '/img/avatars/usuarioLeandro.jpeg'),
(default, 'Micaela', 'Perez', 'mikaperez@gmail.com', 'aulasDH36', '/img/avatars/usuarioMicaela.jpeg'),
(default, 'Bruno', 'Zuculini', 'brunozucu@gmail.com', 'aulasDH37', '/img/avatars/usuarioBruno.jpeg'),
(default, 'Lucia', 'Cruz', 'lucocruz@gmail.com', 'aulasDH38', '/img/avatars/usuarioLucia.jpeg');

/* Fin valores de tabla user */


/* Inicio valores de tabla product_user */
/* 
No hay usuarios poblados, va a arrojar error 
*/
-- INSERT INTO productUser(id, userId, productId, visited)
-- VALUES 
-- (default, 1, 1, 1),
-- (default, 1, 7, 1),
-- (default, 1, 2, 0),
-- (default, 2, 12, 0),
-- (default, 2, 8, 1),
-- (default, 3, 11, 1),
-- (default, 3, 15, 0),
-- (default, 3, 3, 1),
-- (default, 4, 9, 0),
-- (default, 4, 13, 0),
-- (default, 4, 18, 0),
-- (default, 4, 16, 0),
-- (default, 5, 10, 1),
-- (default, 5, 14, 1),
-- (default, 5, 6, 1),
-- (default, 1, 4, 1),
-- (default, 4, 19, 0),
-- (default, 1, 5, 1),
-- (default, 2, 17, 1),
-- (default, 3, 20, 0);
/* Fin valores de tabla product_user */