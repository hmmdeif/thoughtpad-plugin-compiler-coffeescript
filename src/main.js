var coffee = require('coffee-script'),
    _thoughtpad;

var init = function (thoughtpad) {
    _thoughtpad = thoughtpad;
    _thoughtpad.subscribe("javascript-compile-request", compileJs);
},
compileJs = function (contents) {
    _thoughtpad.notify("javascript-compile-complete", coffee.compile(contents, {bare, true }));
};

module.exports = {
    init: init
};