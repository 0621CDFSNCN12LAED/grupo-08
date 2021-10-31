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

/* Inicio tabla category */
CREATE TABLE category(
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    categorySport VARCHAR(100) NOT NULL,
    categoryGender VARCHAR(100) NOT NULL,
    /* Podemos añadir una lógica que
    En los formularios, solo se pueda seleccionar in-sale o visited */
    statusProduct VARCHAR(7) NOT NULL,
    statusInSale VARCHAR(3) NOT NULL, /* "on" "off" */
    statusVisited VARCHAR(3) NOT NULL, /* "on" "off" */
    brand VARCHAR(100) NOT NULL, /* Marca */
    categoryType VARCHAR(100) NOT NULL,
)
/* Fin tabla category */

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

/* Inicio valores de tabla product */
INSERT INTO product (id, title, productDescription, sku, color, price, size, stock, discount)
VALUES 
(default,
"Camiseta Barcelona Nike Tercer Recambio Stadium Verde",
"La camiseta de fútbol para hombre 3° Recambio Stadium del FC Barcelona 2019/20 está confeccionada con tela transpirable Dri-Fit que absorbe el sudor y te mantiene fresco, seco y cómodo tanto dentro como fuera de la cancha. El ajuste estándar hace que la prenda se adapte al cuerpo y ofrezca más espacio para mayor movilidad.",
55938919277,
"Cyan",
8199,
"L",
100,
20),
(default,
"Buzo color negro de alta calidad para esos días fríos",
"Diseñado por especialistas para los que aman el deporte todo el año y quieren tener siempre un buzo traspirable, de alta calidad y con estilo.",
92837107382,
"Negro",
6788,
"M",
100,
10),
(default,
"Camiseta de Argentina Adidas Alternativa Messi 10 niño Petroleo",
"Su diseño es un emblema pintado en tonos azules que reflejan el esplendor de los glaciares del país. Está confeccionada con tecnologia Aeroready que mantiene tu cuerpo fresco y seco. El escudo aplicado de la Selección le demuestra a todos lo que sentís por el equipo.",
177469502057,
"Azul",
7999,
"L",
50,
0),
(default,
"Remera Puma Entrenamiento RTG Azul",
"Ya sea que salgas a la calle o vayas al gimnasio, esta remera clásica te mantendrá seco y cómodo con nuestra tecnología dryCELL que absorbe la humedad y mangas raglán cortas. El estampado del logo de PUMA Cat le da un toque característico a esta prenda ajustada.",
449217699478,
"Azul",
3299,
"L",
19,
5),
(default, 
"Zapatillas Running Topper Boro 2 Azul",
"Segunda generación de este calzado, un concepto cerrado y reforzado ideal para uso diario. Posee lengua textil que brinda mayor respirabilidad. Su capellada en cuero sintético con perforaciones tiene un refuerzo en talón para mayor estabilidad.",
1244014578,
"Azul",
5799,
"46",
30,
0),
(default,
"Short de San Lorenzo Nike Oficial",
"Presentamos el nuevo Short NIKE Titular San Lorenzo 2021/22, llevá tu amor por el Ciclón vayas donde vayas y lucite en la cancha con los colores más lindos. El tejido Dri Fit absorbe el sudor, reduciendo el roce y ayudando a mantenerte seco y cómodo. Cintura elastizada con cordón de ajuste interno. Logo NIKE bordado. Escudo CASLA aplicado.",
448193637,
"Blanco",
4499,
"M",
100,
5),
(default,
"Gorra Nike Legacy91 Negra",
"Cuenta con cierre ajustable y una suave banda para la frente.",
114511036,
"Gris",
2500,
"L",
100,
0),
(default,
"Calcetines de Chelsea FC",
"Pensados para la mejor traspirabilidad y llevar siempre contigo unos calcetines de tu cuadro favorito.",
8728156100,
"Amarillo",
1999,
"46",
50,
0),
(default,
"Zapatillas deportivas Blue sky",
"Con cordones, detalles reflectantes, flexibles y traspirables. Acolchadas para su mayor comodidad al realizar deporte.",
194783726,
"Azul",
5499,
"44",
50,
10),
(default,
"Campera impermeable deportiva",
"Cualidades impermeable y traspirable. De poliester y tejido reforzado.",
73371960,
"Negro",
8999,
"XL",
50,
15),
(default,
"Pantalón Puma training mujer",
"Pantalón Puma para mujer. Con cintura alta, de color negro y hecho de poliester. Ideal para cualquier actividad en la que se busque comodidad y estilo. ",
2930424401,
"Negro",
6789,
"M",
100,
10),
(default,
"Remera Nike Run Dvn Miler",
"Los materiales livianos se combinan con detalles reflectantes que los vuelven muy funcionales para todo el día. Tecnología Dri-FIT.",
9583042904,
"Negro",
4999,
"L",
100,
5),
(default,
"Rompevientos Nike Mujer",
"Rompevientos Essential Jacket, con un tejido Woven repelente al agua que te protege de la lluvia. Incluye capucha para protección total.",
8316385632,
"Rosado",
13999,
"S",
70,
10),
(default,
"Top Reebok High Neck",
"El top Reebok Workout Ready High Neck tiene tecnología Speedwick que absorbe el sudor para que entrenes sin dificultades. Tejido entrelazado 91% poliéster reciclado / 9% elastano.",
5763022489,
"Negro",
4679,
"M",
50,
15),
(default,
"Zapatilla Skechers Dynamight 2.0",
"Zapatilla deportiva de entrenamiento y de confort con cordones y elástico. Tiene entresuela elástica, plantilla Memory Foam insole y parte superior malla knit con acabado jaspeado.",
2458401933,
"Gris",
8899,
"38",
40,
10),
(default,
"Pantalón Nike Niño NSW PANT",
"Pantalón para niños Nike NSW Jersey Jogger. Confeccionado en algodón rustico.",
7896544401,
"Azul",
5299,
"S",
100,
0),
(default,
"Remera Vans Niño",
"Remera Vans manga corta con escote redondo y estampa en el frente. Un básico para la comodidad y la moda de un niño.",
5579248166,
"Rojo",
2799,
"M",
60,
0),
(default,
"Zapatilla New Balance Niño 247",
"Zapatillas New Balance 247 classic para niños, pensadas para todo tipo de actividad infantil. Empeine de mesh completamente transpirable y un ajuste elástico muy cómodo.",
5749852366,
"Salmón",
6749,
"26",
80,
20),
(default,
"Sandalias Crocs Niño",
"Hechas con material Croslite, moldeable y resistente al agua que permite tener un calzado confortable. Los puertos de ventilación drenan el agua y la suciedad.",
0303345436,
"Verde",
2999,
"24",
100,
0),
(default,
"Buzo Vans Niño",
"Buzo cuello redondo Cassic Crew Vans Boys. De algodon con frisa y terminaciones con puño, da como resultado un clásico de la indumentaria usable para todo tipo de actividades.",
8535835532,
"Azul",
5299,
"S",
50,
10);
/* Fin valores de tabla product */


