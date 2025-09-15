const div_propiedades_alquiler = document.querySelector('#propiedades-alquiler');

for (let propiedad of propiedades_alquiler) {
    div_propiedades_alquiler.innerHTML += renderPropiedadCard(propiedad);
}