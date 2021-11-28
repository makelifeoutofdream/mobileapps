(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_viewinvoice_viewinvoice_module_ts"], {
    /***/
    10597:
    /*!***********************************************************!*\
      !*** ./src/app/viewinvoice/viewinvoice-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewinvoicePageRoutingModule": function ViewinvoicePageRoutingModule() {
          return (
            /* binding */
            _ViewinvoicePageRoutingModule
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


      var _viewinvoice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./viewinvoice.page */
      64020);

      var routes = [{
        path: '',
        component: _viewinvoice_page__WEBPACK_IMPORTED_MODULE_0__.ViewinvoicePage
      }];

      var _ViewinvoicePageRoutingModule = function ViewinvoicePageRoutingModule() {
        _classCallCheck(this, ViewinvoicePageRoutingModule);
      };

      _ViewinvoicePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ViewinvoicePageRoutingModule);
      /***/
    },

    /***/
    62924:
    /*!***************************************************!*\
      !*** ./src/app/viewinvoice/viewinvoice.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewinvoicePageModule": function ViewinvoicePageModule() {
          return (
            /* binding */
            _ViewinvoicePageModule
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


      var _viewinvoice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./viewinvoice-routing.module */
      10597);
      /* harmony import */


      var _viewinvoice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./viewinvoice.page */
      64020);

      var _ViewinvoicePageModule = function ViewinvoicePageModule() {
        _classCallCheck(this, ViewinvoicePageModule);
      };

      _ViewinvoicePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _viewinvoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.ViewinvoicePageRoutingModule],
        declarations: [_viewinvoice_page__WEBPACK_IMPORTED_MODULE_1__.ViewinvoicePage]
      })], _ViewinvoicePageModule);
      /***/
    },

    /***/
    64020:
    /*!*************************************************!*\
      !*** ./src/app/viewinvoice/viewinvoice.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ViewinvoicePage": function ViewinvoicePage() {
          return (
            /* binding */
            _ViewinvoicePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_viewinvoice_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./viewinvoice.page.html */
      66015);
      /* harmony import */


      var _viewinvoice_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./viewinvoice.page.scss */
      75113);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _ViewinvoicePage = /*#__PURE__*/function () {
        function ViewinvoicePage(route, datePipe) {
          _classCallCheck(this, ViewinvoicePage);

          this.route = route;
          this.datePipe = datePipe;
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

            this.route.queryParams.subscribe(function (params) {
              _this.invoice = params['invoice'];
            });
            this.invoice.invoiceDateString = this.datePipe.transform(this.invoice.invoiceDate, 'dd-mm-yyyy');
            console.log('selected invoice' + this.invoice.invoiceNumber);
            console.log('selected invoice customer' + this.invoice.customer);
          }
        }]);

        return ViewinvoicePage;
      }();

      _ViewinvoicePage.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe
        }];
      };

      _ViewinvoicePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-viewinvoice',
        template: _raw_loader_viewinvoice_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_viewinvoice_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ViewinvoicePage);
      /***/
    },

    /***/
    75113:
    /*!***************************************************!*\
      !*** ./src/app/viewinvoice/viewinvoice.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3aW52b2ljZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    66015:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewinvoice/viewinvoice.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Invoice Details</ion-title>\n    <ion-buttons slot=\"start\">\n    \n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n       \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label>Customer</ion-label>\n  </ion-col>\n  <ion-col>\n    <ion-label>\n      {{invoice.customer.name}}\n    </ion-label>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label>Invoice Number</ion-label>\n  </ion-col>\n  <ion-col>\n    <ion-label>\n      {{invoice.invoiceNumber}}\n    </ion-label>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label>Invoice Date</ion-label>\n  </ion-col>\n  <ion-col>\n    <ion-label>\n      {{invoice.invoiceDateString}}\n    </ion-label>\n  </ion-col>\n</ion-row>\n</ion-grid>\n<table border=\"5\" style=\"width: 94%;margin-left: 2%;margin-right: 5%;margin-top: 2%;\">\n  <tr>\n    <td>\n      Item\n    </td>\n    <td>\n      Price\n    </td>\n    <td>\n      Purchase Price\n    </td>\n    <td>\n      Quantity\n    </td>\n  </tr>\n  <tr *ngFor= \"let item of invoice.invoiceItems\" >\n    <td><ion-input  disabled [(ngModel)]=\"item.name\" ></ion-input></td>\n    <td><ion-input disabled  [(ngModel)]=\"item.unitPrice\" ></ion-input></td>\n    <td><ion-input disabled  [(ngModel)]=\"item.purchasePrice\" ></ion-input></td>\n    <td><ion-input disabled [(ngModel)]=\"item.quantity\"  ></ion-input></td>\n  </tr>\n</table>\n\n<ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label color=\"primary\">Amount</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label >{{invoice.total}}</ion-label>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_viewinvoice_viewinvoice_module_ts-es5.js.map