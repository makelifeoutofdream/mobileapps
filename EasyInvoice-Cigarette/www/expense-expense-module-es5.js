(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expense-expense-module"], {
    /***/
    "+4qN":
    /*!***************************************************!*\
      !*** ./src/app/expense/expense-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ExpensePageRoutingModule */

    /***/
    function qN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpensePageRoutingModule", function () {
        return ExpensePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _expense_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./expense.page */
      "k9Zv");

      var routes = [{
        path: '',
        component: _expense_page__WEBPACK_IMPORTED_MODULE_3__["ExpensePage"]
      }];

      var ExpensePageRoutingModule = function ExpensePageRoutingModule() {
        _classCallCheck(this, ExpensePageRoutingModule);
      };

      ExpensePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ExpensePageRoutingModule);
      /***/
    },

    /***/
    "4foS":
    /*!*******************************************!*\
      !*** ./src/app/expense/expense.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function foS(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHBlbnNlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "jb6p":
    /*!*******************************************!*\
      !*** ./src/app/expense/expense.module.ts ***!
      \*******************************************/

    /*! exports provided: ExpensePageModule */

    /***/
    function jb6p(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpensePageModule", function () {
        return ExpensePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _expense_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./expense-routing.module */
      "+4qN");
      /* harmony import */


      var _expense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./expense.page */
      "k9Zv");

      var ExpensePageModule = function ExpensePageModule() {
        _classCallCheck(this, ExpensePageModule);
      };

      ExpensePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _expense_routing_module__WEBPACK_IMPORTED_MODULE_5__["ExpensePageRoutingModule"]],
        declarations: [_expense_page__WEBPACK_IMPORTED_MODULE_6__["ExpensePage"]]
      })], ExpensePageModule);
      /***/
    },

    /***/
    "k9Zv":
    /*!*****************************************!*\
      !*** ./src/app/expense/expense.page.ts ***!
      \*****************************************/

    /*! exports provided: ExpensePage */

    /***/
    function k9Zv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ExpensePage", function () {
        return ExpensePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_expense_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./expense.page.html */
      "qiL1");
      /* harmony import */


      var _expense_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./expense.page.scss */
      "4foS");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/db.service */
      "ajt+");
      /* harmony import */


      var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/toastservice.service */
      "Gb+d");

      var ExpensePage = /*#__PURE__*/function () {
        function ExpensePage(dbService, toastService, navCtrl, loadingController) {
          _classCallCheck(this, ExpensePage);

          this.dbService = dbService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
          this.loadingController = loadingController;
        }

        _createClass(ExpensePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.startDate = new Date();
            this.endDate = new Date();
          }
        }, {
          key: "getAllExpenses",
          value: function getAllExpenses() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.dbService.getAllExpenses().then(function (data) {
                        _this.expenseList = data;
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getTotalExpense",
          value: function getTotalExpense() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      if (!(this.filterExpenses != null && this.filterExpenses != undefined && this.filterExpenses.length)) {
                        _context2.next = 2;
                        break;
                      }

                      return _context2.abrupt("return", this.filterExpenses.map(function (itm) {
                        return itm.amount;
                      }).reduce(function (acc, nxt) {
                        return acc + nxt;
                      }));

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "addNewExpense",
          value: function addNewExpense() {
            this.navCtrl.navigateRoot('newexpense');
          }
        }, {
          key: "editExpense",
          value: function editExpense(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var navigationExtras;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.expense = this.expenseList.filter(function (a) {
                        return a.id == id;
                      })[0];
                      navigationExtras = {
                        queryParams: {
                          expense: this.expense
                        }
                      };
                      console.log("selected expense" + JSON.stringify(this.expense));
                      this.navCtrl.navigateRoot('newexpense', navigationExtras);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "filterExpense",
          value: function filterExpense() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this2 = this;

              var loading;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.loadingController.create({
                        cssClass: 'my-custom-class',
                        message: 'Please wait...',
                        duration: 300000
                      });

                    case 2:
                      loading = _context4.sent;
                      _context4.next = 5;
                      return loading.present();

                    case 5:
                      this.getAllExpenses().then(function (data) {
                        _this2.applyFilter().then(function (data) {
                          _this2.getTotalExpense().then(function (data) {
                            _this2.totalExpense = data;
                            loading.dismiss();
                            console.log('Loading dismissed!');
                          });
                        });
                      });

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "applyFilter",
          value: function applyFilter() {
            var _a, _b, _c;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var start, end;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      start = new Date(this.startDate);
                      end = new Date(this.endDate);

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
                        this.filterExpenses = (_a = this.expenseList) === null || _a === void 0 ? void 0 : _a.filter(function (inv) {
                          return new Date(inv.date) >= start;
                        });
                      } else if (this.startDate != null && this.startDate != undefined && this.endDate != null && this.endDate != undefined) {
                        this.filterExpenses = (_b = this.expenseList) === null || _b === void 0 ? void 0 : _b.filter(function (inv) {
                          var date = new Date(inv.date);
                          date.setHours(1);
                          date.setMinutes(1);
                          date.setSeconds(1);
                          return date.getTime() >= start.getTime() && date.getTime() <= end.getTime();
                        });
                      } else if ((this.startDate == null || this.startDate == undefined) && this.endDate != null && this.endDate != undefined) {
                        this.filterExpenses = (_c = this.expenseList) === null || _c === void 0 ? void 0 : _c.filter(function (inv) {
                          return new Date(inv.date) <= end;
                        });
                      }

                      return _context5.abrupt("return", this.filterExpenses);

                    case 6:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }]);

        return ExpensePage;
      }();

      ExpensePage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_5__["DbService"]
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__["ToastserviceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }];
      };

      ExpensePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-expense',
        template: _raw_loader_expense_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_expense_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ExpensePage);
      /***/
    },

    /***/
    "qiL1":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expense/expense.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function qiL1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Expense</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"4\" >\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"startDate\" placeholder=\"Start Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n  \n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"endDate\" placeholder=\"End Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n    <ion-col  size=\"4\" style=\"text-align: right;\">\n      <ion-button style=\"padding-right: 5%;float: right;\" (click)=\"filterExpense()\">\n        <ion-icon name=\"search-outline\"></ion-icon>\n      </ion-button>\n    </ion-col>  \n  </ion-row>\n  \n  <ion-list>\n    <ion-list-header>\n      <ion-col size=\"4\">Date</ion-col>\n      <ion-col size=\"4\" style=\"text-align: center;\">Category</ion-col>\n      <ion-col style=\"text-align: right;padding-right: 5%;\" size=\"4\">Amount</ion-col>\n    </ion-list-header>\n    <ion-item *ngFor= \"let exp of filterExpenses\" (click)=\"editExpense(exp.id)\">\n      \n        \n        \n          <ion-col size=\"4\">{{exp.date | date : short}}</ion-col>\n          <ion-col size=\"4\" style=\"text-align: center;\">{{exp.category}}</ion-col>\n          <ion-col style=\"text-align: right;\" size=\"4\">{{exp.amount}}</ion-col>\n       \n     \n    </ion-item>\n  </ion-list>    \n\n</ion-content>\n<ion-content style=\"max-height: 10%;margin-top: 2%;\" slot=\"fixed\">\n  <ion-badge style=\"float: right;margin-right: 1%;\" color=\"primary\">Total Expense : {{(totalExpense) | number : '1.2'}}</ion-badge>\n</ion-content>\n<ion-footer>\n  \n    \n  <ion-row style=\"float:right\">\n    <ion-col >\n    <ion-button  color=\"primary\" (click)=\"addNewExpense()\">\n      <ion-icon name=\"add-circle\"></ion-icon>\n    </ion-button>\n  </ion-col>\n  </ion-row>\n    \n \n\n\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=expense-expense-module-es5.js.map