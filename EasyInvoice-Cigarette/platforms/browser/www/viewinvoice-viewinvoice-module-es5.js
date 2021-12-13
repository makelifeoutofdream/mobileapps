(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewinvoice-viewinvoice-module"], {
    /***/
    "+4lU":
    /*!***************************************************!*\
      !*** ./src/app/viewinvoice/viewinvoice.module.ts ***!
      \***************************************************/

    /*! exports provided: ViewinvoicePageModule */

    /***/
    function lU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewinvoicePageModule", function () {
        return ViewinvoicePageModule;
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


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ionic-selectable */
      "8xsl");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _viewinvoice_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./viewinvoice-routing.module */
      "duT6");
      /* harmony import */


      var _viewinvoice_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./viewinvoice.page */
      "QXuh");

      var ViewinvoicePageModule = function ViewinvoicePageModule() {
        _classCallCheck(this, ViewinvoicePageModule);
      };

      ViewinvoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_4__["IonicSelectableModule"], _viewinvoice_routing_module__WEBPACK_IMPORTED_MODULE_6__["ViewinvoicePageRoutingModule"]],
        declarations: [_viewinvoice_page__WEBPACK_IMPORTED_MODULE_7__["ViewinvoicePage"]]
      })], ViewinvoicePageModule);
      /***/
    },

    /***/
    "LXzf":
    /*!***************************************************!*\
      !*** ./src/app/viewinvoice/viewinvoice.page.scss ***!
      \***************************************************/

    /*! exports provided: default */

    /***/
    function LXzf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3aW52b2ljZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "MAsN":
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewinvoice/viewinvoice.page.html ***!
      \*****************************************************************************************/

    /*! exports provided: default */

    /***/
    function MAsN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainmenu\"> \n\n      </ion-menu-button>\n    </ion-buttons> \n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"home\" (click)=\"showReport()\"> </ion-back-button>\n      \n    </ion-buttons>\n    <ion-title>Invoice Details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n<ion-row >\n  <ion-item style=\"width: 100%;\">\n  <ion-col size=\"6\">\n    <ion-label>Customer</ion-label>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label style=\"float: right;\">\n      {{invoice.customer.name}}\n    </ion-label>\n  </ion-col>\n</ion-item>\n</ion-row>\n\n<ion-row>\n  <ion-item style=\"width: 100%;\">\n  <ion-col size=\"6\">\n    <ion-label>Invoice Number</ion-label>\n  </ion-col>\n  <ion-col size=\"6\">\n    <ion-label style=\"float: right;\">\n      {{invoice.invoiceNumber}}\n    </ion-label>\n  </ion-col>\n</ion-item>\n</ion-row>\n\n<ion-row>\n  <ion-item style=\"width: 100%;\">\n  <ion-col size=\"3\">\n    <ion-label >Date</ion-label>\n  </ion-col>\n  <ion-col size=\"9\">\n    <ion-label style=\"float: right;\">\n      {{invoice.invoiceDateString}}\n    </ion-label>\n  </ion-col>\n</ion-item>\n</ion-row>\n</ion-grid>\n<table  border=\"none\" style=\"width: 94%;margin-left: 2%;margin-right: 5%;margin-top: 2%; color: black;background-color: aliceblue; text-align: center;\">\n  <tr style=\"border: none; color: white; background-color: lightslategray;\">\n    <td>\n      Item\n    </td>\n    <td>\n      Price\n    </td>\n    <td>\n      Quantity\n    </td>\n    <td>\n      Avl.Qty\n    </td>\n    <td>\n      Amount\n    </td>\n  </tr>\n  <tr *ngFor= \"let item of invoice.invoiceItems\" style=\"border: none;\">\n    <td ><ion-input  disabled [(ngModel)]=\"item.name\" ></ion-input></td>\n    <td><ion-input disabled type=\"number\" [(ngModel)]=\"item.unitPrice\" ></ion-input></td>\n    <td><ion-input disabled type=\"number\" [(ngModel)]=\"item.quantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n    <td><ion-input disabled type=\"number\" [(ngModel)]=\"item.displayBalanceQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n    <td><ion-input disabled type=\"number\" [(ngModel)]=\"item.unitPrice*item.quantity\" ></ion-input></td>\n  </tr>\n</table>\n\n<ion-grid>\n    <ion-row>\n      <ion-item style=\"width: 100%;\">\n      <ion-col size=\"6\">\n        <ion-label >Amount</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" >\n        <ion-label style=\"float: right;\">{{invoice.total}}</ion-label>\n      </ion-col>\n    </ion-item>\n    </ion-row>\n    <ion-row>\n      <ion-item style=\"width: 100%;\">\n      <ion-col size=\"6\">\n        <ion-label >Balance Amount(Incl. current invoice)</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label style=\"float: right;\">{{invoice.balanceAmount}}</ion-label>\n      </ion-col>\n    </ion-item>\n    </ion-row>\n\n    <ion-row>\n      <ion-item style=\"width: 100%;\">\n        <ion-col size=\"6\">\n          <ion-label >Amount Paid</ion-label>\n        </ion-col>\n        <ion-col size=\"6\" >\n          <ion-label style=\"float: right;\">{{invoice.amountPaid}}</ion-label>\n        </ion-col>\n       </ion-item>\n    </ion-row>\n    \n   \n  </ion-grid>\n</ion-content>\n\n<ion-footer>\n  <ion-row style=\"float:right\">\n    <ion-col >\n    \n    <ion-button color=\"primary\" (click)=\"printBill()\">\n      <ion-icon name=\"print\"></ion-icon>\n    </ion-button>\n  </ion-col>\n  </ion-row>\n\n</ion-footer>";
      /***/
    },

    /***/
    "QXuh":
    /*!*************************************************!*\
      !*** ./src/app/viewinvoice/viewinvoice.page.ts ***!
      \*************************************************/

    /*! exports provided: ViewinvoicePage */

    /***/
    function QXuh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewinvoicePage", function () {
        return ViewinvoicePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_viewinvoice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./viewinvoice.page.html */
      "MAsN");
      /* harmony import */


      var _viewinvoice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./viewinvoice.page.scss */
      "LXzf");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/db.service */
      "ajt+");
      /* harmony import */


      var _services_print_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/print.service */
      "Bhbv");
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


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _newinvoice_print_preview_print_preview_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../newinvoice/print-preview/print-preview.component */
      "NKOA");

      var ViewinvoicePage = /*#__PURE__*/function () {
        function ViewinvoicePage(route, datePipe, printService, dbService, navCtrl, modalController) {
          _classCallCheck(this, ViewinvoicePage);

          this.route = route;
          this.datePipe = datePipe;
          this.printService = printService;
          this.dbService = dbService;
          this.navCtrl = navCtrl;
          this.modalController = modalController;
        }

        _createClass(ViewinvoicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.invoice = {
              id: null,
              invoiceNumber: null,
              invoiceDate: null,
              total: null,
              tax: null,
              amountPaid: null,
              balanceAmount: null,
              customer: {
                id: null,
                code: null,
                name: "",
                itemList: null,
                nameInArabic: "",
                contactPersonName: "",
                contactPersonNameInArabic: "",
                buildingNumber: "",
                street: "",
                streetInArabic: "",
                city: "",
                cityInArabic: "",
                district: "",
                districtInArabic: "",
                country: "",
                countryInArabic: "",
                pobox: "",
                postalCode: "",
                phoneNumber: "",
                mobile: "",
                email: "",
                vatNumber: "",
                crNumber: "",
                creditLimit: null,
                balance: null
              },
              invoiceItems: [],
              invoiceDateString: ""
            };
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.dbService.getProfile().then(function (data) {
              _this.profile = data;
            });
            this.route.queryParams.subscribe(function (params) {
              _this.invoice = params['invoice'];
            });
            this.invoice.invoiceDateString = this.datePipe.transform(new Date(this.invoice.invoiceDate), 'dd-MM-yyyy HH:mm:ss');
            console.log('selected invoice' + this.invoice.invoiceNumber);
            console.log('selected invoice customer' + this.invoice.customer);
          }
        }, {
          key: "printBill",
          value: function printBill() {
            this.printPreview();
          }
        }, {
          key: "printPreview",
          value: function printPreview() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.modalController.create({
                        component: _newinvoice_print_preview_print_preview_component__WEBPACK_IMPORTED_MODULE_11__["PrintPreviewComponent"],
                        componentProps: {
                          profile: this.profile,
                          invoice: this.invoice,
                          products: this.invoice.invoiceItems
                        }
                      });

                    case 2:
                      modal = _context.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showReport",
          value: function showReport() {
            this.navCtrl.navigateRoot('report');
          }
        }, {
          key: "getFormatedContent",
          value: function getFormatedContent() {
            var encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_8___default.a();
            var result = "";
            var datetime = new Date(this.invoice.invoiceDate).toISOString().substr(0, 19).replace('T', ' ');
            var billDetails = encoder.initialize().bold(true).raw([0x1B, 0x21, 0x20]).align('center').line(this.profile.companyName).bold(true).newline().raw([0x1B, 0x21, 0x03]).align('left').bold(true).line('VAT # : ' + this.profile.vatNumber + ',' + 'CR # : ' + this.profile.crNumber).align('left').bold(true).line('---------------------------------------------------------------').bold(true).raw([0x1B, 0x21, 0x20]).align('center').bold(true).line('VAT INVOICE').bold(true).raw([0x1B, 0x21, 0x03]).align('left').text(this.invoice.invoiceNumber + '            ' + datetime).newline().align('left').bold(true).line('---------------------------------------------------------------').bold(true).align('left').bold(true).line('Bill To').align('left').bold(true).line('---------------------------------------------------------------').bold(true).align('left').line(this.invoice.customer.name).align('left').line(this.invoice.customer.street + ',' + this.invoice.customer.city + ',' + this.invoice.customer.district).align('left').line('VAT #: ' + this.invoice.customer.vatNumber + '  CR#: ' + this.invoice.customer.crNumber).align('left').line('Mob: ' + this.invoice.customer.mobile).align('left').bold(true).line('---------------------------------------------------------------').align('left').line(Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%s %-25.22s %6s %7s %16s', '#', 'Item', 'Qty', 'Rate', 'Amount')).bold(true).align('left').bold(true).line('---------------------------------------------------------------');
            var counter = 1;
            var totalQuantity = 0;
            var itemDetails = "";

            var _iterator = _createForOfIteratorHelper(this.invoice.invoiceItems),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var itm = _step.value;
                totalQuantity += itm.quantity;
                var temp = encoder.initialize().align('left').line(Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%d %-13.13s %9.0f %8.2f %11.2f ', counter, itm.name, itm.quantity, itm.unitPrice, itm.unitPrice * itm.quantity));
                itemDetails += temp;
                counter = counter + 1;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            var footer = encoder.initialize().align('left').bold(true).line('------------------------------------------------').bold(true).raw([0x1B, 0x21, 0x08]).align('left').line('Qty : ' + totalQuantity).align('right').line('Total Invoice Value(Excl. VAT) : ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%6.2f ', this.invoice.total - this.invoice.tax)).align('right').line('VAT Payable in SAR(' + this.profile.vat + '%) : ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%6.2f ', this.invoice.tax)).align('right').line('Gross Amount in SAR : ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%6.2f ', this.invoice.total)).align('left').bold(true).line('------------------------------------------------').bold(true).align('right').line('Previous Balance : ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%6.2f', this.invoice.balanceAmount + this.invoice.amountPaid)).align('right').line('Paid Amount : ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%6.2f', this.invoice.amountPaid)).raw([0x1B, 0x21, 0x20]).align('left').line('Balance Amount : ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%6.2f', this.invoice.balanceAmount)).align('left').bold(true).line('------------------------------------------------').bold(true).align('center').raw([0x1B, 0x21, 0x20]).line('Thank You!!!'); // result+=billDetails+itemDetails;

            result = encoder.initialize().encode(); //line(billDetails).line(itemDetails).encode();
            //sprintf('%d %-20.20s %9.2f %3.0f %11.2f ',counter, itm.name, itm.unitPrice, itm.quantity, itm.unitPrice*itm.quantity);

            return result;
          }
        }]);

        return ViewinvoicePage;
      }();

      ViewinvoicePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
        }, {
          type: _services_print_service__WEBPACK_IMPORTED_MODULE_7__["PrintService"]
        }, {
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__["ModalController"]
        }];
      };

      ViewinvoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-viewinvoice',
        template: _raw_loader_viewinvoice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_viewinvoice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ViewinvoicePage);
      /***/
    },

    /***/
    "duT6":
    /*!***********************************************************!*\
      !*** ./src/app/viewinvoice/viewinvoice-routing.module.ts ***!
      \***********************************************************/

    /*! exports provided: ViewinvoicePageRoutingModule */

    /***/
    function duT6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ViewinvoicePageRoutingModule", function () {
        return ViewinvoicePageRoutingModule;
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


      var _viewinvoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./viewinvoice.page */
      "QXuh");

      var routes = [{
        path: '',
        component: _viewinvoice_page__WEBPACK_IMPORTED_MODULE_3__["ViewinvoicePage"]
      }];

      var ViewinvoicePageRoutingModule = function ViewinvoicePageRoutingModule() {
        _classCallCheck(this, ViewinvoicePageRoutingModule);
      };

      ViewinvoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ViewinvoicePageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=viewinvoice-viewinvoice-module-es5.js.map