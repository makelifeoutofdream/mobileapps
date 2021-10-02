(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_register_register_module_ts"], {
    /***/
    23963:
    /*!*****************************************************!*\
      !*** ./src/app/register/register-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPageRoutingModule": function RegisterPageRoutingModule() {
          return (
            /* binding */
            _RegisterPageRoutingModule
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


      var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register.page */
      98135);

      var routes = [{
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
      }];

      var _RegisterPageRoutingModule = function RegisterPageRoutingModule() {
        _classCallCheck(this, RegisterPageRoutingModule);
      };

      _RegisterPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _RegisterPageRoutingModule);
      /***/
    },

    /***/
    18723:
    /*!*********************************************!*\
      !*** ./src/app/register/register.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPageModule": function RegisterPageModule() {
          return (
            /* binding */
            _RegisterPageModule
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


      var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./register-routing.module */
      23963);
      /* harmony import */


      var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.page */
      98135);

      var _RegisterPageModule = function RegisterPageModule() {
        _classCallCheck(this, RegisterPageModule);
      };

      _RegisterPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
      })], _RegisterPageModule);
      /***/
    },

    /***/
    98135:
    /*!*******************************************!*\
      !*** ./src/app/register/register.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RegisterPage": function RegisterPage() {
          return (
            /* binding */
            _RegisterPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./register.page.html */
      29200);
      /* harmony import */


      var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./register.page.scss */
      69728);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/db.service */
      73773);

      var _RegisterPage = /*#__PURE__*/function () {
        function RegisterPage(dbService, navCtrl) {
          _classCallCheck(this, RegisterPage);

          this.navCtrl = navCtrl;
          this.newUser = {
            id: null,
            first_name: '',
            email: '',
            mobile_number: '',
            user_password: '',
            user_confirm_password: ''
          };
          this.dbService = dbService;
        }

        _createClass(RegisterPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "registerNewUser",
          value: function registerNewUser() {
            console.log(JSON.stringify(this.newUser));
            this.dbService.signup(this.newUser);
            this.navCtrl.navigateRoot('login');
          }
        }]);

        return RegisterPage;
      }();

      _RegisterPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
        }];
      };

      _RegisterPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _RegisterPage);
      /***/
    },

    /***/
    69728:
    /*!*********************************************!*\
      !*** ./src/app/register/register.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    29200:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form >\n    <ion-grid>\n      <ion-row color=\"primary\" justify-content-center>\n        <ion-col align-self-center size-md=\"6\" size-lg=\"5\" size-xs=\"12\">\n          <div text-center>\n            <h3>Create your account!</h3>\n          </div>\n          <div padding>\n            <ion-item>\n              <ion-input  name=\"name\" type=\"text\" placeholder=\"Name\" [(ngModel)]=\"newUser.first_name\"  required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"email\" type=\"email\" placeholder=\"your@email.com\" [(ngModel)]=\"newUser.email\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"password\" type=\"password\" placeholder=\"Password\"  [(ngModel)]=\"newUser.user_password\" required></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-input name=\"confirm\" type=\"password\" placeholder=\"Password again\" [(ngModel)]=\"newUser.user_confirm_password\"  required></ion-input>\n            </ion-item>\n          </div>\n          <div padding>\n            <ion-button  size=\"large\" type=\"submit\" (click)=\"registerNewUser()\"  expand=\"block\">Register</ion-button>\n          </div>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col class=\"ion-text-right\">\n          <a [routerLink]=\"['/login']\" class=\"small-text\">Already have account ? Sign in</a>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </form>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_register_register_module_ts-es5.js.map