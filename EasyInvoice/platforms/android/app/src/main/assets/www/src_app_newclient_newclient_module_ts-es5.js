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


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
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
      /* harmony import */


      var _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../components/expandable/expandable.component */
      38932);

      var _NewclientPageModule = function NewclientPageModule() {
        _classCallCheck(this, NewclientPageModule);
      };

      _NewclientPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _newclient_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewclientPageRoutingModule],
        declarations: [_newclient_page__WEBPACK_IMPORTED_MODULE_1__.NewclientPage, _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_2__.ExpandableComponent]
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
            var _this = this;

            this.resetCustomer();
            this.dbService.getCustomerCode().then(function (data) {
              _this.customer.code = data;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.personalDetails = false;
            this.address = false;
            ;
            this.contactDetails = false;
            this.payment = false;
            this.dbService.getCustomerCode().then(function (data) {
              _this2.customer.code = data;
            });
            this.dbService.getAllInventories().then(function (data) {
              _this2.inventoryList = data;
            });
          }
        }, {
          key: "resetCustomer",
          value: function resetCustomer() {
            this.customer = {
              id: null,
              code: null,
              name: "",
              itemList: null,
              nameInArabic: "",
              contactPersonName: "",
              contactPersonNameInArabic: "",
              buildingNumber: "",
              street: "",
              streetInArabic: "",
              city: "",
              cityInArabic: "",
              district: "",
              districtInArabic: "",
              country: "",
              countryInArabic: "",
              pobox: "",
              postalCode: "",
              phoneNumber: "",
              mobile: "",
              email: "",
              vatNumber: "",
              crNumber: "",
              creditLimit: null,
              balance: null
            };
          }
        }, {
          key: "addNewClient",
          value: function addNewClient() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.customer.itemList = this.inventoryList;
                      this.dbService.createCustomer(this.customer).then(function (data) {
                        _this3.tostService.presentToast("Customer added successfully");
                      })["catch"](function (reason) {
                        console.log(reason);
                      })["finally"](function () {
                        _this3.resetCustomer();

                        _this3.navCtrl.navigateRoot('client');
                      });

                    case 2:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "expandItem",
          value: function expandItem(item) {
            if ('PERSONAL' == item) {
              this.personalDetails = !this.personalDetails;
            } else if ('ADDRESS' == item) {
              this.address = !this.address;
            } else if ('CONTACT' == item) {
              this.contactDetails = !this.contactDetails;
            } else if ('PAYMENT' == item) {
              this.payment = !this.payment;
            }
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>New Customer</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-card  >\n    <ion-card-header (click)=\"expandItem('PERSONAL')\">\n      <ion-card-title>Personal Details</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable expandHeight=\"240px\" [expanded]=\"personalDetails\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n                <ion-item>\n                  <ion-label position=\"floating\">Customer Code</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.code\" required></ion-input>\n                </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Name</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.name\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">اسم</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"customer.nameInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n            \n            \n          </ion-row>\n          \n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Contact Name</ion-label>\n                <ion-input name=\"contactpersonname\" type=\"text\" [(ngModel)]=\"customer.contactPersonName\" required></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">اسم جهة الاتصال</ion-label>\n                <ion-input name=\"contactpersonname\" type=\"text\" [(ngModel)]=\"customer.contactPersonNameInArabic\" required></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          </ion-grid>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card  >\n    <ion-card-header (click)=\"expandItem('ADDRESS')\">\n      <ion-card-title>Address</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable expandHeight=\"440px\" [expanded]=\"address\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n                <ion-item>\n                  <ion-label position=\"floating\">Building No</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.buildingNumber\" required></ion-input>\n                </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Street</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.street\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">شارع</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"customer.streetInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">City</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.city\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">مدينة</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"customer.cityInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">District</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.district\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">يصرف</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"customer.districtInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Country</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.country\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">دولة</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"customer.countryInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">PO Box</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.pobox\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Postal Code</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"customer.postalCode\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          \n          </ion-grid>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card  >\n    <ion-card-header (click)=\"expandItem('CONTACT')\">\n      <ion-card-title>Contact</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable expandHeight=\"240px\" [expanded]=\"contactDetails\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\">Phone No</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.phoneNumber\" required></ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\">Mobile</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.mobile\" required></ion-input>\n              </ion-item>\n          </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item >\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.email\" required></ion-input>\n              </ion-item>\n              </ion-col>   \n          </ion-row>\n          \n          </ion-grid>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card  >\n    <ion-card-header (click)=\"expandItem('PAYMENT')\">\n      <ion-card-title>Payment</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable expandHeight=\"240px\" [expanded]=\"payment\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\">VAT No</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.vatNumber\" required></ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\">CR No</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.crNumber\" required></ion-input>\n              </ion-item>\n          </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Credit Limit</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.creditLimit\" required></ion-input>\n              </ion-item>\n              </ion-col>   \n              <ion-col size=\"6\">\n                <ion-item >\n                  <ion-label position=\"floating\">Balance</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.balance\" required></ion-input>\n                </ion-item>\n                </ion-col>   \n          </ion-row>\n          \n          </ion-grid>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n\n\n  \n<ion-row style=\"float:right\">\n  <ion-col >\n  <ion-button  color=\"primary\" (click)=\"addNewClient()\">\n    <ion-icon name=\"checkmark\"></ion-icon>\n   \n    \n  </ion-button>\n</ion-col>\n</ion-row>\n\n</ion-content>\n<ion-footer>\n  \n    \n    \n\n\n\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_newclient_newclient_module_ts-es5.js.map