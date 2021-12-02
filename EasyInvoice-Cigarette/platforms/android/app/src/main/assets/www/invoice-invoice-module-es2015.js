(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["invoice-invoice-module"],{

/***/ "6MpR":
/*!*****************************************!*\
  !*** ./src/app/invoice/invoice.page.ts ***!
  \*****************************************/
/*! exports provided: InvoicePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePage", function() { return InvoicePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./invoice.page.html */ "TRUz");
/* harmony import */ var _invoice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./invoice.page.scss */ "CZNA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/db.service */ "ajt+");
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toastservice.service */ "Gb+d");








let InvoicePage = class InvoicePage {
    constructor(dbService, toastService, navCtrl, dataService) {
        this.dbService = dbService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
    }
    ngOnInit() {
    }
    addNewInvoice() {
        this.navCtrl.navigateRoot('newinvoice');
    }
    getAllInvoices() {
        this.dbService.getAllInvoices().then(data => {
            this.invoiceList = data;
            const today = new Date();
            today.setHours(0);
            today.setMinutes(0);
            today.setSeconds(0);
            this.invoiceList = this.invoiceList.filter(a => new Date(a.invoiceDate) >= today);
        }).catch(reason => {
            this.toastService.presentToast("Failed to fetch invoices");
            console.log(reason);
        });
    }
    ionViewWillEnter() {
        this.getAllInvoices();
    }
    download() {
        let invoiceDataList = new Array();
        for (let inv of this.invoiceList) {
            for (let itm of inv.invoiceItems) {
                let invoiceData = { InvoiceNumber: inv.invoiceNumber, InvoiceDate: inv.invoiceDate, Customer: inv.customer.name, Item: itm.name, UnitPrice: itm.unitPrice, Quantity: itm.quantity, Tax: inv.tax, Total: inv.total };
                invoiceDataList.push(invoiceData);
            }
        }
        // this.dataService.downloadCcSV(this.invoiceList,'invoices.csv');
        this.dataService.exportToExcel(invoiceDataList, 'invoices.xlsx');
    }
};
InvoicePage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"] },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
InvoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-invoice',
        template: _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_invoice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InvoicePage);



/***/ }),

/***/ "CZNA":
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "EbbV":
/*!***************************************************!*\
  !*** ./src/app/invoice/invoice-routing.module.ts ***!
  \***************************************************/
/*! exports provided: InvoicePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageRoutingModule", function() { return InvoicePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invoice.page */ "6MpR");




const routes = [
    {
        path: '',
        component: _invoice_page__WEBPACK_IMPORTED_MODULE_3__["InvoicePage"]
    }
];
let InvoicePageRoutingModule = class InvoicePageRoutingModule {
};
InvoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InvoicePageRoutingModule);



/***/ }),

/***/ "TRUz":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Invoice</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n  <ion-content>\n    \n    <ion-list>\n      \n      <ion-list-header>\n        <ion-col size=\"4\">Date</ion-col>\n        <ion-col size=\"4\" style=\"text-align: center;\">Customer</ion-col>\n        <ion-col style=\"text-align: right;padding-right: 5%;\" size=\"4\">Total</ion-col>\n      </ion-list-header>  \n      <ion-item *ngFor= \"let inv of invoiceList\">\n            <ion-col size=\"4\">{{inv.invoiceDate | date : short}}</ion-col>\n            <ion-col size=\"4\" style=\"text-align: center;\">{{inv.customer.name}}</ion-col>\n            <ion-col size=\"4\" style=\"text-align: right;\">{{inv.total}}</ion-col>\n          \n      \n      </ion-item>\n    </ion-list>    \n    \n  </ion-content>\n  <ion-footer>\n    \n      \n        <ion-row style=\"float:right\">\n          <ion-col >\n            <ion-button ion-button  color=\"primary\" (click)=\"download()\">\n              <ion-icon name=\"mail\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col >\n            <ion-button ion-button  color=\"primary\" (click)=\"addNewInvoice()\">\n              <ion-icon name=\"add-circle\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n          \n      \n    \n    \n  </ion-footer>\n\n");

/***/ }),

/***/ "hdHI":
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.module.ts ***!
  \*******************************************/
/*! exports provided: InvoicePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicePageModule", function() { return InvoicePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invoice-routing.module */ "EbbV");
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invoice.page */ "6MpR");







let InvoicePageModule = class InvoicePageModule {
};
InvoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _invoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["InvoicePageRoutingModule"]
        ],
        declarations: [_invoice_page__WEBPACK_IMPORTED_MODULE_6__["InvoicePage"]]
    })
], InvoicePageModule);



/***/ })

}]);
//# sourceMappingURL=invoice-invoice-module-es2015.js.map