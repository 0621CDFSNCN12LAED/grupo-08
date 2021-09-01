const productos = [
    {
        id: 1,
        img: "/img/products/barcelona-nike.jpg",
        title: "Camiseta Barcelona Nike Tercer Recambio Stadium Verde",
        description: "La camiseta de fútbol para hombre 3° Recambio Stadium del FC Barcelona 2019/20 está confeccionada con tela transpirable Dri-Fit que absorbe el sudor y te mantiene fresco, seco y cómodo tanto dentro como fuera de la cancha. El ajuste estándar hace que la prenda se adapte al cuerpo y ofrezca más espacio para mayor movilidad",
        sku: "55938919277",
        price: 8.199
    },
    {
        id: 2,
        img: "/img/products/buzo-negro.jpg",
        title: "Buzo Con Capucha 361° Urban Negro",
        description: "Disfrutá del día a día con el buzo 361°, confeccionado con un corte suelto que te brindará la comodidad que merecés. Capucha con cordón de ajuste visible. Bolsillo canguro. Cintura y puños elásticos.",
        sku: "47856617527820",
        price: 7.589
    },
    {
        id: 3,
        img: "/img/products/camisa-argentina-messi.jpg",
        title: "Camiseta de Argentina Adidas Alternativa Messi 10 niño Petroleo",
        description: "Su diseño es un emblema pintado en tonos azules que reflejan el esplendor de los glaciares del país. Está confeccionada con tecnologia Aeroready que mantiene tu cuerpo fresco y seco. El escudo aplicado de la Selección le demuestra a todos lo que sentís por el equipo.",
        sku: "177469502057",
        price: 7.999
    },
    {
        id: 4,
        img: "/img/products/remera-puma-entrenamiento.jpg",
        title: "Remera Puma Entrenamiento RTG Azul",
        description: "Ya sea que salgas a la calle o vayas al gimnasio, esta remera clásica te mantendrá seco y cómodo con nuestra tecnología dryCELL que absorbe la humedad y mangas raglán cortas. El estampado del logo de PUMA Cat le da un toque característico a esta prenda ajustada.",
        sku: "449217699478",
        price: 3.299
    },
    {
        id: 5,
        img: "/img/products/zapatillas-running-topper.jpg",
        title: "Zapatillas Running Topper Boro 2 Azul",
        description: "Segunda generación de este calzado, un concepto cerrado y reforzado ideal para uso diario. Posee lengua textil que brinda mayor respirabilidad. Su capellada en cuero sintético con perforaciones tiene un refuerzo en talón para mayor estabilidad.",
        sku: "1244014578",
        price: 5.799
    },
    {
        id: 6,
        img: "/img/products/shortDeportivoSanLorenzo.png",
        title: "Short de San Lorenzo Nike Oficial Blanco",
        description: "Presentamos el nuevo Short NIKE Titular San Lorenzo 2021/22, llevá tu amor por el Ciclón vayas donde vayas y lucite en la cancha con los colores más lindos. El tejido Dri Fit absorbe el sudor, reduciendo el roce y ayudando a mantenerte seco y cómodo. Cintura elastizada con cordón de ajuste interno. Logo NIKE bordado. Escudo CASLA aplicado.",
        sku: "448193637",
        price: 4.499
    },
    {
        id: 7,
        img: "/img/products/gorraNike.png",
        title: "Gorra Legacy91 Negra",
        description: "Cuenta con cierre ajustable y una suave banda para la frente.",
        sku: "114511036",
        price: 1.500
    },
    {
        id: 8,
        img: "/img/products/mediasCFC.png",
        title: "Calcetines de Chelsea FC",
        description: "Pensados para la mejor traspirabilidad y llevar siempre contigo unos calcetines de tu cuadro favorito.",
        sku: "8728156100",
        price: 1.999
    },
    {
        id: 9,
        img: "/img/products/zapatillasBlue.png",
        title: "Zapatillas deportivas Blue sky",
        description: "Con cordones, detalles reflectantes, flexibles y traspirables. Acolchadas para su mayor comodidad al realizar deporte.",
        sku: "194783726",
        price: 5.499
    },
    {
        id: 10,
        img: "/img/products/camperaDeportiva.png",
        title: "Campera impermeable deportiva",
        description: "Cualidades impermeable y traspirable. De poliester y tejido reforzado.",
        sku: "73371960",
        price: 8.999
    }

]
const controllerProducts = {
    index: (req, res) =>{
        res.render('index', {productos: productos});
    },
    productCart: (req, res) =>{
        res.render('productCart');
    }
}

module.exports = controllerProducts