(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["client-client-module"], {
    /***/
    "PjFm":
    /*!***************************************!*\
      !*** ./src/app/client/client.page.ts ***!
      \***************************************/

    /*! exports provided: ClientPage */

    /***/
    function PjFm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientPage", function () {
        return ClientPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_client_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./client.page.html */
      "RhKR");
      /* harmony import */


      var _client_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./client.page.scss */
      "tSmw");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../data.service */
      "R7Hv");
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/db.service */
      "ajt+");
      /* harmony import */


      var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/toastservice.service */
      "Gb+d");

      var ClientPage = /*#__PURE__*/function () {
        function ClientPage(navCtrl, dbService, tostService, alertController, dataService) {
          _classCallCheck(this, ClientPage);

          this.navCtrl = navCtrl;
          this.dbService = dbService;
          this.tostService = tostService;
          this.alertController = alertController;
          this.dataService = dataService;
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
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
        }, {
          key: "deleteCustomer",
          value: function deleteCustomer(cus) {
            var _this3 = this;

            this.dbService.deleteCustomer(cus).then(function (data) {
              _this3.tostService.presentToast('Customer removed successfully');

              _this3.dbService.getAllCustomers().then(function (data) {
                _this3.customers = data;
              });
            });
          }
        }, {
          key: "presentDeleteAlertConfirm",
          value: function presentDeleteAlertConfirm(cus) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this4 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.alertController.create({
                        // cssClass: 'my-custom-class',
                        header: 'Confirm!',
                        message: '<strong>Are you sure to delete this customer?</strong>!!!',
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
                            _this4.deleteCustomer(cus);
                          }
                        }]
                      });

                    case 2:
                      alert = _context5.sent;
                      _context5.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "download",
          value: function download() {
            var customerDataList = new Array();

            var _iterator2 = _createForOfIteratorHelper(this.customers),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var inv = _step2.value;
                var cusData = {
                  Name: inv.name,
                  ContactPerson: inv.contactPersonName,
                  Mobile: inv.mobile,
                  Balance: inv.balance
                };
                customerDataList.push(cusData);
              } // this.dataService.downloadCcSV(this.invoiceList,'invoices.csv');

            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.dataService.exportToExcel(customerDataList, 'customers.xlsx');
          }
        }]);

        return ClientPage;
      }();

      ClientPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]
        }];
      };

      ClientPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-client',
        template: _raw_loader_client_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_client_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ClientPage);
      /***/
    },

    /***/
    "RhKR":
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/client/client.page.html ***!
      \*******************************************************************************/

    /*! exports provided: default */

    /***/
    function RhKR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Customer</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor= \"let cus of customers\">\n      <ion-label>{{cus.name}}</ion-label>\n      <ion-button color=\"secondary\" (click)=\"editCustomer(cus.name)\">Edit</ion-button>\n      <ion-button (click)=\"presentDeleteAlertConfirm(cus)\">\n        <ion-icon name=\"trash-bin\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n          <ion-button ion-button  color=\"primary\" (click)=\"download()\">\n            <ion-icon name=\"mail\"></ion-icon>\n          </ion-button>\n        </ion-col>\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"addNewClient()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      \n      </ion-row>\n        \n    \n  \n  \n</ion-footer>";
      /***/
    },

    /***/
    "kk3Z":
    /*!*****************************************!*\
      !*** ./src/app/client/client.module.ts ***!
      \*****************************************/

    /*! exports provided: ClientPageModule */

    /***/
    function kk3Z(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientPageModule", function () {
        return ClientPageModule;
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


      var _client_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./client-routing.module */
      "m3Zf");
      /* harmony import */


      var _client_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./client.page */
      "PjFm");

      var ClientPageModule = function ClientPageModule() {
        _classCallCheck(this, ClientPageModule);
      };

      ClientPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _client_routing_module__WEBPACK_IMPORTED_MODULE_5__["ClientPageRoutingModule"]],
        declarations: [_client_page__WEBPACK_IMPORTED_MODULE_6__["ClientPage"]]
      })], ClientPageModule);
      /***/
    },

    /***/
    "m3Zf":
    /*!*************************************************!*\
      !*** ./src/app/client/client-routing.module.ts ***!
      \*************************************************/

    /*! exports provided: ClientPageRoutingModule */

    /***/
    function m3Zf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClientPageRoutingModule", function () {
        return ClientPageRoutingModule;
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


      var _client_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./client.page */
      "PjFm");

      var routes = [{
        path: '',
        component: _client_page__WEBPACK_IMPORTED_MODULE_3__["ClientPage"]
      }];

      var ClientPageRoutingModule = function ClientPageRoutingModule() {
        _classCallCheck(this, ClientPageRoutingModule);
      };

      ClientPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], ClientPageRoutingModule);
      /***/
    },

    /***/
    "tSmw":
    /*!*****************************************!*\
      !*** ./src/app/client/client.page.scss ***!
      \*****************************************/

    /*! exports provided: default */

    /***/
    function tSmw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjbGllbnQucGFnZS5zY3NzIn0= */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=client-client-module-es5.js.map