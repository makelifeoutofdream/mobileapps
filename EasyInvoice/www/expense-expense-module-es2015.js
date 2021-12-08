(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expense-expense-module"],{

/***/ "+4qN":
/*!***************************************************!*\
  !*** ./src/app/expense/expense-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ExpensePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensePageRoutingModule", function() { return ExpensePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _expense_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./expense.page */ "k9Zv");




const routes = [
    {
        path: '',
        component: _expense_page__WEBPACK_IMPORTED_MODULE_3__["ExpensePage"]
    }
];
let ExpensePageRoutingModule = class ExpensePageRoutingModule {
};
ExpensePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ExpensePageRoutingModule);



/***/ }),

/***/ "4foS":
/*!*******************************************!*\
  !*** ./src/app/expense/expense.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlbnNlLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "jb6p":
/*!*******************************************!*\
  !*** ./src/app/expense/expense.module.ts ***!
  \*******************************************/
/*! exports provided: ExpensePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensePageModule", function() { return ExpensePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _expense_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./expense-routing.module */ "+4qN");
/* harmony import */ var _expense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./expense.page */ "k9Zv");







let ExpensePageModule = class ExpensePageModule {
};
ExpensePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _expense_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpensePageRoutingModule"]
        ],
        declarations: [_expense_page__WEBPACK_IMPORTED_MODULE_6__["ExpensePage"]]
    })
], ExpensePageModule);



/***/ }),

/***/ "k9Zv":
/*!*****************************************!*\
  !*** ./src/app/expense/expense.page.ts ***!
  \*****************************************/
/*! exports provided: ExpensePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpensePage", function() { return ExpensePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_expense_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./expense.page.html */ "qiL1");
/* harmony import */ var _expense_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./expense.page.scss */ "4foS");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "Sy1n");






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
    { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
ExpensePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-expense',
        template: _raw_loader_expense_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_expense_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ExpensePage);



/***/ }),

/***/ "qiL1":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expense/expense.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Expense</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label>1000</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>2500</ion-label>\n    </ion-item>\n    <ion-item>\n      <ion-label>5600</ion-label>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewExpense()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=expense-expense-module-es2015.js.map