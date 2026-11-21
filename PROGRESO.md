# PROGRESO: Taller Web

Última actualización: 21 de noviembre de 2026.

## Dónde quedamos

La página está completa y funcionando (10 secciones, versión de escritorio y de celular), ahora con el logo del taller y secciones plegables en celular. Git está limpio. Hay 2 puntos de restauración; el último es `7e4cb4b` (logo y botones plegables).

## Etapas terminadas

1. Estructura inicial, ficha del negocio (`BRIEF.md`) y fotos de práctica en `img/`.
2. Estructura y textos de las 10 secciones, y primera versión de la página.
3. Ajustes de barra superior, titular de portada, marcas [EJEMPLO] y número de WhatsApp en un solo lugar.
4. Revisión visual en Chrome (escritorio y celular): estructura y formato adecuados.
5. Mejoras de celular: fotos del proceso, menos espacio en blanco y marcas [EJEMPLO] más legibles (punto 12).
6. Más separación entre letras y palabras en "Por qué elegirnos", verificado a 320, 360 y 390 px (punto 13).
7. Auditoría de calidad y correcciones aprobadas: colores en variables y mensaje de WhatsApp sin doble punto (punto 14).
8. Logo oficial del taller (JG, `img/logo-jg.jpg`) en la barra superior y como ícono de la pestaña. No se puso en el pie ni en la portada (punto `7e4cb4b`).
9. Botones plegables en celular (flechita ⌄) en 6 secciones: Servicios, Cómo trabajamos, Resultados, Por qué elegirnos, Opiniones y Ubicación y horario. Con la sección cerrada se ve solo el título y el botón; en Ubicación el botón de WhatsApp queda siempre visible. En computadora y tablet (40 rem o más) todo se ve abierto. Aprobado por el usuario (punto `7e4cb4b`).

## Decisiones de hoy

- Usar el logo JG en la barra superior.
- Hacer la página de celular menos larga con secciones plegables, para que el contacto rápido quede a la mano.
- Dejar Cotización, la portada y la barra con WhatsApp siempre visibles.

## Pendiente o a medias

- Falta la foto real del "después" en Resultados (hoy es un recuadro vacío [EJEMPLO]).
- Falta el mapa real en Ubicación (hoy es un recuadro vacío [EJEMPLO]).
- **Nombre del taller:** la página dice "Taller Web" y el logo dice "JG". Falta decidir si se deja así, si el logo va solo o si se cambia el nombre.
- **Colores:** el dorado del logo no se usa en la página. Se propuso como posible color de acento, o una barra más oscura que combine con el fondo negro del logo. Sin decidir.
- Todos los datos siguen siendo de práctica [EJEMPLO]: teléfonos, dirección, horario, opiniones y cifras.
- Los números de ejemplo tienen formato real de Guatemala: el botón de WhatsApp y el formulario abren un chat con ese número. Para probar el formulario, usar un número propio en `NUMERO_WHATSAPP` (`js/main.js`).

## Siguiente paso para mañana

Decidir el nombre del taller (Taller Web o JG) y si se usa el dorado del logo en la página. Después, revisar en el celular real los botones plegables.

## Para retomar

- Servidor para ver la página en Chrome: desde la carpeta `taller_web`, `python3 -m http.server 8765` y abrir `http://127.0.0.1:8765/index.html`.
- Archivos de la página: `index.html`, `css/estilos.css`, `js/main.js`.
- Botones plegables: se marcan con `data-plegable="nombre"` en `index.html`. El código está en la sección 4 de `js/main.js` y el estilo en la 13b de `css/estilos.css`.
