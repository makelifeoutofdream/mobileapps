(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "34Y5":
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "V6Ie");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "r67e");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../app.component */ "Sy1n");
/* harmony import */ var _services_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/db.service */ "ajt+");
/* harmony import */ var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/toastservice.service */ "Gb+d");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "/+Rg");
/* harmony import */ var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/uid/ngx */ "JN8Z");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_sim_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/sim/ngx */ "ObYS");













let LoginPage = class LoginPage {
    constructor(app, navCtrl, dbServise, formBuilder, tostService, uniqueDeviceID, uid, androidPermissions, sim) {
        this.app = app;
        this.navCtrl = navCtrl;
        this.dbServise = dbServise;
        this.tostService = tostService;
        this.uniqueDeviceID = uniqueDeviceID;
        this.uid = uid;
        this.androidPermissions = androidPermissions;
        this.sim = sim;
        this.userName = "";
        this.password = "";
        this.error = false;
        this.whiteListedMACs = ['919074292305', '0564863010', '0508812145', '919074247482', '0560545887'];
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroup"]({
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required])),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]))
        });
        this.getPermission();
        this.sim.requestReadPermission().then(() => console.log('Permission granted'), () => console.log('Permission denied'));
        this.sim.getSimInfo().then((info) => {
            console.log('Sim info: ', info),
                //  alert('sim info'+JSON.stringify(info) );
                this.phoneNo = info.phoneNumber;
        }, (err) => console.log('Unable to get sim info: ', err));
    }
    ngOnInit() {
        this.app.showTabs = false;
    }
    getPermission() {
        this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
            if (res.hasPermission) {
            }
            else {
                this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_PHONE_STATE).then(res => {
                    alert("Persmission Granted Please Restart App!");
                }).catch(error => {
                    alert("Error! " + error);
                });
            }
        }).catch(error => {
            alert("Error! " + error);
        });
    }
    get errorControl() {
        return this.formLogin.controls;
    }
    login() {
        if (!this.formLogin.valid) {
            return;
        }
        this.dbServise.fetchUserByUserNameAndPassword(this.userName, this.password).then(data => {
            // if(this.whiteListedMACs.includes(this.phoneNo)){
            if (data != null && data != undefined) {
                this.loginUser = data;
                this.app.showTabs = true;
                this.navCtrl.navigateRoot('dashboard');
            }
            else {
                this.tostService.presentToast("Incorrect username or password");
            }
            /*}else{
              this.tostService.presentToast("Configuration Error");
           }*/
        }).catch(err => {
            console.log(err);
            this.tostService.presentToast("Incorrect username or password");
        });
    }
    fetchUserByPormise(userName, password) {
        return this.dbServise.fetchUserByUserNameAndPassword(userName, password).then;
    }
};
LoginPage.ctorParameters = () => [
    { type: _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"] },
    { type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"] },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_9__["UniqueDeviceID"] },
    { type: _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_10__["Uid"] },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_11__["AndroidPermissions"] },
    { type: _ionic_native_sim_ngx__WEBPACK_IMPORTED_MODULE_12__["Sim"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "V6Ie":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  \n  <div style=\"margin-top: 50%;\">\n    <form [formGroup]=\"formLogin\">\n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Email</ion-label>\n        <ion-input name=\"username\" type=\"text\" [(ngModel)]=\"userName\" formControlName=\"email\" required></ion-input>\n       \n    </ion-item>\n    \n    <ion-item lines=\"full\">\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input name=\"password\" type=\"password\" [(ngModel)]=\"password\"   formControlName=\"password\"  required></ion-input>\n    </ion-item>\n  </form>\n\n    <ion-row>\n      <ion-col>\n        <ion-button type=\"submit\" color=\"primary\" (click)=\"login()\" expand=\"block\" >Login</ion-button>\n        \n      </ion-col>\n      \n    </ion-row>\n    <ion-row>\n      <!-- <ion-col class=\"ion-text-left\">\n        <a [routerLink]=\"['/forgot-password']\" class=\"small-text\">Forgot Password?</a>\n      </ion-col> -->\n      <ion-col class=\"ion-text-right\">\n        <a [routerLink]=\"['/register']\" class=\"small-text\">Create Account</a>\n      </ion-col>\n    </ion-row>\n  </div>\n  \n  \n  \n\n</ion-content>  ");

/***/ }),

/***/ "X3zk":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "euwS");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "34Y5");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "euwS":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function() { return LoginPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.page */ "34Y5");




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ "r67e":
/*!***************************************!*\
  !*** ./src/app/login/login.page.scss ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".verticalCenter {\n  margin-top: 14%;\n  margin-left: 10%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQUNEIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi52ZXJ0aWNhbENlbnRlciB7XG5cdG1hcmdpbi10b3A6IDE0JTtcblx0bWFyZ2luLWxlZnQ6IDEwJTtcblx0XG59XG4iXX0= */");

/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map