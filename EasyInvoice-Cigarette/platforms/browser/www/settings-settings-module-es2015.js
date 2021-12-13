(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["settings-settings-module"],{

/***/ "7Dlj":
/*!*****************************************************!*\
  !*** ./src/app/settings/settings-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SettingsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageRoutingModule", function() { return SettingsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./settings.page */ "Uncc");




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_3__["SettingsPage"]
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ "7wo0":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.module.ts ***!
  \*********************************************/
/*! exports provided: SettingsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPageModule", function() { return SettingsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./settings-routing.module */ "7Dlj");
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings.page */ "Uncc");







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_5__["SettingsPageRoutingModule"]
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_6__["SettingsPage"]]
    })
], SettingsPageModule);



/***/ }),

/***/ "ADm/":
/*!*********************************************!*\
  !*** ./src/app/settings/settings.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzZXR0aW5ncy5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "Bhbv":
/*!*******************************************!*\
  !*** ./src/app/services/print.service.ts ***!
  \*******************************************/
/*! exports provided: PrintService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintService", function() { return PrintService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "7uwA");
/* harmony import */ var _toastservice_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toastservice.service */ "Gb+d");




let PrintService = class PrintService {
    constructor(btSerial, tostService) {
        this.btSerial = btSerial;
        this.tostService = tostService;
    }
    listDevices() {
        return new Promise((resolve, reject) => {
            window.DatecsPrinter.listBluetoothDevices(function (success) {
                resolve(success);
            }, function (error) {
                alert(error);
                reject(error);
            });
        });
    }
    connectPrinter() {
        return new Promise((resolve, reject) => {
            window.DatecsPrinter.connect(function (success) {
                resolve(success);
            }, function (error) {
                alert(error);
                reject(error);
            });
        });
    }
    print(data) {
        return new Promise((resolve, reject) => {
            window.DatecsPrinter.printText(data, 'UTF-8', function (success) {
                resolve(success);
            }, function (error) {
                alert(error);
                reject(error);
            });
        });
    }
    printData(macAddress, data) {
        window.DatecsPrinter.listBluetoothDevices(function (devices) {
            window.DatecsPrinter.connect(devices[0].address, function () {
                printSomeTestText();
            }, function (error) {
                alert(JSON.stringify(error));
            });
        }, function (error) {
            alert(JSON.stringify(error));
        });
        function printSomeTestText() {
            window.DatecsPrinter.printText("Print Test!", 'ISO-8859-1', function () {
                alert('success');
            });
        }
    }
    searchBluetoothPrinter() {
        return this.btSerial.list();
    }
    connectToBluetoothPrinter(macAddress) {
        return this.btSerial.connect(macAddress);
    }
    disconnectBluetoothPrinter() {
        return this.btSerial.disconnect();
    }
    sendToBluetoothPrinter(macAddress, data) {
        this.connectToBluetoothPrinter(macAddress).subscribe(_ => {
            this.btSerial.write(data).then(_ => {
                this.btSerial.disconnect();
            }).catch(reason => { console.log(reason); });
        }, err => console.log(this.tostService.presentToast("Printer Issue - bluetooth address - " + macAddress + "-err-" + err)));
    }
};
PrintService.ctorParameters = () => [
    { type: _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_2__["BluetoothSerial"] },
    { type: _toastservice_service__WEBPACK_IMPORTED_MODULE_3__["ToastserviceService"] }
];
PrintService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], PrintService);



/***/ }),

/***/ "Uncc":
/*!*******************************************!*\
  !*** ./src/app/settings/settings.page.ts ***!
  \*******************************************/
/*! exports provided: SettingsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsPage", function() { return SettingsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./settings.page.html */ "mzE/");
/* harmony import */ var _settings_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.page.scss */ "ADm/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/db.service */ "ajt+");
/* harmony import */ var _services_print_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/print.service */ "Bhbv");
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toastservice.service */ "Gb+d");









