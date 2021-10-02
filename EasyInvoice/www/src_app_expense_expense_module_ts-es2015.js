(self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_expense_expense_module_ts"],{

/***/ 81491:
/*!***************************************************!*\
  !*** ./src/app/expense/expense-routing.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensePageRoutingModule": function() { return /* binding */ ExpensePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _expense_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expense.page */ 60859);




const routes = [
    {
        path: '',
        component: _expense_page__WEBPACK_IMPORTED_MODULE_0__.ExpensePage
    }
];
let ExpensePageRoutingModule = class ExpensePageRoutingModule {
};
ExpensePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ExpensePageRoutingModule);



/***/ }),

/***/ 58032:
/*!*******************************************!*\
  !*** ./src/app/expense/expense.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensePageModule": function() { return /* binding */ ExpensePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _expense_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./expense-routing.module */ 81491);
/* harmony import */ var _expense_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expense.page */ 60859);







let ExpensePageModule = class ExpensePageModule {
};
ExpensePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _expense_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExpensePageRoutingModule
        ],
        declarations: [_expense_page__WEBPACK_IMPORTED_MODULE_1__.ExpensePage]
    })
], ExpensePageModule);



/***/ }),

/***/ 60859:
/*!*****************************************!*\
  !*** ./src/app/expense/expense.page.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExpensePage": function() { return /* binding */ ExpensePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_expense_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./expense.page.html */ 55654);
/* harmony import */ var _expense_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./expense.page.scss */ 75066);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app.component */ 55041);






let ExpensePage = class ExpensePage {
    constructor(app, navCtrl) {
        this.app = app;
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    addNewExpense() {
        this.app.showTabs = true;
        this.navCtrl.navigateRoot('newexpense');
    }
};
ExpensePage.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_2__.AppComponent },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController }
];
ExpensePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-expense',
        template: _raw_loader_expense_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_expense_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ExpensePage);



/***/ }),

/***/ 75066:
/*!*******************************************!*\
  !*** ./src/app/expense/expense.page.scss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlbnNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 55654:
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expense/expense.page.html ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Expense</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>1000</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>2500</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>5600</ion-label>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewExpense()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_expense_expense_module_ts-es2015.js.map