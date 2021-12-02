(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myteam-myteam-module"], {
    /***/
    "d/bG":
    /*!*****************************************!*\
      !*** ./src/app/myteam/myteam.module.ts ***!
      \*****************************************/

    /*! exports provided: MyteamPageModule */

    /***/
    function dBG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyteamPageModule", function () {
        return MyteamPageModule;
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


      var _myteam_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./myteam-routing.module */
      "hROA");
      /* harmony import */


      var _myteam_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./myteam.page */
      "k2B8");

      var MyteamPageModule = function MyteamPageModule() {
        _classCallCheck(this, MyteamPageModule);
      };

      MyteamPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _myteam_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyteamPageRoutingModule"]],
        declarations: [_myteam_page__WEBPACK_IMPORTED_MODULE_6__["MyteamPage"]]
      })], MyteamPageModule);
      /***/
    },

    /***/
    "hROA":
    /*!*************************************************!*\
      !*** ./src/app/myteam/myteam-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: MyteamPageRoutingModule */

    /***/
    function hROA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyteamPageRoutingModule", function () {
        return MyteamPageRoutingModule;
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


      var _myteam_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./myteam.page */
      "k2B8");

      var routes = [{
        path: '',
        component: _myteam_page__WEBPACK_IMPORTED_MODULE_3__["MyteamPage"]
      }];

      var MyteamPageRoutingModule = function MyteamPageRoutingModule() {
        _classCallCheck(this, MyteamPageRoutingModule);
      };

      MyteamPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], MyteamPageRoutingModule);
      /***/
    },

    /***/
    "k2B8":
    /*!***************************************!*\
      !*** ./src/app/myteam/myteam.page.ts ***!
      \***************************************/

    /*! exports provided: MyteamPage */

    /***/
    function k2B8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MyteamPage", function () {
        return MyteamPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_myteam_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./myteam.page.html */
      "z17y");
      /* harmony import */


      var _myteam_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./myteam.page.scss */
      "z+xr");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var MyteamPage = /*#__PURE__*/function () {
        function MyteamPage() {
          _classCallCheck(this, MyteamPage);
        }

        _createClass(MyteamPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MyteamPage;
      }();

      MyteamPage.ctorParameters = function () {
        return [];
      };

      MyteamPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-myteam',
        template: _raw_loader_myteam_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_myteam_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MyteamPage);
      /***/
    },

    /***/
    "z+xr":
    /*!*****************************************!*\
      !*** ./src/app/myteam/myteam.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function zXr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteXRlYW0ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "z17y":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myteam/myteam.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function z17y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>myteam</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=myteam-myteam-module-es5.js.map