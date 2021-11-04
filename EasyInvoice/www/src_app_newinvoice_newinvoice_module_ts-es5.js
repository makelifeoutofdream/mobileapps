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
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      93319);

      var _NewinvoicePageModule = function NewinvoicePageModule() {
        _classCallCheck(this, NewinvoicePageModule);
      };

      _NewinvoicePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _newinvoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewinvoicePageRoutingModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule],
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
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
      /* harmony import */


      var _validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../validation.service */
      62813);

      var _NewinvoicePage = /*#__PURE__*/function () {
        function NewinvoicePage(dbService, tostService, navCtrl, printService, validationService) {
          _classCallCheck(this, NewinvoicePage);

          this.dbService = dbService;
          this.tostService = tostService;
          this.navCtrl = navCtrl;
          this.printService = printService;
          this.validationService = validationService;
        }

        _createClass(NewinvoicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.invoice = {
              id: null,
              invoiceNumber: "",
              invoiceDate: new Date(),
              invoiceDateString: "",
              customer: {
                id: null,
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
            var _this = this;

            this.applyVat = true;
            this.dbService.getProfile().then(function (data) {
              _this.profile = data;
            });
            this.resetInvoiceForm();
          }
        }, {
          key: "filterProducts",
          value: function filterProducts(evt) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var searchTerm;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.product = {
                        id: null,
                        name: "",
                        unitPrice: null,
                        billingUnitPrice: null,
                        quantity: null,
                        selected: null,
                        purchaseUnitPrice: null
                      };
                      this.products = this.productsBackup;
                      searchTerm = evt.srcElement.value;

                      if (searchTerm) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return");

                    case 5:
                      this.products = this.products.filter(function (currentProduct) {
                        if (currentProduct.name && searchTerm) {
                          return currentProduct.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                        }
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "productSelected",
          value: function productSelected(evt) {
            this.selectedProducts = evt.value;
            this.invoice.invoiceItems = this.selectedProducts;
          }
        }, {
          key: "resetInvoiceForm",
          value: function resetInvoiceForm() {
            var _this2 = this;

            this.productsBackup = new Array();
            this.products = new Array();
            this.invoice = new _services_invoice__WEBPACK_IMPORTED_MODULE_3__.Invoice();
            this.dbService.incrementInvoiceNumber().then(function (data) {
              _this2.invoice.invoiceNumber = data;
            });
            this.invoice.invoiceDate = new Date();
            this.invoice.invoiceItems = new Array();
            this.selectedProducts = new Array(); //this.dbService.getInvoiceNumber().then(data=>{
            //this.invoice.invoiceNumber=data;
            //});

            this.dbService.getAllCustomers().then(function (data) {
              return _this2.customerList = data;
            });
          }
        }, {
          key: "populateCustomerProducts",
          value: function populateCustomerProducts() {
            if (this.invoice.customer != null && this.invoice.customer != undefined && this.invoice.customer.itemList != null && this.invoice.customer.itemList != undefined) {
              console.log("populateCustomerProducts");
              var inventory;

              var _iterator = _createForOfIteratorHelper(this.invoice.customer.itemList),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var inv = _step.value;
                  inventory = {
                    id: inv.id,
                    name: inv.name,
                    unitPrice: inv.unitPrice,
                    billingUnitPrice: null,
                    quantity: null,
                    InvoiceItem: [],
                    purchasePrice: inv.purchasePrice
                  };
                  this.products.push(inventory);
                  this.productsBackup.push(inventory);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          }
        }, {
          key: "calculateInvoiceTotal",
          value: function calculateInvoiceTotal(evt) {
            this.invoice.total = 0;

            if (undefined == this.invoice.total || null == this.invoice.total) {
              this.invoice.total = 0;
            }

            var _iterator2 = _createForOfIteratorHelper(this.invoice.invoiceItems),
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

            if (this.applyVat) {
              if (this.profile != null && this.profile != undefined && this.profile.vat != null && this.profile.vat != undefined) {
                this.invoice.tax = this.profile.vat * this.invoice.total / 100;
                this.invoice.total = this.invoice.total + this.invoice.tax;
              }
            }
          }
        }, {
          key: "submitBill",
          value: function submitBill() {
            var _this3 = this;

            this.invoice.invoiceDate.setHours(0, 0, 0, 0);
            this.dbService.createOrUpdateInvoice(this.invoice).then(function (data) {
              _this3.dbService.getAllInventories().then(function (stocks) {
                var stockList = stocks;

                var _iterator3 = _createForOfIteratorHelper(_this3.invoice.invoiceItems),
                    _step3;

                try {
                  var _loop = function _loop() {
                    var itm = _step3.value;
                    index = stockList.findIndex(function (i) {
                      return i.id == itm.id;
                    });
                    stockList[index].quantity = stockList[index].quantity - itm.quantity;
                  };

                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var index;

                    _loop();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                _this3.dbService.saveAllInventories(stockList).then(function (res) {
                  _this3.tostService.presentToast("Bill submitted successfully");

                  _this3.navCtrl.navigateRoot('invoice');
                });
              });
            })["catch"](function (reason) {
              _this3.tostService.presentToast("Failed to submit bill");

              console.log(reason);
            });
          }
        }, {
          key: "printBill",
          value: function printBill() {
            var data = '---------------------RECEIPT-----------------------\n\n\nDate :' + this.invoice.invoiceDate + '\nInvoice Number :' + this.invoice.invoiceNumber + '\nCustomer:' + this.invoice.customer + '/n/n';

            var _iterator4 = _createForOfIteratorHelper(this.invoice.invoiceItems),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var itm = _step4.value;
                data = data + 'Item Name :' + itm.name + '  Price :' + itm.unitPrice + '  Quantity :' + itm.quantity;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            data = data + '-----------------------------------------------------------------------';
            data = data + '\n Vat Applied :' + this.invoice.customer.vat;
            data = data + '\n Total :' + this.invoice.total;
            this.printService.sendToBluetoothPrinter(this.printService.selectedPrinter, data);
          }
        }, {
          key: "numericOnly",
          value: function numericOnly(evt) {
            return this.validationService.numericOnly(evt);
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
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController
        }, {
          type: _services_print_service__WEBPACK_IMPORTED_MODULE_4__.PrintService
        }, {
          type: _validation_service__WEBPACK_IMPORTED_MODULE_6__.ValidationService
        }];
      };

      _NewinvoicePage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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
    62813:
    /*!***************************************!*\
      !*** ./src/app/validation.service.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ValidationService": function ValidationService() {
          return (
            /* binding */
            _ValidationService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ValidationService = /*#__PURE__*/function () {
        function ValidationService() {
          _classCallCheck(this, ValidationService);
        }

        _createClass(ValidationService, [{
          key: "numericOnly",
          value: function numericOnly(event) {
            var pattern = /^([0-9])$/;
            var result = pattern.test(event.key);
            return result;
          }
        }]);

        return ValidationService;
      }();

      _ValidationService.ctorParameters = function () {
        return [];
      };

      _ValidationService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
      })], _ValidationService);
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>New Invoice</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"row\"></div>\n   \n<ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%;\" (ionChange)=\"populateCustomerProducts()\" [(ngModel)]=\"invoice.customer\" placeholder=\"Select Customer\">\n  <ion-select-option *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\n</ion-select>\n<ion-item>\n  <ion-label>Product</ion-label>\n  <ionic-selectable style=\"height: 30px;\"\n    \n    [(ngModel)]=\"product\"\n    [items]=\"products\"\n    itemValueField=\"name\"\n    itemTextField=\"name\"\n    [canSearch]=\"true\"\n    (onChange)=\"productSelected($event)\"\n    [isMultiple]=\"true\">\n  </ionic-selectable>\n</ion-item> \n<table border=\"5\" style=\"width: 94%;margin-left: 2%;margin-right: 5%;margin-top: 2%;\">\n  <tr>\n    <td>\n      Item\n    </td>\n    <td>\n      Price\n    </td>\n    <td>\n      Purchase Price\n    </td>\n    <td>\n      Quantity\n    </td>\n  </tr>\n  <tr *ngFor= \"let item of invoice.invoiceItems\" >\n    <td><ion-input  disabled [(ngModel)]=\"item.name\" ></ion-input></td>\n    <td><ion-input (ionChange)=\"calculateInvoiceTotal()\" type=\"number\" [(ngModel)]=\"item.unitPrice\" ></ion-input></td>\n    <td><ion-input (ionChange)=\"calculateInvoiceTotal()\" type=\"number\" [(ngModel)]=\"item.purchasePrice\" ></ion-input></td>\n    <td><ion-input (ionChange)=\"calculateInvoiceTotal()\" type=\"number\" [(ngModel)]=\"item.quantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n  </tr>\n</table>\n\n<ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label color=\"primary\">Amount To Be Paid</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label >{{invoice.total}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-label color=\"primary\">Apply VAT</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-checkbox color=\"primary\" [(ngModel)]=\"applyVat\" (ionChange)=\"calculateInvoiceTotal()\" ></ion-checkbox>\n      </ion-col>\n      \n    </ion-row>  \n    <!-- <ion-row>\n      <ion-col size=\"6\">\n        <ion-label color=\"primary\">Invoice Number</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label >{{invoice.invoiceNumber}}</ion-label>\n      </ion-col>\n    </ion-row>   -->\n  \n  </ion-grid>\n    <ion-grid>\n      <ion-row> \n        <ion-col size=\"3\">\n          <ion-button color=\"primary\" (click)=\"submitBill()\">Submit</ion-button>\n        </ion-col>\n        \n        <ion-col size=\"3\">\n          <ion-button color=\"primary\" (click)=\"printBill()\">Print</ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_newinvoice_newinvoice_module_ts-es5.js.map