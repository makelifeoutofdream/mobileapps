(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newpurchase-newpurchase-module"],{

/***/ "GIh0":
/*!***************************************************!*\
  !*** ./src/app/newpurchase/newpurchase.module.ts ***!
  \***************************************************/
/*! exports provided: NewpurchasePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpurchasePageModule", function() { return NewpurchasePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _newpurchase_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newpurchase-routing.module */ "YECj");
/* harmony import */ var _newpurchase_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newpurchase.page */ "PRVS");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ionic-selectable */ "8xsl");








let NewpurchasePageModule = class NewpurchasePageModule {
};
NewpurchasePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _newpurchase_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewpurchasePageRoutingModule"],
            ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"]
        ],
        declarations: [_newpurchase_page__WEBPACK_IMPORTED_MODULE_6__["NewpurchasePage"]]
    })
], NewpurchasePageModule);



/***/ }),

/***/ "PRVS":
/*!*************************************************!*\
  !*** ./src/app/newpurchase/newpurchase.page.ts ***!
  \*************************************************/
/*! exports provided: NewpurchasePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpurchasePage", function() { return NewpurchasePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_newpurchase_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./newpurchase.page.html */ "bGXv");
/* harmony import */ var _newpurchase_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newpurchase.page.scss */ "SQNV");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/db.service */ "ajt+");
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toastservice.service */ "Gb+d");
/* harmony import */ var _validation_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../validation.service */ "oxX3");








let NewpurchasePage = class NewpurchasePage {
    constructor(dbService, navCtrl, tostService, validationService) {
        this.dbService = dbService;
        this.navCtrl = navCtrl;
        this.tostService = tostService;
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
        this.resetPurchase();
        this.dbService.incrementPurchaseCode().then(data => {
            this.dbService.getPurchaseCode().then(data => {
                console.log("purchase no" + data);
                if (data == null || data == undefined) {
                    data = 1;
                }
                this.purchase.poNumber = this.dbService.codeConstant + this.dbService.purchaseCodeConstant + data;
            });
        });
        this.dbService.getAllInventories().then(data => {
            this.products = data;
        });
        this.dbService.getAllSuppliers().then(data => {
            this.supplierList = data;
        });
    }
    populateSupplier() {
        this.dbService.getAllSuppliers().then(data => {
            this.supplierList = data;
        });
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
    addNewPurchase() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dbService.createPurchase(this.purchase).then(data => {
                this.dbService.updateStock(this.purchase.purchaseItems).then(data => {
                    this.tostService.presentToast("Purchase added successfully");
                });
            }).catch(reason => {
                console.log(reason);
            }).finally(() => {
                this.resetPurchase();
                this.navCtrl.navigateRoot('purchase');
            });
        });
    }
    numericOnly(evt) {
        return this.validationService.numericOnly(evt);
    }
    showPurchase() {
        this.navCtrl.navigateRoot('purchase');
    }
};
NewpurchasePage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_5__["DbService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__["ToastserviceService"] },
    { type: _validation_service__WEBPACK_IMPORTED_MODULE_7__["ValidationService"] }
];
NewpurchasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-newpurchase',
        template: _raw_loader_newpurchase_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_newpurchase_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewpurchasePage);



/***/ }),

/***/ "SQNV":
/*!***************************************************!*\
  !*** ./src/app/newpurchase/newpurchase.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdwdXJjaGFzZS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "YECj":
/*!***********************************************************!*\
  !*** ./src/app/newpurchase/newpurchase-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NewpurchasePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewpurchasePageRoutingModule", function() { return NewpurchasePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _newpurchase_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newpurchase.page */ "PRVS");




const routes = [
    {
        path: '',
        component: _newpurchase_page__WEBPACK_IMPORTED_MODULE_3__["NewpurchasePage"]
    }
];
let NewpurchasePageRoutingModule = class NewpurchasePageRoutingModule {
};
NewpurchasePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewpurchasePageRoutingModule);



/***/ }),

/***/ "bGXv":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newpurchase/newpurchase.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainmenu\"> \n\n      </ion-menu-button>\n    </ion-buttons> \n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"home\" (click)=\"showPurchase()\"> </ion-back-button>\n      \n    </ion-buttons>\n    <ion-title>New Purchase</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n          <ion-item style=\"margin-top: 2%;\">\n            <ion-label position=\"floating\">PO No</ion-label>\n            <ion-input name=\"poNumber\" type=\"text\" [(ngModel)]=\"purchase.poNumber\" required></ion-input>\n          </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"floating\">Date</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"purchase.purchaseDate\" required ></ion-datetime>\n        </ion-item>\n    </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item style=\"margin-top: 7%;\">\n        <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%;\"  [(ngModel)]=\"purchase.supplier\" placeholder=\"Select Supplier\">\n          <ion-select-option *ngFor=\"let sup of supplierList\" [value]=\"sup\">{{sup.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n        <ion-item >\n          <ion-label position=\"floating\">Delivery Date</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"purchase.deliveryDate\" required ></ion-datetime>\n        </ion-item> \n       </ion-col>\n    </ion-row>\n    \n    <ion-item>\n      <ion-label>Product</ion-label>\n      <ionic-selectable style=\"height: 30px;\"\n        \n        [(ngModel)]=\"product\"\n        [items]=\"products\"\n        itemValueField=\"name\"\n        itemTextField=\"name\"\n        [canSearch]=\"true\"\n        (onChange)=\"productSelected($event)\"\n        [isMultiple]=\"true\">\n      </ionic-selectable>\n    </ion-item> \n    \n<table *ngIf=\"showTable\" border=\"none\" style=\"width: 94%;margin-left: 2%;margin-right: 5%;margin-top: 2%; color: black;background-color: aliceblue; text-align: center;\">\n  <tr style=\"border: none; color: white; background-color: lightslategray;\">\n    <td>\n      Item Code\n    </td>\n    <td>\n      Item Name\n    </td>\n    <td>\n      Order Quantity\n    </td>\n    <td>\n      Received Quantity\n    </td>\n    <td>\n      Price\n    </td>\n  </tr>\n  <tr *ngFor= \"let pItem of purchase.purchaseItems\" style=\"border: none;\">\n    <td><ion-input  disabled [(ngModel)]=\"pItem.item.code\" ></ion-input></td>\n    <td><ion-input  disabled [(ngModel)]=\"pItem.item.name\" ></ion-input></td>\n    <td><ion-input  type=\"number\" [(ngModel)]=\"pItem.orderQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n    <td><ion-input  type=\"number\" [(ngModel)]=\"pItem.deliverQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n    <td><ion-input  type=\"number\" [(ngModel)]=\"pItem.price\"  ></ion-input></td>\n  </tr>\n</table>\n    </ion-grid>\n    <ion-row style=\"float:right\">\n      <ion-col >\n      <ion-button  color=\"primary\" (click)=\"addNewPurchase()\">\n        <ion-icon name=\"checkmark\"></ion-icon>\n       \n        \n      </ion-button>\n    </ion-col>\n    </ion-row>\n    \n    \n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=newpurchase-newpurchase-module-es2015.js.map