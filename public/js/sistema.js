AFRAME.registerComponent("sistema-solar", {
  init() {
    const contenedor = this.el;

    // 1. Sol central (fijo)
    const sol = document.createElement("a-sphere");
    sol.setAttribute("radius", "0.20");
    sol.setAttribute("color", "#FFA500");
    sol.setAttribute("material", "emissive: #FF5722; emissiveIntensity: 0.7; roughness: 0.3");
    contenedor.appendChild(sol);

    // 2. Entidad orbital de la Tierra (idéntico a la estructura original del laboratorio)
    const orbitaTierra = document.createElement("a-entity");
    orbitaTierra.setAttribute("orbita", "radio: 0.65; velocidad: 18");
    orbitaTierra.setAttribute("visible", "true");

    // Planeta Tierra ubicado en su distancia orbital (0.65 en X)
    const tierra = document.createElement("a-sphere");
    tierra.setAttribute("position", "0.65 0 0");
    tierra.setAttribute("radius", "0.1");
    tierra.setAttribute("color", "#2E86AB");
    tierra.dataset.paginas = "1 2 4 5";

    // Continentes / vegetación
    const vegetacion = document.createElement("a-box");
    vegetacion.setAttribute("position", "0.07 0.03 0");
    vegetacion.setAttribute("scale", "0.04 0.04 0.04");
    vegetacion.setAttribute("color", "#4CB944");
    vegetacion.dataset.paginas = "1 2 4 5";
    tierra.appendChild(vegetacion);

    // Página 1: Atmósfera natural
    const atmosferaLimpia = document.createElement("a-sphere");
    atmosferaLimpia.setAttribute("radius", "0.12");
    atmosferaLimpia.setAttribute("material", "color: #FFFFFF; opacity: 0.25; transparent: true");
    atmosferaLimpia.dataset.paginas = "1";
    tierra.appendChild(atmosferaLimpia);

    // Página 2: Capa densa de gases de efecto invernadero (halo anaranjado)
    const capaGases = document.createElement("a-sphere");
    capaGases.setAttribute("radius", "0.14");
    capaGases.setAttribute("material", "color: #E67E22; opacity: 0.55; transparent: true");
    capaGases.dataset.paginas = "2";
    tierra.appendChild(capaGases);

    // Página 3: Tierra sobrecalentada en rojo (misma posición 0.65)
    const tierraRoja = document.createElement("a-sphere");
    tierraRoja.setAttribute("position", "0.65 0 0");
    tierraRoja.setAttribute("radius", "0.1");
    tierraRoja.setAttribute("color", "#C0392B");
    tierraRoja.dataset.paginas = "3";

    const casquete = document.createElement("a-sphere");
    casquete.setAttribute("position", "0 0.08 0");
    casquete.setAttribute("radius", "0.04");
    casquete.setAttribute("color", "#EBF5FB");
    casquete.setAttribute("material", "opacity: 0.5; transparent: true");
    casquete.dataset.paginas = "3";
    tierraRoja.appendChild(casquete);

    // Página 4: Indicador de vulnerabilidad en Perú
    const marcadorPeru = document.createElement("a-cone");
    marcadorPeru.setAttribute("position", "0.08 0.02 0.05");
    marcadorPeru.setAttribute("rotation", "0 45 90");
    marcadorPeru.setAttribute("radius-bottom", "0.025");
    marcadorPeru.setAttribute("height", "0.06");
    marcadorPeru.setAttribute("color", "#F1C40F");
    marcadorPeru.dataset.paginas = "4";
    tierra.appendChild(marcadorPeru);

    // Página 5: Escudo de mitigación y sostenibilidad
    const escudoVerde = document.createElement("a-torus");
    escudoVerde.setAttribute("radius", "0.16");
    escudoVerde.setAttribute("radius-tubular", "0.012");
    escudoVerde.setAttribute("rotation", "45 45 0");
    escudoVerde.setAttribute("material", "color: #2ECC71; emissive: #27AE60; emissiveIntensity: 0.4");
    escudoVerde.dataset.paginas = "5";
    tierra.appendChild(escudoVerde);

    orbitaTierra.appendChild(tierra);
    orbitaTierra.appendChild(tierraRoja);
    contenedor.appendChild(orbitaTierra);
  }
});