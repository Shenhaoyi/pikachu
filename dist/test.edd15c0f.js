// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"K4Xi":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var string = "* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n  }\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  .skin {\n    position: relative;\n    background: rgb(255, 230, 0);\n    height: 100vh;\n  }\n  .eye {\n    position: absolute;\n    left: 50%;\n    top: 50px;\n    border: 3px solid black;\n    height: 57px;\n    width: 57px;\n    margin-left: -30px;\n    border-radius: 50%;\n    background: #000;\n  }\n  .eye.left {\n    transform: translateX(-100px);\n  }\n  .eye.right {\n    transform: translateX(100px);\n  }\n  .eye::before {\n    position: absolute;\n    left: 5px;\n    content: \"\"; \n    display: block;\n    height: 20px;\n    width: 20px;\n    border-radius: 50%;\n    background: #fff;\n    animation: move 2s infinite;\n  }\n  .nose {\n    position: absolute;\n    left: 50%;\n    top: 85px;\n    border-top: 13px solid black;\n    border-left: 14px solid black;\n    border-right: 14px solid black;\n    border-color: black transparent transparent transparent;\n    height: 0px;\n    width: 0px;\n    margin-left: -14px;\n    border-radius: 50%;\n  }\n  @keyframes openMouth {\n    0% {\n      height: 100px;\n    }\n    50% {\n      height: 160px;\n    }\n    100% {\n      height: 100px;\n    }\n  }\n  .mouth {\n    position: relative;\n    left: 50%;\n    top: 110px;\n    width: 160px;\n    height: 160px;\n    transform: translateX(-80px);\n    overflow: hidden;\n    animation: openMouth 2s 3s infinite;\n  }\n  .mouth .up .lip {\n    position: absolute;\n    top: -14px;\n    border: 3px solid black;\n    width: 82px;\n    height: 30px;\n    z-index: 1;\n    background: rgb(255, 230, 0);\n  }\n  .mouth .up .lip.left {\n    border-radius: 0 0 0 80%;\n    border-color: transparent transparent black black;\n    left: 0;\n    transform: rotate(-20deg);\n  }\n  .mouth .up .lip.right {\n    border-radius: 0 0 80% 0;\n    border-color: transparent black black transparent;\n    right: 0;\n    transform: rotate(20deg);\n  }\n  .mouth .down .yuan1 {\n    position: absolute;\n    bottom: 0;\n    border: 3px solid black;\n    height: 2000px;\n    width: 100%;\n    border-radius: 1000px/5000px;\n    background: rgb(155, 0, 10);\n    z-index: 0;\n    overflow: hidden;\n  }\n  .mouth .down .yuan1 .yuan2 {\n    position: absolute;\n    bottom: -65px;\n    left: 50%;\n    border: 1px solid red;\n    height: 200px;\n    width: 170px;\n    border-radius: 90%;\n    transform: translateX(-50%);\n    background: rgb(255, 72, 95);\n  }\n  .face {\n    position: absolute;\n    left: 50%;\n    top: 150px;\n    border: 3px solid black;\n    height: 85px;\n    width: 85px;\n    margin-left: -42.5px;\n    border-radius: 50%;\n    background: red;\n  }\n  .face > img {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    /* display: none; */\n  }\n  .face.left {\n    transform: translateX(-130px);\n  }\n  .face.left > img {\n    transform: rotateY(180deg);\n    transform-origin: left top;\n  }\n  .face.right {\n    transform: translateX(130px);\n  }\n  @keyframes wave {\n    0% {\n      transform: rotate(0);\n    }\n    25% {\n      transform: rotate(-10deg);\n    }\n    50% {\n      transform: rotate(0);\n    }\n    75% {\n      transform: rotate(10deg);\n    }\n    100% {\n      transform: rotate(0);\n    }\n  }\n  @keyframes move {\n    0% {\n      transform: translateX(0);\n    }\n    50% {\n      transform: translateX(20px);\n    }\n    100% {\n      transform: translateX(0);\n    }\n  }\n  .nose{\n    transform-origin: center bottom;\n    animation: wave 1s infinite;\n  }\n";
var _default = string;
exports.default = _default;
},{}],"HdJB":[function(require,module,exports) {
"use strict";

var _css = _interopRequireDefault(require("./css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var player = {
  n: 0,
  time: 30,
  id: undefined,
  events: {
    "#btnPause": "pause",
    "#btnPlay": "play",
    "#btnReset": "reset",
    "#btnSlow": "slow",
    "#btnNormal": "normal",
    "#btnFast": "fast"
  },
  init: function init() {
    player.bindEvents();
    player.play();
  },
  bindEvents: function bindEvents() {
    for (var key in player.events) {
      if (player.events.hasOwnProperty(key)) {
        //是自身属性才需要遍历，避免访问到继承来的属性
        var value = player.events[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  run: function run() {
    player.n += 1;

    if (player.n > _css.default.length) {
      window.clearInterval(player.id); // const face = document.querySelectorAll('.face')
      // face.forEach(item => {
      //   item.innerHTML = ('<img src="./images/flash.gif" alt="" />')
      // })

      return;
    } // console.log(n + ":" + string.substr(0, n));


    demo.innerHTML = _css.default.substr(0, player.n);
    demo2.innerText = _css.default.substr(0, player.n);
    demo2.scrollTop = demo2.scrollHeight;
  },
  play: function play() {
    player.id = setInterval(player.run, player.time);
  },
  pause: function pause() {
    return window.clearInterval(player.id);
  },
  reset: function reset() {
    player.pause();
    demo.innerHTML = "";
    demo2.innerText = "";
    player.n = 0;
    player.time = 30;
    player.play();
  },
  slow: function slow() {
    player.pause();
    player.time = 100;
    player.play();
  },
  normal: function normal() {
    player.pause();
    player.time = 30;
    player.play();
  },
  fast: function fast() {
    player.pause();
    player.time = 0;
    player.play();
  }
};
player.init();
},{"./css.js":"K4Xi"}]},{},["HdJB"], null)
//# sourceMappingURL=test.edd15c0f.js.map