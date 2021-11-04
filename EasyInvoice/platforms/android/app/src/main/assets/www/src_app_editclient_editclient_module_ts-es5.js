(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_editclient_editclient_module_ts"], {
    /***/
    61060:
    /*!*********************************************************!*\
      !*** ./src/app/editclient/editclient-routing.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditclientPageRoutingModule": function EditclientPageRoutingModule() {
          return (
            /* binding */
            _EditclientPageRoutingModule
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


      var _editclient_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editclient.page */
      25288);

      var routes = [{
        path: '',
        component: _editclient_page__WEBPACK_IMPORTED_MODULE_0__.EditclientPage
      }];

      var _EditclientPageRoutingModule = function EditclientPageRoutingModule() {
        _classCallCheck(this, EditclientPageRoutingModule);
      };

      _EditclientPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _EditclientPageRoutingModule);
      /***/
    },

    /***/
    99024:
    /*!*************************************************!*\
      !*** ./src/app/editclient/editclient.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditclientPageModule": function EditclientPageModule() {
          return (
            /* binding */
            _EditclientPageModule
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


      var _editclient_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./editclient-routing.module */
      61060);
      /* harmony import */


      var _editclient_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editclient.page */
      25288);

      var _EditclientPageModule = function EditclientPageModule() {
        _classCallCheck(this, EditclientPageModule);
      };

      _EditclientPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _editclient_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditclientPageRoutingModule],
        declarations: [_editclient_page__WEBPACK_IMPORTED_MODULE_1__.EditclientPage]
      })], _EditclientPageModule);
      /***/
    },

    /***/
    25288:
    /*!***********************************************!*\
      !*** ./src/app/editclient/editclient.page.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EditclientPage": function EditclientPage() {
          return (
            /* binding */
            _EditclientPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_editclient_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./editclient.page.html */
      75423);
      /* harmony import */


      var _editclient_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./editclient.page.scss */
      85748);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../services/db.service */
      73773);
      /* harmony import */


      var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/toastservice.service */
      48236);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var _EditclientPage = /*#__PURE__*/function () {
        function EditclientPage(dbService, toastService, navCtrl, route) {
          _classCallCheck(this, EditclientPage);

          this.dbService = dbService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
          this.route = route;
        }

        _createClass(EditclientPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.customer = {
              id: null,
              name: "",
              location: "",
              contactPersonName: "",
              vat: null,
              itemList: []
            };
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.route.queryParams.subscribe(function (params) {
              _this.customer = params['customer'];
            });
            console.log('selected customer' + this.customer.name);
          }
        }, {
          key: "updateClient",
          value: function updateClient() {
            var _this2 = this;

            this.dbService.UpdateCustomer(this.customer).then(function (res) {
              _this2.toastService.presentToast("Customer updated successfully");

              _this2.navCtrl.navigateRoot('client');
            })["catch"](function (reason) {
              _this2.toastService.presentToast("Customer update failed");

              console.log(reason);
            });
          }
        }]);

        return EditclientPage;
      }();

      _EditclientPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__.ToastserviceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.NavController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
        }];
      };

      _EditclientPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-editclient',
        template: _raw_loader_editclient_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_editclient_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _EditclientPage);
      /***/
    },

    /***/
    85748:
    /*!*************************************************!*\
      !*** ./src/app/editclient/editclient.page.scss ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0Y2xpZW50LnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    75423:
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editclient/editclient.page.html ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Edit Customer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item >\n          <ion-label position=\"floating\">Name</ion-label>\n          <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.name\" required></ion-input>\n        </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n        <ion-item >\n          <ion-label position=\"floating\">Location</ion-label>\n          <ion-input name=\"location\" type=\"text\" [(ngModel)]=\"customer.location\" required></ion-input>\n        </ion-item> \n       </ion-col>\n      \n      \n    </ion-row>\n    \n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item >\n          <ion-label position=\"floating\">Contact Person Name</ion-label>\n          <ion-input name=\"contactpersonname\" type=\"text\" [(ngModel)]=\"customer.contactPersonName\" required></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    \n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item >\n          <ion-label position=\"floating\">Vat Number</ion-label>\n          <ion-input name=\"val\" type=\"text\" [(ngModel)]=\"customer.vat\" required></ion-input>\n        </ion-item>\n        </ion-col>\n        \n    </ion-row>\n  </ion-grid>\n  <ion-item-divider></ion-item-divider>\n  <table border=\"5\" style=\"width: 94%;margin-left: 2%;margin-right: 5%;margin-top: 2%;\">\n    <tr>\n      <td>\n        Item\n      </td>\n      <td>\n        Price\n      </td>\n    </tr>\n    <tr *ngFor= \"let item of customer.itemList\">\n      <td><ion-input disabled [(ngModel)]=\"item.name\" ></ion-input></td>\n      <td><ion-input [(ngModel)]=\"item.unitPrice\" ></ion-input></td>\n    </tr>\n  </table>\n  \n  <ion-row style=\"float:right\">\n    <ion-col>\n      <ion-button color=\"primary\" (click)=\"updateClient()\">\n        <ion-icon name=\"checkmark\"></ion-icon>\n      </ion-button>\n    </ion-col>\n  </ion-row>\n</ion-content>\n<ion-footer>\n  \n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_editclient_editclient_module_ts-es5.js.map