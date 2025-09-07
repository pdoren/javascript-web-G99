color = "pink"; // Variable global
const container = document.getElementById("container");
const caja = document.getElementById("caja");

function pintar() {
  caja.style.backgroundColor = color;
}

function newdiv(_color) {
  const div = document.createElement("div");
  div.classList.add("caja");
  div.style.backgroundColor = _color;
  container.appendChild(div);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "pink";
    pintar();
  } else if (event.key === "s") {
    color = "orange";
    pintar();
  } else if (event.key === "d") {
    color = "cyan";
    pintar();
  } else if (event.key === "q") {
    newdiv("purple");
  } else if (event.key === "w") {
    newdiv("gray");
  } else if (event.key === "e") {
    newdiv("brown");
  }
});

pintar(); // por defecto
