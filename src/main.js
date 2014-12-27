var coffee = require('coffee-script');

var init = function (thoughtpad) {
    thoughtpad.subscribe("javascript-compile-request", compileJs);
},

compileJs = function *(obj) {
    if (obj.ext !== "coffee") return;

    // The user can override this using the eventData config variable
    var data = { bare: true };

    if (obj.thoughtpad.config && obj.thoughtpad.config.eventData && obj.thoughtpad.config.eventData['javascript-compile']) {
        data = obj.thoughtpad.config.eventData['javascript-compile'];
    }

    yield obj.thoughtpad.notify("javascript-compile-complete", { contents: coffee.compile(obj.contents, data), name: obj.name });
};

module.exports = {
    init: init
};