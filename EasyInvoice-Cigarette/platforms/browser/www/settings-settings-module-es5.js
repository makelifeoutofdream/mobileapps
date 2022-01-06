(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"], {
    /***/
    "7Dlj":
    /*!*****************************************************!*\
      !*** ./src/app/settings/settings-routing.module.ts ***!
      \*****************************************************/

    /*! exports provided: SettingsPageRoutingModule */

    /***/
    function Dlj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function () {
        return SettingsPageRoutingModule;
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


      var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./settings.page */
      "Uncc");

      var routes = [{
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
      }];

      var SettingsPageRoutingModule = function SettingsPageRoutingModule() {
        _classCallCheck(this, SettingsPageRoutingModule);
      };

      SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], SettingsPageRoutingModule);
      /***/
    },

    /***/
    "7wo0":
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.module.ts ***!
      \*********************************************/

    /*! exports provided: SettingsPageModule */

    /***/
    function wo0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function () {
        return SettingsPageModule;
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


      var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./settings-routing.module */
      "7Dlj");
      /* harmony import */


      var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./settings.page */
      "Uncc");

      var SettingsPageModule = function SettingsPageModule() {
        _classCallCheck(this, SettingsPageModule);
      };

      SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
      })], SettingsPageModule);
      /***/
    },

    /***/
    "ADm/":
    /*!*********************************************!*\
      !*** ./src/app/settings/settings.page.scss ***!
      \*********************************************/

    /*! exports provided: default */

    /***/
    function ADm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".vat-check .check {\n  margin: 0;\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFNBQUE7RUFDQSxrQkFBQTtBQUFSIiwiZmlsZSI6InNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52YXQtY2hlY2sge1xuICAgIC5jaGVjayB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "Bhbv":
    /*!*******************************************!*\
      !*** ./src/app/services/print.service.ts ***!
      \*******************************************/

    /*! exports provided: PrintService */

    /***/
    function Bhbv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrintService", function () {
        return PrintService;
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


      var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/bluetooth-serial/ngx */
      "7uwA");
      /* harmony import */


      var _toastservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./toastservice.service */
      "Gb+d");

      var PrintService = /*#__PURE__*/function () {
        function PrintService(btSerial, tostService) {
          _classCallCheck(this, PrintService);

          this.btSerial = btSerial;
          this.tostService = tostService;
        }

        _createClass(PrintService, [{
          key: "listDevices",
          value: function listDevices() {
            return new Promise(function (resolve, reject) {
              window.DatecsPrinter.listBluetoothDevices(function (success) {
                resolve(success);
              }, function (error) {
                alert(error);
                reject(error);
              });
            });
          }
        }, {
          key: "connectPrinter",
          value: function connectPrinter() {
            return new Promise(function (resolve, reject) {
              window.DatecsPrinter.connect(function (success) {
                resolve(success);
              }, function (error) {
                alert(error);
                reject(error);
              });
            });
          }
        }, {
          key: "print",
          value: function print(data) {
            return new Promise(function (resolve, reject) {
              window.DatecsPrinter.printText(data, 'UTF-8', function (success) {
                resolve(success);
              }, function (error) {
                alert(error);
                reject(error);
              });
            });
          }
        }, {
          key: "searchBluetoothPrinter",
          value: function searchBluetoothPrinter() {
            return this.btSerial.list();
          }
        }, {
          key: "connectToBluetoothPrinter",
          value: function connectToBluetoothPrinter(macAddress) {
            alert("Printer MacAddress" + macAddress);
            return this.btSerial.connect(macAddress);
          }
        }, {
          key: "disconnectBluetoothPrinter",
          value: function disconnectBluetoothPrinter() {
            return this.btSerial.disconnect();
          }
        }, {
          key: "sendToBluetoothPrinter",
          value: function sendToBluetoothPrinter(macAddress, data) {
            var _this = this;

            this.connectToBluetoothPrinter(macAddress).subscribe(function (_) {
              _this.btSerial.write(data).then(function (_) {
                _this.btSerial.disconnect();
              })["catch"](function (reason) {
                console.log(reason);
              });
            }, function (err) {
              return console.log(_this.tostService.presentToast("Printer Issue - bluetooth address - " + macAddress + "-err-" + err));
            });
          }
        }, {
          key: "printDataToPrinter",
          value: function printDataToPrinter(data) {
            return this.btSerial.write(data);
          }
        }, {
          key: "clearData",
          value: function clearData() {
            this.btSerial.clear();
          }
        }, {
          key: "isConnected",
          value: function isConnected() {
            return this.btSerial.isConnected();
          }
        }]);

        return PrintService;
      }();

      PrintService.ctorParameters = function () {
        return [{
          type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"]
        }, {
          type: _toastservice_service__WEBPACK_IMPORTED_MODULE_3__["ToastserviceService"]
        }];
      };

      PrintService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], PrintService);
      /***/
    },

    /***/
    "Uncc":
    /*!*******************************************!*\
      !*** ./src/app/settings/settings.page.ts ***!
      \*******************************************/

    /*! exports provided: SettingsPage */

    /***/
    function Uncc(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SettingsPage", function () {
        return SettingsPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./settings.page.html */
      "mzE/");
      /* harmony import */


      var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./settings.page.scss */
      "ADm/");
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


      var _services_print_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/print.service */
      "Bhbv");
      /* harmony import */


      var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../services/toastservice.service */
      "Gb+d");
      /* harmony import */


      var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/file/ngx */
      "FAH8");

      var SettingsPage = /*#__PURE__*/function () {
        function SettingsPage(navCtrl, print, toastService, dbService, ref, plt, file) {
          _classCallCheck(this, SettingsPage);

          this.navCtrl = navCtrl;
          this.print = print;
          this.toastService = toastService;
          this.dbService = dbService;
          this.ref = ref;
          this.plt = plt;
          this.file = file;
          this.user = {};
          this.bluetoothList = [];
          this.printerSizes = [{
            name: '58mm',
            value: 368
          }, {
            name: '80mm',
            value: 552
          }];
          this.showProfileSegment = true;
          this.showTaxSegment = false;
          this.showPrinterSegment = false;
          this.showBackupSegment = true;
          this.userProfile = {
            id: null,
            companyName: "",
            companyNameInArabic: "",
            addressLine1: "",
            addressLine1InArabic: "",
            addressLine2: "",
            addressLine2InArabic: "",
            vatNumber: "",
            crNumber: "",
            toEmail: "",
            ccEmail: "",
            vat: null,
            selectedPrinter: null,
            selectedPrinterSize: null,
            canEnableUnit: false
          };
          this.type = "profile";
          this.userProfile = {
            id: null,
            companyName: "",
            companyNameInArabic: "",
            addressLine1: "",
            addressLine1InArabic: "",
            addressLine2: "",
            addressLine2InArabic: "",
            vatNumber: "",
            crNumber: "",
            toEmail: "",
            ccEmail: "",
            vat: null,
            selectedPrinter: null,
            selectedPrinterSize: null,
            canEnableUnit: false
          };
          this.user.userProfile = this.userProfile;
        }

        _createClass(SettingsPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.type = "profile";
            this.showHideSegment();
            this.listPrinter(); //this.userProfile={id:null , companyName:"",companyNameInArabic:"", 
            // addressLine1:"",addressLine1InArabic:"",addressLine2:"",addressLine2InArabic:"",vatNumber:"",crNumber:"",toEmail:"",ccEmail:"",vat:null,selectedPrinter:null};
            // this.user.userProfile=this.userProfile;
          }
        }, {
          key: "showHideSegment",
          value: function showHideSegment() {
            if (this.type == 'profile') {
              this.showPrinterSegment = false;
              this.showProfileSegment = true;
              this.showTaxSegment = false;
              this.showBackupSegment = false;
            } else if (this.type == 'tax') {
              this.showPrinterSegment = false;
              this.showProfileSegment = false;
              this.showTaxSegment = true;
              this.showBackupSegment = false;
            } else if (this.type == 'printer') {
              this.showPrinterSegment = true;
              this.showProfileSegment = false;
              this.showTaxSegment = false;
              this.showBackupSegment = false;
            } else if (this.type == 'backup') {
              this.showPrinterSegment = false;
              this.showProfileSegment = false;
              this.showTaxSegment = false;
              this.showBackupSegment = true;
            } //this.ref.tick();

          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this2 = this;

            this.listPrinter();
            this.type = "profile";
            this.showHideSegment();
            this.dbService.getProfile().then(function (data) {
              _this2.userProfile = data;
              _this2.user.userProfile = data;
            });

            if (this.userProfile == null || this.userProfile == undefined) {
              this.userProfile = {
                id: null,
                companyName: "",
                companyNameInArabic: "",
                canEnableUnit: false,
                selectedPrinterSize: '',
                addressLine1: "",
                addressLine1InArabic: "",
                addressLine2: "",
                addressLine2InArabic: "",
                vatNumber: "",
                crNumber: "",
                toEmail: "",
                ccEmail: "",
                vat: null,
                selectedPrinter: null
              };
              this.user.userProfile = this.userProfile;
            }

            console.log("profile" + this.user.userProfile);
          }
        }, {
          key: "listPrinter",
          value: function listPrinter() {
            var _this3 = this;

            if (this.plt.is('cordova')) {
              this.print.searchBluetoothPrinter().then(function (resp) {
                _this3.bluetoothList = resp;
              });
              /*this.print.listDevices().then(res=>{
                this.bluetoothList=res;
              })*/
            }
          }
        }, {
          key: "selectPrinter",
          value: function selectPrinter(macAddress) {
            this.user.userProfile.selectedPrinter = macAddress;
          }
        }, {
          key: "setPaperSize",
          value: function setPaperSize(paper) {
            this.paperSize = paper;
            this.user.userProfile.selectedPrinterSize = paper;
          }
        }, {
          key: "enableUnitP",
          value: function enableUnitP(event) {
            this.user.userProfile.canEnableUnit = event.target.checked;
          }
        }, {
          key: "updateProfile",
          value: function updateProfile() {
            var _this4 = this;

            console.log("profile printer" + this.user.userProfile.selectedPrinter);
            this.dbService.createOrUpdateProfile(this.user.userProfile).then(function (data) {
              if (data == null || data == undefined) {
                _this4.toastService.presentToast("Failed to update settings");
              } else {
                _this4.user.userProfile = data;

                _this4.toastService.presentToast("Settings updated successfully");
              }
            })["catch"](function (reason) {
              _this4.toastService.presentToast("Failed to update settings");
            });
          }
        }, {
          key: "segmentChanged",
          value: function segmentChanged(evt) {
            var _this5 = this;

            if (evt.detail.value == 'profile') {
              this.type = "profile";
            } else if (evt.detail.value == 'tax') {
              this.type = "tax";
            } else if (evt.detail.value == 'printer') {
              this.type = "printer";
            }

            this.dbService.getProfile().then(function (data) {
              _this5.userProfile = data;
              _this5.paperSize = _this5.userProfile.selectedPrinterSize;
              _this5.isUnitPEnable = _this5.userProfile.canEnableUnit;
            });

            if (this.userProfile == null || this.userProfile == undefined) {
              this.userProfile = {
                id: null,
                companyName: "",
                companyNameInArabic: "",
                canEnableUnit: false,
                selectedPrinterSize: '',
                addressLine1: "",
                addressLine1InArabic: "",
                addressLine2: "",
                addressLine2InArabic: "",
                vatNumber: "",
                crNumber: "",
                toEmail: "",
                ccEmail: "",
                vat: null,
                selectedPrinter: null
              };
              this.user.userProfile = this.userProfile;
            }

            this.showHideSegment();
          }
        }, {
          key: "savefile",
          value: function savefile() {
            var _this6 = this;

            try {
              var backup;
              this.dbService.copyData().then(function (data) {
                backup = data;

                _this6.file.createDir(_this6.file.externalDataDirectory, 'backup', true).then(function (data) {
                  _this6.file.writeExistingFile(_this6.file.externalDataDirectory + 'backup', 'easyinvoice.json', backup).then(function (data) {
                    alert('Backup created inside' + _this6.file.dataDirectory + 'backup');
                  });
                })["catch"](function (err) {
                  return alert("failed to create " + JSON.stringify(err));
                });
              });
            } catch (err) {
              alert(err);
            }
          }
        }]);

        return SettingsPage;
      }();

      SettingsPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_print_service__WEBPACK_IMPORTED_MODULE_6__["PrintService"]
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"]
        }, {
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_5__["DbService"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_8__["File"]
        }];
      };

      SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SettingsPage);
      /***/
    },

    /***/
    "mzE/":
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
      \***********************************************************************************/

    /*! exports provided: default */

    /***/
    function mzE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Settings</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-segment color=\"secondary\" (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"type\" scrollable > \n    <ion-segment-button checked value=\"profile\" SwipedTabs id=\"profile\">\n      <ion-label>Profile</ion-label>\n      <ion-icon name=\"person-circle\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"tax\" id=\"tax\">\n      <ion-label>Tax</ion-label>\n       <ion-icon name=\"clipboard\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"printer\" id=\"printer\">\n      <ion-label>Printer</ion-label>\n      <ion-icon name=\"print\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"config\" id=\"config\">\n      <ion-label>Configuration</ion-label>\n      <ion-icon name=\"construct-outline\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button checked value=\"backup\">\n      <ion-label>BackUp</ion-label>\n      <ion-icon name=\"server\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n\n\n  <div [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'profile'\"> \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"Company Name\" [(ngModel)]=\"user.userProfile.companyName\"></ion-textarea>\n            </ion-item>\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"اسم الشركة\" [(ngModel)]=\"user.userProfile.companyNameInArabic\"></ion-textarea>\n            </ion-item>\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"Address Line1\" [(ngModel)]=\"user.userProfile.addressLine1\"></ion-textarea>\n            </ion-item>\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"العنوان السطر 1\" [(ngModel)]=\"user.userProfile.addressLine1inArabic\"></ion-textarea>\n            </ion-item>\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"addressLine2\" [(ngModel)]=\"user.userProfile.addressLine2\"></ion-textarea>\n            </ion-item>\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"سطر العنوان 2\" [(ngModel)]=\"user.userProfile.addressLine2InArabic\"></ion-textarea>\n            </ion-item>\n            \n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"Email to send\" [(ngModel)]=\"user.userProfile.toEmail\"></ion-textarea>\n          </ion-item>\n        \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"CC Emails\" [(ngModel)]=\"user.userProfile.ccEmail\"></ion-textarea>\n          </ion-item>\n        \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"updateProfile()\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n      \n    </div>\n    <div *ngSwitchCase=\"'tax'\"> \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"width: 100%\"> \n              <ion-input type=\"number\" placeholder=\"Vat(%)\" [(ngModel)]=\"user.userProfile.vat\"></ion-input>\n          </ion-item>\n          <ion-item style=\"width: 100%\"> \n            <ion-textarea  placeholder=\"VAT Number\" [(ngModel)]=\"user.userProfile.vatNumber\"></ion-textarea>\n          </ion-item>\n          <ion-item style=\"width: 100%\"> \n            <ion-textarea  placeholder=\"CR Number\" [(ngModel)]=\"user.userProfile.crNumber\"></ion-textarea>\n          </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"updateProfile()\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n      \n    </div>\n    <div *ngSwitchCase=\"'printer'\">\n      <ion-list>\n        <ion-item *ngFor=\"let item of bluetoothList\" (click)=\"selectPrinter(item.address)\">\n          {{item.name}} {{item.address}}\n        </ion-item>\n      </ion-list>\n      <ion-item *ngIf=\"bluetoothList!=null && bluetoothList!=undefined\">\n        Selected Printer: {{user.userProfile.selectedPrinter}} \n      </ion-item>\n      <ion-item *ngIf=\"bluetoothList==null || bluetoothList==undefined\">\n        No Printer Connected..\n      </ion-item>\n      <ion-item class=\"full-width m-0 printer-dropdown\">\n        <ion-label>Printer Size</ion-label>\n        <ion-select [(ngModel)]=\"paperSize\" (ionChange)='setPaperSize(paperSize)' placeholder=\"Select printer size\">\n         <ion-select-option  *ngFor=\"let size of printerSizes\" [value]=\"size.value\"> {{size.name}}</ion-select-option>\n       </ion-select>\n     </ion-item>\n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"updateProfile()\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n    </div>\n    <div *ngSwitchCase=\"'config'\">\n      <ion-item class=\"vat-check\" no-lines lines=\"none\">\n        <ion-label> Enable Unit Price</ion-label>\n        <ion-checkbox class=\"check\" slot=\"start\" [(ngModel)]=\"isUnitPEnable\" (ionChange)=\"enableUnitP($event)\" ></ion-checkbox>\n      </ion-item>\n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"updateProfile()\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n    </div>\n    <div *ngSwitchCase=\"'backup'\">\n     \n        <div style=\"margin-top: 22%;\"> \n          <ion-button expand=\"block\" (click)=\"savefile()\">\n            BackUp To Local Storage\n          </ion-button>\n        </div>\n     \n      \n    </div>\n  </div>\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=settings-settings-module-es5.js.map