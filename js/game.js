// JavaScript code (game.js)

document.addEventListener('keydown', movePlayer);
document.getElementById('restart-btn').addEventListener('click', restartGame);

let fireWins = false;
let waterWins = false;

const step = 10;
const gameContainer = document.getElementById('game-container');
const gameWidth = gameContainer.offsetWidth;
const gameHeight = gameContainer.offsetHeight;

function checkWin(player, goal, playerName) {
    const playerRect = player.getBoundingClientRect();
    const goalRect = goal.getBoundingClientRect();

    // Check for overlap (i.e., the player reaches the goal area)
    return (
        playerRect.left < goalRect.right &&
        playerRect.right > goalRect.left &&
        playerRect.top < goalRect.bottom &&
        playerRect.bottom > goalRect.top
    );
}

function movePlayer(event) {
    let fire = document.getElementById('fire');
    let water = document.getElementById('water');
    let goalFire = document.getElementById('goal-fire');
    let goalWater = document.getElementById('goal-water');

    if (fireWins || waterWins) return; // Stop moving if someone has already won

    // Move the fire player
    switch (event.key) {
        case 'ArrowUp':
            if (parseInt(fire.style.top || 0) > 0) {
                fire.style.top = (parseInt(fire.style.top || 0) - step) + 'px';
            }
            break;
        case 'ArrowDown':
            if (parseInt(fire.style.top || 0) < gameHeight - 40) {
                fire.style.top = (parseInt(fire.style.top || 0) + step) + 'px';
            }
            break;
        case 'ArrowLeft':
            if (parseInt(fire.style.left || 0) > 0) {
                fire.style.left = (parseInt(fire.style.left || 0) - step) + 'px';
            }
            break;
        case 'ArrowRight':
            if (parseInt(fire.style.left || 0) < gameWidth - 40) {
                fire.style.left = (parseInt(fire.style.left || 0) + step) + 'px';
            }
            break;
    }

    // Move the water player
    switch (event.key) {
        case 'w':
            if (parseInt(water.style.top || 0) > 0) {
                water.style.top = (parseInt(water.style.top || 0) - step) + 'px';
            }
            break;
        case 's':
            if (parseInt(water.style.top || 0) < gameHeight - 40) {
                water.style.top = (parseInt(water.style.top || 0) + step) + 'px';
            }
            break;
        case 'a':
            if (parseInt(water.style.left || 0) > 0) {
                water.style.left = (parseInt(water.style.left || 0) - step) + 'px';
            }
            break;
        case 'd':
            if (parseInt(water.style.left || 0) < gameWidth - 40) {
                water.style.left = (parseInt(water.style.left || 0) + step) + 'px';
            }
            break;
    }

    // Check if Fire or Water reached their goal
    if (checkWin(fire, goalFire, 'fire')) {
        fireWins = true;
        updateStatus('Fire Wins!');
        showRestartButton();
    }

    if (checkWin(water, goalWater, 'water')) {
        waterWins = true;
        updateStatus('Water Wins!');
        showRestartButton();
    }
}

// Updating the status div when someone wins
function updateStatus(message) {
    document.getElementById('status').textContent = message;
    document.getElementById('status').classList.add('winner');
}

// Show Restart Button when a player wins
function showRestartButton() {
    document.getElementById('restart-btn').style.display = 'block';
}

// Restart the game
function restartGame() {
    fireWins = false;
    waterWins = false;
    document.getElementById('fire').style.top = '0px';
    document.getElementById('fire').style.left = '0px';
    document.getElementById('water').style.top = '360px';
    document.getElementById('water').style.left = '760px';
    document.getElementById('status').textContent = 'Welcome to the Fire and Water Game!';
    document.getElementById('status').classList.remove('winner');
    document.getElementById('restart-btn').style.display = 'none';
}
