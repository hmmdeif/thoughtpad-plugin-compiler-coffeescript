var should = require('should'),
    app = require('./../src/main'),
    man = require('thoughtpad-plugin-manager'),
    thoughtpad;

describe("coffeescript compilation plugin", function () {
    it("should register correctly to events", function () {
        thoughtpad = man.registerPlugins([app]);

        thoughtpad.subscribe("javascript-compile-complete", function *() {
            true.should.be.true;
        });

        thoughtpad.notify("javascript-compile-request", { ext: "" });
    });

    it("should ignore anything other than coffeescript", function () {
        thoughtpad = man.registerPlugins([app]);

        thoughtpad.subscribe("javascript-compile-complete", function *() {
            true.should.be.true;
        });

        thoughtpad.notify("javascript-compile-request", { ext: "js" });
    });

    it("should compile coffeescript", function () {
        thoughtpad = man.registerPlugins([app]);

        thoughtpad.subscribe("javascript-compile-complete", function *(contents) {
            contents.should.equal("$(document).ready(function() {\n  $('#cv-content-toggle').click(function() {});\n  return $('#cv-content').toggle();\n});\n");
        });

        thoughtpad.notify("javascript-compile-request", { ext: "coffee", contents: "$(document).ready ->\n\t$('#cv-content-toggle').click ->\n\t$('#cv-content').toggle()" });
    });
});