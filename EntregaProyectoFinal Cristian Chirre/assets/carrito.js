// Obtener elementos del DOM
const tbody = document.getElementById('tbody');
const total = document.getElementById('total');
const botonesAgregar = document.querySelectorAll('.agregar');

// Inicializar carrito vacío
let carrito = [];

// Función para renderizar carrito
function renderizarCarrito() {
  tbody.innerHTML = '';
  }

  // Calcular total
  let totalCarrito = 0;
  carrito.forEach((articulo) => {
    totalCarrito += articulo.cantidad * articulo.precio;
  });
  
  // Actualizar total en el DOM
  total.textContent = `$${totalCarrito.toFixed(2)}`;
  
  // Renderizar cada artículo en el carrito
  carrito.forEach((articulo) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${articulo.nombre}</td>
      <td>${articulo.cantidad}</td>
      <td>$${articulo.precio.toFixed(2)}</td>
      <td>$${(articulo.cantidad * articulo.precio).toFixed(2)}</td>
      <td>
        <button class="sumar" data-nombre="${articulo.nombre}">+</button>
        <button class="restar" data-nombre="${articulo.nombre}">-</button>
        <button class="eliminar" data-nombre="${articulo.nombre}">Eliminar</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
  
  // Agregar event listeners a botones de cada artículo en el carrito
  const botonesSumar = document.querySelectorAll('.sumar');
  const botonesRestar = document.querySelectorAll('.restar');
  const botonesEliminar = document.querySelectorAll('.eliminar');