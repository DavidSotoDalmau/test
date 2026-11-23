# ¡Gafados!

Juego de fiesta en castellano. Sale una categoría («Una fruta roja») y cada jugador escribe una respuesta en secreto. Solo puntúan las respuestas **originales**: si coincides con alguien, quedáis **gafados** y ninguno de los dos puntúa.

## Modos

- **Un solo móvil:** el móvil pasa de mano en mano. De 3 a 10 jugadores.
- **Online, cada uno en su móvil:** una persona crea la partida y los demás entran con un código de 4 letras.

## Cómo funciona el modo online

No hay servidor propio. El móvil del anfitrión guarda la partida y los demás se conectan directamente a él por WebRTC, con [PeerJS](https://peerjs.com). El servidor público y gratuito de PeerJS solo se usa para que los móviles se encuentren a partir del código.

- El anfitrión no debe cerrar la página ni bloquear el móvil durante la partida. Si recarga, puede pulsar «Volver a tu partida».
- Las respuestas no llegan a los demás jugadores hasta que se revelan.
- En algunas redes muy restrictivas (wifi corporativas o algunos datos móviles), WebRTC no consigue conectar sin un servidor TURN. Si pasa, probad todos con la misma wifi.

## Publicar en GitHub Pages

1. En el repositorio, ve a **Settings → Pages**.
2. En **Source** elige **Deploy from a branch**, selecciona la rama y la carpeta `/ (root)`, y pulsa **Save**.
3. En un par de minutos el juego estará en `https://<usuario>.github.io/<repositorio>/`.

Todo el juego está en un único archivo, `index.html`, sin dependencias que compilar.
