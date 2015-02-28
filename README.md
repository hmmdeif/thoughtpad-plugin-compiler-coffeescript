thoughtpad-plugin-compiler-coffeescript
=======================================

[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

A thoughtpad plugin that responds to Javascript compile events. Coffeescript will be compiled to Javascript for use in the browser.

## Usage

The plugin should be loaded using the [thoughtpad-plugin-manager](https://github.com/thoughtpad/thoughtpad-plugin-manager). Once this has been done then the plugin will respond to events. To use standalone:

```JavaScript
var man = require('thoughtpad-plugin-manager'),
    coffeeCompiler = require('thoughtpad-plugin-compiler-coffeescript');

var thoughtpad = man.registerPlugins([coffeeCompiler]);
thoughtpad.subscribe("javascript-compile-complete", function (data) {
    console.log("Javascript is returned here in data object"); 
});
thoughtpad.notify("javascript-compile-request", { ext: "coffee", name: "name of the file", contents: "your coffee code here" });
```

## Tests

Ensure you have globally installed mocha - `npm -g install mocha`. Then you can run:

`mocha`

Alternatively if you are in a *NIX environment `npm test` will run the tests plus coverage data.

## License

The code is available under the [MIT license](http://deif.mit-license.org/).

[travis-image]: https://img.shields.io/travis/thoughtpad/thoughtpad-plugin-compiler-coffeescript/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/thoughtpad/thoughtpad-plugin-compiler-coffeescript
[coveralls-image]: https://img.shields.io/coveralls/thoughtpad/thoughtpad-plugin-compiler-coffeescript/master.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/thoughtpad/thoughtpad-plugin-compiler-coffeescript?branch=master