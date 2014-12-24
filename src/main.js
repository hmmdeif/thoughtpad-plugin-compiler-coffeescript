var coffee = require('coffee-script');

var init = function (thoughtpad) {
    thoughtpad.subscribe("javascript-compile-request", compileJs);
},

compileJs = function *(obj) {
    if (obj.ext !== "coffee") return;

    yield obj.thoughtpad.notify("javascript-compile-complete", { contents: coffee.compile(obj.contents, {bare: true }), name: obj.name });
};

module.exports = {
    init: init
};