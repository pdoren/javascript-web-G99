precio = 400000

precioSpan = document.querySelector(".precio-inicial");
cantidadSpan = document.querySelector(".cantidad");
valor_totalSpan = document.querySelector(".valor-total");

precioSpan.innerHTML = precio;

function update_valor_total(cantidad) {
    valor_totalSpan.innerHTML = precio * cantidad;
}

button_plus = document.querySelector(".plus");
button_minus = document.querySelector(".minus");

button_plus.onclick = function() {
    var cantidad = parseInt(cantidadSpan.innerHTML);
    cantidad += 1;
    cantidadSpan.innerHTML = cantidad;
    update_valor_total(cantidad);
};

button_minus.onclick = function() {
    var cantidad = parseInt(cantidadSpan.innerHTML);
    cantidad -= 1;
    if (cantidad < 0) cantidad = 0;
    cantidadSpan.innerHTML = cantidad;
    update_valor_total(cantidad);
};

var cantidad = parseInt(cantidadSpan.innerHTML);
update_valor_total(cantidad);
