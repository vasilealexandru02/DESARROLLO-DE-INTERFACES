fetch('tiendacoches.json')
    .then(response => response.json())
    .then(coches => {
        coches.forEach(coche => {
            let cocheObjeto = new Coche(coche.marca, coche.modelo, coche.kilometros, coche.anyo, coche.precio, coche.motor, coche.foto);
            document.getElementById("tienda").appendChild(cocheObjeto.mostrarCoches());
        });
    });