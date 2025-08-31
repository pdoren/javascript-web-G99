let imagen_p1 = document.querySelector("#imagen_p1");
const class_img = "border-p1";

function change_border() {
  imagen_p1.classList.toggle(class_img);
}

imagen_p1.onclick = function () {
  change_border();
};
