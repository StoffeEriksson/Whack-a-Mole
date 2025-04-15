// created Variables needed for game
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

// eventlisteners for start and reset buttons
startButton.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);



/**
 * starts game and set an interval for mole and frog to spawn including a timer of 30 sec.
 */
function startGame() {
    resetGame();
    
    gameTime = 30;
    document.getElementById("timer").textContent = "Time: " + gameTime;
    
    moleInterval = setInterval(showMole, 1000); // Mole spawns after 1sec
    frogInterval = setInterval(showFrog, 2000); // Frog spawns after 2 sec
    timeInterval = setInterval(setTimer, 1000); 
};

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
};

/**
 * Sets a timer that counts down the time from 30 to 0. 
 * when reached 0 tells the player Time's up!
 */
function setTimer() {
    gameTime--;
    document.getElementById("timer").textContent = "Time: " + gameTime;

    if (gameTime <= 0) {
        endGame("Time's up! Final Score: " + score);
    };
};
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
};
/**
 * Makes the mole appear from and created img element and shown at a random place with randomHole() function.
 */
function showMole() {
    if (moleHole) moleHole.innerHTML = ""; // clears the current mole
   
    const mole = document.createElement("img");
    mole.src = "assets/images/mole.png";
    mole.alt = "Mole";
    mole.classList.add("mole");

    moleHole = randomHole(frogHole);
    mole.addEventListener("click", wackMole);
    moleHole.appendChild(mole);
};
/**
 * creates a img element and makes the frog spawn at a random hole.
 */
function showFrog() {
    
    if (frogHole) frogHole.innerHTML = ""; // clears the current frog

    const frog = document.createElement("img");
    frog.src = "assets/images/frog.png";
    frog.alt = "Frog";
    frog.classList.add("frog");

    frogHole = randomHole(moleHole);
    frog.addEventListener("click", wackFrog);
    frogHole.appendChild(frog);
};
/**
 * 
 *  wackMole() is running when to mole is clicked. The score increases by 10 points and the mole removes from the hole.
 */
function wackMole(event) {
    score += 10;
    displayScore.textContent = score;
    let correct = new Audio("assets/audio/correct-hit.mp3");
    correct.play();
    event.target.remove();
};
/**
 * 
 * calls enGame when an event is used 
 */
function wackFrog(event) {
    endGame("GAME OVER! You hit the frog! Score: " + score);
    let wrong = new Audio("assets/audio/wrong-hit.mp3");
        wrong.play();
};
/**
 * 
 * endGame clears all holes and intervals set and gives a message!  
 */
function endGame(message) {
    if (moleHole) moleHole.innerHTML = "";
    if (frogHole) frogHole.innerHTML = "";
    
    clearInterval(moleInterval);
    clearInterval(frogInterval);
    clearInterval(timeInterval);

    document.getElementById("score").innerText = message;
};


