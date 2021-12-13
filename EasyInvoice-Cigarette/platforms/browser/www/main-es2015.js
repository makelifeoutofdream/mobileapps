(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/ajayas/Documents/GitHub/mobileapps/EasyInvoice-Cigarette/src/main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
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


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");









let AppComponent = class AppComponent {
    constructor(router, platform, navCtrl, alertController) {
        this.router = router;
        this.platform = platform;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.closed$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.showTabs = true;
        this.backButtonEvent();
    }
    backButtonEvent() {
        this.platform.backButton.subscribe(() => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.routerOutlets.forEach((outlet) => {
                if (outlet && outlet.canGoBack()) {
                    outlet.pop();
                }
                else {
                    this.presentAlertConfirm();
                }
            });
        }));
    }
    presentAlertConfirm() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                // cssClass: 'my-custom-class',
                header: 'Confirm!',
                message: '<strong>Are you sure to exit the app?</strong>!!!',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            navigator['app'].exitApp();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["filter"])(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.closed$)).subscribe(event => {
            if (event['url'] === '/login' || event['url'] == '') {
                this.showTabs = false; // <-- hide tabs on specific pages
            }
        });
    }
    ngOnDestroy() {
        this.closed$.next(); // <-- close subscription when component is destroyed
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["AlertController"] }
];
AppComponent.propDecorators = {
    routerOutlets: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChildren"], args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__["IonRouterOutlet"],] }]
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ion-app >\n  <ion-menu side=\"start\" menuId=\"mainmenu\" contentId=\"maincontent\">\n    <ion-header>\n      <ion-toolbar color=\"primary\">\n        <ion-title>Menu</ion-title>\n      </ion-toolbar>\n    </ion-header>\n    <ion-content>\n      <ion-list>\n        <ion-menu-toggle>\n          <ion-item routerLink=\"/dashboard\">\n            <ion-icon name=\"pie-chart\" slot=\"start\"></ion-icon>\n            <ion-label>Dashboard</ion-label>\n          </ion-item>\n        </ion-menu-toggle>\n        <ion-menu-toggle>\n        <ion-item routerLink=\"/inventory\">\n          <ion-icon name=\"storefront\" slot=\"start\"></ion-icon>\n          <ion-label>Inventory</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"purchase\">\n          <ion-icon name=\"bag\" slot=\"start\"></ion-icon>\n          <ion-label>Purchase</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"client\">\n          <ion-icon name=\"people\" slot=\"start\"></ion-icon>\n          <ion-label>Customer</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"supplier\">\n          <ion-icon name=\"man\" slot=\"start\"></ion-icon>\n          <ion-label>Supplier</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"newinvoice\">\n          <ion-icon name=\"receipt\" slot=\"start\"></ion-icon>\n          <ion-label>Invoice</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n    <ion-menu-toggle>\n        <ion-item routerLink=\"report\">\n          <ion-icon name=\"podium\" slot=\"start\"></ion-icon>\n        <ion-label>Report</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n     \n      <ion-menu-toggle>\n        <ion-item routerLink=\"expense\">\n          <ion-icon name=\"pizza\" slot=\"start\"></ion-icon>\n        <ion-label>Expense</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      <ion-menu-toggle>\n        <ion-item routerLink=\"settings\">\n          <ion-icon name=\"settings-outline\" slot=\"start\"></ion-icon>\n          <ion-label>Settings</ion-label>\n        </ion-item>\n      </ion-menu-toggle>\n      </ion-list>\n    </ion-content>\n  </ion-menu>\n  <ion-router-outlet id=\"maincontent\"></ion-router-outlet>\n  <!-- <ion-tabs id=\"tabs\"  >\n    <ion-tab-bar slot=\"bottom\" *ngIf=\"showTabs\">\n      <ion-tab-button tab=\"inventory\">\n        <ion-icon name=\"bag\"></ion-icon>\n        <ion-label>Inventory</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"purchase\">\n        <ion-icon name=\"bag\"></ion-icon>\n        <ion-label>Purchase</ion-label>\n      </ion-tab-button>\n\n        \n      <ion-tab-button tab=\"client\">\n        <ion-icon name=\"people\"></ion-icon>\n        <ion-label>Customer</ion-label>\n      </ion-tab-button>\n\n      <ion-tab-button tab=\"newinvoice\">\n        <ion-icon name=\"receipt\"></ion-icon>\n        <ion-label>Invoice</ion-label>\n      </ion-tab-button>\n      \n      <ion-tab-button tab=\"report\">\n        <ion-icon name=\"podium\"></ion-icon>\n        <ion-label>Report</ion-label>\n      </ion-tab-button>\n      \n    \n    \n      \n      <ion-tab-button tab=\"settings\" >\n        <ion-icon name=\"settings-outline\"></ion-icon>\n        <ion-label>Settings</ion-label>\n\n      </ion-tab-button> \n  \n    </ion-tab-bar>\n  </ion-tabs> -->\n\n</ion-app>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/sqlite/ngx */ "9lwF");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/sqlite-porter/ngx */ "+Wxr");
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/storage-angular */ "jSNZ");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "fwsW");
/* harmony import */ var _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/bluetooth-serial/ngx */ "7uwA");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "aaed");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic-native/file/ngx */ "FAH8");
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "/XPu");
/* harmony import */ var ionic_selectable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ionic-selectable */ "8xsl");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ "/+Rg");
/* harmony import */ var _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/uid/ngx */ "JN8Z");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "WOgW");
/* harmony import */ var _ionic_native_sim_ngx__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic-native/sim/ngx */ "ObYS");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");

























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_16__["IonicSelectableModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_24__["NgxQRCodeModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_18__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_18__["FormsModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_19__["NgxDatatableModule"], _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_10__["IonicStorageModule"].forRoot({ name: '_myDb',
                driverOrder: [_ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Drivers"].IndexedDB, _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["Drivers"].LocalStorage] })],
        providers: [{ provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"] }, _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"], _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_20__["UniqueDeviceID"],
            _ionic_native_uid_ngx__WEBPACK_IMPORTED_MODULE_21__["Uid"], _ionic_native_sim_ngx__WEBPACK_IMPORTED_MODULE_23__["Sim"],
            _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_22__["AndroidPermissions"],
            _ionic_native_sqlite_ngx__WEBPACK_IMPORTED_MODULE_7__["SQLite"],
            _ionic_native_bluetooth_serial_ngx__WEBPACK_IMPORTED_MODULE_12__["BluetoothSerial"],
            _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_14__["File"],
            _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_15__["SocialSharing"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_13__["EmailComposer"],
            _ionic_native_sqlite_porter_ngx__WEBPACK_IMPORTED_MODULE_9__["SQLitePorter"],
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "X3zk")).then(m => m.LoginPageModule)
    },
    {
        path: 'client',
        loadChildren: () => Promise.all(/*! import() | client-client-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("client-client-module")]).then(__webpack_require__.bind(null, /*! ./client/client.module */ "kk3Z")).then(m => m.ClientPageModule)
    },
    {
        path: 'invoice',
        loadChildren: () => Promise.all(/*! import() | invoice-invoice-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("default~invoice-invoice-module~report-report-module"), __webpack_require__.e("invoice-invoice-module")]).then(__webpack_require__.bind(null, /*! ./invoice/invoice.module */ "hdHI")).then(m => m.InvoicePageModule)
    },
    {
        path: 'project',
        loadChildren: () => __webpack_require__.e(/*! import() | project-project-module */ "project-project-module").then(__webpack_require__.bind(null, /*! ./project/project.module */ "0k1G")).then(m => m.ProjectPageModule)
    },
    {
        path: 'myteam',
        loadChildren: () => __webpack_require__.e(/*! import() | myteam-myteam-module */ "myteam-myteam-module").then(__webpack_require__.bind(null, /*! ./myteam/myteam.module */ "d/bG")).then(m => m.MyteamPageModule)
    },
    {
        path: 'newclient',
        loadChildren: () => Promise.all(/*! import() | newclient-newclient-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("common"), __webpack_require__.e("newclient-newclient-module")]).then(__webpack_require__.bind(null, /*! ./newclient/newclient.module */ "F+5T")).then(m => m.NewclientPageModule)
    },
    {
        path: 'newinvoice',
        loadChildren: () => Promise.all(/*! import() | newinvoice-newinvoice-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("default~inventory-inventory-module~newinvoice-newinvoice-module~report-report-module~viewinvoice-vie~eeb01026"), __webpack_require__.e("default~inventory-inventory-module~newinvoice-newinvoice-module~viewinvoice-viewinvoice-module"), __webpack_require__.e("default~newinvoice-newinvoice-module~viewinvoice-viewinvoice-module"), __webpack_require__.e("common"), __webpack_require__.e("newinvoice-newinvoice-module")]).then(__webpack_require__.bind(null, /*! ./newinvoice/newinvoice.module */ "6VJF")).then(m => m.NewinvoicePageModule)
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then(m => m.DashboardPageModule)
    },
    {
        path: 'register',
        loadChildren: () => Promise.all(/*! import() | register-register-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("register-register-module")]).then(__webpack_require__.bind(null, /*! ./register/register.module */ "x5bZ")).then(m => m.RegisterPageModule)
    },
    {
        path: 'inventory',
        loadChildren: () => Promise.all(/*! import() | inventory-inventory-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("default~inventory-inventory-module~newinvoice-newinvoice-module~report-report-module~viewinvoice-vie~eeb01026"), __webpack_require__.e("default~inventory-inventory-module~newinvoice-newinvoice-module~viewinvoice-viewinvoice-module"), __webpack_require__.e("inventory-inventory-module")]).then(__webpack_require__.bind(null, /*! ./inventory/inventory.module */ "cLqD")).then(m => m.InventoryPageModule)
    },
    {
        path: 'newinventory',
        loadChildren: () => Promise.all(/*! import() | newinventory-newinventory-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("newinventory-newinventory-module")]).then(__webpack_require__.bind(null, /*! ./newinventory/newinventory.module */ "AOgB")).then(m => m.NewinventoryPageModule)
    },
    {
        path: 'settings',
        loadChildren: () => Promise.all(/*! import() | settings-settings-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("settings-settings-module")]).then(__webpack_require__.bind(null, /*! ./settings/settings.module */ "7wo0")).then(m => m.SettingsPageModule)
    },
    {
        path: 'editclient',
        loadChildren: () => Promise.all(/*! import() | editclient-editclient-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("common"), __webpack_require__.e("editclient-editclient-module")]).then(__webpack_require__.bind(null, /*! ./editclient/editclient.module */ "rrI9")).then(m => m.EditclientPageModule)
    },
    {
        path: 'report',
        loadChildren: () => Promise.all(/*! import() | report-report-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("default~inventory-inventory-module~newinvoice-newinvoice-module~report-report-module~viewinvoice-vie~eeb01026"), __webpack_require__.e("default~invoice-invoice-module~report-report-module"), __webpack_require__.e("report-report-module")]).then(__webpack_require__.bind(null, /*! ./report/report.module */ "LVab")).then(m => m.ReportPageModule)
    },
    {
        path: 'viewinvoice',
        loadChildren: () => Promise.all(/*! import() | viewinvoice-viewinvoice-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("default~inventory-inventory-module~newinvoice-newinvoice-module~report-report-module~viewinvoice-vie~eeb01026"), __webpack_require__.e("default~inventory-inventory-module~newinvoice-newinvoice-module~viewinvoice-viewinvoice-module"), __webpack_require__.e("default~newinvoice-newinvoice-module~viewinvoice-viewinvoice-module"), __webpack_require__.e("viewinvoice-viewinvoice-module")]).then(__webpack_require__.bind(null, /*! ./viewinvoice/viewinvoice.module */ "+4lU")).then(m => m.ViewinvoicePageModule)
    },
    {
        path: 'purchase',
        loadChildren: () => Promise.all(/*! import() | purchase-purchase-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("purchase-purchase-module")]).then(__webpack_require__.bind(null, /*! ./purchase/purchase.module */ "Tsp1")).then(m => m.PurchasePageModule)
    },
    {
        path: 'supplier',
        loadChildren: () => Promise.all(/*! import() | supplier-supplier-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("common"), __webpack_require__.e("supplier-supplier-module")]).then(__webpack_require__.bind(null, /*! ./supplier/supplier.module */ "LLgv")).then(m => m.SupplierPageModule)
    },
    {
        path: 'newsupplier',
        loadChildren: () => Promise.all(/*! import() | newsupplier-newsupplier-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("common"), __webpack_require__.e("newsupplier-newsupplier-module")]).then(__webpack_require__.bind(null, /*! ./newsupplier/newsupplier.module */ "YGnE")).then(m => m.NewsupplierPageModule)
    },
    {
        path: 'editsupplier',
        loadChildren: () => Promise.all(/*! import() | editsupplier-editsupplier-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("common"), __webpack_require__.e("editsupplier-editsupplier-module")]).then(__webpack_require__.bind(null, /*! ./editsupplier/editsupplier.module */ "7L+G")).then(m => m.EditsupplierPageModule)
    },
    {
        path: 'newpurchase',
        loadChildren: () => Promise.all(/*! import() | newpurchase-newpurchase-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("common"), __webpack_require__.e("newpurchase-newpurchase-module")]).then(__webpack_require__.bind(null, /*! ./newpurchase/newpurchase.module */ "GIh0")).then(m => m.NewpurchasePageModule)
    },
    {
        path: 'editpurchase',
        loadChildren: () => Promise.all(/*! import() | editpurchase-editpurchase-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("common"), __webpack_require__.e("editpurchase-editpurchase-module")]).then(__webpack_require__.bind(null, /*! ./editpurchase/editpurchase.module */ "wvd0")).then(m => m.EditpurchasePageModule)
    },
    {
        path: 'expense',
        loadChildren: () => Promise.all(/*! import() | expense-expense-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("expense-expense-module")]).then(__webpack_require__.bind(null, /*! ./expense/expense.module */ "jb6p")).then(m => m.ExpensePageModule)
    },
    {
        path: 'newexpense',
        loadChildren: () => Promise.all(/*! import() | newexpense-newexpense-module */[__webpack_require__.e("default~client-client-module~dashboard-dashboard-module~editclient-editclient-module~editpurchase-ed~4b8a43ae"), __webpack_require__.e("newexpense-newexpense-module")]).then(__webpack_require__.bind(null, /*! ./newexpense/newexpense.module */ "xJqg")).then(m => m.NewexpensePageModule)
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLDJFQUFBO0FBREY7O0FBSUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQURGOztBQUlBO0VBQ0UsZUFBQTtBQURGOztBQUlBO0VBQ0UsbUJBQUE7QUFERjs7QUFJQTs7RUFFRSxrQkFBQTtBQURGOztBQUlBO0VBQ0UsMkRBQUE7QUFERjs7QUFJQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFMRjs7QUFRQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUxGOztBQVFBO0VBQ0Usc0RBQUE7QUFMRjs7QUFRQTtFQUNFLCtCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0FBTEY7O0FBUUE7RUFDRSxnQkFBQTtBQUxGOztBQVFBO0VBQ0Usc0JBQUE7QUFMRjs7QUFRQTtFQUNFLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLCtCQUFBO0FBTEY7O0FBUUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUxGOztBQVFBO0VBQ0Usa0JBQUE7QUFMRjs7QUFRQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBTEY7O0FBUUE7RUFDRSxrQkFBQTtBQUxGOztBQVFBO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFORjs7QUFTQTtFQUNFLGlDQUFBO0FBTkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmlvbi1tZW51IGlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24taXRlbS1iYWNrZ3JvdW5kLCB2YXIoLS1pb24tYmFja2dyb3VuZC1jb2xvciwgI2ZmZikpO1xufVxuXG5pb24tbWVudS5tZCBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICAtLXBhZGRpbmctZW5kOiA4cHg7XG4gIC0tcGFkZGluZy10b3A6IDIwcHg7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwO1xufVxuXG5pb24tbWVudS5tZCBpb24tbm90ZSB7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG5pb24tbWVudS5tZCBpb24tbGlzdCNpbmJveC1saXN0IHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zdGVwLTE1MCwgI2Q3ZDhkYSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcblxuICBtYXJnaW4tYm90dG9tOiAxOHB4O1xuXG4gIGNvbG9yOiAjNzU3NTc1O1xuXG4gIG1pbi1oZWlnaHQ6IDI2cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICAtLXBhZGRpbmctZW5kOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIHtcbiAgLS1iYWNrZ3JvdW5kOiByZ2JhKHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LXJnYiksIDAuMTQpO1xufVxuXG5pb24tbWVudS5tZCBpb24taXRlbS5zZWxlY3RlZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6ICM2MTZlN2U7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tY29udGVudCB7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbGlzdCB7XG4gIHBhZGRpbmc6IDIwcHggMCAwIDA7XG59XG5cbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDE2cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tbWluLWhlaWdodDogNTBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzczODQ5YTtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0I2xhYmVscy1saXN0IGlvbi1saXN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0LWhlYWRlcixcbmlvbi1tZW51LmlvcyBpb24tbm90ZSB7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbm90ZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbn1cblxuaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59Il19 */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map