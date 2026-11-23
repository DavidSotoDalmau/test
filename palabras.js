// Respuestas de cada categoría por nivel de rareza: común (+1), infrecuente (+2), rara (+3) y original (+5)
const PALABRAS = {
 "Un dulce de feria": {
  "comun": [
   "algodón de azúcar",
   "churros",
   "manzana de caramelo",
   "palomitas",
   "garrapiñadas",
   "gofre",
   "chuches",
   "algodón"
  ],
  "infrecuente": [
   "porras",
   "buñuelos",
   "crepe",
   "turrón",
   "nubes",
   "regaliz",
   "almendras garrapiñadas",
   "piruleta"
  ],
  "rara": [
   "coco",
   "barquillo",
   "pestiños",
   "rosquillas",
   "cucurucho de chuches",
   "fresas con chocolate",
   "gominolas"
  ],
  "original": [
   "turrón de jijona a la piedra",
   "pinchos de nube",
   "peladillas",
   "coquitos",
   "chupa chups gigante"
  ]
 },
 "Algo que tiene teclas": {
  "comun": [
   "piano",
   "teclado",
   "ordenador",
   "móvil",
   "calculadora",
   "máquina de escribir",
   "portátil",
   "mando"
  ],
  "infrecuente": [
   "órgano",
   "acordeón",
   "sintetizador",
   "teléfono",
   "cajero",
   "mando a distancia",
   "teclado electrónico",
   "clavecín"
  ],
  "rara": [
   "microondas",
   "telefonillo",
   "ascensor",
   "caja registradora",
   "fax",
   "datáfono",
   "piano de cola"
  ],
  "original": [
   "xilófono",
   "clavicordio",
   "máquina expendedora",
   "acordeonista",
   "celesta"
  ]
 },
 "Algo pegajoso": {
  "comun": [
   "miel",
   "pegamento",
   "chicle",
   "celo",
   "cola",
   "caramelo",
   "resina",
   "barro"
  ],
  "infrecuente": [
   "babas",
   "mermelada",
   "sirope",
   "savia",
   "cinta adhesiva",
   "pegatina",
   "slime",
   "moco"
  ],
  "rara": [
   "algodón de azúcar",
   "melaza",
   "papel matamoscas",
   "tirita",
   "leche condensada",
   "pez",
   "caracol"
  ],
  "original": [
   "tela de araña",
   "lengua de camaleón",
   "suelo de discoteca",
   "post-it",
   "velcro"
  ]
 },
 "Una herramienta": {
  "comun": [
   "martillo",
   "destornillador",
   "alicates",
   "llave inglesa",
   "sierra",
   "taladro",
   "clavo",
   "tijeras"
  ],
  "infrecuente": [
   "serrucho",
   "metro",
   "nivel",
   "lima",
   "llave allen",
   "tenazas",
   "pala",
   "rastrillo"
  ],
  "rara": [
   "cincel",
   "escofina",
   "berbiquí",
   "sargento",
   "gubia",
   "soldador",
   "radial"
  ],
  "original": [
   "formón",
   "plomada",
   "tranchete",
   "llave de grifa",
   "cepillo de carpintero"
  ]
 },
 "Una asignatura del colegio": {
  "comun": [
   "matemáticas",
   "lengua",
   "inglés",
   "educación física",
   "historia",
   "ciencias",
   "plástica",
   "música"
  ],
  "infrecuente": [
   "geografía",
   "física",
   "química",
   "biología",
   "sociales",
   "naturales",
   "religión",
   "francés"
  ],
  "rara": [
   "filosofía",
   "tecnología",
   "latín",
   "griego",
   "dibujo técnico",
   "economía",
   "informática"
  ],
  "original": [
   "alternativa",
   "tutoría",
   "valores éticos",
   "educación para la ciudadanía",
   "caligrafía",
   "conocimiento del medio"
  ]
 },
 "Algo que hay en un parque": {
  "comun": [
   "columpio",
   "tobogán",
   "banco",
   "árbol",
   "fuente",
   "césped",
   "balancín",
   "papelera"
  ],
  "infrecuente": [
   "arenero",
   "farola",
   "estanque",
   "flores",
   "palomas",
   "perro",
   "pato",
   "quiosco"
  ],
  "rara": [
   "tirolina",
   "estatua",
   "carrusel",
   "kiosco de música",
   "barca",
   "seto",
   "rocódromo"
  ],
  "original": [
   "jubilados jugando a la petanca",
   "pipas",
   "laberinto de setos",
   "caca de perro",
   "pista de patinaje"
  ]
 },
 "Una fiesta popular": {
  "comun": [
   "san fermín",
   "fallas",
   "feria de abril",
   "semana santa",
   "carnaval",
   "tomatina",
   "san juan",
   "navidad"
  ],
  "infrecuente": [
   "moros y cristianos",
   "hogueras",
   "san isidro",
   "el rocío",
   "nochevieja",
   "reyes",
   "la mercè",
   "feria"
  ],
  "rara": [
   "batalla del vino",
   "patios de córdoba",
   "la patum",
   "los sanfermines",
   "el entierro de la sardina",
   "romería",
   "verbena"
  ],
  "original": [
   "el colacho",
   "rapa das bestas",
   "la batalla de las flores",
   "el cascamorras",
   "los empalaos"
  ]
 },
 "Algo que se pierde a menudo": {
  "comun": [
   "llaves",
   "móvil",
   "mando",
   "calcetín",
   "gafas",
   "paraguas",
   "cartera",
   "bolígrafo"
  ],
  "infrecuente": [
   "boli",
   "mechero",
   "guantes",
   "goma",
   "pendiente",
   "teléfono",
   "horquilla",
   "tiempo"
  ],
  "rara": [
   "cargador",
   "tapa del boli",
   "mando a distancia",
   "pinza del pelo",
   "bufanda",
   "dni",
   "tarjeta"
  ],
  "original": [
   "la paciencia",
   "la cabeza",
   "el norte",
   "la vergüenza",
   "el hilo",
   "la virginidad"
  ]
 },
 "Un medio de transporte": {
  "comun": [
   "coche",
   "avión",
   "tren",
   "autobús",
   "barco",
   "bicicleta",
   "moto",
   "metro"
  ],
  "infrecuente": [
   "bici",
   "taxi",
   "tranvía",
   "patinete",
   "helicóptero",
   "furgoneta",
   "camión",
   "auto"
  ],
  "rara": [
   "globo",
   "teleférico",
   "funicular",
   "velero",
   "ferry",
   "caballo",
   "autocaravana"
  ],
  "original": [
   "burro",
   "alfombra mágica",
   "escoba",
   "camello",
   "trineo",
   "tirolina"
  ]
 },
 "Una palabra que empiece por «ch»": {
  "comun": [
   "chocolate",
   "chorizo",
   "chaqueta",
   "churro",
   "chupete",
   "chico",
   "chicle",
   "chancla"
  ],
  "infrecuente": [
   "chimenea",
   "champú",
   "charco",
   "chiste",
   "chulo",
   "chuleta",
   "chalet",
   "chándal"
  ],
  "rara": [
   "chirimoya",
   "chabola",
   "chamán",
   "chotis",
   "chopo",
   "chubasquero",
   "chiringuito"
  ],
  "original": [
   "chascarrillo",
   "chisgarabís",
   "chuminada",
   "chanchullo",
   "churrigueresco",
   "chacinería"
  ]
 },
 "Un tipo de pan": {
  "comun": [
   "barra",
   "baguette",
   "pan de molde",
   "integral",
   "chapata",
   "pan bimbo",
   "hogaza",
   "bollo"
  ],
  "infrecuente": [
   "pan de centeno",
   "pan de pueblo",
   "colón",
   "viena",
   "pita",
   "pan de leche",
   "picos",
   "rosca"
  ],
  "rara": [
   "mollete",
   "telera",
   "pan candeal",
   "bagel",
   "pan de cristal",
   "focaccia",
   "naan"
  ],
  "original": [
   "regañá",
   "pan de cea",
   "bregao",
   "pan de payés",
   "libreta"
  ]
 },
 "Algo que pica": {
  "comun": [
   "guindilla",
   "mosquito",
   "chile",
   "pimienta",
   "avispa",
   "abeja",
   "ortiga",
   "jalapeño"
  ],
  "infrecuente": [
   "wasabi",
   "mostaza",
   "tabasco",
   "pulga",
   "picante",
   "piojo",
   "picor",
   "cayena"
  ],
  "rara": [
   "medusa",
   "escorpión",
   "jersey de lana",
   "barba",
   "garrapata",
   "rábano",
   "picadura"
  ],
  "original": [
   "la curiosidad",
   "un anzuelo",
   "pez que pica",
   "la etiqueta de la camiseta",
   "el sol de agosto"
  ]
 },
 "Una isla española": {
  "comun": [
   "mallorca",
   "tenerife",
   "ibiza",
   "menorca",
   "gran canaria",
   "lanzarote",
   "fuerteventura",
   "formentera"
  ],
  "infrecuente": [
   "la palma",
   "la gomera",
   "el hierro",
   "cabrera",
   "la graciosa",
   "canarias",
   "baleares",
   "isla de arousa"
  ],
  "rara": [
   "islas cíes",
   "ons",
   "tabarca",
   "alborán",
   "columbretes",
   "isla de la toja",
   "isla perejil"
  ],
  "original": [
   "isla de los faisanes",
   "isla de lobos",
   "sálvora",
   "isla de santa clara",
   "isla mínima"
  ]
 },
 "Un pájaro": {
  "comun": [
   "paloma",
   "gorrión",
   "águila",
   "loro",
   "canario",
   "golondrina",
   "cigüeña",
   "búho"
  ],
  "infrecuente": [
   "periquito",
   "halcón",
   "cuervo",
   "urraca",
   "pato",
   "gaviota",
   "mirlo",
   "jilguero"
  ],
  "rara": [
   "abubilla",
   "colibrí",
   "flamenco",
   "buitre",
   "lechuza",
   "petirrojo",
   "pavo real"
  ],
  "original": [
   "quebrantahuesos",
   "martín pescador",
   "avefría",
   "alcaraván",
   "chotacabras",
   "piquituerto"
  ]
 },
 "Algo que hay en un hospital": {
  "comun": [
   "médico",
   "enfermera",
   "camilla",
   "jeringuilla",
   "cama",
   "ambulancia",
   "paciente",
   "quirófano"
  ],
  "infrecuente": [
   "urgencias",
   "silla de ruedas",
   "suero",
   "bisturí",
   "escayola",
   "radiografía",
   "estetoscopio",
   "vendas"
  ],
  "rara": [
   "desfibrilador",
   "gotero",
   "mascarilla",
   "termómetro",
   "cuña",
   "sala de espera",
   "celador"
  ],
  "original": [
   "máquina de café",
   "bata con el culo al aire",
   "olor a lejía",
   "gelatina",
   "parking carísimo"
  ]
 },
 "Una salsa": {
  "comun": [
   "kétchup",
   "mayonesa",
   "alioli",
   "mostaza",
   "salsa de tomate",
   "barbacoa",
   "tomate",
   "salsa rosa"
  ],
  "infrecuente": [
   "bechamel",
   "pesto",
   "carbonara",
   "brava",
   "soja",
   "guacamole",
   "tártara",
   "boloñesa"
  ],
  "rara": [
   "romesco",
   "mojo picón",
   "salsa verde",
   "vinagreta",
   "holandesa",
   "salmorejo",
   "pil pil"
  ],
  "original": [
   "salsa de caracoles",
   "bilbaína",
   "mojo verde",
   "salsa española",
   "salsa de la abuela",
   "sriracha"
  ]
 },
 "Un baile": {
  "comun": [
   "salsa",
   "flamenco",
   "tango",
   "vals",
   "sevillanas",
   "bachata",
   "reguetón",
   "ballet"
  ],
  "infrecuente": [
   "merengue",
   "jota",
   "cha-cha-chá",
   "hip hop",
   "breakdance",
   "rumba",
   "samba",
   "pasodoble"
  ],
  "rara": [
   "muñeira",
   "sardana",
   "chotis",
   "claqué",
   "polka",
   "twerking",
   "swing"
  ],
  "original": [
   "aserejé",
   "macarena",
   "conga",
   "la yenka",
   "paquito el chocolatero",
   "baile del gorila"
  ]
 },
 "Un animal con rayas": {
  "comun": [
   "cebra",
   "tigre",
   "abeja",
   "avispa",
   "mapache",
   "gato",
   "pez payaso",
   "serpiente"
  ],
  "infrecuente": [
   "okapi",
   "tejón",
   "lémur",
   "mofeta",
   "ardilla",
   "jabato",
   "coral",
   "rayado"
  ],
  "rara": [
   "chipmunk",
   "pez león",
   "zorrillo",
   "numbat",
   "antílope",
   "serpiente coral",
   "jabalí"
  ],
  "original": [
   "oruga",
   "escarabajo de la patata",
   "pez cebra",
   "tilapia",
   "calamar"
  ]
 },
 "Algo que se enciende": {
  "comun": [
   "luz",
   "vela",
   "fuego",
   "televisión",
   "ordenador",
   "móvil",
   "mechero",
   "cigarro"
  ],
  "infrecuente": [
   "bombilla",
   "coche",
   "chimenea",
   "horno",
   "radio",
   "tele",
   "linterna",
   "estufa"
  ],
  "rara": [
   "hoguera",
   "antorcha",
   "farola",
   "barbacoa",
   "pebetero",
   "incienso",
   "motor"
  ],
  "original": [
   "los ánimos",
   "una discusión",
   "la mecha",
   "la pasión",
   "el árbol de navidad"
  ]
 },
 "Una montaña o cordillera": {
  "comun": [
   "everest",
   "pirineos",
   "alpes",
   "andes",
   "himalaya",
   "teide",
   "mulhacén",
   "sierra nevada"
  ],
  "infrecuente": [
   "picos de europa",
   "aneto",
   "montserrat",
   "kilimanjaro",
   "montblanc",
   "sistema central",
   "guadarrama",
   "moncayo"
  ],
  "rara": [
   "k2",
   "aconcagua",
   "urales",
   "rocosas",
   "cervino",
   "gredos",
   "montañas rocosas"
  ],
  "original": [
   "almanzor",
   "naranjo de bulnes",
   "peñalara",
   "monte perdido",
   "olimpo",
   "fuji"
  ]
 },
 "Algo que se envuelve": {
  "comun": [
   "regalo",
   "bocadillo",
   "caramelo",
   "paquete",
   "burrito",
   "bebé",
   "sushi",
   "caja"
  ],
  "infrecuente": [
   "maleta",
   "momia",
   "rollito",
   "sándwich",
   "libro",
   "fajita",
   "croqueta",
   "flor"
  ],
  "rara": [
   "ramo",
   "mueble",
   "cuadro",
   "herida",
   "kebab",
   "bombón",
   "roscón"
  ],
  "original": [
   "cigarro",
   "tamal",
   "dolma",
   "rollito de primavera",
   "cuerpo en papel film"
  ]
 },
 "Un objeto de oficina": {
  "comun": [
   "grapadora",
   "bolígrafo",
   "ordenador",
   "papel",
   "clip",
   "boli",
   "impresora",
   "silla"
  ],
  "infrecuente": [
   "archivador",
   "post-it",
   "fotocopiadora",
   "celo",
   "carpeta",
   "lápiz",
   "teclado",
   "agenda"
  ],
  "rara": [
   "taladradora",
   "quitagrapas",
   "sacapuntas",
   "pisapapeles",
   "subrayador",
   "fluorescente",
   "tóner"
  ],
  "original": [
   "máquina de café",
   "dispensador de agua",
   "planta de plástico",
   "trituradora",
   "tampón",
   "sello"
  ]
 },
 "Un villano famoso": {
  "comun": [
   "darth vader",
   "joker",
   "voldemort",
   "drácula",
   "thanos",
   "cruella de vil",
   "scar",
   "hitler"
  ],
  "infrecuente": [
   "lex luthor",
   "úrsula",
   "jafar",
   "hannibal lecter",
   "el guasón",
   "freddy krueger",
   "sauron",
   "grinch"
  ],
  "rara": [
   "magneto",
   "maléfica",
   "capitán garfio",
   "bowser",
   "gargamel",
   "doctor no",
   "pingüino"
  ],
  "original": [
   "el cascanueces",
   "ganondorf",
   "jack torrance",
   "pazuzu",
   "rata de las alcantarillas",
   "calígula"
  ]
 },
 "Algo que hay en un circo": {
  "comun": [
   "payaso",
   "trapecista",
   "elefante",
   "león",
   "malabarista",
   "carpa",
   "domador",
   "acróbata"
  ],
  "infrecuente": [
   "equilibrista",
   "mago",
   "pista",
   "tigre",
   "contorsionista",
   "monociclo",
   "foca",
   "palomitas"
  ],
  "rara": [
   "hombre bala",
   "faquir",
   "tragasables",
   "escupefuegos",
   "jefe de pista",
   "red",
   "cama elástica"
  ],
  "original": [
   "mujer barbuda",
   "forzudo",
   "caravana",
   "hombre bala humano",
   "enano",
   "olor a serrín"
  ]
 },
 "Un fruto seco": {
  "comun": [
   "almendra",
   "nuez",
   "cacahuete",
   "avellana",
   "pistacho",
   "anacardo",
   "pipa",
   "castaña"
  ],
  "infrecuente": [
   "piñón",
   "nuez de macadamia",
   "pipas",
   "pecana",
   "altramuz",
   "maní",
   "quicos",
   "garbanzo tostado"
  ],
  "rara": [
   "nuez de brasil",
   "bellota",
   "coco",
   "chufa",
   "dátil",
   "pasa",
   "higo seco"
  ],
  "original": [
   "kikos",
   "orejón",
   "ciruela pasa",
   "pipa de calabaza"
  ]
 },
 "Algo de cristal": {
  "comun": [
   "vaso",
   "ventana",
   "botella",
   "copa",
   "espejo",
   "gafas",
   "jarrón",
   "bombilla"
  ],
  "infrecuente": [
   "lámpara",
   "pecera",
   "mesa",
   "puerta",
   "tarro",
   "cristalera",
   "escaparate",
   "parabrisas"
  ],
  "rara": [
   "vidriera",
   "lupa",
   "bola de nieve",
   "reloj de arena",
   "lente",
   "probeta",
   "zapato de cenicienta"
  ],
  "original": [
   "zapatito de cristal",
   "bola de cristal",
   "ojo de cristal",
   "mandíbula de cristal",
   "techo de cristal"
  ]
 },
 "Una emoción": {
  "comun": [
   "alegría",
   "tristeza",
   "miedo",
   "ira",
   "amor",
   "enfado",
   "felicidad",
   "asco"
  ],
  "infrecuente": [
   "sorpresa",
   "rabia",
   "envidia",
   "celos",
   "vergüenza",
   "ansiedad",
   "nostalgia",
   "odio"
  ],
  "rara": [
   "euforia",
   "melancolía",
   "frustración",
   "culpa",
   "orgullo",
   "ternura",
   "asombro"
  ],
  "original": [
   "morriña",
   "vergüenza ajena",
   "saudade",
   "desazón",
   "añoranza",
   "regocijo"
  ]
 },
 "Algo que hay en el desierto": {
  "comun": [
   "arena",
   "camello",
   "cactus",
   "dunas",
   "oasis",
   "sol",
   "escorpión",
   "calor"
  ],
  "infrecuente": [
   "serpiente",
   "dromedario",
   "beduino",
   "palmera",
   "espejismo",
   "tormenta de arena",
   "jaima",
   "duna"
  ],
  "rara": [
   "calavera",
   "buitre",
   "zorro del desierto",
   "lagarto",
   "caravana",
   "coyote",
   "rodadora"
  ],
  "original": [
   "sed",
   "pirámide",
   "esqueleto de vaca",
   "nómada",
   "estrellas",
   "silencio"
  ]
 },
 "Una estación del año": {
  "comun": [
   "verano",
   "invierno",
   "primavera"
  ],
  "infrecuente": [
   "otoño"
  ],
  "rara": [],
  "original": [
   "estación seca",
   "estación de lluvias"
  ]
 },
 "Algo que huele bien": {
  "comun": [
   "flor",
   "rosa",
   "perfume",
   "colonia",
   "pan recién hecho",
   "café",
   "jazmín",
   "lavanda",
   "suavizante"
  ],
  "infrecuente": [
   "vainilla",
   "canela",
   "chocolate",
   "ropa limpia",
   "bebé",
   "incienso",
   "azahar",
   "hierba recién cortada",
   "galletas"
  ],
  "rara": [
   "tierra mojada",
   "libro nuevo",
   "romero",
   "eucalipto",
   "jabón de marsella",
   "gasolina",
   "churros"
  ],
  "original": [
   "petricor",
   "coche nuevo",
   "rotulador",
   "plastilina",
   "cuello de bebé"
  ]
 },
 "Algo que huele mal": {
  "comun": [
   "caca",
   "pedo",
   "basura",
   "calcetín",
   "pies",
   "queso",
   "huevo podrido",
   "mofeta",
   "alcantarilla"
  ],
  "infrecuente": [
   "sobaco",
   "sudor",
   "pescado",
   "aliento",
   "cebolla",
   "ajo",
   "tabaco",
   "váter",
   "vómito"
  ],
  "rara": [
   "coliflor",
   "azufre",
   "lejía",
   "pañal",
   "cadáver",
   "estiércol",
   "granja"
  ],
  "original": [
   "durián",
   "humedad",
   "zapatilla de deporte",
   "taquilla de gimnasio",
   "hurón"
  ]
 },
 "Un cubierto": {
  "comun": [
   "tenedor",
   "cuchara",
   "cuchillo"
  ],
  "infrecuente": [
   "cucharilla",
   "cucharita",
   "cuchillo de carne",
   "cuchara sopera",
   "palillos",
   "cuchillo de postre"
  ],
  "rara": [
   "cuchillo de pescado",
   "pala de pescado",
   "tenedor de postre",
   "cucharón",
   "pinzas"
  ],
  "original": [
   "tenedor de caracoles",
   "trinchador",
   "cuchara de café",
   "pala de tarta",
   "cuchillo de mantequilla"
  ]
 },
 "Una carta de la baraja española": {
  "comun": [
   "as",
   "rey",
   "sota",
   "caballo",
   "as de oros",
   "as de espadas",
   "rey de copas",
   "as de copas",
   "as de bastos"
  ],
  "infrecuente": [
   "sota de bastos",
   "caballo de copas",
   "rey de oros",
   "rey de espadas",
   "rey de bastos",
   "sota de oros",
   "caballo de espadas",
   "tres de bastos",
   "siete de oros"
  ],
  "rara": [
   "dos de copas",
   "cuatro de bastos",
   "cinco de oros",
   "seis de espadas",
   "sota de copas",
   "caballo de oros",
   "siete de espadas",
   "tres de copas"
  ],
  "original": [
   "ocho de bastos",
   "nueve de espadas",
   "comodín",
   "siete de velo",
   "ocho de oros"
  ]
 },
 "Algo que hay en un aeropuerto": {
  "comun": [
   "avión",
   "maleta",
   "pasaporte",
   "pista",
   "piloto",
   "azafata",
   "control de seguridad",
   "tarjeta de embarque",
   "puerta de embarque",
   "equipaje"
  ],
  "infrecuente": [
   "cinta de equipaje",
   "duty free",
   "facturación",
   "torre de control",
   "terminal",
   "pantalla de vuelos",
   "aduana",
   "carrito",
   "cafetería"
  ],
  "rara": [
   "finger",
   "detector de metales",
   "perro policía",
   "pasarela",
   "cinta transportadora",
   "sala vip",
   "objetos perdidos"
  ],
  "original": [
   "manga de viento",
   "cartel con nombre",
   "almohada de viaje",
   "bocadillo de nueve euros",
   "turista dormido en el suelo"
  ]
 },
 "Un sonido de animal": {
  "comun": [
   "guau",
   "miau",
   "muu",
   "ladrido",
   "maullido",
   "mugido",
   "beee",
   "quiquiriquí",
   "pío pío",
   "rugido"
  ],
  "infrecuente": [
   "oinc",
   "cuac",
   "relincho",
   "balido",
   "cacareo",
   "croac",
   "gruñido",
   "kikirikí",
   "aullido"
  ],
  "rara": [
   "rebuzno",
   "graznido",
   "zumbido",
   "bramido",
   "siseo",
   "silbido",
   "trino",
   "ronroneo"
  ],
  "original": [
   "berrea",
   "ululato",
   "barrito",
   "cri cri",
   "glu glu"
  ]
 },
 "Una red social": {
  "comun": [
   "instagram",
   "tiktok",
   "facebook",
   "twitter",
   "x",
   "whatsapp",
   "youtube"
  ],
  "infrecuente": [
   "linkedin",
   "snapchat",
   "pinterest",
   "telegram",
   "twitch",
   "reddit",
   "threads",
   "be real"
  ],
  "rara": [
   "tumblr",
   "discord",
   "bluesky",
   "tuenti",
   "messenger",
   "wechat"
  ],
  "original": [
   "myspace",
   "fotolog",
   "messenger de hotmail",
   "habbo",
   "vine",
   "mastodon"
  ]
 },
 "Un embutido": {
  "comun": [
   "chorizo",
   "jamón",
   "salchichón",
   "lomo",
   "fuet",
   "mortadela",
   "jamón serrano",
   "jamón de york",
   "pavo",
   "salami"
  ],
  "infrecuente": [
   "morcilla",
   "sobrasada",
   "butifarra",
   "longaniza",
   "chopped",
   "cecina",
   "pechuga de pavo",
   "jamón ibérico"
  ],
  "rara": [
   "morcón",
   "salchicha",
   "lacón",
   "pepperoni",
   "botillo",
   "chistorra",
   "caña de lomo"
  ],
  "original": [
   "androlla",
   "biricha",
   "camaiot",
   "girella",
   "farinato",
   "mortadela con aceitunas"
  ]
 },
 "Algo que se colecciona": {
  "comun": [
   "sellos",
   "cromos",
   "monedas",
   "postales",
   "pegatinas",
   "figuras",
   "cartas",
   "chapas",
   "imanes"
  ],
  "infrecuente": [
   "vinilos",
   "discos",
   "cómics",
   "muñecas",
   "billetes",
   "llaveros",
   "tazos",
   "minerales",
   "libros",
   "funkos"
  ],
  "rara": [
   "dedales",
   "mariposas",
   "posavasos",
   "cucharillas",
   "cajas de cerillas",
   "conchas",
   "relojes"
  ],
  "original": [
   "sobres de azúcar",
   "tapones de cava",
   "bolsas de vómito de avión",
   "pulseras de festival",
   "multas",
   "puntos del super"
  ]
 },
 "Algo que hay en una mochila del cole": {
  "comun": [
   "libro",
   "cuaderno",
   "estuche",
   "lápiz",
   "boli",
   "goma",
   "bocadillo",
   "libreta",
   "agenda",
   "almuerzo"
  ],
  "infrecuente": [
   "sacapuntas",
   "regla",
   "rotuladores",
   "pinturas",
   "tijeras",
   "pegamento",
   "calculadora",
   "carpeta",
   "botella de agua",
   "tupper"
  ],
  "rara": [
   "compás",
   "flauta",
   "chándal",
   "pañuelos",
   "transportador",
   "diccionario",
   "típex",
   "zumo"
  ],
  "original": [
   "nota sin firmar",
   "plátano aplastado",
   "examen suspendido",
   "cromo repetido",
   "migas"
  ]
 },
 "Un tipo de zapato": {
  "comun": [
   "zapatilla",
   "bota",
   "sandalia",
   "chancla",
   "tacón",
   "deportiva",
   "mocasín"
  ],
  "infrecuente": [
   "zueco",
   "bailarina",
   "alpargata",
   "botín",
   "náutico",
   "zapatilla de casa",
   "manoletina",
   "chanclas"
  ],
  "rara": [
   "katiuska",
   "esparteña",
   "cuña",
   "plataforma",
   "oxford",
   "stiletto",
   "bota de agua"
  ],
  "original": [
   "babucha",
   "abarca",
   "menorquina",
   "chapín",
   "zapato de claqué",
   "bota de esquí"
  ]
 },
 "Un dinosaurio": {
  "comun": [
   "tiranosaurio",
   "t-rex",
   "velociraptor",
   "triceratops",
   "diplodocus",
   "brontosaurio",
   "estegosaurio"
  ],
  "infrecuente": [
   "pterodáctilo",
   "braquiosaurio",
   "anquilosaurio",
   "espinosaurio",
   "raptor",
   "parasaurolophus",
   "iguanodón"
  ],
  "rara": [
   "alosaurio",
   "carnotauro",
   "dilofosaurio",
   "pachycephalosaurus",
   "argentinosaurio",
   "gallimimus",
   "compsognathus"
  ],
  "original": [
   "turiasaurio",
   "aragosaurio",
   "concavenator",
   "pelecanimimus",
   "barney",
   "piecito"
  ]
 },
 "Algo que se hace con huevos": {
  "comun": [
   "tortilla",
   "tortilla de patatas",
   "huevo frito",
   "flan",
   "mayonesa",
   "huevos revueltos",
   "bizcocho",
   "huevo duro"
  ],
  "infrecuente": [
   "tortilla francesa",
   "natillas",
   "merengue",
   "pasteles",
   "magdalenas",
   "crepes",
   "huevo pasado por agua",
   "alioli"
  ],
  "rara": [
   "huevos rotos",
   "tocino de cielo",
   "yemas de santa teresa",
   "huevo poché",
   "rebozado",
   "carbonara",
   "torrijas"
  ],
  "original": [
   "ponche",
   "huevos estrellados",
   "pintar huevos de pascua",
   "tirarlos a un coche",
   "mascarilla de pelo"
  ]
 },
 "Un monumento famoso": {
  "comun": [
   "torre eiffel",
   "sagrada familia",
   "alhambra",
   "coliseo",
   "estatua de la libertad",
   "pirámides",
   "gran muralla china",
   "acueducto de segovia"
  ],
  "infrecuente": [
   "torre de pisa",
   "big ben",
   "taj mahal",
   "puerta de alcalá",
   "machu picchu",
   "cibeles",
   "mezquita de córdoba",
   "giralda",
   "cristo redentor"
  ],
  "rara": [
   "stonehenge",
   "partenón",
   "puerta de brandeburgo",
   "arco del triunfo",
   "petra",
   "chichén itzá",
   "catedral de santiago"
  ],
  "original": [
   "oso y el madroño",
   "manneken pis",
   "toro de osborne",
   "dama de elche",
   "templo de debod",
   "isla de pascua"
  ]
 },
 "Algo que se usa cuando llueve": {
  "comun": [
   "paraguas",
   "chubasquero",
   "botas de agua",
   "impermeable",
   "capucha",
   "katiuskas"
  ],
  "infrecuente": [
   "gabardina",
   "limpiaparabrisas",
   "paragüero",
   "chaqueta",
   "toalla",
   "secador"
  ],
  "rara": [
   "poncho",
   "cubrecarro",
   "plástico",
   "bolsa de basura",
   "sombrero",
   "gorro"
  ],
  "original": [
   "periódico en la cabeza",
   "manta y sofá",
   "barca",
   "cubo para goteras",
   "excusa para no salir"
  ]
 },
 "Algo que da suerte": {
  "comun": [
   "trébol de cuatro hojas",
   "herradura",
   "pata de conejo",
   "amuleto",
   "número siete",
   "gato",
   "lotería"
  ],
  "infrecuente": [
   "mariquita",
   "uvas de nochevieja",
   "ropa interior roja",
   "romper un plato",
   "pisar caca",
   "estrella fugaz",
   "cruzar los dedos"
  ],
  "rara": [
   "ojo turco",
   "elefante con la trompa hacia arriba",
   "tocar madera",
   "atrapasueños",
   "buda",
   "gato chino"
  ],
  "original": [
   "tocar la chepa a un jorobado",
   "que te cague un pájaro",
   "anillo en el cava",
   "frotar la tripa de un cerdito",
   "llevar la camiseta de la suerte"
  ]
 },
 "Algo que trae mala suerte": {
  "comun": [
   "gato negro",
   "espejo roto",
   "martes trece",
   "pasar debajo de una escalera",
   "romper un espejo",
   "número trece",
   "viernes trece"
  ],
  "infrecuente": [
   "abrir un paraguas en casa",
   "derramar la sal",
   "levantarse con el pie izquierdo",
   "cuervo",
   "lunes",
   "brindar con agua"
  ],
  "rara": [
   "vestir de amarillo en el escenario",
   "pan boca abajo",
   "barrer los pies",
   "tijeras abiertas",
   "cama orientada a la puerta",
   "número cuatro"
  ],
  "original": [
   "ver a la novia antes de la boda",
   "decir macbeth en el teatro",
   "regalar cuchillos",
   "silbar de noche",
   "felicitar antes de tiempo"
  ]
 },
 "Algo que hay en un jardín": {
  "comun": [
   "flor",
   "césped",
   "árbol",
   "planta",
   "hierba",
   "rosa",
   "manguera",
   "piscina",
   "banco",
   "maceta"
  ],
  "infrecuente": [
   "seto",
   "regadera",
   "columpio",
   "fuente",
   "caracol",
   "barbacoa",
   "cortacésped",
   "rosal",
   "abeja",
   "tumbona"
  ],
  "rara": [
   "enanito",
   "gnomo",
   "aspersor",
   "estanque",
   "caseta",
   "pérgola",
   "hamaca",
   "compostera"
  ],
  "original": [
   "topo",
   "flamenco de plástico",
   "pelota del vecino",
   "invernadero",
   "tobogán"
  ]
 },
 "Un cereal": {
  "comun": [
   "trigo",
   "arroz",
   "maíz",
   "avena",
   "cebada",
   "centeno"
  ],
  "infrecuente": [
   "sorgo",
   "mijo",
   "quinoa",
   "espelta",
   "copos de maíz",
   "corn flakes"
  ],
  "rara": [
   "trigo sarraceno",
   "alforfón",
   "kamut",
   "teff",
   "amaranto"
  ],
  "original": [
   "chocapic",
   "frosties",
   "triticale",
   "farro"
  ]
 },
 "Una película de Disney": {
  "comun": [
   "el rey león",
   "frozen",
   "la sirenita",
   "aladdin",
   "la bella y la bestia",
   "blancanieves",
   "cenicienta",
   "toy story"
  ],
  "infrecuente": [
   "mulán",
   "tarzán",
   "pocahontas",
   "bambi",
   "dumbo",
   "pinocho",
   "la bella durmiente",
   "enredados",
   "moana",
   "coco"
  ],
  "rara": [
   "hércules",
   "el libro de la selva",
   "los aristogatos",
   "la dama y el vagabundo",
   "encanto",
   "lilo y stitch",
   "zootrópolis",
   "101 dálmatas"
  ],
  "original": [
   "fantasía",
   "el jorobado de notre dame",
   "tron",
   "mary poppins",
   "oliver y su pandilla",
   "atlantis"
  ]
 },
 "Un cantante español": {
  "comun": [
   "alejandro sanz",
   "david bisbal",
   "rosalía",
   "julio iglesias",
   "enrique iglesias",
   "pablo alborán",
   "camilo sesto",
   "raphael"
  ],
  "infrecuente": [
   "melendi",
   "manuel carrasco",
   "aitana",
   "joaquín sabina",
   "estopa",
   "c. tangana",
   "quevedo",
   "bustamante",
   "malú",
   "rocío jurado"
  ],
  "rara": [
   "nino bravo",
   "serrat",
   "dani martín",
   "lola índigo",
   "antonio orozco",
   "rozalén",
   "camarón",
   "miguel bosé"
  ],
  "original": [
   "chiquito de la calzada",
   "el fary",
   "georgie dann",
   "massiel",
   "el chiquilicuatre"
  ]
 },
 "Una palabra en inglés que todos usamos": {
  "comun": [
   "ok",
   "hello",
   "bye",
   "sorry",
   "cool",
   "please",
   "wifi",
   "selfie",
   "weekend"
  ],
  "infrecuente": [
   "online",
   "email",
   "like",
   "crush",
   "spoiler",
   "hater",
   "random",
   "fan",
   "brunch"
  ],
  "rara": [
   "meeting",
   "feedback",
   "deadline",
   "outfit",
   "afterwork",
   "cringe",
   "running"
  ],
  "original": [
   "parking",
   "puenting",
   "footing",
   "balconing",
   "sándwich"
  ]
 },
 "Algo que se pone en la pizza": {
  "comun": [
   "queso",
   "tomate",
   "jamón",
   "champiñón",
   "pepperoni",
   "orégano",
   "mozzarella",
   "atún",
   "piña"
  ],
  "infrecuente": [
   "aceitunas",
   "cebolla",
   "pimiento",
   "bacon",
   "carne picada",
   "anchoas",
   "salami",
   "albahaca"
  ],
  "rara": [
   "rúcula",
   "alcachofa",
   "gorgonzola",
   "huevo",
   "pollo",
   "salsa barbacoa",
   "maíz"
  ],
  "original": [
   "nutella",
   "patatas fritas",
   "trufa",
   "kebab",
   "higos"
  ]
 },
 "Un animal doméstico": {
  "comun": [
   "perro",
   "gato",
   "pez",
   "hámster",
   "conejo",
   "pájaro",
   "tortuga",
   "canario"
  ],
  "infrecuente": [
   "periquito",
   "loro",
   "cobaya",
   "conejillo de indias",
   "hurón",
   "caballo",
   "gallina",
   "pez de colores"
  ],
  "rara": [
   "iguana",
   "serpiente",
   "erizo",
   "chinchilla",
   "jerbo",
   "cerdo vietnamita",
   "camaleón"
  ],
  "original": [
   "tarántula",
   "axolote",
   "mono",
   "petauro del azúcar",
   "escarabajo"
  ]
 },
 "Algo que hay en una boda": {
  "comun": [
   "novia",
   "novio",
   "anillo",
   "tarta",
   "vestido",
   "ramo",
   "invitados",
   "cura",
   "arroz",
   "baile"
  ],
  "infrecuente": [
   "alianzas",
   "padrino",
   "madrina",
   "banquete",
   "fotógrafo",
   "flores",
   "champán",
   "cava",
   "velo",
   "brindis"
  ],
  "rara": [
   "liga",
   "corbata cortada",
   "barra libre",
   "photocall",
   "orquesta",
   "pajarita",
   "cortejo",
   "pétalos"
  ],
  "original": [
   "tío borracho",
   "resaca",
   "lloros",
   "sobre",
   "pinchito de madrugada",
   "detalles para invitados"
  ]
 }
};
