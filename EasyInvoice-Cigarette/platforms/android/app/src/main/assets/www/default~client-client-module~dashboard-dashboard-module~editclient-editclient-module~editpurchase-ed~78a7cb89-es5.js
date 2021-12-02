(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~78a7cb89"], {
    /***/
    "/8ZT":
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
      \***************************************************/

    /*! exports provided: DNS, URL, default */

    /***/
    function ZT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DNS", function () {
        return DNS;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "URL", function () {
        return URL;
      });
      /* harmony import */


      var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./stringify.js */
      "WM9j");
      /* harmony import */


      var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./parse.js */
      "DeoT");

      function stringToBytes(str) {
        str = unescape(encodeURIComponent(str)); // UTF8 escape

        var bytes = [];

        for (var i = 0; i < str.length; ++i) {
          bytes.push(str.charCodeAt(i));
        }

        return bytes;
      }

      var DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
      var URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
      /* harmony default export */

      __webpack_exports__["default"] = function (name, version, hashfunc) {
        function generateUUID(value, namespace, buf, offset) {
          if (typeof value === 'string') {
            value = stringToBytes(value);
          }

          if (typeof namespace === 'string') {
            namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__["default"])(namespace);
          }

          if (namespace.length !== 16) {
            throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
          } // Compute hash of namespace and value, Per 4.3
          // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
          // hashfunc([...namespace, ... value])`


          var bytes = new Uint8Array(16 + value.length);
          bytes.set(namespace);
          bytes.set(value, namespace.length);
          bytes = hashfunc(bytes);
          bytes[6] = bytes[6] & 0x0f | version;
          bytes[8] = bytes[8] & 0x3f | 0x80;

          if (buf) {
            offset = offset || 0;

            for (var i = 0; i < 16; ++i) {
              buf[offset + i] = bytes[i];
            }

            return buf;
          }

          return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__["default"])(bytes);
        } // Function#name is not settable on some platforms (#270)


        try {
          generateUUID.name = name; // eslint-disable-next-line no-empty
        } catch (err) {} // For CommonJS default export support


        generateUUID.DNS = DNS;
        generateUUID.URL = URL;
        return generateUUID;
      };
      /***/

    },

    /***/
    "1M+P":
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function MP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = '00000000-0000-0000-0000-000000000000';
      /***/
    },

    /***/
    "2Pgj":
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function Pgj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "default", function () {
        return rng;
      }); // Unique ID creation requires a high quality random # generator. In the browser we therefore
      // require the crypto API and do not support built-in fallback to lower quality random number
      // generators (like Math.random()).


      var getRandomValues;
      var rnds8 = new Uint8Array(16);

      function rng() {
        // lazy load so that environments that need to polyfill have a chance to do so
        if (!getRandomValues) {
          // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
          // find the complete implementation of crypto (msCrypto) on IE11.
          getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

          if (!getRandomValues) {
            throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
          }
        }

        return getRandomValues(rnds8);
      }
      /***/

    },

    /***/
    "4USb":
    /*!*****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
      \*****************************************************/

    /*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */

    /***/
    function USb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./v1.js */
      "xQqG");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "v1", function () {
        return _v1_js__WEBPACK_IMPORTED_MODULE_0__["default"];
      });
      /* harmony import */


      var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./v3.js */
      "VKuO");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "v3", function () {
        return _v3_js__WEBPACK_IMPORTED_MODULE_1__["default"];
      });
      /* harmony import */


      var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./v4.js */
      "7Cbv");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "v4", function () {
        return _v4_js__WEBPACK_IMPORTED_MODULE_2__["default"];
      });
      /* harmony import */


      var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./v5.js */
      "Jr8q");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "v5", function () {
        return _v5_js__WEBPACK_IMPORTED_MODULE_3__["default"];
      });
      /* harmony import */


      var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./nil.js */
      "1M+P");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "NIL", function () {
        return _nil_js__WEBPACK_IMPORTED_MODULE_4__["default"];
      });
      /* harmony import */


      var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./version.js */
      "dugQ");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "version", function () {
        return _version_js__WEBPACK_IMPORTED_MODULE_5__["default"];
      });
      /* harmony import */


      var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./validate.js */
      "BuRe");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "validate", function () {
        return _validate_js__WEBPACK_IMPORTED_MODULE_6__["default"];
      });
      /* harmony import */


      var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./stringify.js */
      "WM9j");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "stringify", function () {
        return _stringify_js__WEBPACK_IMPORTED_MODULE_7__["default"];
      });
      /* harmony import */


      var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./parse.js */
      "DeoT");
      /* harmony reexport (safe) */


      __webpack_require__.d(__webpack_exports__, "parse", function () {
        return _parse_js__WEBPACK_IMPORTED_MODULE_8__["default"];
      });
      /***/

    },

    /***/
    "7Cbv":
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Cbv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rng.js */
      "2Pgj");
      /* harmony import */


      var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stringify.js */
      "WM9j");

      function v4(options, buf, offset) {
        options = options || {};

        var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


        rnds[6] = rnds[6] & 0x0f | 0x40;
        rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

        if (buf) {
          offset = offset || 0;

          for (var i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }

          return buf;
        }

        return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
      }
      /* harmony default export */


      __webpack_exports__["default"] = v4;
      /***/
    },

    /***/
    "BuRe":
    /*!********************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
      \********************************************************/

    /*! exports provided: default */

    /***/
    function BuRe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./regex.js */
      "QNZY");

      function validate(uuid) {
        return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
      }
      /* harmony default export */


      __webpack_exports__["default"] = validate;
      /***/
    },

    /***/
    "DeoT":
    /*!*****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function DeoT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./validate.js */
      "BuRe");

      function parse(uuid) {
        if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
          throw TypeError('Invalid UUID');
        }

        var v;
        var arr = new Uint8Array(16); // Parse ########-....-....-....-............

        arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
        arr[1] = v >>> 16 & 0xff;
        arr[2] = v >>> 8 & 0xff;
        arr[3] = v & 0xff; // Parse ........-####-....-....-............

        arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
        arr[5] = v & 0xff; // Parse ........-....-####-....-............

        arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
        arr[7] = v & 0xff; // Parse ........-....-....-####-............

        arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
        arr[9] = v & 0xff; // Parse ........-....-....-....-############
        // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

        arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
        arr[11] = v / 0x100000000 & 0xff;
        arr[12] = v >>> 24 & 0xff;
        arr[13] = v >>> 16 & 0xff;
        arr[14] = v >>> 8 & 0xff;
        arr[15] = v & 0xff;
        return arr;
      }
      /* harmony default export */


      __webpack_exports__["default"] = parse;
      /***/
    },

    /***/
    "Gb+d":
    /*!**************************************************!*\
      !*** ./src/app/services/toastservice.service.ts ***!
      \**************************************************/

    /*! exports provided: ToastserviceService */

    /***/
    function GbD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ToastserviceService", function () {
        return ToastserviceService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var ToastserviceService = /*#__PURE__*/function () {
        function ToastserviceService(toastController) {
          _classCallCheck(this, ToastserviceService);

          this.toastController = toastController;
        }

        _createClass(ToastserviceService, [{
          key: "presentToast",
          value: function presentToast(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var toast;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return ToastserviceService;
      }();

      ToastserviceService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
        }];
      };

      ToastserviceService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ToastserviceService);
      /***/
    },

    /***/
    "Jr8q":
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function Jr8q(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./v35.js */
      "/8ZT");
      /* harmony import */


      var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./sha1.js */
      "t133");

      var v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /* harmony default export */

      __webpack_exports__["default"] = v5;
      /***/
    },

    /***/
    "QNZY":
    /*!*****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function QNZY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      /***/
    },

    /***/
    "VKuO":
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function VKuO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./v35.js */
      "/8ZT");
      /* harmony import */


      var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./md5.js */
      "tysn");

      var v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__["default"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__["default"]);
      /* harmony default export */

      __webpack_exports__["default"] = v3;
      /***/
    },

    /***/
    "WM9j":
    /*!*********************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
      \*********************************************************/

    /*! exports provided: default */

    /***/
    function WM9j(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./validate.js */
      "BuRe");
      /**
       * Convert array of 16 byte values to UUID string format of the form:
       * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
       */


      var byteToHex = [];

      for (var i = 0; i < 256; ++i) {
        byteToHex.push((i + 0x100).toString(16).substr(1));
      }

      function stringify(arr) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
        // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

        var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
        // of the following:
        // - One or more input array values don't map to a hex octet (leading to
        // "undefined" in the uuid)
        // - Invalid input values for the RFC `version` or `variant` fields

        if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
          throw TypeError('Stringified UUID is invalid');
        }

        return uuid;
      }
      /* harmony default export */


      __webpack_exports__["default"] = stringify;
      /***/
    },

    /***/
    "ajt+":
    /*!****************************************!*\
      !*** ./src/app/services/db.service.ts ***!
      \****************************************/

    /*! exports provided: DbService */

    /***/
    function ajt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DbService", function () {
        return DbService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _toastservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./toastservice.service */
      "Gb+d");
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage-angular */
      "jSNZ");
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! uuid */
      "4USb");

      var DbService = /*#__PURE__*/function () {
        function DbService(httpClient, toastService, storage) {
          _classCallCheck(this, DbService);

          this.httpClient = httpClient;
          this.toastService = toastService;
          this.storage = storage;
          this.usersKey = "users";
          this.customersKey = "customers";
          this.inventoryKey = "inventories";
          this.invoiceKey = "invoices";
          this.invoiceNumberKey = "invoiceNumber";
          this.profileKey = "profile";
          this.customerCodeKey = "customerCode";
          this.supplierCodeKey = "supplierCode";
          this.supplierKey = "supplier";
          this.purchaseKey = "purchase";
          this.purchaseCodeKey = "purchaseCode";
          this.inventoryCodeKey = "inventoryCode";
          this.codeConstant = "SA-RY-";
          this.inventoyCodeConstant = "STO";
          this.purchaseCodeConstant = "PUR";
          this.customerCodeConstant = "CUS";
          this.supplierCodeConstant = "SUP";
          this.invoiceCodeConstant = "INV";
          this.printerKey = "printer";
          this.init();
        }

        _createClass(DbService, [{
          key: "init",
          value: function init() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var storageVar;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.storage.create();

                    case 2:
                      storageVar = _context2.sent;
                      this.storage = storageVar;

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "signup",
          value: function signup(user) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var value, result;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return this.storage.get(this.usersKey);

                    case 3:
                      value = _context3.sent;
                      this.users = JSON.parse(value);

                      if (this.users == undefined || this.users == null) {
                        this.users = [];
                      }

                      user.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
                      this.users.push(user);
                      _context3.next = 10;
                      return this.storage.set(this.usersKey, JSON.stringify(this.users));

                    case 10:
                      result = _context3.sent;
                      console.log('user signed up successfully' + user);
                      return _context3.abrupt("return", true);

                    case 15:
                      _context3.prev = 15;
                      _context3.t0 = _context3["catch"](0);
                      console.log(_context3.t0);
                      this.toastService.presentToast("User Registration Failed");
                      return _context3.abrupt("return", false);

                    case 20:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 15]]);
            }));
          }
        }, {
          key: "fetchUserByUserNameAndPassword",
          value: function fetchUserByUserNameAndPassword(username, password) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var result, fetchedUser;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      _context4.next = 3;
                      return this.storage.get(this.usersKey);

                    case 3:
                      result = _context4.sent;
                      this.users = JSON.parse(result);
                      fetchedUser = this.users.find(function (u) {
                        return u.email == username && u.user_password == password;
                      });
                      console.log('retrieved user' + fetchedUser);
                      return _context4.abrupt("return", fetchedUser);

                    case 10:
                      _context4.prev = 10;
                      _context4.t0 = _context4["catch"](0);
                      console.log(_context4.t0);
                      return _context4.abrupt("return", null);

                    case 14:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[0, 10]]);
            }));
          }
        }, {
          key: "createCustomer",
          value: function createCustomer(customer) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var value;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return this.storage.get(this.customersKey);

                    case 3:
                      value = _context5.sent;
                      this.customers = JSON.parse(value);

                      if (this.customers == null || this.customers == undefined) {
                        this.customers = [];
                      }

                      customer.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
                      this.customers.push(customer);
                      this.storage.set(this.customersKey, JSON.stringify(this.customers));
                      return _context5.abrupt("return", true);

                    case 12:
                      _context5.prev = 12;
                      _context5.t0 = _context5["catch"](0);
                      console.log(_context5.t0);
                      return _context5.abrupt("return", false);

                    case 16:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 12]]);
            }));
          }
        }, {
          key: "deleteCustomer",
          value: function deleteCustomer(customer) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var value, index;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;
                      _context6.next = 3;
                      return this.storage.get(this.customersKey);

                    case 3:
                      value = _context6.sent;
                      this.customers = JSON.parse(value);

                      if (this.customers == null || this.customers == undefined) {
                        this.customers = [];
                      }

                      index = this.customers.findIndex(function (i) {
                        return i.id == customer.id;
                      });
                      this.customers.splice(index, 1);
                      this.storage.set(this.customersKey, JSON.stringify(this.customers));
                      return _context6.abrupt("return", true);

                    case 12:
                      _context6.prev = 12;
                      _context6.t0 = _context6["catch"](0);
                      console.log(_context6.t0);
                      return _context6.abrupt("return", false);

                    case 16:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[0, 12]]);
            }));
          }
        }, {
          key: "findIndexToUpdate",
          value: function findIndexToUpdate(newCustomer) {
            return newCustomer.name == this;
          }
        }, {
          key: "UpdateCustomer",
          value: function UpdateCustomer(customer) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var value, index;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      _context7.next = 3;
                      return this.storage.get(this.customersKey);

                    case 3:
                      value = _context7.sent;
                      this.customers = JSON.parse(value);
                      index = this.customers.findIndex(function (i) {
                        return i.id == customer.id;
                      });
                      this.customers[index] = customer;
                      this.storage.set(this.customersKey, JSON.stringify(this.customers));
                      return _context7.abrupt("return", true);

                    case 11:
                      _context7.prev = 11;
                      _context7.t0 = _context7["catch"](0);
                      console.log(_context7.t0);
                      return _context7.abrupt("return", false);

                    case 15:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[0, 11]]);
            }));
          }
        }, {
          key: "getAllCustomers",
          value: function getAllCustomers() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var result;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.prev = 0;
                      _context8.next = 3;
                      return this.storage.get(this.customersKey);

                    case 3:
                      result = _context8.sent;
                      this.customers = JSON.parse(result);
                      return _context8.abrupt("return", this.customers);

                    case 8:
                      _context8.prev = 8;
                      _context8.t0 = _context8["catch"](0);
                      console.log(_context8.t0);
                      this.toastService.presentToast("Failed to load the customers");

                    case 12:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[0, 8]]);
            }));
          }
        }, {
          key: "getAllSuppliers",
          value: function getAllSuppliers() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var result, suppliers;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return this.storage.get(this.supplierKey);

                    case 3:
                      result = _context9.sent;
                      suppliers = JSON.parse(result);
                      return _context9.abrupt("return", suppliers);

                    case 8:
                      _context9.prev = 8;
                      _context9.t0 = _context9["catch"](0);
                      console.log(_context9.t0);
                      this.toastService.presentToast("Failed to load the suppliers");

                    case 12:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[0, 8]]);
            }));
          }
        }, {
          key: "saveAllInventories",
          value: function saveAllInventories(list) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var value;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.prev = 0;
                      _context10.next = 3;
                      return this.storage.get(this.inventoryKey);

                    case 3:
                      value = _context10.sent;
                      this.storage.set(this.inventoryKey, JSON.stringify(list));
                      return _context10.abrupt("return", true);

                    case 8:
                      _context10.prev = 8;
                      _context10.t0 = _context10["catch"](0);
                      console.log(_context10.t0);
                      return _context10.abrupt("return", false);

                    case 12:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this, [[0, 8]]);
            }));
          }
        }, {
          key: "createOrUpdateInventory",
          value: function createOrUpdateInventory(inventory) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var value, index;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.prev = 0;
                      _context11.next = 3;
                      return this.storage.get(this.inventoryKey);

                    case 3:
                      value = _context11.sent;
                      this.inventories = JSON.parse(value);

                      if (this.inventories == null || this.inventories == undefined) {
                        this.inventories = [];
                      }

                      if (inventory.id == null || inventory.id == undefined) {
                        inventory.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
                        this.inventories.push(inventory);
                      } else {
                        index = this.inventories.findIndex(function (i) {
                          return i.id == inventory.id;
                        });
                        this.inventories[index] = inventory;
                      }

                      this.storage.set(this.inventoryKey, JSON.stringify(this.inventories));
                      return _context11.abrupt("return", true);

                    case 11:
                      _context11.prev = 11;
                      _context11.t0 = _context11["catch"](0);
                      console.log(_context11.t0);
                      return _context11.abrupt("return", false);

                    case 15:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this, [[0, 11]]);
            }));
          }
        }, {
          key: "deleteInventory",
          value: function deleteInventory(inventory) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var value, index;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.prev = 0;
                      _context12.next = 3;
                      return this.storage.get(this.inventoryKey);

                    case 3:
                      value = _context12.sent;
                      this.inventories = JSON.parse(value);

                      if (this.inventories == null || this.inventories == undefined) {
                        this.inventories = [];
                      }

                      index = this.inventories.findIndex(function (i) {
                        return i.id == inventory.id;
                      });
                      this.inventories.splice(index, 1);
                      this.storage.set(this.inventoryKey, JSON.stringify(this.inventories));
                      return _context12.abrupt("return", true);

                    case 12:
                      _context12.prev = 12;
                      _context12.t0 = _context12["catch"](0);
                      console.log(_context12.t0);
                      return _context12.abrupt("return", false);

                    case 16:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this, [[0, 12]]);
            }));
          }
        }, {
          key: "getAllInventories",
          value: function getAllInventories() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var result;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.prev = 0;
                      _context13.next = 3;
                      return this.storage.get(this.inventoryKey);

                    case 3:
                      result = _context13.sent;
                      this.inventories = JSON.parse(result);
                      return _context13.abrupt("return", this.inventories);

                    case 8:
                      _context13.prev = 8;
                      _context13.t0 = _context13["catch"](0);
                      console.log(_context13.t0);
                      this.toastService.presentToast("Failed to load the inventories");

                    case 12:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this, [[0, 8]]);
            }));
          }
        }, {
          key: "getAllInvoices",
          value: function getAllInvoices() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var result;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.prev = 0;
                      _context14.next = 3;
                      return this.storage.get(this.invoiceKey);

                    case 3:
                      result = _context14.sent;
                      this.invoices = JSON.parse(result);
                      return _context14.abrupt("return", this.invoices);

                    case 8:
                      _context14.prev = 8;
                      _context14.t0 = _context14["catch"](0);
                      console.log(_context14.t0);
                      this.toastService.presentToast("Failed to load the invoices");

                    case 12:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this, [[0, 8]]);
            }));
          }
        }, {
          key: "createOrUpdateInvoice",
          value: function createOrUpdateInvoice(invoice) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var value, index;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.prev = 0;
                      _context15.next = 3;
                      return this.storage.get(this.invoiceKey);

                    case 3:
                      value = _context15.sent;
                      this.invoices = JSON.parse(value);

                      if (this.invoices == null || this.invoices == undefined) {
                        this.invoices = [];
                      }

                      if (invoice.id == null || invoice.id == undefined) {
                        invoice.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
                        this.invoices.push(invoice);
                      } else {
                        index = this.invoices.findIndex(function (i) {
                          return i.id == invoice.id;
                        });
                        this.invoices[index] = invoice;
                      }

                      this.storage.set(this.invoiceKey, JSON.stringify(this.invoices));
                      return _context15.abrupt("return", true);

                    case 11:
                      _context15.prev = 11;
                      _context15.t0 = _context15["catch"](0);
                      console.log(_context15.t0);
                      return _context15.abrupt("return", false);

                    case 15:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this, [[0, 11]]);
            }));
          }
        }, {
          key: "incrementInvoiceNumber",
          value: function incrementInvoiceNumber() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var invoiceNumber;
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.next = 2;
                      return this.storage.get(this.invoiceNumberKey);

                    case 2:
                      invoiceNumber = _context16.sent;

                      if (invoiceNumber == null || invoiceNumber == undefined) {
                        invoiceNumber = 0;
                      }

                      invoiceNumber = invoiceNumber + 1;
                      _context16.next = 7;
                      return this.storage.set(this.invoiceNumberKey, invoiceNumber);

                    case 7:
                      return _context16.abrupt("return", invoiceNumber);

                    case 8:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this);
            }));
          }
        }, {
          key: "getCustomerCode",
          value: function getCustomerCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var customerCode;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.next = 2;
                      return this.storage.get(this.customerCodeKey);

                    case 2:
                      customerCode = _context17.sent;
                      return _context17.abrupt("return", customerCode);

                    case 4:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this);
            }));
          }
        }, {
          key: "incrementCustomerCode",
          value: function incrementCustomerCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var customerCode;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.storage.get(this.customerCodeKey);

                    case 2:
                      customerCode = _context18.sent;

                      if (customerCode == null || customerCode == undefined) {
                        customerCode = 0;
                      }

                      customerCode = customerCode + 1;
                      _context18.next = 7;
                      return this.storage.set(this.customerCodeKey, customerCode);

                    case 7:
                      return _context18.abrupt("return", customerCode);

                    case 8:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }, {
          key: "getSupplierCode",
          value: function getSupplierCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
              var supplierCode;
              return regeneratorRuntime.wrap(function _callee19$(_context19) {
                while (1) {
                  switch (_context19.prev = _context19.next) {
                    case 0:
                      _context19.next = 2;
                      return this.storage.get(this.supplierCodeKey);

                    case 2:
                      supplierCode = _context19.sent;
                      return _context19.abrupt("return", supplierCode);

                    case 4:
                    case "end":
                      return _context19.stop();
                  }
                }
              }, _callee19, this);
            }));
          }
        }, {
          key: "incrementSupplierCode",
          value: function incrementSupplierCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var supplierCode;
              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      _context20.next = 2;
                      return this.storage.get(this.supplierCodeKey);

                    case 2:
                      supplierCode = _context20.sent;

                      if (supplierCode == null || supplierCode == undefined) {
                        supplierCode = 0;
                      }

                      supplierCode = supplierCode + 1;
                      _context20.next = 7;
                      return this.storage.set(this.supplierCodeKey, supplierCode);

                    case 7:
                      return _context20.abrupt("return", supplierCode);

                    case 8:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20, this);
            }));
          }
        }, {
          key: "getInvoiceNumber",
          value: function getInvoiceNumber() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee21() {
              var invoiceNumber;
              return regeneratorRuntime.wrap(function _callee21$(_context21) {
                while (1) {
                  switch (_context21.prev = _context21.next) {
                    case 0:
                      _context21.next = 2;
                      return this.storage.get(this.invoiceNumberKey);

                    case 2:
                      invoiceNumber = _context21.sent;
                      return _context21.abrupt("return", invoiceNumber);

                    case 4:
                    case "end":
                      return _context21.stop();
                  }
                }
              }, _callee21, this);
            }));
          }
        }, {
          key: "createOrUpdateProfile",
          value: function createOrUpdateProfile(userProfile) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee22() {
              return regeneratorRuntime.wrap(function _callee22$(_context22) {
                while (1) {
                  switch (_context22.prev = _context22.next) {
                    case 0:
                      _context22.prev = 0;

                      if (userProfile.id == null || userProfile.id == undefined) {
                        userProfile.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
                      }

                      this.storage.set(this.profileKey, JSON.stringify(userProfile));
                      return _context22.abrupt("return", userProfile);

                    case 6:
                      _context22.prev = 6;
                      _context22.t0 = _context22["catch"](0);
                      console.log(_context22.t0);
                      return _context22.abrupt("return", null);

                    case 10:
                    case "end":
                      return _context22.stop();
                  }
                }
              }, _callee22, this, [[0, 6]]);
            }));
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee23() {
              var value, profile;
              return regeneratorRuntime.wrap(function _callee23$(_context23) {
                while (1) {
                  switch (_context23.prev = _context23.next) {
                    case 0:
                      _context23.prev = 0;
                      _context23.next = 3;
                      return this.storage.get(this.profileKey);

                    case 3:
                      value = _context23.sent;
                      profile = JSON.parse(value);
                      return _context23.abrupt("return", profile);

                    case 8:
                      _context23.prev = 8;
                      _context23.t0 = _context23["catch"](0);
                      console.log(_context23.t0);
                      new Object();

                    case 12:
                    case "end":
                      return _context23.stop();
                  }
                }
              }, _callee23, this, [[0, 8]]);
            }));
          }
        }, {
          key: "createSupplier",
          value: function createSupplier(supplier) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee24() {
              var value;
              return regeneratorRuntime.wrap(function _callee24$(_context24) {
                while (1) {
                  switch (_context24.prev = _context24.next) {
                    case 0:
                      _context24.prev = 0;
                      _context24.next = 3;
                      return this.storage.get(this.supplierKey);

                    case 3:
                      value = _context24.sent;
                      this.suppliers = JSON.parse(value);

                      if (this.suppliers == null || this.suppliers == undefined) {
                        this.suppliers = [];
                      }

                      supplier.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
                      this.suppliers.push(supplier);
                      this.storage.set(this.supplierKey, JSON.stringify(this.suppliers));
                      return _context24.abrupt("return", true);

                    case 12:
                      _context24.prev = 12;
                      _context24.t0 = _context24["catch"](0);
                      console.log(_context24.t0);
                      return _context24.abrupt("return", false);

                    case 16:
                    case "end":
                      return _context24.stop();
                  }
                }
              }, _callee24, this, [[0, 12]]);
            }));
          }
        }, {
          key: "UpdateSupplier",
          value: function UpdateSupplier(supplier) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee25() {
              var value, index;
              return regeneratorRuntime.wrap(function _callee25$(_context25) {
                while (1) {
                  switch (_context25.prev = _context25.next) {
                    case 0:
                      _context25.prev = 0;
                      _context25.next = 3;
                      return this.storage.get(this.supplierKey);

                    case 3:
                      value = _context25.sent;
                      this.suppliers = JSON.parse(value);
                      index = this.suppliers.findIndex(function (i) {
                        return i.id == supplier.id;
                      });
                      this.suppliers[index] = supplier;
                      this.storage.set(this.supplierKey, JSON.stringify(this.suppliers));
                      return _context25.abrupt("return", true);

                    case 11:
                      _context25.prev = 11;
                      _context25.t0 = _context25["catch"](0);
                      console.log(_context25.t0);
                      return _context25.abrupt("return", false);

                    case 15:
                    case "end":
                      return _context25.stop();
                  }
                }
              }, _callee25, this, [[0, 11]]);
            }));
          }
        }, {
          key: "getAllPurchases",
          value: function getAllPurchases() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee26() {
              var result, purchaseList;
              return regeneratorRuntime.wrap(function _callee26$(_context26) {
                while (1) {
                  switch (_context26.prev = _context26.next) {
                    case 0:
                      _context26.prev = 0;
                      _context26.next = 3;
                      return this.storage.get(this.purchaseKey);

                    case 3:
                      result = _context26.sent;
                      purchaseList = JSON.parse(result);
                      return _context26.abrupt("return", purchaseList);

                    case 8:
                      _context26.prev = 8;
                      _context26.t0 = _context26["catch"](0);
                      console.log(_context26.t0);
                      this.toastService.presentToast("Failed to load the purchases");

                    case 12:
                    case "end":
                      return _context26.stop();
                  }
                }
              }, _callee26, this, [[0, 8]]);
            }));
          }
        }, {
          key: "createPurchase",
          value: function createPurchase(purchase) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee27() {
              var value, purchaseList;
              return regeneratorRuntime.wrap(function _callee27$(_context27) {
                while (1) {
                  switch (_context27.prev = _context27.next) {
                    case 0:
                      _context27.prev = 0;
                      _context27.next = 3;
                      return this.storage.get(this.purchaseKey);

                    case 3:
                      value = _context27.sent;
                      purchaseList = JSON.parse(value);

                      if (purchaseList == null || purchaseList == undefined) {
                        purchaseList = [];
                      }

                      purchase.id = Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])();
                      purchaseList.push(purchase);
                      this.storage.set(this.purchaseKey, JSON.stringify(purchaseList));
                      return _context27.abrupt("return", true);

                    case 12:
                      _context27.prev = 12;
                      _context27.t0 = _context27["catch"](0);
                      console.log(_context27.t0);
                      return _context27.abrupt("return", false);

                    case 16:
                    case "end":
                      return _context27.stop();
                  }
                }
              }, _callee27, this, [[0, 12]]);
            }));
          }
        }, {
          key: "updatePurchase",
          value: function updatePurchase(purchase) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee28() {
              var value, purchaseList, index;
              return regeneratorRuntime.wrap(function _callee28$(_context28) {
                while (1) {
                  switch (_context28.prev = _context28.next) {
                    case 0:
                      _context28.prev = 0;
                      _context28.next = 3;
                      return this.storage.get(this.purchaseKey);

                    case 3:
                      value = _context28.sent;
                      purchaseList = JSON.parse(value);
                      index = purchaseList.findIndex(function (i) {
                        return i.id == purchase.id;
                      });
                      purchaseList[index] = purchase;
                      this.storage.set(this.purchaseKey, JSON.stringify(purchaseList));
                      return _context28.abrupt("return", true);

                    case 11:
                      _context28.prev = 11;
                      _context28.t0 = _context28["catch"](0);
                      console.log(_context28.t0);
                      return _context28.abrupt("return", false);

                    case 15:
                    case "end":
                      return _context28.stop();
                  }
                }
              }, _callee28, this, [[0, 11]]);
            }));
          }
        }, {
          key: "getPurchaseCode",
          value: function getPurchaseCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee29() {
              var purchaseCode;
              return regeneratorRuntime.wrap(function _callee29$(_context29) {
                while (1) {
                  switch (_context29.prev = _context29.next) {
                    case 0:
                      _context29.next = 2;
                      return this.storage.get(this.purchaseCodeKey);

                    case 2:
                      purchaseCode = _context29.sent;
                      return _context29.abrupt("return", purchaseCode);

                    case 4:
                    case "end":
                      return _context29.stop();
                  }
                }
              }, _callee29, this);
            }));
          }
        }, {
          key: "incrementPurchaseCode",
          value: function incrementPurchaseCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee30() {
              var purchaseCode;
              return regeneratorRuntime.wrap(function _callee30$(_context30) {
                while (1) {
                  switch (_context30.prev = _context30.next) {
                    case 0:
                      _context30.next = 2;
                      return this.storage.get(this.purchaseCodeKey);

                    case 2:
                      purchaseCode = _context30.sent;

                      if (purchaseCode == null || purchaseCode == undefined) {
                        purchaseCode = 0;
                      }

                      purchaseCode = purchaseCode + 1;
                      _context30.next = 7;
                      return this.storage.set(this.purchaseCodeKey, purchaseCode);

                    case 7:
                      return _context30.abrupt("return", purchaseCode);

                    case 8:
                    case "end":
                      return _context30.stop();
                  }
                }
              }, _callee30, this);
            }));
          }
        }, {
          key: "updateStock",
          value: function updateStock(purchaseItemList) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee31() {
              var _this = this;

              var value, inventories, _iterator, _step, _loop, index;

              return regeneratorRuntime.wrap(function _callee31$(_context31) {
                while (1) {
                  switch (_context31.prev = _context31.next) {
                    case 0:
                      _context31.prev = 0;
                      _context31.next = 3;
                      return this.storage.get(this.inventoryKey);

                    case 3:
                      value = _context31.sent;
                      inventories = JSON.parse(value);
                      _iterator = _createForOfIteratorHelper(purchaseItemList);

                      try {
                        _loop = function _loop() {
                          var pItem = _step.value;
                          index = inventories.findIndex(function (i) {
                            return i.id == pItem.item.id;
                          });
                          var inventory = _this.inventories[index];
                          inventory.quantity = inventory.quantity + pItem.deliverQuantity;

                          _this.storage.set(_this.inventoryKey, JSON.stringify(_this.inventories));
                        };

                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          _loop();
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                      return _context31.abrupt("return", true);

                    case 10:
                      _context31.prev = 10;
                      _context31.t0 = _context31["catch"](0);
                      console.log(_context31.t0);
                      return _context31.abrupt("return", false);

                    case 14:
                    case "end":
                      return _context31.stop();
                  }
                }
              }, _callee31, this, [[0, 10]]);
            }));
          }
        }, {
          key: "getInventoryCode",
          value: function getInventoryCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee32() {
              var inventoryCode;
              return regeneratorRuntime.wrap(function _callee32$(_context32) {
                while (1) {
                  switch (_context32.prev = _context32.next) {
                    case 0:
                      _context32.next = 2;
                      return this.storage.get(this.inventoryCodeKey);

                    case 2:
                      inventoryCode = _context32.sent;
                      return _context32.abrupt("return", inventoryCode);

                    case 4:
                    case "end":
                      return _context32.stop();
                  }
                }
              }, _callee32, this);
            }));
          }
        }, {
          key: "incrementInventoryCode",
          value: function incrementInventoryCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee33() {
              var inventoryCode;
              return regeneratorRuntime.wrap(function _callee33$(_context33) {
                while (1) {
                  switch (_context33.prev = _context33.next) {
                    case 0:
                      _context33.next = 2;
                      return this.storage.get(this.inventoryCodeKey);

                    case 2:
                      inventoryCode = _context33.sent;

                      if (inventoryCode == null || inventoryCode == undefined) {
                        inventoryCode = 0;
                      }

                      inventoryCode = inventoryCode + 1;
                      _context33.next = 7;
                      return this.storage.set(this.inventoryCodeKey, inventoryCode);

                    case 7:
                      return _context33.abrupt("return", inventoryCode);

                    case 8:
                    case "end":
                      return _context33.stop();
                  }
                }
              }, _callee33, this);
            }));
          }
        }, {
          key: "savePrinter",
          value: function savePrinter(macAddress) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee34() {
              return regeneratorRuntime.wrap(function _callee34$(_context34) {
                while (1) {
                  switch (_context34.prev = _context34.next) {
                    case 0:
                      _context34.prev = 0;
                      this.storage.set(this.printerKey, macAddress);
                      return _context34.abrupt("return", true);

                    case 5:
                      _context34.prev = 5;
                      _context34.t0 = _context34["catch"](0);
                      console.log(_context34.t0);
                      return _context34.abrupt("return", false);

                    case 9:
                    case "end":
                      return _context34.stop();
                  }
                }
              }, _callee34, this, [[0, 5]]);
            }));
          }
        }, {
          key: "getPrinter",
          value: function getPrinter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee35() {
              return regeneratorRuntime.wrap(function _callee35$(_context35) {
                while (1) {
                  switch (_context35.prev = _context35.next) {
                    case 0:
                      return _context35.abrupt("return", this.storage.get(this.printerKey));

                    case 1:
                    case "end":
                      return _context35.stop();
                  }
                }
              }, _callee35, this);
            }));
          }
        }]);

        return DbService;
      }();

      DbService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _toastservice_service__WEBPACK_IMPORTED_MODULE_3__["ToastserviceService"]
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__["Storage"]
        }];
      };

      DbService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], DbService);
      /***/
    },

    /***/
    "dugQ":
    /*!*******************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
      \*******************************************************/

    /*! exports provided: default */

    /***/
    function dugQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./validate.js */
      "BuRe");

      function version(uuid) {
        if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
          throw TypeError('Invalid UUID');
        }

        return parseInt(uuid.substr(14, 1), 16);
      }
      /* harmony default export */


      __webpack_exports__["default"] = version;
      /***/
    },

    /***/
    "t133":
    /*!****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
      \****************************************************/

    /*! exports provided: default */

    /***/
    function t133(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__); // Adapted from Chris Veness' SHA1 code at
      // http://www.movable-type.co.uk/scripts/sha1.html


      function f(s, x, y, z) {
        switch (s) {
          case 0:
            return x & y ^ ~x & z;

          case 1:
            return x ^ y ^ z;

          case 2:
            return x & y ^ x & z ^ y & z;

          case 3:
            return x ^ y ^ z;
        }
      }

      function ROTL(x, n) {
        return x << n | x >>> 32 - n;
      }

      function sha1(bytes) {
        var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
        var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

        if (typeof bytes === 'string') {
          var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

          bytes = [];

          for (var i = 0; i < msg.length; ++i) {
            bytes.push(msg.charCodeAt(i));
          }
        } else if (!Array.isArray(bytes)) {
          // Convert Array-like to Array
          bytes = Array.prototype.slice.call(bytes);
        }

        bytes.push(0x80);
        var l = bytes.length / 4 + 2;
        var N = Math.ceil(l / 16);
        var M = new Array(N);

        for (var _i = 0; _i < N; ++_i) {
          var arr = new Uint32Array(16);

          for (var j = 0; j < 16; ++j) {
            arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];
          }

          M[_i] = arr;
        }

        M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
        M[N - 1][14] = Math.floor(M[N - 1][14]);
        M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

        for (var _i2 = 0; _i2 < N; ++_i2) {
          var W = new Uint32Array(80);

          for (var t = 0; t < 16; ++t) {
            W[t] = M[_i2][t];
          }

          for (var _t = 16; _t < 80; ++_t) {
            W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);
          }

          var a = H[0];
          var b = H[1];
          var c = H[2];
          var d = H[3];
          var e = H[4];

          for (var _t2 = 0; _t2 < 80; ++_t2) {
            var s = Math.floor(_t2 / 20);
            var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;
            e = d;
            d = c;
            c = ROTL(b, 30) >>> 0;
            b = a;
            a = T;
          }

          H[0] = H[0] + a >>> 0;
          H[1] = H[1] + b >>> 0;
          H[2] = H[2] + c >>> 0;
          H[3] = H[3] + d >>> 0;
          H[4] = H[4] + e >>> 0;
        }

        return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
      }
      /* harmony default export */


      __webpack_exports__["default"] = sha1;
      /***/
    },

    /***/
    "tysn":
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function tysn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /*
       * Browser-compatible JavaScript MD5
       *
       * Modification of JavaScript MD5
       * https://github.com/blueimp/JavaScript-MD5
       *
       * Copyright 2011, Sebastian Tschan
       * https://blueimp.net
       *
       * Licensed under the MIT license:
       * https://opensource.org/licenses/MIT
       *
       * Based on
       * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
       * Digest Algorithm, as defined in RFC 1321.
       * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
       * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
       * Distributed under the BSD License
       * See http://pajhome.org.uk/crypt/md5 for more info.
       */


      function md5(bytes) {
        if (typeof bytes === 'string') {
          var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

          bytes = new Uint8Array(msg.length);

          for (var i = 0; i < msg.length; ++i) {
            bytes[i] = msg.charCodeAt(i);
          }
        }

        return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
      }
      /*
       * Convert an array of little-endian words to an array of bytes
       */


      function md5ToHexEncodedArray(input) {
        var output = [];
        var length32 = input.length * 32;
        var hexTab = '0123456789abcdef';

        for (var i = 0; i < length32; i += 8) {
          var x = input[i >> 5] >>> i % 32 & 0xff;
          var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
          output.push(hex);
        }

        return output;
      }
      /**
       * Calculate output length with padding and bit length
       */


      function getOutputLength(inputLength8) {
        return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
      }
      /*
       * Calculate the MD5 of an array of little-endian words, and a bit length.
       */


      function wordsToMd5(x, len) {
        /* append padding */
        x[len >> 5] |= 0x80 << len % 32;
        x[getOutputLength(len) - 1] = len;
        var a = 1732584193;
        var b = -271733879;
        var c = -1732584194;
        var d = 271733878;

        for (var i = 0; i < x.length; i += 16) {
          var olda = a;
          var oldb = b;
          var oldc = c;
          var oldd = d;
          a = md5ff(a, b, c, d, x[i], 7, -680876936);
          d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
          c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
          b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
          a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
          d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
          c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
          b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
          a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
          d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
          c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
          b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
          a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
          d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
          c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
          b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
          a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
          d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
          c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
          b = md5gg(b, c, d, a, x[i], 20, -373897302);
          a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
          d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
          c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
          b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
          a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
          d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
          c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
          b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
          a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
          d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
          c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
          b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
          a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
          d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
          c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
          b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
          a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
          d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
          c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
          b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
          a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
          d = md5hh(d, a, b, c, x[i], 11, -358537222);
          c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
          b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
          a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
          d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
          c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
          b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
          a = md5ii(a, b, c, d, x[i], 6, -198630844);
          d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
          c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
          b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
          a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
          d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
          c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
          b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
          a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
          d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
          c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
          b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
          a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
          d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
          c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
          b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
          a = safeAdd(a, olda);
          b = safeAdd(b, oldb);
          c = safeAdd(c, oldc);
          d = safeAdd(d, oldd);
        }

        return [a, b, c, d];
      }
      /*
       * Convert an array bytes to an array of little-endian words
       * Characters >255 have their high-byte silently ignored.
       */


      function bytesToWords(input) {
        if (input.length === 0) {
          return [];
        }

        var length8 = input.length * 8;
        var output = new Uint32Array(getOutputLength(length8));

        for (var i = 0; i < length8; i += 8) {
          output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
        }

        return output;
      }
      /*
       * Add integers, wrapping at 2^32. This uses 16-bit operations internally
       * to work around bugs in some JS interpreters.
       */


      function safeAdd(x, y) {
        var lsw = (x & 0xffff) + (y & 0xffff);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return msw << 16 | lsw & 0xffff;
      }
      /*
       * Bitwise rotate a 32-bit number to the left.
       */


      function bitRotateLeft(num, cnt) {
        return num << cnt | num >>> 32 - cnt;
      }
      /*
       * These functions implement the four basic operations the algorithm uses.
       */


      function md5cmn(q, a, b, x, s, t) {
        return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
      }

      function md5ff(a, b, c, d, x, s, t) {
        return md5cmn(b & c | ~b & d, a, b, x, s, t);
      }

      function md5gg(a, b, c, d, x, s, t) {
        return md5cmn(b & d | c & ~d, a, b, x, s, t);
      }

      function md5hh(a, b, c, d, x, s, t) {
        return md5cmn(b ^ c ^ d, a, b, x, s, t);
      }

      function md5ii(a, b, c, d, x, s, t) {
        return md5cmn(c ^ (b | ~d), a, b, x, s, t);
      }
      /* harmony default export */


      __webpack_exports__["default"] = md5;
      /***/
    },

    /***/
    "xQqG":
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
      \**************************************************/

    /*! exports provided: default */

    /***/
    function xQqG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rng.js */
      "2Pgj");
      /* harmony import */


      var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stringify.js */
      "WM9j"); // **`v1()` - Generate time-based UUID**
      //
      // Inspired by https://github.com/LiosK/UUID.js
      // and http://docs.python.org/library/uuid.html


      var _nodeId;

      var _clockseq; // Previous uuid creation time


      var _lastMSecs = 0;
      var _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

      function v1(options, buf, offset) {
        var i = buf && offset || 0;
        var b = buf || new Array(16);
        options = options || {};
        var node = options.node || _nodeId;
        var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
        // specified.  We do this lazily to minimize issues related to insufficient
        // system entropy.  See #189

        if (node == null || clockseq == null) {
          var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

          if (node == null) {
            // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
            node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
          }

          if (clockseq == null) {
            // Per 4.2.2, randomize (14 bit) clockseq
            clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
          }
        } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
        // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
        // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
        // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


        var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
        // cycle to simulate higher resolution clock

        var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

        var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

        if (dt < 0 && options.clockseq === undefined) {
          clockseq = clockseq + 1 & 0x3fff;
        } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
        // time interval


        if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
          nsecs = 0;
        } // Per 4.2.1.2 Throw error if too many uuids are requested


        if (nsecs >= 10000) {
          throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        }

        _lastMSecs = msecs;
        _lastNSecs = nsecs;
        _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

        msecs += 12219292800000; // `time_low`

        var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
        b[i++] = tl >>> 24 & 0xff;
        b[i++] = tl >>> 16 & 0xff;
        b[i++] = tl >>> 8 & 0xff;
        b[i++] = tl & 0xff; // `time_mid`

        var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
        b[i++] = tmh >>> 8 & 0xff;
        b[i++] = tmh & 0xff; // `time_high_and_version`

        b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

        b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

        b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

        b[i++] = clockseq & 0xff; // `node`

        for (var n = 0; n < 6; ++n) {
          b[i + n] = node[n];
        }

        return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(b);
      }
      /* harmony default export */


      __webpack_exports__["default"] = v1;
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~78a7cb89-es5.js.map