(self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_client_client_module_ts"],{

/***/ 36993:
/*!*************************************************!*\
  !*** ./src/app/client/client-routing.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPageRoutingModule": function() { return /* binding */ ClientPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _client_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client.page */ 42423);




const routes = [
    {
        path: '',
        component: _client_page__WEBPACK_IMPORTED_MODULE_0__.ClientPage
    }
];
let ClientPageRoutingModule = class ClientPageRoutingModule {
};
ClientPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ClientPageRoutingModule);



/***/ }),

/***/ 27808:
/*!*****************************************!*\
  !*** ./src/app/client/client.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPageModule": function() { return /* binding */ ClientPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./client-routing.module */ 36993);
/* harmony import */ var _client_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.page */ 42423);







let ClientPageModule = class ClientPageModule {
};
ClientPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _client_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientPageRoutingModule
        ],
        declarations: [_client_page__WEBPACK_IMPORTED_MODULE_1__.ClientPage]
    })
], ClientPageModule);



/***/ }),

/***/ 42423:
/*!***************************************!*\
  !*** ./src/app/client/client.page.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ClientPage": function() { return /* binding */ ClientPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_client_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./client.page.html */ 24383);
/* harmony import */ var _client_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./client.page.scss */ 22931);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db.service */ 73773);
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toastservice.service */ 48236);







let ClientPage = class ClientPage {
    constructor(navCtrl, dbService, tostService) {
        this.navCtrl = navCtrl;
        this.dbService = dbService;
        this.tostService = tostService;
    }
    ngOnInit() {
        console.log("init called");
        this.customers = [];
    }
    addNewClient() {
        this.navCtrl.navigateRoot('newclient');
    }
    ionViewWillEnter() {
        this.dbService.getAllCustomers().then(data => {
            this.customers = data;
        }).catch(reason => {
            console.log(reason);
            this.tostService.presentToast("Failed to fetch the customers");
        });
    }
    getSelectedCustomer(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            return this.customers.find(cus => cus.name == name);
        });
    }
    populateCustomerItems(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.customer = yield this.getSelectedCustomer(name);
            this.inventoryList = yield this.dbService.getAllInventories();
            if (this.customer.itemList == null || this.customer.itemList == undefined) {
                this.customer.itemList = new Array();
            }
            this.customer = yield this.setItemsToCustomer();
            return this.customer;
        });
    }
    setItemsToCustomer() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            for (let inv of this.inventoryList) {
                if (this.customer.itemList.find(it => it.id == inv.id) == null || this.customer.itemList.find(it => it.id == inv.id) == null) {
                    this.customer.itemList.push(inv);
                }
                else {
                    var index = this.customer.itemList.findIndex(i => i.id == inv.id);
                    this.customer.itemList[index].name = inv.name;
                    this.customer.itemList[index].description = inv.description;
                    this.customer.itemList[index].purchasePrice = inv.purchasePrice;
                }
            }
            return this.customer;
        });
    }
    editCustomer(name) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.customer = yield this.populateCustomerItems(name);
            let navigationExtras = {
                queryParams: { customer: this.customer }
            };
            console.log("selected customer" + this.customer);
            this.navCtrl.navigateRoot('editclient', navigationExtras);
        });
    }
};
ClientPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__.ToastserviceService }
];
ClientPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-client',
        template: _raw_loader_client_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_client_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ClientPage);



/***/ }),

/***/ 22931:
/*!*****************************************!*\
  !*** ./src/app/client/client.page.scss ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 24383:
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.page.html ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Customer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor= \"let cus of customers\">\n      <ion-label>{{cus.name}}</ion-label>\n      <ion-button color=\"secondary\" (click)=\"editCustomer(cus.name)\">Edit</ion-button>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewClient()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_client_client_module_ts-es2015.js.map