/* Inicio valores de tabla productImage */
INSERT INTO productImage (id, productId, imgName)
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
(default, 4, 19),
/* Fin valores de tabla productImage */



/* Inicio valores de tabla category */
INSERT INTO category(
id, 
categorySport, 
categoryGender, 
statusProduct, 
statusInSale, 
statusVisited, 
brand, 
categoryType)
VALUES
(default, "futbol", "hombre", "estadoProducto?", "yes", "no", "Nike", "Remera"),
(default, "Tenis", "hombre", "estadoProducto?", "yes", "yes", "Adidas", "Pantalón"),
(default, "futbol", "niño", "estadoProducto?", "yes", "no", "Adidas", "Zapatillas")
(default, "Voley", "mujer", "estadoProducto?", "no", "yes", "Puma", "Remera")
(default, "Basket", "hombre", "estadoProducto?", "no", "no", "Nike", "Medias")

/* Fin valores de tabla category */


/* Inicio valores de tabla product_categoryProduct */
INSERT INTO productImage (id, productId, categoryProductId)
VALUES 
(default, 1, 1),
(default, 3, 7),
(default, 1, 5),
(default, 2, 10),
(default, 4, 2),
(default, 3, 12),
(default, 3, 5),
(default, 2, 13),
(default, 4, 9),
(default, 1, 13),
(default, 1, 18),
(default, 4, 16),
(default, 6, 10),
(default, 5, 14),
(default, 8, 6),
(default, 1, 4),
(default, 4, 19),

/* Fin valores de tabla product_categoryProduct */



/* Inicio valores de tabla product_user */
INSERT INTO product_user (id, users_id, products_id)
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
(default, 4, 19),
(default, 1, 5),
(default, 2, 17),
(default, 3, 20);
/* Fin valores de tabla product_user */









