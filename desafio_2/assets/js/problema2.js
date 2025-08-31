const inputs = document.querySelectorAll(".cantidad_stickers");
const mensaje = document.querySelector("#p2_mensaje");
const btnVerificar = document.querySelector("#p2_verificar");

function get_total_stickers() {
  let suma_stickers = 0;
  inputs.forEach((input) => {
    suma_stickers += parseInt(input.value);
  });
  return suma_stickers;
}

function update_stickers() {
  let suma_stickers = get_total_stickers();
  if (suma_stickers != 0)
    mensaje.innerHTML = "Quieres llevar " + suma_stickers + " stickers.";
  else mensaje.innerHTML = "";
}

inputs.forEach((input) => {
  input.addEventListener("change", (e) => {
    update_stickers();
  });
});

btnVerificar.onclick = function () {
  let suma_stickers = get_total_stickers();
  if (suma_stickers > 10) mensaje.innerHTML = "Llevas demasiados stickers.";
  else mensaje.innerHTML = "Llevas " + suma_stickers + " stickers.";
};
