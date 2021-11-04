(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_client_client_module_ts"], {
    /***/
    36993:
    /*!*************************************************!*\
      !*** ./src/app/client/client-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClientPageRoutingModule": function ClientPageRoutingModule() {
          return (
            /* binding */
            _ClientPageRoutingModule
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


      var _client_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./client.page */
      42423);

      var routes = [{
        path: '',
        component: _client_page__WEBPACK_IMPORTED_MODULE_0__.ClientPage
      }];

      var _ClientPageRoutingModule = function ClientPageRoutingModule() {
        _classCallCheck(this, ClientPageRoutingModule);
      };

      _ClientPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ClientPageRoutingModule);
      /***/
    },

    /***/
    27808:
    /*!*****************************************!*\
      !*** ./src/app/client/client.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClientPageModule": function ClientPageModule() {
          return (
            /* binding */
            _ClientPageModule
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


      var _client_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./client-routing.module */
      36993);
      /* harmony import */


      var _client_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./client.page */
      42423);

      var _ClientPageModule = function ClientPageModule() {
        _classCallCheck(this, ClientPageModule);
      };

      _ClientPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _client_routing_module__WEBPACK_IMPORTED_MODULE_0__.ClientPageRoutingModule],
        declarations: [_client_page__WEBPACK_IMPORTED_MODULE_1__.ClientPage]
      })], _ClientPageModule);
      /***/
    },

    /***/
    42423:
    /*!***************************************!*\
      !*** ./src/app/client/client.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ClientPage": function ClientPage() {
          return (
            /* binding */
            _ClientPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_client_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./client.page.html */
      24383);
      /* harmony import */


      var _client_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./client.page.scss */
      22931);
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

      var _ClientPage = /*#__PURE__*/function () {
        function ClientPage(navCtrl, dbService, tostService) {
          _classCallCheck(this, ClientPage);

          this.navCtrl = navCtrl;
          this.dbService = dbService;
          this.tostService = tostService;
        }

        _createClass(ClientPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            console.log("init called");
            this.customers = [];
          }
        }, {
          key: "addNewClient",
          value: function addNewClient() {
            this.navCtrl.navigateRoot('newclient');
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.dbService.getAllCustomers().then(function (data) {
              _this.customers = data;
            })["catch"](function (reason) {
              console.log(reason);

              _this.tostService.presentToast("Failed to fetch the customers");
            });
          }
        }, {
          key: "getSelectedCustomer",
          value: function getSelectedCustomer(name) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", this.customers.find(function (cus) {
                        return cus.name == name;
                      }));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "populateCustomerItems",
          value: function populateCustomerItems(name) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.getSelectedCustomer(name);

                    case 2:
                      this.customer = _context2.sent;
                      _context2.next = 5;
                      return this.dbService.getAllInventories();

                    case 5:
                      this.inventoryList = _context2.sent;

                      if (this.customer.itemList == null || this.customer.itemList == undefined) {
                        this.customer.itemList = new Array();
                      }

                      _context2.next = 9;
                      return this.setItemsToCustomer();

                    case 9:
                      this.customer = _context2.sent;
                      return _context2.abrupt("return", this.customer);

                    case 11:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "setItemsToCustomer",
          value: function setItemsToCustomer() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this2 = this;

              var _iterator, _step, _loop, index;

              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _iterator = _createForOfIteratorHelper(this.inventoryList);

                      try {
                        _loop = function _loop() {
                          var inv = _step.value;

                          if (_this2.customer.itemList.find(function (it) {
                            return it.id == inv.id;
                          }) == null || _this2.customer.itemList.find(function (it) {
                            return it.id == inv.id;
                          }) == null) {
                            _this2.customer.itemList.push(inv);
                          } else {
                            index = _this2.customer.itemList.findIndex(function (i) {
                              return i.id == inv.id;
                            });
                            _this2.customer.itemList[index].name = inv.name;
                            _this2.customer.itemList[index].description = inv.description;
                            _this2.customer.itemList[index].purchasePrice = inv.purchasePrice;
                          }
                        };

                        for (_iterator.s(); !(_step = _iterator.n()).done;) {
                          _loop();
                        }
                      } catch (err) {
                        _iterator.e(err);
                      } finally {
                        _iterator.f();
                      }

                      return _context3.abrupt("return", this.customer);

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "editCustomer",
          value: function editCustomer(name) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var navigationExtras;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.populateCustomerItems(name);

                    case 2:
                      this.customer = _context4.sent;
                      navigationExtras = {
                        queryParams: {
                          customer: this.customer
                        }
                      };
                      console.log("selected customer" + this.customer);
                      this.navCtrl.navigateRoot('editclient', navigationExtras);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }]);

        return ClientPage;
      }();

      _ClientPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }, {
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__.ToastserviceService
        }];
      };

      _ClientPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-client',
        template: _raw_loader_client_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_client_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ClientPage);
      /***/
    },

    /***/
    22931:
    /*!*****************************************!*\
      !*** ./src/app/client/client.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    24383:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Customer</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor= \"let cus of customers\">\n      <ion-label>{{cus.name}}</ion-label>\n      <ion-button color=\"secondary\" (click)=\"editCustomer(cus.name)\">Edit</ion-button>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewClient()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_client_client_module_ts-es5.js.map