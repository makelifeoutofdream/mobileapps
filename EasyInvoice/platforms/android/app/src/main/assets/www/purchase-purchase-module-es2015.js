(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchase-purchase-module"],{

/***/ "/xc3":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/purchase/purchase.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Purchase</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor= \"let pur of purchaseList\" (click)=\"editPurchase(pur.id)\">\n      <ion-label>{{pur.poNumber}}</ion-label>\n      <ion-label>{{pur.purchaseDate|date}}</ion-label>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewPurchase()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>");

/***/ }),

/***/ "EYFz":
/*!*********************************************!*\
  !*** ./src/app/purchase/purchase.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Tsp1":
/*!*********************************************!*\
  !*** ./src/app/purchase/purchase.module.ts ***!
  \*********************************************/
/*! exports provided: PurchasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasePageModule", function() { return PurchasePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _purchase_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./purchase-routing.module */ "pnZu");
/* harmony import */ var _purchase_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchase.page */ "e8+2");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "8xsl");








let PurchasePageModule = class PurchasePageModule {
};
PurchasePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _purchase_routing_module__WEBPACK_IMPORTED_MODULE_5__["PurchasePageRoutingModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"]
        ],
        declarations: [_purchase_page__WEBPACK_IMPORTED_MODULE_6__["PurchasePage"]]
    })
], PurchasePageModule);



/***/ }),

/***/ "e8+2":
/*!*******************************************!*\
  !*** ./src/app/purchase/purchase.page.ts ***!
  \*******************************************/
/*! exports provided: PurchasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasePage", function() { return PurchasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_purchase_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./purchase.page.html */ "/xc3");
/* harmony import */ var _purchase_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purchase.page.scss */ "EYFz");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/db.service */ "ajt+");






let PurchasePage = class PurchasePage {
    constructor(dbService, navCtrl) {
        this.dbService = dbService;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.dbService.getAllPurchases().then(data => {
            this.purchaseList = data;
        });
    }
    ionViewWillEnter() {
        this.dbService.getAllPurchases().then(data => {
            this.purchaseList = data;
        });
    }
    addNewPurchase() {
        this.navCtrl.navigateRoot('newpurchase');
    }
    editPurchase(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.purchase = this.purchaseList.find(pur => pur.id == id);
            let navigationExtras = {
                queryParams: { purchase: this.purchase }
            };
            console.log("purchase clicked " + this.purchase.poNumber);
            this.navCtrl.navigateRoot('editpurchase', navigationExtras);
        });
    }
};
PurchasePage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_5__["DbService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
PurchasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-purchase',
        template: _raw_loader_purchase_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_purchase_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PurchasePage);



/***/ }),

/***/ "pnZu":
/*!*****************************************************!*\
  !*** ./src/app/purchase/purchase-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PurchasePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchasePageRoutingModule", function() { return PurchasePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _purchase_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchase.page */ "e8+2");




const routes = [
    {
        path: '',
        component: _purchase_page__WEBPACK_IMPORTED_MODULE_3__["PurchasePage"]
    }
];
let PurchasePageRoutingModule = class PurchasePageRoutingModule {
};
PurchasePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PurchasePageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=purchase-purchase-module-es2015.js.map