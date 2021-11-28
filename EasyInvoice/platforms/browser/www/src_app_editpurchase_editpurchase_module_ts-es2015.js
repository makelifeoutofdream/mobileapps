(self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_editpurchase_editpurchase_module_ts"],{

/***/ 57849:
/*!*************************************************************!*\
  !*** ./src/app/editpurchase/editpurchase-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditpurchasePageRoutingModule": function() { return /* binding */ EditpurchasePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _editpurchase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editpurchase.page */ 58089);




const routes = [
    {
        path: '',
        component: _editpurchase_page__WEBPACK_IMPORTED_MODULE_0__.EditpurchasePage
    }
];
let EditpurchasePageRoutingModule = class EditpurchasePageRoutingModule {
};
EditpurchasePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditpurchasePageRoutingModule);



/***/ }),

/***/ 73913:
/*!*****************************************************!*\
  !*** ./src/app/editpurchase/editpurchase.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditpurchasePageModule": function() { return /* binding */ EditpurchasePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _editpurchase_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./editpurchase-routing.module */ 57849);
/* harmony import */ var _editpurchase_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editpurchase.page */ 58089);
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ 93319);








let EditpurchasePageModule = class EditpurchasePageModule {
};
EditpurchasePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _editpurchase_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditpurchasePageRoutingModule,
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule
        ],
        declarations: [_editpurchase_page__WEBPACK_IMPORTED_MODULE_1__.EditpurchasePage]
    })
], EditpurchasePageModule);



/***/ }),

/***/ 58089:
/*!***************************************************!*\
  !*** ./src/app/editpurchase/editpurchase.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditpurchasePage": function() { return /* binding */ EditpurchasePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_editpurchase_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./editpurchase.page.html */ 65788);
/* harmony import */ var _editpurchase_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editpurchase.page.scss */ 72022);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db.service */ 73773);
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toastservice.service */ 48236);
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../validation.service */ 62813);









let EditpurchasePage = class EditpurchasePage {
    constructor(dbService, toastService, navCtrl, route, validationService) {
        this.dbService = dbService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.route = route;
        this.validationService = validationService;
        this.showTable = false;
    }
    ngOnInit() {
        this.resetPurchase();
    }
    resetPurchase() {
        this.purchase = { id: null, poNumber: null, purchaseDate: new Date(), deliveryDate: new Date(), purchaseItems: [], supplier: null };
    }
    ionViewWillEnter() {
        this.showTable = false;
        this.dbService.getAllInventories().then(data => {
            this.products = data;
        }).then(data => {
            this.dbService.getAllSuppliers().then(data => {
                this.supplierList = data;
            }).then(data => {
                this.route.queryParams.subscribe(params => {
                    this.purchase = params['purchase'];
                    console.log("purchase selected" + this.purchase.supplier.id);
                    this.deafultProducts = [];
                    for (let pitem of this.purchase.purchaseItems) {
                        let inv = { id: null, code: "", name: "", nameInArabic: "", description: "", quantity: null, unitPrice: null, purchasePrice: null };
                        inv = pitem.item;
                        this.deafultProducts.push(inv);
                    }
                    this.showTable = true;
                });
            });
        });
    }
    compareSupplier(e1, e2) {
        return e1 && e2 ? e1.id == e2.id : e1 == e2;
    }
    productSelected(evt) {
        this.selectedProducts = evt.value;
        let tempList;
        tempList = [];
        for (let inv of this.selectedProducts) {
            var index = this.purchase.purchaseItems.findIndex(i => i.item.id == inv.id);
            let p = this.purchase.purchaseItems[index];
            let pItem = { item: { id: null, code: "", name: "", nameInArabic: "", description: "", quantity: null, purchasePrice: null, unitPrice: null }, orderQuantity: null, deliverQuantity: null, price: null };
            pItem.item = inv;
            if (p != null && p != undefined) {
                pItem.deliverQuantity = p.deliverQuantity;
                pItem.orderQuantity = p.orderQuantity;
                pItem.price = p.price;
            }
            tempList.push(pItem);
        }
        this.purchase.purchaseItems = tempList;
        this.showTable = true;
    }
    numericOnly(evt) {
        return this.validationService.numericOnly(evt);
    }
    editPurchase() {
        this.dbService.updatePurchase(this.purchase).then(data => {
            this.toastService.presentToast("Purchase updated successfully");
            return this.showPurchase();
        }).catch(reason => {
            this.toastService.presentToast("Failed to save update " + reason);
        });
    }
    showPurchase() {
        this.navCtrl.navigateRoot('purchase');
    }
};
EditpurchasePage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__.ToastserviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: _validation_service__WEBPACK_IMPORTED_MODULE_4__.ValidationService }
];
EditpurchasePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-editpurchase',
        template: _raw_loader_editpurchase_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_editpurchase_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditpurchasePage);



