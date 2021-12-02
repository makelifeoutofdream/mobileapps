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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>New Expense</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n<ion-grid>\n  <ion-row>\n    \n    \n    <ion-col  class=\"ion-text-start ion-margin-top\" style=\"margin-left: 10px;\">\n      <ion-label>Category</ion-label>\n      </ion-col>\n    <ion-col>\n      <ion-item>\n        \n        <ion-select placeholder=\"Select One\">\n          <ion-select-option value=\"Ad\">Advertisement</ion-select-option>\n          <ion-select-option value=\"car\">Car&Truck</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n<ion-row>\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-datetime displayFormat=\"MM/DD/YYYY\" placeholder=\"Select Date\"></ion-datetime>\n  </ion-item>  \n</ion-row>\n<ion-row>\n  <ion-item>\n    <ion-label position=\"floating\">Add a Merchant</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n</ion-row>\n<ion-row class=\"ion-text-start\">\n  <ion-item class=\"ion-text-start\">\n    <ion-label position=\"floating\">Add Purchase of Expense</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n</ion-row>\n<ion-row> \n  <ion-col  class=\"ion-text-start ion-margin-top\" style=\"margin-left: 10px;\">\n  <ion-label>SubTotal</ion-label>\n</ion-col>\n<ion-col class=\"ion-text-end ion-margin-top\">\n    <ion-label>0.00</ion-label>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col  class=\"ion-text-start ion-margin-top\" style=\"margin-left: 10px;\">\n  <ion-label>Grand Total</ion-label>\n  </ion-col>\n  <ion-col class=\"ion-text-right\">\n    <ion-input class=\"ion-text-right\" value=\"0.00\"></ion-input>\n    </ion-col>\n</ion-row>\n<ion-item-divider >  </ion-item-divider>\n\n</ion-grid>\n</ion-content>\n";
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

      var NewexpensePage = /*#__PURE__*/function () {
        function NewexpensePage() {
          _classCallCheck(this, NewexpensePage);
        }

        _createClass(NewexpensePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NewexpensePage;
      }();

      NewexpensePage.ctorParameters = function () {
        return [];
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