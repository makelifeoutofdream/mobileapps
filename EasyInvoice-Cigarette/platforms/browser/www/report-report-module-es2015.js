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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Report</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-item>\n      <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%;\"  [(ngModel)]=\"selectedCustomer\" placeholder=\"Customer\">\n        <ion-select-option *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"startDate\" placeholder=\"Start Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"endDate\" placeholder=\"End Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"float:right\">\n    <ion-button style=\"padding-right: 4px;\" (click)=\"filterInvoices()\">Search</ion-button>\n  </ion-row>\n  <ion-item-divider></ion-item-divider>\n  \n  <ion-list>\n    <ion-row style=\"margin-left: 5%;\">\n      <ion-col size=\"4\">Inv No</ion-col>\n      <ion-col size=\"4\">Customer</ion-col>\n      <ion-col size=\"4\">Total</ion-col>\n    </ion-row>\n    <ion-item *ngFor= \"let inv of filterInvoiceList\" (click)=\"viewInvoice(inv)\">\n      \n        \n        \n          <ion-col size=\"4\">{{inv.invoiceNumber}}</ion-col>\n          <ion-col size=\"4\">{{inv.customer.name}}</ion-col>\n          <ion-col size=\"4\">{{inv.total}}</ion-col>\n       \n     \n    </ion-item>\n  </ion-list>    \n\n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n          <ion-button ion-button  color=\"primary\" (click)=\"download()\">\n            <ion-icon name=\"mail\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>");

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








let ReportPage = class ReportPage {
    constructor(dbService, toastService, navCtrl, dataService) {
        this.dbService = dbService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.dataService = dataService;
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
    }
    filterInvoices() {
        var start = new Date(this.startDate);
        var end = new Date(this.endDate);
        if (this.startDate != null && this.startDate != undefined) {
            start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
        }
        if (this.endDate != null && this.endDate != undefined) {
            end = new Date(end.getFullYear(), end.getMonth(), end.getDate());
        }
        if (this.selectedCustomer != null && this.selectedCustomer != undefined && (this.startDate == null || this.startDate == undefined) && (this.endDate == null || this.endDate == undefined)) {
            this.filterInvoiceList = this.invoiceList.filter(inv => inv.customer.id == this.selectedCustomer.id);
        }
        else if (this.selectedCustomer != null && this.selectedCustomer != undefined && this.startDate != null && this.startDate != undefined && (this.endDate == null || this.endDate == undefined)) {
            this.filterInvoiceList = this.invoiceList.filter(inv => inv.customer.id == this.selectedCustomer.id && new Date(inv.invoiceDate) >= start);
        }
        else if (this.selectedCustomer != null && this.selectedCustomer != undefined && this.startDate != null && this.startDate != undefined && this.endDate != null && this.endDate != undefined) {
            this.filterInvoiceList = this.invoiceList.filter(inv => inv.customer.id == this.selectedCustomer.id && new Date(inv.invoiceDate) >= start && new Date(inv.invoiceDate) <= end);
        }
        else if ((this.selectedCustomer == null || this.selectedCustomer == undefined) && this.startDate != null && this.startDate != undefined && this.endDate != null && this.endDate != undefined) {
            this.filterInvoiceList = this.invoiceList.filter(inv => new Date(inv.invoiceDate) >= start && new Date(inv.invoiceDate) <= end);
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
    viewInvoice(invoice) {
        let navigationExtras = {
            queryParams: { invoice: invoice }
        };
        console.log("selected invoice" + invoice.invoiceNumber);
        this.navCtrl.navigateRoot('viewinvoice', navigationExtras);
    }
};
ReportPage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"] },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
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