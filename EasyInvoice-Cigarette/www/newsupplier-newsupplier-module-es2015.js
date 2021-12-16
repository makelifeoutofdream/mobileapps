(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newsupplier-newsupplier-module"],{

/***/ "OXBB":
/*!***************************************************!*\
  !*** ./src/app/newsupplier/newsupplier.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzdXBwbGllci5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "SG1W":
/*!*************************************************!*\
  !*** ./src/app/newsupplier/newsupplier.page.ts ***!
  \*************************************************/
/*! exports provided: NewsupplierPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsupplierPage", function() { return NewsupplierPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_newsupplier_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./newsupplier.page.html */ "lw2Y");
/* harmony import */ var _newsupplier_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newsupplier.page.scss */ "OXBB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/db.service */ "ajt+");
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toastservice.service */ "Gb+d");







let NewsupplierPage = class NewsupplierPage {
    constructor(dbService, toastService, navCtrl) {
        this.dbService = dbService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
        this.resetSupplier();
        this.personalDetails = false;
        this.address = false;
        ;
        this.contactDetails = false;
        this.payment = false;
        this.dbService.getSupplierCode().then(data => {
            this.supplier.code = data;
        });
        this.dbService.getAllInventories().then(data => {
            this.inventoryList = data;
        });
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
        this.dbService.incrementSupplierCode().then(data => {
            this.dbService.getSupplierCode().then(data => {
                if (data == null || data == undefined) {
                    data = 1;
                }
                this.supplier.code = this.dbService.codeConstant + this.dbService.supplierCodeConstant + data;
            });
        });
        this.dbService.getAllInventories().then(data => {
            this.inventoryList = data;
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.supplier.itemList = this.inventoryList;
            this.dbService.createSupplier(this.supplier).then(data => {
                this.dbService.incrementSupplierCode();
                this.toastService.presentToast("Supplier added successfully");
            }).catch(reason => {
                console.log(reason);
            }).finally(() => {
                this.resetSupplier();
                this.navCtrl.navigateRoot('supplier');
            });
        });
    }
    showSupplier() {
        this.navCtrl.navigateRoot('supplier');
    }
};
NewsupplierPage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_5__["DbService"] },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__["ToastserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
NewsupplierPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-newsupplier',
        template: _raw_loader_newsupplier_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_newsupplier_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], NewsupplierPage);



/***/ }),

/***/ "YGnE":
/*!***************************************************!*\
  !*** ./src/app/newsupplier/newsupplier.module.ts ***!
  \***************************************************/
/*! exports provided: NewsupplierPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsupplierPageModule", function() { return NewsupplierPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _newsupplier_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newsupplier-routing.module */ "m/Dd");
/* harmony import */ var _newsupplier_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./newsupplier.page */ "SG1W");
/* harmony import */ var _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/expandable/expandable.component */ "Dq3m");








let NewsupplierPageModule = class NewsupplierPageModule {
};
NewsupplierPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _newsupplier_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewsupplierPageRoutingModule"]
        ],
        declarations: [_newsupplier_page__WEBPACK_IMPORTED_MODULE_6__["NewsupplierPage"], _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_7__["ExpandableComponent"]]
    })
], NewsupplierPageModule);



/***/ }),

/***/ "lw2Y":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newsupplier/newsupplier.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainmenu\"> \n\n      </ion-menu-button>\n    </ion-buttons> \n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"home\" (click)=\"showSupplier()\"> </ion-back-button>\n      \n    </ion-buttons>\n    <ion-title>New Supplier</ion-title>\n  </ion-toolbar>\n \n</ion-header>\n\n\n<ion-content>\n  <ion-card  >\n    <ion-card-header (click)=\"expandItem('PERSONAL')\">\n      <ion-card-title>Personal Details</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable expandHeight=\"240px\" [expanded]=\"personalDetails\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n                <ion-item>\n                  <ion-label position=\"floating\">Supplier Code</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.code\" required></ion-input>\n                </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Name</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.name\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">اسم</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"supplier.nameInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n            \n            \n          </ion-row>\n          \n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Contact Name</ion-label>\n                <ion-input name=\"contactpersonname\" type=\"text\" [(ngModel)]=\"supplier.contactPersonName\" required></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">اسم جهة الاتصال</ion-label>\n                <ion-input name=\"contactpersonname\" type=\"text\" [(ngModel)]=\"supplier.contactPersonNameInArabic\" required></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          </ion-grid>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card  >\n    <ion-card-header (click)=\"expandItem('ADDRESS')\">\n      <ion-card-title>Address</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable expandHeight=\"440px\" [expanded]=\"address\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n                <ion-item>\n                  <ion-label position=\"floating\">Building No</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.buildingNumber\" required></ion-input>\n                </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Street</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.street\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">شارع</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"supplier.streetInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">City</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.city\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">مدينة</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"supplier.cityInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">District</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.district\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">يصرف</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"supplier.districtInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Country</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.country\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">دولة</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"supplier.countryInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">PO Box</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.pobox\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Postal Code</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"supplier.postalCode\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          \n          </ion-grid>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card  >\n    <ion-card-header (click)=\"expandItem('CONTACT')\">\n      <ion-card-title>Contact</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable expandHeight=\"240px\" [expanded]=\"contactDetails\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\">Phone No</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.phoneNumber\" required></ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\">Mobile</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.mobile\" required></ion-input>\n              </ion-item>\n          </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item >\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.email\" required></ion-input>\n              </ion-item>\n              </ion-col>   \n          </ion-row>\n          \n          </ion-grid>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card  >\n    <ion-card-header (click)=\"expandItem('PAYMENT')\">\n      <ion-card-title>Payment</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable expandHeight=\"240px\" [expanded]=\"payment\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\">VAT No</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.vatNumber\" required></ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\">CR No</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.crNumber\" required></ion-input>\n              </ion-item>\n          </ion-col>\n          </ion-row>\n          <ion-row>\n            \n              <ion-col size=\"12\">\n                <ion-item >\n                  <ion-label position=\"floating\">Balance</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"supplier.balance\" required></ion-input>\n                </ion-item>\n                </ion-col>   \n          </ion-row>\n          \n          </ion-grid>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n  <ion-row style=\"float:right\">\n    <ion-col >\n    <ion-button  color=\"primary\" (click)=\"addNewSupplier()\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n     \n      \n    </ion-button>\n  </ion-col>\n  </ion-row>\n</ion-content>\n");

/***/ }),

/***/ "m/Dd":
/*!***********************************************************!*\
  !*** ./src/app/newsupplier/newsupplier-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: NewsupplierPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsupplierPageRoutingModule", function() { return NewsupplierPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _newsupplier_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newsupplier.page */ "SG1W");




const routes = [
    {
        path: '',
        component: _newsupplier_page__WEBPACK_IMPORTED_MODULE_3__["NewsupplierPage"]
    }
];
let NewsupplierPageRoutingModule = class NewsupplierPageRoutingModule {
};
NewsupplierPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewsupplierPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=newsupplier-newsupplier-module-es2015.js.map