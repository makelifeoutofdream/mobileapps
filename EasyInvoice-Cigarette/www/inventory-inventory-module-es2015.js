(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module"],{

/***/ "9imi":
/*!***********************************************!*\
  !*** ./src/app/inventory/inventory.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRvcnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "I142":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Inventory</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"background-color: darkblue;\">\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Name</ion-label>\n      <ion-label>Quantity</ion-label>\n      <ion-label>Unit Price</ion-label>\n      <ion-label>Purchase Price</ion-label>\n      <ion-label>Delete</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor= \"let inv of inventories\" >\n      <ion-label (click)=\"editInventory(inv)\" >{{inv.name}}</ion-label>\n      <ion-label (click)=\"editInventory(inv)\">{{inv.quantity}}</ion-label>\n      <ion-label (click)=\"editInventory(inv)\">{{inv.unitPrice}}</ion-label>\n      <ion-label (click)=\"editInventory(inv)\">{{inv.purchasePrice}}</ion-label>\n      <ion-button (click)=\"presentDeleteAlertConfirm(inv)\">\n        <ion-icon name=\"trash-bin\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewInventory()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>");

/***/ }),

/***/ "T4Df":
/*!*********************************************!*\
  !*** ./src/app/inventory/inventory.page.ts ***!
  \*********************************************/
/*! exports provided: InventoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPage", function() { return InventoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./inventory.page.html */ "I142");
/* harmony import */ var _inventory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./inventory.page.scss */ "9imi");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/db.service */ "ajt+");
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toastservice.service */ "Gb+d");







let InventoryPage = class InventoryPage {
    constructor(dbService, toastService, navCtrl, alertController) {
        this.dbService = dbService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
    }
    ngOnInit() {
    }
    addNewInventory() {
        this.navCtrl.navigateRoot('newinventory');
    }
    getAllInventories() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dbService.getAllInventories().then(data => {
                this.inventories = data;
            }).catch(reason => {
                console.log(reason);
            });
        });
    }
    ionViewWillEnter() {
        this.getAllInventories();
    }
    editInventory(inv) {
        let navigationExtras = {
            queryParams: { inventory: inv }
        };
        console.log("selected inventory" + inv);
        this.navCtrl.navigateRoot('newinventory', navigationExtras);
    }
    deleteInventory(inv) {
        this.dbService.deleteInventory(inv).then(data => {
            this.toastService.presentToast('Inventory removed successfully');
            this.getAllInventories().then(data => {
                this.updateInventoryToCustomers();
            });
        });
    }
    updateInventoryToCustomers() {
        this.dbService.getAllCustomers().then(data => {
            let cusList = data;
            for (let cus of data) {
                cus.itemList = this.inventories;
                this.dbService.UpdateCustomer(cus);
            }
        });
    }
    presentDeleteAlertConfirm(inv) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: '<strong>Are you sure to delete this inventory?</strong>!!!',
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
                            this.deleteInventory(inv);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
InventoryPage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_5__["DbService"] },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__["ToastserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
InventoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inventory',
        template: _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InventoryPage);



/***/ }),

/***/ "UYnB":
/*!*******************************************************!*\
  !*** ./src/app/inventory/inventory-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: InventoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPageRoutingModule", function() { return InventoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _inventory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./inventory.page */ "T4Df");




const routes = [
    {
        path: '',
        component: _inventory_page__WEBPACK_IMPORTED_MODULE_3__["InventoryPage"]
    }
];
let InventoryPageRoutingModule = class InventoryPageRoutingModule {
};
InventoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], InventoryPageRoutingModule);



/***/ }),

/***/ "cLqD":
/*!***********************************************!*\
  !*** ./src/app/inventory/inventory.module.ts ***!
  \***********************************************/
/*! exports provided: InventoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryPageModule", function() { return InventoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./inventory-routing.module */ "UYnB");
/* harmony import */ var _inventory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inventory.page */ "T4Df");







let InventoryPageModule = class InventoryPageModule {
};
InventoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__["InventoryPageRoutingModule"]
        ],
        declarations: [_inventory_page__WEBPACK_IMPORTED_MODULE_6__["InventoryPage"]]
    })
], InventoryPageModule);



/***/ })

}]);
//# sourceMappingURL=inventory-inventory-module-es2015.js.map