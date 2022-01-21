window.onload = calcular;




function calcular() {
    let sueldoBruto = document.getElementById("sueldoBruto").value;
    let hijos = document.getElementById("hijos").options[document.getElementById("hijos").selectedIndex].value;
    let edad = document.getElementById("edad").value;
    let pagas = document.getElementById("pagas").options[document.getElementById("pagas").selectedIndex].value;
    let sueldoFinal;
    let resultadoFinal = document.querySelector("#total");


    if (hijos == "conhijos") {
        sueldoBruto *= (0.90);
    } else {
        sueldoBruto *= (0.85);
    }

    if (edad < 30 && edad != "") {
        sueldoBruto *= (0.95);
    } else {
        sueldoBruto *= (0.90);
    }

    if (pagas == "docepagas") {
        sueldoFinal = sueldoBruto / 12;
    } else {
        sueldoFinal = sueldoBruto / 14;
    }
    if (edad == "") {
        resultadoFinal.innerHTML = "Debes introducir la edad!";
    } else if (sueldoBruto == "") {
        resultadoFinal.innerHTML = "Debes introducir el sueldo!";
    } else {
        resultadoFinal.innerHTML = sueldoFinal + " €.";
    }



}