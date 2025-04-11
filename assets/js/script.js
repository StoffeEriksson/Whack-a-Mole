// Variables needed
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
const displayScore = document.getElementById("score");
const holes = document.querySelectorAll(".hole");

let score = 0;
let currentHole = null;
let moleInterval = null;

// Start the game
startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);

function startGame() {
    moleInterval = setInterval(showMole, 2000);
}

function resetGame() {

}

function randomHole() {
    const num = Math.floor(Math.random() * holes.length);
    return holes[num];
}

function showMole() {
    currentHole = randomHole();

    const mole = document.createElement("img");
    mole.src = "../assets/images/mole.png";
    mole.alt = "Mole";
    mole.classList.add("mole");
    
    currentHole.appendChild(mole);
}

function wackMole() {

}