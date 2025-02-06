// JavaScript code (game.js)

document.addEventListener('keydown', movePlayer);

function movePlayer(event) {
    let fire = document.getElementById('fire');
    let water = document.getElementById('water');

    const step = 10;

    switch(event.key) {
        case 'ArrowUp':
            fire.style.top = (parseInt(fire.style.top || 0) - step) + 'px';
            break;
        case 'ArrowDown':
            fire.style.top = (parseInt(fire.style.top || 0) + step) + 'px';
            break;
        case 'ArrowLeft':
            fire.style.left = (parseInt(fire.style.left || 0) - step) + 'px';
            break;
        case 'ArrowRight':
            fire.style.left = (parseInt(fire.style.left || 0) + step) + 'px';
            break;
        case 'w':
            water.style.top = (parseInt(water.style.top || 0) - step) + 'px';
            break;
        case 's':
            water.style.top = (parseInt(water.style.top || 0) + step) + 'px';
            break;
        case 'a':
            water.style.left = (parseInt(water.style.left || 0) - step) + 'px';
            break;
        case 'd':
            water.style.left = (parseInt(water.style.left || 0) + step) + 'px';
            break;
    }
}
