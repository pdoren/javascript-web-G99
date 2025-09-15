const div_propiedades_venta = document.querySelector('#propiedades-venta');

for (let propiedad of propiedades_venta) {
    div_propiedades_venta.innerHTML += renderPropiedadCard(propiedad);
}
