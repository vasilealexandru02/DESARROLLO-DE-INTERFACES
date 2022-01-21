let fotos = ["images/foto1.jpg", "images/foto2.jpg", "images/foto3.jpg", "images/foto4.jpg", "images/foto5.jpg", "images/foto6.jpg"];
let div1 = document.createElement("div");
let fotoGrande = document.createElement("img");
// tanto src como id no son funciones, son propiedades que se modifican en el js
fotoGrande.src = fotos[0];
fotoGrande.id = "fotoGrande";
slider.appendChild(div1);
let div2 = document.createElement("div");
div2.className = "image";


for (let index = 0; index < fotos.length; index++) {
    let col = document.createElement("div");
    let imagen = document.createElement("img");
    imagen.setAttribute("src", fotos[index]);
    col.appendChild(imagen);
    col.className = "col-2";
    div2.appendChild(col);

}
// generar slider



function iniciar() {
    //console.log(fotos);
    // seleccionar con query selector
    let imagenes = document.querySelectorAll("div.image img");
    // seleccionar la array de imagenes con get element by utilizando el nombre de la clase
    // let imagenes2 = document.getElementsByName("image");
    for (let index = 0; index < imagenes.length; index++) {
        console.log(index);
        imagenes[index].setAttribute("src", fotos[index]);
    }
}

function cambiarFoto(event) {
    let miniatura = event.target.getAttribute("src");
    document.querySelector("#imagenGrande").setAttribute("src", miniatura);

    let imagenes = document.querySelectorAll("div.image img");
    for (let index = 0; index < imagenes.length; index++) {
        imagenes[index].setAttribute("class", "");
    }
    event.target.setAttribute("class", "activa");
}

function cambiarOpacidad(event) {
    let mini = event.target.getAttribute("class")
    if (mini == "activa") {
        event.target.setAttribute("class", "activa opacidad")
    } else {
        event.target.setAttribute("class", "opacidad")

    }
}

function opacidadCien(event) {
    let mini = event.target.getAttribute("class")
    if (mini == "activa") {
        event.target.setAttribute("class", "activa")
    } else if (mini == "activa opacidad") {
        event.target.setAttribute("class", "activa")

    } else {
        event.target.setAttribute("class", "");
    }
}