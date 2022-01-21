let shop = document.getElementById("shop");
let products = [];
let category = document.getElementById("categorySelect");
let price = document.getElementById("priceSelect");
fetch('./productos.json')
    .then(response => response.json())
    .then(instruments => instruments.forEach(guitar => {
        products.push(guitar);
        let g = new Guitar(guitar.nombre, guitar.precio, guitar.foto, guitar.categoria, guitar.destacado);
        if (guitar.destacado === "si") {
            g.displayProduct("featured", "featured");
        };
        g.displayProduct("shop", "noFeatured");
    }));
/**
 * Makes a fetch depending on the category chosen by the user
 * The function is called in the change event
 * @param {*} categorySelect 
 */
function getProductsByCategory(categorySelect) {
    let text = categorySelect.options[categorySelect.selectedIndex].value;
    const myNode = document.getElementById("shop");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    };
    fetch('./productos.json')
        .then(response => response.json())
        .then(instruments => instruments.forEach(guitar => {
            if (text === "all") {
                let g = new Guitar(guitar.nombre, guitar.precio, guitar.foto, guitar.categoria, guitar.destacado);
                g.displayProduct("shop", "noFeatured");
            } else if (guitar.categoria === text) {
                let g = new Guitar(guitar.nombre, guitar.precio, guitar.foto, guitar.categoria, guitar.destacado);
                g.displayProduct("shop", "noFeatured");
            };
        }));
};
/**
 * Makes a fetch depending on the price range chosen by the user
 * The function is called in the change event
 * @param {*} priceSelect 
 */
function getProductsByPrice(priceSelect) {
    let text = priceSelect.options[priceSelect.selectedIndex].value;
    const myNode = document.getElementById("shop");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild);
    };
    fetch('./productos.json')
        .then(response => response.json())
        .then(instruments => instruments.forEach(guitar => {
            if (text === "all") {
                let g = new Guitar(guitar.nombre, guitar.precio, guitar.foto, guitar.categoria, guitar.destacado);
                g.displayProduct("shop", "noFeatured");
                //Price is lower than 99 euros
            } else if (text < 100 && guitar.precio < 100) {
                let g = new Guitar(guitar.nombre, guitar.precio, guitar.foto, guitar.categoria, guitar.destacado);
                g.displayProduct("shop", "noFeatured");
                //Price is between 100 euros and 200 euros
            } else if ((text == 100) && (guitar.precio >= 100 && guitar.precio < 200)) {
                let g = new Guitar(guitar.nombre, guitar.precio, guitar.foto, guitar.categoria, guitar.destacado);
                g.displayProduct("shop", "noFeatured");
                //Price is between 200 euros and 300 euros
            } else if ((text == 200) && (guitar.precio >= 200 && guitar.precio < 300)) {
                let g = new Guitar(guitar.nombre, guitar.precio, guitar.foto, guitar.categoria, guitar.destacado);
                g.displayProduct("shop", "noFeatured");
                // Price is higher than 300 euros
            } else if (text == 300 && guitar.precio >= 300) {
                let g = new Guitar(guitar.nombre, guitar.precio, guitar.foto, guitar.categoria, guitar.destacado);
                g.displayProduct("shop", "noFeatured");
            };
        }));
}
// Event listener category select
category.addEventListener("change", function() {
    getProductsByCategory(category);
});
// Event listener price select
price.addEventListener("change", function() {
    getProductsByPrice(price);
});