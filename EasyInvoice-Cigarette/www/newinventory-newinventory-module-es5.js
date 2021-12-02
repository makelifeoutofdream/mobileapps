(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newinventory-newinventory-module"], {
    /***/
    "4/6/":
    /*!***************************************************!*\
      !*** ./src/app/newinventory/newinventory.page.ts ***!
      \***************************************************/

    /*! exports provided: NewinventoryPage */

    /***/
    function _(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewinventoryPage", function () {
        return NewinventoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_newinventory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./newinventory.page.html */
      "M0HA");
      /* harmony import */


      var _newinventory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./newinventory.page.scss */
      "BkAu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/db.service */
      "ajt+");
      /* harmony import */


      var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/toastservice.service */
      "Gb+d");

      var NewinventoryPage = /*#__PURE__*/function () {
        function NewinventoryPage(dbService, toastService, navCtrl, route) {
          _classCallCheck(this, NewinventoryPage);

          this.dbService = dbService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
          this.route = route;
        }

        _createClass(NewinventoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.inventory = {
              id: null,
              code: "",
              name: "",
              nameInArabic: "",
              description: "",
              quantity: null,
              unitPrice: null,
              purchasePrice: null
            };
          }
        }, {
          key: "addNewInventory",
          value: function addNewInventory() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.dbService.createOrUpdateInventory(this.inventory).then(function (data) {
                        _this.updateInventoryToCustomers();

                        if (_this.inventory.id == null || _this.inventory.id == undefined) {
                          console.log("Item added successfully");
                        } else {
                          console.log("Item updated successfully");
                        }
                      })["catch"](function (reason) {
                        console.log(reason);
                      })["finally"](function () {
                        _this.inventory = {
                          id: null,
                          code: "",
                          name: "",
                          nameInArabic: "",
                          description: "",
                          quantity: null,
                          unitPrice: null,
                          purchasePrice: null
                        };

                        _this.navCtrl.navigateRoot('inventory');
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
          key: "updateInventoryToCustomers",
          value: function updateInventoryToCustomers() {
            var _this2 = this;

            var invList;
            this.dbService.getAllInventories().then(function (resp) {
              invList = resp;

              _this2.dbService.getAllCustomers().then(function (data) {
                var cusList = data;

                var _iterator = _createForOfIteratorHelper(data),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var cus = _step.value;
                    cus.itemList = invList;

                    _this2.dbService.UpdateCustomer(cus);
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
          key: "showInventory",
          value: function showInventory() {
            this.navCtrl.navigateRoot('inventory');
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            this.route.queryParams.subscribe(function (params) {
              if (params['inventory'] == null || params['inventory'] == undefined) {
                _this3.inventory = {
                  id: null,
                  code: "",
                  name: "",
                  nameInArabic: "",
                  description: "",
                  quantity: null,
                  unitPrice: null,
                  purchasePrice: null
                };

                _this3.dbService.incrementInventoryCode().then(function (data) {
                  _this3.dbService.getInventoryCode().then(function (data) {
                    if (data == null || data == undefined) {
                      data = 1;
                    }

                    _this3.inventory.code = _this3.dbService.codeConstant + _this3.dbService.inventoyCodeConstant + data;
                  });
                });
              } else {
                _this3.inventory = params['inventory'];
              }
            });
            console.log('selected inventory' + this.inventory.name);
          }
        }]);

        return NewinventoryPage;
      }();

      NewinventoryPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      };

      NewinventoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-newinventory',
        template: _raw_loader_newinventory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_newinventory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NewinventoryPage);
      /***/
    },

    /***/
    "AOgB":
    /*!*****************************************************!*\
      !*** ./src/app/newinventory/newinventory.module.ts ***!
      \*****************************************************/

    /*! exports provided: NewinventoryPageModule */

    /***/
    function AOgB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewinventoryPageModule", function () {
        return NewinventoryPageModule;
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


      var _newinventory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./newinventory-routing.module */
      "YSQl");
      /* harmony import */


      var _newinventory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./newinventory.page */
      "4/6/");

      var NewinventoryPageModule = function NewinventoryPageModule() {
        _classCallCheck(this, NewinventoryPageModule);
      };

      NewinventoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _newinventory_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewinventoryPageRoutingModule"]],
        declarations: [_newinventory_page__WEBPACK_IMPORTED_MODULE_6__["NewinventoryPage"]]
      })], NewinventoryPageModule);
      /***/
    },

    /***/
    "BkAu":
    /*!*****************************************************!*\
      !*** ./src/app/newinventory/newinventory.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function BkAu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdpbnZlbnRvcnkucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "M0HA":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newinventory/newinventory.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function M0HA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainmenu\"> \n\n      </ion-menu-button>\n    </ion-buttons> \n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"home\" (click)=\"showInventory()\"> </ion-back-button>\n      \n    </ion-buttons>\n    <ion-title>New Inventory</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item >\n          <ion-label position=\"floating\">Code</ion-label>\n          <ion-input name=\"code\" type=\"text\" [(ngModel)]=\"inventory.code\" required></ion-input>\n        </ion-item>\n        </ion-col>\n      \n    </ion-row>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"inventory.name\" required></ion-input>\n    </ion-item>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-item >\n        <ion-label position=\"floating\">اسم</ion-label>\n        <ion-input name=\"nameinarabic\" type=\"text\" [(ngModel)]=\"inventory.nameInArabic\" required></ion-input>\n      </ion-item>\n      </ion-col>\n    \n</ion-row>\n<ion-row>\n  <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-input name=\"location\" type=\"text\" [(ngModel)]=\"inventory.description\" required></ion-input>\n    </ion-item> \n   </ion-col>\n   <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Quantity</ion-label>\n      <ion-input name=\"name\" type=\"number\" [(ngModel)]=\"inventory.quantity\" required></ion-input>\n    </ion-item>\n    </ion-col>\n</ion-row>\n<ion-row>\n\n   \n    <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Unit Price</ion-label>\n      <ion-input name=\"location\" type=\"number\" [(ngModel)]=\"inventory.unitPrice\" required></ion-input>\n    </ion-item> \n   </ion-col>\n   <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Purchase Price</ion-label>\n      <ion-input name=\"purchasePrice\" type=\"number\" [(ngModel)]=\"inventory.purchasePrice\" required></ion-input>\n    </ion-item> \n   </ion-col>\n\n</ion-row>\n\n</ion-grid>\n<ion-row style=\"float:right\">\n  <ion-col >\n  <ion-button  color=\"primary\" (click)=\"addNewInventory()\">\n    <ion-icon name=\"checkmark\"></ion-icon>\n   \n    \n  </ion-button>\n</ion-col>\n</ion-row>\n\n</ion-content>\n<ion-footer>\n  \n    \n    \n\n\n\n</ion-footer>";
      /***/
    },

    /***/
    "YSQl":
    /*!*************************************************************!*\
      !*** ./src/app/newinventory/newinventory-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: NewinventoryPageRoutingModule */

    /***/
    function YSQl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewinventoryPageRoutingModule", function () {
        return NewinventoryPageRoutingModule;
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


      var _newinventory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./newinventory.page */
      "4/6/");

      var routes = [{
        path: '',
        component: _newinventory_page__WEBPACK_IMPORTED_MODULE_3__["NewinventoryPage"]
      }];

      var NewinventoryPageRoutingModule = function NewinventoryPageRoutingModule() {
        _classCallCheck(this, NewinventoryPageRoutingModule);
      };

      NewinventoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewinventoryPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=newinventory-newinventory-module-es5.js.map