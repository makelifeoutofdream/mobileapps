(self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_newinvoice_newinvoice_module_ts"],{

/***/ 33860:
/*!*********************************************************!*\
  !*** ./src/app/newinvoice/newinvoice-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewinvoicePageRoutingModule": function() { return /* binding */ NewinvoicePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _newinvoice_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newinvoice.page */ 65349);




const routes = [
    {
        path: '',
        component: _newinvoice_page__WEBPACK_IMPORTED_MODULE_0__.NewinvoicePage
    }
];
let NewinvoicePageRoutingModule = class NewinvoicePageRoutingModule {
};
NewinvoicePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewinvoicePageRoutingModule);



/***/ }),

/***/ 43747:
/*!*************************************************!*\
  !*** ./src/app/newinvoice/newinvoice.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewinvoicePageModule": function() { return /* binding */ NewinvoicePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _newinvoice_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newinvoice-routing.module */ 33860);
/* harmony import */ var _newinvoice_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newinvoice.page */ 65349);







let NewinvoicePageModule = class NewinvoicePageModule {
};
NewinvoicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _newinvoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewinvoicePageRoutingModule
        ],
        declarations: [_newinvoice_page__WEBPACK_IMPORTED_MODULE_1__.NewinvoicePage]
    })
], NewinvoicePageModule);



/***/ }),

/***/ 65349:
/*!***********************************************!*\
  !*** ./src/app/newinvoice/newinvoice.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewinvoicePage": function() { return /* binding */ NewinvoicePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_newinvoice_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./newinvoice.page.html */ 67676);
/* harmony import */ var _newinvoice_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newinvoice.page.scss */ 89851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db.service */ 73773);
/* harmony import */ var _services_invoice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/invoice */ 21891);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/print.service */ 39534);
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toastservice.service */ 48236);









let NewinvoicePage = class NewinvoicePage {
    constructor(dbService, tostService, navCtrl, printService) {
        this.dbService = dbService;
        this.tostService = tostService;
        this.navCtrl = navCtrl;
        this.printService = printService;
    }
    ngOnInit() {
        this.invoice = { invoiceNumber: "", invoiceDate: new Date(),
            customer: { contactPersonName: "", location: "", name: "", vat: null, itemList: null }, invoiceItems: [],
            total: null, tax: null };
    }
    ionViewWillEnter() {
        this.resetInvoiceForm();
    }
    resetInvoiceForm() {
        let inventory;
        this.invoice = new _services_invoice__WEBPACK_IMPORTED_MODULE_3__.Invoice();
        this.invoice.invoiceDate = new Date();
        this.invoice.invoiceItems = new Array();
        this.dbService.getInvoiceNumber().then(data => {
            this.invoice.invoiceNumber = data;
        });
        this.dbService.getAllInventories().then(data => {
            for (let inv of data) {
                inventory = { name: inv.name, unitPrice: inv.unitPrice, billingUnitPrice: null, quantity: null, InvoiceItem: [] };
                this.invoice.invoiceItems.push(inventory);
            }
            this.dbService.getAllCustomers().then(data => this.customerList = data);
        }).catch(reason => {
            console.log(reason);
            this.tostService.presentToast("Failed to fetch the inventory items");
        });
    }
    calculateInvoiceTotal() {
        this.invoice.total = 0;
        let selectedItems = this.invoice.invoiceItems.filter(l => l.selected);
        if (undefined == this.invoice.total || null == this.invoice.total) {
            this.invoice.total = 0;
        }
        for (let itm of selectedItems) {
            this.invoice.total = this.invoice.total + (itm.unitPrice * itm.quantity);
        }
        //apply vat
        this.invoice.tax = (this.invoice.customer.vat * this.invoice.total) / 100;
        this.invoice.total = this.invoice.total + this.invoice.tax;
    }
    submitBill() {
        this.dbService.createOrUpdateInvoice(this.invoice).then(data => {
            this.tostService.presentToast("Bill submitted successfully");
            this.dbService.incrementInvoiceNumber().then(data => {
                this.invoice.invoiceNumber = data;
            });
        }).catch(reason => {
            this.tostService.presentToast("Failed to submit bill");
            console.log(reason);
        });
    }
    printBill() {
        let data = '---------------------RECEIPT-----------------------\n\n\nDate :' + this.invoice.invoiceDate + '\nInvoice Number :' + this.invoice.invoiceNumber + '\nCustomer:' + this.invoice.customer + '/n/n';
        for (let itm of this.invoice.invoiceItems) {
            data = data + 'Item Name :' + itm.name + '  Price :' + itm.unitPrice + '  Quantity :' + itm.quantity;
        }
        data = data + '-----------------------------------------------------------------------';
        data = data + '\n Vat Applied :' + this.invoice.customer.vat;
        data = data + '\n Total :' + this.invoice.total;
        this.printService.sendToBluetoothPrinter(this.printService.selectedPrinter, data);
    }
};
NewinvoicePage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_5__.ToastserviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: _services_print_service__WEBPACK_IMPORTED_MODULE_4__.PrintService }
];
NewinvoicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-newinvoice',
        template: _raw_loader_newinvoice_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_newinvoice_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewinvoicePage);



