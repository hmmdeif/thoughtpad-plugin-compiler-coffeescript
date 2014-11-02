var coffee = require('coffee-script'),
    _thoughtpad;

var init = function (thoughtpad) {
    _thoughtpad = thoughtpad;
    _thoughtpad.subscribe("javascript-compile-request", compileJs);
},

compileJs = function *(obj) {
    if (obj.ext !== "coffee") return;

    _thoughtpad.notify("javascript-compile-complete", coffee.compile(obj.contents, {bare: true }));
};

module.exports = {
    init: init
};