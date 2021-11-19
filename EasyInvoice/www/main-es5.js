(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      39895);

      var routes = [{
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./login/login.module */
          80107)).then(function (m) {
            return m.LoginPageModule;
          });
        }
      }, {
        path: 'client',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("src_app_client_client_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./client/client.module */
          27808)).then(function (m) {
            return m.ClientPageModule;
          });
        }
      }, {
        path: 'invoice',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("default-src_app_data_service_ts"), __webpack_require__.e("src_app_invoice_invoice_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./invoice/invoice.module */
          63277)).then(function (m) {
            return m.InvoicePageModule;
          });
        }
      }, {
        path: 'expense',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_expense_expense_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./expense/expense.module */
          58032)).then(function (m) {
            return m.ExpensePageModule;
          });
        }
      }, {
        path: 'project',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_project_project_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./project/project.module */
          75318)).then(function (m) {
            return m.ProjectPageModule;
          });
        }
      }, {
        path: 'myteam',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_myteam_myteam_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./myteam/myteam.module */
          18011)).then(function (m) {
            return m.MyteamPageModule;
          });
        }
      }, {
        path: 'newclient',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_newclient_newclient_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./newclient/newclient.module */
          9490)).then(function (m) {
            return m.NewclientPageModule;
          });
        }
      }, {
        path: 'newinvoice',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_newinvoice_newinvoice_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./newinvoice/newinvoice.module */
          43747)).then(function (m) {
            return m.NewinvoicePageModule;
          });
        }
      }, {
        path: 'newexpense',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_newexpense_newexpense_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./newexpense/newexpense.module */
          6359)).then(function (m) {
            return m.NewexpensePageModule;
          });
        }
      }, {
        path: 'dashboard',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./dashboard/dashboard.module */
          34814)).then(function (m) {
            return m.DashboardPageModule;
          });
        }
      }, {
        path: 'register',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("src_app_register_register_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./register/register.module */
          18723)).then(function (m) {
            return m.RegisterPageModule;
          });
        }
      }, {
        path: 'inventory',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("src_app_inventory_inventory_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./inventory/inventory.module */
          41564)).then(function (m) {
            return m.InventoryPageModule;
          });
        }
      }, {
        path: 'newinventory',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("src_app_newinventory_newinventory_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./newinventory/newinventory.module */
          68815)).then(function (m) {
            return m.NewinventoryPageModule;
          });
        }
      }, {
        path: 'settings',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_settings_settings_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./settings/settings.module */
          27075)).then(function (m) {
            return m.SettingsPageModule;
          });
        }
      }, {
        path: 'editclient',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_editclient_editclient_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./editclient/editclient.module */
          99024)).then(function (m) {
            return m.EditclientPageModule;
          });
        }
      }, {
        path: 'report',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("default-src_app_data_service_ts"), __webpack_require__.e("src_app_report_report_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./report/report.module */
          54107)).then(function (m) {
            return m.ReportPageModule;
          });
        }
      }, {
        path: 'viewinvoice',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_viewinvoice_viewinvoice_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./viewinvoice/viewinvoice.module */
          62924)).then(function (m) {
            return m.ViewinvoicePageModule;
          });
        }
      }, {
        path: 'purchase',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("src_app_purchase_purchase_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./purchase/purchase.module */
          10930)).then(function (m) {
            return m.PurchasePageModule;
          });
        }
      }, {
        path: 'supplier',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_supplier_supplier_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./supplier/supplier.module */
          53371)).then(function (m) {
            return m.SupplierPageModule;
          });
        }
      }, {
        path: 'newsupplier',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_newsupplier_newsupplier_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./newsupplier/newsupplier.module */
          50841)).then(function (m) {
            return m.NewsupplierPageModule;
          });
        }
      }, {
        path: 'editsupplier',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_editsupplier_editsupplier_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./editsupplier/editsupplier.module */
          48791)).then(function (m) {
            return m.EditsupplierPageModule;
          });
        }
      }, {
        path: 'newpurchase',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-src_app_services_db_service_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_newpurchase_newpurchase_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./newpurchase/newpurchase.module */
          6989)).then(function (m) {
            return m.NewpurchasePageModule;
          });
        }
      }];

      var _AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__.PreloadAllModules
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./app.component.html */
      91106);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      43069);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      79765);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      45435);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      46782);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, platform, navCtrl) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.platform = platform;
          this.navCtrl = navCtrl;
          this.closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
          this.showTabs = true;
          this.backButtonEvent();
        }

        _createClass(AppComponent, [{
          key: "backButtonEvent",
          value: function backButtonEvent() {
            var _this = this;

            this.platform.backButton.subscribe(function () {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        this.routerOutlets.forEach(function (outlet) {
                          if (outlet && outlet.canGoBack()) {
                            outlet.pop();
                          } else {
                            navigator['app'].exitApp();
                          }
                        });

                      case 1:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.router.events.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(function (e) {
              return e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd;
            }), (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.takeUntil)(this.closed$)).subscribe(function (event) {
              if (event['url'] === '/login' || event['url'] == '') {
                _this2.showTabs = false; // <-- hide tabs on specific pages
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.closed$.next(); // <-- close subscription when component is destroyed
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.Platform
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
        }];
      };

      _AppComponent.propDecorators = {
        routerOutlets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewChildren,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonRouterOutlet]
        }]
      };
      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/platform-browser */
      39075);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/sqlite/ngx */
      70283);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/sqlite-porter/ngx */
      15855);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @ionic/storage-angular */
      54925);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage */
      61628);
      /* harmony import */


      var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/bluetooth-serial/ngx */
      28078);
      /* harmony import */


      var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/email-composer/ngx */
      51535);
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      20138);
      /* harmony import */


      var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/social-sharing/ngx */
      24276);
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ionic-selectable */
      93319);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      38550);

      var _AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_1__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, ionic_selectable__WEBPACK_IMPORTED_MODULE_14__.IonicSelectableModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule, _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_16__.NgxDatatableModule, _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_17__.IonicStorageModule.forRoot({
          name: '_myDb',
          driverOrder: [_ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Drivers.IndexedDB, _ionic_storage__WEBPACK_IMPORTED_MODULE_4__.Drivers.LocalStorage]
        })],
        providers: [{
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy
        }, _angular_common__WEBPACK_IMPORTED_MODULE_19__.DatePipe, _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_2__.SQLite, _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_5__.BluetoothSerial, _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_7__.File, _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_8__.SocialSharing, _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_6__.EmailComposer, _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_3__.SQLitePorter, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicRouteStrategy
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      24608);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [47321, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [36108, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [31489, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [10305, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [15830, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [37757, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [30392, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66911, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [30937, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [78695, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [16034, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68837, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [34195, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [41709, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [33087, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [84513, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [58056, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [10862, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [7509, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [76272, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [71855, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [38708, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [23527, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [24694, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [19222, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [25277, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [39921, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [83122, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [51602, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [45174, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [7895, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [76164, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [20592, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [27162, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [81374, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [97896, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [25043, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [77802, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [29072, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [32191, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [40801, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [67110, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [10431, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    43069:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid #d7d8da;\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDJFQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTs7RUFFRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsZ0NBQUE7RUFBQSwyREFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFFQSxnQkFBQTtBQUxGOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxzREFBQTtBQUxGOztBQVFBO0VBQ0UsK0JBQUE7QUFMRjs7QUFRQTtFQUNFLGNBQUE7QUFMRjs7QUFRQTtFQUNFLGdCQUFBO0FBTEY7O0FBUUE7RUFDRSxzQkFBQTtBQUxGOztBQVFBO0VBQ0UsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLGlCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UsK0JBQUE7QUFMRjs7QUFRQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtBQUxGOztBQVFBOztFQUVFLGtCQUFBO0VBQ0EsbUJBQUE7QUFMRjs7QUFRQTtFQUNFLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtBQU5GOztBQVNBO0VBQ0UsaUNBQUE7QUFORiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";
      /***/
    },

    /***/
    91106:
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n<ion-app >\n  <ion-menu side=\"start\" menuId=\"mainmenu\" contentId=\"maincontent\">\n    <ion-header>\n      <ion-toolbar color=\"primary\">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle>\n        <ion-item routerLink=\"/inventory\">\n          <ion-icon name=\"storefront\" slot=\"start\"></ion-icon>\n          <ion-label>Inventory</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"purchase\">\n          <ion-icon name=\"bag\" slot=\"start\"></ion-icon>\n          <ion-label>Purchase</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"client\">\n          <ion-icon name=\"people\" slot=\"start\"></ion-icon>\n          <ion-label>Customer</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"supplier\">\n          <ion-icon name=\"man\" slot=\"start\"></ion-icon>\n          <ion-label>Supplier</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"newinvoice\">\n          <ion-icon name=\"receipt\" slot=\"start\"></ion-icon>\n          <ion-label>Invoice</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    <ion-menu-toggle>\n        <ion-item routerLink=\"report\">\n          <ion-icon name=\"podium\" slot=\"start\"></ion-icon>\n        <ion-label>Report</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"settings\">\n          <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Settings</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"maincontent\"></ion-router-outlet>\n  <!-- <ion-tabs id=\"tabs\"  >\n    <ion-tab-bar slot=\"bottom\" *ngIf=\"showTabs\">\n      <ion-tab-button tab=\"inventory\">\n        <ion-icon name=\"bag\"></ion-icon>\n        <ion-label>Inventory</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"purchase\">\n        <ion-icon name=\"bag\"></ion-icon>\n        <ion-label>Purchase</ion-label>\n      </ion-tab-button>\n\n        \n      <ion-tab-button tab=\"client\">\n        <ion-icon name=\"people\"></ion-icon>\n        <ion-label>Customer</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"newinvoice\">\n        <ion-icon name=\"receipt\"></ion-icon>\n        <ion-label>Invoice</ion-label>\n      </ion-tab-button>\n      \n      <ion-tab-button tab=\"report\">\n        <ion-icon name=\"podium\"></ion-icon>\n        <ion-label>Report</ion-label>\n      </ion-tab-button>\n      \n    \n    \n      \n      <ion-tab-button tab=\"settings\" >\n        <ion-icon name=\"settings-outline\"></ion-icon>\n        <ion-label>Settings</ion-label>\n\n      </ion-tab-button> \n  \n    </ion-tab-bar>\n  </ion-tabs> -->\n\n</ion-app>\n";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    "use strict";
    /******/

    /******/

    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map