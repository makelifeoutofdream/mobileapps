(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["report-report-module"],{

/***/ "LVab":
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/*! exports provided: ReportPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageModule", function() { return ReportPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./report-routing.module */ "UkO7");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./report.page */ "jDlz");







let ReportPageModule = class ReportPageModule {
};
ReportPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _report_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReportPageRoutingModule"]
        ],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_6__["ReportPage"]]
    })
], ReportPageModule);



/***/ }),

/***/ "UkO7":
/*!*************************************************!*\
  !*** ./src/app/report/report-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ReportPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPageRoutingModule", function() { return ReportPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./report.page */ "jDlz");




const routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_3__["ReportPage"]
    }
];
let ReportPageRoutingModule = class ReportPageRoutingModule {
};
ReportPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReportPageRoutingModule);



/***/ }),

/***/ "WnCc":
/*!*****************************************!*\
  !*** ./src/app/report/report.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "eYnM":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Report</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-item style=\"width: 95%;\" >\n      <ion-col size=\"12\">\n      <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%; width: 95%;  max-width: 95% !important;\"  [(ngModel)]=\"selectedCustomer\" placeholder=\"Customer\">\n      <ion-select-option [value]=null>All</ion-select-option>\n        <ion-select-option style=\"width: 95%;\" *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\n      </ion-select>\n    </ion-col>\n    </ion-item>\n  </ion-row>\n  <ion-row>\n    \n    <ion-col size=\"4\" >\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"startDate\" placeholder=\"Start Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"endDate\" placeholder=\"End Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n    <ion-col  size=\"4\" style=\"text-align: right;\">\n      <ion-button style=\"padding-right: 5%;float: right;\" (click)=\"filterInvoices()\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"float:right\">\n    \n  </ion-row>\n  <ion-item-divider></ion-item-divider>\n  \n  <ion-list>\n    <ion-list-header>\n      <ion-col size=\"4\">Date</ion-col>\n      <ion-col size=\"4\" style=\"text-align: center;\">Customer</ion-col>\n      <ion-col style=\"text-align: right;padding-right: 5%;\" size=\"4\">Total</ion-col>\n    </ion-list-header>\n    <ion-item *ngFor= \"let inv of filterInvoiceList\" (click)=\"viewInvoice(inv)\">\n      \n        \n        \n          <ion-col size=\"4\">{{inv.invoiceDate | date : short}}</ion-col>\n          <ion-col size=\"4\" style=\"text-align: center;\">{{inv.customer.name}}</ion-col>\n          <ion-col style=\"text-align: right;\" size=\"4\">{{inv.total}}</ion-col>\n       \n     \n    </ion-item>\n  </ion-list>    \n\n</ion-content>\n<ion-content  style=\"max-height: 10%;margin-top: 2%;\" slot=\"fixed\">\n  <div class=\"display-flex  full-width\">\n    <ion-badge style=\"margin-left: 1%;width: 50%;\" color=\"primary\">Total Cost : {{cost | number : '1.2'}}</ion-badge>\n    <ion-badge style=\"margin-left: 1%;width:44%\" color=\"primary\">Total Revenue : {{revenue | number : '1.2'}}</ion-badge>\n    \n  </div>\n  <div class=\"display-flex  full-width\">\n    \n    <ion-badge style=\"margin-left: 1%;width: 50%;\" color=\"primary\">Total Profit : {{(totalProfit) | number : '1.2'}}</ion-badge>\n    <ion-badge style=\"margin-left: 1%;width: 44% ;\" color=\"primary\">Total Collection : {{collection }}</ion-badge>\n  </div>\n\n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float: right;\">\n        <ion-col style=\"float: right;\">\n          <ion-button ion-button  color=\"primary\" (click)=\"download()\">\n            <ion-icon name=\"mail\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col>\n          <ion-button color=\"primary\" (click)=\"printBill()\">\n            <ion-icon name=\"print\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>");

/***/ }),

/***/ "jDlz":
/*!***************************************!*\
  !*** ./src/app/report/report.page.ts ***!
  \***************************************/
/*! exports provided: ReportPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportPage", function() { return ReportPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./report.page.html */ "eYnM");
/* harmony import */ var _report_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./report.page.scss */ "WnCc");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/db.service */ "ajt+");
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toastservice.service */ "Gb+d");
/* harmony import */ var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! esc-pos-encoder-ionic */ "+4vP");
/* harmony import */ var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sprintf-js */ "4Z/T");
/* harmony import */ var sprintf_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/print.service */ "Bhbv");











