(self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_purchase_purchase_module_ts"],{

/***/ 4552:
/*!*****************************************************!*\
  !*** ./src/app/purchase/purchase-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasePageRoutingModule": function() { return /* binding */ PurchasePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _purchase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase.page */ 47723);




const routes = [
    {
        path: '',
        component: _purchase_page__WEBPACK_IMPORTED_MODULE_0__.PurchasePage
    }
];
let PurchasePageRoutingModule = class PurchasePageRoutingModule {
};
PurchasePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PurchasePageRoutingModule);



/***/ }),

/***/ 10930:
/*!*********************************************!*\
  !*** ./src/app/purchase/purchase.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasePageModule": function() { return /* binding */ PurchasePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _purchase_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purchase-routing.module */ 4552);
/* harmony import */ var _purchase_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase.page */ 47723);







let PurchasePageModule = class PurchasePageModule {
};
PurchasePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _purchase_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchasePageRoutingModule
        ],
        declarations: [_purchase_page__WEBPACK_IMPORTED_MODULE_1__.PurchasePage]
    })
], PurchasePageModule);



/***/ }),

/***/ 47723:
/*!*******************************************!*\
  !*** ./src/app/purchase/purchase.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasePage": function() { return /* binding */ PurchasePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_purchase_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./purchase.page.html */ 73765);
/* harmony import */ var _purchase_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purchase.page.scss */ 73481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let PurchasePage = class PurchasePage {
    constructor() { }
    ngOnInit() {
    }
};
PurchasePage.ctorParameters = () => [];
PurchasePage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-purchase',
        template: _raw_loader_purchase_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_purchase_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], PurchasePage);



/***/ }),

/***/ 73481:
/*!*********************************************!*\
  !*** ./src/app/purchase/purchase.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 73765:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/purchase/purchase.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Purchase</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_purchase_purchase_module_ts-es2015.js.map