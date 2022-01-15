window.onload = cargarAjax;

function cargarAjax() {
    let total = 0;
    var peticion = new XMLHttpRequest();
    peticion.onreadystatechange = cargarJson;
    peticion.open("GET", "tienda.json", true);
    peticion.send();

    function cargarJson() {

        if (peticion.readyState == 4) {
            if (peticion.status == 200) {
                let total = 0;
                var textoJson = peticion.responseText;
                var fruits = JSON.parse(textoJson);
                let cartDiv = document.getElementById("cart");
                let cart = document.createElement("h2");
                cart.innerText = "Cesta de la compra"
                let cartProducts = document.createElement("h3");
                let purchaseTotal = document.createElement("h4");
                purchaseTotal.innerText = "Total compra: " + total + " €";
                cartProducts.innerText = "Productos:"

                cartDiv.append(cart, cartProducts, purchaseTotal);
                fruits.forEach(fruit => {
                    let fruitDiv = document.createElement("div");
                    fruitDiv.className = "fruit";
                    let fruitName = document.createElement("h3");
                    fruitName.innerText = fruit.nombre;
                    let fruitImage = document.createElement("img");
                    fruitImage.src = fruit.foto;
                    let originAndPrice = document.createElement("p");
                    originAndPrice.innerText = "Origen: " + fruit.procedencia + "\n" + "Precio: " + fruit.precio + "€";
                    let fruitAmount = document.createElement("input");
                    fruitAmount.setAttribute("type", "number");

                    fruitAmount.defaultValue = 1;
                    fruitAmount.min = 1;
                    fruitAmount.max = 20;
                    let buyButton = document.createElement("button");
                    buyButton.innerText = "Añadir a la cesta";
                    buyButton.className = "buyButton";

                    fruitDiv.append(fruitImage, fruitName, originAndPrice, fruitAmount, buyButton);

                    document.querySelector("#products").appendChild(fruitDiv);

                    // Button event listener
                    buyButton.addEventListener("click", function() {
                        let divBuy = document.createElement("div");
                        divBuy.className = "flex";
                        let fruitParagraph = document.createElement("p");
                        let deleteButton = document.createElement("button");
                        let totalIndividual = (fruit.precio * checkAmount(fruitAmount.value)).toFixed(2);

                        deleteButton.innerText = "x";
                        deleteButton.className = "deleteButton";
                        fruitParagraph.innerText = fruit.nombre + " ";
                        fruitParagraph.innerText += fruit.precio + " € x " + checkAmount(fruitAmount.value);
                        divBuy.append(fruitParagraph, deleteButton);

                        document.getElementById("cart").append(divBuy);

                        deleteButton.addEventListener("click", function() {
                            divBuy.remove();
                            total -= totalIndividual;
                            total = Math.round(total * 100) / 100;
                            if (total < 0 || total == 0) {
                                purchaseTotal.innerText = "Total compra: " + " 0 €";
                            } else {
                                purchaseTotal.innerText = "Total compra: " + total + " €";
                            };
                        });
                        total += checkAmount(fruitAmount.value) * fruit.precio;
                        total = Math.round((total + Number.EPSILON) * 100) / 100;
                        purchaseTotal.innerText = "Total compra: " + total + " €";

                    });

                });

            } else if (peticion.status == 404) {
                console.log("Archivo no encontrado");
            }
        } else if (peticion.readyState == 0 || peticion.readyState == 1 || peticion.readyState == 2 || peticion.readyState == 3) {
            console.log("Cargando");
        }
    }
    // Function which checks the amount the user want's to buy, if the user introduces a number that is bigger than 20, the variable is equal to
    function checkAmount(amount) {
        let returnAmount = ((amount > 20) ? 20 : amount);
        return returnAmount;
    };

}