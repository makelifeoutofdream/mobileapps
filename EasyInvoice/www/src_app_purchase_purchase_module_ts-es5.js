(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_purchase_purchase_module_ts"], {
    /***/
    4552:
    /*!*****************************************************!*\
      !*** ./src/app/purchase/purchase-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PurchasePageRoutingModule": function PurchasePageRoutingModule() {
          return (
            /* binding */
            _PurchasePageRoutingModule
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


      var _purchase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./purchase.page */
      47723);

      var routes = [{
        path: '',
        component: _purchase_page__WEBPACK_IMPORTED_MODULE_0__.PurchasePage
      }];

      var _PurchasePageRoutingModule = function PurchasePageRoutingModule() {
        _classCallCheck(this, PurchasePageRoutingModule);
      };

      _PurchasePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _PurchasePageRoutingModule);
      /***/
    },

    /***/
    10930:
    /*!*********************************************!*\
      !*** ./src/app/purchase/purchase.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PurchasePageModule": function PurchasePageModule() {
          return (
            /* binding */
            _PurchasePageModule
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


      var _purchase_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./purchase-routing.module */
      4552);
      /* harmony import */


      var _purchase_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./purchase.page */
      47723);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      93319);

      var _PurchasePageModule = function PurchasePageModule() {
        _classCallCheck(this, PurchasePageModule);
      };

      _PurchasePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _purchase_routing_module__WEBPACK_IMPORTED_MODULE_0__.PurchasePageRoutingModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule],
        declarations: [_purchase_page__WEBPACK_IMPORTED_MODULE_1__.PurchasePage]
      })], _PurchasePageModule);
      /***/
    },

    /***/
    47723:
    /*!*******************************************!*\
      !*** ./src/app/purchase/purchase.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PurchasePage": function PurchasePage() {
          return (
            /* binding */
            _PurchasePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_purchase_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./purchase.page.html */
      73765);
      /* harmony import */


      var _purchase_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./purchase.page.scss */
      73481);
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

      var _PurchasePage = /*#__PURE__*/function () {
        function PurchasePage(dbService, navCtrl) {
          _classCallCheck(this, PurchasePage);

          this.dbService = dbService;
          this.navCtrl = navCtrl;
        }

        _createClass(PurchasePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.dbService.getAllPurchases().then(function (data) {
              _this.purchaseList = data;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.dbService.getAllPurchases().then(function (data) {
              _this2.purchaseList = data;
            });
          }
        }, {
          key: "addNewPurchase",
          value: function addNewPurchase() {
            this.navCtrl.navigateRoot('newpurchase');
          }
        }]);

        return PurchasePage;
      }();

      _PurchasePage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.NavController
        }];
      };

      _PurchasePage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-purchase',
        template: _raw_loader_purchase_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_purchase_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _PurchasePage);
      /***/
    },

    /***/
    73481:
    /*!*********************************************!*\
      !*** ./src/app/purchase/purchase.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwdXJjaGFzZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    73765:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/purchase/purchase.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Purchase</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor= \"let pur of purchaseList\">\n      <ion-label>{{pur.poNumber}}</ion-label>\n      <ion-label>{{pur.purchaseDate}}</ion-label>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewPurchase()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_purchase_purchase_module_ts-es5.js.map