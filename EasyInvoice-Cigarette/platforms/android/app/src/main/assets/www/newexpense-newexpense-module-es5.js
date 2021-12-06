(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newexpense-newexpense-module"], {
    /***/
    "HN4I":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newexpense/newexpense.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function HN4I(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainmenu\"> \n\n      </ion-menu-button>\n    </ion-buttons> \n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"home\" (click)=\"showExpense()\"> </ion-back-button>\n      \n    </ion-buttons>\n    <ion-title>{{expense.id!=null && expense.id!=undefined ? 'Edit'  : 'New'}} Expense</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content >\n<ion-row>\n\n<ion-col>\n\n  <ion-item style=\"margin-top: 3%;\">\n    <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"expense.date\" placeholder=\"Date\"></ion-datetime>\n  </ion-item>\n</ion-col>  \n<ion-col>\n  <ion-item>\n    <ion-label position=\"floating\">Category</ion-label>\n    <ion-input [(ngModel)]=\"expense.category\"></ion-input>\n  </ion-item>\n\n</ion-col>\n  \n</ion-row>\n  \n<ion-row>\n  <ion-col>\n    <ion-item>\n      <ion-label position=\"floating\">Amount</ion-label>\n      <ion-input type=\"number\" [(ngModel)]=\"expense.amount\"></ion-input>\n    </ion-item>\n  </ion-col>\n</ion-row>\n<ion-row style=\"float:right\">\n  <ion-col >\n  <ion-button  color=\"primary\" (click)=\"addNewExpense()\">\n    <ion-icon name=\"checkmark\"></ion-icon>\n   \n    \n  </ion-button>\n</ion-col>\n</ion-row>\n\n</ion-content>\n<ion-footer>\n\n</ion-footer>";
      /***/
    },

    /***/
    "KEhM":
    /*!*********************************************************!*\
      !*** ./src/app/newexpense/newexpense-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: NewexpensePageRoutingModule */

    /***/
    function KEhM(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewexpensePageRoutingModule", function () {
        return NewexpensePageRoutingModule;
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


      var _newexpense_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./newexpense.page */
      "cmfy");

      var routes = [{
        path: '',
        component: _newexpense_page__WEBPACK_IMPORTED_MODULE_3__["NewexpensePage"]
      }];

      var NewexpensePageRoutingModule = function NewexpensePageRoutingModule() {
        _classCallCheck(this, NewexpensePageRoutingModule);
      };

      NewexpensePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewexpensePageRoutingModule);
      /***/
    },

    /***/
    "cmfy":
    /*!***********************************************!*\
      !*** ./src/app/newexpense/newexpense.page.ts ***!
      \***********************************************/

    /*! exports provided: NewexpensePage */

    /***/
    function cmfy(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewexpensePage", function () {
        return NewexpensePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_newexpense_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./newexpense.page.html */
      "HN4I");
      /* harmony import */


      var _newexpense_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./newexpense.page.scss */
      "ulQJ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/db.service */
      "ajt+");
      /* harmony import */


      var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/toastservice.service */
      "Gb+d");

      var NewexpensePage = /*#__PURE__*/function () {
        function NewexpensePage(dbService, toastService, navCtrl, route) {
          _classCallCheck(this, NewexpensePage);

          this.dbService = dbService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
          this.route = route;
        }

        _createClass(NewexpensePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.resetExpense();
          }
        }, {
          key: "resetExpense",
          value: function resetExpense() {
            this.expense = {
              id: null,
              category: null,
              date: null,
              amount: null
            };
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              _this.expense = params['expense'];
            });

            if (this.expense == null || this.expense == undefined) {
              this.resetExpense();
            }
          }
        }, {
          key: "showExpense",
          value: function showExpense() {
            this.navCtrl.navigateRoot('expense');
          }
        }, {
          key: "addNewExpense",
          value: function addNewExpense() {
            var _this2 = this;

            if (this.expense.id != null && this.expense.id != undefined) {
              this.dbService.UpdateExpense(this.expense).then(function (data) {
                _this2.toastService.presentToast('Expense updated successfully');

                _this2.navCtrl.navigateRoot('expense');
              })["catch"](function (err) {
                _this2.toastService.presentToast('Failed to update expense' + err);
              });
            } else {
              this.dbService.createExpense(this.expense).then(function (data) {
                _this2.toastService.presentToast("Expense addedd successfully");

                _this2.navCtrl.navigateRoot('expense');
              })["catch"](function (err) {
                _this2.toastService.presentToast('Failed to add expense' + err);
              });
            }
          }
        }]);

        return NewexpensePage;
      }();

      NewexpensePage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      NewexpensePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-newexpense',
        template: _raw_loader_newexpense_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_newexpense_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NewexpensePage);
      /***/
    },

    /***/
    "ulQJ":
    /*!*************************************************!*\
      !*** ./src/app/newexpense/newexpense.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function ulQJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdleHBlbnNlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "xJqg":
    /*!*************************************************!*\
      !*** ./src/app/newexpense/newexpense.module.ts ***!
      \*************************************************/

    /*! exports provided: NewexpensePageModule */

    /***/
    function xJqg(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewexpensePageModule", function () {
        return NewexpensePageModule;
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


      var _newexpense_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./newexpense-routing.module */
      "KEhM");
      /* harmony import */


      var _newexpense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./newexpense.page */
      "cmfy");

      var NewexpensePageModule = function NewexpensePageModule() {
        _classCallCheck(this, NewexpensePageModule);
      };

      NewexpensePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _newexpense_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewexpensePageRoutingModule"]],
        declarations: [_newexpense_page__WEBPACK_IMPORTED_MODULE_6__["NewexpensePage"]]
      })], NewexpensePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=newexpense-newexpense-module-es5.js.map