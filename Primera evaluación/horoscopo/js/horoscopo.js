window.onload = cargarAjax;

function cargarAjax() {

    var miAjax = new XMLHttpRequest();
    var miAjaxHoroscopo = new XMLHttpRequest();
    miAjax.onreadystatechange = cargarTexto;
    miAjax.open("GET", "signos_zodiaco.xml");
    miAjax.send();
    miAjaxHoroscopo.onreadystatechange = cargarTextoHoroscopo;
    miAjaxHoroscopo.open("GET", "horoscopo_chino.xml");
    miAjaxHoroscopo.send();

    function cargarTexto() {
        if (miAjax.readyState == 4) {
            if (miAjax.status == 200) {

                let horoscopo = miAjax.responseXML;
                let seccion = document.querySelector("section");
                let signos = horoscopo.querySelectorAll("signo");

                //
                let titulo = document.querySelector("#tituloDetalle");
                // CALCULAR SIGNO DEL ZODIACO
                document.getElementById("botonCalcular").addEventListener("click", function() {
                    document.getElementsByClassName("descripcion")[0].style.display = "block";
                    console.log(document.getElementsByClassName("descripcion")[0]);
                    let diaNacimiento = document.getElementById("diaNacimiento").value;
                    let mesNacimiento = document.getElementById("mesNacimiento").value;
                    console.log(diaNacimiento);
                    console.log(signos);
                    let numeroZodiaco;
                    if ((mesNacimiento == 1 && diaNacimiento <= 20) || (mesNacimiento == 12 && diaNacimiento >= 22)) {
                        console.log("Capricornio");
                        numeroZodiaco = 9;
                    } else if ((mesNacimiento == 1 && diaNacimiento >= 21) || (mesNacimiento == 2 && diaNacimiento <= 18)) {
                        numeroZodiaco = 10;
                        console.log("Acuario");
                    } else if ((mesNacimiento == 2 && diaNacimiento >= 19) || (mesNacimiento == 3 && diaNacimiento <= 20)) {
                        numeroZodiaco = 11;
                        console.log("Piscis");
                    } else if ((mesNacimiento == 3 && diaNacimiento >= 21) || (mesNacimiento == 4 && diaNacimiento <= 20)) {
                        numeroZodiaco = 0;
                        console.log("Aries");
                    } else if ((mesNacimiento == 4 && diaNacimiento >= 21) || (mesNacimiento == 5 && diaNacimiento <= 20)) {
                        numeroZodiaco = 1;
                        console.log("Tauro");
                    } else if ((mesNacimiento == 5 && diaNacimiento >= 21) || (mesNacimiento == 6 && diaNacimiento <= 20)) {
                        numeroZodiaco = 2;
                        console.log("Geminis");
                    } else if ((mesNacimiento == 6 && diaNacimiento >= 22) || (mesNacimiento == 7 && diaNacimiento <= 22)) {
                        numeroZodiaco = 3;
                        console.log("Cancer");
                    } else if ((mesNacimiento == 7 && diaNacimiento >= 23) || (mesNacimiento == 8 && diaNacimiento <= 23)) {
                        numeroZodiaco = 4;
                        console.log("Leo");
                    } else if ((mesNacimiento == 8 && diaNacimiento >= 24) || (mesNacimiento == 9 && diaNacimiento <= 23)) {
                        numeroZodiaco = 5;
                        console.log("Virgo");
                    } else if ((mesNacimiento == 9 && diaNacimiento >= 24) || (mesNacimiento == 10 && diaNacimiento <= 23)) {
                        numeroZodiaco = 6;
                        console.log("Libra")
                    } else if ((mesNacimiento == 10 && diaNacimiento >= 24) || (mesNacimiento == 11 && diaNacimiento <= 22)) {
                        numeroZodiaco = 7;
                        console.log("Escorpio")
                    } else if ((mesNacimiento == 11 && diaNacimiento >= 23) || (mesNacimiento == 12 && diaNacimiento <= 21)) {
                        numeroZodiaco = 8;
                        console.log("Sagitario");
                    }
                    //
                    // CAMBIA EL CONTENIDO DEL CONTENEDOR DEPENDIENDO DE LA FECHA DE NACIMIENTO INTRODUCIDA
                    let titulo = document.querySelector("#tituloDetalle");
                    titulo.innerHTML = "<strong>Titulo: </strong>" + signos[numeroZodiaco].querySelector("nombre").childNodes[0].nodeValue;
                    // imagen
                    let imagenSigno = document.querySelector("#imagenSigno");
                    imagenSigno.src = "./images_horoscopo/" + signos[numeroZodiaco].querySelector("imagen").childNodes[0].nodeValue;
                    // descripcion
                    let descripcionSigno = document.querySelector("#descripcion");
                    descripcionSigno.innerHTML = "<strong>Descripción: </strong>" + signos[numeroZodiaco].querySelector("descripcion").childNodes[0].nodeValue;
                    // primera fecha
                    let primeraFecha = document.querySelector("#primeraFecha");
                    primeraFecha.innerHTML = "<strong>Primera fecha: </strong>" + signos[numeroZodiaco].querySelector("primerafecha").childNodes[0].nodeValue;
                    // segunda fecha
                    let segundaFecha = document.querySelector("#segundaFecha");
                    segundaFecha.innerHTML = "<strong>Segunda fecha: </strong>" + signos[numeroZodiaco].querySelector("segundafecha").childNodes[0].nodeValue;
                    // prediccion hoy
                    let prediccionHoy = document.querySelector("#prediccionHoy");
                    prediccionHoy.innerHTML = "<strong>Prediccion hoy: </strong>" + signos[numeroZodiaco].querySelector("prediccionhoy").childNodes[0].nodeValue;
                    // prediccion manana
                    let prediccionManana = document.querySelector("#prediccionManana");
                    prediccionManana.innerHTML = "<strong>Prediccion mañana: </strong>" + signos[numeroZodiaco].querySelector("prediccionmanana").childNodes[0].nodeValue;
                });
                document.getElementById("botonLimpiar").addEventListener("click", function() {
                    document.getElementsByClassName("descripcion")[0].style.display = "none";
                });

            } else if (miAjax.status == 404) {
                console.log("Archivo no encontrado");
            }
        } else if (miAjax.readyState == 0 || miAjax.readyState == 1 || miAjax.readyState == 2 || miAjax.readyState == 3) {
            console.log("Cargando");
        }
    }

    function cargarTextoHoroscopo() {
        if (miAjaxHoroscopo.readyState == 4) {
            if (miAjaxHoroscopo.status == 200) {
                let horoscopoChino = miAjaxHoroscopo.responseXML;
                let sectionHoroscopo = document.querySelector("section");
                let signosHoroscopo = horoscopoChino.querySelectorAll("animal");
            }
        }
        document.getElementById("botonHoroscopo").addEventListener("click", function() {

        });
    }
}