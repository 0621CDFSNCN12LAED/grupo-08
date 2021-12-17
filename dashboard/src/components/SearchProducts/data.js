import imgPrueba1 from "./img/barcelona-nike.jpg";
import imgPrueba2 from "./img/buzo-negro.jpg";
import imgPrueba3 from "./img/camisa-argentina-messi.jpg";
import imgPrueba4 from "./img/remera-puma-entrenamiento.jpg";
import imgPrueba5 from "./img/zapatillas-running-topper.jpg";
import imgPrueba6 from "./img/shortDeportivoSanLorenzo.png";
import imgPrueba7 from "./img/gorraNike.png";
import imgPrueba8 from "./img/mediasCFC.png";
import imgPrueba9 from "./img/zapatillasBlue.png";
import imgPrueba10 from "./img/camperaDeportiva.png";
import imgPrueba11 from "./img/pantalonMujerPuma.jpg";
import imgPrueba12 from "./img/remeraNikeMujer.png";
import imgPrueba13 from "./img/rompevientosNikeMujer.jpg";
import imgPrueba14 from "./img/topReebokMujer.jpg";
import imgPrueba15 from "./img/zapatillasSkechersMujer.jpg";
import imgPrueba16 from "./img/pantalonNikeNino.jpg";
import imgPrueba17 from "./img/remeraVansNino.jpg";
import imgPrueba18 from "./img/zapatillaNewBalanceNino.jpg";
import imgPrueba19 from "./img/sandaliasCrocsNino.jpg";
import imgPrueba20 from "./img/buzoVansNino.jpg";

