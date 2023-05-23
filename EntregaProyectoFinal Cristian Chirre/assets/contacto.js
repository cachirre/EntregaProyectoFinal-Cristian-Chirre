//CONTACTO

let enviar = document.getElementById("enviar");
enviar.addEventListener("click", alerta);

function alerta() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Consulta enviada",
    showConfirmButton: false,
    timer: 1500,
  });
}
