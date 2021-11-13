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
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 93319);








let NewinvoicePageModule = class NewinvoicePageModule {
};
NewinvoicePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _newinvoice_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewinvoicePageRoutingModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db.service */ 73773);
/* harmony import */ var _services_invoice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/invoice */ 21891);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/print.service */ 39534);
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/toastservice.service */ 48236);
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../validation.service */ 62813);










let NewinvoicePage = class NewinvoicePage {
    constructor(dbService, tostService, navCtrl, printService, validationService) {
        this.dbService = dbService;
        this.tostService = tostService;
        this.navCtrl = navCtrl;
        this.printService = printService;
        this.validationService = validationService;
    }
    ngOnInit() {
        this.invoice = { id: null, invoiceNumber: "", invoiceDate: new Date(), invoiceDateString: "",
            customer: { id: null, code: null, name: "", itemList: null, nameInArabic: "", contactPersonName: "", contactPersonNameInArabic: "",
                buildingNumber: "", street: "", streetInArabic: "", city: "", cityInArabic: "", district: "", districtInArabic: "", country: "", countryInArabic: "",
                pobox: "", postalCode: "", phoneNumber: "", mobile: "", email: "", vatNumber: "", crNumber: "", creditLimit: null, balance: null },
            invoiceItems: [],
            total: null, tax: null };
    }
    ionViewWillEnter() {
        this.applyVat = true;
        this.dbService.getProfile().then(data => {
            this.profile = data;
        });
        this.resetInvoiceForm();
    }
    filterProducts(evt) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            this.product = { id: null, name: "", unitPrice: null, billingUnitPrice: null, quantity: null, selected: null, purchaseUnitPrice: null };
            this.products = this.productsBackup;
            const searchTerm = evt.srcElement.value;
            if (!searchTerm) {
                return;
            }
            this.products = this.products.filter(currentProduct => {
                if (currentProduct.name && searchTerm) {
                    return (currentProduct.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1);
                }
            });
        });
    }
    productSelected(evt) {
        this.selectedProducts = evt.value;
        this.invoice.invoiceItems = this.selectedProducts;
    }
    resetInvoiceForm() {
        this.productsBackup = new Array();
        this.products = new Array();
        this.invoice = new _services_invoice__WEBPACK_IMPORTED_MODULE_3__.Invoice();
        this.dbService.incrementInvoiceNumber().then(data => {
            this.invoice.invoiceNumber = data;
        });
        this.invoice.invoiceDate = new Date();
        this.invoice.invoiceItems = new Array();
        this.selectedProducts = new Array();
        //this.dbService.getInvoiceNumber().then(data=>{
        //this.invoice.invoiceNumber=data;
        //});
        this.dbService.getAllCustomers().then(data => this.customerList = data);
    }
    populateCustomerProducts() {
        if (this.invoice.customer != null && this.invoice.customer != undefined && this.invoice.customer.itemList != null && this.invoice.customer.itemList != undefined) {
            console.log("populateCustomerProducts");
            let inventory;
            for (let inv of this.invoice.customer.itemList) {
                inventory = { id: inv.id, name: inv.name, unitPrice: inv.unitPrice, billingUnitPrice: null, quantity: null, InvoiceItem: [], purchasePrice: inv.purchasePrice };
                this.products.push(inventory);
                this.productsBackup.push(inventory);
            }
        }
    }
    calculateInvoiceTotal(evt) {
        this.invoice.total = 0;
        if (undefined == this.invoice.total || null == this.invoice.total) {
            this.invoice.total = 0;
        }
        for (let itm of this.invoice.invoiceItems) {
            this.invoice.total = this.invoice.total + (itm.unitPrice * itm.quantity);
        }
        //apply vat
        if (this.applyVat) {
            if (this.profile != null && this.profile != undefined && this.profile.vat != null && this.profile.vat != undefined) {
                this.invoice.tax = (this.profile.vat * this.invoice.total) / 100;
                this.invoice.total = this.invoice.total + this.invoice.tax;
            }
        }
    }
    submitBill() {
        this.invoice.invoiceDate.setHours(0, 0, 0, 0);
        this.dbService.createOrUpdateInvoice(this.invoice).then(data => {
            this.dbService.getAllInventories().then(stocks => {
                let stockList = stocks;
                for (let itm of this.invoice.invoiceItems) {
                    var index = stockList.findIndex(i => i.id == itm.id);
                    stockList[index].quantity = stockList[index].quantity - itm.quantity;
                }
                this.dbService.saveAllInventories(stockList).then(res => {
                    this.tostService.presentToast("Bill submitted successfully");
                    this.navCtrl.navigateRoot('invoice');
                });
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
        data = data + '\n Vat Applied :' + this.invoice.customer.vatNumber;
        data = data + '\n Total :' + this.invoice.total;
        this.printService.sendToBluetoothPrinter(this.printService.selectedPrinter, data);
    }
    numericOnly(evt) {
        return this.validationService.numericOnly(evt);
    }
};
NewinvoicePage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_5__.ToastserviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.NavController },
    { type: _services_print_service__WEBPACK_IMPORTED_MODULE_4__.PrintService },
    { type: _validation_service__WEBPACK_IMPORTED_MODULE_6__.ValidationService }
];
NewinvoicePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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

/***/ 62813:
/*!***************************************!*\
  !*** ./src/app/validation.service.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ValidationService": function() { return /* binding */ ValidationService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);


