(self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_printersettings_printersettings_module_ts"],{

/***/ 56734:
/*!*******************************************************************!*\
  !*** ./src/app/printersettings/printersettings-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintersettingsPageRoutingModule": function() { return /* binding */ PrintersettingsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _printersettings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printersettings.page */ 5516);




const routes = [
    {
        path: '',
        component: _printersettings_page__WEBPACK_IMPORTED_MODULE_0__.PrintersettingsPage
    }
];
let PrintersettingsPageRoutingModule = class PrintersettingsPageRoutingModule {
};
PrintersettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PrintersettingsPageRoutingModule);



/***/ }),

/***/ 5525:
/*!***********************************************************!*\
  !*** ./src/app/printersettings/printersettings.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintersettingsPageModule": function() { return /* binding */ PrintersettingsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _printersettings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./printersettings-routing.module */ 56734);
/* harmony import */ var _printersettings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printersettings.page */ 5516);







let PrintersettingsPageModule = class PrintersettingsPageModule {
};
PrintersettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _printersettings_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrintersettingsPageRoutingModule
        ],
        declarations: [_printersettings_page__WEBPACK_IMPORTED_MODULE_1__.PrintersettingsPage]
    })
], PrintersettingsPageModule);



/***/ }),

/***/ 5516:
/*!*********************************************************!*\
  !*** ./src/app/printersettings/printersettings.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintersettingsPage": function() { return /* binding */ PrintersettingsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_printersettings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./printersettings.page.html */ 60366);
/* harmony import */ var _printersettings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./printersettings.page.scss */ 82895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/print.service */ 39534);





let PrintersettingsPage = class PrintersettingsPage {
    constructor(print) {
        this.print = print;
        this.bluetoothList = [];
    }
    ngOnInit() {
        this.listPrinter();
    }
    listPrinter() {
        this.print.searchBluetoothPrinter().then(resp => {
            this.bluetoothList = resp;
        });
    }
    selectPrinter(macAddress) {
        this.print.selectedPrinter = macAddress;
        this.selectedPrinter = this.print.selectedPrinter;
    }
};
PrintersettingsPage.ctorParameters = () => [
    { type: _services_print_service__WEBPACK_IMPORTED_MODULE_2__.PrintService }
];
PrintersettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-printersettings',
        template: _raw_loader_printersettings_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_printersettings_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PrintersettingsPage);



/***/ }),

/***/ 82895:
/*!***********************************************************!*\
  !*** ./src/app/printersettings/printersettings.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmludGVyc2V0dGluZ3MucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 60366:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/printersettings/printersettings.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>printersettings</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-list>\n  <ion-item *ngFor=\"let item of bluetoothList\" (click)=\"selectPrinter(item.id)\">\n    {{item.name}} {{item.id}}\n  </ion-item>\n</ion-list>\n<ion-item *ngIf=\"bluetoothList!=null && bluetoothList!=undefined\">\n  Selected Printer: {{selectedPrinter}}\n</ion-item>\n<ion-item *ngIf=\"bluetoothList==null || bluetoothList==undefined\">\n  No Printer Connected..\n</ion-item>\n  \n\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_printersettings_printersettings_module_ts-es2015.js.map