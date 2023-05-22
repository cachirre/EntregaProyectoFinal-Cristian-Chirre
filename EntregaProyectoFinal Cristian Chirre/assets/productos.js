//Productos

class Productos {
  constructor(nombre, tipo, instalacion, precio) {
    this.nombre = this.nombre;
    this.tipo = tipo;
    this.instalacion = instalacion;
    this.precio = precio;
  }
}

var productos_json = readJSON(".assets/productos.json");
var bbdd_list = JSON.parse(productos_json) || [];
var producto = bbdd_list["producto"];
var productos_l = producto.length;

var print_total = "";

for (var i = 0; i < productos_l; i++) {
  var p_nombre = producto[i]["Nombre"];
  var p_tipo = producto[i]["Tipo"];
  var p_instalacion = producto[i]["Instalación"];
  var p_precio = producto[i]["Precio"];
  var image_numer = i + 1;
  var p_image = "./assets/images/accesorio" + image_numer + ".jpg";

  var row_init = '<div class="row">';
  var row_final = "</div>";

  var print =
    '<div class="col-md-3">' +
    '<div class="card mb-3">' +
    '<img src="' +
    p_image +
    '" class="card-img-top" alt="Accesorios">' +
    '<div class="card-body">' +
    '<h5 class="card-title">' +
    p_nombre +
    " " +
    p_tipo +
    "</h5>" +
    '<p class="card-text">Instalacion: ' +
    p_instalacion +
    "</p>" +
    '<div class="d-flex justify-content-between align-items-center">' +
    '<div class="btn-group">' +
    '<button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>' +
    '<button type="button" class="btn btn-sm btn-outline-secondary">Comprar</button>' +
    "</div>" +
    '<small class="text-muted">' +
    "$" +
    p_precio +
    "</small>" +
    "</div>" +
    "</div>" +
    "</div>" +
    "</div>";

  if (i == 0) {
    print = row_init + print;
  }

  print_total = print_total + print;
}

var container_s = document.getElementById("container");
container_s.innerHTML = print_total;
