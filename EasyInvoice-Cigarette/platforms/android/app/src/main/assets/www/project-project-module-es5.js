(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project-project-module"], {
    /***/
    "0k1G":
    /*!*******************************************!*\
      !*** ./src/app/project/project.module.ts ***!
      \*******************************************/

    /*! exports provided: ProjectPageModule */

    /***/
    function k1G(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectPageModule", function () {
        return ProjectPageModule;
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


      var _project_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./project-routing.module */
      "R7Aq");
      /* harmony import */


      var _project_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./project.page */
      "aLp6");

      var ProjectPageModule = function ProjectPageModule() {
        _classCallCheck(this, ProjectPageModule);
      };

      ProjectPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _project_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProjectPageRoutingModule"]],
        declarations: [_project_page__WEBPACK_IMPORTED_MODULE_6__["ProjectPage"]]
      })], ProjectPageModule);
      /***/
    },

    /***/
    "34PH":
    /*!*******************************************!*\
      !*** ./src/app/project/project.page.scss ***!
      \*******************************************/

    /*! exports provided: default */

    /***/
    function PH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    "R7Aq":
    /*!***************************************************!*\
      !*** ./src/app/project/project-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: ProjectPageRoutingModule */

    /***/
    function R7Aq(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectPageRoutingModule", function () {
        return ProjectPageRoutingModule;
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


      var _project_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./project.page */
      "aLp6");

      var routes = [{
        path: '',
        component: _project_page__WEBPACK_IMPORTED_MODULE_3__["ProjectPage"]
      }];

      var ProjectPageRoutingModule = function ProjectPageRoutingModule() {
        _classCallCheck(this, ProjectPageRoutingModule);
      };

      ProjectPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ProjectPageRoutingModule);
      /***/
    },

    /***/
    "aLp6":
    /*!*****************************************!*\
      !*** ./src/app/project/project.page.ts ***!
      \*****************************************/

    /*! exports provided: ProjectPage */

    /***/
    function aLp6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectPage", function () {
        return ProjectPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_project_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./project.page.html */
      "rKpR");
      /* harmony import */


      var _project_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./project.page.scss */
      "34PH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ProjectPage = /*#__PURE__*/function () {
        function ProjectPage() {
          _classCallCheck(this, ProjectPage);
        }

        _createClass(ProjectPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProjectPage;
      }();

      ProjectPage.ctorParameters = function () {
        return [];
      };

      ProjectPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-project',
        template: _raw_loader_project_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_project_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProjectPage);
      /***/
    },

    /***/
    "rKpR":
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.page.html ***!
      \*********************************************************************************/

    /*! exports provided: default */

    /***/
    function rKpR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>project</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=project-project-module-es5.js.map