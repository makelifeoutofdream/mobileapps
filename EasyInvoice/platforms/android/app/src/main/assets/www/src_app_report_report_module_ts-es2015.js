(self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_report_report_module_ts"],{

/***/ 28205:
/*!*************************************************!*\
  !*** ./src/app/report/report-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPageRoutingModule": function() { return /* binding */ ReportPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report.page */ 7804);




const routes = [
    {
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_0__.ReportPage
    }
];
let ReportPageRoutingModule = class ReportPageRoutingModule {
};
ReportPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ReportPageRoutingModule);



/***/ }),

/***/ 54107:
/*!*****************************************!*\
  !*** ./src/app/report/report.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPageModule": function() { return /* binding */ ReportPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./report-routing.module */ 28205);
/* harmony import */ var _report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.page */ 7804);







let ReportPageModule = class ReportPageModule {
};
ReportPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportPageRoutingModule
        ],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_1__.ReportPage]
    })
], ReportPageModule);



/***/ }),

/***/ 7804:
/*!***************************************!*\
  !*** ./src/app/report/report.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ReportPage": function() { return /* binding */ ReportPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./report.page.html */ 5984);
/* harmony import */ var _report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./report.page.scss */ 53445);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data.service */ 81502);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/db.service */ 73773);
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/toastservice.service */ 48236);








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
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_4__.ToastserviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
ReportPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-report',
        template: _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_report_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ReportPage);



/***/ }),

/***/ 53445:
/*!*****************************************!*\
  !*** ./src/app/report/report.page.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 5984:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Report</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-item>\n      <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%;\"  [(ngModel)]=\"selectedCustomer\" placeholder=\"Customer\">\n        <ion-select-option *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"startDate\" placeholder=\"Start Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"endDate\" placeholder=\"End Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"float:right\">\n    <ion-button style=\"padding-right: 4px;\" (click)=\"filterInvoices()\">Search</ion-button>\n  </ion-row>\n  <ion-item-divider></ion-item-divider>\n  \n  <ion-list>\n    <ion-row>\n      <ion-col size=\"3\">Inv No</ion-col>\n      <ion-col size=\"5\">Customer</ion-col>\n      <ion-col size=\"4\">Total</ion-col>\n    </ion-row>\n    <ion-item *ngFor= \"let inv of filterInvoiceList\" (click)=\"viewInvoice(inv)\">\n      \n        \n        \n          <ion-col size=\"3\">{{inv.invoiceNumber}}</ion-col>\n          <ion-col size=\"5\">{{inv.customer.name}}</ion-col>\n          <ion-col size=\"4\">{{inv.total}}</ion-col>\n       \n     \n    </ion-item>\n  </ion-list>    \n\n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n          <ion-button ion-button  color=\"primary\" (click)=\"download()\">\n            <ion-icon name=\"mail\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_report_report_module_ts-es2015.js.map