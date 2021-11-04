(self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["default-src_app_services_db_service_ts"],{

/***/ 69215:
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);

/***/ }),

/***/ 16288:
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ rng; }
/* harmony export */ });
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
var getRandomValues;
var rnds8 = new Uint8Array(16);
function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation. Also,
    // find the complete implementation of crypto (msCrypto) on IE11.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 18461:
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ 92408);

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

var byteToHex = [];

for (var i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).substr(1));
}

function stringify(arr) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0,_validate_js__WEBPACK_IMPORTED_MODULE_0__.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ __webpack_exports__["default"] = (stringify);

/***/ }),

/***/ 61319:
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ 16288);
/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ 18461);



function v4(options, buf, offset) {
  options = options || {};
  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (var i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0,_stringify_js__WEBPACK_IMPORTED_MODULE_1__.default)(rnds);
}

/* harmony default export */ __webpack_exports__["default"] = (v4);

/***/ }),

/***/ 92408:
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ 69215);


function validate(uuid) {
  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__.default.test(uuid);
}

/* harmony default export */ __webpack_exports__["default"] = (validate);

/***/ }),

/***/ 73773:
/*!****************************************!*\
  !*** ./src/app/services/db.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DbService": function() { return /* binding */ DbService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var _toastservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toastservice.service */ 48236);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 61628);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! uuid */ 61319);






