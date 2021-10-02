(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_newexpense_newexpense_module_ts"], {
    /***/
    5108:
    /*!*********************************************************!*\
      !*** ./src/app/newexpense/newexpense-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewexpensePageRoutingModule": function NewexpensePageRoutingModule() {
          return (
            /* binding */
            _NewexpensePageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _newexpense_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newexpense.page */
      84151);

      var routes = [{
        path: '',
        component: _newexpense_page__WEBPACK_IMPORTED_MODULE_0__.NewexpensePage
      }];

      var _NewexpensePageRoutingModule = function NewexpensePageRoutingModule() {
        _classCallCheck(this, NewexpensePageRoutingModule);
      };

      _NewexpensePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NewexpensePageRoutingModule);
      /***/
    },

    /***/
    6359:
    /*!*************************************************!*\
      !*** ./src/app/newexpense/newexpense.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewexpensePageModule": function NewexpensePageModule() {
          return (
            /* binding */
            _NewexpensePageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _newexpense_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newexpense-routing.module */
      5108);
      /* harmony import */


      var _newexpense_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./newexpense.page */
      84151);

      var _NewexpensePageModule = function NewexpensePageModule() {
        _classCallCheck(this, NewexpensePageModule);
      };

      _NewexpensePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _newexpense_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewexpensePageRoutingModule],
        declarations: [_newexpense_page__WEBPACK_IMPORTED_MODULE_1__.NewexpensePage]
      })], _NewexpensePageModule);
      /***/
    },

    /***/
    84151:
    /*!***********************************************!*\
      !*** ./src/app/newexpense/newexpense.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewexpensePage": function NewexpensePage() {
          return (
            /* binding */
            _NewexpensePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_newexpense_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./newexpense.page.html */
      62673);
      /* harmony import */


      var _newexpense_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./newexpense.page.scss */
      80234);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _NewexpensePage = /*#__PURE__*/function () {
        function NewexpensePage() {
          _classCallCheck(this, NewexpensePage);
        }

        _createClass(NewexpensePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NewexpensePage;
      }();

      _NewexpensePage.ctorParameters = function () {
        return [];
      };

      _NewexpensePage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-newexpense',
        template: _raw_loader_newexpense_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_newexpense_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NewexpensePage);
      /***/
    },

    /***/
    80234:
    /*!*************************************************!*\
      !*** ./src/app/newexpense/newexpense.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdleHBlbnNlLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    62673:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newexpense/newexpense.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>New Expense</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n<ion-grid>\n  <ion-row>\n    \n    \n    <ion-col  class=\"ion-text-start ion-margin-top\" style=\"margin-left: 10px;\">\n      <ion-label>Category</ion-label>\n      </ion-col>\n    <ion-col>\n      <ion-item>\n        \n        <ion-select placeholder=\"Select One\">\n          <ion-select-option value=\"Ad\">Advertisement</ion-select-option>\n          <ion-select-option value=\"car\">Car&Truck</ion-select-option>\n        </ion-select>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n<ion-row>\n  <ion-item>\n    <ion-label>Date</ion-label>\n    <ion-datetime displayFormat=\"MM/DD/YYYY\" placeholder=\"Select Date\"></ion-datetime>\n  </ion-item>  \n</ion-row>\n<ion-row>\n  <ion-item>\n    <ion-label position=\"floating\">Add a Merchant</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n</ion-row>\n<ion-row class=\"ion-text-start\">\n  <ion-item class=\"ion-text-start\">\n    <ion-label position=\"floating\">Add Purchase of Expense</ion-label>\n    <ion-input></ion-input>\n  </ion-item>\n</ion-row>\n<ion-row> \n  <ion-col  class=\"ion-text-start ion-margin-top\" style=\"margin-left: 10px;\">\n  <ion-label>SubTotal</ion-label>\n</ion-col>\n<ion-col class=\"ion-text-end ion-margin-top\">\n    <ion-label>0.00</ion-label>\n</ion-col>\n</ion-row>\n<ion-row>\n  <ion-col  class=\"ion-text-start ion-margin-top\" style=\"margin-left: 10px;\">\n  <ion-label>Grand Total</ion-label>\n  </ion-col>\n  <ion-col class=\"ion-text-right\">\n    <ion-input class=\"ion-text-right\" value=\"0.00\"></ion-input>\n    </ion-col>\n</ion-row>\n<ion-item-divider >  </ion-item-divider>\n\n</ion-grid>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_newexpense_newexpense_module_ts-es5.js.map