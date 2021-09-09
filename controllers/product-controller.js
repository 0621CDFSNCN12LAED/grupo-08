const productos = [
    {
        id: 1,
        img: "/img/products/barcelona-nike.jpg",
        title: "Camiseta Barcelona Nike Tercer Recambio Stadium Verde",
        description:
            "La camiseta de fútbol para hombre 3° Recambio Stadium del FC Barcelona 2019/20 está confeccionada con tela transpirable Dri-Fit que absorbe el sudor y te mantiene fresco, seco y cómodo tanto dentro como fuera de la cancha. El ajuste estándar hace que la prenda se adapte al cuerpo y ofrezca más espacio para mayor movilidad",
        sku: "55938919277",
        category: "Hombre",
        color: "Cyan",
        price: 8.199,
        category: "Hombre",
        size: "L",
        price: 8.199,
    },
    {
        id: 2,
        img: "/img/products/buzo-negro.jpg",
        title: "Buzo Con Capucha 361° Urban Negro",
        description:
            "Disfrutá del día a día con el buzo 361°, confeccionado con un corte suelto que te brindará la comodidad que merecés. Capucha con cordón de ajuste visible. Bolsillo canguro. Cintura y puños elásticos.",
        sku: "47856617527820",
        category: "Hombre",
        color: "Negro",
        category: "Hombre",
        size: "S",
        price: 7.589,
    },
    {
        id: 3,
        img: "/img/products/camisa-argentina-messi.jpg",
        title: "Camiseta de Argentina Adidas Alternativa Messi 10 niño Petroleo",
        description:
            "Su diseño es un emblema pintado en tonos azules que reflejan el esplendor de los glaciares del país. Está confeccionada con tecnologia Aeroready que mantiene tu cuerpo fresco y seco. El escudo aplicado de la Selección le demuestra a todos lo que sentís por el equipo.",
        sku: "177469502057",
        category: "Hombre",
        color: "Azul",
        size: "L",
        price: 7.999,
    },
    {
        id: 4,
        img: "/img/products/remera-puma-entrenamiento.jpg",
        title: "Remera Puma Entrenamiento RTG Azul",
        description:
            "Ya sea que salgas a la calle o vayas al gimnasio, esta remera clásica te mantendrá seco y cómodo con nuestra tecnología dryCELL que absorbe la humedad y mangas raglán cortas. El estampado del logo de PUMA Cat le da un toque característico a esta prenda ajustada.",
        sku: "449217699478",
        category: "Hombre",
        color: "Azul",
        size: "L",
        price: 3.299,
    },
    {
        id: 5,
        img: "/img/products/zapatillas-running-topper.jpg",
        title: "Zapatillas Running Topper Boro 2 Azul",
        description:
            "Segunda generación de este calzado, un concepto cerrado y reforzado ideal para uso diario. Posee lengua textil que brinda mayor respirabilidad. Su capellada en cuero sintético con perforaciones tiene un refuerzo en talón para mayor estabilidad.",
        sku: "1244014578",
        category: "Hombre",
        size: "46",
        color: "Azul",
        price: 5.799,
    },
    {
        id: 6,
        img: "/img/products/shortDeportivoSanLorenzo.png",
        title: "Short de San Lorenzo Nike Oficial",
        description:
            "Presentamos el nuevo Short NIKE Titular San Lorenzo 2021/22, llevá tu amor por el Ciclón vayas donde vayas y lucite en la cancha con los colores más lindos. El tejido Dri Fit absorbe el sudor, reduciendo el roce y ayudando a mantenerte seco y cómodo. Cintura elastizada con cordón de ajuste interno. Logo NIKE bordado. Escudo CASLA aplicado.",
        sku: "448193637",
        category: "Hombre",
        /* ["Hombres", "mujeres"] */
        color: "Blanco",
        size: "M",
        price: 4.499,
    },
    {
        id: 7,
        img: "/img/products/gorraNike.png",
        title: "Gorra Nike Legacy91 Negra",
        description:
            "Cuenta con cierre ajustable y una suave banda para la frente.",
        sku: "114511036",
        category: "Hombre",
        /* ["Hombres", "mujeres"] */
        color: "Gris",
        size: "L",
        price: 1.5,
    },
    {
        id: 8,
        img: "/img/products/mediasCFC.png",
        title: "Calcetines de Chelsea FC",
        description:
            "Pensados para la mejor traspirabilidad y llevar siempre contigo unos calcetines de tu cuadro favorito.",
        sku: "8728156100",
        category: "Hombre",
        size: "46",
        color: "Amarillo",
        price: 1.999,
    },
    {
        id: 9,
        img: "/img/products/zapatillasBlue.png",
        title: "Zapatillas deportivas Blue sky",
        description:
            "Con cordones, detalles reflectantes, flexibles y traspirables. Acolchadas para su mayor comodidad al realizar deporte.",
        sku: "194783726",
        category: "Hombre",
        /* ["Hombres", "mujeres"] */
        color: "Azul",
        size: "44",
        price: 5.499,
    },
    {
        id: 10,
        img: "/img/products/camperaDeportiva.png",
        title: "Campera impermeable deportiva",
        description:
            "Cualidades impermeable y traspirable. De poliester y tejido reforzado.",
        sku: "73371960",
        category: "Hombre",
        color: "Negro",
        size: "xl",
        price: 8.999,
    },
    {
        id: 11,
        img: "/img/products/pantalonMujerPuma.jpg",
        title: "Pantalón Puma training mujer",
        description:
            "Pantalón Puma para mujer. Con cintura alta, de color negro y hecho de poliester. Ideal para cualquier actividad en la que se busque comodidad y estilo. ",
        sku: "2930424401",
        category: "Mujer",
        size: "M",
        color: "Negro",
        price: 6.789,
    },
    {
        id: 12,
        img: "/img/products/remeraNikeMujer.png",
        title: "Remera Nike Run Dvn Miler",
        description:
            "Los materiales livianos se combinan con detalles reflectantes que los vuelven muy funcionales para todo el día. Tecnología Dri-FIT.",
        sku: "9583042904",
        category: "Mujer",
        size: "L",
        color: "Negro",
        price: 4.999,
    },
    {
        id: 13,
        img: "/img/products/rompevientosNikeMujer.jpg",
        title: "Rompevientos Nike Mujer",
        description:
            "Rompevientos Essential Jacket, con un tejido Woven repelente al agua que te protege de la lluvia. Incluye capucha para protección total.",
        sku: "8316385632",
        category: "Mujer",
        size: "S",
        color: "Rosado",
        price: 13.999,
    },
    {
        id: 14,
        img: "/img/products/topReebokMujer.jpg",
        title: "Top Reebok High Neck",
        description:
            "El top Reebok Workout Ready High Neck tiene tecnología Speedwick que absorbe el sudor para que entrenes sin dificultades. Tejido entrelazado 91% poliéster reciclado / 9% elastano.",
        sku: "5763022489",
        category: "Mujer",
        size: "M",
        color: "Negro",
        price: 4.679,
    },
    {
        id: 15,
        img: "/img/products/zapatillasSkechersMujer.jpg",
        title: "Zapatilla Skechers Dynamight 2.0",
        description:
            "Zapatilla deportiva de entrenamiento y de confort con cordones y elástico. Tiene entresuela elástica, plantilla Memory Foam insole y parte superior malla knit con acabado jaspeado.",
        sku: "2458401933",
        category: "Mujer",
        size: "38",
        color: "Gris",
        price: 8.899,
    },
    {
        id: 16,
        img: "/img/products/pantalonNikeNino.jpg",
        title: "Pantalón Nike Niño NSW PANT",
        description:
            "Pantalón para niños Nike NSW Jersey Jogger. Confeccionado en algodón rustico.",
        sku: "7896544401",
        category: "Niños",
        size: "S",
        color: "Azul",
        price: 5.299,
    },
    {
        id: 17,
        img: "/img/products/remeraVansNino.jpg",
        title: "Remera Vans Niño",
        description:
            "Remera Vans manga corta con escote redondo y estampa en el frente. Un básico para la comodidad y la moda de un niño.",
        sku: "5579248166",
        category: "Niños",
        size: "M",
        color: "Rojo",
        price: 2.799,
    },
    {
        id: 18,
        img: "/img/products/zapatillaNewBalanceNino.jpg",
        title: "Zapatilla New Balance Niño 247",
        description:
            "Zapatillas New Balance 247 classic para niños, pensadas para todo tipo de actividad infantil. Empeine de mesh completamente transpirable y un ajuste elástico muy cómodo.",
        sku: "5749852366",
        category: "Niños",
        size: "26",
        color: "Salmón",
        price: 6.749,
    },
    {
        id: 19,
        img: "/img/products/sandaliasCrocsNino.jpg",
        title: "Sandalias Crocs Niño",
        description:
            "Hechas con material Croslite, moldeable y resistente al agua que permite tener un calzado confortable. Los puertos de ventilación drenan el agua y la suciedad.",
        sku: "0303345436",
        category: "Niños",
        size: "24",
        color: "Verde",
        price: 2.999,
    },
    {
        id: 20,
        img: "/img/products/buzoVansNino.jpg",
        title: "Buzo Vans Niño",
        description:
            "Buzo cuello redondo Cassic Crew Vans Boys. De algodon con frisa y terminaciones con puño, da como resultado un clásico de la indumentaria usable para todo tipo de actividades.",
        sku: "8535835532",
        category: "Niños",
        size: "S",
        color: "Azul",
        price: 5.299,
    },
];
const controllerProducts = {
    index: (req, res) => {
        res.render("index", {
            productos: productos,
        });
    },
    productCart: (req, res) => {
        res.render("productCart");
    },
};

module.exports = controllerProducts;
