const digito1 = document.querySelector("#p3_digito1");
const digito2 = document.querySelector("#p3_digito2");
const digito3 = document.querySelector("#p3_digito3");

const mensaje = document.querySelector("#p3_mensaje");
const btnIngresar = document.querySelector("#p3_ingresar");

btnIngresar.onclick = function () {
  const password = digito1.value + digito2.value + digito3.value;

  if (password === "911") mensaje.innerHTML = "password 1 correcto";
  else if (password === "714") mensaje.innerHTML = "password 2 es correcto";
  else mensaje.innerHTML = "password incorrecto";
};

document.querySelector(".p3_digitos").forEach((select) => {
  input.addEventListener("change", (e) => {
    mensaje.innerHTML = "";
  });
});
