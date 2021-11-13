(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_settings_settings_module_ts"], {
    /***/
    91836:
    /*!*****************************************************!*\
      !*** ./src/app/settings/settings-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPageRoutingModule": function SettingsPageRoutingModule() {
          return (
            /* binding */
            _SettingsPageRoutingModule
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


      var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings.page */
      7162);

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
      }];

      var _SettingsPageRoutingModule = function SettingsPageRoutingModule() {
        _classCallCheck(this, SettingsPageRoutingModule);
      };

      _SettingsPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _SettingsPageRoutingModule);
      /***/
    },

    /***/
    27075:
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPageModule": function SettingsPageModule() {
          return (
            /* binding */
            _SettingsPageModule
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


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./settings-routing.module */
      91836);
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settings.page */
      7162);

      var _SettingsPageModule = function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      };

      _SettingsPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
      })], _SettingsPageModule);
      /***/
    },

    /***/
    7162:
    /*!*******************************************!*\
      !*** ./src/app/settings/settings.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SettingsPage": function SettingsPage() {
          return (
            /* binding */
            _SettingsPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./settings.page.html */
      14718);
      /* harmony import */


      var _settings_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./settings.page.scss */
      69519);
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


      var _services_print_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/print.service */
      39534);
      /* harmony import */


      var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/toastservice.service */
      48236);

      var _SettingsPage = /*#__PURE__*/function () {
        function SettingsPage(navCtrl, print, toastService, dbService, ref, plt) {
          _classCallCheck(this, SettingsPage);

          this.navCtrl = navCtrl;
          this.print = print;
          this.toastService = toastService;
          this.dbService = dbService;
          this.ref = ref;
          this.plt = plt;
          this.user = {};
          this.bluetoothList = [];
          this.showProfileSegment = true;
          this.showTaxSegment = false;
          this.showPrinterSegment = false;
          this.userProfile = {
            id: null,
            toEmail: "",
            ccEmail: "",
            vat: null
          };
          this.type = "profile";
          this.userProfile = {
            id: null,
            toEmail: "",
            ccEmail: "",
            vat: null
          };
          this.user.userProfile = this.userProfile;
        }

        _createClass(SettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.type = "profile";
            this.showHideSegment();
            this.listPrinter();
            this.userProfile = {
              id: null,
              toEmail: "",
              ccEmail: "",
              vat: null
            };
            this.user.userProfile = this.userProfile;
          }
        }, {
          key: "showHideSegment",
          value: function showHideSegment() {
            if (this.type == 'profile') {
              this.showPrinterSegment = false;
              this.showProfileSegment = true;
              this.showTaxSegment = false;
            } else if (this.type == 'tax') {
              this.showPrinterSegment = false;
              this.showProfileSegment = false;
              this.showTaxSegment = true;
            } else if (this.type == 'printer') {
              this.showPrinterSegment = true;
              this.showProfileSegment = false;
              this.showTaxSegment = false;
            } //this.ref.tick();

          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.listPrinter();
            this.type = "profile";
            this.showHideSegment();
            this.dbService.getProfile().then(function (data) {
              return _this.userProfile = data;
            });

            if (this.userProfile == null || this.userProfile == undefined) {
              this.userProfile = {
                id: null,
                toEmail: "",
                ccEmail: "",
                vat: null
              };
              this.user.userProfile = this.userProfile;
            }

            console.log("profile" + this.user.userProfile);
          }
        }, {
          key: "listPrinter",
          value: function listPrinter() {
            var _this2 = this;

            if (this.plt.is('cordova')) {
              this.print.searchBluetoothPrinter().then(function (resp) {
                _this2.bluetoothList = resp;
              });
            }
          }
        }, {
          key: "selectPrinter",
          value: function selectPrinter(macAddress) {
            this.print.selectedPrinter = macAddress;
            this.selectedPrinter = this.print.selectedPrinter;
          }
        }, {
          key: "updateProfile",
          value: function updateProfile() {
            var _this3 = this;

            console.log("profile" + this.user.userProfile);
            this.dbService.createOrUpdateProfile(this.user.userProfile).then(function (data) {
              if (data == null || data == undefined) {
                _this3.toastService.presentToast("Failed to update settings");
              } else {
                _this3.toastService.presentToast("Settings updated successfully");
              }
            })["catch"](function (reason) {
              _this3.toastService.presentToast("Failed to update settings");
            });
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(evt) {
            var _this4 = this;

            if (evt.detail.value == 'profile') {
              this.type = "profile";
            } else if (evt.detail.value == 'tax') {
              this.type = "tax";
            } else if (evt.detail.value == 'printer') {
              this.type = "printer";
            }

            this.dbService.getProfile().then(function (data) {
              return _this4.userProfile = data;
            });

            if (this.userProfile == null || this.userProfile == undefined) {
              this.userProfile = {
                id: null,
                toEmail: "",
                ccEmail: "",
                vat: null
              };
              this.user.userProfile = this.userProfile;
            }

            this.showHideSegment();
          }
        }, {
          key: "updatePrinter",
          value: function updatePrinter() {
            this.toastService.presentToast("Printer configured successfully");
          }
        }]);

        return SettingsPage;
      }();

      _SettingsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }, {
          type: _services_print_service__WEBPACK_IMPORTED_MODULE_3__.PrintService
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_4__.ToastserviceService
        }, {
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_2__.DbService
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ApplicationRef
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.Platform
        }];
      };

      _SettingsPage = (0, tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _SettingsPage);
      /***/
    },

    /***/
    69519:
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    14718:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Settings</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-segment color=\"secondary\" (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"type\"> \n    <ion-segment-button checked value=\"profile\">\n      <ion-label>Profile</ion-label>\n      <ion-icon name=\"person-circle\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"tax\">\n      <ion-label>Tax</ion-label>\n       <ion-icon name=\"clipboard\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"printer\">\n      <ion-label>Printer</ion-label>\n      <ion-icon name=\"print\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n\n\n  <div [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'profile'\"> \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"Email to send\" [(ngModel)]=\"user.toEmail\"></ion-textarea>\n          </ion-item>\n        \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"CC Emails\" [(ngModel)]=\"user.ccEmail\"></ion-textarea>\n          </ion-item>\n        \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"updateProfile()\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n      \n    </div>\n    <div *ngSwitchCase=\"'tax'\"> \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"width: 100%\"> \n              <ion-input type=\"number\" placeholder=\"Vat(%)\" [(ngModel)]=\"user.vat\"></ion-input>\n          </ion-item>\n        \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"updateProfile()\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n      \n    </div>\n    <div *ngSwitchCase=\"'printer'\">\n      <ion-list>\n        <ion-item *ngFor=\"let item of bluetoothList\" (click)=\"selectPrinter(item.id)\">\n          {{item.name}} {{item.id}}\n        </ion-item>\n      </ion-list>\n      <ion-item *ngIf=\"bluetoothList!=null && bluetoothList!=undefined\">\n        Selected Printer: {{selectedPrinter}}\n      </ion-item>\n      <ion-item *ngIf=\"bluetoothList==null || bluetoothList==undefined\">\n        No Printer Connected..\n      </ion-item>\n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"updatePrinter()\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_settings_settings_module_ts-es5.js.map