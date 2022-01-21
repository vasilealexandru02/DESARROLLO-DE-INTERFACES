window.onload = iniciar;
let linksNav = ["Inicio", "Servicios", "Empresa", "Contacto"];
let rutaIconos = ["images/instagram.png", "images/facebook.png"];
let enlacesIconos = ["https://www.instagram.com/?hl=es", "https://es-es.facebook.com/"];
let rutaImagenes = ["images/stock1.jpg", "images/stock2.jpg", "images/stock3.jpg", "images/stock4.jpg"];


function iniciar() {
    console.log("dentro");
    // CREACION DEL HEADER
    let cabecera = document.createElement("header");
    document.body.appendChild(cabecera);
    let logo = document.createElement("img");
    logo.src = "./images/logo.png";
    cabecera.appendChild(logo);
    let divSocial = document.createElement("div");
    // INSERCION DE ICONOS CON ENLACE
    for (let i = 0; i < rutaIconos.length; i++) {
        let imageLink = document.createElement("a");
        let image = document.createElement("img");
        image.src = rutaIconos[i];
        imageLink.appendChild(image);
        divSocial.appendChild(imageLink);
        image.className = "iconos";
        imageLink.target = "_blank";
        imageLink.id = i;
        imageLink.href = enlacesIconos[i];
    }

    cabecera.appendChild(divSocial);

    //para saltar lo anterior se puede usar
    //titulo.innnerText="Este es el título de la página"



    // cabecera.setAttribute("class","flex");
    cabecera.className = "flex";

    let navBar = document.createElement("nav");
    navBar.className = "navegacion";
    document.body.appendChild(navBar);
    let lista = document.createElement("ul");
    navBar.appendChild(lista);
    // generar lista
    for (let index = 0; index < linksNav.length; index++) {
        console.log(index);
        let li = document.createElement("li");
        let enlace = document.createElement("a");
        enlace.innerText = linksNav[index];
        enlace.href = "#";
        li.appendChild(enlace);
        lista.appendChild(li);

    }
    // CREAR IMAGEN SLIDER
    let divImage = document.createElement("div");
    document.body.appendChild(divImage);
    divImage.className = "divImage";
    let image = document.createElement("img");
    image.src = "images/foto1.jpg";
    image.className = "imagenGrande";
    divImage.appendChild(image);
    // 4 DIVS
    let section4 = document.createElement("section");
    document.body.appendChild(section4);
    section4.className = "sectionContent";
    for (let i = 0; i < rutaImagenes.length; i++) {
        // CREACION DEL DIV Y LA IMAGEN CON LA RUTA 
        let insideDivContent = document.createElement("div");
        insideDivContent.className = "subSection";
        let divImage = document.createElement("img");
        divImage.src = rutaImagenes[i];
        // CREACION PARRAFO
        let paragraph = document.createElement("p");
        let content = document.createTextNode("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.");
        paragraph.appendChild(content);
        // CREACION DEL BOTON 
        let button = document.createElement("button");
        button.className = "button";
        button.innerText = "Comprar";
        // SE INSERTA EL CONTENIDO DENTRO DEL DIV, EL PÁRRAFO, LA IMAGEN Y ESTE MISMO DIV DENTRO DEL SECTION

        insideDivContent.appendChild(divImage);
        insideDivContent.appendChild(paragraph);
        insideDivContent.appendChild(button);
        section4.appendChild(insideDivContent);
        console.log(rutaImagenes[i]);
    }
}