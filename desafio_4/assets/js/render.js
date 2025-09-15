const renderPropiedadCard = (prop) => {
  const precio = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0
  }).format(prop.costo ?? 0);

  const smokeHTML = prop.smoke
    ? `<p class="text-success"><i class="fas fa-smoking"></i> Se permite fumar</p>`
    : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`;

  const petsHTML = prop.pets
    ? `<p class="text-success"><i class="fas fa-paw"></i> Se permiten mascotas</p>`
    : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`;

  return `
  <div class="col-md-4 mb-4">
    <div class="card h-100">
      <img
        src="${prop.src}"
        class="card-img-top"
        alt="Imagen de ${prop.nombre}"
      />
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${prop.nombre}</h5>
        <p class="card-text">${prop.descripcion}</p>
        <p><i class="fas fa-map-marker-alt"></i> ${prop.ubicacion}</p>
        <p><i class="fas fa-bed"></i> ${prop.habitaciones} Habitaciones</p>
        <p><i class="fas fa-dollar-sign"></i> ${precio}</p>
        ${smokeHTML}
        ${petsHTML}
      </div>
    </div>
  </div>`;
};