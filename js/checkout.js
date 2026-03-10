const resumen = document.getElementById("resumen");
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

let total = 0;

carrito.forEach(producto => {
    const p = document.createElement("p");
    p.textContent = producto.nombre + " - " + producto.precio;
    resumen.appendChild(p);

    total += parseFloat(producto.precio.replace('$','').replace('.',''));
});

const totalElemento = document.createElement("h3");
totalElemento.textContent = "Total: $" + total;
resumen.appendChild(totalElemento);