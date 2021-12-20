(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module"], {
    /***/
    "9imi":
    /*!***********************************************!*\
      !*** ./src/app/inventory/inventory.page.scss ***!
      \***********************************************/

    /*! exports provided: default */

    /***/
    function imi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlbnRvcnkucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    "I142":
    /*!*************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/inventory.page.html ***!
      \*************************************************************************************/

    /*! exports provided: default */

    /***/
    function I142(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n\n<ion-header>\n  <ion-toolbar>\n    <ion-title>Inventory</ion-title>\n    <ion-buttons slot=\"start\">\n        <ion-menu-button menu=\"mainmenu\"> \n\n        </ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content style=\"background-color: darkblue;\">\n  <ion-list>\n    <ion-list-header>\n      \n      <ion-label style=\"width:30%\">Item</ion-label>\n      <ion-label style=\"width: 20%;\">Qty</ion-label>\n      <ion-label style=\"width: 20%;\">U.Price</ion-label>\n      <ion-label style=\"width: 20%;\">P.Price</ion-label>\n      <ion-label style=\"width: 20%;\">Delete</ion-label>\n    </ion-list-header>\n    <ion-item *ngFor= \"let inv of inventories\" >\n      <div style=\"width: 30%;\">\n        <ion-label style=\"width: 100%;\" class=\"ion-text-wrap\" (click)=\"editInventory(inv)\" >{{inv.name}}</ion-label>\n      </div>\n      \n      <ion-label  style=\"width: 30%;\" (click)=\"editInventory(inv)\">{{inv.quantity}}</ion-label>\n      <ion-label style=\"width: 30%;\" (click)=\"editInventory(inv)\">{{inv.unitPrice}}</ion-label>\n      <ion-label  style=\"width: 30%;\" (click)=\"editInventory(inv)\">{{inv.purchasePrice}}</ion-label>\n      <ion-button style=\"width: 10%;\" (click)=\"presentDeleteAlertConfirm(inv)\">\n        <ion-icon name=\"trash-bin\"></ion-icon>\n      </ion-button>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n        <ion-button color=\"primary\" (click)=\"print()\">\n            <ion-icon name=\"print\"></ion-icon>\n          </ion-button>\n        <ion-button  color=\"primary\" (click)=\"addNewInventory()\">\n          <ion-icon name=\"add-circle\"></ion-icon>\n        </ion-button>\n        \n      </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>";
      /***/
    },

    /***/
    "RD+q":
    /*!******************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inventory/stockprint/stockprint.component.html ***!
      \******************************************************************************************************/

    /*! exports provided: default */

    /***/
    function RDQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"overflow\">\n  <div id=\"imageToPrint\">  \n    <table style=\"width:100%;\" class=\"fixed\">\n      <thead>\n        <tr>\n\n          <th style=\"text-align: left; width: 37%; margin-left: 2%;font-weight: normal;\">\n            <div style=\"margin-left: 3%;\">Item</div>\n          </th>\n          <th style=\"width:4% ;font-weight: normal;\">\n            <div>Qty</div>\n          </th>\n          <th style=\"width:7% ;font-weight: normal;\">\n            <div>U.Price</div>\n          </th>\n          <th style=\"width:7% ;font-weight: normal;\">\n            <div>P.Price</div>\n          </th> \n        </tr>\n      </thead>\n      <tr *ngFor=\"let stock of stockList\">\n        <td style=\"text-align: left;margin-left: 3%;\">\n          <div style=\"margin-left: 3%; \" class=\"letter-space\">\n            {{stock.name}}\n          </div>\n        </td>\n        <td>{{stock.quantity}}</td>\n        <td>{{stock.unitPrice | number : '1.2-2'}}</td>\n        <td >\n          <div style=\"margin-right: 3%;\">\n            {{stock.purchasePrice | number : '1.2-2'}}\n          </div>\n          \n        </td>\n\n        \n       \n      </tr>\n    </table>\n  \n  </div>\n</div>\n";
      /***/
    },

    /***/
    "T4Df":
    /*!*********************************************!*\
      !*** ./src/app/inventory/inventory.page.ts ***!
      \*********************************************/

    /*! exports provided: InventoryPage */

    /***/
    function T4Df(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryPage", function () {
        return InventoryPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./inventory.page.html */
      "I142");
      /* harmony import */


      var _inventory_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./inventory.page.scss */
      "9imi");
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


      var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../services/toastservice.service */
      "Gb+d");
      /* harmony import */


      var _stockprint_stockprint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./stockprint/stockprint.component */
      "lT9S");

      var InventoryPage = /*#__PURE__*/function () {
        function InventoryPage(dbService, toastService, navCtrl, alertController, modalController) {
          _classCallCheck(this, InventoryPage);

          this.dbService = dbService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
          this.alertController = alertController;
          this.modalController = modalController;
        }

        _createClass(InventoryPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "addNewInventory",
          value: function addNewInventory() {
            this.navCtrl.navigateRoot('newinventory');
          }
        }, {
          key: "getAllInventories",
          value: function getAllInventories() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this = this;

              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      this.dbService.getAllInventories().then(function (data) {
                        _this.inventories = data;
                      })["catch"](function (reason) {
                        console.log(reason);
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

            this.dbService.getProfile().then(function (data) {
              _this2.profile = data;
            });
            this.getAllInventories();
          }
        }, {
          key: "editInventory",
          value: function editInventory(inv) {
            var navigationExtras = {
              queryParams: {
                inventory: inv
              }
            };
            console.log("selected inventory" + inv);
            this.navCtrl.navigateRoot('newinventory', navigationExtras);
          }
        }, {
          key: "deleteInventory",
          value: function deleteInventory(inv) {
            var _this3 = this;

            this.dbService.deleteInventory(inv).then(function (data) {
              _this3.toastService.presentToast('Inventory removed successfully');

              _this3.getAllInventories().then(function (data) {
                _this3.updateInventoryToCustomers();
              });
            });
          }
        }, {
          key: "updateInventoryToCustomers",
          value: function updateInventoryToCustomers() {
            var _this4 = this;

            this.dbService.getAllInventories().then(function (invList) {
              _this4.dbService.getAllCustomers().then(function (data) {
                var cusList = data;

                var _iterator = _createForOfIteratorHelper(data),
                    _step;

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    var cus = _step.value;
                    cus.itemList = invList;

                    _this4.dbService.UpdateCustomer(cus);
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }
              });
            });
          }
        }, {
          key: "presentDeleteAlertConfirm",
          value: function presentDeleteAlertConfirm(inv) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.alertController.create({
                        // cssClass: 'my-custom-class',
                        header: 'Confirm!',
                        message: '<strong>Are you sure to delete this inventory?</strong>!!!',
                        buttons: [{
                          text: 'No',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            console.log('Confirm Cancel');
                          }
                        }, {
                          text: 'Yes',
                          handler: function handler() {
                            _this5.deleteInventory(inv);
                          }
                        }]
                      });

                    case 2:
                      alert = _context2.sent;
                      _context2.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "print",
          value: function print() {
            this.printPreview();
          }
        }, {
          key: "printPreview",
          value: function printPreview() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var modal;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.modalController.create({
                        component: _stockprint_stockprint_component__WEBPACK_IMPORTED_MODULE_7__["StockprintComponent"],
                        componentProps: {
                          profile: this.profile,
                          stockList: this.inventories
                        }
                      });

                    case 2:
                      modal = _context3.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }]);

        return InventoryPage;
      }();

      InventoryPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_5__["DbService"]
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_6__["ToastserviceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      InventoryPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-inventory',
        template: _raw_loader_inventory_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_inventory_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], InventoryPage);
      /***/
    },

    /***/
    "UYnB":
    /*!*******************************************************!*\
      !*** ./src/app/inventory/inventory-routing.module.ts ***!
      \*******************************************************/

    /*! exports provided: InventoryPageRoutingModule */

    /***/
    function UYnB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryPageRoutingModule", function () {
        return InventoryPageRoutingModule;
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


      var _inventory_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./inventory.page */
      "T4Df");

      var routes = [{
        path: '',
        component: _inventory_page__WEBPACK_IMPORTED_MODULE_3__["InventoryPage"]
      }];

      var InventoryPageRoutingModule = function InventoryPageRoutingModule() {
        _classCallCheck(this, InventoryPageRoutingModule);
      };

      InventoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], InventoryPageRoutingModule);
      /***/
    },

    /***/
    "cLAn":
    /*!*******************************************************!*\
      !*** ./node_modules/dom-to-image/src/dom-to-image.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function cLAn(module, exports, __webpack_require__) {
      (function (global) {
        'use strict';

        var util = newUtil();
        var inliner = newInliner();
        var fontFaces = newFontFaces();
        var images = newImages(); // Default impl options

        var defaultOptions = {
          // Default is to fail on error, no placeholder
          imagePlaceholder: undefined,
          // Default cache bust is false, it will use the cache
          cacheBust: false
        };
        var domtoimage = {
          toSvg: toSvg,
          toPng: toPng,
          toJpeg: toJpeg,
          toBlob: toBlob,
          toPixelData: toPixelData,
          impl: {
            fontFaces: fontFaces,
            images: images,
            util: util,
            inliner: inliner,
            options: {}
          }
        };
        if (true) module.exports = domtoimage;else {}
        /**
         * @param {Node} node - The DOM Node object to render
         * @param {Object} options - Rendering options
         * @param {Function} options.filter - Should return true if passed node should be included in the output
         *          (excluding node means excluding it's children as well). Not called on the root node.
         * @param {String} options.bgcolor - color for the background, any valid CSS color value.
         * @param {Number} options.width - width to be applied to node before rendering.
         * @param {Number} options.height - height to be applied to node before rendering.
         * @param {Object} options.style - an object whose properties to be copied to node's style before rendering.
         * @param {Number} options.quality - a Number between 0 and 1 indicating image quality (applicable to JPEG only),
                    defaults to 1.0.
         * @param {String} options.imagePlaceholder - dataURL to use as a placeholder for failed images, default behaviour is to fail fast on images we can't fetch
         * @param {Boolean} options.cacheBust - set to true to cache bust by appending the time to the request url
         * @return {Promise} - A promise that is fulfilled with a SVG image data URL
         * */

        function toSvg(node, options) {
          options = options || {};
          copyOptions(options);
          return Promise.resolve(node).then(function (node) {
            return cloneNode(node, options.filter, true);
          }).then(embedFonts).then(inlineImages).then(applyOptions).then(function (clone) {
            return makeSvgDataUri(clone, options.width || util.width(node), options.height || util.height(node));
          });

          function applyOptions(clone) {
            if (options.bgcolor) clone.style.backgroundColor = options.bgcolor;
            if (options.width) clone.style.width = options.width + 'px';
            if (options.height) clone.style.height = options.height + 'px';
            if (options.style) Object.keys(options.style).forEach(function (property) {
              clone.style[property] = options.style[property];
            });
            return clone;
          }
        }
        /**
         * @param {Node} node - The DOM Node object to render
         * @param {Object} options - Rendering options, @see {@link toSvg}
         * @return {Promise} - A promise that is fulfilled with a Uint8Array containing RGBA pixel data.
         * */


        function toPixelData(node, options) {
          return draw(node, options || {}).then(function (canvas) {
            return canvas.getContext('2d').getImageData(0, 0, util.width(node), util.height(node)).data;
          });
        }
        /**
         * @param {Node} node - The DOM Node object to render
         * @param {Object} options - Rendering options, @see {@link toSvg}
         * @return {Promise} - A promise that is fulfilled with a PNG image data URL
         * */


        function toPng(node, options) {
          return draw(node, options || {}).then(function (canvas) {
            return canvas.toDataURL();
          });
        }
        /**
         * @param {Node} node - The DOM Node object to render
         * @param {Object} options - Rendering options, @see {@link toSvg}
         * @return {Promise} - A promise that is fulfilled with a JPEG image data URL
         * */


        function toJpeg(node, options) {
          options = options || {};
          return draw(node, options).then(function (canvas) {
            return canvas.toDataURL('image/jpeg', options.quality || 1.0);
          });
        }
        /**
         * @param {Node} node - The DOM Node object to render
         * @param {Object} options - Rendering options, @see {@link toSvg}
         * @return {Promise} - A promise that is fulfilled with a PNG image blob
         * */


        function toBlob(node, options) {
          return draw(node, options || {}).then(util.canvasToBlob);
        }

        function copyOptions(options) {
          // Copy options to impl options for use in impl
          if (typeof options.imagePlaceholder === 'undefined') {
            domtoimage.impl.options.imagePlaceholder = defaultOptions.imagePlaceholder;
          } else {
            domtoimage.impl.options.imagePlaceholder = options.imagePlaceholder;
          }

          if (typeof options.cacheBust === 'undefined') {
            domtoimage.impl.options.cacheBust = defaultOptions.cacheBust;
          } else {
            domtoimage.impl.options.cacheBust = options.cacheBust;
          }
        }

        function draw(domNode, options) {
          return toSvg(domNode, options).then(util.makeImage).then(util.delay(100)).then(function (image) {
            var canvas = newCanvas(domNode);
            canvas.getContext('2d').drawImage(image, 0, 0);
            return canvas;
          });

          function newCanvas(domNode) {
            var canvas = document.createElement('canvas');
            canvas.width = options.width || util.width(domNode);
            canvas.height = options.height || util.height(domNode);

            if (options.bgcolor) {
              var ctx = canvas.getContext('2d');
              ctx.fillStyle = options.bgcolor;
              ctx.fillRect(0, 0, canvas.width, canvas.height);
            }

            return canvas;
          }
        }

        function cloneNode(node, filter, root) {
          if (!root && filter && !filter(node)) return Promise.resolve();
          return Promise.resolve(node).then(makeNodeCopy).then(function (clone) {
            return cloneChildren(node, clone, filter);
          }).then(function (clone) {
            return processClone(node, clone);
          });

          function makeNodeCopy(node) {
            if (node instanceof HTMLCanvasElement) return util.makeImage(node.toDataURL());
            return node.cloneNode(false);
          }

          function cloneChildren(original, clone, filter) {
            var children = original.childNodes;
            if (children.length === 0) return Promise.resolve(clone);
            return cloneChildrenInOrder(clone, util.asArray(children), filter).then(function () {
              return clone;
            });

            function cloneChildrenInOrder(parent, children, filter) {
              var done = Promise.resolve();
              children.forEach(function (child) {
                done = done.then(function () {
                  return cloneNode(child, filter);
                }).then(function (childClone) {
                  if (childClone) parent.appendChild(childClone);
                });
              });
              return done;
            }
          }

          function processClone(original, clone) {
            if (!(clone instanceof Element)) return clone;
            return Promise.resolve().then(cloneStyle).then(clonePseudoElements).then(copyUserInput).then(fixSvg).then(function () {
              return clone;
            });

            function cloneStyle() {
              copyStyle(window.getComputedStyle(original), clone.style);

              function copyStyle(source, target) {
                if (source.cssText) target.cssText = source.cssText;else copyProperties(source, target);

                function copyProperties(source, target) {
                  util.asArray(source).forEach(function (name) {
                    target.setProperty(name, source.getPropertyValue(name), source.getPropertyPriority(name));
                  });
                }
              }
            }

            function clonePseudoElements() {
              [':before', ':after'].forEach(function (element) {
                clonePseudoElement(element);
              });

              function clonePseudoElement(element) {
                var style = window.getComputedStyle(original, element);
                var content = style.getPropertyValue('content');
                if (content === '' || content === 'none') return;
                var className = util.uid();
                clone.className = clone.className + ' ' + className;
                var styleElement = document.createElement('style');
                styleElement.appendChild(formatPseudoElementStyle(className, element, style));
                clone.appendChild(styleElement);

                function formatPseudoElementStyle(className, element, style) {
                  var selector = '.' + className + ':' + element;
                  var cssText = style.cssText ? formatCssText(style) : formatCssProperties(style);
                  return document.createTextNode(selector + '{' + cssText + '}');

                  function formatCssText(style) {
                    var content = style.getPropertyValue('content');
                    return style.cssText + ' content: ' + content + ';';
                  }

                  function formatCssProperties(style) {
                    return util.asArray(style).map(formatProperty).join('; ') + ';';

                    function formatProperty(name) {
                      return name + ': ' + style.getPropertyValue(name) + (style.getPropertyPriority(name) ? ' !important' : '');
                    }
                  }
                }
              }
            }

            function copyUserInput() {
              if (original instanceof HTMLTextAreaElement) clone.innerHTML = original.value;
              if (original instanceof HTMLInputElement) clone.setAttribute("value", original.value);
            }

            function fixSvg() {
              if (!(clone instanceof SVGElement)) return;
              clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
              if (!(clone instanceof SVGRectElement)) return;
              ['width', 'height'].forEach(function (attribute) {
                var value = clone.getAttribute(attribute);
                if (!value) return;
                clone.style.setProperty(attribute, value);
              });
            }
          }
        }

        function embedFonts(node) {
          return fontFaces.resolveAll().then(function (cssText) {
            var styleNode = document.createElement('style');
            node.appendChild(styleNode);
            styleNode.appendChild(document.createTextNode(cssText));
            return node;
          });
        }

        function inlineImages(node) {
          return images.inlineAll(node).then(function () {
            return node;
          });
        }

        function makeSvgDataUri(node, width, height) {
          return Promise.resolve(node).then(function (node) {
            node.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
            return new XMLSerializer().serializeToString(node);
          }).then(util.escapeXhtml).then(function (xhtml) {
            return '<foreignObject x="0" y="0" width="100%" height="100%">' + xhtml + '</foreignObject>';
          }).then(function (foreignObject) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + width + '" height="' + height + '">' + foreignObject + '</svg>';
          }).then(function (svg) {
            return 'data:image/svg+xml;charset=utf-8,' + svg;
          });
        }

        function newUtil() {
          return {
            escape: escape,
            parseExtension: parseExtension,
            mimeType: mimeType,
            dataAsUrl: dataAsUrl,
            isDataUrl: isDataUrl,
            canvasToBlob: canvasToBlob,
            resolveUrl: resolveUrl,
            getAndEncode: getAndEncode,
            uid: uid(),
            delay: delay,
            asArray: asArray,
            escapeXhtml: escapeXhtml,
            makeImage: makeImage,
            width: width,
            height: height
          };

          function mimes() {
            /*
             * Only WOFF and EOT mime types for fonts are 'real'
             * see http://www.iana.org/assignments/media-types/media-types.xhtml
             */
            var WOFF = 'application/font-woff';
            var JPEG = 'image/jpeg';
            return {
              'woff': WOFF,
              'woff2': WOFF,
              'ttf': 'application/font-truetype',
              'eot': 'application/vnd.ms-fontobject',
              'png': 'image/png',
              'jpg': JPEG,
              'jpeg': JPEG,
              'gif': 'image/gif',
              'tiff': 'image/tiff',
              'svg': 'image/svg+xml'
            };
          }

          function parseExtension(url) {
            var match = /\.([^\.\/]*?)$/g.exec(url);
            if (match) return match[1];else return '';
          }

          function mimeType(url) {
            var extension = parseExtension(url).toLowerCase();
            return mimes()[extension] || '';
          }

          function isDataUrl(url) {
            return url.search(/^(data:)/) !== -1;
          }

          function toBlob(canvas) {
            return new Promise(function (resolve) {
              var binaryString = window.atob(canvas.toDataURL().split(',')[1]);
              var length = binaryString.length;
              var binaryArray = new Uint8Array(length);

              for (var i = 0; i < length; i++) {
                binaryArray[i] = binaryString.charCodeAt(i);
              }

              resolve(new Blob([binaryArray], {
                type: 'image/png'
              }));
            });
          }

          function canvasToBlob(canvas) {
            if (canvas.toBlob) return new Promise(function (resolve) {
              canvas.toBlob(resolve);
            });
            return toBlob(canvas);
          }

          function resolveUrl(url, baseUrl) {
            var doc = document.implementation.createHTMLDocument();
            var base = doc.createElement('base');
            doc.head.appendChild(base);
            var a = doc.createElement('a');
            doc.body.appendChild(a);
            base.href = baseUrl;
            a.href = url;
            return a.href;
          }

          function uid() {
            var index = 0;
            return function () {
              return 'u' + fourRandomChars() + index++;

              function fourRandomChars() {
                /* see http://stackoverflow.com/a/6248722/2519373 */
                return ('0000' + (Math.random() * Math.pow(36, 4) << 0).toString(36)).slice(-4);
              }
            };
          }

          function makeImage(uri) {
            return new Promise(function (resolve, reject) {
              var image = new Image();

              image.onload = function () {
                resolve(image);
              };

              image.onerror = reject;
              image.src = uri;
            });
          }

          function getAndEncode(url) {
            var TIMEOUT = 30000;

            if (domtoimage.impl.options.cacheBust) {
              // Cache bypass so we dont have CORS issues with cached images
              // Source: https://developer.mozilla.org/en/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Bypassing_the_cache
              url += (/\?/.test(url) ? "&" : "?") + new Date().getTime();
            }

            return new Promise(function (resolve) {
              var request = new XMLHttpRequest();
              request.onreadystatechange = done;
              request.ontimeout = timeout;
              request.responseType = 'blob';
              request.timeout = TIMEOUT;
              request.open('GET', url, true);
              request.send();
              var placeholder;

              if (domtoimage.impl.options.imagePlaceholder) {
                var split = domtoimage.impl.options.imagePlaceholder.split(/,/);

                if (split && split[1]) {
                  placeholder = split[1];
                }
              }

              function done() {
                if (request.readyState !== 4) return;

                if (request.status !== 200) {
                  if (placeholder) {
                    resolve(placeholder);
                  } else {
                    fail('cannot fetch resource: ' + url + ', status: ' + request.status);
                  }

                  return;
                }

                var encoder = new FileReader();

                encoder.onloadend = function () {
                  var content = encoder.result.split(/,/)[1];
                  resolve(content);
                };

                encoder.readAsDataURL(request.response);
              }

              function timeout() {
                if (placeholder) {
                  resolve(placeholder);
                } else {
                  fail('timeout of ' + TIMEOUT + 'ms occured while fetching resource: ' + url);
                }
              }

              function fail(message) {
                console.error(message);
                resolve('');
              }
            });
          }

          function dataAsUrl(content, type) {
            return 'data:' + type + ';base64,' + content;
          }

          function escape(string) {
            return string.replace(/([.*+?^${}()|\[\]\/\\])/g, '\\$1');
          }

          function delay(ms) {
            return function (arg) {
              return new Promise(function (resolve) {
                setTimeout(function () {
                  resolve(arg);
                }, ms);
              });
            };
          }

          function asArray(arrayLike) {
            var array = [];
            var length = arrayLike.length;

            for (var i = 0; i < length; i++) {
              array.push(arrayLike[i]);
            }

            return array;
          }

          function escapeXhtml(string) {
            return string.replace(/#/g, '%23').replace(/\n/g, '%0A');
          }

          function width(node) {
            var leftBorder = px(node, 'border-left-width');
            var rightBorder = px(node, 'border-right-width');
            return node.scrollWidth + leftBorder + rightBorder;
          }

          function height(node) {
            var topBorder = px(node, 'border-top-width');
            var bottomBorder = px(node, 'border-bottom-width');
            return node.scrollHeight + topBorder + bottomBorder;
          }

          function px(node, styleProperty) {
            var value = window.getComputedStyle(node).getPropertyValue(styleProperty);
            return parseFloat(value.replace('px', ''));
          }
        }

        function newInliner() {
          var URL_REGEX = /url\(['"]?([^'"]+?)['"]?\)/g;
          return {
            inlineAll: inlineAll,
            shouldProcess: shouldProcess,
            impl: {
              readUrls: readUrls,
              inline: inline
            }
          };

          function shouldProcess(string) {
            return string.search(URL_REGEX) !== -1;
          }

          function readUrls(string) {
            var result = [];
            var match;

            while ((match = URL_REGEX.exec(string)) !== null) {
              result.push(match[1]);
            }

            return result.filter(function (url) {
              return !util.isDataUrl(url);
            });
          }

          function inline(string, url, baseUrl, get) {
            return Promise.resolve(url).then(function (url) {
              return baseUrl ? util.resolveUrl(url, baseUrl) : url;
            }).then(get || util.getAndEncode).then(function (data) {
              return util.dataAsUrl(data, util.mimeType(url));
            }).then(function (dataUrl) {
              return string.replace(urlAsRegex(url), '$1' + dataUrl + '$3');
            });

            function urlAsRegex(url) {
              return new RegExp('(url\\([\'"]?)(' + util.escape(url) + ')([\'"]?\\))', 'g');
            }
          }

          function inlineAll(string, baseUrl, get) {
            if (nothingToInline()) return Promise.resolve(string);
            return Promise.resolve(string).then(readUrls).then(function (urls) {
              var done = Promise.resolve(string);
              urls.forEach(function (url) {
                done = done.then(function (string) {
                  return inline(string, url, baseUrl, get);
                });
              });
              return done;
            });

            function nothingToInline() {
              return !shouldProcess(string);
            }
          }
        }

        function newFontFaces() {
          return {
            resolveAll: resolveAll,
            impl: {
              readAll: readAll
            }
          };

          function resolveAll() {
            return readAll(document).then(function (webFonts) {
              return Promise.all(webFonts.map(function (webFont) {
                return webFont.resolve();
              }));
            }).then(function (cssStrings) {
              return cssStrings.join('\n');
            });
          }

          function readAll() {
            return Promise.resolve(util.asArray(document.styleSheets)).then(getCssRules).then(selectWebFontRules).then(function (rules) {
              return rules.map(newWebFont);
            });

            function selectWebFontRules(cssRules) {
              return cssRules.filter(function (rule) {
                return rule.type === CSSRule.FONT_FACE_RULE;
              }).filter(function (rule) {
                return inliner.shouldProcess(rule.style.getPropertyValue('src'));
              });
            }

            function getCssRules(styleSheets) {
              var cssRules = [];
              styleSheets.forEach(function (sheet) {
                try {
                  util.asArray(sheet.cssRules || []).forEach(cssRules.push.bind(cssRules));
                } catch (e) {
                  console.log('Error while reading CSS rules from ' + sheet.href, e.toString());
                }
              });
              return cssRules;
            }

            function newWebFont(webFontRule) {
              return {
                resolve: function resolve() {
                  var baseUrl = (webFontRule.parentStyleSheet || {}).href;
                  return inliner.inlineAll(webFontRule.cssText, baseUrl);
                },
                src: function src() {
                  return webFontRule.style.getPropertyValue('src');
                }
              };
            }
          }
        }

        function newImages() {
          return {
            inlineAll: inlineAll,
            impl: {
              newImage: newImage
            }
          };

          function newImage(element) {
            return {
              inline: inline
            };

            function inline(get) {
              if (util.isDataUrl(element.src)) return Promise.resolve();
              return Promise.resolve(element.src).then(get || util.getAndEncode).then(function (data) {
                return util.dataAsUrl(data, util.mimeType(element.src));
              }).then(function (dataUrl) {
                return new Promise(function (resolve, reject) {
                  element.onload = resolve;
                  element.onerror = reject;
                  element.src = dataUrl;
                });
              });
            }
          }

          function inlineAll(node) {
            if (!(node instanceof Element)) return Promise.resolve(node);
            return inlineBackground(node).then(function () {
              if (node instanceof HTMLImageElement) return newImage(node).inline();else return Promise.all(util.asArray(node.childNodes).map(function (child) {
                return inlineAll(child);
              }));
            });

            function inlineBackground(node) {
              var background = node.style.getPropertyValue('background');
              if (!background) return Promise.resolve(node);
              return inliner.inlineAll(background).then(function (inlined) {
                node.style.setProperty('background', inlined, node.style.getPropertyPriority('background'));
              }).then(function () {
                return node;
              });
            }
          }
        }
      })(this);
      /***/

    },

    /***/
    "cLqD":
    /*!***********************************************!*\
      !*** ./src/app/inventory/inventory.module.ts ***!
      \***********************************************/

    /*! exports provided: InventoryPageModule */

    /***/
    function cLqD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "InventoryPageModule", function () {
        return InventoryPageModule;
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


      var _inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./inventory-routing.module */
      "UYnB");
      /* harmony import */


      var _inventory_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./inventory.page */
      "T4Df");
      /* harmony import */


      var _stockprint_stockprint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./stockprint/stockprint.component */
      "lT9S");

      var InventoryPageModule = function InventoryPageModule() {
        _classCallCheck(this, InventoryPageModule);
      };

      InventoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _inventory_routing_module__WEBPACK_IMPORTED_MODULE_5__["InventoryPageRoutingModule"]],
        declarations: [_inventory_page__WEBPACK_IMPORTED_MODULE_6__["InventoryPage"], _stockprint_stockprint_component__WEBPACK_IMPORTED_MODULE_7__["StockprintComponent"]],
        entryComponents: [_stockprint_stockprint_component__WEBPACK_IMPORTED_MODULE_7__["StockprintComponent"]]
      })], InventoryPageModule);
      /***/
    },

    /***/
    "lT9S":
    /*!**************************************************************!*\
      !*** ./src/app/inventory/stockprint/stockprint.component.ts ***!
      \**************************************************************/

    /*! exports provided: StockprintComponent */

    /***/
    function lT9S(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StockprintComponent", function () {
        return StockprintComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_stockprint_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./stockprint.component.html */
      "RD+q");
      /* harmony import */


      var _stockprint_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./stockprint.component.scss */
      "pnSU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var src_app_services_print_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/services/print.service */
      "Bhbv");
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! dom-to-image */
      "cLAn");
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! esc-pos-encoder-ionic */
      "+4vP");
      /* harmony import */


      var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var StockprintComponent = /*#__PURE__*/function () {
        function StockprintComponent(printService, modalCtrl) {
          _classCallCheck(this, StockprintComponent);

          this.printService = printService;
          this.modalCtrl = modalCtrl;
        }

        _createClass(StockprintComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this6 = this;

            setTimeout(function () {
              _this6.pairTo();
            }, 1000);
          }
        }, {
          key: "pairTo",
          value: function pairTo() {
            var _this7 = this;

            console.log("stock" + this.stockList[0].name);
            var node = document.getElementById("imageToPrint"); //html2canvas(node, {

            dom_to_image__WEBPACK_IMPORTED_MODULE_5__["toPng"](node).then(function (dataUrl) {
              //var imgData = canvas.toDataURL("image/png");
              var encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_6___default.a();
              var result = encoder.initialize();
              var img = new Image();
              img.src = dataUrl;

              img.onload = function (e) {
                var ht = Math.ceil(node.offsetHeight / 8) * 8;
                ht = ht + 120;
                result.align('left').image(img, 552, ht, 'threshold', 180).newline().align('center').raw([0x1B, 0x21, 0x20]).line('Thank You!!!').newline().newline().newline().newline().newline().newline().newline().newline().newline().newline().newline().newline();

                _this7.printService.sendToBluetoothPrinter(_this7.profile.selectedPrinter, result.encode());

                console.log('print called');

                _this7.modalCtrl.dismiss();
              };
            })["catch"](function (error) {
              console.error("oops, something went wrong!", error);
              alert(error);
              this.modalCtrl.dismiss();
            });
          }
        }]);

        return StockprintComponent;
      }();

      StockprintComponent.ctorParameters = function () {
        return [{
          type: src_app_services_print_service__WEBPACK_IMPORTED_MODULE_4__["PrintService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"]
        }];
      };

      StockprintComponent.propDecorators = {
        profile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        stockList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      StockprintComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-stockprint',
        template: _raw_loader_stockprint_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_stockprint_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], StockprintComponent);
      /***/
    },

    /***/
    "pnSU":
    /*!****************************************************************!*\
      !*** ./src/app/inventory/stockprint/stockprint.component.scss ***!
      \****************************************************************/

    /*! exports provided: default */

    /***/
    function pnSU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".text-center {\n  text-align: center;\n}\n\n#imageToPrint {\n  position: relative;\n  font-size: 16px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\n}\n\nimg {\n  width: 100px;\n  height: 100px;\n}\n\n.title {\n  font-size: 18px !important;\n  font-weight: bold;\n}\n\n.content-center {\n  text-align: center;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.content-left {\n  text-align: left;\n  font-size: 16px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.content-right {\n  text-align: right;\n  font-size: 16px;\n  margin: 0px;\n  line-height: 1.5;\n}\n\n.title-content-center {\n  text-align: center;\n  font-size: 18px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.title-content-left {\n  text-align: left;\n  font-size: 18px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.line-separator {\n  margin: 10px 0px;\n  border: 1px dashed black;\n}\n\n.bill-details {\n  display: inline-block;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.oneby3-width {\n  width: 75%;\n}\n\n.oneby2-width {\n  width: 50%;\n}\n\n.display-flex {\n  display: flex;\n  text-align: left;\n}\n\n.item-label {\n  width: 50%;\n  padding: 3px 10px;\n}\n\n.item-cus-label {\n  width: 100%;\n  padding: 3px 10px;\n}\n\n.font-14 {\n  font-size: 14px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.no-wrap-text {\n  white-space: nowrap;\n}\n\n.item-value {\n  width: 50%;\n  padding: 3px 10px;\n}\n\n.item-arabic {\n  width: 33.33%;\n  padding: 3px 10px;\n}\n\n.overflow {\n  overflow: auto;\n}\n\n.dummy-img img {\n  width: 55px !important;\n  height: 50px !important;\n}\n\n.m-t-1 {\n  margin-top: 2px;\n}\n\n.letter-space {\n  letter-spacing: 0;\n  word-spacing: normal;\n  /* text-align: center !important; */\n  word-wrap: normal !important;\n}\n\ntable.fixed {\n  width: 100%;\n}\n\ntable th {\n  padding: 5px 0px 15px;\n  text-align: center;\n}\n\ntable thead tr {\n  border-bottom: 1px solid black;\n}\n\ntable tr td {\n  padding: 5px 0px 15px;\n}\n\ntable td:nth-child(4) {\n  width: 40%;\n  text-align: center;\n}\n\ntable td:nth-child(3), td:nth-child(2), td:nth-child(1) {\n  width: 20%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3N0b2NrcHJpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkRBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0Esd0JBQUE7QUFGSjs7QUFJQTtFQUNJLHFCQUFBO0FBREo7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsZ0RBQUE7QUFNSjs7QUFKQTtFQUNJLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFRSjs7QUFOQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtBQVVKOztBQVBJO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQVVSOztBQVBBO0VBQ0ksZUFBQTtBQVVKOztBQVJBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7QUFXSjs7QUFQQTtFQUNJLFdBQUE7QUFVSjs7QUFSRTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFXTjs7QUFURTtFQUNJLDhCQUFBO0FBWU47O0FBVkU7RUFDRSxxQkFBQTtBQWFKOztBQVhFO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBY047O0FBWkU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFlSiIsImZpbGUiOiJzdG9ja3ByaW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jaW1hZ2VUb1ByaW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxNnB4IDtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWYgIWltcG9ydGFudDsgICAgXG4gICAgXG59XG5pbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRlbnQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIFxufVxuXG5cbi5jb250ZW50LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBcbn1cbi5jb250ZW50LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAvLyBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgXG59XG5cbi50aXRsZS1jb250ZW50LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgXG59XG4udGl0bGUtY29udGVudC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgXG59XG5cbi5saW5lLXNlcGFyYXRvciB7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBib3JkZXIgOiAxcHggZGFzaGVkIGJsYWNrO1xufVxuLmJpbGwtZGV0YWlscyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm9uZWJ5My13aWR0aCB7XG4gICAgd2lkdGg6IDc1JTtcbn1cbi5vbmVieTItd2lkdGgge1xuICAgIHdpZHRoOiA1MCU7XG59XG4uZGlzcGxheS1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaXRlbS1sYWJlbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbn1cbi5pdGVtLWN1cy1sYWJlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG59XG4uZm9udC0xNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxufVxuLm5vLXdyYXAtdGV4dHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLml0ZW0tdmFsdWUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG59XG4uaXRlbS1hcmFiaWMge1xuICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG59XG4ub3ZlcmZsb3cge1xuICAgIG92ZXJmbG93OiBhdXRvOyBcbn1cbi5kdW1teS1pbWcge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5tLXQtMSB7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufSBcbi5sZXR0ZXItc3BhY2Uge1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyAqL1xuICAgIHdvcmQtd3JhcDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgXG59XG50YWJsZS5maXhlZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgdGFibGUgdGgge1xuICAgICAgcGFkZGluZzogNXB4IDBweCAxNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIHRhYmxlIHRoZWFkIHRyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxuICB0YWJsZSB0ciB0ZCB7XG4gICAgcGFkZGluZzogNXB4IDBweCAxNXB4O1xuICB9XG4gIHRhYmxlIHRkOm50aC1jaGlsZCg0KSB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIHRhYmxlIHRkOm50aC1jaGlsZCgzKSAsIHRkOm50aC1jaGlsZCgyKSwgdGQ6bnRoLWNoaWxkKDEpe1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=inventory-inventory-module-es5.js.map