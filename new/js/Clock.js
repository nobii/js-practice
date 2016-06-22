// 諸事情によりes5で書いた適当なクラス

function Clock (el) {
    this.el = el;
    this.start();
}

Clock.prototype.start = function () {
    setInterval(() => {
        this.updateText();
    }, 1000);
    this.updateText();
};

Clock.prototype.updateText = function () {
    const d = new Date();

    const needles = this.el.children;
    needles[0].style.transform = `rotate(${360 * d.getHours() / 12}deg)`;
    needles[1].style.transform = `rotate(${360 * d.getMinutes() / 60}deg)`;
    needles[2].style.transform = `rotate(${360 * d.getSeconds() / 60}deg)`;
};
