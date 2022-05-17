// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hUAgJ":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "73d5f8cb648171d3";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lG8gm":[function(require,module,exports) {
var _popmotion = require("popmotion");
require("./pop");
const ball = document.querySelector(".box");
const divStyler = _popmotion.styler(ball);
const ballXY = _popmotion.value({
    x: 0,
    y: 0
}, divStyler.set);
_popmotion.listen(ball, "mousedown touchstart").start((e)=>{
    e.preventDefault();
    _popmotion.pointer(ballXY.get()).start(ballXY);
});
_popmotion.listen(document, "mouseup touchend").start(()=>{
    _popmotion.spring({
        from: ballXY.get(),
        velocity: ballXY.getVelocity(),
        to: {
            x: 0,
            y: 0
        },
        stiffness: 200
    }).start(ballXY);
});

},{"popmotion":"C0kXw","./pop":"9sGLk"}],"C0kXw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var action_1 = require("./action");
exports.action = action_1.default;
var multicast_1 = require("./reactions/multicast");
exports.multicast = multicast_1.default;
var value_1 = require("./reactions/value");
exports.value = value_1.default;
var decay_1 = require("./animations/decay");
exports.decay = decay_1.default;
var every_frame_1 = require("./animations/every-frame");
exports.everyFrame = every_frame_1.default;
var keyframes_1 = require("./animations/keyframes");
exports.keyframes = keyframes_1.default;
var physics_1 = require("./animations/physics");
exports.physics = physics_1.default;
var spring_1 = require("./animations/spring");
exports.spring = spring_1.default;
var timeline_1 = require("./animations/timeline");
exports.timeline = timeline_1.default;
var tween_1 = require("./animations/tween");
exports.tween = tween_1.default;
var listen_1 = require("./input/listen");
exports.listen = listen_1.default;
var multitouch_1 = require("./input/multitouch");
exports.multitouch = multitouch_1.default;
var pointer_1 = require("./input/pointer");
exports.pointer = pointer_1.default;
var mouse_1 = require("./input/pointer/mouse");
exports.mouse = mouse_1.default;
var chain_1 = require("./compositors/chain");
exports.chain = chain_1.default;
var composite_1 = require("./compositors/composite");
exports.composite = composite_1.default;
var crossfade_1 = require("./compositors/crossfade");
exports.crossfade = crossfade_1.default;
var delay_1 = require("./compositors/delay");
exports.delay = delay_1.default;
var merge_1 = require("./compositors/merge");
exports.merge = merge_1.default;
var parallel_1 = require("./compositors/parallel");
exports.parallel = parallel_1.default;
var schedule_1 = require("./compositors/schedule");
exports.schedule = schedule_1.default;
var stagger_1 = require("./compositors/stagger");
exports.stagger = stagger_1.default;
var calc = require("./calc");
exports.calc = calc;
var easing = require("./easing");
exports.easing = easing;
var transform = require("./transformers");
exports.transform = transform;
var stylefire_1 = require("stylefire");
exports.styler = stylefire_1.default;
var css_1 = require("stylefire/css");
exports.css = css_1.default;
var svg_1 = require("stylefire/svg");
exports.svg = svg_1.default;
var valueTypes = require("style-value-types");
exports.valueTypes = valueTypes;

},{"./action":"g4FZU","./reactions/multicast":"ixm3q","./reactions/value":"7YOi7","./animations/decay":"xcUu6","./animations/every-frame":"gwg5J","./animations/keyframes":"kOPxN","./animations/physics":"e3vAD","./animations/spring":"aQ7KG","./animations/timeline":"hvkfN","./animations/tween":"99d5t","./input/listen":"jhYhP","./input/multitouch":"gQKGh","./input/pointer":"87N1t","./input/pointer/mouse":"dHYqO","./compositors/chain":"kiQFy","./compositors/composite":"4xnDf","./compositors/crossfade":"4HGEj","./compositors/delay":"i4qyK","./compositors/merge":"3rrWp","./compositors/parallel":"lV6xL","./compositors/schedule":"aqFno","./compositors/stagger":"cRT3i","./calc":"f7P1Z","./easing":"5mDgG","./transformers":"edI4z","stylefire":"la3r1","stylefire/css":"kymHh","stylefire/svg":"lRKOk","style-value-types":"f8zMr"}],"g4FZU":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __assign = this && this.__assign || Object.assign || function(t) {
    for(var s, i = 1, n = arguments.length; i < n; i++){
        s = arguments[i];
        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var chainable_1 = require("../chainable");
var observer_1 = require("../observer");
var Action = function(_super) {
    __extends(Action1, _super);
    function Action1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Action1.prototype.create = function(props) {
        return new Action1(props);
    };
    Action1.prototype.start = function(observerCandidate) {
        if (observerCandidate === void 0) observerCandidate = {};
        var isComplete = false;
        var subscription = {
            stop: function() {
                return undefined;
            }
        };
        var _a = this.props, init = _a.init, observerProps = __rest(_a, [
            "init"
        ]);
        var observer = observer_1.default(observerCandidate, observerProps, function() {
            isComplete = true;
            subscription.stop();
        });
        var api = init(observer);
        subscription = api ? __assign({}, subscription, api) : subscription;
        if (observerCandidate.registerParent) observerCandidate.registerParent(subscription);
        if (isComplete) subscription.stop();
        return subscription;
    };
    return Action1;
}(chainable_1.default);
exports.Action = Action;
exports.default = function(init) {
    return new Action({
        init: init
    });
};

},{"../chainable":"1X8zz","../observer":"acmn2"}],"1X8zz":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || Object.assign || function(t) {
    for(var s, i = 1, n = arguments.length; i < n; i++){
        s = arguments[i];
        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var transformers_1 = require("../transformers");
var Chainable = function() {
    function Chainable1(props) {
        if (props === void 0) props = {};
        this.props = props;
    }
    Chainable1.prototype.applyMiddleware = function(middleware) {
        return this.create(__assign({}, this.props, {
            middleware: this.props.middleware ? [
                middleware
            ].concat(this.props.middleware) : [
                middleware
            ]
        }));
    };
    Chainable1.prototype.pipe = function() {
        var funcs = [];
        for(var _i = 0; _i < arguments.length; _i++)funcs[_i] = arguments[_i];
        var pipedUpdate = funcs.length === 1 ? funcs[0] : transformers_1.pipe.apply(void 0, funcs);
        return this.applyMiddleware(function(update) {
            return function(v) {
                return update(pipedUpdate(v));
            };
        });
    };
    Chainable1.prototype.while = function(predicate) {
        return this.applyMiddleware(function(update, complete) {
            return function(v) {
                return predicate(v) ? update(v) : complete();
            };
        });
    };
    Chainable1.prototype.filter = function(predicate) {
        return this.applyMiddleware(function(update, complete) {
            return function(v) {
                return predicate(v) && update(v);
            };
        });
    };
    return Chainable1;
}();
exports.default = Chainable;

},{"../transformers":"edI4z"}],"edI4z":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || Object.assign || function(t) {
    for(var s, i = 1, n = arguments.length; i < n; i++){
        s = arguments[i];
        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var framesync_1 = require("framesync");
var style_value_types_1 = require("style-value-types");
var calc_1 = require("./calc");
var noop = function(v) {
    return v;
};
exports.appendUnit = function(unit) {
    return function(v) {
        return "" + v + unit;
    };
};
exports.applyOffset = function(from, to) {
    var hasReceivedFrom = true;
    if (to === undefined) {
        to = from;
        hasReceivedFrom = false;
    }
    var getOffset = function(v) {
        return v - from;
    };
    var applyOffsetTo = function(v) {
        return v + to;
    };
    return function(v) {
        if (hasReceivedFrom) return applyOffsetTo(getOffset(v));
        else {
            from = v;
            hasReceivedFrom = true;
            return to;
        }
    };
};
var blend = function(from, to, v) {
    var fromExpo = from * from;
    var toExpo = to * to;
    return Math.sqrt(v * (toExpo - fromExpo) + fromExpo);
};
exports.blendColor = function(from, to) {
    var fromColor = typeof from === 'string' ? style_value_types_1.color.parse(from) : from;
    var toColor = typeof to === 'string' ? style_value_types_1.color.parse(to) : to;
    var blended = __assign({}, fromColor);
    var blendFunc = from.hue !== undefined || typeof from === 'string' && style_value_types_1.hsla.test(from) ? calc_1.getValueFromProgress : blend;
    return function(v) {
        blended = __assign({}, blended);
        for(var key in blended)if (key !== 'alpha' && blended.hasOwnProperty(key)) blended[key] = blendFunc(fromColor[key], toColor[key], v);
        blended.alpha = calc_1.getValueFromProgress(fromColor.alpha, toColor.alpha, v);
        return blended;
    };
};
exports.clamp = function(min, max) {
    return function(v) {
        return Math.min(Math.max(v, min), max);
    };
};
var combineFunctions = function(a, b) {
    return function(v) {
        return b(a(v));
    };
};
exports.pipe = function() {
    var transformers = [];
    for(var _i = 0; _i < arguments.length; _i++)transformers[_i] = arguments[_i];
    return transformers.reduce(combineFunctions);
};
exports.conditional = function(check, apply) {
    return function(v) {
        return check(v) ? apply(v) : v;
    };
};
var slowInterpolate = function(input, output, rangeLength, rangeEasing) {
    var finalIndex = rangeLength - 1;
    if (input[0] > input[finalIndex]) {
        input.reverse();
        output.reverse();
    }
    return function(v) {
        if (v <= input[0]) return output[0];
        if (v >= input[finalIndex]) return output[finalIndex];
        var i = 1;
        for(; i < rangeLength; i++){
            if (input[i] > v || i === finalIndex) break;
        }
        var progressInRange = calc_1.getProgressFromValue(input[i - 1], input[i], v);
        var easedProgress = rangeEasing ? rangeEasing[i - 1](progressInRange) : progressInRange;
        return calc_1.getValueFromProgress(output[i - 1], output[i], easedProgress);
    };
};
var fastInterpolate = function(minA, maxA, minB, maxB) {
    return function(v) {
        return (v - minA) * (maxB - minB) / (maxA - minA) + minB;
    };
};
exports.interpolate = function(input, output, rangeEasing) {
    var rangeLength = input.length;
    return rangeLength !== 2 ? slowInterpolate(input, output, rangeLength, rangeEasing) : fastInterpolate(input[0], input[1], output[0], output[1]);
};
exports.generateStaticSpring = function(alterDisplacement) {
    if (alterDisplacement === void 0) alterDisplacement = noop;
    return function(constant, origin) {
        return function(v) {
            var displacement = origin - v;
            var springModifiedDisplacement = -constant * (0 - alterDisplacement(Math.abs(displacement)));
            return displacement <= 0 ? origin + springModifiedDisplacement : origin - springModifiedDisplacement;
        };
    };
};
exports.linearSpring = exports.generateStaticSpring();
exports.nonlinearSpring = exports.generateStaticSpring(Math.sqrt);
exports.wrap = function(min, max) {
    return function(v) {
        var rangeSize = max - min;
        return ((v - min) % rangeSize + rangeSize) % rangeSize + min;
    };
};
exports.smooth = function(strength) {
    if (strength === void 0) strength = 50;
    var previousValue = 0;
    var lastUpdated = 0;
    return function(v) {
        var currentFramestamp = framesync_1.currentFrameTime();
        var timeDelta = currentFramestamp !== lastUpdated ? currentFramestamp - lastUpdated : 0;
        var newValue = timeDelta ? calc_1.smooth(v, previousValue, timeDelta, strength) : previousValue;
        lastUpdated = currentFramestamp;
        previousValue = newValue;
        return newValue;
    };
};
exports.snap = function(points) {
    if (typeof points === 'number') return function(v) {
        return Math.round(v / points) * points;
    };
    else {
        var i_1 = 0;
        var numPoints_1 = points.length;
        return function(v) {
            var lastDistance = Math.abs(points[0] - v);
            for(i_1 = 1; i_1 < numPoints_1; i_1++){
                var point = points[i_1];
                var distance = Math.abs(point - v);
                if (distance === 0) return point;
                if (distance > lastDistance) return points[i_1 - 1];
                if (i_1 === numPoints_1 - 1) return point;
                lastDistance = distance;
            }
        };
    }
};
exports.steps = function(st, min, max) {
    if (min === void 0) min = 0;
    if (max === void 0) max = 1;
    return function(v) {
        var progress = calc_1.getProgressFromValue(min, max, v);
        return calc_1.getValueFromProgress(min, max, calc_1.stepProgress(st, progress));
    };
};
exports.transformMap = function(childTransformers) {
    return function(v) {
        var output = __assign({}, v);
        for(var key in childTransformers)if (childTransformers.hasOwnProperty(key)) {
            var childTransformer = childTransformers[key];
            output[key] = childTransformer(v[key]);
        }
        return output;
    };
};

},{"framesync":"fmg1O","style-value-types":"f8zMr","./calc":"f7P1Z"}],"fmg1O":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "currentTime", ()=>currentTime
);
parcelHelpers.export(exports, "onFrameStart", ()=>onFrameStart
);
parcelHelpers.export(exports, "onFrameUpdate", ()=>onFrameUpdate
);
parcelHelpers.export(exports, "onFrameRender", ()=>onFrameRender
);
parcelHelpers.export(exports, "onFrameEnd", ()=>onFrameEnd
);
parcelHelpers.export(exports, "cancelOnFrameStart", ()=>cancelOnFrameStart
);
parcelHelpers.export(exports, "cancelOnFrameUpdate", ()=>cancelOnFrameUpdate
);
parcelHelpers.export(exports, "cancelOnFrameRender", ()=>cancelOnFrameRender
);
parcelHelpers.export(exports, "cancelOnFrameEnd", ()=>cancelOnFrameEnd
);
parcelHelpers.export(exports, "timeSinceLastFrame", ()=>timeSinceLastFrame
);
parcelHelpers.export(exports, "currentFrameTime", ()=>currentFrameTime
);
var hasRAF = typeof window !== 'undefined' && window.requestAnimationFrame !== undefined;
var prevTime = 0;
var onNextFrame = hasRAF ? function(callback) {
    return window.requestAnimationFrame(callback);
} : function(callback) {
    var currentTime1 = Date.now();
    var timeToCall = Math.max(0, 16.7 - (currentTime1 - prevTime));
    prevTime = currentTime1 + timeToCall;
    setTimeout(function() {
        return callback(prevTime);
    }, timeToCall);
};
function createRenderStep(startRenderLoop1) {
    var functionsToRun = [];
    var functionsToRunNextFrame = [];
    var numThisFrame = 0;
    var isProcessing = false;
    var i = 0;
    return {
        cancel: function(callback) {
            var indexOfCallback = functionsToRunNextFrame.indexOf(callback);
            if (indexOfCallback !== -1) functionsToRunNextFrame.splice(indexOfCallback, 1);
        },
        process: function() {
            isProcessing = true;
            _a = [
                functionsToRunNextFrame,
                functionsToRun
            ], functionsToRun = _a[0], functionsToRunNextFrame = _a[1];
            functionsToRunNextFrame.length = 0;
            numThisFrame = functionsToRun.length;
            for(i = 0; i < numThisFrame; i++)functionsToRun[i]();
            isProcessing = false;
            var _a;
        },
        schedule: function(callback, immediate) {
            if (immediate === void 0) immediate = false;
            startRenderLoop1();
            var addToCurrentBuffer = immediate && isProcessing;
            var buffer = addToCurrentBuffer ? functionsToRun : functionsToRunNextFrame;
            if (buffer.indexOf(callback) === -1) {
                buffer.push(callback);
                if (addToCurrentBuffer) numThisFrame = functionsToRun.length;
            }
        }
    };
}
var HAS_PERFORMANCE_NOW = typeof performance !== 'undefined' && performance.now !== undefined;
var currentTime = HAS_PERFORMANCE_NOW ? function() {
    return performance.now();
} : function() {
    return Date.now();
};
var willRenderNextFrame = false;
var MAX_ELAPSED = 40;
var defaultElapsed = 16.7;
var useDefaultElapsed = true;
var currentFramestamp = 0;
var elapsed = 0;
function startRenderLoop() {
    if (willRenderNextFrame) return;
    willRenderNextFrame = true;
    useDefaultElapsed = true;
    onNextFrame(processFrame);
}
var frameStart = createRenderStep(startRenderLoop);
var frameUpdate = createRenderStep(startRenderLoop);
var frameRender = createRenderStep(startRenderLoop);
var frameEnd = createRenderStep(startRenderLoop);
function processFrame(framestamp) {
    willRenderNextFrame = false;
    elapsed = useDefaultElapsed ? defaultElapsed : Math.max(Math.min(framestamp - currentFramestamp, MAX_ELAPSED), 1);
    if (!useDefaultElapsed) defaultElapsed = elapsed;
    currentFramestamp = framestamp;
    frameStart.process();
    frameUpdate.process();
    frameRender.process();
    frameEnd.process();
    if (willRenderNextFrame) useDefaultElapsed = false;
}
var onFrameStart = frameStart.schedule;
var onFrameUpdate = frameUpdate.schedule;
var onFrameRender = frameRender.schedule;
var onFrameEnd = frameEnd.schedule;
var cancelOnFrameStart = frameStart.cancel;
var cancelOnFrameUpdate = frameUpdate.cancel;
var cancelOnFrameRender = frameRender.cancel;
var cancelOnFrameEnd = frameEnd.cancel;
var timeSinceLastFrame = function() {
    return elapsed;
};
var currentFrameTime = function() {
    return currentFramestamp;
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aaZD3"}],"aaZD3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"f8zMr":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getValueFromFunctionString", ()=>getValueFromFunctionString
);
parcelHelpers.export(exports, "splitCommaDelimited", ()=>splitCommaDelimited
);
parcelHelpers.export(exports, "splitColorValues", ()=>splitColorValues
);
parcelHelpers.export(exports, "number", ()=>number
);
parcelHelpers.export(exports, "alpha", ()=>alpha
);
parcelHelpers.export(exports, "degrees", ()=>degrees
);
parcelHelpers.export(exports, "percent", ()=>percent
);
parcelHelpers.export(exports, "px", ()=>px
);
parcelHelpers.export(exports, "scale", ()=>scale
);
parcelHelpers.export(exports, "complex", ()=>complex
);
parcelHelpers.export(exports, "rgbUnit", ()=>rgbUnit
);
parcelHelpers.export(exports, "rgba", ()=>rgba
);
parcelHelpers.export(exports, "hsla", ()=>hsla
);
parcelHelpers.export(exports, "hex", ()=>hex
);
parcelHelpers.export(exports, "color", ()=>color
);
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */ var __assign = Object.assign || function __assign(t) {
    for(var s, i = 1, n = arguments.length; i < n; i++){
        s = arguments[i];
        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};
var clamp = function(min, max) {
    return function(v) {
        return Math.max(Math.min(v, max), min);
    };
};
var contains = function(term) {
    return function(v) {
        return typeof v === 'string' && v.indexOf(term) !== -1;
    };
};
var createUnitType = function(unit) {
    return {
        test: contains(unit),
        parse: parseFloat,
        transform: function(v) {
            return "" + v + unit;
        }
    };
};
var isFirstChars = function(term) {
    return function(v) {
        return typeof v === 'string' && v.indexOf(term) === 0;
    };
};
var getValueFromFunctionString = function(value) {
    return value.substring(value.indexOf('(') + 1, value.lastIndexOf(')'));
};
var splitCommaDelimited = function(value) {
    return typeof value === 'string' ? value.split(/,\s*/) : [
        value
    ];
};
function splitColorValues(terms) {
    var numTerms = terms.length;
    return function(v) {
        var values = {};
        var valuesArray = splitCommaDelimited(getValueFromFunctionString(v));
        for(var i = 0; i < numTerms; i++)values[terms[i]] = valuesArray[i] !== undefined ? parseFloat(valuesArray[i]) : 1;
        return values;
    };
}
var number = {
    test: function(v) {
        return typeof v === 'number';
    },
    parse: parseFloat,
    transform: function(v) {
        return v;
    }
};
var alpha = __assign({}, number, {
    transform: clamp(0, 1)
});
var degrees = createUnitType('deg');
var percent = createUnitType('%');
var px = createUnitType('px');
var scale = __assign({}, number, {
    default: 1
});
var FLOAT_REGEX = /(-)?(\d[\d\.]*)/g;
var generateToken = function(token) {
    return '${' + token + '}';
};
var complex = {
    test: function(v) {
        var matches = v.match && v.match(FLOAT_REGEX);
        return matches !== undefined && matches.constructor === Array && matches.length > 1;
    },
    parse: function(v) {
        var parsedValue = {};
        v.match(FLOAT_REGEX).forEach(function(value, i) {
            return parsedValue[i] = parseFloat(value);
        });
        return parsedValue;
    },
    createTransformer: function(prop) {
        var counter = 0;
        var template = prop.replace(FLOAT_REGEX, function() {
            return generateToken("" + counter++);
        });
        return function(v) {
            var output = template;
            for(var key in v)if (v.hasOwnProperty(key)) output = output.replace(generateToken(key), v[key].toString());
            return output;
        };
    }
};
var clampRgbUnit = clamp(0, 255);
var rgbUnit = __assign({}, number, {
    transform: function(v) {
        return Math.round(clampRgbUnit(v));
    }
});
var rgbaTemplate = function(_a) {
    var red = _a.red, green = _a.green, blue = _a.blue, _b = _a.alpha, alpha1 = _b === void 0 ? 1 : _b;
    return "rgba(" + red + ", " + green + ", " + blue + ", " + alpha1 + ")";
};
var rgba = {
    test: isFirstChars('rgb'),
    parse: splitColorValues([
        'red',
        'green',
        'blue',
        'alpha'
    ]),
    transform: function(_a) {
        var red = _a.red, green = _a.green, blue = _a.blue, alpha2 = _a.alpha;
        return rgbaTemplate({
            red: rgbUnit.transform(red),
            green: rgbUnit.transform(green),
            blue: rgbUnit.transform(blue),
            alpha: alpha2
        });
    }
};
var hslaTemplate = function(_a) {
    var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, _b = _a.alpha, alpha3 = _b === void 0 ? 1 : _b;
    return "hsla(" + hue + ", " + saturation + ", " + lightness + ", " + alpha3 + ")";
};
var hsla = {
    test: isFirstChars('hsl'),
    parse: splitColorValues([
        'hue',
        'saturation',
        'lightness',
        'alpha'
    ]),
    transform: function(_a) {
        var hue = _a.hue, saturation = _a.saturation, lightness = _a.lightness, alpha4 = _a.alpha;
        return hslaTemplate({
            hue: Math.round(hue),
            saturation: percent.transform(saturation),
            lightness: percent.transform(lightness),
            alpha: alpha4
        });
    }
};
var hex = __assign({}, rgba, {
    test: isFirstChars('#'),
    parse: function(v) {
        var r, g, b;
        if (v.length > 4) {
            r = v.substr(1, 2);
            g = v.substr(3, 2);
            b = v.substr(5, 2);
        } else {
            r = v.substr(1, 1);
            g = v.substr(2, 1);
            b = v.substr(3, 1);
            r += r;
            g += g;
            b += b;
        }
        return {
            red: parseInt(r, 16),
            green: parseInt(g, 16),
            blue: parseInt(b, 16),
            alpha: 1
        };
    }
});
var isRgba = function(v) {
    return v.red !== undefined;
};
var isHsla = function(v) {
    return v.hue !== undefined;
};
var color = {
    test: function(v) {
        return rgba.test(v) || hsla.test(v) || hex.test(v);
    },
    parse: function(v) {
        if (rgba.test(v)) return rgba.parse(v);
        else if (hsla.test(v)) return hsla.parse(v);
        else if (hex.test(v)) return hex.parse(v);
        return v;
    },
    transform: function(v) {
        if (isRgba(v)) return rgba.transform(v);
        else if (isHsla(v)) return hsla.transform(v);
        return v;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"aaZD3"}],"f7P1Z":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var isNum = function(v) {
    return typeof v === 'number';
};
exports.isPoint = function(point) {
    return point.x !== undefined && point.y !== undefined;
};
exports.isPoint3D = function(point) {
    return point.z !== undefined;
};
var toDecimal = function(num, precision) {
    if (precision === void 0) precision = 2;
    precision = Math.pow(10, precision);
    return Math.round(num * precision) / precision;
};
var ZERO_POINT = {
    x: 0,
    y: 0,
    z: 0
};
var distance1D = function(a, b) {
    return Math.abs(a - b);
};
exports.angle = function(a, b) {
    if (b === void 0) b = ZERO_POINT;
    return exports.radiansToDegrees(Math.atan2(b.y - a.y, b.x - a.x));
};
exports.degreesToRadians = function(degrees) {
    return degrees * Math.PI / 180;
};
exports.dilate = function(a, b, dilation) {
    return a + (b - a) * dilation;
};
exports.distance = function(a, b) {
    if (b === void 0) b = ZERO_POINT;
    if (isNum(a) && isNum(b)) return distance1D(a, b);
    else if (exports.isPoint(a) && exports.isPoint(b)) {
        var xDelta = distance1D(a.x, b.x);
        var yDelta = distance1D(a.y, b.y);
        var zDelta = exports.isPoint3D(a) && exports.isPoint3D(b) ? distance1D(a.z, b.z) : 0;
        return Math.sqrt(Math.pow(xDelta, 2) + Math.pow(yDelta, 2) + Math.pow(zDelta, 2));
    }
    return 0;
};
exports.getProgressFromValue = function(from, to, value) {
    var toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
exports.getValueFromProgress = function(from, to, progress) {
    return -progress * from + progress * to + from;
};
exports.pointFromAngleAndDistance = function(origin, angle, distance) {
    angle = exports.degreesToRadians(angle);
    return {
        x: distance * Math.cos(angle) + origin.x,
        y: distance * Math.sin(angle) + origin.y
    };
};
exports.radiansToDegrees = function(radians) {
    return radians * 180 / Math.PI;
};
exports.smooth = function(newValue, oldValue, duration, smoothing) {
    if (smoothing === void 0) smoothing = 0;
    return toDecimal(oldValue + duration * (newValue - oldValue) / Math.max(smoothing, duration));
};
exports.speedPerFrame = function(xps, frameDuration) {
    return isNum(xps) ? xps / (1000 / frameDuration) : 0;
};
exports.speedPerSecond = function(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
};
exports.stepProgress = function(steps, progress) {
    var segment = 1 / (steps - 1);
    var target = 1 - 1 / steps;
    var progressOfTarget = Math.min(progress / target, 1);
    return Math.floor(progressOfTarget / segment) * segment;
};

},{}],"acmn2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var Observer = function() {
    function Observer1(_a, observer) {
        var middleware = _a.middleware, onComplete = _a.onComplete;
        var _this = this;
        this.isActive = true;
        this.update = function(v) {
            if (_this.observer.update) _this.updateObserver(v);
        };
        this.complete = function() {
            if (_this.observer.complete && _this.isActive) _this.observer.complete();
            if (_this.onComplete) _this.onComplete();
            _this.isActive = false;
        };
        this.error = function(err) {
            if (_this.observer.error && _this.isActive) _this.observer.error(err);
            _this.isActive = false;
        };
        this.observer = observer;
        this.updateObserver = function(v) {
            return observer.update(v);
        };
        this.onComplete = onComplete;
        if (observer.update && middleware && middleware.length) middleware.forEach(function(m) {
            return _this.updateObserver = m(_this.updateObserver, _this.complete);
        });
    }
    return Observer1;
}();
exports.Observer = Observer;
exports.default = function(observerCandidate, _a, onComplete) {
    var middleware = _a.middleware;
    if (typeof observerCandidate === 'function') return new Observer({
        middleware: middleware,
        onComplete: onComplete
    }, {
        update: observerCandidate
    });
    else return new Observer({
        middleware: middleware,
        onComplete: onComplete
    }, observerCandidate);
};

},{}],"ixm3q":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _1 = require("./");
var Multicast = function(_super) {
    __extends(Multicast1, _super);
    function Multicast1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Multicast1.prototype.create = function(props) {
        return new Multicast1(props);
    };
    return Multicast1;
}(_1.BaseMulticast);
exports.Multicast = Multicast;
exports.default = function() {
    return new Multicast();
};

},{"./":"n4sxQ"}],"n4sxQ":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
var chainable_1 = require("../chainable");
var observer_1 = require("../observer");
var BaseMulticast = function(_super) {
    __extends(BaseMulticast1, _super);
    function BaseMulticast1() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.subscribers = [];
        return _this;
    }
    BaseMulticast1.prototype.complete = function() {
        this.subscribers.forEach(function(subscriber) {
            return subscriber.complete();
        });
    };
    BaseMulticast1.prototype.error = function(err) {
        this.subscribers.forEach(function(subscriber) {
            return subscriber.error(err);
        });
    };
    BaseMulticast1.prototype.update = function(v) {
        for(var i = 0; i < this.subscribers.length; i++)this.subscribers[i].update(v);
    };
    BaseMulticast1.prototype.subscribe = function(observerCandidate) {
        var _this = this;
        var observer = observer_1.default(observerCandidate, this.props);
        this.subscribers.push(observer);
        var subscription = {
            unsubscribe: function() {
                var index = _this.subscribers.indexOf(observer);
                if (index !== -1) _this.subscribers.splice(index, 1);
            }
        };
        return subscription;
    };
    BaseMulticast1.prototype.stop = function() {
        if (this.parent) this.parent.stop();
    };
    BaseMulticast1.prototype.registerParent = function(subscription) {
        this.stop();
        this.parent = subscription;
    };
    return BaseMulticast1;
}(chainable_1.default);
exports.BaseMulticast = BaseMulticast;

},{"../chainable":"1X8zz","../observer":"acmn2"}],"7YOi7":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (b.hasOwnProperty(p)) d[p] = b[p];
    };
    return function(d, b) {
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
var framesync_1 = require("framesync");
var calc_1 = require("../calc");
var _1 = require("./");
var isValueList = function(v) {
    return Array.isArray(v);
};
var isSingleValue = function(v) {
    var typeOfV = typeof v;
    return typeOfV === 'string' || typeOfV === 'number';
};
var ValueReaction = function(_super) {
    __extends(ValueReaction1, _super);
    function ValueReaction1(props) {
        var _this = _super.call(this, props) || this;
        _this.scheduleVelocityCheck = function() {
            return framesync_1.onFrameEnd(_this.velocityCheck);
        };
        _this.velocityCheck = function() {
            if (framesync_1.currentFrameTime() !== _this.lastUpdated) _this.prev = _this.current;
        };
        _this.prev = _this.current = props.value || 0;
        if (isSingleValue(_this.current)) {
            _this.updateCurrent = function(v) {
                return _this.current = v;
            };
            _this.getVelocityOfCurrent = function() {
                return _this.getSingleVelocity(_this.current, _this.prev);
            };
        } else if (isValueList(_this.current)) {
            _this.updateCurrent = function(v) {
                return _this.current = v.slice();
            };
            _this.getVelocityOfCurrent = function() {
                return _this.getListVelocity();
            };
        } else {
            _this.updateCurrent = function(v) {
                _this.current = {};
                for(var key in v)if (v.hasOwnProperty(key)) _this.current[key] = v[key];
            };
            _this.getVelocityOfCurrent = function() {
                return _this.getMapVelocity();
            };
        }
        if (props.initialSubscription) _this.subscribe(props.initialSubscription);
        return _this;
    }
    ValueReaction1.prototype.create = function(props) {
        return new ValueReaction1(props);
    };
    ValueReaction1.prototype.get = function() {
        return this.current;
    };
    ValueReaction1.prototype.getVelocity = function() {
        return this.getVelocityOfCurrent();
    };
    ValueReaction1.prototype.update = function(v) {
        _super.prototype.update.call(this, v);
        this.prev = this.current;
        this.updateCurrent(v);
        this.timeDelta = framesync_1.timeSinceLastFrame();
        this.lastUpdated = framesync_1.currentFrameTime();
        framesync_1.onFrameEnd(this.scheduleVelocityCheck);
    };
    ValueReaction1.prototype.subscribe = function(observerCandidate) {
        var sub = _super.prototype.subscribe.call(this, observerCandidate);
        this.update(this.current);
        return sub;
    };
    ValueReaction1.prototype.getSingleVelocity = function(current, prev) {
        return typeof current === 'number' && typeof prev === 'number' ? calc_1.speedPerSecond(current - prev, this.timeDelta) : calc_1.speedPerSecond(parseFloat(current) - parseFloat(prev), this.timeDelta) || 0;
    };
    ValueReaction1.prototype.getListVelocity = function() {
        var _this = this;
        return this.current.map(function(c, i) {
            return _this.getSingleVelocity(c, _this.prev[i]);
        });
    };
    ValueReaction1.prototype.getMapVelocity = function() {
        var velocity = {};
        for(var key in this.current)if (this.current.hasOwnProperty(key)) velocity[key] = this.getSingleVelocity(this.current[key], this.prev[key]);
        return velocity;
    };
    return ValueReaction1;
}(_1.BaseMulticast);
exports.ValueReaction = ValueReaction;
exports.default = function(value, initialSubscription) {
    return new ValueReaction({
        value: value,
        initialSubscription: initialSubscription
    });
};

},{"framesync":"fmg1O","../calc":"f7P1Z","./":"n4sxQ"}],"xcUu6":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var framesync_1 = require("framesync");
var style_value_types_1 = require("style-value-types");
var action_1 = require("../../action");
var vector_1 = require("../../action/vector");
var every_frame_1 = require("../every-frame");
var decay = function(props) {
    if (props === void 0) props = {};
    return action_1.default(function(_a) {
        var complete = _a.complete, update = _a.update;
        var _b = props.velocity, velocity = _b === void 0 ? 0 : _b, _c = props.from, from = _c === void 0 ? 0 : _c, _d = props.power, power = _d === void 0 ? 0.8 : _d, _e = props.timeConstant, timeConstant = _e === void 0 ? 350 : _e, _f = props.restDelta, restDelta = _f === void 0 ? 0.5 : _f, modifyTarget = props.modifyTarget;
        var elapsed = 0;
        var amplitude = power * velocity;
        var idealTarget = Math.round(from + amplitude);
        var target = typeof modifyTarget === 'undefined' ? idealTarget : modifyTarget(idealTarget);
        var timer = every_frame_1.default().start(function() {
            elapsed += framesync_1.timeSinceLastFrame();
            var delta = -amplitude * Math.exp(-elapsed / timeConstant);
            var isMoving = delta > restDelta || delta < -restDelta;
            var current = isMoving ? target + delta : target;
            update(current);
            if (!isMoving) {
                timer.stop();
                complete();
            }
        });
        return {
            stop: function() {
                return timer.stop();
            }
        };
    });
};
exports.default = vector_1.default(decay, {
    from: style_value_types_1.number.test,
    modifyTarget: function(func) {
        return typeof func === 'function';
    },
    velocity: style_value_types_1.number.test
});

},{"framesync":"fmg1O","style-value-types":"f8zMr","../../action":"g4FZU","../../action/vector":"3y3Lv","../every-frame":"gwg5J"}],"3y3Lv":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || Object.assign || function(t) {
    for(var s, i = 1, n = arguments.length; i < n; i++){
        s = arguments[i];
        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var style_value_types_1 = require("style-value-types");
var composite_1 = require("../compositors/composite");
var parallel_1 = require("../compositors/parallel");
var transformers_1 = require("../transformers");
var isColor = style_value_types_1.color.test;
var convertToColorAction = function(init, props) {
    return typeof props.from === 'string' && isColor(props.from) && typeof props.to === 'string' && isColor(props.to) ? init(__assign({}, props, {
        from: 0,
        to: 1
    })).pipe(transformers_1.blendColor(props.from, props.to), style_value_types_1.color.transform) : init(props);
};
var createVectorTests = function(typeTests) {
    var testNames = Object.keys(typeTests);
    return {
        getVectorKeys: function(props) {
            return testNames.reduce(function(vectorKeys, key) {
                if (props[key] !== undefined && !typeTests[key](props[key])) vectorKeys.push(key);
                return vectorKeys;
            }, []);
        },
        test: function(props) {
            return props && testNames.reduce(function(isVector, key) {
                return isVector || props[key] !== undefined && !typeTests[key](props[key]);
            }, false);
        }
    };
};
var reduceArrayValue = function(i) {
    return function(props, key) {
        props[key] = props[key][i];
        return props;
    };
};
var createArrayVector = function(init, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionList = props[firstVectorKey].map(function(v, i) {
        return convertToColorAction(init, vectorKeys.reduce(reduceArrayValue(i), __assign({}, props)));
    });
    return parallel_1.default.apply(void 0, actionList);
};
var reduceObjectValue = function(key) {
    return function(props, propKey) {
        props[propKey] = props[propKey][key];
        return props;
    };
};
var createObjectVector = function(init, props, vectorKeys) {
    var firstVectorKey = vectorKeys[0];
    var actionMap = Object.keys(props[firstVectorKey]).reduce(function(map, key) {
        map[key] = convertToColorAction(init, vectorKeys.reduce(reduceObjectValue(key), __assign({}, props)));
        return map;
    }, {});
    return composite_1.default(actionMap);
};
var createColorVector = function(init, props) {
    return convertToColorAction(init, props);
};
var vectorAction = function(init, typeTests) {
    var _a = createVectorTests(typeTests), test = _a.test, getVectorKeys = _a.getVectorKeys;
    return function(props) {
        var isVector = test(props);
        if (!isVector) return init(props);
        var vectorKeys = getVectorKeys(props);
        var testKey = vectorKeys[0];
        var testProp = props[testKey];
        if (Array.isArray(testProp)) return createArrayVector(init, props, vectorKeys);
        else if (typeof testProp === 'string' && isColor(testProp)) return createColorVector(init, props, vectorKeys);
        else return createObjectVector(init, props, vectorKeys);
    };
};
exports.default = vectorAction;

},{"style-value-types":"f8zMr","../compositors/composite":"4xnDf","../compositors/parallel":"lV6xL","../transformers":"edI4z"}],"4xnDf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var multi_1 = require("./multi");
var composite = multi_1.default({
    getOutput: function() {
        return {};
    },
    getCount: function(subs) {
        return Object.keys(subs).length;
    },
    getFirst: function(subs) {
        return subs[Object.keys(subs)[0]];
    },
    mapApi: function(subs, methodName) {
        return function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return Object.keys(subs).reduce(function(output, propKey) {
                if (subs[propKey][methodName]) args[0] && args[0][propKey] !== undefined ? output[propKey] = subs[propKey][methodName](args[0][propKey]) : output[propKey] = (_a = subs[propKey])[methodName].apply(_a, args);
                var _a;
                return output;
            }, {});
        };
    },
    setProp: function(output, name, v) {
        return output[name] = v;
    },
    startActions: function(actions, starter) {
        return Object.keys(actions).reduce(function(subs, key) {
            subs[key] = starter(actions[key], key);
            return subs;
        }, {});
    }
});
exports.default = composite;

},{"./multi":"9TPVU"}],"9TPVU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var framesync_1 = require("framesync");
var action_1 = require("../action");
var multi = function(_a1) {
    var getCount = _a1.getCount, getFirst = _a1.getFirst, getOutput = _a1.getOutput, mapApi = _a1.mapApi, setProp = _a1.setProp, startActions = _a1.startActions;
    return function(actions) {
        return action_1.default(function(_a) {
            var update = _a.update, complete = _a.complete, error = _a.error;
            var numActions = getCount(actions);
            var output = getOutput();
            var updateOutput = function() {
                return update(output);
            };
            var numCompletedActions = 0;
            var subs = startActions(actions, function(a, name) {
                var hasCompleted = false;
                return a.start({
                    complete: function() {
                        if (!hasCompleted) {
                            hasCompleted = true;
                            numCompletedActions++;
                            if (numCompletedActions === numActions) framesync_1.onFrameUpdate(complete);
                        }
                    },
                    error: error,
                    update: function(v) {
                        setProp(output, name, v);
                        framesync_1.onFrameUpdate(updateOutput, true);
                    }
                });
            });
            return Object.keys(getFirst(subs)).reduce(function(api, methodName) {
                api[methodName] = mapApi(subs, methodName);
                return api;
            }, {});
        });
    };
};
exports.default = multi;

},{"framesync":"fmg1O","../action":"g4FZU"}],"lV6xL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var multi_1 = require("./multi");
var parallel = multi_1.default({
    getOutput: function() {
        return [];
    },
    getCount: function(subs) {
        return subs.length;
    },
    getFirst: function(subs) {
        return subs[0];
    },
    mapApi: function(subs, methodName) {
        return function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return subs.map(function(sub, i) {
                if (sub[methodName]) return Array.isArray(args[0]) ? sub[methodName](args[0][i]) : sub[methodName].apply(sub, args);
            });
        };
    },
    setProp: function(output, name, v) {
        return output[name] = v;
    },
    startActions: function(actions, starter) {
        return actions.map(function(action, i) {
            return starter(action, i);
        });
    }
});
exports.default = function() {
    var actions = [];
    for(var _i = 0; _i < arguments.length; _i++)actions[_i] = arguments[_i];
    return parallel(actions);
};

},{"./multi":"9TPVU"}],"gwg5J":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var framesync_1 = require("framesync");
var action_1 = require("../../action");
var frame = function() {
    return action_1.default(function(_a) {
        var update = _a.update;
        var isActive = true;
        var startTime = framesync_1.currentTime();
        var nextFrame = function() {
            if (!isActive) return;
            update(Math.max(framesync_1.currentFrameTime() - startTime, 0));
            framesync_1.onFrameUpdate(nextFrame);
        };
        framesync_1.onFrameUpdate(nextFrame);
        return {
            stop: function() {
                return isActive = false;
            }
        };
    });
};
exports.default = frame;

},{"framesync":"fmg1O","../../action":"g4FZU"}],"kOPxN":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || Object.assign || function(t) {
    for(var s, i = 1, n = arguments.length; i < n; i++){
        s = arguments[i];
        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var calc_1 = require("../../calc");
var easing_1 = require("../../easing");
var transformers_1 = require("../../transformers");
var tween_1 = require("../tween");
var scrubber_1 = require("../tween/scrubber");
var clampProgress = transformers_1.clamp(0, 1);
var defaultEasings = function(values, easing) {
    return values.map(function() {
        return easing || easing_1.easeOut;
    }).splice(0, values.length - 1);
};
var defaultTimings = function(values) {
    var numValues = values.length;
    return values.map(function(value, i) {
        return i !== 0 ? i / (numValues - 1) : 0;
    });
};
var interpolateScrubbers = function(input, scrubbers, update) {
    var rangeLength = input.length;
    var finalInputIndex = rangeLength - 1;
    var finalScrubberIndex = finalInputIndex - 1;
    var subs = scrubbers.map(function(scrub) {
        return scrub.start(update);
    });
    return function(v) {
        if (v <= input[0]) subs[0].seek(0);
        if (v >= input[finalInputIndex]) subs[finalScrubberIndex].seek(1);
        var i = 1;
        for(; i < rangeLength; i++){
            if (input[i] > v || i === finalInputIndex) break;
        }
        var progressInRange = calc_1.getProgressFromValue(input[i - 1], input[i], v);
        subs[i - 1].seek(clampProgress(progressInRange));
    };
};
var keyframes = function(_a) {
    var easings = _a.easings, _b = _a.ease, ease = _b === void 0 ? easing_1.linear : _b, times = _a.times, values = _a.values, tweenProps = __rest(_a, [
        "easings",
        "ease",
        "times",
        "values"
    ]);
    easings = Array.isArray(easings) ? easings : defaultEasings(values, easings);
    times = times || defaultTimings(values);
    var scrubbers = easings.map(function(easing, i) {
        return scrubber_1.default({
            from: values[i],
            to: values[i + 1],
            ease: easing
        });
    });
    return tween_1.default(__assign({}, tweenProps, {
        ease: ease
    })).applyMiddleware(function(update) {
        return interpolateScrubbers(times, scrubbers, update);
    });
};
exports.default = keyframes;

},{"../../calc":"f7P1Z","../../easing":"5mDgG","../../transformers":"edI4z","../tween":"99d5t","../tween/scrubber":"39W5u"}],"5mDgG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var DEFAULT_OVERSHOOT_STRENGTH = 1.525;
exports.createReversedEasing = function(easing) {
    return function(p) {
        return 1 - easing(1 - p);
    };
};
exports.createMirroredEasing = function(easing) {
    return function(p) {
        return p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
    };
};
exports.linear = function(p) {
    return p;
};
exports.createExpoIn = function(power) {
    return function(p) {
        return Math.pow(p, power);
    };
};
exports.easeIn = exports.createExpoIn(2);
exports.easeOut = exports.createReversedEasing(exports.easeIn);
exports.easeInOut = exports.createMirroredEasing(exports.easeIn);
exports.circIn = function(p) {
    return 1 - Math.sin(Math.acos(p));
};
exports.circOut = exports.createReversedEasing(exports.circIn);
exports.circInOut = exports.createMirroredEasing(exports.circOut);
exports.createBackIn = function(power) {
    return function(p) {
        return p * p * ((power + 1) * p - power);
    };
};
exports.backIn = exports.createBackIn(DEFAULT_OVERSHOOT_STRENGTH);
exports.backOut = exports.createReversedEasing(exports.backIn);
exports.backInOut = exports.createMirroredEasing(exports.backIn);
exports.createAnticipateEasing = function(power) {
    var backEasing = exports.createBackIn(power);
    return function(p) {
        return (p *= 2) < 1 ? 0.5 * backEasing(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
    };
};
exports.anticipate = exports.createAnticipateEasing(DEFAULT_OVERSHOOT_STRENGTH);
var NEWTON_ITERATIONS = 8;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var K_SPLINE_TABLE_SIZE = 11;
var K_SAMPLE_STEP_SIZE = 1 / (K_SPLINE_TABLE_SIZE - 1);
var FLOAT_32_SUPPORTED = typeof Float32Array !== 'undefined';
var a = function(a1, a2) {
    return 1 - 3 * a2 + 3 * a1;
};
var b = function(a1, a2) {
    return 3 * a2 - 6 * a1;
};
var c = function(a1) {
    return 3 * a1;
};
var getSlope = function(t, a1, a2) {
    return 3 * a(a1, a2) * t * t + 2 * b(a1, a2) * t + c(a1);
};
var calcBezier = function(t, a1, a2) {
    return ((a(a1, a2) * t + b(a1, a2)) * t + c(a1)) * t;
};
function cubicBezier(mX1, mY1, mX2, mY2) {
    var sampleValues = FLOAT_32_SUPPORTED ? new Float32Array(K_SPLINE_TABLE_SIZE) : new Array(K_SPLINE_TABLE_SIZE);
    var _precomputed = false;
    var binarySubdivide = function(aX, aA, aB) {
        var i = 0;
        var currentX;
        var currentT;
        do {
            currentT = aA + (aB - aA) / 2;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0) aB = currentT;
            else aA = currentT;
        }while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS)
        return currentT;
    };
    var newtonRaphsonIterate = function(aX, aGuessT) {
        var i = 0;
        var currentSlope = 0;
        var currentX;
        for(; i < NEWTON_ITERATIONS; ++i){
            currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0) return aGuessT;
            currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    };
    var calcSampleValues = function() {
        for(var i = 0; i < K_SPLINE_TABLE_SIZE; ++i)sampleValues[i] = calcBezier(i * K_SAMPLE_STEP_SIZE, mX1, mX2);
    };
    var getTForX = function(aX) {
        var intervalStart = 0;
        var currentSample = 1;
        var lastSample = K_SPLINE_TABLE_SIZE - 1;
        var dist = 0;
        var guessForT = 0;
        var initialSlope = 0;
        for(; currentSample != lastSample && sampleValues[currentSample] <= aX; ++currentSample)intervalStart += K_SAMPLE_STEP_SIZE;
        --currentSample;
        dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        guessForT = intervalStart + dist * K_SAMPLE_STEP_SIZE;
        initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) return newtonRaphsonIterate(aX, guessForT);
        else if (initialSlope === 0) return guessForT;
        else return binarySubdivide(aX, intervalStart, intervalStart + K_SAMPLE_STEP_SIZE);
    };
    var precompute = function() {
        _precomputed = true;
        if (mX1 != mY1 || mX2 != mY2) calcSampleValues();
    };
    var resolver = function(aX) {
        var returnValue;
        if (!_precomputed) precompute();
        if (mX1 === mY1 && mX2 === mY2) returnValue = aX;
        else if (aX === 0) returnValue = 0;
        else if (aX === 1) returnValue = 1;
        else returnValue = calcBezier(getTForX(aX), mY1, mY2);
        return returnValue;
    };
    return resolver;
}
exports.cubicBezier = cubicBezier;

},{}],"99d5t":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var framesync_1 = require("framesync");
var action_1 = require("../../action");
var calc_1 = require("../../calc");
var easing_1 = require("../../easing");
var transformers_1 = require("../../transformers");
var every_frame_1 = require("../every-frame");
var scrubber_1 = require("./scrubber");
var clampProgress = transformers_1.clamp(0, 1);
var tween = function(props) {
    if (props === void 0) props = {};
    return action_1.default(function(_a1) {
        var update = _a1.update, complete = _a1.complete;
        var _b = props.duration, duration = _b === void 0 ? 300 : _b, _c = props.ease, ease = _c === void 0 ? easing_1.easeOut : _c, _d = props.flip, flip = _d === void 0 ? 0 : _d, _e = props.loop, loop = _e === void 0 ? 0 : _e, _f = props.yoyo, yoyo = _f === void 0 ? 0 : _f;
        var _g = props.from, from = _g === void 0 ? 0 : _g, _h = props.to, to = _h === void 0 ? 1 : _h, _j = props.elapsed, elapsed = _j === void 0 ? 0 : _j, _k = props.playDirection, playDirection = _k === void 0 ? 1 : _k, _l = props.flipCount, flipCount = _l === void 0 ? 0 : _l, _m = props.yoyoCount, yoyoCount = _m === void 0 ? 0 : _m, _o = props.loopCount, loopCount = _o === void 0 ? 0 : _o;
        var playhead = scrubber_1.default({
            from: from,
            to: to,
            ease: ease
        }).start(update);
        var progress = 0;
        var tweenTimer;
        var isActive = false;
        var reverseTween = function() {
            return playDirection *= -1;
        };
        var isTweenComplete = function() {
            var isComplete = playDirection === 1 ? isActive && elapsed >= duration : isActive && elapsed <= 0;
            if (!isComplete) return false;
            if (isComplete && !loop && !flip && !yoyo) return true;
            var isStepTaken = false;
            if (loop && loopCount < loop) {
                elapsed = 0;
                loopCount++;
                isStepTaken = true;
            } else if (flip && flipCount < flip) {
                elapsed = duration - elapsed;
                _a = [
                    to,
                    from
                ], from = _a[0], to = _a[1];
                playhead = scrubber_1.default({
                    from: from,
                    to: to,
                    ease: ease
                }).start(update);
                flipCount++;
                isStepTaken = true;
            } else if (yoyo && yoyoCount < yoyo) {
                reverseTween();
                yoyoCount++;
                isStepTaken = true;
            }
            var _a;
            return !isStepTaken;
        };
        var updateTween = function() {
            progress = clampProgress(calc_1.getProgressFromValue(0, duration, elapsed));
            playhead.seek(progress);
        };
        var startTimer = function() {
            isActive = true;
            tweenTimer = every_frame_1.default().start(function() {
                elapsed += framesync_1.timeSinceLastFrame() * playDirection;
                updateTween();
                if (isTweenComplete() && complete) {
                    tweenTimer.stop();
                    framesync_1.onFrameUpdate(complete, true);
                }
            });
        };
        var stopTimer = function() {
            isActive = false;
            if (tweenTimer) tweenTimer.stop();
        };
        startTimer();
        return {
            isActive: function() {
                return isActive;
            },
            getElapsed: function() {
                return transformers_1.clamp(0, duration)(elapsed);
            },
            getProgress: function() {
                return progress;
            },
            stop: function() {
                stopTimer();
            },
            pause: function() {
                stopTimer();
                return this;
            },
            resume: function() {
                startTimer();
                return this;
            },
            seek: function(newProgress) {
                elapsed = calc_1.getValueFromProgress(0, duration, newProgress);
                framesync_1.onFrameUpdate(updateTween, true);
                return this;
            },
            reverse: function() {
                reverseTween();
                return this;
            }
        };
    });
};
exports.default = tween;

},{"framesync":"fmg1O","../../action":"g4FZU","../../calc":"f7P1Z","../../easing":"5mDgG","../../transformers":"edI4z","../every-frame":"gwg5J","./scrubber":"39W5u"}],"39W5u":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var style_value_types_1 = require("style-value-types");
var action_1 = require("../../action");
var vector_1 = require("../../action/vector");
var calc_1 = require("../../calc");
var easing_1 = require("../../easing");
var scrubber = function(_a1) {
    var _b = _a1.from, from = _b === void 0 ? 0 : _b, _c = _a1.to, to = _c === void 0 ? 1 : _c, _d = _a1.ease, ease = _d === void 0 ? easing_1.linear : _d;
    return action_1.default(function(_a) {
        var update = _a.update;
        return {
            seek: function(progress) {
                return update(progress);
            }
        };
    }).pipe(ease, function(v) {
        return calc_1.getValueFromProgress(from, to, v);
    });
};
exports.default = vector_1.default(scrubber, {
    ease: function(func) {
        return typeof func === 'function';
    },
    from: style_value_types_1.number.test,
    to: style_value_types_1.number.test
});

},{"style-value-types":"f8zMr","../../action":"g4FZU","../../action/vector":"3y3Lv","../../calc":"f7P1Z","../../easing":"5mDgG"}],"e3vAD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var framesync_1 = require("framesync");
var style_value_types_1 = require("style-value-types");
var action_1 = require("../../action");
var vector_1 = require("../../action/vector");
var calc_1 = require("../../calc");
var every_frame_1 = require("../every-frame");
var physics = function(props) {
    if (props === void 0) props = {};
    return action_1.default(function(_a) {
        var complete = _a.complete, update = _a.update;
        var _b = props.acceleration, acceleration = _b === void 0 ? 0 : _b, _c = props.friction, friction = _c === void 0 ? 0 : _c, _d = props.velocity, velocity = _d === void 0 ? 0 : _d, springStrength = props.springStrength, to = props.to;
        var _e = props.restSpeed, restSpeed = _e === void 0 ? 0.001 : _e, _f = props.from, from = _f === void 0 ? 0 : _f;
        var current = from;
        var timer = every_frame_1.default().start(function() {
            var elapsed = Math.max(framesync_1.timeSinceLastFrame(), 16);
            if (acceleration) velocity += calc_1.speedPerFrame(acceleration, elapsed);
            if (friction) velocity *= Math.pow(1 - friction, elapsed / 100);
            if (springStrength !== undefined && to !== undefined) {
                var distanceToTarget = to - current;
                velocity += distanceToTarget * calc_1.speedPerFrame(springStrength, elapsed);
            }
            current += calc_1.speedPerFrame(velocity, elapsed);
            update(current);
            var isComplete = restSpeed !== false && (!velocity || Math.abs(velocity) <= restSpeed);
            if (isComplete) {
                timer.stop();
                complete();
            }
        });
        return {
            set: function(v) {
                current = v;
                return this;
            },
            setAcceleration: function(v) {
                acceleration = v;
                return this;
            },
            setFriction: function(v) {
                friction = v;
                return this;
            },
            setSpringStrength: function(v) {
                springStrength = v;
                return this;
            },
            setSpringTarget: function(v) {
                to = v;
                return this;
            },
            setVelocity: function(v) {
                velocity = v;
                return this;
            },
            stop: function() {
                return timer.stop();
            }
        };
    });
};
exports.default = vector_1.default(physics, {
    acceleration: style_value_types_1.number.test,
    friction: style_value_types_1.number.test,
    velocity: style_value_types_1.number.test,
    from: style_value_types_1.number.test,
    to: style_value_types_1.number.test,
    springStrength: style_value_types_1.number.test
});

},{"framesync":"fmg1O","style-value-types":"f8zMr","../../action":"g4FZU","../../action/vector":"3y3Lv","../../calc":"f7P1Z","../every-frame":"gwg5J"}],"aQ7KG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var framesync_1 = require("framesync");
var style_value_types_1 = require("style-value-types");
var action_1 = require("../../action");
var vector_1 = require("../../action/vector");
var calc_1 = require("../../calc");
var every_frame_1 = require("../every-frame");
var spring = function(props) {
    if (props === void 0) props = {};
    return action_1.default(function(_a) {
        var update = _a.update, complete = _a.complete;
        var _b = props.velocity, velocity = _b === void 0 ? 0 : _b;
        var _c = props.from, from = _c === void 0 ? 0 : _c, _d = props.to, to = _d === void 0 ? 0 : _d, _e = props.stiffness, stiffness = _e === void 0 ? 100 : _e, _f = props.damping, damping = _f === void 0 ? 10 : _f, _g = props.mass, mass = _g === void 0 ? 1 : _g, _h = props.restSpeed, restSpeed = _h === void 0 ? 0.01 : _h, _j = props.restDelta, restDelta = _j === void 0 ? 0.01 : _j;
        var initialVelocity = velocity ? -(velocity / 1000) : 0;
        var t = 0;
        var delta = to - from;
        var position = from;
        var prevPosition = position;
        var springTimer = every_frame_1.default().start(function() {
            var timeDelta = framesync_1.timeSinceLastFrame();
            t += timeDelta;
            var dampingRatio = damping / (2 * Math.sqrt(stiffness * mass));
            var angularFreq = Math.sqrt(stiffness / mass) / 1000;
            prevPosition = position;
            if (dampingRatio < 1) {
                var envelope = Math.exp(-dampingRatio * angularFreq * t);
                var expoDecay = angularFreq * Math.sqrt(1 - dampingRatio * dampingRatio);
                position = to - envelope * ((initialVelocity + dampingRatio * angularFreq * delta) / expoDecay * Math.sin(expoDecay * t) + delta * Math.cos(expoDecay * t));
            } else {
                var envelope = Math.exp(-angularFreq * t);
                position = to - envelope * (delta + (initialVelocity + angularFreq * delta) * t);
            }
            velocity = calc_1.speedPerSecond(position - prevPosition, timeDelta);
            var isBelowVelocityThreshold = Math.abs(velocity) <= restSpeed;
            var isBelowDisplacementThreshold = Math.abs(to - position) <= restDelta;
            if (isBelowVelocityThreshold && isBelowDisplacementThreshold) {
                position = to;
                update(position);
                springTimer.stop();
                complete();
            } else update(position);
        });
        return {
            stop: function() {
                return springTimer.stop();
            }
        };
    });
};
exports.default = vector_1.default(spring, {
    from: style_value_types_1.number.test,
    to: style_value_types_1.number.test,
    stiffness: style_value_types_1.number.test,
    damping: style_value_types_1.number.test,
    mass: style_value_types_1.number.test,
    velocity: style_value_types_1.number.test
});

},{"framesync":"fmg1O","style-value-types":"f8zMr","../../action":"g4FZU","../../action/vector":"3y3Lv","../../calc":"f7P1Z","../every-frame":"gwg5J"}],"hvkfN":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || Object.assign || function(t) {
    for(var s, i = 1, n = arguments.length; i < n; i++){
        s = arguments[i];
        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var keyframes_1 = require("../keyframes");
var easing_1 = require("../../easing");
var composite_1 = require("../../compositors/composite");
var DEFAULT_DURATION = 300;
var flattenTimings = function(instructions) {
    var flatInstructions = [];
    var lastArg = instructions[instructions.length - 1];
    var isStaggered = typeof lastArg === 'number';
    var staggerDelay = isStaggered ? lastArg : 0;
    var segments = isStaggered ? instructions.slice(0, -1) : instructions;
    var numSegments = segments.length;
    var offset = 0;
    segments.forEach(function(item, i) {
        flatInstructions.push(item);
        if (i !== numSegments - 1) {
            var duration = item.duration || DEFAULT_DURATION;
            offset += staggerDelay;
            flatInstructions.push("-" + (duration - offset));
        }
    });
    return flatInstructions;
};
var flattenArrayInstructions = function(instructions, instruction) {
    Array.isArray(instruction) ? instructions.push.apply(instructions, flattenTimings(instruction)) : instructions.push(instruction);
    return instructions;
};
var convertDefToProps = function(props, def, i) {
    var duration = props.duration, easings = props.easings, times = props.times, values = props.values;
    var numValues = values.length;
    var prevTimeTo = times[numValues - 1];
    var timeFrom = def.at === 0 ? 0 : def.at / duration;
    var timeTo = (def.at + def.duration) / duration;
    if (i === 0) {
        values.push(def.from);
        times.push(timeFrom);
    } else {
        if (prevTimeTo !== timeFrom) {
            if (def.from !== undefined) {
                values.push(values[numValues - 1]);
                times.push(timeFrom);
                easings.push(easing_1.linear);
            }
            var from = def.from !== undefined ? def.from : values[numValues - 1];
            values.push(from);
            times.push(timeFrom);
            easings.push(easing_1.linear);
        } else if (def.from !== undefined) {
            values.push(def.from);
            times.push(timeFrom);
            easings.push(easing_1.linear);
        }
    }
    values.push(def.to);
    times.push(timeTo);
    easings.push(def.ease || easing_1.easeInOut);
    return props;
};
var timeline = function(instructions, _a) {
    var _b = _a === void 0 ? {} : _a, duration = _b.duration, elapsed = _b.elapsed, ease = _b.ease, loop = _b.loop, flip = _b.flip, yoyo = _b.yoyo;
    var playhead = 0;
    var calculatedDuration = 0;
    var flatInstructions = instructions.reduce(flattenArrayInstructions, []);
    var animationDefs = [];
    flatInstructions.forEach(function(instruction) {
        if (typeof instruction === 'string') playhead += parseFloat(instruction);
        else if (typeof instruction === 'number') playhead = instruction;
        else {
            var def = __assign({}, instruction, {
                at: playhead
            });
            def.duration = def.duration === undefined ? DEFAULT_DURATION : def.duration;
            animationDefs.push(def);
            playhead += def.duration;
            calculatedDuration = Math.max(calculatedDuration, def.at + def.duration);
        }
    });
    var tracks = {};
    var numDefs = animationDefs.length;
    for(var i = 0; i < numDefs; i++){
        var def1 = animationDefs[i];
        var track = def1.track;
        if (track === undefined) throw new Error('No track defined');
        if (!tracks.hasOwnProperty(track)) tracks[track] = [];
        tracks[track].push(def1);
    }
    var trackKeyframes = {};
    for(var key in tracks)if (tracks.hasOwnProperty(key)) {
        var keyframeProps = tracks[key].reduce(convertDefToProps, {
            duration: calculatedDuration,
            easings: [],
            times: [],
            values: []
        });
        trackKeyframes[key] = keyframes_1.default(__assign({}, keyframeProps, {
            duration: duration || calculatedDuration,
            ease: ease,
            elapsed: elapsed,
            loop: loop,
            yoyo: yoyo,
            flip: flip
        }));
    }
    return composite_1.default(trackKeyframes);
};
exports.default = timeline;

},{"../keyframes":"kOPxN","../../easing":"5mDgG","../../compositors/composite":"4xnDf"}],"jhYhP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var action_1 = require("../../action");
var listen = function(element, events, options) {
    return action_1.default(function(_a) {
        var update = _a.update;
        var eventNames = events.split(' ').map(function(eventName) {
            element.addEventListener(eventName, update, options);
            return eventName;
        });
        return {
            stop: function() {
                return eventNames.forEach(function(eventName) {
                    return element.removeEventListener(eventName, update, options);
                });
            }
        };
    });
};
exports.default = listen;

},{"../../action":"g4FZU"}],"gQKGh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var framesync_1 = require("framesync");
var action_1 = require("../../action");
var calc_1 = require("../../calc");
var listen_1 = require("../listen");
var utils_1 = require("../pointer/utils");
var points = [
    utils_1.defaultPointerPos()
];
var isTouchDevice = false;
if (typeof document !== 'undefined') {
    var updatePointsLocation = function(_a) {
        var touches = _a.touches;
        isTouchDevice = true;
        var numTouches = touches.length;
        points.length = 0;
        for(var i = 0; i < numTouches; i++){
            var thisTouch = touches[i];
            points.push(utils_1.eventToPoint(thisTouch));
        }
    };
    listen_1.default(document, 'touchstart touchmove', true).start(updatePointsLocation);
}
var multitouch = function(_a1) {
    var _b = _a1 === void 0 ? {} : _a1, _c = _b.preventDefault, preventDefault = _c === void 0 ? true : _c, _d = _b.scale, scale = _d === void 0 ? 1 : _d, _e = _b.rotate, rotate = _e === void 0 ? 0 : _e;
    return action_1.default(function(_a) {
        var update = _a.update;
        var output = {
            touches: points,
            scale: scale,
            rotate: rotate
        };
        var initialDistance = 0;
        var initialRotation = 0;
        var isGesture = points.length > 1;
        if (isGesture) {
            var firstTouch = points[0], secondTouch = points[1];
            initialDistance = calc_1.distance(firstTouch, secondTouch);
            initialRotation = calc_1.angle(firstTouch, secondTouch);
        }
        var updatePoint = function() {
            if (isGesture) {
                var firstTouch = points[0], secondTouch = points[1];
                var newDistance = calc_1.distance(firstTouch, secondTouch);
                var newRotation = calc_1.angle(firstTouch, secondTouch);
                output.scale = scale * (newDistance / initialDistance);
                output.rotate = rotate + (newRotation - initialRotation);
            }
            update(output);
        };
        var onMove = function(e) {
            if (preventDefault || e.touches.length > 1) e.preventDefault();
            framesync_1.onFrameUpdate(updatePoint);
        };
        var updateOnMove = listen_1.default(document, 'touchmove', {
            passive: !preventDefault
        }).start(onMove);
        if (isTouchDevice) framesync_1.onFrameUpdate(updatePoint);
        return {
            stop: function() {
                framesync_1.cancelOnFrameUpdate(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};
exports.default = multitouch;
exports.getIsTouchDevice = function() {
    return isTouchDevice;
};

},{"framesync":"fmg1O","../../action":"g4FZU","../../calc":"f7P1Z","../listen":"jhYhP","../pointer/utils":"6lWqL"}],"6lWqL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultPointerPos = function() {
    return {
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        x: 0,
        y: 0
    };
};
exports.eventToPoint = function(e, point) {
    if (point === void 0) point = exports.defaultPointerPos();
    point.clientX = point.x = e.clientX;
    point.clientY = point.y = e.clientY;
    point.pageX = e.pageX;
    point.pageY = e.pageY;
    return point;
};

},{}],"87N1t":[function(require,module,exports) {
"use strict";
var __rest = this && this.__rest || function(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") {
        for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0) t[p[i]] = s[p[i]];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var transformers_1 = require("../../transformers");
var multitouch_1 = require("../multitouch");
var mouse_1 = require("./mouse");
var getFirstTouch = function(_a) {
    var firstTouch = _a[0];
    return firstTouch;
};
var pointer = function(props) {
    if (props === void 0) props = {};
    return multitouch_1.getIsTouchDevice() ? multitouch_1.default(props).pipe(function(_a) {
        var touches = _a.touches;
        return touches;
    }, getFirstTouch) : mouse_1.default(props);
};
exports.default = function(_a) {
    if (_a === void 0) _a = {};
    var x = _a.x, y = _a.y, props = __rest(_a, [
        "x",
        "y"
    ]);
    if (x !== undefined || y !== undefined) {
        var applyXOffset_1 = transformers_1.applyOffset(x || 0);
        var applyYOffset_1 = transformers_1.applyOffset(y || 0);
        var delta_1 = {
            x: 0,
            y: 0
        };
        return pointer(props).pipe(function(point) {
            delta_1.x = applyXOffset_1(point.x);
            delta_1.y = applyYOffset_1(point.y);
            return delta_1;
        });
    } else return pointer(props);
};

},{"../../transformers":"edI4z","../multitouch":"gQKGh","./mouse":"dHYqO"}],"dHYqO":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var framesync_1 = require("framesync");
var action_1 = require("../../action");
var listen_1 = require("../listen");
var utils_1 = require("../pointer/utils");
var point = utils_1.defaultPointerPos();
var isMouseDevice = false;
if (typeof document !== 'undefined') {
    var updatePointLocation = function(e) {
        isMouseDevice = true;
        utils_1.eventToPoint(e, point);
    };
    listen_1.default(document, 'mousedown mousemove', true).start(updatePointLocation);
}
var mouse = function(_a1) {
    var _b = (_a1 === void 0 ? {} : _a1).preventDefault, preventDefault = _b === void 0 ? true : _b;
    return action_1.default(function(_a) {
        var update = _a.update;
        var updatePoint = function() {
            return update(point);
        };
        var onMove = function(e) {
            if (preventDefault) e.preventDefault();
            framesync_1.onFrameUpdate(updatePoint);
        };
        var updateOnMove = listen_1.default(document, 'mousemove').start(onMove);
        if (isMouseDevice) framesync_1.onFrameUpdate(updatePoint);
        return {
            stop: function() {
                framesync_1.cancelOnFrameUpdate(updatePoint);
                updateOnMove.stop();
            }
        };
    });
};
exports.default = mouse;

},{"framesync":"fmg1O","../../action":"g4FZU","../listen":"jhYhP","../pointer/utils":"6lWqL"}],"kiQFy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var action_1 = require("../action");
var chain = function() {
    var actions = [];
    for(var _i = 0; _i < arguments.length; _i++)actions[_i] = arguments[_i];
    return action_1.default(function(_a) {
        var update = _a.update, complete = _a.complete;
        var i = 0;
        var current;
        var playCurrent = function() {
            current = actions[i].start({
                complete: function() {
                    i++;
                    i >= actions.length ? complete() : playCurrent();
                },
                update: update
            });
        };
        playCurrent();
        return {
            stop: function() {
                return current && current.stop();
            }
        };
    });
};
exports.default = chain;

},{"../action":"g4FZU"}],"4HGEj":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || Object.assign || function(t) {
    for(var s, i = 1, n = arguments.length; i < n; i++){
        s = arguments[i];
        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var action_1 = require("../action");
var calc_1 = require("../calc");
var parallel_1 = require("./parallel");
var crossfade = function(a, b) {
    return action_1.default(function(observer) {
        var balance = 0;
        var fadable = parallel_1.default(a, b).start(__assign({}, observer, {
            update: function(_a) {
                var va = _a[0], vb = _a[1];
                observer.update(calc_1.getValueFromProgress(va, vb, balance));
            }
        }));
        return {
            setBalance: function(v) {
                return balance = v;
            },
            stop: function() {
                return fadable.stop();
            }
        };
    });
};
exports.default = crossfade;

},{"../action":"g4FZU","../calc":"f7P1Z","./parallel":"lV6xL"}],"i4qyK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var action_1 = require("../action");
var delay = function(timeToDelay) {
    return action_1.default(function(_a) {
        var complete = _a.complete;
        var timeout = setTimeout(complete, timeToDelay);
        return {
            stop: function() {
                return clearTimeout(timeout);
            }
        };
    });
};
exports.default = delay;

},{"../action":"g4FZU"}],"3rrWp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var action_1 = require("../action");
var merge = function() {
    var actions = [];
    for(var _i = 0; _i < arguments.length; _i++)actions[_i] = arguments[_i];
    return action_1.default(function(observer) {
        var subs = actions.map(function(thisAction) {
            return thisAction.start(observer);
        });
        return {
            stop: function() {
                return subs.forEach(function(sub) {
                    return sub.stop();
                });
            }
        };
    });
};
exports.default = merge;

},{"../action":"g4FZU"}],"aqFno":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var action_1 = require("../action");
var schedule = function(scheduler, schedulee) {
    return action_1.default(function(_a) {
        var update = _a.update, complete = _a.complete;
        var latest;
        var schedulerSub = scheduler.start({
            update: function() {
                return latest !== undefined && update(latest);
            },
            complete: complete
        });
        var scheduleeSub = schedulee.start({
            update: function(v) {
                return latest = v;
            },
            complete: complete
        });
        return {
            stop: function() {
                schedulerSub.stop();
                scheduleeSub.stop();
            }
        };
    });
};
exports.default = schedule;

},{"../action":"g4FZU"}],"cRT3i":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var chain_1 = require("./chain");
var delay_1 = require("./delay");
var parallel_1 = require("./parallel");
var stagger = function(actions, interval) {
    var intervalIsNumber = typeof interval === 'number';
    var actionsWithDelay = actions.map(function(a, i) {
        var timeToDelay = intervalIsNumber ? interval * i : interval(i);
        return chain_1.default(delay_1.default(timeToDelay), a);
    });
    return parallel_1.default.apply(void 0, actionsWithDelay);
};
exports.default = stagger;

},{"./chain":"kiQFy","./delay":"i4qyK","./parallel":"lV6xL"}],"la3r1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var css_1 = require("./css");
var render_1 = require("./css/render");
exports.buildStyles = render_1.default;
var styler_1 = require("./styler");
exports.createStyler = styler_1.default;
var svg_1 = require("./svg");
var cache = new WeakMap();
var createDOMStyler = function(node, props) {
    var styler = node instanceof SVGElement ? svg_1.default(node) : css_1.default(node, props);
    cache.set(node, styler);
    return styler;
};
var getStyler = function(node, props) {
    return cache.has(node) ? cache.get(node) : createDOMStyler(node, props);
};
function default_1(nodeOrSelector, props) {
    var node = typeof nodeOrSelector === "string" ? document.querySelector(nodeOrSelector) : nodeOrSelector;
    return getStyler(node, props);
}
exports.default = default_1; //# sourceMappingURL=index.js.map

},{"./css":"kymHh","./css/render":"4K762","./styler":"h6jLd","./svg":"lRKOk"}],"kymHh":[function(require,module,exports) {
"use strict";
var __assign = this && this.__assign || Object.assign || function(t) {
    for(var s, i = 1, n = arguments.length; i < n; i++){
        s = arguments[i];
        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
var styler_1 = require("../styler");
var prefixer_1 = require("./prefixer");
var render_1 = require("./render");
var transform_props_1 = require("./transform-props");
var value_types_1 = require("./value-types");
var cssStyler = styler_1.default({
    onRead: function(key, _a) {
        var element = _a.element, preparseOutput = _a.preparseOutput;
        var valueType = value_types_1.default(key);
        if (transform_props_1.isTransformProp(key)) return valueType ? valueType.default || 0 : 0;
        else {
            var domValue = window.getComputedStyle(element, null).getPropertyValue(prefixer_1.default(key, true)) || 0;
            return preparseOutput && valueType && valueType.parse ? valueType.parse(domValue) : domValue;
        }
    },
    onRender: function(state, _a, changedValues) {
        var element = _a.element, enableHardwareAcceleration = _a.enableHardwareAcceleration;
        element.style.cssText += render_1.default(state, changedValues, enableHardwareAcceleration);
    },
    aliasMap: render_1.aliasMap
});
exports.default = function(element, props) {
    return cssStyler(__assign({
        element: element,
        enableHardwareAcceleration: true,
        preparseOutput: true
    }, props));
};

},{"../styler":"h6jLd","./prefixer":"4FquI","./render":"4K762","./transform-props":"kaZrD","./value-types":"arn8k"}],"h6jLd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var framesync_1 = require("framesync");
var createStyler = function(_a) {
    var onRead = _a.onRead, onRender = _a.onRender, _b = _a.aliasMap, aliasMap = _b === void 0 ? {} : _b, _c = _a.useCache, useCache = _c === void 0 ? true : _c;
    return function(props) {
        var state = {};
        var changedValues = [];
        var hasChanged = false;
        var setValue = function(unmappedKey, value) {
            var key = aliasMap[unmappedKey] || unmappedKey;
            var currentValue = state[key];
            state[key] = value;
            if (state[key] !== currentValue) {
                if (changedValues.indexOf(key) === -1) changedValues.push(key);
                if (!hasChanged) {
                    hasChanged = true;
                    framesync_1.onFrameRender(render);
                }
            }
        };
        function render(forceRender) {
            if (forceRender === void 0) forceRender = false;
            if (forceRender || hasChanged) {
                onRender(state, props, changedValues);
                hasChanged = false;
                changedValues.length = 0;
            }
            return this;
        }
        return {
            get: function(unmappedKey) {
                var key = aliasMap[unmappedKey] || unmappedKey;
                return key ? useCache && state[key] !== undefined ? state[key] : onRead(key, props) : state;
            },
            set: function(values, value) {
                if (typeof values === 'string') {
                    if (value !== undefined) setValue(values, value);
                    else return function(v) {
                        return setValue(values, v);
                    };
                } else {
                    for(var key in values)if (values.hasOwnProperty(key)) setValue(key, values[key]);
                }
                return this;
            },
            render: render
        };
    };
};
exports.default = createStyler;

},{"framesync":"fmg1O"}],"4FquI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var utils_1 = require("../styler/utils");
var camelCache = new Map();
var dashCache = new Map();
var prefixes = [
    'Webkit',
    'Moz',
    'O',
    'ms',
    ''
];
var numPrefixes = prefixes.length;
var testElement;
var testPrefix = function(key) {
    if (typeof document === 'undefined') return;
    testElement = testElement || document.createElement('div');
    for(var i = 0; i < numPrefixes; i++){
        var prefix = prefixes[i];
        var noPrefix = prefix === '';
        var prefixedPropertyName = noPrefix ? key : prefix + key.charAt(0).toUpperCase() + key.slice(1);
        if (prefixedPropertyName in testElement.style) {
            camelCache.set(key, prefixedPropertyName);
            dashCache.set(key, "" + (noPrefix ? '' : '-') + utils_1.camelToDash(prefixedPropertyName));
        }
    }
};
exports.default = function(key, asDashCase) {
    if (asDashCase === void 0) asDashCase = false;
    var cache = asDashCase ? dashCache : camelCache;
    if (!cache.has(key)) testPrefix(key);
    return cache.get(key) || key;
};

},{"../styler/utils":"dKSzV"}],"dKSzV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var CAMEL_CASE_PATTERN = /([a-z])([A-Z])/g;
var REPLACE_TEMPLATE = '$1-$2';
exports.camelToDash = function(str) {
    return str.replace(CAMEL_CASE_PATTERN, REPLACE_TEMPLATE).toLowerCase();
};
exports.setDomAttrs = function(element, attrs) {
    for(var key in attrs)if (attrs.hasOwnProperty(key)) element.setAttribute(key, attrs[key]);
};

},{}],"4K762":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var transform_props_1 = require("./transform-props");
var prefixer_1 = require("./prefixer");
var value_types_1 = require("./value-types");
exports.aliasMap = {
    x: 'translateX',
    y: 'translateY',
    z: 'translateZ',
    originX: 'transformOriginX',
    originY: 'transformOriginY',
    originZ: 'transformOriginZ'
};
var NUMBER = 'number';
var OBJECT = 'object';
var COLON = ':';
var SEMI_COLON = ';';
var TRANSFORM_ORIGIN = 'transform-origin';
var TRANSFORM = 'transform';
var TRANSLATE_Z = 'translateZ';
var TRANSFORM_NONE = ';transform: none';
var styleRule = function(key, value) {
    return "" + SEMI_COLON + key + COLON + value;
};
function buildStylePropertyString(state, changedValues, enableHardwareAcceleration) {
    if (changedValues === void 0) changedValues = true;
    if (enableHardwareAcceleration === void 0) enableHardwareAcceleration = true;
    var valuesToChange = changedValues === true ? Object.keys(state) : changedValues;
    var propertyString = '';
    var transformString = '';
    var hasTransformOrigin = false;
    var transformIsDefault = true;
    var hasTransform = false;
    var transformHasZ = false;
    var numChangedValues = valuesToChange.length;
    for(var i = 0; i < numChangedValues; i++){
        var key = valuesToChange[i];
        if (transform_props_1.isTransformProp(key)) {
            hasTransform = true;
            for(var stateKey in state)if (transform_props_1.isTransformProp(stateKey) && valuesToChange.indexOf(stateKey) === -1) valuesToChange.push(stateKey);
            break;
        }
    }
    valuesToChange.sort(transform_props_1.sortTransformProps);
    var totalNumChangedValues = valuesToChange.length;
    for(var i = 0; i < totalNumChangedValues; i++){
        var key = valuesToChange[i];
        var isTransformKey = transform_props_1.isTransformProp(key);
        var value = state[key];
        var valueType = value_types_1.default(key);
        if (isTransformKey) {
            if (valueType.default && value !== valueType.default || !valueType.default && value !== 0) transformIsDefault = false;
        }
        if (valueType && (typeof value === NUMBER || typeof value === OBJECT) && valueType.transform) value = valueType.transform(value);
        if (isTransformKey) {
            transformString += key + '(' + value + ') ';
            transformHasZ = key === TRANSLATE_Z ? true : transformHasZ;
        } else if (transform_props_1.isTransformOriginProp(key)) {
            state[key] = value;
            hasTransformOrigin = true;
        } else propertyString += styleRule(prefixer_1.default(key, true), value);
    }
    if (hasTransformOrigin) propertyString += styleRule(TRANSFORM_ORIGIN, (state.transformOriginX || 0) + " " + (state.transformOriginY || 0) + " " + (state.transformOriginZ || 0));
    if (hasTransform) {
        if (!transformHasZ && enableHardwareAcceleration) transformString += TRANSLATE_Z + "(0)";
        propertyString += styleRule(TRANSFORM, transformIsDefault ? TRANSFORM_NONE : transformString);
    }
    return propertyString;
}
exports.default = buildStylePropertyString;

},{"./transform-props":"kaZrD","./prefixer":"4FquI","./value-types":"arn8k"}],"kaZrD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var axes = [
    '',
    'X',
    'Y',
    'Z'
];
var order = [
    'translate',
    'scale',
    'rotate',
    'skew',
    'transformPerspective'
];
var TRANSFORM_ORIGIN_X = 'transformOriginX';
var TRANSFORM_ORIGIN_Y = 'transformOriginY';
var transformProps = order.reduce(function(acc, key) {
    return axes.reduce(function(axesAcc, axesKey) {
        axesAcc.push(key + axesKey);
        return axesAcc;
    }, acc);
}, [
    'x',
    'y',
    'z'
]);
var transformPropDictionary = transformProps.reduce(function(dict, key) {
    dict[key] = true;
    return dict;
}, {});
exports.isTransformProp = function(key) {
    return transformPropDictionary[key] === true;
};
exports.sortTransformProps = function(a, b) {
    return transformProps.indexOf(a) - transformProps.indexOf(b);
};
exports.isTransformOriginProp = function(key) {
    return key === TRANSFORM_ORIGIN_X || key === TRANSFORM_ORIGIN_Y;
};

},{}],"arn8k":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var style_value_types_1 = require("style-value-types");
var valueTypes = {
    color: style_value_types_1.color,
    backgroundColor: style_value_types_1.color,
    outlineColor: style_value_types_1.color,
    fill: style_value_types_1.color,
    stroke: style_value_types_1.color,
    borderColor: style_value_types_1.color,
    borderTopColor: style_value_types_1.color,
    borderRightColor: style_value_types_1.color,
    borderBottomColor: style_value_types_1.color,
    borderLeftColor: style_value_types_1.color,
    borderRadius: style_value_types_1.px,
    width: style_value_types_1.px,
    maxWidth: style_value_types_1.px,
    height: style_value_types_1.px,
    maxHeight: style_value_types_1.px,
    top: style_value_types_1.px,
    left: style_value_types_1.px,
    bottom: style_value_types_1.px,
    right: style_value_types_1.px,
    rotate: style_value_types_1.degrees,
    rotateX: style_value_types_1.degrees,
    rotateY: style_value_types_1.degrees,
    rotateZ: style_value_types_1.degrees,
    scale: style_value_types_1.scale,
    scaleX: style_value_types_1.scale,
    scaleY: style_value_types_1.scale,
    scaleZ: style_value_types_1.scale,
    skewX: style_value_types_1.degrees,
    skewY: style_value_types_1.degrees,
    distance: style_value_types_1.px,
    translateX: style_value_types_1.px,
    translateY: style_value_types_1.px,
    translateZ: style_value_types_1.px,
    perspective: style_value_types_1.px,
    opacity: style_value_types_1.alpha,
    transformOriginX: style_value_types_1.percent,
    transformOriginY: style_value_types_1.percent,
    transformOriginZ: style_value_types_1.px
};
exports.default = function(key) {
    return valueTypes[key];
};

},{"style-value-types":"f8zMr"}],"lRKOk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var transform_props_1 = require("../css/transform-props");
var styler_1 = require("../styler");
var utils_1 = require("../styler/utils");
var build_1 = require("./build");
var value_types_1 = require("./value-types");
var svgStyler = styler_1.default({
    onRead: function(key, _a) {
        var element = _a.element;
        if (!transform_props_1.isTransformProp(key)) return element.getAttribute(key);
        else {
            var valueType = value_types_1.default(key);
            return valueType ? valueType.default : 0;
        }
    },
    onRender: function(state, _a, changedValues) {
        var dimensions = _a.dimensions, element = _a.element, isPath = _a.isPath, pathLength = _a.pathLength;
        utils_1.setDomAttrs(element, build_1.default(state, dimensions, isPath, pathLength));
    },
    aliasMap: {
        x: 'translateX',
        y: 'translateY',
        background: 'fill'
    }
});
exports.default = function(element) {
    var _a = element.getBBox(), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    var props = {
        element: element,
        dimensions: {
            x: x,
            y: y,
            width: width,
            height: height
        },
        isPath: false
    };
    if (element.tagName === 'path') {
        props.isPath = true;
        props.pathLength = element.getTotalLength();
    }
    return svgStyler(props);
};

},{"../css/transform-props":"kaZrD","../styler":"h6jLd","../styler/utils":"dKSzV","./build":"kA0kg","./value-types":"lNrc0"}],"kA0kg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var utils_1 = require("../styler/utils");
var transform_props_1 = require("../css/transform-props");
var ZERO_NOT_ZERO = 0.0000001;
var percentToPixels = function(percent, length) {
    return percent / 100 * length + 'px';
};
var build = function(state, dimensions, isPath, pathLength) {
    var hasTransform = false;
    var hasDashArray = false;
    var props = {};
    var dashArrayStyles = isPath ? {
        pathLength: '0',
        pathSpacing: "" + pathLength
    } : undefined;
    var scale = state.scale !== undefined ? state.scale || ZERO_NOT_ZERO : state.scaleX || 1;
    var scaleY = state.scaleY !== undefined ? state.scaleY || ZERO_NOT_ZERO : scale || 1;
    var transformOriginX = dimensions.width * ((state.originX || 50) / 100) + dimensions.x;
    var transformOriginY = dimensions.height * ((state.originY || 50) / 100) + dimensions.y;
    var scaleTransformX = -transformOriginX * (scale * 1);
    var scaleTransformY = -transformOriginY * (scaleY * 1);
    var scaleReplaceX = transformOriginX / scale;
    var scaleReplaceY = transformOriginY / scaleY;
    var transform = {
        translate: "translate(" + state.translateX + ", " + state.translateY + ") ",
        scale: "translate(" + scaleTransformX + ", " + scaleTransformY + ") scale(" + scale + ", " + scaleY + ") translate(" + scaleReplaceX + ", " + scaleReplaceY + ") ",
        rotate: "rotate(" + state.rotate + ", " + transformOriginX + ", " + transformOriginY + ") ",
        skewX: "skewX(" + state.skewX + ") ",
        skewY: "skewY(" + state.skewY + ") "
    };
    for(var key in state)if (state.hasOwnProperty(key)) {
        var value = state[key];
        if (transform_props_1.isTransformProp(key)) hasTransform = true;
        else if (isPath && (key === 'pathLength' || key === 'pathSpacing') && typeof value === 'number') {
            hasDashArray = true;
            dashArrayStyles[key] = percentToPixels(value, pathLength);
        } else if (isPath && key === 'pathOffset') props['stroke-dashoffset'] = percentToPixels(-value, pathLength);
        else props[utils_1.camelToDash(key)] = value;
    }
    if (hasDashArray) props['stroke-dasharray'] = dashArrayStyles.pathLength + ' ' + dashArrayStyles.pathSpacing;
    if (hasTransform) {
        props.transform = '';
        for(var key in transform)if (transform.hasOwnProperty(key)) {
            var defaultValue = key === 'scale' ? '1' : '0';
            props.transform += transform[key].replace(/undefined/g, defaultValue);
        }
    }
    return props;
};
exports.default = build;

},{"../styler/utils":"dKSzV","../css/transform-props":"kaZrD"}],"lNrc0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var style_value_types_1 = require("style-value-types");
var valueTypes = {
    fill: style_value_types_1.color,
    stroke: style_value_types_1.color,
    scale: style_value_types_1.scale,
    scaleX: style_value_types_1.scale,
    scaleY: style_value_types_1.scale,
    opacity: style_value_types_1.alpha,
    fillOpacity: style_value_types_1.alpha,
    strokeOpacity: style_value_types_1.alpha
};
exports.default = function(key) {
    return valueTypes[key];
};

},{"style-value-types":"f8zMr"}],"9sGLk":[function(require,module,exports) {
console.log("this is a test");

},{}]},["hUAgJ","lG8gm"], "lG8gm", "parcelRequirec44f")

//# sourceMappingURL=index.648171d3.js.map
