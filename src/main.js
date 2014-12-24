var coffee = require('coffee-script'),
    _thoughtpad;

var init = function (thoughtpad) {
    _thoughtpad = thoughtpad;
    _thoughtpad.subscribe("javascript-compile-request", compileJs);
},

compileJs = function *(obj) {
    if (obj.ext !== "coffee") return;

    yield _thoughtpad.notify("javascript-compile-complete", { contents: coffee.compile(obj.contents, {bare: true }), name: obj.name });
};

module.exports = {
    init: init
};