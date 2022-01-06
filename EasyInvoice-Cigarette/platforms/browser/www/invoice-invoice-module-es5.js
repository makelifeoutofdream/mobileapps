(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-invoice-module"], {
    /***/
    "6MpR":
    /*!*****************************************!*\
      !*** ./src/app/invoice/invoice.page.ts ***!
      \*****************************************/

    /*! exports provided: InvoicePage */

    /***/
    function MpR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoicePage", function () {
        return InvoicePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./invoice.page.html */
      "TRUz");
      /* harmony import */


      var _invoice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./invoice.page.scss */
      "CZNA");
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

      var InvoicePage = /*#__PURE__*/function () {
        function InvoicePage(dbService, toastService, navCtrl, dataService, alertController) {
          _classCallCheck(this, InvoicePage);

          this.dbService = dbService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
          this.dataService = dataService;
          this.alertController = alertController;
        }

        _createClass(InvoicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addNewInvoice",
          value: function addNewInvoice() {
            this.navCtrl.navigateRoot('newinvoice');
          }
        }, {
          key: "getAllInvoices",
          value: function getAllInvoices() {
            var _this = this;

            this.dbService.getAllInvoices().then(function (data) {
              console.log(data);
              _this.invoiceList = data;
              var today = new Date();
              today.setHours(0);
              today.setMinutes(0);
              today.setSeconds(0);
              _this.invoiceList = _this.invoiceList.filter(function (a) {
                return new Date(a.invoiceDate) >= today;
              });
            })["catch"](function (reason) {
              _this.toastService.presentToast("Failed to fetch invoices");

              console.log(reason);
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getAllInvoices();
          }
        }, {
          key: "download",
          value: function download() {
            var invoiceDataList = new Array();

            var _iterator = _createForOfIteratorHelper(this.invoiceList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var inv = _step.value;

                var _iterator2 = _createForOfIteratorHelper(inv.invoiceItems),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var itm = _step2.value;
                    var invoiceData = {
                      InvoiceNumber: inv.invoiceNumber,
                      InvoiceDate: inv.invoiceDate,
                      Customer: inv.customer.name,
                      Item: itm.name,
                      UnitPrice: itm.unitPrice,
                      Quantity: itm.quantity,
                      Tax: inv.tax,
                      Total: inv.total
                    };
                    invoiceDataList.push(invoiceData);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              } // this.dataService.downloadCcSV(this.invoiceList,'invoices.csv');

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.dataService.exportToExcel(invoiceDataList, 'invoices.xlsx');
          }
        }]);

        return InvoicePage;
      }();

      InvoicePage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      InvoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invoice',
        template: _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invoice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InvoicePage);
      /***/
    },

    /***/
    "CZNA":
    /*!*******************************************!*\
      !*** ./src/app/invoice/invoice.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function CZNA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".list-header {\n  background: #39d3ea;\n  color: #fff;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999;\n}\n\n.action-edit {\n  color: #2c29e9;\n  background: none;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.cust-col {\n  text-align: right;\n  padding-right: 5%;\n}\n\n.list-row {\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  padding: 8px 0px;\n}\n\n.line-separator {\n  margin: 10px 0px;\n  border: 1px solid #adadad;\n}\n\n.page-heading {\n  color: #484444;\n}\n\n.list-row:nth-child(even) {\n  background: #f2f2f2;\n  color: #adadad;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ludm9pY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7QUFDSjs7QUFDQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7QUFHSjs7QUFEQTtFQUNJLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGdCQUFBO0VBQ0EseUJBQUE7QUFPSjs7QUFMQTtFQUNJLGNBQUE7QUFRSjs7QUFOQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtBQVNKIiwiZmlsZSI6Imludm9pY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3QtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMzlkM2VhO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgei1pbmRleDogOTk5OTtcbn1cbi5hY3Rpb24tZWRpdCB7XG4gICAgY29sb3I6ICMyYzI5ZTk7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cbi50ZXh0LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnRleHQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuLmN1c3QtY29sIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cbi5saXN0LXJvdyB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA4cHggMHB4O1xufVxuLmxpbmUtc2VwYXJhdG9yIHtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGJvcmRlciA6IDFweCBzb2xpZCAjYWRhZGFkO1xufVxuLnBhZ2UtaGVhZGluZyB7XG4gICAgY29sb3I6ICM0ODQ0NDQ7XG59XG4ubGlzdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgICBiYWNrZ3JvdW5kOiAgI2YyZjJmMjtcbiAgICBjb2xvcjogI2FkYWRhZDtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "EbbV":
    /*!***************************************************!*\
      !*** ./src/app/invoice/invoice-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: InvoicePageRoutingModule */

    /***/
    function EbbV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoicePageRoutingModule", function () {
        return InvoicePageRoutingModule;
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


      var _invoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./invoice.page */
      "6MpR");

      var routes = [{
        path: '',
        component: _invoice_page__WEBPACK_IMPORTED_MODULE_3__["InvoicePage"]
      }];

      var InvoicePageRoutingModule = function InvoicePageRoutingModule() {
        _classCallCheck(this, InvoicePageRoutingModule);
      };

      InvoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InvoicePageRoutingModule);
      /***/
    },

    /***/
    "TRUz":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function TRUz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Invoice</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n  <ion-content>\n    <h5 class=\"text-center page-heading\">Invoices</h5>\n    <ion-list>\n      <ion-list-header class=\"list-header\">\n        <ion-col size=\"4\">Date</ion-col>\n        <ion-col size=\"4\" class=\"text-center\">Customer</ion-col>\n        <ion-col  size=\"4\" class=\"text-right\">Total</ion-col>\n        <!-- <ion-col size=\"2\"></ion-col> -->\n      </ion-list-header>  \n      <ion-row *ngFor= \"let inv of invoiceList\" class=\"list-row\">\n            <ion-col size=\"4\">{{inv.invoiceDate | date : 'dd/MM/yyyy' }}</ion-col>\n            <ion-col size=\"4\" class=\"text-center\">{{inv.customer.name}}</ion-col>\n            <ion-col size=\"4\" class=\"text-right\">{{inv.total}}</ion-col>\n            <!-- <ion-col size=\"2\" >\n              <ion-icon  name=\"create-outline\"  class=\"action-edit\" (click)=\"editInvoice(inv)\"></ion-icon>\n          </ion-col> -->\n      </ion-row>\n    </ion-list>   \n    <div class=\"line-separator\"></div> \n    \n  </ion-content>\n  <ion-footer>\n    \n      \n        <ion-row style=\"float:right\">\n          <ion-col >\n            <ion-button ion-button  color=\"primary\" (click)=\"download()\">\n              <ion-icon name=\"mail\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col >\n            <ion-button ion-button  color=\"primary\" (click)=\"addNewInvoice()\">\n              <ion-icon name=\"add-circle\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n          \n      \n    \n    \n  </ion-footer>\n\n";
      /***/
    },

    /***/
    "hdHI":
    /*!*******************************************!*\
      !*** ./src/app/invoice/invoice.module.ts ***!
      \*******************************************/

    /*! exports provided: InvoicePageModule */

    /***/
    function hdHI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InvoicePageModule", function () {
        return InvoicePageModule;
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


      var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./invoice-routing.module */
      "EbbV");
      /* harmony import */


      var _invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./invoice.page */
      "6MpR");

      var InvoicePageModule = function InvoicePageModule() {
        _classCallCheck(this, InvoicePageModule);
      };

      InvoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvoicePageRoutingModule"]],
        declarations: [_invoice_page__WEBPACK_IMPORTED_MODULE_6__["InvoicePage"]]
      })], InvoicePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=invoice-invoice-module-es5.js.map