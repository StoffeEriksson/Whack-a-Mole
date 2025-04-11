// Variables needed
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
const displayScore = document.getElementById("score");
const holes = document.querySelectorAll(".hole");

let score = 0;
let gameTime = 30;
let moleInterval = null;
let frogInterval = null;
let timeInterval = null;
let moleHole = null;
let frogHole = null;

// Start the game
startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);


/**
 * starts game and set an interval of 1.5sek for the mole to spawn.
 */
function startGame() {
    resetGame();
    

    gameTime = 30;
    document.getElementById("timer").textContent = "Time: " + gameTime;
    
    moleInterval = setInterval(showMole, 1000); // sets timer to 1.5sek
    frogInterval = setInterval(showFrog, 2000);
    timeInterval = setInterval(setTimer, 1000);
}


/**
 * Resets the gamescore and clears all the holes.
 */
function resetGame() {
    if (moleHole) moleHole.innerHTML = "";
    if(frogHole) frogHole.innerHTML = "";
    
    score = 0;
    displayScore.textContent = score;

    gameTime = 30;
    document.getElementById("timer").textContent = "Time :" + gameTime;
    
    clearInterval(moleInterval);
    clearInterval(frogInterval);
    clearInterval(timeInterval);
}






/**
 * 
 * Makes the mole and the frog to spawn at a random place between the length of the array of holes.
 */
function randomHole(excludeHole = null) {
    let hole;
    do {
        hole = holes[Math.floor(Math.random() * holes.length)];
    } while (hole === excludeHole);
    return hole;
}


/**
 * Makes the mole appear from and created img element and shown at a random place with randomHole() function.
 */
function showMole() {
    

    if (moleHole) moleHole.innerHTML = "";
   
    

    const mole = document.createElement("img");
    mole.src = "assets/images/mole.png";
    mole.alt = "Mole";
    mole.classList.add("mole");

    moleHole = randomHole(frogHole);

    mole.addEventListener("click", wackMole);
    
    moleHole.appendChild(mole);

    

    
}


/**
 * creates a img element and makes the frog spawn at a random hole.
 */
function showFrog() {
    
    
    if (frogHole) frogHole.innerHTML = "";

    

    const frog = document.createElement("img");
    frog.src = "assets/images/frog.png";
    frog.alt = "Frog";
    frog.classList.add("frog");

    frogHole = randomHole(moleHole);

    frog.addEventListener("click", wackFrog);

    frogHole.appendChild(frog);
}


/**
 * 
 *  wackMole() is running when to mole is clicked. The score increases by 1 point and the mole removes from the hole.
 */
function wackMole(event) {
    score += 10;
    displayScore.textContent = score;
    event.target.remove();
}


/**
 * 
 * clicking the frog the game shows Game Over and board clears and your final score shows 
 */
function wackFrog(event) {
    endGame("GAME OVER! You hit the frog! Score: " + score);

}

function endGame() {
    
}