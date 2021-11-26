window.onload = iniciar;

function iniciar() {
    console.log("Funcion");
}

// declaracion tipos de variables o datos

//let nombre = "Pepe";
//const apellido = " Jiménez";

console.log(nombre + " " + apellido);

const dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

console.log(dias.length);

function visualizar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let respuesta = document.querySelector("#respuesta");

    if (nombre == "") {
        respuesta.innerText = "Debes rellenar el nombre!";
    } else if (apellido == "") {
        respuesta.innerText = "Debes rellenar el apellido!";
    } else {
        respuesta.innerText = nombre + " " + apellido;
    }

}