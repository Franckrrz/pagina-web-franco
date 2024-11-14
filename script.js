const productos = [
    { nombre: "Filtro de Aire", precio: 2000, imagen: "filtro_aire.png" },
    { nombre: "Bujías", precio: 1500, imagen: "bujias.png" },
    { nombre: "Aceite", precio: 3500, imagen: "aceite.png" },
    { nombre: "Batería", precio: 12000, imagen: "bateria.png" },
    { nombre: "Pastillas de Freno", precio: 4500, imagen: "pastillas_freno.png" },
    { nombre: "Amortiguadores", precio: 8000, imagen: "amortiguadores.png" },
    { nombre: "Correa de Distribución", precio: 5000, imagen: "correa_distribucion.png" },
    { nombre: "Radiador", precio: 10000, imagen: "radiador.png" },
    { nombre: "Cables de Bujías", precio: 2500, imagen: "cables_bujias.png" },
    { nombre: "Filtro de Aceite", precio: 1800, imagen: "filtro_aceite.png" },
    { nombre: "Alternador", precio: 9000, imagen: "alternador.png" },
    { nombre: "Motor de Arranque", precio: 9500, imagen: "motor_arranque.png" }
  ];
  
  function cargarProductos(lista) {
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = '';
    lista.forEach((producto, index) => {
      contenedor.innerHTML += `
        <div class="producto">
          <img src="images/${producto.imagen}" alt="${producto.nombre}" class="producto-imagen">
          <h3>${producto.nombre}</h3>
          <p>Precio: $${producto.precio} ARS / $${(producto.precio / 500).toFixed(2)} USD</p>
          <button class="agregar" onclick="añadirAlCarrito(${index})">Añadir al carrito</button>
        </div>`;
    });
  }
  
  function ordenarProductos(criterio) {
    const productosOrdenados = [...productos];
    if (criterio === 'caro') {
      productosOrdenados.sort((a, b) => b.precio - a.precio);
    } else {
      productosOrdenados.sort((a, b) => a.precio - b.precio);
    }
    cargarProductos(productosOrdenados);
  }
  
  function buscarProducto() {
    const busqueda = document.getElementById('buscador').value.toLowerCase();
    const resultados = productos.filter(producto => producto.nombre.toLowerCase().includes(busqueda));
    cargarProductos(resultados);
  }
  
  function añadirAlCarrito(index) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    carrito.push(productos[index]);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    alert(`Producto "${productos[index].nombre}" añadido al carrito.`);
  }
  
  window.onload = () => cargarProductos(productos);
  