let SettingsPage = class SettingsPage {
    constructor(navCtrl, print, toastService, dbService, ref, plt) {
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
        this.showBackupSegment = true;
        this.userProfile = { id: null, companyName: "", companyNameInArabic: "",
            addressLine1: "", addressLine1InArabic: "", addressLine2: "", addressLine2InArabic: "", vatNumber: "", crNumber: "", toEmail: "", ccEmail: "", vat: null, selectedPrinter: null };
        this.type = "profile";
        this.userProfile = { id: null, companyName: "", companyNameInArabic: "",
            addressLine1: "", addressLine1InArabic: "", addressLine2: "", addressLine2InArabic: "", vatNumber: "", crNumber: "", toEmail: "", ccEmail: "", vat: null, selectedPrinter: null };
        this.user.userProfile = this.userProfile;
    }
    ngOnInit() {
        this.type = "profile";
        this.showHideSegment();
        this.listPrinter();
        //this.userProfile={id:null , companyName:"",companyNameInArabic:"", 
        // addressLine1:"",addressLine1InArabic:"",addressLine2:"",addressLine2InArabic:"",vatNumber:"",crNumber:"",toEmail:"",ccEmail:"",vat:null,selectedPrinter:null};
        // this.user.userProfile=this.userProfile;
    }
    showHideSegment() {
        if (this.type == 'profile') {
            this.showPrinterSegment = false;
            this.showProfileSegment = true;
            this.showTaxSegment = false;
            this.showBackupSegment = false;
        }
        else if (this.type == 'tax') {
            this.showPrinterSegment = false;
            this.showProfileSegment = false;
            this.showTaxSegment = true;
            this.showBackupSegment = false;
        }
        else if (this.type == 'printer') {
            this.showPrinterSegment = true;
            this.showProfileSegment = false;
            this.showTaxSegment = false;
            this.showBackupSegment = false;
        }
        else if (this.type == 'backup') {
            this.showPrinterSegment = false;
            this.showProfileSegment = false;
            this.showTaxSegment = false;
            this.showBackupSegment = true;
        }
        //this.ref.tick();
    }
    ionViewWillEnter() {
        this.listPrinter();
        this.type = "profile";
        this.showHideSegment();
        this.dbService.getProfile().then(data => {
            this.userProfile = data;
            this.user.userProfile = data;
        });
        if (this.userProfile == null || this.userProfile == undefined) {
            this.userProfile = { id: null, companyName: "", companyNameInArabic: "",
                addressLine1: "", addressLine1InArabic: "", addressLine2: "", addressLine2InArabic: "", vatNumber: "", crNumber: "", toEmail: "", ccEmail: "", vat: null, selectedPrinter: null };
            this.user.userProfile = this.userProfile;
        }
        console.log("profile" + this.user.userProfile);
    }
    listPrinter() {
        if (this.plt.is('cordova')) {
            this.print.searchBluetoothPrinter().then(resp => {
                this.bluetoothList = resp;
            });
            /*this.print.listDevices().then(res=>{
              this.bluetoothList=res;
            })*/
        }
    }
    selectPrinter(macAddress) {
        this.user.userProfile.selectedPrinter = macAddress;
    }
    updateProfile() {
        console.log("profile printer" + this.user.userProfile.selectedPrinter);
        this.dbService.createOrUpdateProfile(this.user.userProfile).then(data => {
            if (data == null || data == undefined) {
                this.toastService.presentToast("Failed to update settings");
            }
            else {
                this.user.userProfile = data;
                this.toastService.presentToast("Settings updated successfully");
            }
        }).catch(reason => {
            this.toastService.presentToast("Failed to update settings");
        });
    }
    segmentChanged(evt) {
        if (evt.detail.value == 'profile') {
            this.type = "profile";
        }
        else if (evt.detail.value == 'tax') {
            this.type = "tax";
        }
        else if (evt.detail.value == 'printer') {
            this.type = "printer";
        }
        this.dbService.getProfile().then(data => this.userProfile = data);
        if (this.userProfile == null || this.userProfile == undefined) {
            this.userProfile = { id: null, companyName: "", companyNameInArabic: "",
                addressLine1: "", addressLine1InArabic: "", addressLine2: "", addressLine2InArabic: "", vatNumber: "", crNumber: "", toEmail: "", ccEmail: "", vat: null, selectedPrinter: null };
            this.user.userProfile = this.userProfile;
        }
        this.showHideSegment();
    }
};
SettingsPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_print_service__WEBPACK_IMPORTED_MODULE_6__["PrintService"] },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"] },
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_5__["DbService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ApplicationRef"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] }
];
SettingsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-settings',
        template: _raw_loader_settings_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_settings_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], SettingsPage);