let DbService = class DbService {
    constructor(httpClient, toastService, storage) {
        this.httpClient = httpClient;
        this.toastService = toastService;
        this.storage = storage;
        this.usersKey = "users";
        this.customersKey = "customers";
        this.inventoryKey = "inventories";
        this.invoiceKey = "invoices";
        this.invoiceNumberKey = "invoiceNumber";
        this.profileKey = "profile";
        this.init();
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            const storageVar = yield this.storage.create();
            this.storage = storageVar;
        });
    }
    signup(user) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let value = yield this.storage.get(this.usersKey);
                this.users = JSON.parse(value);
                if (this.users == undefined || this.users == null) {
                    this.users = [];
                }
                user.id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.default)();
                this.users.push(user);
                const result = yield this.storage.set(this.usersKey, JSON.stringify(this.users));
                console.log('user signed up successfully' + user);
                return true;
            }
            catch (reason) {
                console.log(reason);
                this.toastService.presentToast("User Registration Failed");
                return false;
            }
        });
    }
    fetchUserByUserNameAndPassword(username, password) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.get(this.usersKey);
                this.users = JSON.parse(result);
                let fetchedUser = this.users.find(u => u.email == username && u.user_password == password);
                console.log('retrieved user' + fetchedUser);
                return fetchedUser;
            }
            catch (reason) {
                console.log(reason);
                return null;
            }
        });
    }
    createCustomer(customer) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const value = yield this.storage.get(this.customersKey);
                this.customers = JSON.parse(value);
                if (this.customers == null || this.customers == undefined) {
                    this.customers = [];
                }
                customer.id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.default)();
                this.customers.push(customer);
                this.storage.set(this.customersKey, JSON.stringify(this.customers));
                return true;
            }
            catch (reason) {
                console.log(reason);
                return false;
            }
        });
    }
    findIndexToUpdate(newCustomer) {
        return newCustomer.name == this;
    }
    UpdateCustomer(customer) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const value = yield this.storage.get(this.customersKey);
                this.customers = JSON.parse(value);
                var index = this.customers.findIndex(i => i.id == customer.id);
                this.customers[index] = customer;
                this.storage.set(this.customersKey, JSON.stringify(this.customers));
                return true;
            }
            catch (reason) {
                console.log(reason);
                return false;
            }
        });
    }
    getAllCustomers() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.get(this.customersKey);
                this.customers = JSON.parse(result);
                return this.customers;
            }
            catch (reason) {
                console.log(reason);
                this.toastService.presentToast("Failed to load the customers");
            }
        });
    }
    saveAllInventories(list) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const value = yield this.storage.get(this.inventoryKey);
                this.storage.set(this.inventoryKey, JSON.stringify(list));
                return true;
            }
            catch (reason) {
                console.log(reason);
                return false;
            }
        });
    }
    createOrUpdateInventory(inventory) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const value = yield this.storage.get(this.inventoryKey);
                this.inventories = JSON.parse(value);
                if (this.inventories == null || this.inventories == undefined) {
                    this.inventories = [];
                }
                if (inventory.id == null || inventory.id == undefined) {
                    inventory.id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.default)();
                    this.inventories.push(inventory);
                }
                else {
                    var index = this.inventories.findIndex(i => i.id == inventory.id);
                    this.inventories[index] = inventory;
                }
                this.storage.set(this.inventoryKey, JSON.stringify(this.inventories));
                return true;
            }
            catch (reason) {
                console.log(reason);
                return false;
            }
        });
    }
    getAllInventories() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.get(this.inventoryKey);
                this.inventories = JSON.parse(result);
                return this.inventories;
            }
            catch (reason) {
                console.log(reason);
                this.toastService.presentToast("Failed to load the inventories");
            }
        });
    }
    getAllInvoices() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const result = yield this.storage.get(this.invoiceKey);
                this.invoices = JSON.parse(result);
                return this.invoices;
            }
            catch (reason) {
                console.log(reason);
                this.toastService.presentToast("Failed to load the invoices");
            }
        });
    }
    createOrUpdateInvoice(invoice) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                const value = yield this.storage.get(this.invoiceKey);
                this.invoices = JSON.parse(value);
                if (this.invoices == null || this.invoices == undefined) {
                    this.invoices = [];
                }
                invoice.id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.default)();
                this.invoices.push(invoice);
                this.storage.set(this.invoiceKey, JSON.stringify(this.invoices));
                return true;
            }
            catch (reason) {
                console.log(reason);
                return false;
            }
        });
    }
    incrementInvoiceNumber() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let invoiceNumber;
            invoiceNumber = yield this.storage.get(this.invoiceNumberKey);
            if (invoiceNumber == null || invoiceNumber == undefined) {
                invoiceNumber = 0;
            }
            invoiceNumber = invoiceNumber + 1;
            yield this.storage.set(this.invoiceNumberKey, invoiceNumber);
            return invoiceNumber;
        });
    }
    getInvoiceNumber() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            let invoiceNumber;
            invoiceNumber = yield this.storage.get(this.invoiceNumberKey);
            return invoiceNumber;
        });
    }
    createOrUpdateProfile(userProfile) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                if (userProfile.id == null || userProfile.id == undefined) {
                    userProfile.id = (0,uuid__WEBPACK_IMPORTED_MODULE_2__.default)();
                }
                this.storage.set(this.profileKey, JSON.stringify(userProfile));
                return userProfile;
            }
            catch (reason) {
                console.log(reason);
                return null;
            }
        });
    }
    getProfile() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, function* () {
            try {
                let value = yield this.storage.get(this.profileKey);
                let profile = JSON.parse(value);
                return profile;
            }
            catch (reason) {
                console.log(reason);
                new Object();
            }
        });
    }
};
DbService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _toastservice_service__WEBPACK_IMPORTED_MODULE_0__.ToastserviceService },
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage }
];
DbService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
    })
], DbService);



/***/ }),

/***/ 48236:
/*!**************************************************!*\
  !*** ./src/app/services/toastservice.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastserviceService": function() { return /* binding */ ToastserviceService; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ 80476);



let ToastserviceService = class ToastserviceService {
    constructor(toastController) {
        this.toastController = toastController;
    }
    presentToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: message,
                duration: 2000
            });
            toast.present();
        });
    }
};
ToastserviceService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController }
];
ToastserviceService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ToastserviceService);



/***/ })

}]);
//# sourceMappingURL=default-src_app_services_db_service_ts-es2015.js.map