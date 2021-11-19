(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_newpurchase_newpurchase_module_ts"], {
    /***/
    44921:
    /*!***********************************************************!*\
      !*** ./src/app/newpurchase/newpurchase-routing.module.ts ***!
      \***********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewpurchasePageRoutingModule": function NewpurchasePageRoutingModule() {
          return (
            /* binding */
            _NewpurchasePageRoutingModule
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


      var _newpurchase_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newpurchase.page */
      85714);

      var routes = [{
        path: '',
        component: _newpurchase_page__WEBPACK_IMPORTED_MODULE_0__.NewpurchasePage
      }];

      var _NewpurchasePageRoutingModule = function NewpurchasePageRoutingModule() {
        _classCallCheck(this, NewpurchasePageRoutingModule);
      };

      _NewpurchasePageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NewpurchasePageRoutingModule);
      /***/
    },

    /***/
    6989:
    /*!***************************************************!*\
      !*** ./src/app/newpurchase/newpurchase.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewpurchasePageModule": function NewpurchasePageModule() {
          return (
            /* binding */
            _NewpurchasePageModule
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


      var _newpurchase_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newpurchase-routing.module */
      44921);
      /* harmony import */


      var _newpurchase_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./newpurchase.page */
      85714);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      93319);

      var _NewpurchasePageModule = function NewpurchasePageModule() {
        _classCallCheck(this, NewpurchasePageModule);
      };

      _NewpurchasePageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _newpurchase_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewpurchasePageRoutingModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_7__.IonicSelectableModule],
        declarations: [_newpurchase_page__WEBPACK_IMPORTED_MODULE_1__.NewpurchasePage]
      })], _NewpurchasePageModule);
      /***/
    },

    /***/
    85714:
    /*!*************************************************!*\
      !*** ./src/app/newpurchase/newpurchase.page.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewpurchasePage": function NewpurchasePage() {
          return (
            /* binding */
            _NewpurchasePage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_newpurchase_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./newpurchase.page.html */
      75589);
      /* harmony import */


      var _newpurchase_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./newpurchase.page.scss */
      70784);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
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
      /* harmony import */


      var _validation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../validation.service */
      62813);

      var _NewpurchasePage = /*#__PURE__*/function () {
        function NewpurchasePage(dbService, navCtrl, tostService, validationService) {
          _classCallCheck(this, NewpurchasePage);

          this.dbService = dbService;
          this.navCtrl = navCtrl;
          this.tostService = tostService;
          this.validationService = validationService;
          this.showTable = false;
        }

        _createClass(NewpurchasePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.resetPurchase();
          }
        }, {
          key: "resetPurchase",
          value: function resetPurchase() {
            this.purchase = {
              id: null,
              poNumber: null,
              purchaseDate: new Date(),
              deliveryDate: new Date(),
              purchaseItems: []
            };
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.showTable = false;
            this.resetPurchase();
            this.dbService.incrementPurchaseCode().then(function (data) {
              _this.dbService.getPurchaseCode().then(function (data) {
                console.log("purchase no" + data);

                if (data == null || data == undefined) {
                  data = 1;
                }

                _this.purchase.poNumber = _this.dbService.codeConstant + _this.dbService.purchaseCodeConstant + data;
              });
            });
            this.dbService.getAllInventories().then(function (data) {
              _this.products = data;
            });
            this.dbService.getAllSuppliers().then(function (data) {
              _this.supplierList = data;
            });
          }
        }, {
          key: "populateSupplier",
          value: function populateSupplier() {
            var _this2 = this;

            this.dbService.getAllSuppliers().then(function (data) {
              _this2.supplierList = data;
            });
          }
        }, {
          key: "productSelected",
          value: function productSelected(evt) {
            this.selectedProducts = evt.value;

            var _iterator = _createForOfIteratorHelper(this.selectedProducts),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var inv = _step.value;
                var pItem = {
                  item: {
                    id: null,
                    code: "",
                    name: "",
                    nameInArabic: "",
                    description: "",
                    quantity: null,
                    purchasePrice: null,
                    unitPrice: null
                  },
                  orderQuantity: null,
                  deliverQuantity: null,
                  price: null
                };
                pItem.item = inv;
                this.purchase.purchaseItems.push(pItem);
                this.showTable = true;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }, {
          key: "addNewPurchase",
          value: function addNewPurchase() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this3 = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.dbService.createPurchase(this.purchase).then(function (data) {
                        _this3.dbService.incrementPurchaseCode();

                        _this3.dbService.updateStock(_this3.purchase.purchaseItems).then(function (data) {
                          _this3.tostService.presentToast("Purchase added successfully");
                        });
                      })["catch"](function (reason) {
                        console.log(reason);
                      })["finally"](function () {
                        _this3.resetPurchase();

                        _this3.navCtrl.navigateRoot('purchase');
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
          key: "numericOnly",
          value: function numericOnly(evt) {
            return this.validationService.numericOnly(evt);
          }
        }, {
          key: "showPurchase",
          value: function showPurchase() {
            this.navCtrl.navigateRoot('purchase');
          }
        }]);

        return NewpurchasePage;
      }();

      _NewpurchasePage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__.ToastserviceService
        }, {
          type: _validation_service__WEBPACK_IMPORTED_MODULE_4__.ValidationService
        }];
      };

      _NewpurchasePage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-newpurchase',
        template: _raw_loader_newpurchase_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_newpurchase_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NewpurchasePage);
      /***/
    },

    /***/
    70784:
    /*!***************************************************!*\
      !*** ./src/app/newpurchase/newpurchase.page.scss ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdwdXJjaGFzZS5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    75589:
    /*!*****************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newpurchase/newpurchase.page.html ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainmenu\"> \n\n      </ion-menu-button>\n    </ion-buttons> \n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"home\" (click)=\"showPurchase()\"> </ion-back-button>\n      \n    </ion-buttons>\n    <ion-title>New Purchase</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n          <ion-item style=\"margin-top: 2%;\">\n            <ion-label position=\"floating\">PO No</ion-label>\n            <ion-input name=\"poNumber\" type=\"text\" [(ngModel)]=\"purchase.poNumber\" required></ion-input>\n          </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"floating\">Date</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"purchase.purchaseDate\" required ></ion-datetime>\n        </ion-item>\n    </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item style=\"margin-top: 7%;\">\n        <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%;\"  [(ngModel)]=\"purchase.supplier\" placeholder=\"Select Supplier\">\n          <ion-select-option *ngFor=\"let sup of supplierList\" [value]=\"sup\">{{sup.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n        <ion-item >\n          <ion-label position=\"floating\">Delivery Date</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"purchase.deliveryDate\" required ></ion-datetime>\n        </ion-item> \n       </ion-col>\n    </ion-row>\n    \n    <ion-item>\n      <ion-label>Product</ion-label>\n      <ionic-selectable style=\"height: 30px;\"\n        \n        [(ngModel)]=\"product\"\n        [items]=\"products\"\n        itemValueField=\"name\"\n        itemTextField=\"name\"\n        [canSearch]=\"true\"\n        (onChange)=\"productSelected($event)\"\n        [isMultiple]=\"true\">\n      </ionic-selectable>\n    </ion-item> \n    \n<table *ngIf=\"showTable\" border=\"none\" style=\"width: 94%;margin-left: 2%;margin-right: 5%;margin-top: 2%; color: black;background-color: aliceblue; text-align: center;\">\n  <tr style=\"border: none; color: white; background-color: lightslategray;\">\n    <td>\n      Item Code\n    </td>\n    <td>\n      Item Name\n    </td>\n    <td>\n      Order Quantity\n    </td>\n    <td>\n      Received Quantity\n    </td>\n    <td>\n      Price\n    </td>\n  </tr>\n  <tr *ngFor= \"let pItem of purchase.purchaseItems\" style=\"border: none;\">\n    <td><ion-input  disabled [(ngModel)]=\"pItem.item.code\" ></ion-input></td>\n    <td><ion-input  disabled [(ngModel)]=\"pItem.item.name\" ></ion-input></td>\n    <td><ion-input  type=\"number\" [(ngModel)]=\"pItem.orderQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n    <td><ion-input  type=\"number\" [(ngModel)]=\"pItem.deliverQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n    <td><ion-input  type=\"number\" [(ngModel)]=\"pItem.price\"  ></ion-input></td>\n  </tr>\n</table>\n    </ion-grid>\n    <ion-row style=\"float:right\">\n      <ion-col >\n      <ion-button  color=\"primary\" (click)=\"addNewPurchase()\">\n        <ion-icon name=\"checkmark\"></ion-icon>\n       \n        \n      </ion-button>\n    </ion-col>\n    </ion-row>\n    \n    \n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_newpurchase_newpurchase_module_ts-es5.js.map