(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module"], {
    /***/
    "9imi":
    /*!***********************************************!*\
      !*** ./src/app/inventory/inventory.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function imi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRvcnkucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "I142":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function I142(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Inventory</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"background-color: darkblue;\">\n  <ion-list>\n    <ion-list-header>\n      <ion-label>Name</ion-label>\n      <ion-label>Quantity</ion-label>\n      <ion-label>Unit Price</ion-label>\n      <ion-label>Purchase Price</ion-label>\n      <ion-label>Delete</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor= \"let inv of inventories\" >\n      <ion-label (click)=\"editInventory(inv)\" >{{inv.name}}</ion-label>\n      <ion-label (click)=\"editInventory(inv)\">{{inv.quantity}}</ion-label>\n      <ion-label (click)=\"editInventory(inv)\">{{inv.unitPrice}}</ion-label>\n      <ion-label (click)=\"editInventory(inv)\">{{inv.purchasePrice}}</ion-label>\n      <ion-button (click)=\"presentDeleteAlertConfirm(inv)\">\n        <ion-icon name=\"trash-bin\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewInventory()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>";
      /***/
    },

    /***/
    "T4Df":
    /*!*********************************************!*\
      !*** ./src/app/inventory/inventory.page.ts ***!
      \*********************************************/

    /*! exports provided: InventoryPage */

    /***/
    function T4Df(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryPage", function () {
        return InventoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inventory.page.html */
      "I142");
      /* harmony import */


      var _inventory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inventory.page.scss */
      "9imi");
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

      var InventoryPage = /*#__PURE__*/function () {
        function InventoryPage(dbService, toastService, navCtrl, alertController) {
          _classCallCheck(this, InventoryPage);

          this.dbService = dbService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
          this.alertController = alertController;
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
        }, {
          key: "deleteInventory",
          value: function deleteInventory(inv) {
            var _this2 = this;

            this.dbService.deleteInventory(inv).then(function (data) {
              _this2.toastService.presentToast('Inventory removed successfully');

              _this2.getAllInventories().then(function (data) {
                _this2.updateInventoryToCustomers();
              });
            });
          }
        }, {
          key: "updateInventoryToCustomers",
          value: function updateInventoryToCustomers() {
            var _this3 = this;

            this.dbService.getAllCustomers().then(function (data) {
              var cusList = data;

              var _iterator = _createForOfIteratorHelper(data),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var cus = _step.value;
                  cus.itemList = _this3.inventories;

                  _this3.dbService.UpdateCustomer(cus);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          }
        }, {
          key: "presentDeleteAlertConfirm",
          value: function presentDeleteAlertConfirm(inv) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        // cssClass: 'my-custom-class',
                        header: 'Confirm!',
                        message: '<strong>Are you sure to delete this inventory?</strong>!!!',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this4.deleteInventory(inv);
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }]);

        return InventoryPage;
      }();

      InventoryPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_5__["DbService"]
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__["ToastserviceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }];
      };

      InventoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inventory',
        template: _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InventoryPage);
      /***/
    },

    /***/
    "UYnB":
    /*!*******************************************************!*\
      !*** ./src/app/inventory/inventory-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: InventoryPageRoutingModule */

    /***/
    function UYnB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryPageRoutingModule", function () {
        return InventoryPageRoutingModule;
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


      var _inventory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inventory.page */
      "T4Df");

      var routes = [{
        path: '',
        component: _inventory_page__WEBPACK_IMPORTED_MODULE_3__["InventoryPage"]
      }];

      var InventoryPageRoutingModule = function InventoryPageRoutingModule() {
        _classCallCheck(this, InventoryPageRoutingModule);
      };

      InventoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InventoryPageRoutingModule);
      /***/
    },

    /***/
    "cLqD":
    /*!***********************************************!*\
      !*** ./src/app/inventory/inventory.module.ts ***!
      \***********************************************/

    /*! exports provided: InventoryPageModule */

    /***/
    function cLqD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryPageModule", function () {
        return InventoryPageModule;
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


      var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inventory-routing.module */
      "UYnB");
      /* harmony import */


      var _inventory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inventory.page */
      "T4Df");

      var InventoryPageModule = function InventoryPageModule() {
        _classCallCheck(this, InventoryPageModule);
      };

      InventoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__["InventoryPageRoutingModule"]],
        declarations: [_inventory_page__WEBPACK_IMPORTED_MODULE_6__["InventoryPage"]]
      })], InventoryPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=inventory-inventory-module-es5.js.map