const textos = {
  1: "Descripción del problema: El cambio climático es la alteración a largo plazo de las temperaturas globales, impulsada por la acumulación excesiva de gases de efecto invernadero que atrapan el calor en la Tierra.",
  2: "Causas principales: La quema de combustibles fósiles (carbón, petróleo, gas), la deforestación masiva de bosques y las industrias no reguladas han elevado los niveles de CO2 a récords históricos.",
  3: "Consecuencias globales: Provoca el deshielo acelerado de glaciares, la subida del nivel del mar, olas de calor extremas y la pérdida irreversible de biodiversidad marina y terrestre.",
  4: "Datos e impacto en el Perú: El Perú es uno de los países más vulnerables del mundo. En los últimos 50 años ha perdido más del 50% de la superficie de sus glaciares andinos, afectando el suministro de agua.",
  5: "Formas de prevención y mitigación: Transición hacia energías renovables (solar y eólica), reforestación activa, movilidad eléctrica y fomento de una economía circular responsable."
};

const selector = document.querySelector("#pagina");
const sistema = document.querySelector("#sistema");
const boton = document.querySelector("#pausa");
const marcador = document.querySelector("#marcador");
const estado = document.querySelector("#estado");

function mostrarPagina() {
  document.querySelector("#contenido").textContent = textos[selector.value];
  sistema.querySelectorAll("[data-paginas]").forEach(el => {
    const paginas = el.dataset.paginas.split(" ");
    el.setAttribute("visible", paginas.includes(selector.value));
  });
}

selector.addEventListener("change", mostrarPagina);
sistema.addEventListener("loaded", mostrarPagina);
mostrarPagina();

let enPausa = false;
boton.addEventListener("click", () => {
  enPausa = !enPausa;
  if (enPausa) sistema.pause();
  else sistema.play();
  boton.textContent = enPausa ? "Continuar" : "Pausar";
});

marcador.addEventListener("markerFound", () => {
  estado.textContent = "Marcador detectado. Selecciona una sección temática.";
});

marcador.addEventListener("markerLost", () => {
  estado.textContent = "Vuelve a enfocar el marcador completo.";
});

window.addEventListener("camera-error", () => {
  estado.textContent = "Revisa HTTPS, permisos y disponibilidad de cámara.";
});