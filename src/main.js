var coffee = require('coffee-script'),
    thoughtpad;

var init = function (@thoughtpad) {
    thoughtpad = @thoughtpad;
    thoughtpad.subscribe("javascript-compile-request", compileJs);
},

compileJs = function (contents) {
    thoughtpad.notify("javascript-compile-complete", coffee.compile(contents, {bare, true }));
};

module.exports = {
    init: init
};