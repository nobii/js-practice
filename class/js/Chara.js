const MIN_INTERVAL = 1000;
const MAX_INTERVAL = 2000;


class Chara {
    constructor (opts = {}) {
        this.el = opts.el || document.createElement('div');
        
        this.x = 0;
        this.y = 0;

        this.w = this.h = this.timer = null;

        this.setStageSize();
        this.walk();
    }

    setStageSize () {
        this.w = Math.floor(window.innerWidth / this.el.offsetWidth);
        this.h = Math.floor(window.innerHeight / this.el.offsetHeight);
        this.x = Math.min(this.x, this.w);
        this.y = Math.min(this.y, this.h);
    }

    walk () {
        this.timer = setTimeout(() => {
            const isVertical = (Math.random() < 0.5);
            let size = (Math.random() < 0.5) ? 1 : -1;

            if ((isVertical && (this.y + size < 0 || this.y + size > this.h)) || (!isVertical && (this.x + size < 0 || this.x + size > this.w))) {
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
            this.el.setAttribute('data-orientation', orientation);
            
            isVertical ? (this.y += size) : (this.x += size);
            
            this.el.style.left = `${this.x * this.el.offsetWidth}px`;
            this.el.style.top = `${this.y * this.el.offsetHeight}px`;
            this.walk();
        }, MIN_INTERVAL + (MAX_INTERVAL - MIN_INTERVAL) * Math.random());
    }
};
