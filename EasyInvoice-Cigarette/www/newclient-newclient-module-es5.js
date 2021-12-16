(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newclient-newclient-module"], {
    /***/
    "E+qp":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newclient/newclient.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function EQp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainmenu\"> \n\n      </ion-menu-button>\n    </ion-buttons> \n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"home\" (click)=\"showClient()\"> </ion-back-button>\n      \n    </ion-buttons>\n    <ion-title>New Customer</ion-title>\n  </ion-toolbar>\n  \n</ion-header>\n<ion-content>\n  <ion-card  >\n    <ion-card-header (click)=\"expandItem('PERSONAL')\">\n      <ion-card-title>Personal Details</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable expandHeight=\"240px\" [expanded]=\"personalDetails\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n                <ion-item>\n                  <ion-label position=\"floating\">Customer Code</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.code\" required></ion-input>\n                </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Name</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.name\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">اسم</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"customer.nameInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n            \n            \n          </ion-row>\n          \n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Contact Name</ion-label>\n                <ion-input name=\"contactpersonname\" type=\"text\" [(ngModel)]=\"customer.contactPersonName\" required></ion-input>\n              </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">اسم جهة الاتصال</ion-label>\n                <ion-input name=\"contactpersonname\" type=\"text\" [(ngModel)]=\"customer.contactPersonNameInArabic\" required></ion-input>\n              </ion-item>\n            </ion-col>\n          </ion-row>\n          </ion-grid>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card  >\n    <ion-card-header (click)=\"expandItem('ADDRESS')\">\n      <ion-card-title>Address</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable expandHeight=\"440px\" [expanded]=\"address\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"12\">\n                <ion-item>\n                  <ion-label position=\"floating\">Building No</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.buildingNumber\" required></ion-input>\n                </ion-item>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Street</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.street\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">شارع</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"customer.streetInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">City</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.city\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">مدينة</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"customer.cityInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">District</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.district\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">يصرف</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"customer.districtInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Country</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.country\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">دولة</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"customer.countryInArabic\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">PO Box</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.pobox\" required></ion-input>\n              </ion-item>\n              </ion-col>\n              <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Postal Code</ion-label>\n                <ion-input name=\"namearabic\" type=\"text\" [(ngModel)]=\"customer.postalCode\" required></ion-input>\n              </ion-item> \n             </ion-col>\n          </ion-row>\n          \n          </ion-grid>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card  >\n    <ion-card-header (click)=\"expandItem('CONTACT')\">\n      <ion-card-title>Contact</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable expandHeight=\"240px\" [expanded]=\"contactDetails\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\">Phone No</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.phoneNumber\" required></ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\">Mobile</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.mobile\" required></ion-input>\n              </ion-item>\n          </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"12\">\n              <ion-item >\n                <ion-label position=\"floating\">Email</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.email\" required></ion-input>\n              </ion-item>\n              </ion-col>   \n          </ion-row>\n          \n          </ion-grid>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card  >\n    <ion-card-header (click)=\"expandItem('PAYMENT')\">\n      <ion-card-title>Payment</ion-card-title>\n    </ion-card-header>\n    <ion-card-content>\n      <app-expandable expandHeight=\"240px\" [expanded]=\"payment\">\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label position=\"floating\">VAT No</ion-label>\n                  <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.vatNumber\" required></ion-input>\n                </ion-item>\n            </ion-col>\n\n            <ion-col size=\"6\">\n              <ion-item>\n                <ion-label position=\"floating\">CR No</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.crNumber\" required></ion-input>\n              </ion-item>\n          </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"6\">\n              <ion-item >\n                <ion-label position=\"floating\">Credit Limit</ion-label>\n                <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"customer.creditLimit\" required></ion-input>\n              </ion-item>\n              </ion-col>   \n              <ion-col size=\"6\">\n                <ion-item >\n                  <ion-label position=\"floating\">Balance</ion-label>\n                  <ion-input name=\"name\" type=\"number\" [(ngModel)]=\"customer.balance\" required></ion-input>\n                </ion-item>\n                </ion-col>   \n          </ion-row>\n          \n          </ion-grid>\n      </app-expandable>\n    </ion-card-content>\n  </ion-card>\n\n\n  \n<ion-row style=\"float:right\">\n  <ion-col >\n  <ion-button  color=\"primary\" (click)=\"addNewClient()\">\n    <ion-icon name=\"checkmark\"></ion-icon>\n   \n    \n  </ion-button>\n</ion-col>\n</ion-row>\n\n</ion-content>\n<ion-footer>\n  \n    \n    \n\n\n\n</ion-footer>";
      /***/
    },

    /***/
    "F+5T":
    /*!***********************************************!*\
      !*** ./src/app/newclient/newclient.module.ts ***!
      \***********************************************/

    /*! exports provided: NewclientPageModule */

    /***/
    function F5T(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewclientPageModule", function () {
        return NewclientPageModule;
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


      var _newclient_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./newclient-routing.module */
      "vN+5");
      /* harmony import */


      var _newclient_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./newclient.page */
      "nFpC");
      /* harmony import */


      var _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/expandable/expandable.component */
      "Dq3m");

      var NewclientPageModule = function NewclientPageModule() {
        _classCallCheck(this, NewclientPageModule);
      };

      NewclientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _newclient_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewclientPageRoutingModule"]],
        declarations: [_newclient_page__WEBPACK_IMPORTED_MODULE_6__["NewclientPage"], _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_7__["ExpandableComponent"]]
      })], NewclientPageModule);
      /***/
    },

    /***/
    "nFpC":
    /*!*********************************************!*\
      !*** ./src/app/newclient/newclient.page.ts ***!
      \*********************************************/

    /*! exports provided: NewclientPage */

    /***/
    function nFpC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewclientPage", function () {
        return NewclientPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_newclient_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./newclient.page.html */
      "E+qp");
      /* harmony import */


      var _newclient_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./newclient.page.scss */
      "nLWk");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../services/db.service */
      "ajt+");
      /* harmony import */


      var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/toastservice.service */
      "Gb+d");

      var NewclientPage = /*#__PURE__*/function () {
        function NewclientPage(dbService, tostService, navCtrl) {
          _classCallCheck(this, NewclientPage);

          this.dbService = dbService;
          this.tostService = tostService;
          this.navCtrl = navCtrl;
        }

        _createClass(NewclientPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.resetCustomer(); //this.setCustomerCode();
          }
        }, {
          key: "setCustomerCode",
          value: function setCustomerCode() {
            var _this = this;

            this.dbService.incrementCustomerCode().then(function (data) {
              _this.dbService.getCustomerCode().then(function (data) {
                if (data == null || data == undefined) {
                  data = 1;
                }

                _this.customer.code = _this.dbService.codeConstant + _this.dbService.customerCodeConstant + data;
              });
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
            this.setCustomerCode();
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
              balance: 0
            };
          }
        }, {
          key: "addNewClient",
          value: function addNewClient() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.customer.itemList = this.inventoryList;
                      this.dbService.createCustomer(this.customer).then(function (data) {
                        _this3.updateInventoryToCustomers();

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
          key: "updateInventoryToCustomers",
          value: function updateInventoryToCustomers() {
            var _this4 = this;

            var invList;
            this.dbService.getAllInventories().then(function (resp) {
              invList = resp;

              _this4.dbService.getAllCustomers().then(function (data) {
                var cusList = data;

                var _iterator = _createForOfIteratorHelper(data),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var cus = _step.value;
                    cus.itemList = invList;

                    _this4.dbService.UpdateCustomer(cus);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
            });
          }
        }, {
          key: "showClient",
          value: function showClient() {
            this.navCtrl.navigateRoot('client');
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

      NewclientPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_5__["DbService"]
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__["ToastserviceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      NewclientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-newclient',
        template: _raw_loader_newclient_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_newclient_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NewclientPage);
      /***/
    },

    /***/
    "nLWk":
    /*!***********************************************!*\
      !*** ./src/app/newclient/newclient.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function nLWk(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fullwidthinput {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25ld2NsaWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0FBQ0oiLCJmaWxlIjoibmV3Y2xpZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsd2lkdGhpbnB1dHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbiJdfQ== */";
      /***/
    },

    /***/
    "vN+5":
    /*!*******************************************************!*\
      !*** ./src/app/newclient/newclient-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: NewclientPageRoutingModule */

    /***/
    function vN5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewclientPageRoutingModule", function () {
        return NewclientPageRoutingModule;
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


      var _newclient_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./newclient.page */
      "nFpC");

      var routes = [{
        path: '',
        component: _newclient_page__WEBPACK_IMPORTED_MODULE_3__["NewclientPage"]
      }];

      var NewclientPageRoutingModule = function NewclientPageRoutingModule() {
        _classCallCheck(this, NewclientPageRoutingModule);
      };

      NewclientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewclientPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=newclient-newclient-module-es5.js.map