/***/ }),

/***/ 72022:
/*!*****************************************************!*\
  !*** ./src/app/editpurchase/editpurchase.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0cHVyY2hhc2UucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 65788:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editpurchase/editpurchase.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainmenu\"> \n\n      </ion-menu-button>\n    </ion-buttons> \n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"home\" (click)=\"showPurchase()\"> </ion-back-button>\n      \n    </ion-buttons>\n    <ion-title>Edit Purchase</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n          <ion-item style=\"margin-top: 2%;\">\n            <ion-label position=\"floating\">PO No</ion-label>\n            <ion-input name=\"poNumber\" disabled type=\"text\" [(ngModel)]=\"purchase.poNumber\" required></ion-input>\n          </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"floating\">Date</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"purchase.purchaseDate\" required ></ion-datetime>\n        </ion-item>\n    </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item style=\"margin-top: 7%;\">\n        <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%;\"  [(ngModel)]=\"purchase.supplier\" [compareWith]=\"compareSupplier\" placeholder=\"Select Supplier\">\n          <ion-select-option *ngFor=\"let sup of supplierList\" [value]=\"sup\">{{sup.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n        <ion-item >\n          <ion-label position=\"floating\">Delivery Date</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"purchase.deliveryDate\" required ></ion-datetime>\n        </ion-item> \n       </ion-col>\n    </ion-row>\n    \n    <ion-item>\n      <ion-label>Product</ion-label>\n      <ionic-selectable style=\"height: 30px;\"\n        \n        [(ngModel)]=\"deafultProducts\"\n        [items]=\"products\"\n        itemValueField=\"name\"\n        itemTextField=\"name\"\n        [canSearch]=\"true\"\n        (onChange)=\"productSelected($event)\"\n        [isMultiple]=\"true\"\n        >\n      </ionic-selectable>\n    </ion-item> \n    \n<table *ngIf=\"showTable\" border=\"none\" style=\"width: 94%;margin-left: 2%;margin-right: 5%;margin-top: 2%; color: black;background-color: aliceblue; text-align: center;\">\n  <tr style=\"border: none; color: white; background-color: lightslategray;\">\n    <td>\n      Item Code\n    </td>\n    <td>\n      Item Name\n    </td>\n    <td>\n      Order Quantity\n    </td>\n    <td>\n      Received Quantity\n    </td>\n    <td>\n      Price\n    </td>\n  </tr>\n  <tr *ngFor= \"let pItem of purchase.purchaseItems\" style=\"border: none;\">\n    <td><ion-input  disabled [(ngModel)]=\"pItem.item.code\" ></ion-input></td>\n    <td><ion-input  disabled [(ngModel)]=\"pItem.item.name\" ></ion-input></td>\n    <td><ion-input  type=\"number\" [(ngModel)]=\"pItem.orderQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n    <td><ion-input  type=\"number\" [(ngModel)]=\"pItem.deliverQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n    <td><ion-input  type=\"number\" [(ngModel)]=\"pItem.price\"  ></ion-input></td>\n  </tr>\n</table>\n    </ion-grid>\n    <ion-row style=\"float:right\">\n      <ion-col >\n      <ion-button  color=\"primary\" (click)=\"editPurchase()\">\n        <ion-icon name=\"checkmark\"></ion-icon>\n       \n        \n      </ion-button>\n    </ion-col>\n    </ion-row>\n    \n    \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_editpurchase_editpurchase_module_ts-es2015.js.map