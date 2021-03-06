/* global define, exports, module */
(function () {
  class Infinite {
    /**
     *Creates an instance of Infinite.
     * @memberof Infinite
     */
    constructor() {

    }

    add() {

    }

    scroll() {

    }

    destroy() {}
  }

  window.Infinite = Infinite

  if (typeof define === 'function' && define.amd) {
    define('Infinite', [], function () {
      return Infinite
    })
  } else if (typeof exports !== 'undefined' && !exports.nodeType) {
    if (typeof module !== 'undefined' && !module.nodeType && module.exports) {
      // eslint-disable-next-line no-global-assign
      exports = module.exports = Infinite
    }
    exports.default = Infinite
  }
})()