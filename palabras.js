// Respuestas de cada categoría por nivel de rareza: común (+1), infrecuente (+2), rara (+3) y original (+5)
const PALABRAS = {
 "Una fruta roja": {
  "comun": [
   "fresa",
   "cereza",
   "manzana",
   "frambuesa",
   "sandía",
   "granada"
  ],
  "infrecuente": [
   "fresón",
   "grosella",
   "ciruela",
   "guinda",
   "pitaya",
   "madroño"
  ],
  "rara": [
   "lichi",
   "acerola",
   "arándano rojo",
   "tomate",
   "pomelo rojo",
   "naranja sanguina"
  ],
  "original": [
   "escaramujo",
   "goji",
   "pimiento rojo",
   "tamarillo",
   "guindilla"
  ]
 },
 "Algo que llevas a la playa": {
  "comun": [
   "toalla",
   "sombrilla",
   "crema solar",
   "protector solar",
   "bañador",
   "bikini",
   "gafas de sol",
   "chanclas",
   "gorra"
  ],
  "infrecuente": [
   "nevera",
   "silla",
   "cubo y pala",
   "pelota",
   "libro",
   "palas",
   "colchoneta",
   "flotador",
   "bolsa de playa"
  ],
  "rara": [
   "esterilla",
   "sombrero",
   "pareo",
   "tortilla",
   "bocadillo",
   "gafas de bucear",
   "aletas"
  ],
  "original": [
   "paravientos",
   "aftersun",
   "baraja",
   "cometa",
   "detector de metales"
  ]
 },
 "Un animal de granja": {
  "comun": [
   "vaca",
   "cerdo",
   "gallina",
   "oveja",
   "caballo",
   "cabra",
   "pollo",
   "burro",
   "gallo"
  ],
  "infrecuente": [
   "pato",
   "conejo",
   "pavo",
   "toro",
   "cordero",
   "asno",
   "mula",
   "ternero"
  ],
  "rara": [
   "oca",
   "ganso",
   "codorniz",
   "buey",
   "yegua",
   "lechón",
   "cabrito"
  ],
  "original": [
   "avestruz",
   "caracol",
   "abeja",
   "trucha",
   "alpaca",
   "gusano de seda"
  ]
 },
 "Un color del arcoíris": {
  "comun": [
   "rojo",
   "amarillo",
   "verde",
   "azul",
   "naranja"
  ],
  "infrecuente": [
   "violeta",
   "morado"
  ],
  "rara": [
   "añil",
   "anaranjado"
  ],
  "original": [
   "índigo"
  ]
 },
 "Una ciudad española": {
  "comun": [
   "madrid",
   "barcelona",
   "sevilla",
   "valencia",
   "bilbao",
   "málaga",
   "zaragoza",
   "granada"
  ],
  "infrecuente": [
   "salamanca",
   "toledo",
   "córdoba",
   "alicante",
   "san sebastián",
   "santiago de compostela",
   "murcia",
   "valladolid",
   "palma",
   "cádiz"
  ],
  "rara": [
   "cáceres",
   "teruel",
   "soria",
   "lugo",
   "huesca",
   "zamora",
   "ourense",
   "ávila"
  ],
  "original": [
   "ceuta",
   "melilla",
   "ponferrada",
   "calatayud",
   "plasencia"
  ]
 },
 "Algo que hay en una cocina": {
  "comun": [
   "nevera",
   "frigorífico",
   "horno",
   "microondas",
   "sartén",
   "fregadero",
   "cuchillo",
   "olla"
  ],
  "infrecuente": [
   "lavavajillas",
   "vitrocerámica",
   "tostadora",
   "cafetera",
   "cazo",
   "cuchara",
   "tenedor",
   "plato",
   "vaso",
   "batidora"
  ],
  "rara": [
   "escurridor",
   "rallador",
   "delantal",
   "extractor",
   "campana",
   "especiero",
   "abrelatas",
   "colador"
  ],
  "original": [
   "imán de nevera",
   "mortero",
   "termómetro de cocina",
   "salvamanteles"
  ]
 },
 "Un deporte con pelota": {
  "comun": [
   "fútbol",
   "baloncesto",
   "tenis",
   "balonmano",
   "voleibol",
   "vóley",
   "pádel",
   "golf",
   "béisbol"
  ],
  "infrecuente": [
   "rugby",
   "waterpolo",
   "ping-pong",
   "tenis de mesa",
   "fútbol sala",
   "hockey",
   "críquet",
   "squash",
   "frontón"
  ],
  "rara": [
   "pelota vasca",
   "fútbol americano",
   "bolos",
   "billar",
   "polo",
   "sóftbol",
   "vóley playa"
  ],
  "original": [
   "lacrosse",
   "hurling",
   "cesta punta",
   "goalball",
   "korfbal"
  ]
 },
 "Algo que se come en Navidad": {
  "comun": [
   "turrón",
   "polvorón",
   "mazapán",
   "cordero",
   "marisco",
   "langostinos",
   "gambas",
   "uvas",
   "roscón de reyes",
   "jamón"
  ],
  "infrecuente": [
   "besugo",
   "pavo",
   "cochinillo",
   "mantecado",
   "peladillas",
   "langosta"
  ],
  "rara": [
   "escudella",
   "canelones",
   "lombarda",
   "cardo",
   "sopa de almendras",
   "galets",
   "consomé"
  ],
  "original": [
   "angulas",
   "capón",
   "carbón dulce",
   "piñonate"
  ]
 },
 "Un superhéroe": {
  "comun": [
   "spiderman",
   "hombre araña",
   "superman",
   "batman",
   "hulk",
   "iron man",
   "capitán américa",
   "thor",
   "wonder woman"
  ],
  "infrecuente": [
   "flash",
   "lobezno",
   "aquaman",
   "viuda negra",
   "pantera negra",
   "deadpool",
   "linterna verde",
   "capitana marvel",
   "doctor strange",
   "ant-man"
  ],
  "rara": [
   "daredevil",
   "cíclope",
   "tormenta",
   "ojo de halcón",
   "visión",
   "bruja escarlata",
   "estela plateada",
   "robin"
  ],
  "original": [
   "superlópez",
   "superratón",
   "chapulín colorado",
   "mr. increíble",
   "ladybug"
  ]
 },
 "Algo frío": {
  "comun": [
   "hielo",
   "helado",
   "nieve",
   "nevera",
   "frigorífico",
   "polo",
   "granizo",
   "congelador",
   "invierno"
  ],
  "infrecuente": [
   "cubito",
   "granizado",
   "agua fría",
   "gazpacho",
   "escarcha",
   "iceberg",
   "polo norte"
  ],
  "rara": [
   "glaciar",
   "témpano",
   "antártida",
   "ventisca",
   "carámbano",
   "sorbete"
  ],
  "original": [
   "mármol",
   "cadáver",
   "nariz de perro",
   "nitrógeno líquido",
   "plutón"
  ]
 },
 "Una profesión con uniforme": {
  "comun": [
   "policía",
   "bombero",
   "médico",
   "enfermero",
   "enfermera",
   "militar",
   "soldado",
   "cocinero",
   "chef",
   "azafata"
  ],
  "infrecuente": [
   "piloto",
   "guardia civil",
   "cartero",
   "camarero",
   "juez",
   "guardia de seguridad",
   "vigilante",
   "mecánico",
   "dependiente",
   "cirujano"
  ],
  "rara": [
   "barrendero",
   "basurero",
   "revisor",
   "socorrista",
   "árbitro",
   "conserje",
   "futbolista"
  ],
  "original": [
   "astronauta",
   "torero",
   "jockey",
   "apicultor",
   "guardia real"
  ]
 },
 "Un instrumento musical": {
  "comun": [
   "guitarra",
   "piano",
   "violín",
   "batería",
   "flauta",
   "tambor",
   "trompeta"
  ],
  "infrecuente": [
   "saxofón",
   "arpa",
   "violonchelo",
   "chelo",
   "clarinete",
   "bajo",
   "castañuelas",
   "acordeón",
   "teclado",
   "ukelele"
  ],
  "rara": [
   "gaita",
   "oboe",
   "fagot",
   "contrabajo",
   "xilófono",
   "pandereta",
   "triángulo",
   "trombón"
  ],
  "original": [
   "zambomba",
   "theremín",
   "didgeridoo",
   "serrucho",
   "botella de anís",
   "txalaparta"
  ]
 },
 "Algo que hay en un baño": {
  "comun": [
   "váter",
   "inodoro",
   "ducha",
   "bañera",
   "lavabo",
   "espejo",
   "toalla",
   "papel higiénico",
   "cepillo de dientes",
   "jabón"
  ],
  "infrecuente": [
   "champú",
   "pasta de dientes",
   "dentífrico",
   "bidé",
   "alfombrilla",
   "escobilla",
   "secador",
   "gel",
   "peine",
   "grifo"
  ],
  "rara": [
   "báscula",
   "cesto de la ropa",
   "desatascador",
   "bastoncillos",
   "mampara",
   "armario",
   "colonia",
   "maquinilla"
  ],
  "original": [
   "patito de goma",
   "revista",
   "ambientador",
   "moho",
   "tapón"
  ]
 },
 "Un postre": {
  "comun": [
   "flan",
   "helado",
   "arroz con leche",
   "natillas",
   "tarta",
   "fruta",
   "yogur",
   "tarta de queso",
   "tiramisú"
  ],
  "infrecuente": [
   "crema catalana",
   "brownie",
   "mousse de chocolate",
   "cuajada",
   "macedonia",
   "coulant",
   "profiteroles",
   "torrija",
   "pudin"
  ],
  "rara": [
   "leche frita",
   "tocino de cielo",
   "tarta de santiago",
   "sorbete",
   "panna cotta",
   "filloas",
   "tarta al whisky",
   "frutas en almíbar"
  ],
  "original": [
   "músico",
   "queso con membrillo",
   "mató con miel",
   "intxaursaltsa"
  ]
 },
 "Una bebida caliente": {
  "comun": [
   "café",
   "té",
   "chocolate",
   "chocolate caliente",
   "colacao",
   "cola cao",
   "leche",
   "infusión",
   "café con leche"
  ],
  "infrecuente": [
   "manzanilla",
   "poleo menta",
   "tila",
   "cortado",
   "capuchino",
   "caldo",
   "leche con miel"
  ],
  "rara": [
   "mate",
   "carajillo",
   "ponche",
   "rooibos",
   "consomé",
   "chai",
   "achicoria"
  ],
  "original": [
   "queimada",
   "grog",
   "sake caliente",
   "café de olla",
   "vino caliente"
  ]
 },
 "Un país de Europa": {
  "comun": [
   "españa",
   "francia",
   "italia",
   "alemania",
   "portugal",
   "inglaterra",
   "reino unido",
   "grecia"
  ],
  "infrecuente": [
   "suiza",
   "bélgica",
   "holanda",
   "países bajos",
   "suecia",
   "noruega",
   "austria",
   "irlanda",
   "polonia",
   "rusia"
  ],
  "rara": [
   "croacia",
   "rumanía",
   "hungría",
   "dinamarca",
   "finlandia",
   "chequia",
   "república checa",
   "ucrania"
  ],
  "original": [
   "andorra",
   "mónaco",
   "liechtenstein",
   "san marino",
   "vaticano",
   "malta"
  ]
 },
 "Algo que da miedo": {
  "comun": [
   "araña",
   "fantasma",
   "oscuridad",
   "monstruo",
   "serpiente",
   "payaso",
   "muerte",
   "película de terror"
  ],
  "infrecuente": [
   "tormenta",
   "rayo",
   "altura",
   "vampiro",
   "bruja",
   "zombi",
   "dentista",
   "examen",
   "cucaracha"
  ],
  "rara": [
   "soledad",
   "inyección",
   "quirófano",
   "cementerio",
   "hacienda",
   "mar abierto",
   "terremoto"
  ],
  "original": [
   "tenemos que hablar",
   "muñeca antigua",
   "factura de la luz",
   "suegra",
   "lunes"
  ]
 },
 "Un animal que vuela": {
  "comun": [
   "pájaro",
   "águila",
   "paloma",
   "murciélago",
   "mosca",
   "mariposa",
   "abeja",
   "gaviota",
   "loro"
  ],
  "infrecuente": [
   "halcón",
   "búho",
   "golondrina",
   "mosquito",
   "avispa",
   "cuervo",
   "gorrión",
   "cigüeña",
   "libélula",
   "buitre"
  ],
  "rara": [
   "colibrí",
   "lechuza",
   "mariquita",
   "flamenco",
   "pato",
   "abejorro",
   "polilla",
   "albatros"
  ],
  "original": [
   "pez volador",
   "ardilla voladora",
   "gallina",
   "hormiga reina"
  ]
 },
 "Algo amarillo": {
  "comun": [
   "sol",
   "plátano",
   "limón",
   "pollito",
   "canario",
   "girasol",
   "maíz",
   "yema"
  ],
  "infrecuente": [
   "queso",
   "piña",
   "mostaza",
   "bob esponja",
   "simpson",
   "pikachu",
   "mantequilla",
   "oro",
   "patito de goma"
  ],
  "rara": [
   "pelota de tenis",
   "post-it",
   "villarreal",
   "narciso",
   "azufre",
   "chubasquero",
   "minion"
  ],
  "original": [
   "ictericia",
   "maillot del tour",
   "páginas amarillas",
   "tarjeta amarilla"
  ]
 },
 "Un dulce típico de Semana Santa": {
  "comun": [
   "torrija",
   "mona de pascua",
   "mona",
   "pestiño",
   "buñuelo",
   "huevo de pascua",
   "huevo de chocolate"
  ],
  "infrecuente": [
   "leche frita",
   "rosquilla",
   "rosco frito",
   "flores de sartén",
   "hojuela",
   "bartolillo",
   "panquemao"
  ],
  "rara": [
   "piñonate",
   "huesillo",
   "crespell",
   "rubiol",
   "flaó"
  ],
  "original": [
   "gañote",
   "orelleta",
   "sopaipa",
   "hornazo"
  ]
 },
 "Un plato típico español": {
  "comun": [
   "paella",
   "tortilla de patatas",
   "tortilla",
   "gazpacho",
   "cocido",
   "cocido madrileño",
   "jamón",
   "croquetas",
   "fabada",
   "pulpo a la gallega"
  ],
  "infrecuente": [
   "salmorejo",
   "migas",
   "calamares",
   "patatas bravas",
   "lentejas",
   "callos",
   "pisto",
   "fideuá",
   "cochinillo"
  ],
  "rara": [
   "pimientos de padrón",
   "gachas",
   "caldo gallego",
   "escalivada",
   "marmitako",
   "papas arrugadas",
   "ajoblanco",
   "rabo de toro"
  ],
  "original": [
   "zarangollo",
   "olla podrida",
   "michirones",
   "botillo",
   "atascaburras"
  ]
 },
 "Algo que se hace en verano": {
  "comun": [
   "ir a la playa",
   "playa",
   "nadar",
   "bañarse",
   "tomar el sol",
   "ir a la piscina",
   "piscina",
   "vacaciones",
   "viajar",
   "siesta"
  ],
  "infrecuente": [
   "barbacoa",
   "acampar",
   "ir de camping",
   "broncearse",
   "salir de fiesta",
   "fiestas del pueblo",
   "ir al pueblo",
   "surf",
   "comer helado",
   "campamento"
  ],
  "rara": [
   "snorkel",
   "ver las perseidas",
   "festival",
   "cine de verano",
   "kayak",
   "recoger fruta",
   "tomar horchata",
   "buceo"
  ],
  "original": [
   "deberes de verano",
   "saltar hogueras",
   "dormir con el ventilador",
   "matar mosquitos",
   "ver el tour de francia"
  ]
 },
 "Un mueble del salón": {
  "comun": [
   "sofá",
   "mesa",
   "silla",
   "sillón",
   "estantería",
   "mueble de la tele",
   "mesita",
   "butaca"
  ],
  "infrecuente": [
   "librería",
   "mesa de centro",
   "aparador",
   "vitrina",
   "puf",
   "chaise longue",
   "mesa auxiliar"
  ],
  "rara": [
   "chinero",
   "mecedora",
   "cómoda",
   "baúl",
   "revistero",
   "diván",
   "taburete",
   "consola"
  ],
  "original": [
   "mueble bar",
   "piano",
   "otomana",
   "rinconera"
  ]
 },
 "Una marca de coche": {
  "comun": [
   "seat",
   "renault",
   "ford",
   "toyota",
   "bmw",
   "mercedes",
   "audi",
   "volkswagen",
   "peugeot",
   "citroën"
  ],
  "infrecuente": [
   "opel",
   "kia",
   "hyundai",
   "nissan",
   "fiat",
   "ferrari",
   "tesla",
   "dacia",
   "skoda",
   "volvo"
  ],
  "rara": [
   "porsche",
   "mazda",
   "honda",
   "lamborghini",
   "jeep",
   "mini",
   "cupra",
   "suzuki"
  ],
  "original": [
   "pegaso",
   "hispano-suiza",
   "lada",
   "trabant",
   "bugatti",
   "santana"
  ]
 },
 "Algo que se rompe fácilmente": {
  "comun": [
   "cristal",
   "vidrio",
   "vaso",
   "copa",
   "huevo",
   "plato",
   "espejo",
   "jarrón",
   "móvil",
   "pantalla"
  ],
  "infrecuente": [
   "gafas",
   "bombilla",
   "galleta",
   "uña",
   "hueso",
   "globo",
   "lápiz",
   "mina",
   "taza",
   "porcelana"
  ],
  "rara": [
   "corazón",
   "promesa",
   "tiza",
   "ramita",
   "barquillo",
   "pompa de jabón",
   "cuerda de guitarra",
   "silencio"
  ],
  "original": [
   "récord",
   "dieta",
   "propósito de año nuevo",
   "barrera del sonido",
   "hucha"
  ]
 },
 "Un insecto": {
  "comun": [
   "mosca",
   "mosquito",
   "hormiga",
   "abeja",
   "avispa",
   "mariposa",
   "cucaracha",
   "mariquita",
   "grillo",
   "saltamontes"
  ],
  "infrecuente": [
   "escarabajo",
   "libélula",
   "polilla",
   "pulga",
   "piojo",
   "chinche",
   "luciérnaga",
   "abejorro",
   "termita"
  ],
  "rara": [
   "mantis",
   "mantis religiosa",
   "cigarra",
   "chicharra",
   "tijereta",
   "langosta",
   "pececillo de plata",
   "efímera"
  ],
  "original": [
   "zapatero",
   "insecto palo",
   "ciervo volante",
   "pulgón",
   "carcoma"
  ]
 },
 "Una palabra que rime con «canción»": {
  "comun": [
   "corazón",
   "ratón",
   "camión",
   "avión",
   "balón",
   "melón",
   "limón",
   "jamón",
   "botón",
   "pasión"
  ],
  "infrecuente": [
   "ilusión",
   "emoción",
   "razón",
   "león",
   "montón",
   "sillón",
   "colchón",
   "cajón",
   "salchichón",
   "televisión"
  ],
  "rara": [
   "bribón",
   "chicharrón",
   "tiburón",
   "dragón",
   "perdón",
   "oración",
   "nación",
   "estación"
  ],
  "original": [
   "tirabuzón",
   "desamortización",
   "pimpón",
   "glotón",
   "chapuzón"
  ]
 },
 "Un personaje de cuento": {
  "comun": [
   "caperucita roja",
   "caperucita",
   "cenicienta",
   "blancanieves",
   "lobo feroz",
   "lobo",
   "pinocho",
   "bella durmiente",
   "peter pan",
   "sirenita"
  ],
  "infrecuente": [
   "rapunzel",
   "hansel",
   "gretel",
   "campanilla",
   "capitán garfio",
   "gato con botas",
   "patito feo",
   "ricitos de oro",
   "pulgarcito",
   "príncipe azul"
  ],
  "rara": [
   "hada madrina",
   "rumpelstiltskin",
   "flautista de hamelín",
   "soldadito de plomo",
   "alicia",
   "sombrerero loco",
   "bestia",
   "pepito grillo"
  ],
  "original": [
   "ratoncito pérez",
   "garbancito",
   "juan sin miedo",
   "ratita presumida",
   "gigante egoísta"
  ]
 },
 "Algo que hay en el cielo": {
  "comun": [
   "sol",
   "luna",
   "nube",
   "estrella",
   "avión",
   "pájaro",
   "arcoíris",
   "rayo"
  ],
  "infrecuente": [
   "cometa",
   "helicóptero",
   "globo",
   "satélite",
   "relámpago",
   "gaviota",
   "avioneta",
   "zepelín"
  ],
  "rara": [
   "dron",
   "constelación",
   "ovni",
   "meteorito",
   "aurora boreal",
   "águila",
   "paracaidista",
   "vía láctea"
  ],
  "original": [
   "calima",
   "estela",
   "ángel",
   "cohete",
   "parapente"
  ]
 },
 "Una verdura verde": {
  "comun": [
   "lechuga",
   "espinaca",
   "brócoli",
   "judía verde",
   "pimiento verde",
   "calabacín",
   "pepino",
   "guisante",
   "acelga"
  ],
  "infrecuente": [
   "alcachofa",
   "puerro",
   "espárrago",
   "col",
   "apio",
   "haba",
   "repollo",
   "pimiento de padrón"
  ],
  "rara": [
   "rúcula",
   "canónigo",
   "cardo",
   "borraja",
   "kale",
   "coles de bruselas",
   "grelos"
  ],
  "original": [
   "okra",
   "edamame",
   "berro",
   "ortiga",
   "pak choi",
   "tirabeque"
  ]
 },
 "Algo que llevas en la cartera": {
  "comun": [
   "dinero",
   "tarjeta",
   "tarjeta de crédito",
   "dni",
   "billete",
   "moneda",
   "carné de conducir",
   "carnet de conducir",
   "foto",
   "carné"
  ],
  "infrecuente": [
   "tarjeta sanitaria",
   "ticket",
   "recibo",
   "abono transporte",
   "tarjeta de puntos",
   "llave",
   "carnet",
   "calderilla"
  ],
  "rara": [
   "preservativo",
   "condón",
   "entrada",
   "sello",
   "tarjeta de visita",
   "décimo de lotería",
   "pósit",
   "pasaporte"
  ],
  "original": [
   "trébol de cuatro hojas",
   "estampita",
   "diente de leche",
   "carta de amor",
   "mechón de pelo"
  ]
 },
 "Un animal del mar": {
  "comun": [
   "tiburón",
   "ballena",
   "delfín",
   "pulpo",
   "pez",
   "medusa",
   "estrella de mar",
   "cangrejo",
   "foca",
   "orca"
  ],
  "infrecuente": [
   "calamar",
   "gamba",
   "langosta",
   "sardina",
   "atún",
   "caballito de mar",
   "tortuga",
   "mejillón",
   "morsa",
   "sepia"
  ],
  "rara": [
   "manta raya",
   "pez espada",
   "erizo de mar",
   "anémona",
   "percebe",
   "mero",
   "pez payaso",
   "cachalote"
  ],
  "original": [
   "narval",
   "pez luna",
   "dugongo",
   "pepino de mar",
   "vaquita marina"
  ]
 },
 "Un juego de mesa": {
  "comun": [
   "parchís",
   "monopoly",
   "ajedrez",
   "trivial",
   "cluedo",
   "oca",
   "dominó",
   "damas",
   "scrabble"
  ],
  "infrecuente": [
   "risk",
   "catan",
   "pictionary",
   "jenga",
   "tabú",
   "uno",
   "hundir la flota",
   "quién es quién",
   "damas chinas",
   "party"
  ],
  "rara": [
   "dixit",
   "carcassonne",
   "virus",
   "dobble",
   "backgammon",
   "go",
   "stratego",
   "mahjong"
  ],
  "original": [
   "aventureros al tren",
   "pandemic",
   "mansiones de la locura",
   "gloomhaven",
   "el hombre lobo de castronegro"
  ]
 },
 "Una ciudad famosa del mundo": {
  "comun": [
   "parís",
   "londres",
   "nueva york",
   "roma",
   "madrid",
   "barcelona",
   "tokio",
   "berlín",
   "venecia"
  ],
  "infrecuente": [
   "ámsterdam",
   "moscú",
   "los ángeles",
   "pekín",
   "sídney",
   "río de janeiro",
   "dubái",
   "praga",
   "lisboa",
   "buenos aires"
  ],
  "rara": [
   "estambul",
   "el cairo",
   "viena",
   "budapest",
   "san petersburgo",
   "kioto",
   "marrakech",
   "nueva delhi"
  ],
  "original": [
   "tombuctú",
   "ulán bator",
   "katmandú",
   "samarcanda",
   "reikiavik"
  ]
 },
 "Algo que suena por la mañana": {
  "comun": [
   "despertador",
   "alarma",
   "móvil",
   "teléfono",
   "gallo",
   "radio",
   "pájaro",
   "cafetera",
   "timbre"
  ],
  "infrecuente": [
   "camión de la basura",
   "ducha",
   "tostadora",
   "microondas",
   "tráfico",
   "campana",
   "bocina",
   "claxon",
   "noticias"
  ],
  "rara": [
   "barrendero",
   "perro",
   "obras",
   "persiana",
   "taladro",
   "tripa",
   "cisterna",
   "vecino"
  ],
  "original": [
   "bostezo",
   "ronquido",
   "cucharilla en la taza",
   "exprimidor",
   "hervidor"
  ]
 },
 "Un ingrediente de la paella": {
  "comun": [
   "arroz",
   "azafrán",
   "pollo",
   "gamba",
   "conejo",
   "mejillón",
   "aceite",
   "judía verde",
   "pimiento",
   "marisco"
  ],
  "infrecuente": [
   "garrofón",
   "calamar",
   "tomate",
   "ajo",
   "sal",
   "agua",
   "caldo",
   "almeja",
   "cigala",
   "limón"
  ],
  "rara": [
   "romero",
   "pimentón",
   "alcachofa",
   "sepia",
   "caracol",
   "langostino",
   "colorante",
   "pato"
  ],
  "original": [
   "socarrat",
   "leña de naranjo",
   "bajoqueta",
   "ferraura"
  ]
 },
 "Algo que se infla": {
  "comun": [
   "globo",
   "rueda",
   "colchoneta",
   "balón",
   "flotador",
   "neumático",
   "pelota",
   "piscina hinchable"
  ],
  "infrecuente": [
   "castillo hinchable",
   "barca",
   "colchón hinchable",
   "airbag",
   "mejilla",
   "pulmón",
   "chaleco salvavidas",
   "manguito"
  ],
  "rara": [
   "zepelín",
   "ego",
   "precio",
   "tripa",
   "pez globo",
   "chicle",
   "dirigible",
   "almohada de viaje"
  ],
  "original": [
   "currículum",
   "factura",
   "burbuja inmobiliaria",
   "sapo",
   "rana"
  ]
 },
 "Una flor": {
  "comun": [
   "rosa",
   "margarita",
   "tulipán",
   "girasol",
   "clavel",
   "amapola",
   "orquídea",
   "lirio"
  ],
  "infrecuente": [
   "jazmín",
   "geranio",
   "violeta",
   "lavanda",
   "hortensia",
   "azucena",
   "gardenia",
   "crisantemo",
   "petunia",
   "dalia"
  ],
  "rara": [
   "buganvilla",
   "magnolia",
   "camelia",
   "gladiolo",
   "narciso",
   "flor de pascua",
   "nenúfar",
   "azalea"
  ],
  "original": [
   "alhelí",
   "rafflesia",
   "edelweiss",
   "siempreviva",
   "pensamiento",
   "nomeolvides"
  ]
 },
 "Algo redondo": {
  "comun": [
   "pelota",
   "balón",
   "rueda",
   "sol",
   "luna",
   "moneda",
   "plato",
   "círculo",
   "naranja",
   "reloj"
  ],
  "infrecuente": [
   "pizza",
   "botón",
   "anillo",
   "cd",
   "galleta",
   "tapa",
   "donut",
   "ojo",
   "bola",
   "planeta"
  ],
  "rara": [
   "canica",
   "mandala",
   "ojo de buey",
   "pomo",
   "tambor",
   "frisbi",
   "diana",
   "rotonda"
  ],
  "original": [
   "cero",
   "letra o",
   "punto final",
   "aureola",
   "ombligo"
  ]
 },
 "Un árbol": {
  "comun": [
   "pino",
   "roble",
   "olivo",
   "manzano",
   "naranjo",
   "abeto",
   "encina",
   "chopo",
   "palmera",
   "almendro"
  ],
  "infrecuente": [
   "álamo",
   "sauce",
   "castaño",
   "eucalipto",
   "haya",
   "ciprés",
   "limonero",
   "cerezo",
   "higuera",
   "plátano"
  ],
  "rara": [
   "alcornoque",
   "fresno",
   "abedul",
   "acacia",
   "magnolio",
   "olmo",
   "nogal",
   "tejo"
  ],
  "original": [
   "baobab",
   "secuoya",
   "drago",
   "ombú",
   "ginkgo",
   "sabina"
  ]
 },
 "Un mes del año": {
  "comun": [
   "enero",
   "agosto",
   "diciembre",
   "julio"
  ],
  "infrecuente": [
   "marzo",
   "abril",
   "mayo",
   "junio"
  ],
  "rara": [
   "febrero",
   "octubre",
   "septiembre",
   "setiembre"
  ],
  "original": [
   "noviembre"
  ]
 },
 "Algo que hay en un cumpleaños": {
  "comun": [
   "tarta",
   "vela",
   "regalo",
   "globo",
   "invitado",
   "gorro",
   "música",
   "fiesta",
   "amigo",
   "piñata"
  ],
  "infrecuente": [
   "confeti",
   "matasuegras",
   "tarjeta",
   "refresco",
   "chuches",
   "gominola",
   "patatas fritas",
   "guirnalda",
   "cumpleañero",
   "cumpleaños feliz"
  ],
  "rara": [
   "payaso",
   "mago",
   "castillo hinchable",
   "photocall",
   "serpentina",
   "sándwich",
   "canapé",
   "tíos"
  ],
  "original": [
   "deseo",
   "tirón de orejas",
   "cana",
   "cuñado"
  ]
 },
 "Un día de la semana": {
  "comun": [
   "lunes",
   "viernes",
   "sábado",
   "domingo"
  ],
  "infrecuente": [
   "martes",
   "jueves"
  ],
  "rara": [
   "miércoles"
  ],
  "original": []
 },
 "Un planeta": {
  "comun": [
   "tierra",
   "marte",
   "júpiter",
   "saturno"
  ],
  "infrecuente": [
   "venus",
   "mercurio",
   "neptuno"
  ],
  "rara": [
   "urano",
   "plutón"
  ],
  "original": []
 },
 "Algo con ruedas": {
  "comun": [
   "coche",
   "auto",
   "bicicleta",
   "bici",
   "moto",
   "camión",
   "autobús",
   "patinete",
   "tren",
   "carro"
  ],
  "infrecuente": [
   "monopatín",
   "skate",
   "patines",
   "carrito de la compra",
   "silla de ruedas",
   "maleta",
   "tractor",
   "furgoneta",
   "caravana"
  ],
  "rara": [
   "avión",
   "cochecito de bebé",
   "carretilla",
   "tranvía",
   "quad",
   "silla de oficina",
   "triciclo",
   "trolley"
  ],
  "original": [
   "cortacésped",
   "cama de hospital",
   "carrito del avión",
   "cubo de basura",
   "noria"
  ]
 },
 "Un queso": {
  "comun": [
   "manchego",
   "roquefort",
   "gouda",
   "mozzarella",
   "parmesano",
   "brie",
   "cabrales",
   "emmental",
   "camembert",
   "queso fresco"
  ],
  "infrecuente": [
   "idiazábal",
   "tetilla",
   "queso de burgos",
   "feta",
   "cheddar",
   "mahón",
   "torta del casar",
   "queso de cabra",
   "gruyer",
   "philadelphia"
  ],
  "rara": [
   "mascarpone",
   "ricotta",
   "gorgonzola",
   "roncal",
   "san simón",
   "majorero",
   "edam",
   "halloumi"
  ],
  "original": [
   "afuega'l pitu",
   "casín",
   "flor de guía",
   "payoyo",
   "gamonéu"
  ]
 },
 "Un sabor de helado": {
  "comun": [
   "chocolate",
   "vainilla",
   "fresa",
   "nata",
   "limón",
   "stracciatella",
   "turrón",
   "galleta"
  ],
  "infrecuente": [
   "pistacho",
   "café",
   "mango",
   "menta",
   "dulce de leche",
   "avellana",
   "cookies",
   "coco",
   "tutti frutti",
   "plátano"
  ],
  "rara": [
   "yogur",
   "leche merengada",
   "horchata",
   "frambuesa",
   "caramelo salado",
   "chicle",
   "kinder",
   "after eight"
  ],
  "original": [
   "aceite de oliva",
   "torrija",
   "té matcha",
   "sésamo negro",
   "roscón de reyes"
  ]
 },
 "Un río de España": {
  "comun": [
   "ebro",
   "tajo",
   "guadalquivir",
   "duero",
   "miño",
   "guadiana"
  ],
  "infrecuente": [
   "júcar",
   "segura",
   "manzanares",
   "turia",
   "genil",
   "sil",
   "pisuerga",
   "nervión"
  ],
  "rara": [
   "tormes",
   "ter",
   "llobregat",
   "guadalete",
   "jarama",
   "esla",
   "bidasoa",
   "tinto"
  ],
  "original": [
   "órbigo",
   "cinca",
   "alberche",
   "eresma",
   "ulla"
  ]
 },
 "Algo que se lleva en la cabeza": {
  "comun": [
   "gorra",
   "sombrero",
   "gorro",
   "casco",
   "gafas",
   "gafas de sol",
   "pelo",
   "diadema",
   "pañuelo"
  ],
  "infrecuente": [
   "boina",
   "corona",
   "peluca",
   "cinta",
   "pinza",
   "coletero",
   "turbante",
   "capucha",
   "horquilla",
   "auriculares"
  ],
  "rara": [
   "tiara",
   "velo",
   "mantilla",
   "peineta",
   "visera",
   "pasamontañas",
   "kipá",
   "birrete"
  ],
  "original": [
   "piojo",
   "chichón",
   "cuernos",
   "cántaro",
   "chistera"
  ]
 },
 "Una prenda de invierno": {
  "comun": [
   "abrigo",
   "bufanda",
   "guantes",
   "gorro",
   "jersey",
   "chaqueta",
   "plumas",
   "plumífero",
   "botas",
   "chaquetón"
  ],
  "infrecuente": [
   "forro polar",
   "sudadera",
   "cazadora",
   "gabardina",
   "orejeras",
   "parka",
   "manoplas",
   "chal",
   "leotardos",
   "rebeca"
  ],
  "rara": [
   "poncho",
   "trenca",
   "pasamontañas",
   "camiseta térmica",
   "calzoncillos largos",
   "chaleco",
   "capa",
   "mitones"
  ],
  "original": [
   "batamanta",
   "bata de guatiné",
   "braga de cuello",
   "pelliza",
   "zamarra"
  ]
 },
 "Algo que hace ruido": {
  "comun": [
   "tambor",
   "coche",
   "moto",
   "perro",
   "despertador",
   "trueno",
   "sirena",
   "bocina",
   "claxon",
   "petardo"
  ],
  "infrecuente": [
   "taladro",
   "aspiradora",
   "avión",
   "tren",
   "batería",
   "trompeta",
   "timbre",
   "lavadora",
   "vecino",
   "campana"
  ],
  "rara": [
   "grillo",
   "cigarra",
   "sonajero",
   "olla exprés",
   "motosierra",
   "castañuelas",
   "cisterna",
   "persiana"
  ],
  "original": [
   "bolsa de patatas",
   "nudillos",
   "gotera",
   "papel de burbujas",
   "tripa"
  ]
 },
 "Una tapa de bar": {
  "comun": [
   "patatas bravas",
   "bravas",
   "croquetas",
   "tortilla",
   "tortilla de patatas",
   "aceitunas",
   "jamón",
   "calamares",
   "ensaladilla",
   "boquerones"
  ],
  "infrecuente": [
   "chopitos",
   "pulpo a la gallega",
   "oreja",
   "callos",
   "alitas",
   "champiñones",
   "morcilla",
   "chorizo",
   "pimientos de padrón",
   "gambas al ajillo"
  ],
  "rara": [
   "caracoles",
   "rabas",
   "torreznos",
   "salmorejo",
   "flamenquín",
   "montadito",
   "mejillones tigre",
   "gilda"
  ],
  "original": [
   "zarajos",
   "criadillas",
   "cojonudo",
   "matrimonio",
   "papas arrugadas"
  ]
 },
 "Un número del 1 al 10": {
  "comun": [
   "siete",
   "7",
   "tres",
   "3",
   "uno",
   "1",
   "diez",
   "10"
  ],
  "infrecuente": [
   "cinco",
   "5",
   "dos",
   "2",
   "cuatro",
   "4",
   "ocho",
   "8"
  ],
  "rara": [
   "seis",
   "6",
   "nueve",
   "9"
  ],
  "original": []
 },
 "Algo que se hace en la cama": {
  "comun": [
   "dormir",
   "leer",
   "soñar",
   "descansar",
   "roncar",
   "ver la tele",
   "mirar el móvil",
   "hacer el amor",
   "desayunar"
  ],
  "infrecuente": [
   "pensar",
   "llorar",
   "ver series",
   "abrazar",
   "hacer la cama",
   "estirarse",
   "rezar",
   "comer",
   "dar vueltas"
  ],
  "rara": [
   "saltar",
   "guerra de almohadas",
   "sudar",
   "babear",
   "hablar en sueños",
   "trabajar",
   "meditar",
   "mojar la cama"
  ],
  "original": [
   "hacer la cucharita",
   "procrastinar",
   "tirarse un pedo",
   "hacer la croqueta",
   "hacer un fuerte"
  ]
 },
 "Un electrodoméstico": {
  "comun": [
   "lavadora",
   "nevera",
   "frigorífico",
   "microondas",
   "horno",
   "lavavajillas",
   "lavaplatos",
   "secadora",
   "aspiradora",
   "frigo"
  ],
  "infrecuente": [
   "batidora",
   "cafetera",
   "plancha",
   "vitrocerámica",
   "congelador",
   "campana extractora",
   "secador",
   "robot de cocina",
   "thermomix",
   "tostadora"
  ],
  "rara": [
   "freidora de aire",
   "exprimidor",
   "sandwichera",
   "yogurtera",
   "picadora",
   "deshumidificador",
   "roomba",
   "licuadora"
  ],
  "original": [
   "termo",
   "panificadora",
   "envasadora al vacío",
   "crepera",
   "heladera"
  ]
 },
 "Un animal de la selva": {
  "comun": [
   "león",
   "tigre",
   "mono",
   "elefante",
   "serpiente",
   "jirafa",
   "gorila",
   "cocodrilo",
   "loro",
   "leopardo"
  ],
  "infrecuente": [
   "jaguar",
   "tucán",
   "chimpancé",
   "pantera",
   "hipopótamo",
   "rinoceronte",
   "cebra",
   "guacamayo",
   "orangután",
   "anaconda"
  ],
  "rara": [
   "perezoso",
   "tapir",
   "rana venenosa",
   "puma",
   "boa",
   "camaleón",
   "tarántula",
   "oso hormiguero"
  ],
  "original": [
   "okapi",
   "coatí",
   "capibara",
   "ocelote",
   "jaguarundi"
  ]
 },
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
   "palmera de chocolate",
   "fresas con chocolate",
   "gominolas"
  ],
  "original": [
   "piñonate",
   "coquitos",
   "peladillas",
   "chupa chups gigante",
   "pan de higo"
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
   "melódica",
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
   "tijeras",
   "metro"
  ],
  "infrecuente": [
   "serrucho",
   "nivel",
   "lima",
   "llave allen",
   "tenazas",
   "pala",
   "rastrillo",
   "cúter"
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
   "petanca",
   "pipas",
   "laberinto",
   "caca",
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
   "navidad",
   "sanfermines"
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
   "entierro de la sardina",
   "romería",
   "verbena",
   "fiesta de la vendimia"
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
   "teléfono",
   "mando",
   "mando a distancia",
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
   "horquilla",
   "tiempo",
   "tupper"
  ],
  "rara": [
   "cargador",
   "tapa del boli",
   "pinza del pelo",
   "bufanda",
   "dni",
   "tarjeta",
   "coletero"
  ],
  "original": [
   "paciencia",
   "cabeza",
   "norte",
   "vergüenza",
   "hilo",
   "memoria"
  ]
 },
 "Un medio de transporte": {
  "comun": [
   "coche",
   "auto",
   "avión",
   "tren",
   "autobús",
   "barco",
   "bicicleta",
   "bici",
   "moto",
   "metro"
  ],
  "infrecuente": [
   "taxi",
   "tranvía",
   "patinete",
   "helicóptero",
   "furgoneta",
   "camión",
   "autocar",
   "bus"
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
   "piojo",
   "cayena",
   "chinche",
   "pimiento de padrón"
  ],
  "rara": [
   "medusa",
   "escorpión",
   "jersey de lana",
   "barba",
   "garrapata",
   "rábano",
   "sarna"
  ],
  "original": [
   "curiosidad",
   "anzuelo",
   "etiqueta de la camiseta",
   "sol de agosto",
   "varicela"
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
   "arousa"
  ],
  "rara": [
   "islas cíes",
   "ons",
   "tabarca",
   "alborán",
   "columbretes",
   "la toja",
   "isla perejil"
  ],
  "original": [
   "isla de los faisanes",
   "lobos",
   "sálvora",
   "santa clara",
   "dragonera"
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
   "enfermero",
   "camilla",
   "jeringuilla",
   "jeringa",
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
   "chimichurri",
   "pil pil"
  ],
  "original": [
   "salsa de almendras",
   "bilbaína",
   "mojo verde",
   "salsa española",
   "sriracha",
   "salsa de yogur"
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
   "yenka",
   "paquito el chocolatero",
   "los pajaritos"
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
   "zorrillo",
   "ardilla",
   "jabato",
   "gato atigrado"
  ],
  "rara": [
   "ardilla listada",
   "pez león",
   "numbat",
   "bongo",
   "serpiente coral",
   "hiena rayada",
   "tigre blanco"
  ],
  "original": [
   "quagga",
   "oruga",
   "escarabajo de la patata",
   "pez cebra",
   "sargo"
  ]
 },
 "Algo que se enciende": {
  "comun": [
   "luz",
   "vela",
   "fuego",
   "televisión",
   "tele",
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
   "linterna",
   "estufa",
   "lámpara"
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
   "ánimos",
   "discusión",
   "mecha",
   "pasión",
   "árbol de navidad"
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
   "moncayo",
   "mont blanc"
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
   "bocata",
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
   "tamal",
   "dolma",
   "rollito de primavera",
   "palé",
   "puro"
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
   "guasón",
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
   "freddy krueger",
   "sauron",
   "grinch",
   "pennywise"
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
   "dolores umbridge",
   "ganondorf",
   "jack torrance",
   "pazuzu",
   "hans landa",
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
   "pulgas amaestradas",
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
   "pipas",
   "castaña"
  ],
  "infrecuente": [
   "piñón",
   "nuez de macadamia",
   "pecana",
   "altramuz",
   "maní",
   "quicos",
   "kikos",
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
   "orejón",
   "ciruela pasa",
   "pipa de calabaza",
   "hayuco"
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
   "jarra"
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
   "duna",
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
   "tuareg"
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
