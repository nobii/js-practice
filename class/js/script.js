const MIN_INTERVAL = 1000;
const MAX_INTERVAL = 2000;

const chara = document.querySelector('.js-chara');


let x = 0;
let y = 0;

let w, h, timer;

function setStageSize () {
    w = Math.floor(window.innerWidth / chara.offsetWidth);
    h = Math.floor(window.innerHeight / chara.offsetHeight);
    x = Math.min(x, w);
    y = Math.min(y, h);
}

function walk() {
    timer = setTimeout(() => {
        const isVertical = (Math.random() < 0.5);
        let size = (Math.random() < 0.5) ? 1 : -1;

        if ((isVertical && (y + size < 0 || y + size > h)) || (!isVertical && (x + size < 0 || x + size > w))) {
            size *= -1;
        }

        let orientation;
        if (isVertical) {
            if (size > 0) {
                orientation = 'down';
            } else {
                orientation = 'up';
            }
        } else {
            if (size > 0) {
                orientation = 'right';
            } else {
                orientation = 'left';
            }
        }
        chara.setAttribute('data-orientation', orientation);
        
        isVertical ? (y += size) : (x += size);
        
        chara.style.left = `${x * chara.offsetWidth}px`;
        chara.style.top = `${y * chara.offsetHeight}px`;
        walk();
    }, MIN_INTERVAL + (MAX_INTERVAL - MIN_INTERVAL) * Math.random());
}

window.addEventListener('resize', setStageSize);

setStageSize();
walk();
