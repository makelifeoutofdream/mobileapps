(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-client-module"],{

/***/ "PjFm":
/*!***************************************!*\
  !*** ./src/app/client/client.page.ts ***!
  \***************************************/
/*! exports provided: ClientPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPage", function() { return ClientPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_client_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./client.page.html */ "RhKR");
/* harmony import */ var _client_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./client.page.scss */ "tSmw");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data.service */ "R7Hv");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/db.service */ "ajt+");
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toastservice.service */ "Gb+d");








let ClientPage = class ClientPage {
    constructor(navCtrl, dbService, tostService, alertController, dataService) {
        this.navCtrl = navCtrl;
        this.dbService = dbService;
        this.tostService = tostService;
        this.alertController = alertController;
        this.dataService = dataService;
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.customers.find(cus => cus.name == name);
        });
    }
    populateCustomerItems(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.customer = yield this.populateCustomerItems(name);
            let navigationExtras = {
                queryParams: { customer: this.customer }
            };
            console.log("selected customer" + this.customer);
            this.navCtrl.navigateRoot('editclient', navigationExtras);
        });
    }
    deleteCustomer(cus) {
        this.dbService.deleteCustomer(cus).then(data => {
            this.tostService.presentToast('Customer removed successfully');
            this.dbService.getAllCustomers().then(data => {
                this.customers = data;
            });
        });
    }
    presentDeleteAlertConfirm(cus) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: '<strong>Are you sure to delete this customer?</strong>!!!',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            this.deleteCustomer(cus);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    download() {
        let customerDataList = new Array();
        for (let inv of this.customers) {
            let cusData = { Name: inv.name, ContactPerson: inv.contactPersonName, Mobile: inv.mobile, Balance: inv.balance };
            customerDataList.push(cusData);
        }
        // this.dataService.downloadCcSV(this.invoiceList,'invoices.csv');
        this.dataService.exportToExcel(customerDataList, 'customers.xlsx');
    }
};
ClientPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"] },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
ClientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-client',
        template: _raw_loader_client_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_client_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ClientPage);



/***/ }),

/***/ "RhKR":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Customer</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor= \"let cus of customers\">\n      <ion-label>{{cus.name}}</ion-label>\n      <ion-button color=\"secondary\" (click)=\"editCustomer(cus.name)\">Edit</ion-button>\n      <ion-button (click)=\"presentDeleteAlertConfirm(cus)\">\n        <ion-icon name=\"trash-bin\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n          <ion-button ion-button  color=\"primary\" (click)=\"download()\">\n            <ion-icon name=\"mail\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewClient()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      \n      </ion-row>\n        \n    \n  \n  \n</ion-footer>");

/***/ }),

/***/ "kk3Z":
/*!*****************************************!*\
  !*** ./src/app/client/client.module.ts ***!
  \*****************************************/
/*! exports provided: ClientPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPageModule", function() { return ClientPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _client_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client-routing.module */ "m3Zf");
/* harmony import */ var _client_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client.page */ "PjFm");







let ClientPageModule = class ClientPageModule {
};
ClientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _client_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientPageRoutingModule"]
        ],
        declarations: [_client_page__WEBPACK_IMPORTED_MODULE_6__["ClientPage"]]
    })
], ClientPageModule);



/***/ }),

/***/ "m3Zf":
/*!*************************************************!*\
  !*** ./src/app/client/client-routing.module.ts ***!
  \*************************************************/
/*! exports provided: ClientPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPageRoutingModule", function() { return ClientPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _client_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client.page */ "PjFm");




const routes = [
    {
        path: '',
        component: _client_page__WEBPACK_IMPORTED_MODULE_3__["ClientPage"]
    }
];
let ClientPageRoutingModule = class ClientPageRoutingModule {
};
ClientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ClientPageRoutingModule);



/***/ }),

/***/ "tSmw":
/*!*****************************************!*\
  !*** ./src/app/client/client.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=client-client-module-es2015.js.map