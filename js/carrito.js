document.querySelectorAll('.agregar-carrito').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();

        const product = this.closest('.product');
        const productId = this.dataset.id;
        const selectedTalle = product.querySelector('.talle-select').value;
        const productName = product.querySelector('h3').textContent;
        const productPrice = product.querySelector('.precio').textContent;
        const productImage = product.querySelector('img').src;

        // Agregar a la tabla
        const tbody = document.querySelector('#lista-carrito tbody');
        const row = document.createElement('tr');
        row.innerHTML = `
            <td><img src="${productImage}" width="50"></td>
            <td>${productName} (Talle: ${selectedTalle})</td>
            <td>${productPrice}</td>
            <td><a href="#" class="borrar-producto" data-id="${productId}">X</a></td>
        `;
        tbody.appendChild(row);
    });
});

// Vaciar carrito
document.querySelector('#vaciar-carrito').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('#lista-carrito tbody').innerHTML = '';
});

// Borrar un producto individual
document.querySelector('#lista-carrito').addEventListener('click', function(e) {
    if (e.target.classList.contains('borrar-producto')) {
        e.preventDefault();
        e.target.closest('tr').remove();
    }
});
document.querySelector('#finalizar-compra').addEventListener('click', function(e) {
    e.preventDefault();

    const productos = [];

    document.querySelectorAll('#lista-carrito tbody tr').forEach(row => {
        productos.push({
            nombre: row.children[1].textContent,
            precio: row.children[2].textContent
        });
    });

    localStorage.setItem("carrito", JSON.stringify(productos));
    window.location.href = "checkout.html";
});