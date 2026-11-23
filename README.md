# ¡Gafados!

Juego de fiesta en castellano. Sale una categoría («Una fruta roja») y cada jugador escribe una respuesta en secreto. Solo puntúan las respuestas **originales**: si coincides con alguien, quedáis **gafados** y ninguno de los dos puntúa.

## Puntos

- **Por orden:** cada respuesta única gana tantos puntos como jugadores + 1 si es la primera en contestarse, y uno menos por cada posición siguiente.
- **Por rareza:** además, suma un extra según su nivel: común +1, infrecuente +2, rara +3 y original +5. El nivel sale de `palabras.js`; si la respuesta no está, la valoran los demás jugadores (gana el nivel más votado y, si hay empate, el más bajo).
- **Gafados y respuestas marcadas como «No vale»:** no puntúan.

## Modos

- **Un solo móvil:** el móvil pasa de mano en mano. De 2 a 10 jugadores.
- **Online, cada uno en su móvil:** una persona crea la partida y los demás entran con un código de 4 letras. También de 2 a 10 jugadores.

## Cómo funciona el modo online

No hay servidor propio. El móvil del anfitrión guarda la partida y la publica en un servidor público de mensajes MQTT por WebSocket seguro (HiveMQ, y EMQX si el primero no responde). Los demás móviles reciben el estado de la partida y envían sus respuestas por el mismo canal. No hay conexiones directas entre móviles, así que funciona también con datos móviles.

- El anfitrión no debe cerrar la página durante la partida. Si recarga, puede pulsar «Volver a tu partida» y los demás siguen donde estaban.
- Las respuestas no aparecen en la pantalla de nadie hasta que se revelan. Los servidores de mensajes son públicos, así que no lo uses para nada privado.

## Publicar en GitHub Pages

1. En el repositorio, ve a **Settings → Pages**.
2. En **Source** elige **Deploy from a branch**, selecciona la rama y la carpeta `/ (root)`, y pulsa **Save**.
3. En un par de minutos el juego estará en `https://<usuario>.github.io/<repositorio>/`.

El juego está en `index.html`, y las listas de palabras por nivel de rareza de cada categoría, en `palabras.js`. No hay nada que compilar.
