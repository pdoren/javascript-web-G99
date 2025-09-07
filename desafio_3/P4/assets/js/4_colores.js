function pintar(element, color = "black") {
  element.style.backgroundColor = color;
}

const cajas = document.querySelectorAll(".caja");

cajas.forEach((caja) => {
  caja.addEventListener("click", () => {
    pintar(caja);
  });
});
