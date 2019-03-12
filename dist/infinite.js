"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw a.code = "MODULE_NOT_FOUND", a;
        }

        var p = n[i] = {
          exports: {}
        };
        e[i][0].call(p.exports, function (r) {
          var n = e[i][1][r];
          return o(n || r);
        }, p, p.exports, r, e, n, t);
      }

      return n[i].exports;
    }

    for (var u = "function" == typeof require && require, i = 0; i < t.length; i++) {
      o(t[i]);
    }

    return o;
  }

  return r;
})()({
  1: [function (require, module, exports) {
    /* global define, exports, module */
    (function () {
      var docElement = document.documentElement;
      var body = document.body;
      var max = Math.max;

      function Sizes() {
        if (!(this instanceof Sizes)) {
          return new Sizes();
        }

        this.view = this.getViewportAndElementSizes().view;
        this.size = this.getViewportAndElementSizes().size;
      }

      Sizes.prototype = {
        isRootContainer: function isRootContainer(el) {
          return el === docElement || el === body;
        },
        getHeight: function getHeight(el) {
          return max(el.scrollHeight, el.clientHeight, el.offsetHeight);
        },
        getWidth: function getWidth(el) {
          return max(el.scrollWidth, el.clientWidth, el.offsetWidth);
        },
        getSize: function getSize(el) {
          return {
            width: this.getWidth(el),
            height: this.getHeight(el)
          };
        },
        getViewportAndElementSizes: function getViewportAndElementSizes() {
          var el = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : body;
          var isRoot = this.isRootContainer(el);
          return {
            view: {
              width: isRoot ? Math.min(window.innerWidth, docElement.clientWidth) : el.clientWidth,
              height: isRoot ? window.innerHeight : el.clientHeight
            },
            size: isRoot ? {
              width: max(this.getWidth(body), this.getWidth(docElement)),
              height: max(this.getHeight(body), this.getHeight(docElement))
            } : this.getSize(el)
          };
        },
        destroy: function destroy() {}
      };
      window.Sizes = Sizes;

      if (typeof define === 'function' && define.amd) {
        define('Sizes', [], function () {
          return Sizes;
        });
      } else if (typeof exports !== 'undefined' && !exports.nodeType) {
        if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
          // eslint-disable-next-line no-global-assign
          exports = module.exports = Sizes;
        }

        exports.default = Sizes;
      }
    })();
    /* global define, exports, module */


    (function () {
      var Infinite =
      /*#__PURE__*/
      function () {
        /**
         *Creates an instance of Infinite.
         * @memberof Infinite
         */
        function Infinite() {
          _classCallCheck(this, Infinite);
        }

        _createClass(Infinite, [{
          key: "add",
          value: function add() {}
        }, {
          key: "scroll",
          value: function scroll() {}
        }, {
          key: "destroy",
          value: function destroy() {}
        }]);

        return Infinite;
      }();

      window.Infinite = Infinite;

      if (typeof define === 'function' && define.amd) {
        define('Infinite', [], function () {
          return Infinite;
        });
      } else if (typeof exports !== 'undefined' && !exports.nodeType) {
        if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
          // eslint-disable-next-line no-global-assign
          exports = module.exports = Infinite;
        }

        exports.default = Infinite;
      }
    })();
  }, {}]
}, {}, [1]);
