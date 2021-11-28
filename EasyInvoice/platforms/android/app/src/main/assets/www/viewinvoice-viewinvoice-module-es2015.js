(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["viewinvoice-viewinvoice-module"],{

/***/ "+4lU":
/*!***************************************************!*\
  !*** ./src/app/viewinvoice/viewinvoice.module.ts ***!
  \***************************************************/
/*! exports provided: ViewinvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewinvoicePageModule", function() { return ViewinvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _viewinvoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./viewinvoice-routing.module */ "duT6");
/* harmony import */ var _viewinvoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./viewinvoice.page */ "QXuh");







let ViewinvoicePageModule = class ViewinvoicePageModule {
};
ViewinvoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _viewinvoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["ViewinvoicePageRoutingModule"]
        ],
        declarations: [_viewinvoice_page__WEBPACK_IMPORTED_MODULE_6__["ViewinvoicePage"]]
    })
], ViewinvoicePageModule);



/***/ }),

/***/ "LXzf":
/*!***************************************************!*\
  !*** ./src/app/viewinvoice/viewinvoice.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ2aWV3aW52b2ljZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "MAsN":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/viewinvoice/viewinvoice.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Invoice Details</ion-title>\n    <ion-buttons slot=\"start\">\n    \n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n       \n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label>Customer</ion-label>\n  </ion-col>\n  <ion-col>\n    <ion-label>\n      {{invoice.customer.name}}\n    </ion-label>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label>Invoice Number</ion-label>\n  </ion-col>\n  <ion-col>\n    <ion-label>\n      {{invoice.invoiceNumber}}\n    </ion-label>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-label>Invoice Date</ion-label>\n  </ion-col>\n  <ion-col>\n    <ion-label>\n      {{invoice.invoiceDateString}}\n    </ion-label>\n  </ion-col>\n</ion-row>\n</ion-grid>\n<table border=\"5\" style=\"width: 94%;margin-left: 2%;margin-right: 5%;margin-top: 2%;\">\n  <tr>\n    <td>\n      Item\n    </td>\n    <td>\n      Price\n    </td>\n    <td>\n      Purchase Price\n    </td>\n    <td>\n      Quantity\n    </td>\n  </tr>\n  <tr *ngFor= \"let item of invoice.invoiceItems\" >\n    <td><ion-input  disabled [(ngModel)]=\"item.name\" ></ion-input></td>\n    <td><ion-input disabled  [(ngModel)]=\"item.unitPrice\" ></ion-input></td>\n    <td><ion-input disabled  [(ngModel)]=\"item.purchasePrice\" ></ion-input></td>\n    <td><ion-input disabled [(ngModel)]=\"item.quantity\"  ></ion-input></td>\n  </tr>\n</table>\n\n<ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label color=\"primary\">Amount</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label >{{invoice.total}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label color=\"primary\">Balance Amount(Incl. current invoice)</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label >{{invoice.balanceAmount}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n     \n    \n        <ion-col size=\"6\">\n          <ion-label color=\"primary\">Amount Paid</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-label >{{invoice.amountPaid}}</ion-label>\n        </ion-col>\n       \n      \n    </ion-row>\n    \n   \n  </ion-grid>\n</ion-content>\n\n");

/***/ }),

/***/ "QXuh":
/*!*************************************************!*\
  !*** ./src/app/viewinvoice/viewinvoice.page.ts ***!
  \*************************************************/
/*! exports provided: ViewinvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewinvoicePage", function() { return ViewinvoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_viewinvoice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./viewinvoice.page.html */ "MAsN");
/* harmony import */ var _viewinvoice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./viewinvoice.page.scss */ "LXzf");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let ViewinvoicePage = class ViewinvoicePage {
    constructor(route, datePipe) {
        this.route = route;
        this.datePipe = datePipe;
    }
    ngOnInit() {
        this.invoice = { id: null, invoiceNumber: null, invoiceDate: null, total: null, tax: null, amountPaid: null, balanceAmount: null, customer: { id: null, code: null, name: "", itemList: null, nameInArabic: "", contactPersonName: "", contactPersonNameInArabic: "",
                buildingNumber: "", street: "", streetInArabic: "", city: "", cityInArabic: "", district: "", districtInArabic: "", country: "", countryInArabic: "",
                pobox: "", postalCode: "", phoneNumber: "", mobile: "", email: "", vatNumber: "", crNumber: "", creditLimit: null, balance: null }, invoiceItems: [], invoiceDateString: "" };
    }
    ionViewWillEnter() {
        this.route.queryParams.subscribe(params => {
            this.invoice = params['invoice'];
        });
        this.invoice.invoiceDateString = this.datePipe.transform(this.invoice.invoiceDate, 'dd-mm-yyyy');
        console.log('selected invoice' + this.invoice.invoiceNumber);
        console.log('selected invoice customer' + this.invoice.customer);
    }
};
ViewinvoicePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] }
];
ViewinvoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-viewinvoice',
        template: _raw_loader_viewinvoice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_viewinvoice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ViewinvoicePage);



/***/ }),

/***/ "duT6":
/*!***********************************************************!*\
  !*** ./src/app/viewinvoice/viewinvoice-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: ViewinvoicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewinvoicePageRoutingModule", function() { return ViewinvoicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _viewinvoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./viewinvoice.page */ "QXuh");




const routes = [
    {
        path: '',
        component: _viewinvoice_page__WEBPACK_IMPORTED_MODULE_3__["ViewinvoicePage"]
    }
];
let ViewinvoicePageRoutingModule = class ViewinvoicePageRoutingModule {
};
ViewinvoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ViewinvoicePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=viewinvoice-viewinvoice-module-es2015.js.map