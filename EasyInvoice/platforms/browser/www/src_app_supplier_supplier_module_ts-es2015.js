(self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_supplier_supplier_module_ts"],{

/***/ 88103:
/*!*****************************************************!*\
  !*** ./src/app/supplier/supplier-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierPageRoutingModule": function() { return /* binding */ SupplierPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _supplier_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier.page */ 14944);




const routes = [
    {
        path: '',
        component: _supplier_page__WEBPACK_IMPORTED_MODULE_0__.SupplierPage
    }
];
let SupplierPageRoutingModule = class SupplierPageRoutingModule {
};
SupplierPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SupplierPageRoutingModule);



/***/ }),

/***/ 53371:
/*!*********************************************!*\
  !*** ./src/app/supplier/supplier.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierPageModule": function() { return /* binding */ SupplierPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _supplier_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supplier-routing.module */ 88103);
/* harmony import */ var _supplier_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier.page */ 14944);
/* harmony import */ var _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/expandable/expandable.component */ 38932);








let SupplierPageModule = class SupplierPageModule {
};
SupplierPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _supplier_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupplierPageRoutingModule
        ],
        declarations: [_supplier_page__WEBPACK_IMPORTED_MODULE_1__.SupplierPage, _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_2__.ExpandableComponent]
    })
], SupplierPageModule);



/***/ }),

/***/ 14944:
/*!*******************************************!*\
  !*** ./src/app/supplier/supplier.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SupplierPage": function() { return /* binding */ SupplierPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_supplier_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./supplier.page.html */ 73728);
/* harmony import */ var _supplier_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./supplier.page.scss */ 82545);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/db.service */ 73773);
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/toastservice.service */ 48236);







let SupplierPage = class SupplierPage {
    constructor(dbService, toastService, navCtrl) {
        this.dbService = dbService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.resetSupplier();
        this.suppliers = [];
    }
    resetSupplier() {
        this.supplier = { id: null, code: null, name: "", itemList: null, nameInArabic: "", contactPersonName: "", contactPersonNameInArabic: "",
            buildingNumber: "", street: "", streetInArabic: "", city: "", cityInArabic: "", district: "", districtInArabic: "", country: "", countryInArabic: "",
            pobox: "", postalCode: "", phoneNumber: "", mobileNumber: "", email: "", vatNumber: "", crNumber: "", balanceAmount: null };
    }
    ionViewWillEnter() {
        this.personalDetails = false;
        this.address = false;
        ;
        this.contactDetails = false;
        this.payment = false;
        this.dbService.getSupplierCode().then(data => {
            this.supplier.code = data;
        });
        this.dbService.getAllSuppliers().then(data => {
            this.suppliers = data;
        }).catch(reason => {
            console.log(reason);
            this.toastService.presentToast("Failed to fetch the suppliers");
        });
    }
    expandItem(item) {
        if ('PERSONAL' == item) {
            this.personalDetails = !this.personalDetails;
        }
        else if ('ADDRESS' == item) {
            this.address = !this.address;
        }
        else if ('CONTACT' == item) {
            this.contactDetails = !this.contactDetails;
        }
        else if ('PAYMENT' == item) {
            this.payment = !this.payment;
        }
    }
    addNewSupplier() {
        this.navCtrl.navigateRoot('newsupplier');
    }
    editSupplier(id) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            this.supplier = this.suppliers.find(sup => sup.id == id);
            let navigationExtras = {
                queryParams: { supplier: this.supplier }
            };
            console.log("selected supplier" + this.supplier);
            this.navCtrl.navigateRoot('editsupplier', navigationExtras);
        });
    }
};
SupplierPage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__.ToastserviceService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
SupplierPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-supplier',
        template: _raw_loader_supplier_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_supplier_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SupplierPage);



/***/ }),

/***/ 82545:
/*!*********************************************!*\
  !*** ./src/app/supplier/supplier.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGllci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ 73728:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supplier/supplier.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Supplier</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor= \"let sup of suppliers\">\n      <ion-label>{{sup.name}}</ion-label>\n      <ion-button color=\"secondary\" (click)=\"editSupplier(sup.id)\">Edit</ion-button>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewSupplier()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_supplier_supplier_module_ts-es2015.js.map