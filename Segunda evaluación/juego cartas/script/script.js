let score = 0;
let throws = 0;

const playButtonText = "Jugar de nuevo!";
const welcomeMessage = "Bienvenido al juego de las parejas!";
const secondSectionText = "Nuevo juego!!";
let cards = [1, 2, 3, 4, 5];
const numberOfPairs = 3;
const numberOfCards = 6;
const totalNumberOfCards = 41;
let firstSection = document.createElement("section");
firstSection.className = "flex";
firstSection.id = "firstSection";
let secondSection = document.createElement("section");
secondSection.className = "flex";
secondSection.id = "secondSection";
// First section elements creation
document.body.append(firstSection, secondSection);
let fsDivOne = document.createElement("div");
fsDivOne.id = "fsDivOne";
let gameTitle = document.createElement("h2");
gameTitle.id = "gameTitle";
gameTitle.innerText = "Emparejados";
let welcomeMessageText = document.createElement("h2");
welcomeMessageText.id = "welcomeMessage";
welcomeMessageText.innerText = welcomeMessage;
let fsDivTwo = document.createElement("div");
fsDivTwo.id = "fsDivTwo";
fsDivTwo.className = "flex";
let scoreH3 = document.createElement("h3");
scoreH3.innerText = `Puntuación: ${score}`;
let throwsH3 = document.createElement("h3");
throwsH3.innerText = `Tirada: ${throws}`;
let innerDiv1 = document.createElement("div");
innerDiv1.id = "innerDiv1";
innerDiv1.append(scoreH3, throwsH3);
let playButton = document.createElement("button");
playButton.id = "playButton";
playButton.innerText = playButtonText;
let innerDiv2 = document.createElement("div");
innerDiv2.appendChild(playButton);
fsDivTwo.append(innerDiv1, innerDiv2);
fsDivOne.append(gameTitle, welcomeMessageText);
firstSection.append(fsDivOne, fsDivTwo);
// Second section elements creation
let secondSectionTitle = document.createElement("h2");
secondSectionTitle.innerText = secondSectionText;
secondSectionTitle.id = "secondSectionTitle";
secondSection.appendChild(secondSectionTitle);
// cards creation
function randomNumber(min, max) {
    let number = Math.random() * (max - min) + min;
    return Math.floor(number);
}

for (let index = 0; index < numberOfCards; index++) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "cardDiv";
    let image = document.createElement("img");
    image.src = "images/back.jpg";
    image.id = "image" + index.toString();
    image.style.cursor = "pointer";
    cardDiv.appendChild(image);
    secondSection.appendChild(cardDiv);

}
// Function that moves the elements of a given array to the given position
function move(arr, old_index, new_index) {
    while (old_index < 0) {
        old_index += arr.length;
    }
    while (new_index < 0) {
        new_index += arr.length;
    }
    if (new_index >= arr.length) {
        var k = new_index - arr.length;
        while ((k--) + 1) {
            arr.push(undefined);
        }
    }
    arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    return arr;
}
// Function that generate the cards' pathss
function generateNumbers() {
    let cardsNumber = [];
    let lista = [];
    let number;
    for (let index = 0; index < numberOfPairs; index++) {
        number = randomNumber(1, totalNumberOfCards);
        if (cardsNumber.includes(number)) {
            cardsNumber.push(number + 1);
        } else {
            cardsNumber.push(number);
        }
    }
    number = randomNumber(0, 3);
    lista = lista.concat(cardsNumber);
    move(cardsNumber, 0, -1);
    lista = lista.concat(cardsNumber);
    lista = lista.map(i => i + ".gif");
    return lista;
};


playButton.addEventListener("click", function() {
    cards = generateNumbers();
    console.log(cards);

});