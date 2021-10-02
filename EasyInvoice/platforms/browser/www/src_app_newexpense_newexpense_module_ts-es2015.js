(self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_newexpense_newexpense_module_ts"],{

/***/ 5108:
/*!*********************************************************!*\
  !*** ./src/app/newexpense/newexpense-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewexpensePageRoutingModule": function() { return /* binding */ NewexpensePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _newexpense_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newexpense.page */ 84151);




const routes = [
    {
        path: '',
        component: _newexpense_page__WEBPACK_IMPORTED_MODULE_0__.NewexpensePage
    }
];
let NewexpensePageRoutingModule = class NewexpensePageRoutingModule {
};
NewexpensePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewexpensePageRoutingModule);



/***/ }),

/***/ 6359:
/*!*************************************************!*\
  !*** ./src/app/newexpense/newexpense.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewexpensePageModule": function() { return /* binding */ NewexpensePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _newexpense_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newexpense-routing.module */ 5108);
/* harmony import */ var _newexpense_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newexpense.page */ 84151);







let NewexpensePageModule = class NewexpensePageModule {
};
NewexpensePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _newexpense_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewexpensePageRoutingModule
        ],
        declarations: [_newexpense_page__WEBPACK_IMPORTED_MODULE_1__.NewexpensePage]
    })
], NewexpensePageModule);



/***/ }),

/***/ 84151:
/*!***********************************************!*\
  !*** ./src/app/newexpense/newexpense.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewexpensePage": function() { return /* binding */ NewexpensePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_newexpense_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./newexpense.page.html */ 62673);
/* harmony import */ var _newexpense_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newexpense.page.scss */ 80234);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let NewexpensePage = class NewexpensePage {
    constructor() { }
    ngOnInit() {
    }
};
NewexpensePage.ctorParameters = () => [];
NewexpensePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-newexpense',
        template: _raw_loader_newexpense_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_newexpense_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewexpensePage);



/***/ }),

/***/ 80234:
/*!*************************************************!*\
  !*** ./src/app/newexpense/newexpense.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdleHBlbnNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 62673:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newexpense/newexpense.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>New Expense</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row>\n    \n    \n    <ion-col  class=\"ion-text-start ion-margin-top\" style=\"margin-left: 10px;\">\n      <ion-label>Category</ion-label>\n      </ion-col>\n    <ion-col>\n      <ion-item>\n        \n        <ion-select placeholder=\"Select One\">\n          <ion-select-option value=\"Ad\">Advertisement</ion-select-option>\n          <ion-select-option value=\"car\">Car&Truck</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n<ion-row>\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-datetime displayFormat=\"MM/DD/YYYY\" placeholder=\"Select Date\"></ion-datetime>\n  </ion-item>  \n</ion-row>\n<ion-row>\n  <ion-item>\n    <ion-label position=\"floating\">Add a Merchant</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n</ion-row>\n<ion-row class=\"ion-text-start\">\n  <ion-item class=\"ion-text-start\">\n    <ion-label position=\"floating\">Add Purchase of Expense</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n</ion-row>\n<ion-row> \n  <ion-col  class=\"ion-text-start ion-margin-top\" style=\"margin-left: 10px;\">\n  <ion-label>SubTotal</ion-label>\n</ion-col>\n<ion-col class=\"ion-text-end ion-margin-top\">\n    <ion-label>0.00</ion-label>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col  class=\"ion-text-start ion-margin-top\" style=\"margin-left: 10px;\">\n  <ion-label>Grand Total</ion-label>\n  </ion-col>\n  <ion-col class=\"ion-text-right\">\n    <ion-input class=\"ion-text-right\" value=\"0.00\"></ion-input>\n    </ion-col>\n</ion-row>\n<ion-item-divider >  </ion-item-divider>\n\n</ion-grid>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_newexpense_newexpense_module_ts-es2015.js.map