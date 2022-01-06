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
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/db.service */ "ajt+");
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/toastservice.service */ "Gb+d");







let ExpensePage = class ExpensePage {
    constructor(dbService, toastService, navCtrl, loadingController) {
        this.dbService = dbService;
        this.toastService = toastService;
        this.navCtrl = navCtrl;
        this.loadingController = loadingController;
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        this.startDate = new Date();
        this.endDate = new Date();
    }
    getAllExpenses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.dbService.getAllExpenses().then(data => {
                this.expenseList = data;
            });
        });
    }
    getTotalExpense() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.filterExpenses != null && this.filterExpenses != undefined && this.filterExpenses.length) {
                return this.filterExpenses.map(itm => itm.amount).reduce((acc, nxt) => acc + nxt);
            }
        });
    }
    addNewExpense() {
        this.navCtrl.navigateRoot('newexpense');
    }
    editExpense(id) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.expense = this.expenseList.filter(a => a.id == id)[0];
            let navigationExtras = {
                queryParams: { expense: this.expense }
            };
            console.log("selected expense" + JSON.stringify(this.expense));
            this.navCtrl.navigateRoot('newexpense', navigationExtras);
        });
    }
    filterExpense() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingController.create({
                cssClass: 'my-custom-class',
                message: 'Please wait...',
                duration: 300000,
            });
            yield loading.present();
            this.getAllExpenses().then(data => {
                this.applyFilter().then(data => {
                    this.getTotalExpense().then(data => {
                        this.totalExpense = data;
                        loading.dismiss();
                        console.log('Loading dismissed!');
                    });
                });
            });
        });
    }
    applyFilter() {
        var _a, _b, _c;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var start = new Date(this.startDate);
            var end = new Date(this.endDate);
            if (this.startDate != null && this.startDate != undefined) {
                start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
                start.setHours(0);
                start.setMinutes(0);
                start.setSeconds(0);
            }
            if (this.endDate != null && this.endDate != undefined) {
                end = new Date(end.getFullYear(), end.getMonth(), end.getDate());
                end.setHours(23);
                end.setMinutes(23);
                end.setSeconds(23);
            }
            if (this.startDate != null && this.startDate != undefined && (this.endDate == null || this.endDate == undefined)) {
                this.filterExpenses = (_a = this.expenseList) === null || _a === void 0 ? void 0 : _a.filter(inv => new Date(inv.date) >= start);
            }
            else if (this.startDate != null && this.startDate != undefined && this.endDate != null && this.endDate != undefined) {
                this.filterExpenses = (_b = this.expenseList) === null || _b === void 0 ? void 0 : _b.filter(inv => {
                    var date = new Date(inv.date);
                    date.setHours(1);
                    date.setMinutes(1);
                    date.setSeconds(1);
                    return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
                });
            }
            else if ((this.startDate == null || this.startDate == undefined) && this.endDate != null && this.endDate != undefined) {
                this.filterExpenses = (_c = this.expenseList) === null || _c === void 0 ? void 0 : _c.filter(inv => new Date(inv.date) <= end);
            }
            return this.filterExpenses;
        });
    }
};
ExpensePage.ctorParameters = () => [
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_5__["DbService"] },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__["ToastserviceService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Expense</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"4\" >\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"startDate\" placeholder=\"Start Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n  \n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"endDate\" placeholder=\"End Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n    <ion-col  size=\"4\" style=\"text-align: right;\">\n      <ion-button style=\"padding-right: 5%;float: right;\" (click)=\"filterExpense()\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>  \n  </ion-row>\n  \n  <ion-list>\n    <ion-list-header>\n      <ion-col size=\"4\">Date</ion-col>\n      <ion-col size=\"4\" style=\"text-align: center;\">Category</ion-col>\n      <ion-col style=\"text-align: right;padding-right: 5%;\" size=\"4\">Amount</ion-col>\n    </ion-list-header>\n    <ion-item *ngFor= \"let exp of filterExpenses\" (click)=\"editExpense(exp.id)\">\n      \n        \n        \n          <ion-col size=\"4\">{{exp.date | date : short}}</ion-col>\n          <ion-col size=\"4\" style=\"text-align: center;\">{{exp.category}}</ion-col>\n          <ion-col style=\"text-align: right;\" size=\"4\">{{exp.amount}}</ion-col>\n       \n     \n    </ion-item>\n  </ion-list>    \n\n</ion-content>\n<ion-content style=\"max-height: 10%;margin-top: 2%;\" slot=\"fixed\">\n  <ion-badge style=\"float: right;margin-right: 1%;\" color=\"primary\">Total Expense : {{(totalExpense) | number : '1.2'}}</ion-badge>\n</ion-content>\n<ion-footer>\n  \n    \n  <ion-row style=\"float:right\">\n    <ion-col >\n    <ion-button  color=\"primary\" (click)=\"addNewExpense()\">\n      <ion-icon name=\"add-circle\"></ion-icon>\n    </ion-button>\n  </ion-col>\n  </ion-row>\n    \n \n\n\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=expense-expense-module-es2015.js.map