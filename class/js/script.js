const charaList = [];

[].forEach.call(document.querySelectorAll('.js-chara'), (el) => {
    charaList.push(new Chara({
        el: el
    }));
});

window.addEventListener('resize', () => {
    charaList.forEach((chara) => {
        chara.setStageSize();
    });
});
