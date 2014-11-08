var _thoughtpad;

var init = function (thoughtpad) {
    _thoughtpad = thoughtpad;
    _thoughtpad.subscribe("javascript-compile-request", compile);
},

compile = function *(obj) {
    if (obj.ext !== "cof") return;

    yield _thoughtpad.notify("javascript-compile-complete", coffee.compile(obj.contents, {bare: true }));
};

module.exports = {
    init: init
};