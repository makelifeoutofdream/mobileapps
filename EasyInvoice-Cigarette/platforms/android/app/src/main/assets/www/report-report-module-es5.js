(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"], {
    /***/
    "4Z/T":
    /*!************************************************!*\
      !*** ./node_modules/sprintf-js/src/sprintf.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function ZT(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_RESULT__;
      /* global window, exports, define */


      !function () {
        'use strict';

        var re = {
          not_string: /[^s]/,
          not_bool: /[^t]/,
          not_type: /[^T]/,
          not_primitive: /[^v]/,
          number: /[diefg]/,
          numeric_arg: /[bcdiefguxX]/,
          json: /[j]/,
          not_json: /[^j]/,
          text: /^[^\x25]+/,
          modulo: /^\x25{2}/,
          placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
          key: /^([a-z_][a-z_\d]*)/i,
          key_access: /^\.([a-z_][a-z_\d]*)/i,
          index_access: /^\[(\d+)\]/,
          sign: /^[+-]/
        };

        function sprintf(key) {
          // `arguments` is not an array, but should be fine for this call
          return sprintf_format(sprintf_parse(key), arguments);
        }

        function vsprintf(fmt, argv) {
          return sprintf.apply(null, [fmt].concat(argv || []));
        }

        function sprintf_format(parse_tree, argv) {
          var cursor = 1,
              tree_length = parse_tree.length,
              arg,
              output = '',
              i,
              k,
              ph,
              pad,
              pad_character,
              pad_length,
              is_positive,
              sign;

          for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
              output += parse_tree[i];
            } else if (typeof parse_tree[i] === 'object') {
              ph = parse_tree[i]; // convenience purposes only

              if (ph.keys) {
                // keyword argument
                arg = argv[cursor];

                for (k = 0; k < ph.keys.length; k++) {
                  if (arg == undefined) {
                    throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k - 1]));
                  }

                  arg = arg[ph.keys[k]];
                }
              } else if (ph.param_no) {
                // positional argument (explicit)
                arg = argv[ph.param_no];
              } else {
                // positional argument (implicit)
                arg = argv[cursor++];
              }

              if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
                arg = arg();
              }

              if (re.numeric_arg.test(ph.type) && typeof arg !== 'number' && isNaN(arg)) {
                throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg));
              }

              if (re.number.test(ph.type)) {
                is_positive = arg >= 0;
              }

              switch (ph.type) {
                case 'b':
                  arg = parseInt(arg, 10).toString(2);
                  break;

                case 'c':
                  arg = String.fromCharCode(parseInt(arg, 10));
                  break;

                case 'd':
                case 'i':
                  arg = parseInt(arg, 10);
                  break;

                case 'j':
                  arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0);
                  break;

                case 'e':
                  arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential();
                  break;

                case 'f':
                  arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg);
                  break;

                case 'g':
                  arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg);
                  break;

                case 'o':
                  arg = (parseInt(arg, 10) >>> 0).toString(8);
                  break;

                case 's':
                  arg = String(arg);
                  arg = ph.precision ? arg.substring(0, ph.precision) : arg;
                  break;

                case 't':
                  arg = String(!!arg);
                  arg = ph.precision ? arg.substring(0, ph.precision) : arg;
                  break;

                case 'T':
                  arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase();
                  arg = ph.precision ? arg.substring(0, ph.precision) : arg;
                  break;

                case 'u':
                  arg = parseInt(arg, 10) >>> 0;
                  break;

                case 'v':
                  arg = arg.valueOf();
                  arg = ph.precision ? arg.substring(0, ph.precision) : arg;
                  break;

                case 'x':
                  arg = (parseInt(arg, 10) >>> 0).toString(16);
                  break;

                case 'X':
                  arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase();
                  break;
              }

              if (re.json.test(ph.type)) {
                output += arg;
              } else {
                if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
                  sign = is_positive ? '+' : '-';
                  arg = arg.toString().replace(re.sign, '');
                } else {
                  sign = '';
                }

                pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' ';
                pad_length = ph.width - (sign + arg).length;
                pad = ph.width ? pad_length > 0 ? pad_character.repeat(pad_length) : '' : '';
                output += ph.align ? sign + arg + pad : pad_character === '0' ? sign + pad + arg : pad + sign + arg;
              }
            }
          }

          return output;
        }

        var sprintf_cache = Object.create(null);

        function sprintf_parse(fmt) {
          if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt];
          }

          var _fmt = fmt,
              match,
              parse_tree = [],
              arg_names = 0;

          while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
              parse_tree.push(match[0]);
            } else if ((match = re.modulo.exec(_fmt)) !== null) {
              parse_tree.push('%');
            } else if ((match = re.placeholder.exec(_fmt)) !== null) {
              if (match[2]) {
                arg_names |= 1;
                var field_list = [],
                    replacement_field = match[2],
                    field_match = [];

                if ((field_match = re.key.exec(replacement_field)) !== null) {
                  field_list.push(field_match[1]);

                  while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                    if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                      field_list.push(field_match[1]);
                    } else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                      field_list.push(field_match[1]);
                    } else {
                      throw new SyntaxError('[sprintf] failed to parse named argument key');
                    }
                  }
                } else {
                  throw new SyntaxError('[sprintf] failed to parse named argument key');
                }

                match[2] = field_list;
              } else {
                arg_names |= 2;
              }

              if (arg_names === 3) {
                throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported');
              }

              parse_tree.push({
                placeholder: match[0],
                param_no: match[1],
                keys: match[2],
                sign: match[3],
                pad_char: match[4],
                align: match[5],
                width: match[6],
                precision: match[7],
                type: match[8]
              });
            } else {
              throw new SyntaxError('[sprintf] unexpected placeholder');
            }

            _fmt = _fmt.substring(match[0].length);
          }

          return sprintf_cache[fmt] = parse_tree;
        }
        /**
         * export to either browser or node.js
         */

        /* eslint-disable quote-props */


        if (true) {
          exports['sprintf'] = sprintf;
          exports['vsprintf'] = vsprintf;
        }

        if (typeof window !== 'undefined') {
          window['sprintf'] = sprintf;
          window['vsprintf'] = vsprintf;

          if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
              return {
                'sprintf': sprintf,
                'vsprintf': vsprintf
              };
            }.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
          }
        }
        /* eslint-enable quote-props */

      }(); // eslint-disable-line

      /***/
    },

    /***/
    "LVab":
    /*!*****************************************!*\
      !*** ./src/app/report/report.module.ts ***!
      \*****************************************/

    /*! exports provided: ReportPageModule */

    /***/
    function LVab(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportPageModule", function () {
        return ReportPageModule;
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./report-routing.module */
      "UkO7");
      /* harmony import */


      var _report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./report.page */
      "jDlz");

      var ReportPageModule = function ReportPageModule() {
        _classCallCheck(this, ReportPageModule);
      };

      ReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _report_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportPageRoutingModule"]],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportPage"]]
      })], ReportPageModule);
      /***/
    },

    /***/
    "UkO7":
    /*!*************************************************!*\
      !*** ./src/app/report/report-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: ReportPageRoutingModule */

    /***/
    function UkO7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportPageRoutingModule", function () {
        return ReportPageRoutingModule;
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./report.page */
      "jDlz");

      var routes = [{
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_3__["ReportPage"]
      }];

      var ReportPageRoutingModule = function ReportPageRoutingModule() {
        _classCallCheck(this, ReportPageRoutingModule);
      };

      ReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ReportPageRoutingModule);
      /***/
    },

    /***/
    "WnCc":
    /*!*****************************************!*\
      !*** ./src/app/report/report.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function WnCc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "eYnM":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function eYnM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Report</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-item style=\"width: 95%;\" >\n      <ion-col size=\"12\">\n      <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%; width: 95%;  max-width: 95% !important;\"  [(ngModel)]=\"selectedCustomer\" placeholder=\"Customer\">\n      <ion-select-option [value]=null>All</ion-select-option>\n        <ion-select-option style=\"width: 95%;\" *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\n      </ion-select>\n    </ion-col>\n    </ion-item>\n  </ion-row>\n  <ion-row>\n    \n    <ion-col size=\"4\" >\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"startDate\" placeholder=\"Start Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"endDate\" placeholder=\"End Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n    <ion-col  size=\"4\" style=\"text-align: right;\">\n      <ion-button style=\"padding-right: 5%;float: right;\" (click)=\"filterInvoices()\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"float:right\">\n    \n  </ion-row>\n  <ion-item-divider></ion-item-divider>\n  \n  <ion-list>\n    <ion-list-header>\n      <ion-col size=\"3\">Date</ion-col>\n      <ion-col size=\"3\" style=\"text-align: center;\">Customer</ion-col>\n      <ion-col style=\"text-align: right;padding-right: 5%;\" size=\"4\">Total</ion-col>\n      <ion-col size=\"2\">Delete</ion-col>\n    </ion-list-header>\n    <ion-item *ngFor= \"let inv of filterInvoiceList\" >\n      \n        \n        \n          <ion-col size=\"3\" (click)=\"viewInvoice(inv)\">{{inv.invoiceDate | date : short}}</ion-col>\n          <ion-col size=\"3\" style=\"text-align: center;\" (click)=\"viewInvoice(inv)\">{{inv.customer.name}}</ion-col>\n          <ion-col style=\"text-align: right;\" size=\"4\" (click)=\"viewInvoice(inv)\">{{inv.total}}</ion-col>\n          <ion-col size=\"2\"  style=\"float: right;\" >\n          <ion-button style=\"margin-left: 3%;\"  (click)=\"presentDeleteAlertConfirm(inv)\">\n            <ion-icon style=\"text-align: right;\" name=\"trash-bin\"></ion-icon>\n          </ion-button>\n        </ion-col>\n    </ion-item>\n  </ion-list>    \n\n</ion-content>\n<ion-content  style=\"max-height: 10%;margin-top: 2%;\" slot=\"fixed\">\n  <div class=\"display-flex  full-width\">\n    <ion-badge style=\"margin-left: 1%;width: 50%;\" color=\"primary\">Total Cost : {{cost | number : '1.2'}}</ion-badge>\n    <ion-badge style=\"margin-left: 1%;width:44%\" color=\"primary\">Total Revenue : {{revenue | number : '1.2'}}</ion-badge>\n    \n  </div>\n  <div class=\"display-flex  full-width\">\n    \n    <ion-badge style=\"margin-left: 1%;width: 50%;\" color=\"primary\">Total Profit : {{(totalProfit) | number : '1.2'}}</ion-badge>\n    <ion-badge style=\"margin-left: 1%;width: 44% ;\" color=\"primary\">Total Collection : {{collection }}</ion-badge>\n  </div>\n\n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float: right;\">\n        <ion-col style=\"float: right;\">\n          <ion-button ion-button  color=\"primary\" (click)=\"download()\">\n            <ion-icon name=\"mail\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"primary\" (click)=\"printBill()\">\n            <ion-icon name=\"print\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>";
      /***/
    },

    /***/
    "jDlz":
    /*!***************************************!*\
      !*** ./src/app/report/report.page.ts ***!
      \***************************************/

    /*! exports provided: ReportPage */

    /***/
    function jDlz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ReportPage", function () {
        return ReportPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./report.page.html */
      "eYnM");
      /* harmony import */


      var _report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./report.page.scss */
      "WnCc");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../data.service */
      "R7Hv");
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/db.service */
      "ajt+");
      /* harmony import */


      var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/toastservice.service */
      "Gb+d");
      /* harmony import */


      var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! esc-pos-encoder-ionic */
      "+4vP");
      /* harmony import */


      var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var sprintf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! sprintf-js */
      "4Z/T");
      /* harmony import */


      var sprintf_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _services_print_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../services/print.service */
      "Bhbv");

      var ReportPage = /*#__PURE__*/function () {
        function ReportPage(dbService, toastService, printService, navCtrl, dataService, alertController, loadingController) {
          _classCallCheck(this, ReportPage);

          this.dbService = dbService;
          this.toastService = toastService;
          this.printService = printService;
          this.navCtrl = navCtrl;
          this.dataService = dataService;
          this.alertController = alertController;
          this.loadingController = loadingController;
          this.totalProfit = 0;
          this.cost = 0;
          this.revenue = 0;
          this.collection = 0;
        }

        _createClass(ReportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.customerList = [];
          }
        }, {
          key: "addNewInvoice",
          value: function addNewInvoice() {
            this.navCtrl.navigateForward('newinvoice');
          }
        }, {
          key: "getAllInvoices",
          value: function getAllInvoices() {
            var _this = this;

            this.dbService.getAllInvoices().then(function (data) {
              _this.invoiceList = data;

              _this.filterInvoices();
            })["catch"](function (reason) {
              _this.toastService.presentToast("Failed to fetch invoices");

              console.log(reason);
            });
          }
        }, {
          key: "getAllCustomers",
          value: function getAllCustomers() {
            var _this2 = this;

            this.dbService.getAllCustomers().then(function (data) {
              return _this2.customerList = data;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            this.header = [];
            this.header.push('Inv No');
            this.header.push('Customer');
            this.header.push('Total');
            this.startDate = null;
            this.endDate = null;
            this.getAllInvoices();
            this.getAllCustomers();
            this.dbService.getProfile().then(function (data) {
              _this3.profile = data;
            });
          }
        }, {
          key: "applyFilter",
          value: function applyFilter() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var start, end;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      start = new Date(this.startDate);
                      end = new Date(this.endDate);

                      if (this.startDate != null && this.startDate != undefined) {
                        start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
                        start.setHours(0);
                        start.setMinutes(0);
                        start.setSeconds(0);
                      }

                      if (this.endDate != null && this.endDate != undefined) {
                        end = new Date(end.getFullYear(), end.getMonth(), end.getDate());
                        end.setHours(23);
                        end.setMinutes(23);
                        end.setSeconds(23);
                      }

                      if (this.selectedCustomer != null && this.selectedCustomer != undefined && (this.startDate == null || this.startDate == undefined) && (this.endDate == null || this.endDate == undefined)) {
                        this.filterInvoiceList = this.invoiceList.filter(function (inv) {
                          return inv.customer.id == _this4.selectedCustomer.id;
                        });
                      } else if (this.selectedCustomer != null && this.selectedCustomer != undefined && this.startDate != null && this.startDate != undefined && (this.endDate == null || this.endDate == undefined)) {
                        this.filterInvoiceList = this.invoiceList.filter(function (inv) {
                          return inv.customer.id == _this4.selectedCustomer.id && new Date(inv.invoiceDate) >= start;
                        });
                      } else if (this.selectedCustomer != null && this.selectedCustomer != undefined && this.startDate != null && this.startDate != undefined && this.endDate != null && this.endDate != undefined) {
                        this.filterInvoiceList = this.invoiceList.filter(function (inv) {
                          var date = new Date(inv.invoiceDate);
                          date.setHours(1);
                          date.setMinutes(1);
                          date.setSeconds(1);
                          return inv.customer.id == _this4.selectedCustomer.id && date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
                        });
                      } else if ((this.selectedCustomer == null || this.selectedCustomer == undefined) && this.startDate != null && this.startDate != undefined && this.endDate != null && this.endDate != undefined) {
                        this.filterInvoiceList = this.invoiceList.filter(function (inv) {
                          var date = new Date(inv.invoiceDate);
                          date.setHours(1);
                          date.setMinutes(1);
                          date.setSeconds(1);
                          console.log('date ' + date.getTime());
                          console.log('start ' + start.getTime());
                          console.log('end ' + end.getTime());
                          return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
                        });
                      } else if ((this.selectedCustomer == null || this.selectedCustomer == undefined) && this.startDate != null && this.startDate != undefined && (this.endDate == null || this.endDate == undefined)) {
                        this.filterInvoiceList = this.invoiceList.filter(function (inv) {
                          return new Date(inv.invoiceDate) >= start;
                        });
                      } else if ((this.selectedCustomer == null || this.selectedCustomer == undefined) && (this.startDate == null || this.startDate == undefined) && this.endDate != null && this.endDate != undefined) {
                        this.filterInvoiceList = this.invoiceList.filter(function (inv) {
                          return new Date(inv.invoiceDate) <= end;
                        });
                      } else {
                        this.filterInvoiceList = this.invoiceList;
                      }

                      return _context.abrupt("return", this.filterInvoiceList);

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "filterInvoices",
          value: function filterInvoices() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        duration: 300000
                      });

                    case 2:
                      loading = _context2.sent;
                      _context2.next = 5;
                      return loading.present();

                    case 5:
                      this.applyFilter().then(function (data) {
                        _this5.totalCost().then(function (data) {
                          _this5.cost = data;

                          _this5.totalRevenue().then(function (data) {
                            _this5.revenue = data;

                            _this5.totalCollection().then(function (res) {
                              _this5.collection = res;
                              _this5.totalProfit = _this5.revenue - _this5.cost;
                              loading.dismiss();
                              console.log('Loading dismissed!');
                            });
                          });
                        });
                      });

                    case 6:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "totalTax",
          value: function totalTax(invoices) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (!(this.filterInvoiceList != null && this.filterInvoiceList != undefined && this.filterInvoiceList.length)) {
                        _context3.next = 2;
                        break;
                      }

                      return _context3.abrupt("return", this.filterInvoiceList.map(function (itm) {
                        return itm.tax;
                      }).reduce(function (acc, nxt) {
                        return acc + nxt;
                      }));

                    case 2:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "totalCost",
          value: function totalCost() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var invoiceItemList;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      if (!(this.filterInvoiceList != null && this.filterInvoiceList != undefined && this.filterInvoiceList.length)) {
                        _context4.next = 4;
                        break;
                      }

                      invoiceItemList = this.filterInvoiceList.reduce(function (arr, elem) {
                        return arr.concat(elem.invoiceItems);
                      }, []);
                      return _context4.abrupt("return", invoiceItemList.map(function (itm) {
                        if (itm.quantity != null && itm.quantity != undefined && itm.purchasePrice != null && itm.purchasePrice != undefined) return itm.quantity * itm.purchasePrice;
                      }).reduce(function (acc, nxt) {
                        return acc + nxt;
                      }));

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "sum",
          value: function sum(invoices) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      if (!(this.filterInvoiceList != null && this.filterInvoiceList != undefined && this.filterInvoiceList.length)) {
                        _context5.next = 2;
                        break;
                      }

                      return _context5.abrupt("return", this.filterInvoiceList.map(function (itm) {
                        return itm.total;
                      }).reduce(function (acc, nxt) {
                        return acc + nxt;
                      }));

                    case 2:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "totalCollection",
          value: function totalCollection() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var amtpaid, _iterator, _step, i;

              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      if (!(this.filterInvoiceList != null && this.filterInvoiceList != undefined && this.filterInvoiceList.length)) {
                        _context6.next = 5;
                        break;
                      }

                      amtpaid = 0;
                      _iterator = _createForOfIteratorHelper(this.filterInvoiceList);

                      try {
                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          i = _step.value;

                          if (typeof i.amountPaid === 'string') {
                            amtpaid = amtpaid + Number.parseFloat(i.amountPaid);
                          } else {
                            amtpaid = amtpaid + i.amountPaid;
                          }
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                      return _context6.abrupt("return", amtpaid);

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "totalRevenue",
          value: function totalRevenue() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var invoiceItemList;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      if (!(this.filterInvoiceList != null && this.filterInvoiceList != undefined && this.filterInvoiceList.length)) {
                        _context7.next = 4;
                        break;
                      }

                      invoiceItemList = this.filterInvoiceList.reduce(function (arr, elem) {
                        return arr.concat(elem.invoiceItems);
                      }, []);
                      return _context7.abrupt("return", invoiceItemList.map(function (itm) {
                        if (itm.quantity != null && itm.quantity != undefined && itm.unitPrice != null && itm.unitPrice != undefined) return itm.quantity * itm.unitPrice;
                      }).reduce(function (acc, nxt) {
                        return acc + nxt;
                      }));

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          }
        }, {
          key: "flatten",
          value: function flatten(i, arrayField) {
            var _this6 = this;

            if (Array.isArray(i)) return i.map(function (c) {
              return _this6.flatten(c, arrayField);
            });
            if (i.hasOwnProperty(arrayField)) return [Object.assign(Object.assign({}, i), _defineProperty({}, arrayField, null))].concat(_toConsumableArray(i[arrayField].map(function (c) {
              return _this6.flatten(c, arrayField);
            })));
            return Object.assign(Object.assign({}, i), _defineProperty({}, arrayField, null));
          }
        }, {
          key: "download",
          value: function download() {
            var invoiceDataList = new Array();

            var _iterator2 = _createForOfIteratorHelper(this.invoiceList),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var inv = _step2.value;

                var _iterator3 = _createForOfIteratorHelper(inv.invoiceItems),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var it = _step3.value;
                    var itm = it;
                    var invoiceData = {
                      InvoiceNumber: inv.invoiceNumber,
                      InvoiceDate: inv.invoiceDate,
                      Customer: inv.customer.name,
                      Item: itm.name,
                      UnitPrice: itm.unitPrice,
                      Quantity: itm.quantity,
                      Cost: itm.purchaseUnitPrice,
                      TotalCost: itm.purchasePrice * itm.quantity,
                      Tax: inv.tax,
                      GP: itm.quantity * itm.unitPrice - itm.purchasePrice * itm.quantity,
                      TotalWithVAT: inv.total
                    };
                    invoiceDataList.push(invoiceData);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              } // this.dataService.downloadCcSV(this.invoiceList,'invoices.csv');

            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.dataService.exportToExcel(invoiceDataList, 'invoices.xlsx');
          }
        }, {
          key: "viewInvoice",
          value: function viewInvoice(invoice) {
            var navigationExtras = {
              queryParams: {
                invoice: invoice
              }
            };
            console.log("selected invoice" + invoice.invoiceNumber);
            this.navCtrl.navigateRoot('viewinvoice', navigationExtras);
          }
        }, {
          key: "getFormatedContent",
          value: function getFormatedContent() {
            var _this7 = this;

            var encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_8___default.a();
            var grossTax = 0;
            var total = 0;
            this.totalTax(this.filterInvoiceList).then(function (data) {
              grossTax = data;

              _this7.sum(_this7.filterInvoiceList).then(function (val) {
                total = val;
                var grossTotal = total - grossTax;
                var today = new Date();
                var datetime = today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
                var result = encoder.initialize().bold(true).raw([0x1B, 0x21, 0x20]).align('center').line(_this7.profile.companyName).bold(true).newline().raw([0x1B, 0x21, 0x03]).align('left').bold(true).line('VAT # : ' + _this7.profile.vatNumber + ',' + 'CR # : ' + _this7.profile.crNumber).align('left').bold(true).line('---------------------------------------------------------------').bold(true).align('left').line('Print Generated At :' + datetime).align('left').line('Date Range : ' + _this7.startDate + 'To ' + _this7.endDate).align('left').bold(true).line('---------------------------------------------------------------').bold(true).align('left').line('Gross Total(Excl.VAT) ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%11.2f', grossTotal)).align('left').line('Total VAT(' + _this7.profile.vat + ') ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%11.2f', grossTax)).align('left').line('Total ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%11.2f', total)).align('left').bold(true).line('---------------------------------------------------------------').bold(true).encode();
                return result;
              });
            });
          }
        }, {
          key: "printBill",
          value: function printBill() {
            try {
              this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter, this.getFormatedContent());
            } catch (reason) {
              this.toastService.presentToast("Print Failed" + reason);
            }
          }
        }, {
          key: "showReportsHome",
          value: function showReportsHome() {
            this.navCtrl.navigateRoot('reporthome');
          }
        }, {
          key: "deleteInvoice",
          value: function deleteInvoice(inv) {
            var _this8 = this;

            this.dbService.deleteInvoice(inv).then(function (data) {
              _this8.toastService.presentToast('Invoice removed successfully');

              _this8.getAllInvoices();
            });
          }
        }, {
          key: "presentDeleteAlertConfirm",
          value: function presentDeleteAlertConfirm(inv) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this9 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.next = 2;
                      return this.alertController.create({
                        // cssClass: 'my-custom-class',
                        header: 'Confirm!',
                        message: '<strong>Are you sure to delete this invoice?</strong>!!!',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this9.deleteInvoice(inv);
                          }
                        }]
                      });

                    case 2:
                      alert = _context8.sent;
                      _context8.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this);
            }));
          }
        }]);

        return ReportPage;
      }();

      ReportPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"]
        }, {
          type: _services_print_service__WEBPACK_IMPORTED_MODULE_10__["PrintService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      ReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report',
        template: _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ReportPage);
      /***/
    }
  }]);
})();
//# sourceMappingURL=report-report-module-es5.js.map