let ReportPage = class ReportPage {
    constructor(dbService, toastService, printService, navCtrl, dataService, loadingController) {
        this.dbService = dbService;
        this.toastService = toastService;
        this.printService = printService;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
        this.loadingController = loadingController;
        this.totalProfit = 0;
        this.cost = 0;
        this.revenue = 0;
        this.collection = 0;
    }
    ngOnInit() {
        this.customerList = [];
    }
    addNewInvoice() {
        this.navCtrl.navigateForward('newinvoice');
    }
    getAllInvoices() {
        this.dbService.getAllInvoices().then(data => {
            this.invoiceList = data;
            this.filterInvoices();
        }).catch(reason => {
            this.toastService.presentToast("Failed to fetch invoices");
            console.log(reason);
        });
    }
    getAllCustomers() {
        this.dbService.getAllCustomers().then(data => this.customerList = data);
    }
    ionViewWillEnter() {
        this.header = [];
        this.header.push('Inv No');
        this.header.push('Customer');
        this.header.push('Total');
        this.startDate = null;
        this.endDate = null;
        this.getAllInvoices();
        this.getAllCustomers();
        this.dbService.getProfile().then(data => {
            this.profile = data;
        });
    }
    applyFilter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var start = new Date(this.startDate);
            var end = new Date(this.endDate);
            if (this.startDate != null && this.startDate != undefined) {
                start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
                start.setHours(0);
                start.setMinutes(0);
                start.setSeconds(0);
            }
            if (this.endDate != null && this.endDate != undefined) {
                end = new Date(end.getFullYear(), end.getMonth(), end.getDate());
                end.setHours(23);
                end.setMinutes(23);
                end.setSeconds(23);
            }
            if (this.selectedCustomer != null && this.selectedCustomer != undefined && (this.startDate == null || this.startDate == undefined) && (this.endDate == null || this.endDate == undefined)) {
                this.filterInvoiceList = this.invoiceList.filter(inv => inv.customer.id == this.selectedCustomer.id);
            }
            else if (this.selectedCustomer != null && this.selectedCustomer != undefined && this.startDate != null && this.startDate != undefined && (this.endDate == null || this.endDate == undefined)) {
                this.filterInvoiceList = this.invoiceList.filter(inv => inv.customer.id == this.selectedCustomer.id && new Date(inv.invoiceDate) >= start);
            }
            else if (this.selectedCustomer != null && this.selectedCustomer != undefined && this.startDate != null && this.startDate != undefined && this.endDate != null && this.endDate != undefined) {
                this.filterInvoiceList = this.invoiceList.filter(inv => {
                    var date = new Date(inv.invoiceDate);
                    date.setHours(1);
                    date.setMinutes(1);
                    date.setSeconds(1);
                    return inv.customer.id == this.selectedCustomer.id && date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
                });
            }
            else if ((this.selectedCustomer == null || this.selectedCustomer == undefined) && this.startDate != null && this.startDate != undefined && this.endDate != null && this.endDate != undefined) {
                this.filterInvoiceList = this.invoiceList.filter(inv => {
                    var date = new Date(inv.invoiceDate);
                    date.setHours(1);
                    date.setMinutes(1);
                    date.setSeconds(1);
                    console.log('date ' + date.getTime());
                    console.log('start ' + start.getTime());
                    console.log('end ' + end.getTime());
                    return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
                });
            }
            else if ((this.selectedCustomer == null || this.selectedCustomer == undefined) && this.startDate != null && this.startDate != undefined && (this.endDate == null || this.endDate == undefined)) {
                this.filterInvoiceList = this.invoiceList.filter(inv => new Date(inv.invoiceDate) >= start);
            }
            else if ((this.selectedCustomer == null || this.selectedCustomer == undefined) && (this.startDate == null || this.startDate == undefined) && this.endDate != null && this.endDate != undefined) {
                this.filterInvoiceList = this.invoiceList.filter(inv => new Date(inv.invoiceDate) <= end);
            }
            else {
                this.filterInvoiceList = this.invoiceList;
            }
            return this.filterInvoiceList;
        });
    }
    filterInvoices() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 300000,
            });
            yield loading.present();
            this.applyFilter().then(data => {
                this.totalCost().then(data => {
                    this.cost = data;
                    this.totalRevenue().then(data => {
                        this.revenue = data;
                        this.totalCollection().then(res => {
                            this.collection = res;
                            this.totalProfit = this.revenue - this.cost;
                            loading.dismiss();
                            console.log('Loading dismissed!');
                        });
                    });
                });
            });
        });
    }
    totalTax(invoices) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.filterInvoiceList != null && this.filterInvoiceList != undefined && this.filterInvoiceList.length) {
                return this.filterInvoiceList.map(itm => itm.tax).reduce((acc, nxt) => acc + nxt);
            }
        });
    }
    totalCost() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.filterInvoiceList != null && this.filterInvoiceList != undefined && this.filterInvoiceList.length) {
                let invoiceItemList = this.filterInvoiceList.reduce((arr, elem) => arr.concat(elem.invoiceItems), []);
                return invoiceItemList.map(itm => {
                    if (itm.quantity != null && itm.quantity != undefined && itm.purchasePrice != null && itm.purchasePrice != undefined)
                        return (itm.quantity * itm.purchasePrice);
                }).reduce((acc, nxt) => acc + nxt);
                return this.cost;
            }
        });
    }
    sum(invoices) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.filterInvoiceList != null && this.filterInvoiceList != undefined && this.filterInvoiceList.length) {
                return this.filterInvoiceList.map(itm => itm.total).reduce((acc, nxt) => acc + nxt);
            }
        });
    }
    totalCollection() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.filterInvoiceList != null && this.filterInvoiceList != undefined && this.filterInvoiceList.length) {
                var amtpaid = 0;
                for (let i of this.filterInvoiceList) {
                    if (typeof i.amountPaid === 'string') {
                        amtpaid = amtpaid + Number.parseFloat(i.amountPaid);
                    }
                    else {
                        amtpaid = amtpaid + i.amountPaid;
                    }
                }
                return amtpaid;
                /*return this.filterInvoiceList.map(itm=>{
                  if(itm.amountPaid!=null && itm.amountPaid!=undefined && !Number.isNaN(itm.amountPaid) ){
                    
                    if(typeof itm.amountPaid ==='string') {
                      console.log(Number.parseFloat(itm.amountPaid))
                      return Number.parseFloat(itm.amountPaid);
                    }else{
                      return itm.amountPaid;
                    }
                  }
                  
                
                }).reduce((acc, nxt) => acc + nxt);*/
            }
        });
    }
    totalRevenue() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.filterInvoiceList != null && this.filterInvoiceList != undefined && this.filterInvoiceList.length) {
                let invoiceItemList = this.filterInvoiceList.reduce((arr, elem) => arr.concat(elem.invoiceItems), []);
                return invoiceItemList.map(itm => {
                    if (itm.quantity != null && itm.quantity != undefined && itm.unitPrice != null && itm.unitPrice != undefined)
                        return (itm.quantity * itm.unitPrice);
                }).reduce((acc, nxt) => acc + nxt);
                return this.revenue;
            }
        });
    }
    flatten(i, arrayField) {
        if (Array.isArray(i))
            return i.map(c => this.flatten(c, arrayField));
        if (i.hasOwnProperty(arrayField))
            return [Object.assign(Object.assign({}, i), { [arrayField]: null }), ...i[arrayField].map(c => this.flatten(c, arrayField))];
        return Object.assign(Object.assign({}, i), { [arrayField]: null });
    }
    download() {
        let invoiceDataList = new Array();
        for (let inv of this.invoiceList) {
            for (let it of inv.invoiceItems) {
                let itm = it;
                let invoiceData = { InvoiceNumber: inv.invoiceNumber, InvoiceDate: inv.invoiceDate, Customer: inv.customer.name, Item: itm.name, UnitPrice: itm.unitPrice, Quantity: itm.quantity, Cost: itm.purchaseUnitPrice, TotalCost: itm.purchasePrice * itm.quantity, Tax: inv.tax, GP: (itm.quantity * itm.unitPrice) - (itm.purchasePrice * itm.quantity), TotalWithVAT: inv.total };
                invoiceDataList.push(invoiceData);
            }
        }
        // this.dataService.downloadCcSV(this.invoiceList,'invoices.csv');
        this.dataService.exportToExcel(invoiceDataList, 'invoices.xlsx');
    }
    viewInvoice(invoice) {
        let navigationExtras = {
            queryParams: { invoice: invoice }
        };
        console.log("selected invoice" + invoice.invoiceNumber);
        this.navCtrl.navigateRoot('viewinvoice', navigationExtras);
    }
    getFormatedContent() {
        const encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_8___default.a();
        let grossTax = 0;
        let total = 0;
        this.totalTax(this.filterInvoiceList).then(data => {
            grossTax = data;
            this.sum(this.filterInvoiceList).then(val => {
                total = val;
                let grossTotal = total - grossTax;
                var today = new Date();
                let datetime = today.getDate() + '-' + today.getMonth() + '-' + today.getFullYear() + ' ' + today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
                let result = encoder.initialize().bold(true).raw([0x1B, 0x21, 0x20]).align('center').line(this.profile.companyName).bold(true).newline().
                    raw([0x1B, 0x21, 0x03]).align('left').bold(true).line('VAT # : ' + this.profile.vatNumber + ',' + 'CR # : ' + this.profile.crNumber).
                    align('left').bold(true).line('---------------------------------------------------------------').bold(true).
                    align('left').line('Print Generated At :' + datetime).
                    align('left').line('Date Range : ' + this.startDate + 'To ' + this.endDate).
                    align('left').bold(true).line('---------------------------------------------------------------').bold(true).
                    align('left').line('Gross Total(Excl.VAT) ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%11.2f', grossTotal)).
                    align('left').line('Total VAT(' + this.profile.vat + ') ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%11.2f', grossTax)).
                    align('left').line('Total ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%11.2f', total)).
                    align('left').bold(true).line('---------------------------------------------------------------').bold(true).encode();
                return result;
            });
        });
    }
    printBill() {
        try {
            this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter, this.getFormatedContent());
        }
        catch (reason) {
            this.toastService.presentToast("Print Failed" + reason);
        }
    }
    showReportsHome() {
        this.navCtrl.navigateRoot('reporthome');
    }
};
ReportPage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"] },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"] },
    { type: _services_print_service__WEBPACK_IMPORTED_MODULE_10__["PrintService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
];
ReportPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-report',
        template: _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_report_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ReportPage);



/***/ })

}]);
//# sourceMappingURL=report-report-module-es2015.js.map