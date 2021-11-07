/* Recuerden colocar comentarios al inicio */
/* Y al fin de cada tabla */

/* Inicio tabla product */
DROP DATABASE IF EXISTS all4sports;
CREATE DATABASE all4sports;
USE all4sports;
CREATE TABLE products(
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

/* Inicio tabla category */
CREATE TABLE categories(
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
    categorySport VARCHAR(100) NOT NULL,
    categoryGender VARCHAR(100) NOT NULL,
    ofertProduct INT(10) NOT NULL,
    brand VARCHAR(100) NOT NULL,
    categoryType VARCHAR(100) NOT NULL
);
/* Fin tabla category */



/* Inicio tabla Product Image */
CREATE TABLE productImages(
    id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
    productId INT(10) UNSIGNED NULL, 
    imgName VARCHAR(100) NOT NULL,
    FOREIGN KEY (productId)  REFERENCES products (id)
);
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
CREATE TABLE categoryProduct(
  id INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY NOT NULL,
  productId INT(10) UNSIGNED NOT NULL,
  categoryProductId INT(10) UNSIGNED NOT NULL,
  FOREIGN KEY (productId)  REFERENCES products (id),
  FOREIGN KEY (categoryProductId)  REFERENCES categories (id)
);
/* Fin tabla product_categoryProduct  */

/* Comienzo tabla order */

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
CREATE TABLE productUser(
    id INT(10) UNSIGNED AUTO_INCREMENT NOT NULL,
    userId INT(10) UNSIGNED NOT NULL,
    productId INT(10) UNSIGNED NOT NULL,
    visited TINYINT(0) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (userId) REFERENCES users (id),
    FOREIGN KEY (productId) REFERENCES products (id)
);
/* Fin tabla product_user */

/* Inicio valores de tabla product */
INSERT INTO products(id, title, productDescription, sku, color, price, size, stock, discount)
VALUES 
(default,"Camiseta Barcelona Nike Tercer Recambio Stadium Verde","La camiseta de fútbol para hombre 3° Recambio Stadium del FC Barcelona 2019/20 está confeccionada con tela transpirable Dri-Fit que absorbe el sudor y te mantiene fresco, seco y cómodo tanto dentro como fuera de la cancha. El ajuste estándar hace que la prenda se adapte al cuerpo y ofrezca más espacio para mayor movilidad.", 55938919277, "Cyan", 8199, "L", 100, 20),
(default, "Buzo color negro de alta calidad para esos días fríos","Diseñado por especialistas para los que aman el deporte todo el año y quieren tener siempre un buzo traspirable, de alta calidad y con estilo.", 92837107382, "Negro", 6788, "M", 100, 10),
(default,"Camiseta de Argentina Adidas Alternativa Messi 10 niño Petroleo","Su diseño es un emblema pintado en tonos azules que reflejan el esplendor de los glaciares del país. Está confeccionada con tecnologia Aeroready que mantiene tu cuerpo fresco y seco. El escudo aplicado de la Selección le demuestra a todos lo que sentís por el equipo.", 177469502057,"Azul",7999,"L",50,0),
(default,"Remera Puma Entrenamiento RTG Azul","Ya sea que salgas a la calle o vayas al gimnasio, esta remera clásica te mantendrá seco y cómodo con nuestra tecnología dryCELL que absorbe la humedad y mangas raglán cortas. El estampado del logo de PUMA Cat le da un toque característico a esta prenda ajustada.", 449217699478, "Azul",3299,"L",19,5),
(default, "Zapatillas Running Topper Boro 2 Azul","Segunda generación de este calzado, un concepto cerrado y reforzado ideal para uso diario. Posee lengua textil que brinda mayor respirabilidad. Su capellada en cuero sintético con perforaciones tiene un refuerzo en talón para mayor estabilidad.",1244014578,"Azul",5799,"46",30,0),
(default,"Short de San Lorenzo Nike Oficial","Presentamos el nuevo Short NIKE Titular San Lorenzo 2021/22, llevá tu amor por el Ciclón vayas donde vayas y lucite en la cancha con los colores más lindos. El tejido Dri Fit absorbe el sudor, reduciendo el roce y ayudando a mantenerte seco y cómodo. Cintura elastizada con cordón de ajuste interno. Logo NIKE bordado. Escudo CASLA aplicado.",448193637,"Blanco",4499,"M",100,5),
(default, "Gorra Nike Legacy91 Negra","Cuenta con cierre ajustable y una suave banda para la frente.",114511036,"Gris",2500,"L",100,0),
(default, "Calcetines de Chelsea FC","Pensados para la mejor traspirabilidad y llevar siempre contigo unos calcetines de tu cuadro favorito.",8728156100,"Amarillo",1999,"46",50,0),
(default,"Zapatillas deportivas Blue sky","Con cordones, detalles reflectantes, flexibles y traspirables. Acolchadas para su mayor comodidad al realizar deporte.",194783726,"Azul",5499,"44",50,10),
(default,"Campera impermeable deportiva","Cualidades impermeable y traspirable. De poliester y tejido reforzado.",73371960,"Negro",8999,"XL",50,15),
(default,"Pantalón Puma training mujer","Pantalón Puma para mujer. Con cintura alta, de color negro y hecho de poliester. Ideal para cualquier actividad en la que se busque comodidad y estilo. ",2930424401,"Negro",6789,"M",100,10),
(default,"Remera Nike Run Dvn Miler","Los materiales livianos se combinan con detalles reflectantes que los vuelven muy funcionales para todo el día. Tecnología Dri-FIT.",9583042904,"Negro",4999,"L",100,5),
(default,"Rompevientos Nike Mujer","Rompevientos Essential Jacket, con un tejido Woven repelente al agua que te protege de la lluvia. Incluye capucha para protección total.",8316385632,"Rosado",13999,"S",70,10),
(default,"Top Reebok High Neck","El top Reebok Workout Ready High Neck tiene tecnología Speedwick que absorbe el sudor para que entrenes sin dificultades. Tejido entrelazado 91% poliéster reciclado / 9% elastano.",5763022489,"Negro",4679,"M",50,15),
(default,"Zapatilla Skechers Dynamight 2.0","Zapatilla deportiva de entrenamiento y de confort con cordones y elástico. Tiene entresuela elástica, plantilla Memory Foam insole y parte superior malla knit con acabado jaspeado.",2458401933,"Gris",8899,"38",40,10),
(default,"Pantalón Nike Niño NSW PANT","Pantalón para niños Nike NSW Jersey Jogger. Confeccionado en algodón rustico.",7896544401,"Azul",5299,"S",100,0),
(default,"Remera Vans Niño","Remera Vans manga corta con escote redondo y estampa en el frente. Un básico para la comodidad y la moda de un niño.",5579248166,"Rojo",2799,"M",60,0),
(default,"Zapatilla New Balance Niño 247","Zapatillas New Balance 247 classic para niños, pensadas para todo tipo de actividad infantil. Empeine de mesh completamente transpirable y un ajuste elástico muy cómodo.",5749852366,"Salmón",6749,"26",80,20),
(default,"Sandalias Crocs Niño","Hechas con material Croslite, moldeable y resistente al agua que permite tener un calzado confortable. Los puertos de ventilación drenan el agua y la suciedad.",0303345436,"Verde",2999,"24",100,0),
(default,"Buzo Vans Niño","Buzo cuello redondo Cassic Crew Vans Boys. De algodon con frisa y terminaciones con puño, da como resultado un clásico de la indumentaria usable para todo tipo de actividades.",8535835532,"Azul",5299,"S",50,10);
/* Fin valores de tabla product */


/* Inicio valores de tabla productImage */
INSERT INTO productImages(id, productId, imgName)
VALUES 
(default, 1, 1),
(default, 1, 7),
(default, 1, 2),
(default, 2, 12),
(default, 2, 8),
(default, 3, 11),
(default, 3, 15),
(default, 3, 3),
(default, 4, 9),
(default, 4, 13),
(default, 4, 18),
(default, 4, 16),
(default, 5, 10),
(default, 5, 14),
(default, 5, 6),
(default, 1, 4),
(default, 4, 19);
/* Fin valores de tabla productImage */



/* Inicio valores de tabla category */
INSERT INTO categories(id, categorySport, categoryGender, ofertProduct, brand, categoryType)
VALUES
(default, "futbol", "hombre", "15", "Nike", "Remera"),
(default, "Tenis", "hombre", "25", "Adidas", "Pantalón"),
(default, "futbol", "niño", "20", "Adidas", "Zapatillas"),
(default, "Voley", "mujer", "40", "Puma", "Remera"),
(default, "Basket", "hombre", "30", "Nike", "Medias");

/* Fin valores de tabla category */


/* Inicio valores de tabla categoryProduct */
INSERT INTO categoryProduct(id, productId, categoryProductId)
VALUES 
(default, 1, 1),
(default, 3, 2),
(default, 1, 5),
(default, 2, 2),
(default, 4, 2),
(default, 3, 1),
(default, 3, 5),
(default, 2, 3),
(default, 4, 2),
(default, 1, 1),
(default, 1, 2),
(default, 4, 1),
(default, 6, 4),
(default, 5, 1),
(default, 8, 2),
(default, 1, 4),
(default, 4, 1);

/* Fin valores de tabla product_categoryProduct */

/* Inicio valores de tabla user */
INSERT INTO users (id, firstName, lastName, email, userPassword, userImage)
VALUES
(default, 'Emiliano', 'Martinez', 'emimartinez@gmail.com', 'aulasDH34', 'img'),
(default, 'Leandro', 'Paredes', 'leandroparedes@gmail.com', 'aulasDH35', 'img'),
(default, 'Enzo', 'Perez', 'enzoperez@gmail.com', 'aulasDH36', 'img'),
(default, 'Bruno', 'Zuculini', 'brunozucu@gmail.com', 'aulasDH37', 'img'),
(default, 'Nicolas', 'Cruz', 'nicocruz@gmail.com', 'aulasDH38', 'img');

/* Fin valores de tabla user */


/* Inicio valores de tabla product_user */
/* 
No hay usuarios poblados, va a arrojar error 
*/
INSERT INTO productUser(id, userId, productId, visited)
VALUES 
(default, 1, 1, 1),
(default, 1, 7, 1),
(default, 1, 2, 0),
(default, 2, 12, 0),
(default, 2, 8, 1),
(default, 3, 11, 1),
(default, 3, 15, 0),
(default, 3, 3, 1),
(default, 4, 9, 0),
(default, 4, 13, 0),
(default, 4, 18, 0),
(default, 4, 16, 0),
(default, 5, 10, 1),
(default, 5, 14, 1),
(default, 5, 6, 1),
(default, 1, 4, 1),
(default, 4, 19, 0),
(default, 1, 5, 1),
(default, 2, 17, 1),
(default, 3, 20, 0);
/* Fin valores de tabla product_user */



/* Inicio valores de tabla categoryProduct */
INSERT INTO categoryProduct (id, productId, categoryProductId)
VALUES
(default, 1, 2),
(default, 2, 2),
(default, 3, 2),
(default, 4, 2),
(default, 5, 2),
(default, 6, 2),
(default, 7, 2),
(default, 8, 2),
(default, 9, 2),
(default, 10, 2),
(default, 11, 2),
(default, 12, 2),
(default, 13, 2),
(default, 14, 2),
(default, 15, 2),
(default, 16, 2),
(default, 17, 2),
(default, 18, 2),
(default, 19, 2),
(default, 20, 2);
/* Fin valores de tabla categoryProduct */







