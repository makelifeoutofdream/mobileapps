(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_supplier_supplier_module_ts"], {
    /***/
    88103:
    /*!*****************************************************!*\
      !*** ./src/app/supplier/supplier-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupplierPageRoutingModule": function SupplierPageRoutingModule() {
          return (
            /* binding */
            _SupplierPageRoutingModule
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


      var _supplier_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./supplier.page */
      14944);

      var routes = [{
        path: '',
        component: _supplier_page__WEBPACK_IMPORTED_MODULE_0__.SupplierPage
      }];

      var _SupplierPageRoutingModule = function SupplierPageRoutingModule() {
        _classCallCheck(this, SupplierPageRoutingModule);
      };

      _SupplierPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SupplierPageRoutingModule);
      /***/
    },

    /***/
    53371:
    /*!*********************************************!*\
      !*** ./src/app/supplier/supplier.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupplierPageModule": function SupplierPageModule() {
          return (
            /* binding */
            _SupplierPageModule
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


      var _supplier_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./supplier-routing.module */
      88103);
      /* harmony import */


      var _supplier_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./supplier.page */
      14944);
      /* harmony import */


      var _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../components/expandable/expandable.component */
      38932);

      var _SupplierPageModule = function SupplierPageModule() {
        _classCallCheck(this, SupplierPageModule);
      };

      _SupplierPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _supplier_routing_module__WEBPACK_IMPORTED_MODULE_0__.SupplierPageRoutingModule],
        declarations: [_supplier_page__WEBPACK_IMPORTED_MODULE_1__.SupplierPage, _components_expandable_expandable_component__WEBPACK_IMPORTED_MODULE_2__.ExpandableComponent]
      })], _SupplierPageModule);
      /***/
    },

    /***/
    14944:
    /*!*******************************************!*\
      !*** ./src/app/supplier/supplier.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SupplierPage": function SupplierPage() {
          return (
            /* binding */
            _SupplierPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_supplier_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./supplier.page.html */
      73728);
      /* harmony import */


      var _supplier_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./supplier.page.scss */
      82545);
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

      var _SupplierPage = /*#__PURE__*/function () {
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
          value: function editSupplier(name) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var navigationExtras;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.supplier = this.suppliers.find(function (sup) {
                        return sup.name == name;
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

      _SupplierPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__.ToastserviceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _SupplierPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-supplier',
        template: _raw_loader_supplier_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_supplier_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SupplierPage);
      /***/
    },

    /***/
    82545:
    /*!*********************************************!*\
      !*** ./src/app/supplier/supplier.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdXBwbGllci5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    73728:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/supplier/supplier.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Supplier</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor= \"let sup of suppliers\">\n      <ion-label>{{sup.name}}</ion-label>\n      <ion-button color=\"secondary\" (click)=\"editSupplier(sup.name)\">Edit</ion-button>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewSupplier()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_supplier_supplier_module_ts-es5.js.map