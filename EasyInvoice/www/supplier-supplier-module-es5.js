(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["supplier-supplier-module"], {
    /***/
    "DiHl":
    /*!*******************************************!*\
      !*** ./src/app/supplier/supplier.page.ts ***!
      \*******************************************/

    /*! exports provided: SupplierPage */

    /***/
    function DiHl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierPage", function () {
        return SupplierPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_supplier_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./supplier.page.html */
      "urKi");
      /* harmony import */


      var _supplier_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./supplier.page.scss */
      "JW8l");
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

      var SupplierPage = /*#__PURE__*/function () {
        function SupplierPage(dbService, toastService, navCtrl) {
          _classCallCheck(this, SupplierPage);

          this.dbService = dbService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
        }

        _createClass(SupplierPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.resetSupplier();
            this.suppliers = [];
          }
        }, {
          key: "resetSupplier",
          value: function resetSupplier() {
            this.supplier = {
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
              mobileNumber: "",
              email: "",
              vatNumber: "",
              crNumber: "",
              balanceAmount: null
            };
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.personalDetails = false;
            this.address = false;
            ;
            this.contactDetails = false;
            this.payment = false;
            this.dbService.getSupplierCode().then(function (data) {
              _this.supplier.code = data;
            });
            this.dbService.getAllSuppliers().then(function (data) {
              _this.suppliers = data;
            })["catch"](function (reason) {
              console.log(reason);

              _this.toastService.presentToast("Failed to fetch the suppliers");
            });
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
        }, {
          key: "addNewSupplier",
          value: function addNewSupplier() {
            this.navCtrl.navigateRoot('newsupplier');
          }
        }, {
          key: "editSupplier",
          value: function editSupplier(id) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var navigationExtras;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.supplier = this.suppliers.find(function (sup) {
                        return sup.id == id;
                      });
                      navigationExtras = {
                        queryParams: {
                          supplier: this.supplier
                        }
                      };
                      console.log("selected supplier" + this.supplier);
                      this.navCtrl.navigateRoot('editsupplier', navigationExtras);

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return SupplierPage;
      }();

      SupplierPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_5__["DbService"]
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__["ToastserviceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }];
      };

      SupplierPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-supplier',
        template: _raw_loader_supplier_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_supplier_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SupplierPage);
      /***/
    },

    /***/
    "JW8l":
    /*!*********************************************!*\
      !*** ./src/app/supplier/supplier.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function JW8l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGllci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    "LLgv":
    /*!*********************************************!*\
      !*** ./src/app/supplier/supplier.module.ts ***!
      \*********************************************/

    /*! exports provided: SupplierPageModule */

    /***/
    function LLgv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierPageModule", function () {
        return SupplierPageModule;
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


      var _supplier_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./supplier-routing.module */
      "mPow");
      /* harmony import */


      var _supplier_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./supplier.page */
      "DiHl");
      /* harmony import */


      var _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../components/expandable/expandable.component */
      "Dq3m");

      var SupplierPageModule = function SupplierPageModule() {
        _classCallCheck(this, SupplierPageModule);
      };

      SupplierPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _supplier_routing_module__WEBPACK_IMPORTED_MODULE_5__["SupplierPageRoutingModule"]],
        declarations: [_supplier_page__WEBPACK_IMPORTED_MODULE_6__["SupplierPage"], _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_7__["ExpandableComponent"]]
      })], SupplierPageModule);
      /***/
    },

    /***/
    "mPow":
    /*!*****************************************************!*\
      !*** ./src/app/supplier/supplier-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: SupplierPageRoutingModule */

    /***/
    function mPow(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SupplierPageRoutingModule", function () {
        return SupplierPageRoutingModule;
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


      var _supplier_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./supplier.page */
      "DiHl");

      var routes = [{
        path: '',
        component: _supplier_page__WEBPACK_IMPORTED_MODULE_3__["SupplierPage"]
      }];

      var SupplierPageRoutingModule = function SupplierPageRoutingModule() {
        _classCallCheck(this, SupplierPageRoutingModule);
      };

      SupplierPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SupplierPageRoutingModule);
      /***/
    },

    /***/
    "urKi":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supplier/supplier.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function urKi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Supplier</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor= \"let sup of suppliers\">\n      <ion-label>{{sup.name}}</ion-label>\n      <ion-button color=\"secondary\" (click)=\"editSupplier(sup.id)\">Edit</ion-button>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewSupplier()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=supplier-supplier-module-es5.js.map