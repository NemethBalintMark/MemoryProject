var pont = 0;
var fruits = ["apple", "cherry", "grape", "orange", "peach", "pear", "strawberry", "watermelon"];
var cards = [];

function start() {
    pont = 0;
    fruits = fruits.concat(fruits);
    i = fruits.length;

    while (i != 0) {
        let randomIndex = Math.floor(Math.random() * i);
        i--;

        let temp = fruits[i];
        fruits[i] = fruits[randomIndex];
        fruits[randomIndex] = temp;
    }

    cards = document.querySelectorAll(".kartya");

    console.log(fruits);
}

function flip(card) {
    for (var i = 0; i < cards.length; i++) {
        if (card == cards[i]) {
            alert(i);
        }
    }
}

start();