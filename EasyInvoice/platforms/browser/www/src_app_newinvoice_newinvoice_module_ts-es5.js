(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_newinvoice_newinvoice_module_ts"], {
    /***/
    33860:
    /*!*********************************************************!*\
      !*** ./src/app/newinvoice/newinvoice-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewinvoicePageRoutingModule": function NewinvoicePageRoutingModule() {
          return (
            /* binding */
            _NewinvoicePageRoutingModule
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


      var _newinvoice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newinvoice.page */
      65349);

      var routes = [{
        path: '',
        component: _newinvoice_page__WEBPACK_IMPORTED_MODULE_0__.NewinvoicePage
      }];

      var _NewinvoicePageRoutingModule = function NewinvoicePageRoutingModule() {
        _classCallCheck(this, NewinvoicePageRoutingModule);
      };

      _NewinvoicePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NewinvoicePageRoutingModule);
      /***/
    },

    /***/
    43747:
    /*!*************************************************!*\
      !*** ./src/app/newinvoice/newinvoice.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewinvoicePageModule": function NewinvoicePageModule() {
          return (
            /* binding */
            _NewinvoicePageModule
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


      var _newinvoice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newinvoice-routing.module */
      33860);
      /* harmony import */


      var _newinvoice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./newinvoice.page */
      65349);

      var _NewinvoicePageModule = function NewinvoicePageModule() {
        _classCallCheck(this, NewinvoicePageModule);
      };

      _NewinvoicePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _newinvoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewinvoicePageRoutingModule],
        declarations: [_newinvoice_page__WEBPACK_IMPORTED_MODULE_1__.NewinvoicePage]
      })], _NewinvoicePageModule);
      /***/
    },

    /***/
    65349:
    /*!***********************************************!*\
      !*** ./src/app/newinvoice/newinvoice.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewinvoicePage": function NewinvoicePage() {
          return (
            /* binding */
            _NewinvoicePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_newinvoice_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./newinvoice.page.html */
      67676);
      /* harmony import */


      var _newinvoice_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./newinvoice.page.scss */
      89851);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/db.service */
      73773);
      /* harmony import */


      var _services_invoice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/invoice */
      21891);
      /* harmony import */


      var _services_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/print.service */
      39534);
      /* harmony import */


      var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/toastservice.service */
      48236);

      var _NewinvoicePage = /*#__PURE__*/function () {
        function NewinvoicePage(dbService, tostService, navCtrl, printService) {
          _classCallCheck(this, NewinvoicePage);

          this.dbService = dbService;
          this.tostService = tostService;
          this.navCtrl = navCtrl;
          this.printService = printService;
        }

        _createClass(NewinvoicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.invoice = {
              invoiceNumber: "",
              invoiceDate: new Date(),
              customer: {
                contactPersonName: "",
                location: "",
                name: "",
                vat: null,
                itemList: null
              },
              invoiceItems: [],
              total: null,
              tax: null
            };
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.resetInvoiceForm();
          }
        }, {
          key: "resetInvoiceForm",
          value: function resetInvoiceForm() {
            var _this = this;

            var inventory;
            this.invoice = new _services_invoice__WEBPACK_IMPORTED_MODULE_3__.Invoice();
            this.invoice.invoiceDate = new Date();
            this.invoice.invoiceItems = new Array();
            this.dbService.getInvoiceNumber().then(function (data) {
              _this.invoice.invoiceNumber = data;
            });
            this.dbService.getAllInventories().then(function (data) {
              var _iterator = _createForOfIteratorHelper(data),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var inv = _step.value;
                  inventory = {
                    name: inv.name,
                    unitPrice: inv.unitPrice,
                    billingUnitPrice: null,
                    quantity: null,
                    InvoiceItem: []
                  };

                  _this.invoice.invoiceItems.push(inventory);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              _this.dbService.getAllCustomers().then(function (data) {
                return _this.customerList = data;
              });
            })["catch"](function (reason) {
              console.log(reason);

              _this.tostService.presentToast("Failed to fetch the inventory items");
            });
          }
        }, {
          key: "calculateInvoiceTotal",
          value: function calculateInvoiceTotal() {
            this.invoice.total = 0;
            var selectedItems = this.invoice.invoiceItems.filter(function (l) {
              return l.selected;
            });

            if (undefined == this.invoice.total || null == this.invoice.total) {
              this.invoice.total = 0;
            }

            var _iterator2 = _createForOfIteratorHelper(selectedItems),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var itm = _step2.value;
                this.invoice.total = this.invoice.total + itm.unitPrice * itm.quantity;
              } //apply vat

            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.invoice.tax = this.invoice.customer.vat * this.invoice.total / 100;
            this.invoice.total = this.invoice.total + this.invoice.tax;
          }
        }, {
          key: "submitBill",
          value: function submitBill() {
            var _this2 = this;

            this.dbService.createOrUpdateInvoice(this.invoice).then(function (data) {
              _this2.tostService.presentToast("Bill submitted successfully");

              _this2.dbService.incrementInvoiceNumber().then(function (data) {
                _this2.invoice.invoiceNumber = data;
              });
            })["catch"](function (reason) {
              _this2.tostService.presentToast("Failed to submit bill");

              console.log(reason);
            });
          }
        }, {
          key: "printBill",
          value: function printBill() {
            var data = '---------------------RECEIPT-----------------------\n\n\nDate :' + this.invoice.invoiceDate + '\nInvoice Number :' + this.invoice.invoiceNumber + '\nCustomer:' + this.invoice.customer + '/n/n';

            var _iterator3 = _createForOfIteratorHelper(this.invoice.invoiceItems),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var itm = _step3.value;
                data = data + 'Item Name :' + itm.name + '  Price :' + itm.unitPrice + '  Quantity :' + itm.quantity;
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }

            data = data + '-----------------------------------------------------------------------';
            data = data + '\n Vat Applied :' + this.invoice.customer.vat;
            data = data + '\n Total :' + this.invoice.total;
            this.printService.sendToBluetoothPrinter(this.printService.selectedPrinter, data);
          }
        }]);

        return NewinvoicePage;
      }();

      _NewinvoicePage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_5__.ToastserviceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: _services_print_service__WEBPACK_IMPORTED_MODULE_4__.PrintService
        }];
      };

      _NewinvoicePage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-newinvoice',
        template: _raw_loader_newinvoice_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_newinvoice_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NewinvoicePage);
      /***/
    },

    /***/
    21891:
    /*!*************************************!*\
      !*** ./src/app/services/invoice.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Invoice": function Invoice() {
          return (
            /* binding */
            _Invoice
          );
        }
        /* harmony export */

      });

      var _Invoice = function _Invoice() {
        _classCallCheck(this, _Invoice);
      };
      /***/

    },

    /***/
    89851:
    /*!*************************************************!*\
      !*** ./src/app/newinvoice/newinvoice.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdpbnZvaWNlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    67676:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newinvoice/newinvoice.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>New Invoice</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"row\"></div>\n    <ion-grid class=\"ion-margin-top\">\n\n      <ion-row>\n        <ion-col size=\"6\" >  \n              <ion-row >\n                <ion-label style=\"margin-left: 18px;\" color=\"primary\" >Invoice Number</ion-label>\n              </ion-row>\n              <ion-row >\n                <ion-label position=\"floating\" style=\"margin-left: 18px;\" >{{invoice.invoiceNumber}}</ion-label>\n              </ion-row>\n\n            \n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-row>\n                <ion-label color=\"primary\"  >Date Of Issue</ion-label>\n              </ion-row>\n              <ion-row>\n                <ion-label position=\"floating\">{{invoice.invoiceDate|date : 'yyyy-MM-dd'}}</ion-label>\n              </ion-row>\n\n            \n          \n          \n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top: 7px;\">\n        <ion-col>\n          \n            <ion-select [(ngModel)]=\"invoice.customer\" placeholder=\"Select Customer\">\n              <ion-select-option *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\n          </ion-select>\n          \n        \n      </ion-col>\n      </ion-row>\n</ion-grid>\n<ion-item-divider></ion-item-divider>\n <ion-list >\n  <ion-item  *ngFor= \"let item of invoice.invoiceItems\">\n    <ion-grid>\n      <ion-row style=\"color : white ; background-color: blueviolet;\">\n        <ion-col size=\"3\">Select</ion-col>\n        <ion-col size=4>Item</ion-col>\n        <ion-col size=2>Price</ion-col>\n        <ion-col size=\"2\">Qty</ion-col>\n      </ion-row>\n    <ion-row style=\"background-color: aliceblue;\">\n        <ion-col size=\"3\">\n          <ion-checkbox [(ngModel)]=\"item.selected\"> </ion-checkbox>\n        </ion-col>\n      <ion-col size=4>\n        <ion-input [(ngModel)]=\"item.name\" disabled></ion-input>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-input [(ngModel)]=\"item.unitPrice\" ></ion-input>\n      </ion-col>\n      <!-- <ion-col>\n        <ion-input placeholder=\"Billing Price\">{{item.billingUnitPrice}}</ion-input>        \n      </ion-col> -->\n      <ion-col size=\"2\">\n        <ion-input [(ngModel)]=\"item.quantity\"></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-item>  \n </ion-list>\n\n<ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label color=\"primary\">Amount To Be Paid</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label >{{invoice.total}}</ion-label>\n      </ion-col>\n    </ion-row>  </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"primary\" (click)=\"calculateInvoiceTotal()\">Calculate Total</ion-button>\n        </ion-col>\n        \n        <ion-col>\n          <ion-button color=\"primary\" (click)=\"submitBill()\">Submit</ion-button>\n        </ion-col>\n        \n        <ion-col>\n          <ion-button color=\"primary\" (click)=\"printBill()\">Print</ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_newinvoice_newinvoice_module_ts-es5.js.map