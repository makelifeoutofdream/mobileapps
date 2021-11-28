(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["editpurchase-editpurchase-module"], {
    /***/
    "MDW3":
    /*!*************************************************************!*\
      !*** ./src/app/editpurchase/editpurchase-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: EditpurchasePageRoutingModule */

    /***/
    function MDW3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditpurchasePageRoutingModule", function () {
        return EditpurchasePageRoutingModule;
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


      var _editpurchase_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./editpurchase.page */
      "rS6i");

      var routes = [{
        path: '',
        component: _editpurchase_page__WEBPACK_IMPORTED_MODULE_3__["EditpurchasePage"]
      }];

      var EditpurchasePageRoutingModule = function EditpurchasePageRoutingModule() {
        _classCallCheck(this, EditpurchasePageRoutingModule);
      };

      EditpurchasePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], EditpurchasePageRoutingModule);
      /***/
    },

    /***/
    "TEP0":
    /*!*****************************************************!*\
      !*** ./src/app/editpurchase/editpurchase.page.scss ***!
      \*****************************************************/

    /*! exports provided: default */

    /***/
    function TEP0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0cHVyY2hhc2UucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "rS6i":
    /*!***************************************************!*\
      !*** ./src/app/editpurchase/editpurchase.page.ts ***!
      \***************************************************/

    /*! exports provided: EditpurchasePage */

    /***/
    function rS6i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditpurchasePage", function () {
        return EditpurchasePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_editpurchase_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./editpurchase.page.html */
      "tqy5");
      /* harmony import */


      var _editpurchase_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./editpurchase.page.scss */
      "TEP0");
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
      /* harmony import */


      var _validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../validation.service */
      "oxX3");

      var EditpurchasePage = /*#__PURE__*/function () {
        function EditpurchasePage(dbService, toastService, navCtrl, route, validationService) {
          _classCallCheck(this, EditpurchasePage);

          this.dbService = dbService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
          this.route = route;
          this.validationService = validationService;
          this.showTable = false;
        }

        _createClass(EditpurchasePage, [{
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
              purchaseItems: [],
              supplier: null
            };
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.showTable = false;
            this.dbService.getAllInventories().then(function (data) {
              _this.products = data;
            }).then(function (data) {
              _this.dbService.getAllSuppliers().then(function (data) {
                _this.supplierList = data;
              }).then(function (data) {
                _this.route.queryParams.subscribe(function (params) {
                  _this.purchase = params['purchase'];
                  console.log("purchase selected" + _this.purchase.supplier.id);
                  _this.deafultProducts = [];

                  var _iterator = _createForOfIteratorHelper(_this.purchase.purchaseItems),
                      _step;

                  try {
                    for (_iterator.s(); !(_step = _iterator.n()).done;) {
                      var pitem = _step.value;
                      var inv = {
                        id: null,
                        code: "",
                        name: "",
                        nameInArabic: "",
                        description: "",
                        quantity: null,
                        unitPrice: null,
                        purchasePrice: null
                      };
                      inv = pitem.item;

                      _this.deafultProducts.push(inv);
                    }
                  } catch (err) {
                    _iterator.e(err);
                  } finally {
                    _iterator.f();
                  }

                  _this.showTable = true;
                });
              });
            });
          }
        }, {
          key: "compareSupplier",
          value: function compareSupplier(e1, e2) {
            return e1 && e2 ? e1.id == e2.id : e1 == e2;
          }
        }, {
          key: "productSelected",
          value: function productSelected(evt) {
            var _this2 = this;

            this.selectedProducts = evt.value;
            var tempList;
            tempList = [];

            var _iterator2 = _createForOfIteratorHelper(this.selectedProducts),
                _step2;

            try {
              var _loop = function _loop() {
                var inv = _step2.value;
                index = _this2.purchase.purchaseItems.findIndex(function (i) {
                  return i.item.id == inv.id;
                });
                var p = _this2.purchase.purchaseItems[index];
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

                if (p != null && p != undefined) {
                  pItem.deliverQuantity = p.deliverQuantity;
                  pItem.orderQuantity = p.orderQuantity;
                  pItem.price = p.price;
                }

                tempList.push(pItem);
              };

              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var index;

                _loop();
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            this.purchase.purchaseItems = tempList;
            this.showTable = true;
          }
        }, {
          key: "numericOnly",
          value: function numericOnly(evt) {
            return this.validationService.numericOnly(evt);
          }
        }, {
          key: "editPurchase",
          value: function editPurchase() {
            var _this3 = this;

            this.dbService.updatePurchase(this.purchase).then(function (data) {
              _this3.toastService.presentToast("Purchase updated successfully");

              return _this3.showPurchase();
            })["catch"](function (reason) {
              _this3.toastService.presentToast("Failed to save update " + reason);
            });
          }
        }, {
          key: "showPurchase",
          value: function showPurchase() {
            this.navCtrl.navigateRoot('purchase');
          }
        }]);

        return EditpurchasePage;
      }();

      EditpurchasePage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }, {
          type: _validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"]
        }];
      };

      EditpurchasePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-editpurchase',
        template: _raw_loader_editpurchase_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_editpurchase_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], EditpurchasePage);
      /***/
    },

    /***/
    "tqy5":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/editpurchase/editpurchase.page.html ***!
      \*******************************************************************************************/

    /*! exports provided: default */

    /***/
    function tqy5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainmenu\"> \n\n      </ion-menu-button>\n    </ion-buttons> \n    <ion-buttons slot=\"end\">\n      <ion-back-button defaultHref=\"home\" (click)=\"showPurchase()\"> </ion-back-button>\n      \n    </ion-buttons>\n    <ion-title>Edit Purchase</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"6\">\n          <ion-item style=\"margin-top: 2%;\">\n            <ion-label position=\"floating\">PO No</ion-label>\n            <ion-input name=\"poNumber\" disabled type=\"text\" [(ngModel)]=\"purchase.poNumber\" required></ion-input>\n          </ion-item>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-item>\n          <ion-label position=\"floating\">Date</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"purchase.purchaseDate\" required ></ion-datetime>\n        </ion-item>\n    </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col size=\"6\">\n        <ion-item style=\"margin-top: 7%;\">\n        <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%;\"  [(ngModel)]=\"purchase.supplier\" [compareWith]=\"compareSupplier\" placeholder=\"Select Supplier\">\n          <ion-select-option *ngFor=\"let sup of supplierList\" [value]=\"sup\">{{sup.name}}</ion-select-option>\n        </ion-select>\n      </ion-item>\n        </ion-col>\n        <ion-col size=\"6\">\n        <ion-item >\n          <ion-label position=\"floating\">Delivery Date</ion-label>\n          <ion-datetime displayFormat=\"DD/MM/YYYY\" [(ngModel)]=\"purchase.deliveryDate\" required ></ion-datetime>\n        </ion-item> \n       </ion-col>\n    </ion-row>\n    \n    <ion-item>\n      <ion-label>Product</ion-label>\n      <ionic-selectable style=\"height: 30px;\"\n        \n        [(ngModel)]=\"deafultProducts\"\n        [items]=\"products\"\n        itemValueField=\"name\"\n        itemTextField=\"name\"\n        [canSearch]=\"true\"\n        (onChange)=\"productSelected($event)\"\n        [isMultiple]=\"true\"\n        >\n      </ionic-selectable>\n    </ion-item> \n    \n<table *ngIf=\"showTable\" border=\"none\" style=\"width: 94%;margin-left: 2%;margin-right: 5%;margin-top: 2%; color: black;background-color: aliceblue; text-align: center;\">\n  <tr style=\"border: none; color: white; background-color: lightslategray;\">\n    <td>\n      Item Code\n    </td>\n    <td>\n      Item Name\n    </td>\n    <td>\n      Order Quantity\n    </td>\n    <td>\n      Received Quantity\n    </td>\n    <td>\n      Price\n    </td>\n  </tr>\n  <tr *ngFor= \"let pItem of purchase.purchaseItems\" style=\"border: none;\">\n    <td><ion-input  disabled [(ngModel)]=\"pItem.item.code\" ></ion-input></td>\n    <td><ion-input  disabled [(ngModel)]=\"pItem.item.name\" ></ion-input></td>\n    <td><ion-input  type=\"number\" [(ngModel)]=\"pItem.orderQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n    <td><ion-input  type=\"number\" [(ngModel)]=\"pItem.deliverQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n    <td><ion-input  type=\"number\" [(ngModel)]=\"pItem.price\"  ></ion-input></td>\n  </tr>\n</table>\n    </ion-grid>\n    <ion-row style=\"float:right\">\n      <ion-col >\n      <ion-button  color=\"primary\" (click)=\"editPurchase()\">\n        <ion-icon name=\"checkmark\"></ion-icon>\n       \n        \n      </ion-button>\n    </ion-col>\n    </ion-row>\n    \n    \n</ion-content>\n";
      /***/
    },

    /***/
    "wvd0":
    /*!*****************************************************!*\
      !*** ./src/app/editpurchase/editpurchase.module.ts ***!
      \*****************************************************/

    /*! exports provided: EditpurchasePageModule */

    /***/
    function wvd0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditpurchasePageModule", function () {
        return EditpurchasePageModule;
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


      var _editpurchase_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./editpurchase-routing.module */
      "MDW3");
      /* harmony import */


      var _editpurchase_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./editpurchase.page */
      "rS6i");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      "8xsl");

      var EditpurchasePageModule = function EditpurchasePageModule() {
        _classCallCheck(this, EditpurchasePageModule);
      };

      EditpurchasePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _editpurchase_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditpurchasePageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"]],
        declarations: [_editpurchase_page__WEBPACK_IMPORTED_MODULE_6__["EditpurchasePage"]]
      })], EditpurchasePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=editpurchase-editpurchase-module-es5.js.map