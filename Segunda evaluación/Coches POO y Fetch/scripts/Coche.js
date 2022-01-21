function Coche(marca, modelo, kilometros, agno, precio, motor, foto) {
    this.marca = marca;
    this.modelo = modelo;
    this.kilometros = kilometros;
    this.agno = agno;
    this.precio = precio;
    this.motor = motor;
    this.foto = foto;
    this.mostrarCoches = function() {
        let div = document.createElement("div");
        let marca = document.createElement("h3");
        marca.innerText = this.marca;
        let modelo = document.createElement("h3");
        modelo.innerText = this.modelo;
        let kilometros = document.createElement("p");
        kilometros.innerText = this.kilometros;
        let agno = document.createElement("p");
        agno.innerText = this.agno;
        let precio = document.createElement("p");
        precio.innerText = this.precio + " €";
        let motor = document.createElement("p");
        motor.innerText = this.motor;
        let imagen = document.createElement("img");
        imagen.src = "./images/" + this.foto;
        div.append(marca, modelo, imagen, kilometros, agno, precio, motor);
        return div;
    };
}