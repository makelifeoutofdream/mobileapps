(self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_newclient_newclient_module_ts"],{

/***/ 57067:
/*!*******************************************************!*\
  !*** ./src/app/newclient/newclient-routing.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewclientPageRoutingModule": function() { return /* binding */ NewclientPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _newclient_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newclient.page */ 98785);




const routes = [
    {
        path: '',
        component: _newclient_page__WEBPACK_IMPORTED_MODULE_0__.NewclientPage
    }
];
let NewclientPageRoutingModule = class NewclientPageRoutingModule {
};
NewclientPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewclientPageRoutingModule);



/***/ }),

/***/ 9490:
/*!***********************************************!*\
  !*** ./src/app/newclient/newclient.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewclientPageModule": function() { return /* binding */ NewclientPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _newclient_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newclient-routing.module */ 57067);
/* harmony import */ var _newclient_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newclient.page */ 98785);







let NewclientPageModule = class NewclientPageModule {
};
NewclientPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _newclient_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewclientPageRoutingModule
        ],
        declarations: [_newclient_page__WEBPACK_IMPORTED_MODULE_1__.NewclientPage]
    })
], NewclientPageModule);



/***/ }),

/***/ 98785:
/*!*********************************************!*\
  !*** ./src/app/newclient/newclient.page.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewclientPage": function() { return /* binding */ NewclientPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_newclient_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./newclient.page.html */ 63122);
/* harmony import */ var _newclient_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newclient.page.scss */ 8408);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db.service */ 73773);
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toastservice.service */ 48236);







let NewclientPage = class NewclientPage {
    constructor(dbService, tostService, navCtrl) {
        this.dbService = dbService;
        this.tostService = tostService;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.customer = { name: "", location: "", contactPersonName: "", vat: null, itemList: null };
    }
    addNewClient() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.dbService.createCustomer(this.customer).then(data => {
                this.tostService.presentToast("Customer added successfully");
            }).catch(reason => {
                console.log(reason);
            }).finally(() => {
                this.customer = { name: "", location: "", contactPersonName: "", vat: null, itemList: null };
                this.navCtrl.navigateRoot('client');
            });
        });
    }
};
NewclientPage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__.ToastserviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
NewclientPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-newclient',
        template: _raw_loader_newclient_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_newclient_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], NewclientPage);



/***/ }),

/***/ 8408:
/*!***********************************************!*\
  !*** ./src/app/newclient/newclient.page.scss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fullwidthinput {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld2NsaWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoibmV3Y2xpZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsd2lkdGhpbnB1dHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ 63122:
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newclient/newclient.page.html ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>New Customer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.name\" required></ion-input>\n    </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Location</ion-label>\n      <ion-input name=\"location\" type=\"text\" [(ngModel)]=\"customer.location\" required></ion-input>\n    </ion-item> \n   </ion-col>\n  \n  \n</ion-row>\n\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-item >\n      <ion-label position=\"floating\">Contact Person Name</ion-label>\n      <ion-input name=\"contactpersonname\" type=\"text\" [(ngModel)]=\"customer.contactPersonName\" required></ion-input>\n    </ion-item>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-item >\n      <ion-label position=\"floating\">Vat</ion-label>\n      <ion-input name=\"val\" type=\"text\" [(ngModel)]=\"customer.val\" required></ion-input>\n    </ion-item>\n    </ion-col>\n    \n</ion-row>\n\n</ion-grid>\n<ion-row style=\"float:right\">\n  <ion-col >\n  <ion-button  color=\"primary\" (click)=\"addNewClient()\">\n    <ion-icon name=\"checkmark\"></ion-icon>\n   \n    \n  </ion-button>\n</ion-col>\n</ion-row>\n\n</ion-content>\n<ion-footer>\n  \n    \n    \n\n\n\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_newclient_newclient_module_ts-es2015.js.map