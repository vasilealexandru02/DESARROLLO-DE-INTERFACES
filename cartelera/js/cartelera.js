window.onload = cargarAjax;

function cargarAjax() {

    var miAjax = new XMLHttpRequest();
    miAjax.onreadystatechange = cargarTexto;
    miAjax.open("GET", "cartelera.xml");
    miAjax.send();

    function cargarTexto() {
        if (miAjax.readyState == 4) {
            if (miAjax.status == 200) {

                let peliculas = miAjax.responseXML;
                let seccion = document.querySelector("section");
                let pelis = peliculas.querySelectorAll("pelicula");
                for (let index = 0; index < pelis.length; index++) {
                    let div_peli = document.createElement("div");
                    let cartel = document.createElement("img");
                    cartel.src = "./images/" + pelis[index].querySelector("cartel").childNodes[0].nodeValue;
                    let titulo = document.createElement("h3");
                    titulo.innerText = pelis[index].querySelector("titulo").childNodes[0].nodeValue;

                    div_peli.appendChild(cartel);
                    div_peli.appendChild(titulo);
                    seccion.appendChild(div_peli);
                    div_peli.addEventListener("click", function() {
                        console.log(pelis[index].querySelector("titulo").childNodes[0].nodeValue);
                        let titulo = document.querySelector("#tituloDetalle");
                        titulo.innerHTML = "<strong>Titulo: </strong>" + pelis[index].querySelector("titulo").childNodes[0].nodeValue;
                        let video = document.querySelector("#video");
                        video.src = "https://www.youtube.com/embed/" + pelis[index].querySelector("video").childNodes[0].nodeValue;
                        let duracion = document.querySelector("#duracion");
                        duracion.innerHTML = "<strong>Duración: </strong>" + pelis[index].querySelector("duracion").childNodes[0].nodeValue;
                        let direccion = document.querySelector("#direccion");
                        direccion.innerHTML = "<strong>Dirección: </strong>" + pelis[index].querySelector("direccion").childNodes[0].nodeValue;
                        let nacionalidad = document.querySelector("#nacionalidad");
                        nacionalidad.innerHTML = "<strong>Nacionalidad: </strong>" + pelis[index].querySelector("nacionalidad").childNodes[0].nodeValue;
                        let artistas = document.querySelector("#artistas");
                        artistas.innerHTML = "<strong>Artistas: </strong>" + pelis[index].querySelector("artistas").childNodes[0].nodeValue;
                        let genero = document.querySelector("#genero");
                        genero.innerHTML = "<strong>Género: </strong>" + pelis[index].querySelector("genero").childNodes[0].nodeValue;
                        let sinopsis = document.querySelector("#sinopsis");
                        sinopsis.innerHTML = "<strong>Sinopsis: </strong>" + pelis[index].querySelector("sinopsis").childNodes[0].nodeValue;
                    });
                }
                let titulo = document.querySelector("#tituloDetalle");
                titulo.innerHTML = "<strong>Título: </strong>" + pelis[0].querySelector("titulo").childNodes[0].nodeValue;
                let video = document.querySelector("#video");
                video.src = "https://www.youtube.com/embed/" + pelis[0].querySelector("video").childNodes[0].nodeValue;
                let duracion = document.querySelector("#duracion");
                duracion.innerHTML = "<strong>Duración: </strong>" + pelis[0].querySelector("duracion").childNodes[0].nodeValue;
                let direccion = document.querySelector("#direccion");
                direccion.innerHTML = "<strong>Dirección: </strong>" + pelis[0].querySelector("direccion").childNodes[0].nodeValue;
                let nacionalidad = document.querySelector("#nacionalidad");
                nacionalidad.innerHTML = "<strong>Nacionalidad: </strong>" + pelis[0].querySelector("nacionalidad").childNodes[0].nodeValue;
                let artistas = document.querySelector("#artistas");
                artistas.innerHTML = "<strong>Artistas: </strong>" + pelis[0].querySelector("artistas").childNodes[0].nodeValue;
                let genero = document.querySelector("#genero");
                genero.innerHTML = "<strong>Género: </strong>" + pelis[0].querySelector("genero").childNodes[0].nodeValue;
                let sinopsis = document.querySelector("#sinopsis");
                sinopsis.innerHTML = "<strong>Sinopsis: </strong>" + pelis[0].querySelector("sinopsis").childNodes[0].nodeValue;

            } else if (miAjax.status == 404) {
                console.log("Archivo no encontrado");
            }
        } else if (miAjax.readyState == 0 || miAjax.readyState == 1 || miAjax.readyState == 2 || miAjax.readyState == 3) {
            console.log("Cargando");
        }
    }


}