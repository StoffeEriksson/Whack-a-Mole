// Variables needed
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
const displayScore = document.getElementById("score");
const holes = document.querySelectorAll(".hole");

let score = 0;
let currentHole = null;
let moleInterval = null;
let frogInterval = null;

// Start the game
startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);


/**
 * starts game and set an interval of 1.5sek for the mole to spawn.
 */
function startGame() {
    resetGame();
    
    moleInterval = setInterval(showMole, 1000); // sets timer to 1.5sek
    frogInterval = setInterval(showFrog, 3000);
}


/**
 * Resets the gamescore and clears all the holes.
 */
function resetGame() {
    if (currentHole) {
        currentHole.innerHTML = "";
    }
    clearInterval(moleInterval);
    score = 0;
    displayScore.textContent = score;

    clearInterval(frogInterval);
}


/**
 * 
 * Makes the mole to spawn at a random place between the length of the array of holes.
 */
function randomHole() {
    const num = Math.floor(Math.random() * holes.length);
    return holes[num];
}


/**
 * Makes the mole appear from and created img element and shown at a random place with randomHole() function.
 */
function showMole() {
    // Makes sure to clear the current hole when it jumps to the next
    if(currentHole) {
        currentHole.innerHTML = "";
    };
    
    currentHole = randomHole();

    const mole = document.createElement("img");
    mole.src = "assets/images/mole.png";
    mole.alt = "Mole";
    mole.classList.add("mole");

    mole.addEventListener("click", wackMole);
    
    currentHole.appendChild(mole);

    
}


/**
 * creates a img element and makes the frog spawn at a random hole.
 */
function showFrog() {
    if(currentHole) {
        currentHole.innerHTML = "";
    };

    currentHole = randomHole();

    const frog = document.createElement("img");
    frog.src = "assets/images/frog.png";
    frog.alt = "Frog";
    frog.classList.add("frog");

    frog.addEventListener("click", wackFrog);

    currentHole.appendChild(frog);
}


/**
 * 
 *  wackMole() is running when to mole is clicked. The score increases by 1 point and the mole removes from the hole.
 */
function wackMole(event) {
    score++;
    displayScore.textContent = score;
    event.target.remove();
}


/**
 * 
 * clicking the frog the game shows Game Over and board clears and your final score shows 
 */
function wackFrog(event) {
    clearInterval(moleInterval);
    clearInterval(frogInterval);

    if(currentHole) {
        currentHole.innerHTML = "";
    };
    
    document.getElementById("score").innerText = "GAME OVER! Score:" + score;

}