let ValidationService = class ValidationService {
    constructor() { }
    numericOnly(event) {
        let pattern = /^([0-9])$/;
        let result = pattern.test(event.key);
        return result;
    }
};
ValidationService.ctorParameters = () => [];
ValidationService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], ValidationService);



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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>New Invoice</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div class=\"row\"></div>\n   \n<ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%;\" (ionChange)=\"populateCustomerProducts()\" [(ngModel)]=\"invoice.customer\" placeholder=\"Select Customer\">\n  <ion-select-option *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\n</ion-select>\n<ion-item>\n  <ion-label>Product</ion-label>\n  <ionic-selectable style=\"height: 30px;\"\n    \n    [(ngModel)]=\"product\"\n    [items]=\"products\"\n    itemValueField=\"name\"\n    itemTextField=\"name\"\n    [canSearch]=\"true\"\n    (onChange)=\"productSelected($event)\"\n    [isMultiple]=\"true\">\n  </ionic-selectable>\n</ion-item> \n<table border=\"5\" style=\"width: 94%;margin-left: 2%;margin-right: 5%;margin-top: 2%;\">\n  <tr>\n    <td>\n      Item\n    </td>\n    <td>\n      Price\n    </td>\n    <td>\n      Purchase Price\n    </td>\n    <td>\n      Quantity\n    </td>\n  </tr>\n  <tr *ngFor= \"let item of invoice.invoiceItems\" >\n    <td><ion-input  disabled [(ngModel)]=\"item.name\" ></ion-input></td>\n    <td><ion-input (ionChange)=\"calculateInvoiceTotal()\" type=\"number\" [(ngModel)]=\"item.unitPrice\" ></ion-input></td>\n    <td><ion-input (ionChange)=\"calculateInvoiceTotal()\" type=\"number\" [(ngModel)]=\"item.purchasePrice\" ></ion-input></td>\n    <td><ion-input (ionChange)=\"calculateInvoiceTotal()\" type=\"number\" [(ngModel)]=\"item.quantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n  </tr>\n</table>\n\n<ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-label color=\"primary\">Amount To Be Paid</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label >{{invoice.total}}</ion-label>\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"3\">\n        <ion-label color=\"primary\">Apply VAT</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-checkbox color=\"primary\" [(ngModel)]=\"applyVat\" (ionChange)=\"calculateInvoiceTotal()\" ></ion-checkbox>\n      </ion-col>\n      \n    </ion-row>  \n    <!-- <ion-row>\n      <ion-col size=\"6\">\n        <ion-label color=\"primary\">Invoice Number</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label >{{invoice.invoiceNumber}}</ion-label>\n      </ion-col>\n    </ion-row>   -->\n  \n  </ion-grid>\n    <ion-grid>\n      <ion-row> \n        <ion-col size=\"3\">\n          <ion-button color=\"primary\" (click)=\"submitBill()\">Submit</ion-button>\n        </ion-col>\n        \n        <ion-col size=\"3\">\n          <ion-button color=\"primary\" (click)=\"printBill()\">Print</ion-button>\n        </ion-col>\n\n      </ion-row>\n    </ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_newinvoice_newinvoice_module_ts-es2015.js.map