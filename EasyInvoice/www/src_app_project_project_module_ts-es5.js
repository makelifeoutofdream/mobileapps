(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_project_project_module_ts"], {
    /***/
    10775:
    /*!***************************************************!*\
      !*** ./src/app/project/project-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectPageRoutingModule": function ProjectPageRoutingModule() {
          return (
            /* binding */
            _ProjectPageRoutingModule
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


      var _project_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./project.page */
      62377);

      var routes = [{
        path: '',
        component: _project_page__WEBPACK_IMPORTED_MODULE_0__.ProjectPage
      }];

      var _ProjectPageRoutingModule = function ProjectPageRoutingModule() {
        _classCallCheck(this, ProjectPageRoutingModule);
      };

      _ProjectPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ProjectPageRoutingModule);
      /***/
    },

    /***/
    75318:
    /*!*******************************************!*\
      !*** ./src/app/project/project.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectPageModule": function ProjectPageModule() {
          return (
            /* binding */
            _ProjectPageModule
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


      var _project_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./project-routing.module */
      10775);
      /* harmony import */


      var _project_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./project.page */
      62377);

      var _ProjectPageModule = function ProjectPageModule() {
        _classCallCheck(this, ProjectPageModule);
      };

      _ProjectPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _project_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProjectPageRoutingModule],
        declarations: [_project_page__WEBPACK_IMPORTED_MODULE_1__.ProjectPage]
      })], _ProjectPageModule);
      /***/
    },

    /***/
    62377:
    /*!*****************************************!*\
      !*** ./src/app/project/project.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProjectPage": function ProjectPage() {
          return (
            /* binding */
            _ProjectPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_project_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./project.page.html */
      60728);
      /* harmony import */


      var _project_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./project.page.scss */
      84702);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _ProjectPage = /*#__PURE__*/function () {
        function ProjectPage() {
          _classCallCheck(this, ProjectPage);
        }

        _createClass(ProjectPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ProjectPage;
      }();

      _ProjectPage.ctorParameters = function () {
        return [];
      };

      _ProjectPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-project',
        template: _raw_loader_project_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_project_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ProjectPage);
      /***/
    },

    /***/
    84702:
    /*!*******************************************!*\
      !*** ./src/app/project/project.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    60728:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/project/project.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>project</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_project_project_module_ts-es5.js.map