/***/ }),

/***/ "mzE/":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/settings/settings.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Settings</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <ion-segment color=\"secondary\" (ionChange)=\"segmentChanged($event)\" [(ngModel)]=\"type\"> \n    <ion-segment-button checked value=\"profile\">\n      <ion-label>Profile</ion-label>\n      <ion-icon name=\"person-circle\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"tax\">\n      <ion-label>Tax</ion-label>\n       <ion-icon name=\"clipboard\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button value=\"printer\">\n      <ion-label>Printer</ion-label>\n      <ion-icon name=\"print\"></ion-icon>\n    </ion-segment-button>\n    <ion-segment-button checked value=\"backup\">\n      <ion-label>BackUp</ion-label>\n      <ion-icon name=\"server\"></ion-icon>\n    </ion-segment-button>\n  </ion-segment>\n\n\n  <div [ngSwitch]=\"type\">\n    <div *ngSwitchCase=\"'profile'\"> \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"Company Name\" [(ngModel)]=\"user.userProfile.companyName\"></ion-textarea>\n            </ion-item>\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"اسم الشركة\" [(ngModel)]=\"user.userProfile.companyNameInArabic\"></ion-textarea>\n            </ion-item>\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"Address Line1\" [(ngModel)]=\"user.userProfile.addressLine1\"></ion-textarea>\n            </ion-item>\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"العنوان السطر 1\" [(ngModel)]=\"user.userProfile.addressLine1inArabic\"></ion-textarea>\n            </ion-item>\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"addressLine2\" [(ngModel)]=\"user.userProfile.addressLine2\"></ion-textarea>\n            </ion-item>\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"سطر العنوان 2\" [(ngModel)]=\"user.userProfile.addressLine2InArabic\"></ion-textarea>\n            </ion-item>\n            \n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"Email to send\" [(ngModel)]=\"user.userProfile.toEmail\"></ion-textarea>\n          </ion-item>\n        \n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"width: 100%\"> \n              <ion-textarea  placeholder=\"CC Emails\" [(ngModel)]=\"user.userProfile.ccEmail\"></ion-textarea>\n          </ion-item>\n        \n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"updateProfile()\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n      \n    </div>\n    <div *ngSwitchCase=\"'tax'\"> \n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"width: 100%\"> \n              <ion-input type=\"number\" placeholder=\"Vat(%)\" [(ngModel)]=\"user.userProfile.vat\"></ion-input>\n          </ion-item>\n          <ion-item style=\"width: 100%\"> \n            <ion-textarea  placeholder=\"VAT Number\" [(ngModel)]=\"user.userProfile.vatNumber\"></ion-textarea>\n          </ion-item>\n          <ion-item style=\"width: 100%\"> \n            <ion-textarea  placeholder=\"CR Number\" [(ngModel)]=\"user.userProfile.crNumber\"></ion-textarea>\n          </ion-item>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"updateProfile()\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n      \n    </div>\n    <div *ngSwitchCase=\"'printer'\">\n      <ion-list>\n        <ion-item *ngFor=\"let item of bluetoothList\" (click)=\"selectPrinter(item.address)\">\n          {{item.name}} {{item.address}}\n        </ion-item>\n      </ion-list>\n      <ion-item *ngIf=\"bluetoothList!=null && bluetoothList!=undefined\">\n        Selected Printer: {{user.userProfile.selectedPrinter}} \n      </ion-item>\n      <ion-item *ngIf=\"bluetoothList==null || bluetoothList==undefined\">\n        No Printer Connected..\n      </ion-item>\n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button  color=\"primary\" (click)=\"updateProfile()\">\n          <ion-icon name=\"checkmark\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      </ion-row>\n    </div>\n    <div *ngSwitchCase=\"'backup'\">\n     \n        <div style=\"margin-top: 2%;\"> \n          <ion-button expand=\"full\">\n            BackUp To Local Storage\n          </ion-button>\n        </div>\n     \n      \n    </div>\n  </div>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=settings-settings-module-es2015.js.map