# PROGRESO: Taller Web

Última actualización: 17 de noviembre de 2026 (cierre de sesión).

## Dónde quedamos

La página está completa y funcionando (10 secciones, versión de escritorio y de celular). Hay 14 puntos de restauración en Git; el último de la página es el 14, y después se guardó el de cierre de sesión.

## Etapas terminadas

1. Estructura inicial, ficha del negocio (`BRIEF.md`) y fotos de práctica en `img/`.
2. Estructura y textos de las 10 secciones, y primera versión de la página.
3. Ajustes de barra superior, titular de portada, marcas [EJEMPLO] y número de WhatsApp en un solo lugar.
4. Revisión visual en Chrome (escritorio y celular): estructura y formato adecuados.
5. Mejoras de celular: fotos del proceso, menos espacio en blanco y marcas [EJEMPLO] más legibles (punto 12).
6. Más separación entre letras y palabras en "Por qué elegirnos", verificado a 320, 360 y 390 px (punto 13).
7. Auditoría de calidad y correcciones aprobadas: colores en variables y mensaje de WhatsApp sin doble punto (punto 14).

## Decisiones de hoy

- Aplicar las tres mejoras de celular propuestas tras la revisión.
- Mantener el estilo condensado de los textos grandes y solo abrir el espacio entre letras y palabras.
- Aprobar las correcciones 1 (colores) y 2 (doble punto) de la auditoría.
- No tocar los detalles menores y dejar las opciones 3, 4 y 5 como están (ver `BRIEF.md`).

## Pendiente o a medias

- **4 imágenes borradas sin guardar en Git:** `imageds.jpeg`, `images (1).jpeg`, `images.jpeg` y `segundo-paso-lijado-337x600.jpg` (están en la carpeta raíz, no en `img/`). Ya aparecían borradas al empezar la sesión. Nadie ha decidido si el borrado es intencional.
- Falta la foto real del "después" en Resultados (hoy es un recuadro vacío [EJEMPLO]).
- Falta el mapa real en Ubicación (hoy es un recuadro vacío [EJEMPLO]).
- Todos los datos siguen siendo de práctica [EJEMPLO]: teléfonos, dirección, horario, opiniones y cifras.
- Los números de ejemplo tienen formato real de Guatemala: el botón de WhatsApp y el formulario abren un chat con ese número. Para probar el formulario, usar un número propio en `NUMERO_WHATSAPP` (`js/main.js`).

## Siguiente paso para mañana

Decidir qué hacer con las 4 imágenes borradas: **o** confirmar que el borrado es intencional (yo lo guardo en Git y el estado queda limpio), **o** pedir que se restauren con `git restore`. Es lo único que impide tener el proyecto en estado limpio.

## Para retomar

- Servidor para ver la página en Chrome: desde la carpeta `taller_web`, `python3 -m http.server 8765` y abrir `http://127.0.0.1:8765/index.html`.
- Archivos de la página: `index.html`, `css/estilos.css`, `js/main.js`.
