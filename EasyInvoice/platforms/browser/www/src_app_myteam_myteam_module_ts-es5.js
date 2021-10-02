(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_myteam_myteam_module_ts"], {
    /***/
    23105:
    /*!*************************************************!*\
      !*** ./src/app/myteam/myteam-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyteamPageRoutingModule": function MyteamPageRoutingModule() {
          return (
            /* binding */
            _MyteamPageRoutingModule
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


      var _myteam_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myteam.page */
      84619);

      var routes = [{
        path: '',
        component: _myteam_page__WEBPACK_IMPORTED_MODULE_0__.MyteamPage
      }];

      var _MyteamPageRoutingModule = function MyteamPageRoutingModule() {
        _classCallCheck(this, MyteamPageRoutingModule);
      };

      _MyteamPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _MyteamPageRoutingModule);
      /***/
    },

    /***/
    18011:
    /*!*****************************************!*\
      !*** ./src/app/myteam/myteam.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyteamPageModule": function MyteamPageModule() {
          return (
            /* binding */
            _MyteamPageModule
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


      var _myteam_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./myteam-routing.module */
      23105);
      /* harmony import */


      var _myteam_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./myteam.page */
      84619);

      var _MyteamPageModule = function MyteamPageModule() {
        _classCallCheck(this, MyteamPageModule);
      };

      _MyteamPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _myteam_routing_module__WEBPACK_IMPORTED_MODULE_0__.MyteamPageRoutingModule],
        declarations: [_myteam_page__WEBPACK_IMPORTED_MODULE_1__.MyteamPage]
      })], _MyteamPageModule);
      /***/
    },

    /***/
    84619:
    /*!***************************************!*\
      !*** ./src/app/myteam/myteam.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MyteamPage": function MyteamPage() {
          return (
            /* binding */
            _MyteamPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_myteam_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./myteam.page.html */
      63101);
      /* harmony import */


      var _myteam_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./myteam.page.scss */
      5917);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _MyteamPage = /*#__PURE__*/function () {
        function MyteamPage() {
          _classCallCheck(this, MyteamPage);
        }

        _createClass(MyteamPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MyteamPage;
      }();

      _MyteamPage.ctorParameters = function () {
        return [];
      };

      _MyteamPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-myteam',
        template: _raw_loader_myteam_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_myteam_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _MyteamPage);
      /***/
    },

    /***/
    5917:
    /*!*****************************************!*\
      !*** ./src/app/myteam/myteam.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJteXRlYW0ucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    63101:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/myteam/myteam.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>myteam</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_myteam_myteam_module_ts-es5.js.map