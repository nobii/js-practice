// 普通、クラスはこうやって使う
const clock1 = new Clock(document.getElementById('clock1'));

// ↓これで、左右の時計が同じように動くための、customNewを書いて下さい
// すなわち、「new」の挙動を自作の関数で再現して下さい
const clock2 = customNew(Clock, [ document.getElementById('clock2') ]);



// 自作new
function customNew (klass, args) {
    const obj = {};
    obj.__proto__ = klass.prototype;

    klass.apply(obj, args);

    return obj;
}
