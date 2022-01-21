class Guitar {
    constructor(name, price, photo, category) {
        this.name = name;
        this.price = price;
        this.photo = photo;
        this.category = category;
    }
    displayProduct(sectionId, classFeatured) {
        let section = document.getElementById(sectionId);
        let guitarDiv = document.createElement("div");
        // Classes assignment
        if (this.category === "guitarra") {
            guitarDiv.className = "guitarra";
        } else if (this.category === "bajo") {
            guitarDiv.className = "bajo";
        } else {
            guitarDiv.className = "ukelele";
        }
        guitarDiv.className += " " + classFeatured;
        let guitarName = document.createElement("h1");
        guitarName.innerText = this.name;
        let guitarPhoto = document.createElement("img");
        let photoSrc = "./images/" + this.photo;
        guitarPhoto.src = photoSrc;
        let guitarPrice = document.createElement("p");
        guitarPrice.innerText = this.price + " €";
        guitarDiv.append(guitarPhoto, guitarName, guitarPrice);
        section.appendChild(guitarDiv);
    };
};