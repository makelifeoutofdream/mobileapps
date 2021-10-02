(self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_editclient_editclient_module_ts"],{

/***/ 61060:
/*!*********************************************************!*\
  !*** ./src/app/editclient/editclient-routing.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditclientPageRoutingModule": function() { return /* binding */ EditclientPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _editclient_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editclient.page */ 25288);




const routes = [
    {
        path: '',
        component: _editclient_page__WEBPACK_IMPORTED_MODULE_0__.EditclientPage
    }
];
let EditclientPageRoutingModule = class EditclientPageRoutingModule {
};
EditclientPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditclientPageRoutingModule);



/***/ }),

/***/ 99024:
/*!*************************************************!*\
  !*** ./src/app/editclient/editclient.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditclientPageModule": function() { return /* binding */ EditclientPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _editclient_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editclient-routing.module */ 61060);
/* harmony import */ var _editclient_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editclient.page */ 25288);







let EditclientPageModule = class EditclientPageModule {
};
EditclientPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editclient_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditclientPageRoutingModule
        ],
        declarations: [_editclient_page__WEBPACK_IMPORTED_MODULE_1__.EditclientPage]
    })
], EditclientPageModule);



/***/ }),

/***/ 25288:
/*!***********************************************!*\
  !*** ./src/app/editclient/editclient.page.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditclientPage": function() { return /* binding */ EditclientPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_editclient_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editclient.page.html */ 75423);
/* harmony import */ var _editclient_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editclient.page.scss */ 85748);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db.service */ 73773);
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toastservice.service */ 48236);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);








let EditclientPage = class EditclientPage {
    constructor(dbService, toastService, navCtrl, route) {
        this.dbService = dbService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.route = route;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.route.queryParams.subscribe(params => {
            this.customer = params['customer'];
        });
        console.log('selected customer' + this.customer);
    }
    updateClient() {
        this.dbService.UpdateCustomer(this.customer).then(data => this.toastService.presentToast("Customer updated successfully"))
            .catch(reason => {
            this.toastService.presentToast("Customer update failed");
            console.log(reason);
        });
    }
};
EditclientPage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__.ToastserviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute }
];
EditclientPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-editclient',
        template: _raw_loader_editclient_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editclient_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditclientPage);



/***/ }),

/***/ 85748:
/*!*************************************************!*\
  !*** ./src/app/editclient/editclient.page.scss ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0Y2xpZW50LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 75423:
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editclient/editclient.page.html ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Client</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item >\n          <ion-label position=\"floating\">Name</ion-label>\n          <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.name\" required></ion-input>\n        </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n        <ion-item >\n          <ion-label position=\"floating\">Location</ion-label>\n          <ion-input name=\"location\" type=\"text\" [(ngModel)]=\"customer.location\" required></ion-input>\n        </ion-item> \n       </ion-col>\n      \n      \n    </ion-row>\n    \n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item >\n          <ion-label position=\"floating\">Contact Person Name</ion-label>\n          <ion-input name=\"contactpersonname\" type=\"text\" [(ngModel)]=\"customer.contactPersonName\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item >\n          <ion-label position=\"floating\">Vat</ion-label>\n          <ion-input name=\"val\" type=\"text\" [(ngModel)]=\"customer.val\" required></ion-input>\n        </ion-item>\n        </ion-col>\n        \n    </ion-row>\n  </ion-grid>\n  <ion-item-divider></ion-item-divider>\n  <ion-list>\n    <ion-item  *ngFor= \"let item of customer.itemList\">\n      <ion-grid>\n        <ion-row style=\"color : white ; background-color: blueviolet;\">\n          <ion-col size=6>Item</ion-col>\n          <ion-col size=2>Price</ion-col>\n        </ion-row>\n      <ion-row style=\"background-color: aliceblue;\">\n        <ion-col size=6>\n          <ion-input [(ngModel)]=\"item.name\" disabled></ion-input>\n        </ion-col>\n        <ion-col size=\"2\">\n          <ion-input [(ngModel)]=\"item.unitPrice\"></ion-input>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n    </ion-item>\n  </ion-list>\n  \n</ion-content>\n<ion-footer>\n  <ion-row style=\"float:right\">\n    <ion-col>\n      <ion-button color=\"Primary\" (click)=\"updateClient()\">\n        <ion-icon name=\"checkmark\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_editclient_editclient_module_ts-es2015.js.map