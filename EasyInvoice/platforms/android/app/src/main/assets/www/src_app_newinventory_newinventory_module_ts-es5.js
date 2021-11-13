(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_newinventory_newinventory_module_ts"], {
    /***/
    21710:
    /*!*************************************************************!*\
      !*** ./src/app/newinventory/newinventory-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewinventoryPageRoutingModule": function NewinventoryPageRoutingModule() {
          return (
            /* binding */
            _NewinventoryPageRoutingModule
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


      var _newinventory_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newinventory.page */
      56916);

      var routes = [{
        path: '',
        component: _newinventory_page__WEBPACK_IMPORTED_MODULE_0__.NewinventoryPage
      }];

      var _NewinventoryPageRoutingModule = function NewinventoryPageRoutingModule() {
        _classCallCheck(this, NewinventoryPageRoutingModule);
      };

      _NewinventoryPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NewinventoryPageRoutingModule);
      /***/
    },

    /***/
    68815:
    /*!*****************************************************!*\
      !*** ./src/app/newinventory/newinventory.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewinventoryPageModule": function NewinventoryPageModule() {
          return (
            /* binding */
            _NewinventoryPageModule
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


      var _newinventory_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./newinventory-routing.module */
      21710);
      /* harmony import */


      var _newinventory_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./newinventory.page */
      56916);

      var _NewinventoryPageModule = function NewinventoryPageModule() {
        _classCallCheck(this, NewinventoryPageModule);
      };

      _NewinventoryPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _newinventory_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewinventoryPageRoutingModule],
        declarations: [_newinventory_page__WEBPACK_IMPORTED_MODULE_1__.NewinventoryPage]
      })], _NewinventoryPageModule);
      /***/
    },

    /***/
    56916:
    /*!***************************************************!*\
      !*** ./src/app/newinventory/newinventory.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NewinventoryPage": function NewinventoryPage() {
          return (
            /* binding */
            _NewinventoryPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_newinventory_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./newinventory.page.html */
      63549);
      /* harmony import */


      var _newinventory_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./newinventory.page.scss */
      48982);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      39895);
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

      var _NewinventoryPage = /*#__PURE__*/function () {
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
              name: "",
              description: "",
              quantity: null,
              unitPrice: null,
              purchasePrice: null
            };
          }
        }, {
          key: "addNewInventory",
          value: function addNewInventory() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.dbService.createOrUpdateInventory(this.inventory).then(function (data) {
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
                          name: "",
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
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.route.queryParams.subscribe(function (params) {
              if (params['inventory'] == null || params['inventory'] == undefined) {
                _this2.inventory = {
                  id: null,
                  name: "",
                  description: "",
                  quantity: null,
                  unitPrice: null,
                  purchasePrice: null
                };
              } else {
                _this2.inventory = params['inventory'];
              }
            });
            console.log('selected inventory' + this.inventory.name);
          }
        }]);

        return NewinventoryPage;
      }();

      _NewinventoryPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_3__.ToastserviceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
        }];
      };

      _NewinventoryPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-newinventory',
        template: _raw_loader_newinventory_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_newinventory_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NewinventoryPage);
      /***/
    },

    /***/
    48982:
    /*!*****************************************************!*\
      !*** ./src/app/newinventory/newinventory.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdpbnZlbnRvcnkucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    63549:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newinventory/newinventory.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>New Inventory</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-grid>\n<ion-row>\n  <ion-col size=\"3\">\n    <ion-item >\n      <ion-label position=\"floating\">Name</ion-label>\n      <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"inventory.name\" required></ion-input>\n    </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n    <ion-item >\n      <ion-label position=\"floating\">Description</ion-label>\n      <ion-input name=\"location\" type=\"text\" [(ngModel)]=\"inventory.description\" required></ion-input>\n    </ion-item> \n   </ion-col>\n  \n   <ion-col size=\"5\">\n    <ion-item >\n      <ion-label position=\"floating\">Quantity</ion-label>\n      <ion-input name=\"name\" type=\"text\" [(ngModel)]=\"inventory.quantity\" required></ion-input>\n    </ion-item>\n    </ion-col>\n  \n</ion-row>\n\n<ion-row>\n    <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Unit Price</ion-label>\n      <ion-input name=\"location\" type=\"text\" [(ngModel)]=\"inventory.unitPrice\" required></ion-input>\n    </ion-item> \n   </ion-col>\n   <ion-col size=\"6\">\n    <ion-item >\n      <ion-label position=\"floating\">Purchase Price</ion-label>\n      <ion-input name=\"purchasePrice\" type=\"text\" [(ngModel)]=\"inventory.purchasePrice\" required></ion-input>\n    </ion-item> \n   </ion-col>\n\n</ion-row>\n\n</ion-grid>\n<ion-row style=\"float:right\">\n  <ion-col >\n  <ion-button  color=\"primary\" (click)=\"addNewInventory()\">\n    <ion-icon name=\"checkmark\"></ion-icon>\n   \n    \n  </ion-button>\n</ion-col>\n</ion-row>\n\n</ion-content>\n<ion-footer>\n  \n    \n    \n\n\n\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_newinventory_newinventory_module_ts-es5.js.map