/***/ }),

/***/ 21891:
/*!*************************************!*\
  !*** ./src/app/services/invoice.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Invoice": function() { return /* binding */ Invoice; }
/* harmony export */ });
class Invoice {
}


/***/ }),

/***/ 89851:
/*!*************************************************!*\
  !*** ./src/app/newinvoice/newinvoice.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdpbnZvaWNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 67676:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newinvoice/newinvoice.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>New Invoice</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"row\"></div>\n    <ion-grid class=\"ion-margin-top\">\n\n      <ion-row>\n        <ion-col size=\"6\" >  \n              <ion-row >\n                <ion-label style=\"margin-left: 18px;\" color=\"primary\" >Invoice Number</ion-label>\n              </ion-row>\n              <ion-row >\n                <ion-label position=\"floating\" style=\"margin-left: 18px;\" >{{invoice.invoiceNumber}}</ion-label>\n              </ion-row>\n\n            \n            </ion-col>\n            <ion-col size=\"6\">\n              <ion-row>\n                <ion-label color=\"primary\"  >Date Of Issue</ion-label>\n              </ion-row>\n              <ion-row>\n                <ion-label position=\"floating\">{{invoice.invoiceDate|date : 'yyyy-MM-dd'}}</ion-label>\n              </ion-row>\n\n            \n          \n          \n        </ion-col>\n      </ion-row>\n      <ion-row style=\"margin-top: 7px;\">\n        <ion-col>\n          \n            <ion-select [(ngModel)]=\"invoice.customer\" placeholder=\"Select Customer\">\n              <ion-select-option *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\n          </ion-select>\n          \n        \n      </ion-col>\n      </ion-row>\n</ion-grid>\n<ion-item-divider></ion-item-divider>\n <ion-list >\n  <ion-item  *ngFor= \"let item of invoice.invoiceItems\">\n    <ion-grid>\n      <ion-row style=\"color : white ; background-color: blueviolet;\">\n        <ion-col size=\"3\">Select</ion-col>\n        <ion-col size=4>Item</ion-col>\n        <ion-col size=2>Price</ion-col>\n        <ion-col size=\"2\">Qty</ion-col>\n      </ion-row>\n    <ion-row style=\"background-color: aliceblue;\">\n        <ion-col size=\"3\">\n          <ion-checkbox [(ngModel)]=\"item.selected\"> </ion-checkbox>\n        </ion-col>\n      <ion-col size=4>\n        <ion-input [(ngModel)]=\"item.name\" disabled></ion-input>\n      </ion-col>\n      <ion-col size=\"2\">\n        <ion-input [(ngModel)]=\"item.unitPrice\" ></ion-input>\n      </ion-col>\n      <!-- <ion-col>\n        <ion-input placeholder=\"Billing Price\">{{item.billingUnitPrice}}</ion-input>        \n      </ion-col> -->\n      <ion-col size=\"2\">\n        <ion-input [(ngModel)]=\"item.quantity\"></ion-input>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  </ion-item>  \n </ion-list>\n\n<ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label color=\"primary\">Amount To Be Paid</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label >{{invoice.total}}</ion-label>\n      </ion-col>\n    </ion-row>  </ion-grid>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-button color=\"primary\" (click)=\"calculateInvoiceTotal()\">Calculate Total</ion-button>\n        </ion-col>\n        \n        <ion-col>\n          <ion-button color=\"primary\" (click)=\"submitBill()\">Submit</ion-button>\n        </ion-col>\n        \n        <ion-col>\n          <ion-button color=\"primary\" (click)=\"printBill()\">Print</ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_newinvoice_newinvoice_module_ts-es2015.js.map