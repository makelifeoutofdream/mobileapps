(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["default-src_app_services_db_service_ts"], {
    /***/
    69215:
    /*!*****************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
      /***/
    },

    /***/
    16288:
    /*!***************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "default": function _default() {
          return (
            /* binding */
            rng
          );
        }
        /* harmony export */

      }); // Unique ID creation requires a high quality random # generator. In the browser we therefore
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
      /***/

    },

    /***/
    18461:
    /*!*********************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./validate.js */
      92408);
      /**
       * Convert array of 16 byte values to UUID string format of the form:
       * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
       */


      var byteToHex = [];

      for (var i = 0; i < 256; ++i) {
        byteToHex.push((i + 0x100).toString(16).substr(1));
      }

      function stringify(arr) {
        var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0; // Note: Be careful editing this code!  It's been tuned for performance
        // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434

        var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one
        // of the following:
        // - One or more input array values don't map to a hex octet (leading to
        // "undefined" in the uuid)
        // - Invalid input values for the RFC `version` or `variant` fields

        if (!(0, _validate_js__WEBPACK_IMPORTED_MODULE_0__["default"])(uuid)) {
          throw TypeError('Stringified UUID is invalid');
        }

        return uuid;
      }
      /* harmony default export */


      __webpack_exports__["default"] = stringify;
      /***/
    },

    /***/
    61319:
    /*!**************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./rng.js */
      16288);
      /* harmony import */


      var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./stringify.js */
      18461);

      function v4(options, buf, offset) {
        options = options || {};

        var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__["default"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


        rnds[6] = rnds[6] & 0x0f | 0x40;
        rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

        if (buf) {
          offset = offset || 0;

          for (var i = 0; i < 16; ++i) {
            buf[offset + i] = rnds[i];
          }

          return buf;
        }

        return (0, _stringify_js__WEBPACK_IMPORTED_MODULE_1__["default"])(rnds);
      }
      /* harmony default export */


      __webpack_exports__["default"] = v4;
      /***/
    },

    /***/
    92408:
    /*!********************************************************!*\
      !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./regex.js */
      69215);

      function validate(uuid) {
        return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__["default"].test(uuid);
      }
      /* harmony default export */


      __webpack_exports__["default"] = validate;
      /***/
    },

    /***/
    73773:
    /*!****************************************!*\
      !*** ./src/app/services/db.service.ts ***!
      \****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DbService": function DbService() {
          return (
            /* binding */
            _DbService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      91841);
      /* harmony import */


      var _toastservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./toastservice.service */
      48236);
      /* harmony import */


      var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/storage-angular */
      61628);
      /* harmony import */


      var uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! uuid */
      61319);

      var _DbService = /*#__PURE__*/function () {
        function DbService(httpClient, toastService, storage) {
          _classCallCheck(this, DbService);

          this.httpClient = httpClient;
          this.toastService = toastService;
          this.storage = storage;
          this.usersKey = "users";
          this.customersKey = "customers";
          this.inventoryKey = "inventories";
          this.invoiceKey = "invoices";
          this.invoiceNumberKey = "invoiceNumber";
          this.profileKey = "profile";
          this.customerCodeKey = "customerCode";
          this.init();
        }

        _createClass(DbService, [{
          key: "init",
          value: function init() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var storageVar;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.storage.create();

                    case 2:
                      storageVar = _context.sent;
                      this.storage = storageVar;

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "signup",
          value: function signup(user) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var value, result;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.prev = 0;
                      _context2.next = 3;
                      return this.storage.get(this.usersKey);

                    case 3:
                      value = _context2.sent;
                      this.users = JSON.parse(value);

                      if (this.users == undefined || this.users == null) {
                        this.users = [];
                      }

                      user.id = (0, uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                      this.users.push(user);
                      _context2.next = 10;
                      return this.storage.set(this.usersKey, JSON.stringify(this.users));

                    case 10:
                      result = _context2.sent;
                      console.log('user signed up successfully' + user);
                      return _context2.abrupt("return", true);

                    case 15:
                      _context2.prev = 15;
                      _context2.t0 = _context2["catch"](0);
                      console.log(_context2.t0);
                      this.toastService.presentToast("User Registration Failed");
                      return _context2.abrupt("return", false);

                    case 20:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[0, 15]]);
            }));
          }
        }, {
          key: "fetchUserByUserNameAndPassword",
          value: function fetchUserByUserNameAndPassword(username, password) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var result, fetchedUser;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.prev = 0;
                      _context3.next = 3;
                      return this.storage.get(this.usersKey);

                    case 3:
                      result = _context3.sent;
                      this.users = JSON.parse(result);
                      fetchedUser = this.users.find(function (u) {
                        return u.email == username && u.user_password == password;
                      });
                      console.log('retrieved user' + fetchedUser);
                      return _context3.abrupt("return", fetchedUser);

                    case 10:
                      _context3.prev = 10;
                      _context3.t0 = _context3["catch"](0);
                      console.log(_context3.t0);
                      return _context3.abrupt("return", null);

                    case 14:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this, [[0, 10]]);
            }));
          }
        }, {
          key: "createCustomer",
          value: function createCustomer(customer) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var value;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.prev = 0;
                      _context4.next = 3;
                      return this.storage.get(this.customersKey);

                    case 3:
                      value = _context4.sent;
                      this.customers = JSON.parse(value);

                      if (this.customers == null || this.customers == undefined) {
                        this.customers = [];
                      }

                      customer.id = (0, uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                      this.customers.push(customer);
                      this.storage.set(this.customersKey, JSON.stringify(this.customers));
                      return _context4.abrupt("return", true);

                    case 12:
                      _context4.prev = 12;
                      _context4.t0 = _context4["catch"](0);
                      console.log(_context4.t0);
                      return _context4.abrupt("return", false);

                    case 16:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this, [[0, 12]]);
            }));
          }
        }, {
          key: "findIndexToUpdate",
          value: function findIndexToUpdate(newCustomer) {
            return newCustomer.name == this;
          }
        }, {
          key: "UpdateCustomer",
          value: function UpdateCustomer(customer) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var value, index;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.prev = 0;
                      _context5.next = 3;
                      return this.storage.get(this.customersKey);

                    case 3:
                      value = _context5.sent;
                      this.customers = JSON.parse(value);
                      index = this.customers.findIndex(function (i) {
                        return i.id == customer.id;
                      });
                      this.customers[index] = customer;
                      this.storage.set(this.customersKey, JSON.stringify(this.customers));
                      return _context5.abrupt("return", true);

                    case 11:
                      _context5.prev = 11;
                      _context5.t0 = _context5["catch"](0);
                      console.log(_context5.t0);
                      return _context5.abrupt("return", false);

                    case 15:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this, [[0, 11]]);
            }));
          }
        }, {
          key: "getAllCustomers",
          value: function getAllCustomers() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var result;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.prev = 0;
                      _context6.next = 3;
                      return this.storage.get(this.customersKey);

                    case 3:
                      result = _context6.sent;
                      this.customers = JSON.parse(result);
                      return _context6.abrupt("return", this.customers);

                    case 8:
                      _context6.prev = 8;
                      _context6.t0 = _context6["catch"](0);
                      console.log(_context6.t0);
                      this.toastService.presentToast("Failed to load the customers");

                    case 12:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this, [[0, 8]]);
            }));
          }
        }, {
          key: "saveAllInventories",
          value: function saveAllInventories(list) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var value;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.prev = 0;
                      _context7.next = 3;
                      return this.storage.get(this.inventoryKey);

                    case 3:
                      value = _context7.sent;
                      this.storage.set(this.inventoryKey, JSON.stringify(list));
                      return _context7.abrupt("return", true);

                    case 8:
                      _context7.prev = 8;
                      _context7.t0 = _context7["catch"](0);
                      console.log(_context7.t0);
                      return _context7.abrupt("return", false);

                    case 12:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this, [[0, 8]]);
            }));
          }
        }, {
          key: "createOrUpdateInventory",
          value: function createOrUpdateInventory(inventory) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              var value, index;
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      _context8.prev = 0;
                      _context8.next = 3;
                      return this.storage.get(this.inventoryKey);

                    case 3:
                      value = _context8.sent;
                      this.inventories = JSON.parse(value);

                      if (this.inventories == null || this.inventories == undefined) {
                        this.inventories = [];
                      }

                      if (inventory.id == null || inventory.id == undefined) {
                        inventory.id = (0, uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                        this.inventories.push(inventory);
                      } else {
                        index = this.inventories.findIndex(function (i) {
                          return i.id == inventory.id;
                        });
                        this.inventories[index] = inventory;
                      }

                      this.storage.set(this.inventoryKey, JSON.stringify(this.inventories));
                      return _context8.abrupt("return", true);

                    case 11:
                      _context8.prev = 11;
                      _context8.t0 = _context8["catch"](0);
                      console.log(_context8.t0);
                      return _context8.abrupt("return", false);

                    case 15:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8, this, [[0, 11]]);
            }));
          }
        }, {
          key: "getAllInventories",
          value: function getAllInventories() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              var result;
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      _context9.prev = 0;
                      _context9.next = 3;
                      return this.storage.get(this.inventoryKey);

                    case 3:
                      result = _context9.sent;
                      this.inventories = JSON.parse(result);
                      return _context9.abrupt("return", this.inventories);

                    case 8:
                      _context9.prev = 8;
                      _context9.t0 = _context9["catch"](0);
                      console.log(_context9.t0);
                      this.toastService.presentToast("Failed to load the inventories");

                    case 12:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9, this, [[0, 8]]);
            }));
          }
        }, {
          key: "getAllInvoices",
          value: function getAllInvoices() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var result;
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      _context10.prev = 0;
                      _context10.next = 3;
                      return this.storage.get(this.invoiceKey);

                    case 3:
                      result = _context10.sent;
                      this.invoices = JSON.parse(result);
                      return _context10.abrupt("return", this.invoices);

                    case 8:
                      _context10.prev = 8;
                      _context10.t0 = _context10["catch"](0);
                      console.log(_context10.t0);
                      this.toastService.presentToast("Failed to load the invoices");

                    case 12:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10, this, [[0, 8]]);
            }));
          }
        }, {
          key: "createOrUpdateInvoice",
          value: function createOrUpdateInvoice(invoice) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              var value;
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      _context11.prev = 0;
                      _context11.next = 3;
                      return this.storage.get(this.invoiceKey);

                    case 3:
                      value = _context11.sent;
                      this.invoices = JSON.parse(value);

                      if (this.invoices == null || this.invoices == undefined) {
                        this.invoices = [];
                      }

                      invoice.id = (0, uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                      this.invoices.push(invoice);
                      this.storage.set(this.invoiceKey, JSON.stringify(this.invoices));
                      return _context11.abrupt("return", true);

                    case 12:
                      _context11.prev = 12;
                      _context11.t0 = _context11["catch"](0);
                      console.log(_context11.t0);
                      return _context11.abrupt("return", false);

                    case 16:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11, this, [[0, 12]]);
            }));
          }
        }, {
          key: "incrementInvoiceNumber",
          value: function incrementInvoiceNumber() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var invoiceNumber;
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      _context12.next = 2;
                      return this.storage.get(this.invoiceNumberKey);

                    case 2:
                      invoiceNumber = _context12.sent;

                      if (invoiceNumber == null || invoiceNumber == undefined) {
                        invoiceNumber = 0;
                      }

                      invoiceNumber = invoiceNumber + 1;
                      _context12.next = 7;
                      return this.storage.set(this.invoiceNumberKey, invoiceNumber);

                    case 7:
                      return _context12.abrupt("return", invoiceNumber);

                    case 8:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12, this);
            }));
          }
        }, {
          key: "getCustomerCode",
          value: function getCustomerCode() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              var customerCode;
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      _context13.next = 2;
                      return this.storage.get(this.customerCodeKey);

                    case 2:
                      customerCode = _context13.sent;

                      if (customerCode == null || customerCode == undefined) {
                        this.incrementCustomerCode().then(function (data) {
                          customerCode = data;
                        });
                      }

                      return _context13.abrupt("return", customerCode);

                    case 5:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13, this);
            }));
          }
        }, {
          key: "incrementCustomerCode",
          value: function incrementCustomerCode() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var customerCode;
              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      _context14.next = 2;
                      return this.storage.get(this.customerCodeKey);

                    case 2:
                      customerCode = _context14.sent;

                      if (customerCode == null || customerCode == undefined) {
                        customerCode = 0;
                      }

                      customerCode = customerCode + 1;
                      _context14.next = 7;
                      return this.storage.set(this.customerCodeKey, customerCode);

                    case 7:
                      return _context14.abrupt("return", customerCode);

                    case 8:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14, this);
            }));
          }
        }, {
          key: "getInvoiceNumber",
          value: function getInvoiceNumber() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
              var invoiceNumber;
              return regeneratorRuntime.wrap(function _callee15$(_context15) {
                while (1) {
                  switch (_context15.prev = _context15.next) {
                    case 0:
                      _context15.next = 2;
                      return this.storage.get(this.invoiceNumberKey);

                    case 2:
                      invoiceNumber = _context15.sent;
                      return _context15.abrupt("return", invoiceNumber);

                    case 4:
                    case "end":
                      return _context15.stop();
                  }
                }
              }, _callee15, this);
            }));
          }
        }, {
          key: "createOrUpdateProfile",
          value: function createOrUpdateProfile(userProfile) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      _context16.prev = 0;

                      if (userProfile.id == null || userProfile.id == undefined) {
                        userProfile.id = (0, uuid__WEBPACK_IMPORTED_MODULE_2__["default"])();
                      }

                      this.storage.set(this.profileKey, JSON.stringify(userProfile));
                      return _context16.abrupt("return", userProfile);

                    case 6:
                      _context16.prev = 6;
                      _context16.t0 = _context16["catch"](0);
                      console.log(_context16.t0);
                      return _context16.abrupt("return", null);

                    case 10:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16, this, [[0, 6]]);
            }));
          }
        }, {
          key: "getProfile",
          value: function getProfile() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
              var value, profile;
              return regeneratorRuntime.wrap(function _callee17$(_context17) {
                while (1) {
                  switch (_context17.prev = _context17.next) {
                    case 0:
                      _context17.prev = 0;
                      _context17.next = 3;
                      return this.storage.get(this.profileKey);

                    case 3:
                      value = _context17.sent;
                      profile = JSON.parse(value);
                      return _context17.abrupt("return", profile);

                    case 8:
                      _context17.prev = 8;
                      _context17.t0 = _context17["catch"](0);
                      console.log(_context17.t0);
                      new Object();

                    case 12:
                    case "end":
                      return _context17.stop();
                  }
                }
              }, _callee17, this, [[0, 8]]);
            }));
          }
        }]);

        return DbService;
      }();

      _DbService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
        }, {
          type: _toastservice_service__WEBPACK_IMPORTED_MODULE_0__.ToastserviceService
        }, {
          type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage
        }];
      };

      _DbService = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
        providedIn: 'root'
      })], _DbService);
      /***/
    },

    /***/
    48236:
    /*!**************************************************!*\
      !*** ./src/app/services/toastservice.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToastserviceService": function ToastserviceService() {
          return (
            /* binding */
            _ToastserviceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      80476);

      var _ToastserviceService = /*#__PURE__*/function () {
        function ToastserviceService(toastController) {
          _classCallCheck(this, ToastserviceService);

          this.toastController = toastController;
        }

        _createClass(ToastserviceService, [{
          key: "presentToast",
          value: function presentToast(message) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var toast;
              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      _context18.next = 2;
                      return this.toastController.create({
                        message: message,
                        duration: 2000
                      });

                    case 2:
                      toast = _context18.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18, this);
            }));
          }
        }]);

        return ToastserviceService;
      }();

      _ToastserviceService.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ToastController
        }];
      };

      _ToastserviceService = (0, tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
      })], _ToastserviceService);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_services_db_service_ts-es5.js.map