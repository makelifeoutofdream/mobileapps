(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_newclient_newclient_module_ts"], {
    /***/
    57067:
    /*!*******************************************************!*\
      !*** ./src/app/newclient/newclient-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewclientPageRoutingModule": function NewclientPageRoutingModule() {
          return (
            /* binding */
            _NewclientPageRoutingModule
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


      var _newclient_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newclient.page */
      98785);

      var routes = [{
        path: '',
        component: _newclient_page__WEBPACK_IMPORTED_MODULE_0__.NewclientPage
      }];

      var _NewclientPageRoutingModule = function NewclientPageRoutingModule() {
        _classCallCheck(this, NewclientPageRoutingModule);
      };

      _NewclientPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NewclientPageRoutingModule);
      /***/
    },

    /***/
    9490:
    /*!***********************************************!*\
      !*** ./src/app/newclient/newclient.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewclientPageModule": function NewclientPageModule() {
          return (
            /* binding */
            _NewclientPageModule
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


      var _newclient_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newclient-routing.module */
      57067);
      /* harmony import */


      var _newclient_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./newclient.page */
      98785);

      var _NewclientPageModule = function NewclientPageModule() {
        _classCallCheck(this, NewclientPageModule);
      };

      _NewclientPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _newclient_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewclientPageRoutingModule],
        declarations: [_newclient_page__WEBPACK_IMPORTED_MODULE_1__.NewclientPage]
      })], _NewclientPageModule);
      /***/
    },

    /***/
    98785:
    /*!*********************************************!*\
      !*** ./src/app/newclient/newclient.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewclientPage": function NewclientPage() {
          return (
            /* binding */
            _NewclientPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_newclient_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./newclient.page.html */
      63122);
      /* harmony import */


      var _newclient_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./newclient.page.scss */
      8408);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
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

      var _NewclientPage = /*#__PURE__*/function () {
        function NewclientPage(dbService, tostService, navCtrl) {
          _classCallCheck(this, NewclientPage);

          this.dbService = dbService;
          this.tostService = tostService;
          this.navCtrl = navCtrl;
        }

        _createClass(NewclientPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.customer = {
              id: null,
              name: "",
              location: "",
              contactPersonName: "",
              vat: null,
              itemList: null
            };
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.dbService.getAllInventories().then(function (data) {
              _this.inventoryList = data;
            });
          }
        }, {
          key: "addNewClient",
          value: function addNewClient() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this2 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.customer.itemList = this.inventoryList;
                      this.dbService.createCustomer(this.customer).then(function (data) {
                        _this2.tostService.presentToast("Customer added successfully");
                      })["catch"](function (reason) {
                        console.log(reason);
                      })["finally"](function () {
                        _this2.customer = {
                          id: null,
                          name: "",
                          location: "",
                          contactPersonName: "",
                          vat: null,
                          itemList: null
                        };

                        _this2.navCtrl.navigateRoot('client');
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return NewclientPage;
      }();

      _NewclientPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__.ToastserviceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _NewclientPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-newclient',
        template: _raw_loader_newclient_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_newclient_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NewclientPage);
      /***/
    },

    /***/
    8408:
    /*!***********************************************!*\
      !*** ./src/app/newclient/newclient.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fullwidthinput {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ld2NsaWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoibmV3Y2xpZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsd2lkdGhpbnB1dHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    63122:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newclient/newclient.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>New Customer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.name\" required></ion-input>\n    </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Location</ion-label>\n      <ion-input name=\"location\" type=\"text\" [(ngModel)]=\"customer.location\" required></ion-input>\n    </ion-item> \n   </ion-col>\n  \n  \n</ion-row>\n\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-item >\n      <ion-label position=\"floating\">Contact Person Name</ion-label>\n      <ion-input name=\"contactpersonname\" type=\"text\" [(ngModel)]=\"customer.contactPersonName\" required></ion-input>\n    </ion-item>\n  </ion-col>\n</ion-row>\n\n<ion-row>\n  <ion-col size=\"12\">\n    <ion-item >\n      <ion-label position=\"floating\">Vat</ion-label>\n      <ion-input name=\"val\" type=\"text\" [(ngModel)]=\"customer.vat\" required></ion-input>\n    </ion-item>\n    </ion-col>\n    \n</ion-row>\n\n</ion-grid>\n<ion-row style=\"float:right\">\n  <ion-col >\n  <ion-button  color=\"primary\" (click)=\"addNewClient()\">\n    <ion-icon name=\"checkmark\"></ion-icon>\n   \n    \n  </ion-button>\n</ion-col>\n</ion-row>\n\n</ion-content>\n<ion-footer>\n  \n    \n    \n\n\n\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_newclient_newclient_module_ts-es5.js.map