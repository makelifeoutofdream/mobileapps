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
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportPage"]],
        schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]]
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


      __webpack_exports__["default"] = "#imageToPrint {\n  position: relative;\n  font-size: 16px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.cust-col {\n  text-align: right;\n  padding-right: 5%;\n}\n\n.bu-1 {\n  margin-left: 1%;\n  width: 50%;\n}\n\n.bu-2 {\n  margin-left: 1%;\n  width: 44%;\n}\n\n.list-header {\n  background: #39d3ea;\n  color: #fff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n}\n\n.action-remove {\n  color: #ee4e50;\n  background: none;\n}\n\n.list-row {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n}\n\n.list-row:nth-child(even) {\n  background: #f2f2f2;\n  color: #adadad;\n}\n\n.m-tb-10 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.summary-label {\n  width: 50%;\n  padding: 3px 10px;\n  text-align: start;\n  font-weight: 600;\n  color: #837f7f;\n}\n\n.item-value {\n  width: 50%;\n  padding: 3px 10px;\n  text-align: start;\n  color: #484444;\n  font-weight: bold;\n}\n\n.line-separator {\n  margin: 10px 0px;\n  border: 1px solid #adadad;\n}\n\n.page-heading {\n  color: #484444;\n}\n\n.display-flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.m-b-10 {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JlcG9ydC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyREFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtBQUlKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7QUFLSjs7QUFIQTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0FBTUo7O0FBSkE7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFRSjs7QUFOQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQVNKOztBQVBBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQVVKOztBQVJBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFXSjs7QUFUQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBWUo7O0FBVEE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FBWUo7O0FBVkE7RUFDSSxjQUFBO0FBYUo7O0FBWEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQWNKOztBQVpBO0VBQ0ksbUJBQUE7QUFlSiIsImZpbGUiOiJyZXBvcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ltYWdlVG9QcmludCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZvbnQtc2l6ZTogMTZweCA7XG4gICAgZm9udC1mYW1pbHk6IFZlcmRhbmEsIEdlbmV2YSwgVGFob21hLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7ICAgIFxuICAgIFxufVxuLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGV4dC1yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uY3VzdC1jb2wge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xufVxuLmJ1LTEge1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICB3aWR0aDogNTAlO1xufVxuLmJ1LTIge1xuICAgIG1hcmdpbi1sZWZ0OiAxJTtcbiAgICB3aWR0aDo0NCU7XG59XG4ubGlzdC1oZWFkZXIge1xuICAgIGJhY2tncm91bmQ6ICMzOWQzZWE7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuLmFjdGlvbi1yZW1vdmUge1xuICAgIGNvbG9yOiAjZWU0ZTUwO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG4ubGlzdC1yb3cge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG4ubGlzdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kOiAgI2YyZjJmMjtcbiAgICBjb2xvcjogI2FkYWRhZDtcbn1cbi5tLXRiLTEwIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG4uc3VtbWFyeS1sYWJlbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjODM3ZjdmO1xufVxuLml0ZW0tdmFsdWUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgY29sb3I6ICM0ODQ0NDQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5saW5lLXNlcGFyYXRvciB7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBib3JkZXIgOiAxcHggc29saWQgI2FkYWRhZDtcbn1cbi5wYWdlLWhlYWRpbmcge1xuICAgIGNvbG9yOiAjNDg0NDQ0O1xufVxuLmRpc3BsYXktZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogIGNlbnRlcjtcbn1cbi5tLWItMTAge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */";
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Report</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-item style=\"width: 95%;\" >\n      <ion-col size=\"12\">\n      <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%; width: 95%;  max-width: 95% !important;\"  [(ngModel)]=\"selectedCustomer\" placeholder=\"Customer\">\n      <ion-select-option [value]=null>All</ion-select-option>\n        <ion-select-option style=\"width: 95%;\" *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\n      </ion-select>\n    </ion-col>\n    </ion-item>\n  </ion-row>\n  <ion-row>\n    \n    <ion-col size=\"4\" >\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"startDate\" placeholder=\"Start Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"endDate\" placeholder=\"End Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n    <ion-col  size=\"4\" style=\"text-align: right;\">\n      <ion-button style=\"padding-right: 5%;float: right;\" (click)=\"filterInvoices()\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <div class=\"line-separator\"></div>\n  <div class=\"full-width\" id=\"imageToPrint\">\n    <h5 class=\"text-center page-heading\">Report Summary</h5>\n    <div class=\"display-flex  full-width\">\n        <div  class=\"summary-label\">\n          Total Cost :\n        </div>\n        <div text-right class=\"item-value letter-space\">\n          {{cost | number : '1.2'}}\n        </div>\n    </div>\n    <div class=\"display-flex  full-width\">\n        <div  class=\"summary-label\">\n          Total Revenue :\n        </div>\n        <div text-right class=\"item-value letter-space\">\n          {{revenue | number : '1.2'}} \n        </div>\n    </div>\n    <div class=\"display-flex  full-width\">\n      <div  class=\"summary-label\">\n        Total Profit :\n      </div>\n      <div text-right class=\"item-value letter-space\">\n        {{totalProfit | number : '1.2'}}\n      </div>\n    </div>\n    <div class=\"display-flex  full-width\">\n      <div  class=\"summary-label\">\n        Total Collection :\n      </div>\n      <div text-right class=\"item-value letter-space\">\n        {{collection }}\n      </div>\n    </div>\n    <div class=\"line-separator\"></div>\n    <ion-list class=\"m-b-10\">\n      <ion-list-header class=\"list-header\">\n        <ion-col size=\"3\">Date</ion-col>\n        <ion-col size=\"3\" class=\"text-center\">Customer</ion-col>\n        <ion-col class=\"cust-col\" size=\"4\">Total</ion-col>\n        <ion-col size=\"2\" *ngIf=\"isNotPrint\" >Delete</ion-col>\n      </ion-list-header>\n        <ion-row *ngFor= \"let inv of filterInvoiceList\" class=\"list-row\">\n          <ion-col size=\"3\" (click)=\"viewInvoice(inv)\">{{inv.invoiceDate | date : short}}</ion-col>\n          <ion-col size=\"3\" class=\"text-center\" (click)=\"viewInvoice(inv)\">{{inv.customer.name}}</ion-col>\n          <ion-col class=\"text-right\" size=\"4\" (click)=\"viewInvoice(inv)\">{{inv.total}}</ion-col>\n          <ion-col size=\"2\" >\n              <ion-icon  name=\"trash\" (click)=\"presentDeleteAlertConfirm(inv)\" *ngIf=\"isNotPrint\" class=\"action-remove\"></ion-icon>\n          </ion-col>\n        </ion-row>\n    </ion-list>    \n  </div>\n\n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float: right;\">\n        <ion-col style=\"float: right;\">\n          <ion-button ion-button  color=\"primary\" (click)=\"download()\">\n            <ion-icon name=\"mail\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"primary\" (click)=\"printBill()\">\n            <ion-icon name=\"print\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>";
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
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! dom-to-image */
      "cLAn");
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_11__);

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
          this.isNotPrint = true;
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
            this.startDate = new Date();
            this.endDate = new Date();
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

            var _iterator2 = _createForOfIteratorHelper(this.filterInvoiceList),
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
                      Cost: itm.purchasePrice,
                      TotalCost: itm.purchasePrice * itm.quantity,
                      TotalRevenue: itm.quantity * itm.unitPrice,
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
            var _this8 = this;

            this.isNotPrint = false;
            var node = document.getElementById("imageToPrint");
            var width = this.profile && this.profile.selectedPrinterSize ? this.profile.selectedPrinterSize : 368;
            dom_to_image__WEBPACK_IMPORTED_MODULE_11__["toPng"](node).then(function (dataUrl) {
              var encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_8___default.a();
              var result = encoder.initialize();
              var img = new Image();
              img.src = dataUrl;

              img.onload = function (e) {
                var ht = Math.ceil(node.offsetHeight / 8) * 8;
                ht = ht + 120;
                var finalPrint = result.image(img, width, ht, 'threshold', 120).encode();

                _this8.printService.connectToBluetoothPrinter(_this8.profile.selectedPrinter).subscribe(function (res) {
                  _this8.printService.printDataToPrinter(finalPrint).then(function () {
                    _this8.printService.disconnectBluetoothPrinter().then(function () {
                      _this8.isNotPrint = true;
                    }, function (err) {
                      alert('Disconnecting error ::' + err);
                      _this8.isNotPrint = true;
                    });
                  }, function (err) {
                    alert("Printing Failed..");
                    _this8.isNotPrint = true;
                  });
                }, function (error) {
                  alert("connecting to printer failed..");
                  _this8.isNotPrint = true;
                });
              };
            })["catch"](function (error) {
              console.error("oops, something went wrong!", error);
              this.modalCtrl.dismiss();
            });
          }
        }, {
          key: "showReportsHome",
          value: function showReportsHome() {
            this.navCtrl.navigateRoot('reporthome');
          }
        }, {
          key: "deleteInvoice",
          value: function deleteInvoice(inv) {
            var _this9 = this;

            this.dbService.deleteInvoice(inv).then(function (data) {
              _this9.toastService.presentToast('Invoice removed successfully');

              _this9.getAllInvoices();
            });
          }
        }, {
          key: "presentDeleteAlertConfirm",
          value: function presentDeleteAlertConfirm(inv) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var _this10 = this;

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
                            _this10.deleteInvoice(inv);
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