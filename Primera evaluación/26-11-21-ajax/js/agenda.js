window.onload = cargarAjax;

function cargarAjax() {

    var miAjax = new XMLHttpRequest();
    miAjax.onreadystatechange = cargarTexto;
    miAjax.open("GET", "agenda.xml");
    miAjax.send();

    function cargarTexto() {
        if (miAjax.readyState == 4) {
            if (miAjax.status == 200) {

                let agenda = miAjax.responseXML;
                //console.log(agenda);
                document.querySelector("#nombre").innerHTML = agenda.getElementsByTagName("nombre")[0].childNodes[0].nodeValue;

                document.querySelector("#apellido").innerHTML = agenda.getElementsByTagName("apellido")[0].textContent;

                document.querySelector("#direccion").innerHTML = agenda.querySelectorAll("direccion")[0].textContent;

                document.querySelector("#provincia").innerHTML = agenda.querySelector("provincia").textContent;


            } else if (miAjax.status == 404) {
                console.log("Archivo no encontrado");
            }
        } else if (miAjax.readyState == 0 || miAjax.readyState == 1 || miAjax.readyState == 2 || miAjax.readyState == 3) {
            console.log("Cargando");
        }
    }

}