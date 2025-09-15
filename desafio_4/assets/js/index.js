const div_propiedades_venta = document.querySelector('#propiedades-venta');
const div_propiedades_alquiler = document.querySelector('#propiedades-alquiler');

for (let i=0; i < 3; i++) {
    div_propiedades_venta.innerHTML += renderPropiedadCard(propiedades_venta[i]);
}

for (let i=0; i < 3; i++) {
    div_propiedades_alquiler.innerHTML += renderPropiedadCard(propiedades_alquiler[i]);
}