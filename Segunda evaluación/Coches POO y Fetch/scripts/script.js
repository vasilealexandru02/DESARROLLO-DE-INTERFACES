fetch('tiendacoches.json')
    .then(response => response.json())
    .then(coches => {
            coches.forEach(coche => {
                let div = document.createElement("div");
                let marca = document.createElement("h3");
                marca.innerText = coche.marca;
                let modelo = document.createElement("h3");
                modelo.innerText = coche.modelo;
                let kilometros = document.createElement("p");
                kilometros.innerText = coche.kilometros;
                let agno = document.createElement("p");
                agno.innerText = coche.anyo;
                let precio = document.createElement("p");
                precio.innerText = coche.precio + " €";
                let motor = document.createElement("p");
                motor.innerText = coche.motor;
                let imagen = document.createElement("img");
                imagen.src = "./images/" + coche.foto;
                div.append(marca, modelo, imagen, kilometros, agno, precio, motor);
                document.getElementById("tienda").appendChild(div);



            });
        }



    );