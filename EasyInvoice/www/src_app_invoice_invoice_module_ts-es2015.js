(self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_invoice_invoice_module_ts"],{

/***/ 27546:
/*!***************************************************!*\
  !*** ./src/app/invoice/invoice-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePageRoutingModule": function() { return /* binding */ InvoicePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice.page */ 16313);




const routes = [
    {
        path: '',
        component: _invoice_page__WEBPACK_IMPORTED_MODULE_0__.InvoicePage
    }
];
let InvoicePageRoutingModule = class InvoicePageRoutingModule {
};
InvoicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], InvoicePageRoutingModule);



/***/ }),

/***/ 63277:
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePageModule": function() { return /* binding */ InvoicePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./invoice-routing.module */ 27546);
/* harmony import */ var _invoice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.page */ 16313);







let InvoicePageModule = class InvoicePageModule {
};
InvoicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _invoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.InvoicePageRoutingModule
        ],
        declarations: [_invoice_page__WEBPACK_IMPORTED_MODULE_1__.InvoicePage]
    })
], InvoicePageModule);



/***/ }),

/***/ 16313:
/*!*****************************************!*\
  !*** ./src/app/invoice/invoice.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvoicePage": function() { return /* binding */ InvoicePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./invoice.page.html */ 72555);
/* harmony import */ var _invoice_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./invoice.page.scss */ 55895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 81502);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/db.service */ 73773);
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toastservice.service */ 48236);








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
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_4__.ToastserviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
InvoicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-invoice',
        template: _raw_loader_invoice_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_invoice_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], InvoicePage);



/***/ }),

/***/ 55895:
/*!*******************************************!*\
  !*** ./src/app/invoice/invoice.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZvaWNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 72555:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/invoice/invoice.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>invoice</ion-title>\n  </ion-toolbar>\n</ion-header>\n  <ion-content>\n    <ion-list>\n      \n      <ion-item *ngFor= \"let inv of invoiceList\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"4\">Invoice Number</ion-col>\n            <ion-col size=\"4\">Customer</ion-col>\n            <ion-col size=\"3\">Total</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"4\">{{inv.invoiceNumber}}</ion-col>\n            <ion-col size=\"4\">{{inv.customer.name}}</ion-col>\n            <ion-col size=\"3\">{{inv.total}}</ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>    \n    \n  </ion-content>\n  <ion-footer>\n    \n      \n        <ion-row style=\"float:right\">\n          <ion-col >\n            <ion-button ion-button  color=\"primary\" (click)=\"download()\">\n              <ion-icon name=\"mail\"></ion-icon>\n            </ion-button>\n          </ion-col>\n          <ion-col >\n            <ion-button ion-button  color=\"primary\" (click)=\"addNewInvoice()\">\n              <ion-icon name=\"add-circle\"></ion-icon>\n            </ion-button>\n          </ion-col>\n        </ion-row>\n          \n      \n    \n    \n  </ion-footer>\n\n");

/***/ })

}]);
//# sourceMappingURL=src_app_invoice_invoice_module_ts-es2015.js.map