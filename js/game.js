// Game Logic
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const goalFire = document.getElementById('goal-fire');
const goalWater = document.getElementById('goal-water');

let firePosition = { x: 50, y: 150 };
let waterPosition = { x: 500, y: 150 };

// Key movement controls
const moveSpeed = 10;

// Listen for keyboard events to move players
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowUp') {
        if (firePosition.x === 50 && firePosition.y > 0) firePosition.y -= moveSpeed;
        if (waterPosition.x === 500 && waterPosition.y > 0) waterPosition.y -= moveSpeed;
    }
    if (event.key === 'ArrowDown') {
        if (firePosition.x === 50 && firePosition.y < 350) firePosition.y += moveSpeed;
        if (waterPosition.x === 500 && waterPosition.y < 350) waterPosition.y += moveSpeed;
    }
    if (event.key === 'ArrowLeft') {
        if (firePosition.x > 0) firePosition.x -= moveSpeed;
        if (waterPosition.x > 0) waterPosition.x -= moveSpeed;
    }
    if (event.key === 'ArrowRight') {
        if (firePosition.x < 550) firePosition.x += moveSpeed;
        if (waterPosition.x < 550) waterPosition.x += moveSpeed;
    }

    // Update positions of players based on key press
    updatePositions();
    checkGoal();
});

function updatePositions() {
    fire.style.left = `${firePosition.x}px`;
    fire.style.top = `${firePosition.y}px`;
    water.style.left = `${waterPosition.x}px`;
    water.style.top = `${waterPosition.y}px`;
}

function checkGoal() {
    // Check if Fire reaches the goal
    if (firePosition.x === 50 && firePosition.y === 300) {
        alert("Fire reached its goal!");
        resetGame();
    }

    // Check if Water reaches the goal
    if (waterPosition.x === 500 && waterPosition.y === 300) {
        alert("Water reached its goal!");
        resetGame();
    }
}

function resetGame() {
    firePosition = { x: 50, y: 150 };
    waterPosition = { x: 500, y: 150 };
    updatePositions();
}
