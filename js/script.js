var pont = 0;
var fruits = ["apple", "cherry", "grape", "orange", "peach", "pear", "strawberry", "watermelon"];
var cards = [];
var fordit = 0;
var forditas = [];
var pontKiir = document.querySelector(".pont");

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

    for (var i = 0; i < cards.length; i++) {
        cards[i].innerHTML = `<img src="img/card-background.png" alt="Card" title="Card">`;
        cards[i].classList.remove("flipped");
    }

    fordit = 0;
    forditas = [];
    pontKiir.innerHTML = pont;
}

function visszaFordit() {
    forditas[1].classList.remove("flipped");
    forditas[3].classList.remove("flipped");
    forditas[1].innerHTML = `<img src="img/card-background.png" alt="Card" title="Card">`;
    forditas[3].innerHTML = `<img src="img/card-background.png" alt="Card" title="Card">`;
    forditas = [];
    fordit = 0;
}

function flip(card) {
    if (!card.classList.contains("flipped") && fordit < 2) {
        fordit += 1;
        for (var i = 0; i < cards.length; i++) {
            if (card == cards[i]) {
                card.innerHTML = `<img src="img/${fruits[i]}.png" alt="Card" title="Card">`;
                card.classList.add("flipped");

                forditas.push(fruits[i]);
                forditas.push(card);
            }
        }


        if (fordit == 2) {
            if (forditas[0] != forditas[2]) {
                console.log(forditas);
                setTimeout(function() {visszaFordit()}, 1000);
            } else {
                forditas = [];
                fordit = 0;
            }
            pont += 1;
            pontKiir.innerHTML = pont;
        }
    }

}

start();