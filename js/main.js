/* =====================================================================
   TALLER WEB - JavaScript simple
   Hace tres cosas: abre el menú en celular, hace aparecer los bloques
   al bajar la página y arma el mensaje de WhatsApp del formulario.
   ===================================================================== */

// CAMBIAR AQUÍ EL NÚMERO DE WHATSAPP (código de país + número, sin signos ni espacios).
// Es el único lugar que hay que editar: todos los enlaces wa.me de la página
// y el formulario toman el número de esta variable.
// Los enlaces de index.html conservan el número de ejemplo solo como respaldo
// por si JavaScript no funciona; el texto visible "(+502) 5555-0187" sí se cambia a mano.
var NUMERO_WHATSAPP = "50255550187";

// Avisa al CSS que JavaScript funciona (activa la aparición suave)
document.documentElement.classList.add("js");

/* ---------- 0. Número de WhatsApp en todos los enlaces ---------- */
// Cambia el número de cada enlace wa.me y mantiene el mensaje que ya traen
document.querySelectorAll('a[href^="https://wa.me/"]').forEach(function (enlace) {
  enlace.href = enlace.getAttribute("href").replace(/wa\.me\/\d+/, "wa.me/" + NUMERO_WHATSAPP);
});

/* ---------- 1. Menú de tres rayas (celular) ---------- */
(function () {
  var boton = document.querySelector(".barra__boton-menu");
  var menu = document.getElementById("menu");
  if (!boton || !menu) return;

  function cerrar() {
    menu.classList.remove("abierto");
    boton.setAttribute("aria-expanded", "false");
    boton.setAttribute("aria-label", "Abrir menú");
  }

  boton.addEventListener("click", function () {
    var abierto = menu.classList.toggle("abierto");
    boton.setAttribute("aria-expanded", abierto ? "true" : "false");
    boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  });

  // Se cierra al elegir una opción o al presionar Escape
  menu.addEventListener("click", function (e) {
    if (e.target.tagName === "A") cerrar();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("abierto")) {
      cerrar();
      boton.focus();
    }
  });
})();

/* ---------- 2. Aparición suave al hacer scroll ---------- */
(function () {
  var bloques = document.querySelectorAll(".revelar");
  if (!("IntersectionObserver" in window)) {
    bloques.forEach(function (b) { b.classList.add("visible"); });
    return;
  }
  var observador = new IntersectionObserver(function (entradas) {
    entradas.forEach(function (entrada) {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("visible");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });
  bloques.forEach(function (b) { observador.observe(b); });
})();

/* ---------- 3. Formulario: arma el mensaje y abre WhatsApp ---------- */
(function () {
  var form = document.getElementById("form-cotizar");
  var error = document.getElementById("error-form");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var nombre = form.nombre.value.trim();
    var telefono = form.telefono.value.trim();
    var trabajo = form.trabajo.value;
    var detalle = form.mensaje.value.trim().replace(/[.\s]+$/, ""); // sin punto final, para no duplicarlo

    if (!nombre || !telefono) {
      // CAMBIAR: texto del aviso si falta un dato
      error.textContent = "Escribe tu nombre y un teléfono para poder contactarte.";
      (!nombre ? form.nombre : form.telefono).focus();
      return;
    }
    error.textContent = "";

    // CAMBIAR: forma del mensaje que se envía
    var texto = "Hola, soy " + nombre + ". Quiero cotizar: " + trabajo + ". " +
      (detalle ? detalle + ". " : "") + "Mi teléfono: " + telefono + ".";

    window.open("https://wa.me/" + NUMERO_WHATSAPP + "?text=" + encodeURIComponent(texto),
      "_blank", "noopener");
  });
})();

/* ---------- 4. Secciones que se ocultan y se muestran (celular) ---------- */
// Cada bloque marcado con data-plegable se esconde en celular. Se crea un botón
// con una flechita justo antes del primer bloque de su grupo. En pantallas
// grandes el CSS no esconde nada y el botón no se ve.
(function () {
  var grupos = {};
  document.querySelectorAll("[data-plegable]").forEach(function (bloque) {
    var nombre = bloque.getAttribute("data-plegable");
    (grupos[nombre] = grupos[nombre] || []).push(bloque);
  });

  Object.keys(grupos).forEach(function (nombre, i) {
    var bloques = grupos[nombre];
    var boton = document.createElement("button");
    boton.type = "button";
    boton.className = "plegable-boton";
    boton.setAttribute("aria-expanded", "false");
    boton.setAttribute("aria-label", "Mostrar " + nombre);
    boton.innerHTML =
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" ' +
      'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>';

    // Los bloques necesitan un id para que el botón los pueda señalar
    var ids = bloques.map(function (b, j) {
      b.id = b.id || "plegable-" + i + "-" + j;
      b.classList.add("plegado");
      return b.id;
    });
    boton.setAttribute("aria-controls", ids.join(" "));

    boton.addEventListener("click", function () {
      var abrir = boton.getAttribute("aria-expanded") === "false";
      bloques.forEach(function (b) { b.classList.toggle("plegado", !abrir); });
      boton.setAttribute("aria-expanded", abrir ? "true" : "false");
      boton.setAttribute("aria-label", (abrir ? "Ocultar " : "Mostrar ") + nombre);
    });

    bloques[0].parentNode.insertBefore(boton, bloques[0]);
  });
})();