const data = {
  productData: [
    {
      id: 1,
      title: "Camiseta Barcelona Nike Tercer Recambio Stadium Verde",
      productDescription:
        "La camiseta de fútbol para hombre 3° Recambio Stadium del FC Barcelona 2019/20 está confeccionada con tela transpirable Dri-Fit que absorbe el sudor y te mantiene fresco, seco y cómodo tanto dentro como fuera de la cancha. El ajuste estándar hace que la prenda se adapte al cuerpo y ofrezca más espacio para mayor movilidad.",
      price: "8199",
      images: imgPrueba1,
    },
    {
      id: 2,
      title: "Buzo color negro de alta calidad para esos días fríos",
      productDescription:
        "Diseñado por especialistas para los que aman el deporte todo el año y quieren tener siempre un buzo traspirable, de alta calidad y con estilo.",
      price: "6788",
      images: imgPrueba2,
    },
    {
      id: 3,
      title: "Camiseta de Argentina Adidas Alternativa Messi 10 niño Petroleo",
      productDescription:
        "Su diseño es un emblema pintado en tonos azules que reflejan el esplendor de los glaciares del país. Está confeccionada con tecnologia Aeroready que mantiene tu cuerpo fresco y seco. El escudo aplicado de la Selección le demuestra a todos lo que sentís por el equipo.",
      price: "7999",
      images: imgPrueba3,
    },
    {
      id: 4,
      title: "Remera Puma Entrenamiento RTG Azul",
      productDescription:
        "Ya sea que salgas a la calle o vayas al gimnasio, esta remera clásica te mantendrá seco y cómodo con nuestra tecnología dryCELL que absorbe la humedad y mangas raglán cortas. El estampado del logo de PUMA Cat le da un toque característico a esta prenda ajustada.",
      price: "3299",
      images: imgPrueba4,
    },
    {
      id: 5,
      title: "Zapatillas Running Topper Boro 2 Azul",
      productDescription:
        "Segunda generación de este calzado, un concepto cerrado y reforzado ideal para uso diario. Posee lengua textil que brinda mayor respirabilidad. Su capellada en cuero sintético con perforaciones tiene un refuerzo en talón para mayor estabilidad.",
      price: "5799",
      images: imgPrueba5,
    },
    {
      id: 6,
      title: "Short de San Lorenzo Nike Oficial",
      productDescription:
        "Presentamos el nuevo Short NIKE Titular San Lorenzo 2021/22, llevá tu amor por el Ciclón vayas donde vayas y lucite en la cancha con los colores más lindos. El tejido Dri Fit absorbe el sudor, reduciendo el roce y ayudando a mantenerte seco y cómodo. Cintura elastizada con cordón de ajuste interno. Logo NIKE bordado. Escudo CASLA aplicado.",
      price: "4499",
      images: imgPrueba6,
    },
    {
      id: 7,
      title: "Gorra Nike Legacy91 Negra",
      productDescription:
        "Cuenta con cierre ajustable y una suave banda para la frente.",
      price: "2500",
      images: imgPrueba7,
    },
    {
      id: 8,
      title: "Calcetines de Chelsea FC",
      productDescription:
        "Pensados para la mejor traspirabilidad y llevar siempre contigo unos calcetines de tu cuadro favorito.",
      price: "1999",
      images: imgPrueba8,
    },
    {
      id: 9,
      title: "Zapatillas deportivas Blue sky",
      productDescription:
        "Con cordones, detalles reflectantes, flexibles y traspirables. Acolchadas para su mayor comodidad al realizar deporte.",
      price: "5499",
      images: imgPrueba9,
    },
    {
      id: 10,
      title: "Campera impermeable deportiva",
      productDescription:
        "Cualidades impermeable y traspirable. De poliester y tejido reforzado.",
      price: "8999",
      images: imgPrueba10,
    },
    {
      id: 11,
      title: "Pantalón Puma training mujer",
      productDescription:
        "Pantalón Puma para mujer. Con cintura alta, de color negro y hecho de poliester. Ideal para cualquier actividad en la que se busque comodidad y estilo.",
      price: "6789",
      images: imgPrueba11,
    },
    {
      id: 12,
      title: "Remera Nike Run Dvn Miler",
      productDescription:
        "Los materiales livianos se combinan con detalles reflectantes que los vuelven muy funcionales para todo el día. Tecnología Dri-FIT.",
      price: "4999",
      images: imgPrueba12,
    },
    {
      id: 13,
      title: "Rompevientos Nike Mujer",
      productDescription:
        "Rompevientos Essential Jacket, con un tejido Woven repelente al agua que te protege de la lluvia. Incluye capucha para protección total.",
      price: "13999",
      images: imgPrueba13,
    },
    {
      id: 14,
      title: "Top Reebok High Neck",
      productDescription:
        "El top Reebok Workout Ready High Neck tiene tecnología Speedwick que absorbe el sudor para que entrenes sin dificultades. Tejido entrelazado 91% poliéster reciclado / 9% elastano.",
      price: "4679",
      images: imgPrueba14,
    },
    {
      id: 15,
      title: "Zapatilla Skechers Dynamight 2.0",
      productDescription:
        "Zapatilla deportiva de entrenamiento y de confort con cordones y elástico. Tiene entresuela elástica, plantilla Memory Foam insole y parte superior malla knit con acabado jaspeado.",
      price: "8899",
      images: imgPrueba15,
    },
    {
      id: 16,
      title: "Pantalón Nike Niño NSW PANT",
      productDescription:
        "Pantalón para niños Nike NSW Jersey Jogger. Confeccionado en algodón rústico.",
      price: "5299",
      images: imgPrueba16,
    },
    {
      id: 17,
      title: "Remera Vans Niño",
      productDescription:
        "Remera Vans manga corta con escote redondo y estampa en el frente. Un básico para la comodidad y la moda de un niño.",
      price: "2799",
      images: imgPrueba17,
    },
    {
      id: 18,
      title: "Zapatilla New Balance Niño 247",
      productDescription:
        "Zapatillas New Balance 247 classic para niños, pensadas para todo tipo de actividad infantil. Empeine de mesh completamente transpirable y un ajuste elástico muy cómodo.",
      price: "6749",
      images: imgPrueba18,
    },
    {
      id: 19,
      title: "Sandalias Crocs Niño",
      productDescription:
        "Hechas con material Croslite, moldeable y resistente al agua que permite tener un calzado confortable. Los puertos de ventilación drenan el agua y la suciedad.",
      price: "2999",
      images: imgPrueba19,
    },
    {
      id: 20,
      title: "Buzo Vans Niño",
      productDescription:
        "Buzo cuello redondo Cassic Crew Vans Boys. De algodon con frisa y terminaciones con puño, da como resultado un clásico de la indumentaria usable para todo tipo de actividades.",
      price: "5299",
      images: imgPrueba20,
    },
  ],
};
export default data;
