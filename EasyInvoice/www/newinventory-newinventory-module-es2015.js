(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newinventory-newinventory-module"],{

/***/ "4/6/":
/*!***************************************************!*\
  !*** ./src/app/newinventory/newinventory.page.ts ***!
  \***************************************************/
/*! exports provided: NewinventoryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewinventoryPage", function() { return NewinventoryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_newinventory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./newinventory.page.html */ "M0HA");
/* harmony import */ var _newinventory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newinventory.page.scss */ "BkAu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/db.service */ "ajt+");
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toastservice.service */ "Gb+d");








let NewinventoryPage = class NewinventoryPage {
    constructor(dbService, toastService, navCtrl, route) {
        this.dbService = dbService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.route = route;
    }
    ngOnInit() {
        this.inventory = { id: null, code: "", name: "", nameInArabic: "", description: "", quantity: null, unitPrice: null, purchasePrice: null };
    }
    addNewInventory() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dbService.createOrUpdateInventory(this.inventory).then(data => {
                this.updateInventoryToCustomers();
                if (this.inventory.id == null || this.inventory.id == undefined) {
                    console.log("Item added successfully");
                }
                else {
                    console.log("Item updated successfully");
                }
            }).catch(reason => {
                console.log(reason);
            }).finally(() => {
                this.inventory = { id: null, code: "", name: "", nameInArabic: "", description: "", quantity: null, unitPrice: null, purchasePrice: null };
                this.navCtrl.navigateRoot('inventory');
            });
        });
    }
    updateInventoryToCustomers() {
        let invList;
        this.dbService.getAllInventories().then(resp => {
            invList = resp;
            this.dbService.getAllCustomers().then(data => {
                let cusList = data;
                for (let cus of data) {
                    cus.itemList = invList;
                    this.dbService.UpdateCustomer(cus);
                }
            });
        });
    }
    showInventory() {
        this.navCtrl.navigateRoot('inventory');
    }
    ionViewWillEnter() {
        this.route.queryParams.subscribe(params => {
            if (params['inventory'] == null || params['inventory'] == undefined) {
                this.inventory = { id: null, code: "", name: "", nameInArabic: "", description: "", quantity: null, unitPrice: null, purchasePrice: null };
                this.dbService.incrementInventoryCode().then(data => {
                    this.dbService.getInventoryCode().then(data => {
                        if (data == null || data == undefined) {
                            data = 1;
                        }
                        this.inventory.code = this.dbService.codeConstant + this.dbService.inventoyCodeConstant + data;
                    });
                });
            }
            else {
                this.inventory = params['inventory'];
            }
        });
        console.log('selected inventory' + this.inventory.name);
    }
};
NewinventoryPage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"] },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
NewinventoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-newinventory',
        template: _raw_loader_newinventory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_newinventory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewinventoryPage);



/***/ }),

/***/ "AOgB":
/*!*****************************************************!*\
  !*** ./src/app/newinventory/newinventory.module.ts ***!
  \*****************************************************/
/*! exports provided: NewinventoryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewinventoryPageModule", function() { return NewinventoryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _newinventory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newinventory-routing.module */ "YSQl");
/* harmony import */ var _newinventory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newinventory.page */ "4/6/");







let NewinventoryPageModule = class NewinventoryPageModule {
};
NewinventoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _newinventory_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewinventoryPageRoutingModule"],
        ],
        declarations: [_newinventory_page__WEBPACK_IMPORTED_MODULE_6__["NewinventoryPage"]]
    })
], NewinventoryPageModule);



/***/ }),

/***/ "BkAu":
/*!*****************************************************!*\
  !*** ./src/app/newinventory/newinventory.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdpbnZlbnRvcnkucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "M0HA":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newinventory/newinventory.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainmenu\"> \n\n      </ion-menu-button>\n    </ion-buttons> \n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"home\" (click)=\"showInventory()\"> </ion-back-button>\n      \n    </ion-buttons>\n    <ion-title>New Inventory</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item >\n          <ion-label position=\"floating\">Code</ion-label>\n          <ion-input name=\"code\" type=\"text\" [(ngModel)]=\"inventory.code\" required></ion-input>\n        </ion-item>\n        </ion-col>\n      \n    </ion-row>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"inventory.name\" required></ion-input>\n    </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-item >\n        <ion-label position=\"floating\">اسم</ion-label>\n        <ion-input name=\"nameinarabic\" type=\"text\" [(ngModel)]=\"inventory.nameInArabic\" required></ion-input>\n      </ion-item>\n      </ion-col>\n    \n</ion-row>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-input name=\"location\" type=\"text\" [(ngModel)]=\"inventory.description\" required></ion-input>\n    </ion-item> \n   </ion-col>\n   <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Quantity</ion-label>\n      <ion-input name=\"name\" type=\"number\" [(ngModel)]=\"inventory.quantity\" required></ion-input>\n    </ion-item>\n    </ion-col>\n</ion-row>\n<ion-row>\n\n   \n    <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Unit Price</ion-label>\n      <ion-input name=\"location\" type=\"number\" [(ngModel)]=\"inventory.unitPrice\" required></ion-input>\n    </ion-item> \n   </ion-col>\n   <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Purchase Price</ion-label>\n      <ion-input name=\"purchasePrice\" type=\"number\" [(ngModel)]=\"inventory.purchasePrice\" required></ion-input>\n    </ion-item> \n   </ion-col>\n\n</ion-row>\n\n</ion-grid>\n<ion-row style=\"float:right\">\n  <ion-col >\n  <ion-button  color=\"primary\" (click)=\"addNewInventory()\">\n    <ion-icon name=\"checkmark\"></ion-icon>\n   \n    \n  </ion-button>\n</ion-col>\n</ion-row>\n\n</ion-content>\n<ion-footer>\n  \n    \n    \n\n\n\n</ion-footer>");

/***/ }),

/***/ "YSQl":
/*!*************************************************************!*\
  !*** ./src/app/newinventory/newinventory-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: NewinventoryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewinventoryPageRoutingModule", function() { return NewinventoryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _newinventory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newinventory.page */ "4/6/");




const routes = [
    {
        path: '',
        component: _newinventory_page__WEBPACK_IMPORTED_MODULE_3__["NewinventoryPage"]
    }
];
let NewinventoryPageRoutingModule = class NewinventoryPageRoutingModule {
};
NewinventoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewinventoryPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=newinventory-newinventory-module-es2015.js.map