(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_invoice_invoice_module_ts"], {
    /***/
    27546:
    /*!***************************************************!*\
      !*** ./src/app/invoice/invoice-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoicePageRoutingModule": function InvoicePageRoutingModule() {
          return (
            /* binding */
            _InvoicePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _invoice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./invoice.page */
      16313);

      var routes = [{
        path: '',
        component: _invoice_page__WEBPACK_IMPORTED_MODULE_0__.InvoicePage
      }];

      var _InvoicePageRoutingModule = function InvoicePageRoutingModule() {
        _classCallCheck(this, InvoicePageRoutingModule);
      };

      _InvoicePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InvoicePageRoutingModule);
      /***/
    },

    /***/
    63277:
    /*!*******************************************!*\
      !*** ./src/app/invoice/invoice.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoicePageModule": function InvoicePageModule() {
          return (
            /* binding */
            _InvoicePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./invoice-routing.module */
      27546);
      /* harmony import */


      var _invoice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./invoice.page */
      16313);

      var _InvoicePageModule = function InvoicePageModule() {
        _classCallCheck(this, InvoicePageModule);
      };

      _InvoicePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoicePageRoutingModule],
        declarations: [_invoice_page__WEBPACK_IMPORTED_MODULE_1__.InvoicePage]
      })], _InvoicePageModule);
      /***/
    },

    /***/
    16313:
    /*!*****************************************!*\
      !*** ./src/app/invoice/invoice.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InvoicePage": function InvoicePage() {
          return (
            /* binding */
            _InvoicePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./invoice.page.html */
      72555);
      /* harmony import */


      var _invoice_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./invoice.page.scss */
      55895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data.service */
      81502);
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/db.service */
      73773);
      /* harmony import */


      var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/toastservice.service */
      48236);

      var _InvoicePage = /*#__PURE__*/function () {
        function InvoicePage(dbService, toastService, navCtrl, dataService) {
          _classCallCheck(this, InvoicePage);

          this.dbService = dbService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
          this.dataService = dataService;
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
              _this.invoiceList = data;
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

      _InvoicePage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_4__.ToastserviceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }];
      };

      _InvoicePage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-invoice',
        template: _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_invoice_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InvoicePage);
      /***/
    },

    /***/
    55895:
    /*!*******************************************!*\
      !*** ./src/app/invoice/invoice.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    72555:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>invoice</ion-title>\n  </ion-toolbar>\n</ion-header>\n  <ion-content>\n    <ion-list>\n      \n      <ion-item *ngFor= \"let inv of invoiceList\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\">Invoice Number</ion-col>\n            <ion-col size=\"4\">Customer</ion-col>\n            <ion-col size=\"3\">Total</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">{{inv.invoiceNumber}}</ion-col>\n            <ion-col size=\"4\">{{inv.customer.name}}</ion-col>\n            <ion-col size=\"3\">{{inv.total}}</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>    \n    \n  </ion-content>\n  <ion-footer>\n    \n      \n        <ion-row style=\"float:right\">\n          <ion-col >\n            <ion-button ion-button  color=\"primary\" (click)=\"download()\">\n              <ion-icon name=\"mail\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col >\n            <ion-button ion-button  color=\"primary\" (click)=\"addNewInvoice()\">\n              <ion-icon name=\"add-circle\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n          \n      \n    \n    \n  </ion-footer>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_invoice_invoice_module_ts-es5.js.map