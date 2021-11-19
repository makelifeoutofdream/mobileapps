(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_inventory_inventory_module_ts"], {
    /***/
    46458:
    /*!*******************************************************!*\
      !*** ./src/app/inventory/inventory-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventoryPageRoutingModule": function InventoryPageRoutingModule() {
          return (
            /* binding */
            _InventoryPageRoutingModule
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


      var _inventory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inventory.page */
      53534);

      var routes = [{
        path: '',
        component: _inventory_page__WEBPACK_IMPORTED_MODULE_0__.InventoryPage
      }];

      var _InventoryPageRoutingModule = function InventoryPageRoutingModule() {
        _classCallCheck(this, InventoryPageRoutingModule);
      };

      _InventoryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _InventoryPageRoutingModule);
      /***/
    },

    /***/
    41564:
    /*!***********************************************!*\
      !*** ./src/app/inventory/inventory.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventoryPageModule": function InventoryPageModule() {
          return (
            /* binding */
            _InventoryPageModule
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


      var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./inventory-routing.module */
      46458);
      /* harmony import */


      var _inventory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inventory.page */
      53534);

      var _InventoryPageModule = function InventoryPageModule() {
        _classCallCheck(this, InventoryPageModule);
      };

      _InventoryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _inventory_routing_module__WEBPACK_IMPORTED_MODULE_0__.InventoryPageRoutingModule],
        declarations: [_inventory_page__WEBPACK_IMPORTED_MODULE_1__.InventoryPage]
      })], _InventoryPageModule);
      /***/
    },

    /***/
    53534:
    /*!*********************************************!*\
      !*** ./src/app/inventory/inventory.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "InventoryPage": function InventoryPage() {
          return (
            /* binding */
            _InventoryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./inventory.page.html */
      67761);
      /* harmony import */


      var _inventory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./inventory.page.scss */
      51785);
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

      var _InventoryPage = /*#__PURE__*/function () {
        function InventoryPage(dbService, toastService, navCtrl) {
          _classCallCheck(this, InventoryPage);

          this.dbService = dbService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
        }

        _createClass(InventoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addNewInventory",
          value: function addNewInventory() {
            this.navCtrl.navigateRoot('newinventory');
          }
        }, {
          key: "getAllInventories",
          value: function getAllInventories() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.dbService.getAllInventories().then(function (data) {
                        _this.inventories = data;
                      })["catch"](function (reason) {
                        console.log(reason);
                      });

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getAllInventories();
          }
        }, {
          key: "editInventory",
          value: function editInventory(inv) {
            var navigationExtras = {
              queryParams: {
                inventory: inv
              }
            };
            console.log("selected inventory" + inv);
            this.navCtrl.navigateRoot('newinventory', navigationExtras);
          }
        }]);

        return InventoryPage;
      }();

      _InventoryPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__.ToastserviceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }];
      };

      _InventoryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-inventory',
        template: _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_inventory_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _InventoryPage);
      /***/
    },

    /***/
    51785:
    /*!***********************************************!*\
      !*** ./src/app/inventory/inventory.page.scss ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRvcnkucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    67761:
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.page.html ***!
      \*************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Inventory</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"background-color: darkblue;\">\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Name</ion-label>\n      <ion-label>Quantity</ion-label>\n      <ion-label>Unit Price</ion-label>\n      <ion-label>Purchase Price</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor= \"let inv of inventories\" (click)=\"editInventory(inv)\">\n      <ion-label>{{inv.name}}</ion-label>\n      <ion-label>{{inv.quantity}}</ion-label>\n      <ion-label>{{inv.unitPrice}}</ion-label>\n      <ion-label>{{inv.purchasePrice}}</ion-label>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewInventory()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_inventory_inventory_module_ts-es5.js.map