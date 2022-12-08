// LEFT DICE

var randomNumber1 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1)


// RIGHT DICE

var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomDiceImage2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

// RESULTS

if (randomNumber1 > randomNumber2) {
document.querySelector("h1").textContent="🚩P1 Wins!"
}

else if (randomNumber1 < randomNumber2) {
document.querySelector("h1").textContent="P2 Wins!🚩"
}

else if (randomNumber1 === randomNumber2) {
document.querySelector("h1").textContent="🍑Draw!🍑"
}
