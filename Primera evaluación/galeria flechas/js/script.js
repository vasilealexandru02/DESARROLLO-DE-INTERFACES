window.onload = cambiarFoto;
let imagenes = ["images/foto1.jpg", "images/foto2.jpg", "images/foto3.jpg", "images/foto4.jpg", "images/foto5.jpg", "images/foto6.jpg"];
var contador = 0;


function cambiarFoto() {
    let idFlecha = event.target.getAttribute("id");

    if (contador == 5) {
        contador = -1;

    } else if (contador < 0) {
        contador = 0;

    }
    if (idFlecha == "derecha") {
        contador++;
    } else {
        if (contador > 0) {
            contador--;
        }
    }
    cambiarOpacidadCirculo(contador);
    let foto = imagenes[contador];
    document.querySelector("#imagenGrande").setAttribute("src", foto);

    console.log(contador);
}

function cambiarFotoCirculo(event) {
    let circulo = event.target.getAttribute("id");
    cambiarOpacidadCirculo(circulo);
    contador = circulo;
    let foto = imagenes[circulo];
    document.querySelector("#imagenGrande").setAttribute("src", foto);
}

function cambiarOpacidadCirculo(idCirculo) {
    for (let index = 0; index < imagenes.length; index++) {
        document.getElementById(index).style.opacity = "1";
    }
    document.getElementById(idCirculo).style.opacity = "0.3";
}