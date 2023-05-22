//Vehiculos

  class Vehiculo {
  constructor(modelo, km, año, precio) {
    this.modelo = modelo;
    this.km = km;
    this.año = año;
    this.precio = precio;
  }
}

function readJSON(file) {
  var request = new XMLHttpRequest();
  request.open('GET', file, false);
  request.send(null);
  if (request.status == 200){
    return request.responseText;
  }
};

var cars_json = readJSON('assets/cars.json');
var bbdd_list = JSON.parse(cars_json) || [];
var cars      = bbdd_list["car"];
var cars_l    = cars.length;

var print_total = "";

for(var i = 0 ; i < cars_l ; i++){

  var p_marca  = cars[i]["Marca"];
  var p_modelo = cars[i]["Modelo"];
  var p_km     = cars[i]["Km"];
  var p_ano    = cars[i]["Año"];
  var p_precio = cars[i]["Precio"];
  var image_numer = i + 1;
  var p_image  = "./assets/images/car" +  image_numer + ".jpg";

  var row_init  = '<div class="row">';
  var row_final = '</div>';

  var print = 
 
    '<div class="col-md-3">' +
      '<div class="card mb-3">' +
        '<img src="' + p_image + '" class="card-img-top" alt="Automovil">' +
        '<div class="card-body">' +
          '<h5 class="card-title">' + p_marca + ' ' + p_modelo + '</h5>' +
            '<p class="card-text">Km: ' + p_km + '</p>' +
            '<p class="card-text">Año:' + p_ano + '</p>' +
            '<div class="d-flex justify-content-between align-items-center">' +
              '<div class="btn-group">' +
                '<button type="button" class="btn btn-sm btn-outline-secondary">Ver</button>' +
                '<button type="button" class="btn btn-sm btn-outline-secondary">Comprar</button>' +
            '</div>' +
            '<small class="text-muted">' + "$" + p_precio + '</small>' +
        '</div>' +
      '</div>' +
    '</div>' + 
    '</div>';
  

  if(i == 0){print = row_init + print;}
  
  print_total = print_total + print;
  
}

var container_s = document.getElementById("container");
container_s.innerHTML = print_total;


//Buscador
const form = document.querySelector("#search-form");
const input = document.querySelector("#search-input");
const results = document.querySelector("#search-results");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const query = input.value.toLowerCase();
  const matchingVehicles = vehicles.filter((vehicle) => {
    const makeModel = `${vehicle.make} ${vehicle.model}`.toLowerCase();
    return makeModel.includes(query);
  });
  displayResults(matchingVehicles);
});

function displayResults(vehicles) {
  results.innerHTML = "";
  if (vehicles.length === 0) {
    results.textContent = "No se encontraron vehículos";
  } else {
    const list = document.createElement("ul");
    vehicles.forEach((vehicle) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${vehicle.make} ${vehicle.model} (${vehicle.year})`;
      list.appendChild(listItem);
    });
    results.appendChild(list);
  }
}


