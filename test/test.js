var should = require('should'),
    app = require('./../src/main'),
    testapp = require('./coffee'),
    co = require('co'),
    man = require('thoughtpad-plugin-manager'),
    thoughtpad;

describe("coffeescript compilation plugin", function () {
    it("should register correctly to events", function () {
        thoughtpad = man.registerPlugins([app]);

        thoughtpad.subscribe("javascript-compile-complete", function *() {
            true.should.be.true;
        });

        co(function *() {
            yield thoughtpad.notify("javascript-compile-request", { ext: "coffee", contents: "" });
        })();
    });

    it("should ignore anything other than coffeescript", function () {
        thoughtpad = man.registerPlugins([app, testapp]);

        thoughtpad.subscribe("javascript-compile-complete", function *() {
            true.should.be.false; // Should never hit here because the extension is not coffee
        });

        co(function *() {
            yield thoughtpad.notify("javascript-compile-request", { ext: "js" });
        })();
    });

    it("should compile coffeescript", function (done) {
        thoughtpad = man.registerPlugins([app, testapp]);

        thoughtpad.subscribe("javascript-compile-complete", function *(contents) {
            contents.should.equal("$(document).ready(function() {\n  $('#cv-content-toggle').click(function() {});\n  return $('#cv-content').toggle();\n});\n");
        });

        co(function *() {
            yield thoughtpad.notify("javascript-compile-request", { ext: "coffee", contents: "$(document).ready ->\n\t$('#cv-content-toggle').click ->\n\t$('#cv-content').toggle()" });
            done();
        })();
        
    });
});