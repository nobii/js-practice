/* ========================================= *
 * class
 * ========================================= */

// 適当なクラス
class Clock {
    constructor (el) {
        this.el = el;

        this.start();
    }

    start () {
        setInterval(() => {
            this.updateText();
        }, 1000);
        this.updateText();
    }

    updateText () {
        const d = new Date();

        const needles = this.el.children;
        needles[0].style.transform = `rotate(${360 * d.getHours() / 12}deg)`;
        needles[1].style.transform = `rotate(${360 * d.getMinutes() / 60}deg)`;
        needles[2].style.transform = `rotate(${360 * d.getSeconds() / 60}deg)`;
    }
}



/* ========================================= *
 * main
 * ========================================= */

// 普通、クラスはこうやって使う
new Clock(document.getElementById('clock1'));

// これで、左右の時計が同じように動くための、customNewを書いて下さい
// すなわち、「new」の挙動を自作の関数で再現して下さい
customNew(Clock, [ document.getElementById('clock2') ]);



/* ========================================= *
 * customNew
 * ========================================= */

function customNew () {
    /* 回答はこちらへ */
}
