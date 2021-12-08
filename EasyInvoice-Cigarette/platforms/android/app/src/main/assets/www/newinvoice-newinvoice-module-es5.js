(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["newinvoice-newinvoice-module"], {
    /***/
    "6VJF":
    /*!*************************************************!*\
      !*** ./src/app/newinvoice/newinvoice.module.ts ***!
      \*************************************************/

    /*! exports provided: NewinvoicePageModule */

    /***/
    function VJF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewinvoicePageModule", function () {
        return NewinvoicePageModule;
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


      var _newinvoice_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./newinvoice-routing.module */
      "clVt");
      /* harmony import */


      var _newinvoice_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./newinvoice.page */
      "pXoo");
      /* harmony import */


      var ionic_selectable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ionic-selectable */
      "8xsl");
      /* harmony import */


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var _print_preview_print_preview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./print-preview/print-preview.component */
      "NKOA");
      /* harmony import */


      var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @techiediaries/ngx-qrcode */
      "hiuq");

      var NewinvoicePageModule = function NewinvoicePageModule() {
        _classCallCheck(this, NewinvoicePageModule);
      };

      NewinvoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _newinvoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewinvoicePageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"], _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_10__["NgxQRCodeModule"]],
        declarations: [_newinvoice_page__WEBPACK_IMPORTED_MODULE_6__["NewinvoicePage"], _print_preview_print_preview_component__WEBPACK_IMPORTED_MODULE_9__["PrintPreviewComponent"]]
      })], NewinvoicePageModule);
      /***/
    },

    /***/
    "NKOA":
    /*!*********************************************************************!*\
      !*** ./src/app/newinvoice/print-preview/print-preview.component.ts ***!
      \*********************************************************************/

    /*! exports provided: PrintPreviewComponent */

    /***/
    function NKOA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PrintPreviewComponent", function () {
        return PrintPreviewComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_print_preview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./print-preview.component.html */
      "yZBn");
      /* harmony import */


      var _print_preview_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./print-preview.component.scss */
      "W+k4");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! esc-pos-encoder-ionic */
      "+4vP");
      /* harmony import */


      var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var html2canvas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! html2canvas */
      "wOnQ");
      /* harmony import */


      var html2canvas__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var src_app_services_db_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/db.service */
      "ajt+");
      /* harmony import */


      var src_app_services_print_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/services/print.service */
      "Bhbv");
      /* harmony import */


      var buffer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! buffer */
      "tjlA");
      /* harmony import */


      var buffer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @techiediaries/ngx-qrcode */
      "hiuq");

      var PrintPreviewComponent = /*#__PURE__*/function () {
        function PrintPreviewComponent(printService, dbService, modalCtrl) {
          _classCallCheck(this, PrintPreviewComponent);

          this.printService = printService;
          this.dbService = dbService;
          this.modalCtrl = modalCtrl;
          this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_10__["NgxQrcodeElementTypes"].URL;
          this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_10__["NgxQrcodeErrorCorrectionLevels"].HIGH;
          this.value = "";
        }

        _createClass(PrintPreviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.value = this.generateQRCodeContent();
            this.datetime = this.invoice.invoiceDate.getDate() + '-' + this.invoice.invoiceDate.getMonth() + '-' + this.invoice.invoiceDate.getFullYear() + ' ' + this.invoice.invoiceDate.getHours() + ':' + this.invoice.invoiceDate.getMinutes() + ':' + this.invoice.invoiceDate.getSeconds();
            this.filterUnselectedProducts().then(function (data) {
              _this2.orderItems = data;

              _this2.getTotalQuantity().then(function (data) {
                setTimeout(function () {
                  _this2.pairTo();
                }, 3000);
              });
            });
          }
        }, {
          key: "filterUnselectedProducts",
          value: function filterUnselectedProducts() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      return _context2.abrupt("return", this.products.filter(function (a) {
                        return a.quantity != null && a.quantity != undefined && a.quantity > 0;
                      }));

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getTotalQuantity",
          value: function getTotalQuantity() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      this.totalQuantity = this.orderItems.reduce(function (accum, item) {
                        return accum + item.quantity;
                      }, 0);

                    case 1:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "pairTo",
          value: function pairTo() {
            var _this3 = this;

            var node = document.getElementById("imageToPrint");
            html2canvas__WEBPACK_IMPORTED_MODULE_6___default()(node, {
              allowTaint: true,
              scrollY: -window.scrollY,
              scrollX: -window.scrollX
            }).then(function (canvas) {
              var imgData = canvas.toDataURL("image/png");
              var encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_5___default.a();
              var result = encoder.initialize();
              var img = new Image();
              img.src = imgData;

              img.onload = function (e) {
                var ht = Math.ceil(node.offsetHeight / 8) * 8;
                ht = ht + 120;
                result.align('left').image(img, 520, ht, 'threshold', 128).newline().align('center').raw([0x1B, 0x21, 0x20]).line('Thank You!!!').newline().newline().newline();
                ;

                _this3.printService.sendToBluetoothPrinter(_this3.profile.selectedPrinter, result.encode());

                console.log('print called');

                _this3.modalCtrl.dismiss();
              };
            })["catch"](function (error) {
              console.error("oops, something went wrong!", error);
              alert(error);
              this.modalCtrl.dismiss();
            });
          }
        }, {
          key: "generateQRCodeContent",
          value: function generateQRCodeContent() {
            var sellerName = this.getTLVForValue("1", this.profile.companyName);
            var vatNumber = this.getTLVForValue("2", this.profile.vatNumber);
            var timestamp = this.getTLVForValue("3", "" + this.invoice.invoiceDate);
            var amt = this.invoice.total - this.invoice.tax;
            var amount = this.getTLVForValue("4", "" + amt);
            var vatAmount = this.getTLVForValue("5", "" + this.invoice.tax);
            var tagsBufArray = [sellerName, vatNumber, timestamp, amount, vatAmount];
            var qrCodeBuf = buffer__WEBPACK_IMPORTED_MODULE_9__["Buffer"].concat(tagsBufArray);
            var qrCodeBase64 = qrCodeBuf.toString('base64');
            return qrCodeBase64;
          }
        }, {
          key: "getTLVForValue",
          value: function getTLVForValue(tagNum, tagValue) {
            var tagBuf = buffer__WEBPACK_IMPORTED_MODULE_9__["Buffer"].from([tagNum]);
            var tagValueLenBuf = buffer__WEBPACK_IMPORTED_MODULE_9__["Buffer"].from([tagValue.length]);
            var tagValueBuf = buffer__WEBPACK_IMPORTED_MODULE_9__["Buffer"].from(tagValue);
            var buffsArray = [tagBuf, tagValueLenBuf, tagValueBuf];
            return buffer__WEBPACK_IMPORTED_MODULE_9__["Buffer"].concat(buffsArray);
          }
        }]);

        return PrintPreviewComponent;
      }();

      PrintPreviewComponent.ctorParameters = function () {
        return [{
          type: src_app_services_print_service__WEBPACK_IMPORTED_MODULE_8__["PrintService"]
        }, {
          type: src_app_services_db_service__WEBPACK_IMPORTED_MODULE_7__["DbService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      PrintPreviewComponent.propDecorators = {
        profile: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        invoice: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        products: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      PrintPreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-print-preview',
        template: _raw_loader_print_preview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_print_preview_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], PrintPreviewComponent);
      /***/
    },

    /***/
    "SQ0/":
    /*!*************************************************!*\
      !*** ./src/app/newinvoice/newinvoice.page.scss ***!
      \*************************************************/

    /*! exports provided: default */

    /***/
    function SQ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "@charset \"UTF-8\";.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }.ngx-datatable [hidden] {\n    display: none !important; }.ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }/*\n  This stylesheet uses scss valiables for most of the colors / background-colors of the table\n  to enable the customization of the displayed table without cloning the stylesheet into the\n  own application.\n\n  To modify table colors, add the following lines to the scss file of your application\n  (this example modifies the color of the selected row - selectionType = single, multi or multiClick):\n\n  $ngx-datatable-selected-active-background: yellow;\n  $ngx-datatable-selected-active-background-hover: rgba(yellow, 0.2);\n\n  @import '~@swimlane/ngx-datatable/index.css';\n  @import '~@swimlane/ngx-datatable/themes/material.scss';\n  @import '~@swimlane/ngx-datatable/assets/icons.css';\n\nThat's all.\n*/@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter::before {\n  content: '\\62';\n}.datatable-icon-collapse::before {\n  content: '\\61';\n}.datatable-icon-expand::before {\n  content: '\\63';\n}.datatable-icon-close::before {\n  content: '\\64';\n}.datatable-icon-up::before {\n  content: '\\65';\n}.datatable-icon-down::before {\n  content: '\\66';\n}.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort::before {\n  content: '\\67';\n}.datatable-icon-done::before {\n  content: '\\68';\n}.datatable-icon-done-all::before {\n  content: '\\69';\n}.datatable-icon-search::before {\n  content: '\\6a';\n}.datatable-icon-pin::before {\n  content: '\\6b';\n}.datatable-icon-add::before {\n  content: '\\6d';\n}.datatable-icon-left::before {\n  content: '\\6f';\n}.datatable-icon-right::before {\n  content: '\\70';\n}.datatable-icon-skip::before {\n  content: '\\71';\n}.datatable-icon-prev::before {\n  content: '\\72';\n}.ngx-datatable.material {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  /**\n  * Shared Styles\n  */\n  /**\n  * Global Row Styles\n  */\n  /**\n  * Header Styles\n  */\n  /**\n  * Body Styles\n  */\n  /**\n  * Footer Styles\n  */\n}.ngx-datatable.material.striped .datatable-row-odd {\n  background: #eee;\n}.ngx-datatable.material.single-selection .datatable-body-row.active, .ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active, .ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active, .ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}.ngx-datatable.material.single-selection .datatable-body-row.active:hover, .ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}.ngx-datatable.material.single-selection .datatable-body-row.active:focus, .ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group {\n  background-color: #eee;\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: linear;\n}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group {\n  background-color: #ddd;\n}.ngx-datatable.material.cell-selection .datatable-body-cell:hover, .ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group {\n  background-color: #eee;\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: linear;\n}.ngx-datatable.material.cell-selection .datatable-body-cell:focus, .ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group {\n  background-color: #ddd;\n}.ngx-datatable.material.cell-selection .datatable-body-cell.active, .ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover, .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus, .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}.ngx-datatable.material .empty-row {\n  height: 50px;\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}.ngx-datatable.material .loading-row {\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}.ngx-datatable.material .datatable-header .datatable-row-left,\n.ngx-datatable.material .datatable-body .datatable-row-left {\n  background-color: #fff;\n  background-position: 100% 0;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==);\n}.ngx-datatable.material .datatable-header .datatable-row-right,\n.ngx-datatable.material .datatable-body .datatable-row-right {\n  background-position: 0 0;\n  background-color: #fff;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==);\n}.ngx-datatable.material .datatable-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}.ngx-datatable.material .datatable-header .datatable-header-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  font-weight: 400;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.54);\n  vertical-align: bottom;\n  font-size: 12px;\n  font-weight: 500;\n}.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper {\n  position: relative;\n}.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after {\n  transition: transform 400ms ease, opacity 400ms ease;\n  opacity: 0.5;\n  transform: scale(1);\n}.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -30px 0 0 -30px;\n  height: 60px;\n  width: 60px;\n  background: #eee;\n  border-radius: 100%;\n  opacity: 1;\n  filter: none;\n  transform: scale(0);\n  z-index: 9999;\n  pointer-events: none;\n}.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle {\n  border-right: none;\n}.ngx-datatable.material .datatable-header .resize-handle {\n  border-right: solid 1px #eee;\n}.ngx-datatable.material .datatable-body {\n  position: relative;\n}.ngx-datatable.material .datatable-body .datatable-row-detail {\n  background: #f5f5f5;\n  padding: 10px;\n}.ngx-datatable.material .datatable-body .datatable-group-header {\n  background: #f5f5f5;\n  border-bottom: solid 1px #d9d8d9;\n  border-top: solid 1px #d9d8d9;\n}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}.ngx-datatable.material .datatable-body .progress-linear {\n  display: block;\n  position: -webkit-sticky;\n  position: sticky;\n  width: 100%;\n  height: 5px;\n  padding: 0;\n  margin: 0;\n  top: 0;\n}.ngx-datatable.material .datatable-body .progress-linear .container {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 5px;\n  transform: translate(0, 0) scale(1, 1);\n  background-color: #aad1f9;\n}.ngx-datatable.material .datatable-body .progress-linear .container .bar {\n  transition: all 0.2s linear;\n  -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: transform 0.2s linear;\n  background-color: #106cc8;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 5px;\n}.ngx-datatable.material .datatable-footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n}.ngx-datatable.material .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}.ngx-datatable.material .datatable-footer .datatable-pager {\n  margin: 0 10px;\n}.ngx-datatable.material .datatable-footer .datatable-pager li {\n  vertical-align: middle;\n}.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a {\n  color: rgba(0, 0, 0, 0.26) !important;\n  background-color: transparent !important;\n}.ngx-datatable.material .datatable-footer .datatable-pager li.active a {\n  background-color: rgba(158, 158, 158, 0.2);\n  font-weight: bold;\n}.ngx-datatable.material .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0 6px;\n  border-radius: 3px;\n  margin: 6px 3px;\n  text-align: center;\n  vertical-align: top;\n  color: rgba(0, 0, 0, 0.54);\n  text-decoration: none;\n  vertical-align: bottom;\n}.ngx-datatable.material .datatable-footer .datatable-pager a:hover {\n  color: rgba(0, 0, 0, 0.75);\n  background-color: rgba(158, 158, 158, 0.2);\n}.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 20px;\n  line-height: 20px;\n  padding: 0 3px;\n}.ngx-datatable.material .datatable-summary-row .datatable-body-row {\n  background-color: #ddd;\n}.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover {\n  background-color: #ddd;\n}.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}/**\n * Checkboxes\n**/.datatable-checkbox {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0;\n}.datatable-checkbox input[type=checkbox] {\n  position: relative;\n  margin: 0 1rem 0 0;\n  cursor: pointer;\n  outline: none;\n}.datatable-checkbox input[type=checkbox]:before {\n  transition: all 0.3s ease-in-out;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #f2f2f2;\n}.datatable-checkbox input[type=checkbox]:checked:before {\n  transform: rotate(-45deg);\n  height: 0.5rem;\n  border-color: #009688;\n  border-top-style: none;\n  border-right-style: none;\n}.datatable-checkbox input[type=checkbox]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  cursor: pointer;\n}/**\n * Progress bar animations\n */@-webkit-keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1);\n  }\n}@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1);\n  }\n}#content {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2NzcyIsIi4uLy4uLy4uL25ld2ludm9pY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixDQ0FoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0I7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRSxFQUFFLENBQ0o7SUFDRSx3QkFBd0IsRUFBRSxDQUM1Qjs7O0lBS0Usc0JBQXNCLEVBQUUsQ0FDMUI7SUFDRSxnQkFBZ0IsRUFBRSxDQUNwQjtJQUNFLGtCQUFrQixFQUFFLENBQ3RCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlDQUFpQyxFQUFFLENBQ3JDO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QixFQUFFLENBQzdCO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDM0I7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFLENBQy9COzs7SUFPRSxhQUFhO0lBQ2IsbUJBQW1CO0lBSW5CLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsQ0FDbEI7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUUsQ0FDcEI7O01BRUUsYUFBYSxFQUFFLENBQ25COztJQUVFLFVBQVUsRUFBRSxDQUNkOzs7O0lBSUUsa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUUsQ0FDbEI7TUFDRSxvQkFBb0I7TUFDcEIsNEJBQTRCLEVBQUUsQ0FDaEM7TUFDRSxrQkFBa0I7TUFDbEIscUJBQXFCLEVBQUUsQ0FDdkI7UUFDRSxlQUFlLEVBQUUsQ0FDbkI7UUFDRSxZQUFZLEVBQUUsQ0FDaEI7UUFDRSxpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixlQUFlLEVBQUUsQ0FDbkI7O1FBRUUscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsY0FBYztRQUNkLGtCQUFrQixFQUFFLENBQ3RCO1FBQ0UsaUJBQWlCLEVBQUUsQ0FDckI7UUFDRSxtQkFBbUIsRUFBRSxDQUN2QjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0Usa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixTQUFTLEVBQUUsQ0FDWDtVQUNFLFFBQVEsRUFBRSxDQUNaO1VBQ0UsT0FBTyxFQUFFLENBQ2I7UUFDRSxlQUFlLEVBQUUsQ0FDdkI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWMsRUFBRSxDQUNoQjtNQUNFLHFCQUFxQixFQUFFLENBQ3pCO01BQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7TUFLRSxhQUFhO01BT2Isc0JBQXNCLEVBQUUsQ0FDMUI7TUFDRSxhQUFhLEVBQUUsQ0FDZjtRQUtFLGFBQWEsRUFBRSxDQUNyQjtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixXQUFXLEVBQUUsQ0FDZjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWE7TUFDYixpQkFBaUIsRUFBRSxDQUNuQjs7UUFFRSxVQUFVO1FBQ1YsU0FBUztRQUNULHFCQUFxQjtRQUNyQixnQkFBZ0IsRUFBRSxDQUNwQjs7UUFFRSxhQUFhLEVBQUUsQ0FDakI7UUFDRSxlQUFlO1FBQ2YscUJBQXFCLEVBQUUsQ0FDekI7UUFDRSxtQkFBbUIsRUFBRSxDQ3JNN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSxDRkVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUFnQztFQUNoQzs0RkFDc0c7RUFDdEcsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQixDQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDLENBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEMsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2QsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0VwQ0E7RUFDRSxnQkFsRHlCO0VBbUR6QixxSEFsRHlCO0VBc0l6Qjs7R0FBQTtFQWtCQTs7R0FBQTtFQW9CQTs7R0FBQTtFQXlEQTs7R0FBQTtFQW9GQTs7R0FBQTtBQ3hTRixDRG9DSTtFQUNFLGdCQXBENkI7QUNrQm5DLENEMENNO0VBRUUseUJBbERtQztFQW1EbkMsV0FsRDhCO0FDU3RDLENENENNO0VBRUUseUJBdER5QztFQXVEekMsV0F0RG9DO0FDVzVDLENEOENNO0VBRUUseUJBMUR5QztFQTJEekMsV0ExRG9DO0FDYTVDLENEb0RNO0VBRUUsc0JBaEZpQztFQWlGakMsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FDbkRSLENEc0RNO0VBRUUsc0JBdkZpQztBQ2tDekMsQ0Q0RE07RUFFRSxzQkE3RnVDO0VBOEZ2QywrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUMzRFIsQ0Q4RE07RUFFRSxzQkFwR3VDO0FDdUMvQyxDRGdFTTtFQUVFLHlCQXRHbUM7RUF1R25DLFdBdEc4QjtBQ3VDdEMsQ0RrRU07RUFFRSx5QkExR3lDO0VBMkd6QyxXQTFHb0M7QUN5QzVDLENEb0VNO0VBRUUseUJBOUd5QztFQStHekMsV0E5R29DO0FDMkM1QyxDRDJFRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDekVKLENENEVFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQzFFSixDRGtGSTs7RUFDRSxzQkEvSnFCO0VBZ0tyQiwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUpBQUE7QUMvRU4sQ0RrRkk7O0VBQ0Usd0JBQUE7RUFDQSxzQkF2S3FCO0VBd0tyQiwyQkFBQTtFQUNBLHlKQUFBO0FDL0VOLENEc0ZFO0VBQ0UsNENBQUE7QUNwRkosQ0RzRkk7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFoSzZCO0VBaUs3QiwwQkFoS3dCO0VBaUt4QixzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3BGTixDRHNGTTtFQUNFLGtCQUFBO0FDcEZSLENEd0ZRO0VBQ0Usb0RBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUN0RlYsQ0QwRk07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ3hGUixDRDRGUTtFQUNFLGtCQUFBO0FDMUZWLENEK0ZJO0VBQ0UsNEJBQUE7QUM3Rk4sQ0RvR0U7RUFDRSxrQkFBQTtBQ2xHSixDRG9HSTtFQUNFLG1CQWhONEI7RUFpTjVCLGFBQUE7QUNsR04sQ0RxR0k7RUFDRSxtQkFuTjhCO0VBb045QixnQ0FBQTtFQUNBLDZCQUFBO0FDbkdOLENEdUdNO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQS9Ob0I7RUFnT3BCLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDckdSLENENEdNO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQTlPb0I7RUErT3BCLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDMUdSLENEOEdJO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtBQzVHTixDRDhHTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFFQSxzQ0FBQTtFQUNBLHlCQUFBO0FDNUdSLENEOEdRO0VBQ0UsMkJBQUE7RUFDQSwwRUFBQTtFQUNBLGtFQUFBO0VBR0EsaUNBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUM5R1YsQ0R1SEU7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQTdSMEI7QUN3SzlCLENEdUhJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNySE4sQ0R3SEk7RUFDRSxjQUFBO0FDdEhOLENEd0hNO0VBQ0Usc0JBQUE7QUN0SFIsQ0R3SFE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0FDdEhWLENEeUhRO0VBQ0UsMENBMVMwQjtFQTJTMUIsaUJBQUE7QUN2SFYsQ0QySE07RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkE3VGdCO0VBOFRoQixxQkFBQTtFQUNBLHNCQUFBO0FDekhSLENEMkhRO0VBQ0UsMEJBalVvQjtFQWtVcEIsMENBalV5QjtBQ3dNbkMsQ0Q2SE07Ozs7RUFJRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDM0hSLENEa0lJO0VBQ0Usc0JBN1U2QjtBQzZNbkMsQ0RrSU07RUFDRSxzQkEvVWlDO0FDK016QyxDRG1JTTtFQUNFLGlCQUFBO0FDaklSLENEdUlBOztFQUFBLENBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ3BJRixDRHNJRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ3BJSixDRHNJSTtFQUdFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDcElOLENEdUlJO0VBSUUseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDcklOLENEd0lJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3RJTixDRDJJQTs7RUFBQSxDQUdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esd0NBQUE7RUN4SUY7RUQySUE7SUFDRSxVQUFBO0lBQ0EsdUNBQUE7RUN6SUY7QUFDRixDRGdJQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHdDQUFBO0VDeElGO0VEMklBO0lBQ0UsVUFBQTtJQUNBLHVDQUFBO0VDeklGO0FBQ0YsQ0FqVkE7RUFDSSxrQkFBQTtBQW1WSiIsImZpbGUiOiJuZXdpbnZvaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZSc7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdCcpO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgIHVybCgnZm9udHMvZGF0YS10YWJsZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS5zdmcjZGF0YS10YWJsZScpIGZvcm1hdCgnc3ZnJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuW2RhdGEtaWNvbl06OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgY29udGVudDogYXR0cihkYXRhLWljb24pO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3NePSdkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlLFxuW2NsYXNzKj0nIGRhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1maWx0ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYyJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNvbGxhcHNlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1leHBhbmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNsb3NlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi11cDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjUnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG93bjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydC11bnNldDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nyc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lLWFsbDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjknO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2VhcmNoOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2YSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1waW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZiJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWFkZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tbGVmdDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcmlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcwJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNraXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXByZXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcyJztcbn1cbiIsIi5uZ3gtZGF0YXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBIb3Jpem9udGFsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIEhlYWRlciBIZWlnaHQgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCByb3cgaGVpZ2h0IGFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogU2hhcmVkIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEhlYWRlciBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBCb2R5IFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEZvb3RlciBTdHlsZXNcbiAgICovIH1cbiAgLm5neC1kYXRhdGFibGUgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAubmd4LWRhdGF0YWJsZSAqLFxuICAubmd4LWRhdGF0YWJsZSAqOmJlZm9yZSxcbiAgLm5neC1kYXRhdGFibGUgKjphZnRlciB7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsLnZpcnR1YWxpemVkIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLWhvcnogLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LXJvdyxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93O1xuICAgIC1tb3otZmxleC1mbG93OiByb3c7XG4gICAgLW1zLWZsZXgtZmxvdzogcm93O1xuICAgIC1vLWZsZXgtZmxvdzogcm93O1xuICAgIGZsZXgtZmxvdzogcm93OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjI1OyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICB6LWluZGV4OiA5OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5zb3J0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwubG9uZ3ByZXNzIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogbW92ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuc29ydC1idG4ge1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGN1cnNvcjogZXctcmVzaXplOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnJlc2l6ZWFibGU6aG92ZXIgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmhvdmVyIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21MZWZ0IHtcbiAgICAgICAgICByaWdodDogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21SaWdodCB7XG4gICAgICAgICAgbGVmdDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXRlbXBsYXRlLXdyYXAge1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWRldGFpbCB7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgNDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDYwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSAyMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA4MCU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLmRpc2FibGVkIGEge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4iLCIvKlxuICBUaGlzIHN0eWxlc2hlZXQgdXNlcyBzY3NzIHZhbGlhYmxlcyBmb3IgbW9zdCBvZiB0aGUgY29sb3JzIC8gYmFja2dyb3VuZC1jb2xvcnMgb2YgdGhlIHRhYmxlXG4gIHRvIGVuYWJsZSB0aGUgY3VzdG9taXphdGlvbiBvZiB0aGUgZGlzcGxheWVkIHRhYmxlIHdpdGhvdXQgY2xvbmluZyB0aGUgc3R5bGVzaGVldCBpbnRvIHRoZVxuICBvd24gYXBwbGljYXRpb24uXG5cbiAgVG8gbW9kaWZ5IHRhYmxlIGNvbG9ycywgYWRkIHRoZSBmb2xsb3dpbmcgbGluZXMgdG8gdGhlIHNjc3MgZmlsZSBvZiB5b3VyIGFwcGxpY2F0aW9uXG4gICh0aGlzIGV4YW1wbGUgbW9kaWZpZXMgdGhlIGNvbG9yIG9mIHRoZSBzZWxlY3RlZCByb3cgLSBzZWxlY3Rpb25UeXBlID0gc2luZ2xlLCBtdWx0aSBvciBtdWx0aUNsaWNrKTpcblxuICAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZDogeWVsbG93O1xuICAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1ob3ZlcjogcmdiYSh5ZWxsb3csIDAuMik7XG5cbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyc7XG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2Nzcyc7XG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzJztcblxuVGhhdCdzIGFsbC5cbiovXG5cbi8vIGNvbW1vbiBkYXRhdGFibGUgY29sb3JzXG4kbmd4LWRhdGF0YWJsZS1iYWNrZ3JvdW5kOiAjZmZmICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kOiAjZWVlICFkZWZhdWx0O1xuXG4vLyBkZWZhdWx0IHJvdyBhbmQgY2VsbCBiYWNrZ3JvdW5kIGNvbG9yc1xuJG5neC1kYXRhdGFibGUtZGVmYXVsdC1iYWNrZ3JvdW5kOiAjZmZmICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtZGVmYXVsdC1iYWNrZ3JvdW5kLWhvdmVyOiAjZWVlICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtZGVmYXVsdC1iYWNrZ3JvdW5kLWZvY3VzOiAjZGRkICFkZWZhdWx0O1xuXG4vLyBkZWZhdWx0IGJhY2tncm91bmQgY29sb3JzIGZvciBjZWxsIHNlbGVjdGlvbiBzdHlsZVxuJG5neC1kYXRhdGFibGUtY2VsbHNlbGVjdGlvbi1iYWNrZ3JvdW5kLWhvdmVyOiAjZWVlICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtY2VsbHNlbGVjdGlvbi1iYWNrZ3JvdW5kLWZvY3VzOiAjZGRkICFkZWZhdWx0O1xuXG4vLyBiYWNrZ3JvdW5kIGFuZCB0ZXh0IGNvbG9ycyBmb3Igc2VsZWN0ZWQgY2VsbCAvIHJvd1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ6ICMzMDRmZmUgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3I6ICNmZmYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1ob3ZlcjogIzE5M2FlNCAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1ob3ZlcjogI2ZmZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWZvY3VzOiAjMjA0MWVmICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWZvY3VzOiAjZmZmICFkZWZhdWx0O1xuXG4vLyBjb2xvcnMgZm9yIGhlYWRlciBlbGVtZW50c1xuJGRhdGF0YWJsZS1oZWFkZXItY2VsbC1iYWNrZ3JvdW5kOiAjZmZmICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1oZWFkZXItY2VsbC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtaGVhZGVyLWJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMikgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWhlYWRlci1yZXNpemUtaGFuZGxlLWNvbG9yOiAjZWVlICFkZWZhdWx0O1xuXG4vLyBjb2xvcnMgZm9yIHRhYmxlIGJvZHkgZWxlbWVudHNcbiRkYXRhdGFibGUtcm93LWRldGFpbC1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1ib2R5LWNlbGwtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NykgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYm9yZGVyLXRvcC1jb2xvcjogI2Q5ZDhkOSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJvcmRlci1ib3R0b20tY29sb3I6ICNkOWQ4ZDkgIWRlZmF1bHQ7XG5cbi8vIGNvbG9ycyBmb3IgZm9vdGVyIGVsZW1lbnRzXG4kZGF0YXRhYmxlLWZvb3Rlci1jZWxsLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1mb290ZXItYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWNvbG9yLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuNzUpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMikgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWRpc2FibGVkLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItYWN0aXZlLWJhY2tncm91bmQ6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKSAhZGVmYXVsdDtcblxuLy8gY29sb3JzIGZvciBzdW1tYXJ5IHJvdyBlbGVtZW50c1xuJGRhdGF0YWJsZS1zdW1tYXJ5LXJvdy1iYWNrZ3JvdW5kOiAjZGRkICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1zdW1tYXJ5LXJvdy1iYWNrZ3JvdW5kLWhvdmVyOiAjZGRkICFkZWZhdWx0O1xuXG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCB7XG4gIGJhY2tncm91bmQ6ICRuZ3gtZGF0YXRhYmxlLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6ICRuZ3gtZGF0YXRhYmxlLWJveC1zaGFkb3c7XG5cbiAgJi5zdHJpcGVkIHtcbiAgICAuZGF0YXRhYmxlLXJvdy1vZGQge1xuICAgICAgYmFja2dyb3VuZDogJG5neC1kYXRhdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kO1xuICAgIH1cbiAgfVxuXG4gICYuc2luZ2xlLXNlbGVjdGlvbixcbiAgJi5tdWx0aS1zZWxlY3Rpb24sXG4gICYubXVsdGktY2xpY2stc2VsZWN0aW9uIHtcbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgICYuYWN0aXZlLFxuICAgICAgJi5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZDtcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmU6aG92ZXIsXG4gICAgICAmLmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWhvdmVyO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZTpmb2N1cyxcbiAgICAgICYuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtZm9jdXM7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItZm9jdXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpub3QoLmNlbGwtc2VsZWN0aW9uKSB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyxcbiAgICAgICY6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQtZm9jdXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5jZWxsLXNlbGVjdGlvbiB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgJjpob3ZlcixcbiAgICAgICY6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1jZWxsc2VsZWN0aW9uLWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtY2VsbHNlbGVjdGlvbi1iYWNrZ3JvdW5kLWZvY3VzO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSxcbiAgICAgICYuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmhvdmVyLFxuICAgICAgJi5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1ob3ZlcjtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmU6Zm9jdXMsXG4gICAgICAmLmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWZvY3VzO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWZvY3VzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBTaGFyZWQgU3R5bGVzXG5cdCAqL1xuICAuZW1wdHktcm93IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgfVxuXG4gIC5sb2FkaW5nLXJvdyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgfVxuXG4gIC8qKlxuXHQgKiBHbG9iYWwgUm93IFN0eWxlc1xuXHQgKi9cbiAgLmRhdGF0YWJsZS1oZWFkZXIsXG4gIC5kYXRhdGFibGUtYm9keSB7XG4gICAgLmRhdGF0YWJsZS1yb3ctbGVmdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1iYWNrZ3JvdW5kO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSUhXUFNrTmVTQm1KaFRRVnRiaUROQ2dBU2FnSUl1Slg4T2dBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWJhY2tncm91bmQ7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFCQ0FZQUFBRDVQQS9OQUFBQUZrbEVRVlFJMTJQUWtOZGkxVlRRNWdiU3drQXNEUUFSTEFJR3RPU0ZVQUFBQUFCSlJVNUVya0pnZ2c9PSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG5cdCAqIEhlYWRlciBTdHlsZXNcblx0ICovXG4gIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGRhdGF0YWJsZS1oZWFkZXItYm9yZGVyLWJvdHRvbS1jb2xvcjtcblxuICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1oZWFkZXItY2VsbC1iYWNrZ3JvdW5kO1xuICAgICAgY29sb3I6ICRkYXRhdGFibGUtaGVhZGVyLWNlbGwtY29sb3I7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAmLmxvbmdwcmVzcyB7XG4gICAgICAgIC5kcmFnZ2FibGU6OmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgZWFzZSwgb3BhY2l0eSA0MDBtcyBlYXNlO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcmFnZ2FibGU6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbjogLTMwcHggMCAwIC0zMHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuXG4gICAgICAmLmRyYWdnaW5nIHtcbiAgICAgICAgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkYXRhdGFibGUtaGVhZGVyLXJlc2l6ZS1oYW5kbGUtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLyoqXG5cdCAqIEJvZHkgU3R5bGVzXG5cdCAqL1xuICAuZGF0YXRhYmxlLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5kYXRhdGFibGUtcm93LWRldGFpbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZGF0YXRhYmxlLXJvdy1kZXRhaWwtYmFja2dyb3VuZDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgLmRhdGF0YWJsZS1ncm91cC1oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZDogJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYmFja2dyb3VuZDtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1ib3JkZXItYm90dG9tLWNvbG9yO1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJvcmRlci10b3AtY29sb3I7XG4gICAgfVxuXG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLWJvZHktY2VsbC1jb2xvcjtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgLy8gY2VsbCBhY3RpdmUgY2xhc3NcbiAgICAgICAgLy8gJi5hY3RpdmUge1xuICAgICAgICAvLyAgYmFja2dyb3VuZDogIzA4MjllMFxuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgICAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLWJvZHktY2VsbC1jb2xvcjtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLWxpbmVhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRvcDogMDtcblxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDIwOSwgMjQ5KTtcblxuICAgICAgICAuYmFyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgMTA4LCAyMDApO1xuXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBGb290ZXIgU3R5bGVzXG5cdCAqL1xuICAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRkYXRhdGFibGUtZm9vdGVyLWJvcmRlci10b3AtY29sb3I7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICRkYXRhdGFibGUtZm9vdGVyLWNlbGwtY29sb3I7XG5cbiAgICAucGFnZS1jb3VudCB7XG4gICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMS4ycmVtO1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAmLmRpc2FibGVkIGEge1xuICAgICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWRpc2FibGVkLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1wYWdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSBhIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIG1hcmdpbjogNnB4IDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1wYWdlci1jb2xvcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWNvbG9yLWhvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtcGFnZXItYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdW1tYXJ5IHJvdyBzdHlsZXNcbiAgLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQtaG92ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2tib3hlc1xuKiovXG4uZGF0YXRhYmxlLWNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuXG4gIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2YyZjJmMjtcbiAgICB9XG5cbiAgICAmOmNoZWNrZWQ6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBQcm9ncmVzcyBiYXIgYW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHF1ZXJ5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSkgc2NhbGUoMC4zLCAxKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAsIDEpO1xuICB9XG59XG4iLCJAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcclxuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9tYXRlcmlhbC5zY3NzJztcclxuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MnO1xyXG5cclxuI2NvbnRlbnQge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59Il19 */";
      /***/
    },

    /***/
    "W+k4":
    /*!***********************************************************************!*\
      !*** ./src/app/newinvoice/print-preview/print-preview.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function WK4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".text-center {\n  text-align: center;\n}\n\n#imageToPrint {\n  position: relative;\n}\n\nimg {\n  width: 100px;\n  height: 100px;\n}\n\n.content-center {\n  text-align: center;\n  font-size: 14px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.content-left {\n  text-align: left;\n  font-size: 14px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.content-right {\n  text-align: right;\n  font-size: 14px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.title-content-center {\n  text-align: center;\n  font-size: 18px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.title-content-left {\n  text-align: left;\n  font-size: 18px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.line-separator {\n  margin: 10px 0px;\n  border: 1px dashed black;\n}\n\n.bill-details {\n  display: inline-block;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.oneby3-width {\n  width: 75%;\n}\n\n.oneby2-width {\n  width: 50%;\n}\n\n.display-flex {\n  display: flex;\n  text-align: left;\n}\n\n.item-label {\n  width: 33.33%;\n  padding: 3px 10px;\n}\n\n.no-wrap-text {\n  white-space: nowrap;\n}\n\n.item-value {\n  width: 33.33%;\n  padding: 3px 10px;\n}\n\n.item-arabic {\n  width: 33.33%;\n  padding: 3px 10px;\n}\n\n.overflow {\n  overflow: auto;\n}\n\n.dummy-img img {\n  width: 55px !important;\n  height: 50px !important;\n}\n\n.m-t-1 {\n  margin-top: 2px;\n}\n\n.letter-space {\n  letter-spacing: 0;\n  word-spacing: normal;\n  /* text-align: center !important; */\n  word-wrap: normal !important;\n}\n\ntable.fixed {\n  width: 100%;\n}\n\ntable th {\n  padding: 5px 0px 15px;\n  text-align: center;\n}\n\ntable thead tr {\n  border-bottom: 1px solid black;\n}\n\ntable tr td {\n  padding: 5px 0px 15px;\n}\n\ntable td:nth-child(4) {\n  width: 40%;\n  text-align: center;\n}\n\ntable td:nth-child(3), td:nth-child(2), td:nth-child(1) {\n  width: 20%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ByaW50LXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBREE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUlKOztBQUZBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFGQTtFQUNJLGdCQUFBO0VBQ0Esd0JBQUE7QUFLSjs7QUFIQTtFQUNJLHFCQUFBO0FBTUo7O0FBSkE7RUFDSSxXQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0FBUUo7O0FBTkE7RUFDSSxVQUFBO0FBU0o7O0FBUEE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFVSjs7QUFSQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQVdKOztBQVRBO0VBQ0ksbUJBQUE7QUFZSjs7QUFWQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQWFKOztBQVhBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0FBY0o7O0FBWkE7RUFDSSxjQUFBO0FBZUo7O0FBWkk7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FBZVI7O0FBWkE7RUFDSSxlQUFBO0FBZUo7O0FBYkE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSw0QkFBQTtBQWdCSjs7QUFkQTtFQUNJLFdBQUE7QUFpQko7O0FBZkU7RUFDSSxxQkFBQTtFQUNBLGtCQUFBO0FBa0JOOztBQWhCRTtFQUNJLDhCQUFBO0FBbUJOOztBQWpCRTtFQUNFLHFCQUFBO0FBb0JKOztBQWxCRTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQXFCTjs7QUFuQkU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFzQkoiLCJmaWxlIjoicHJpbnQtcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWNlbnRlciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuI2ltYWdlVG9QcmludCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuaW1nIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmNvbnRlbnQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcblxyXG4uY29udGVudC1sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBtYXJnaW46IDBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcbi5jb250ZW50LXJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLnRpdGxlLWNvbnRlbnQtY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuLnRpdGxlLWNvbnRlbnQtbGVmdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLmxpbmUtc2VwYXJhdG9yIHtcclxuICAgIG1hcmdpbjogMTBweCAwcHg7XHJcbiAgICBib3JkZXIgOiAxcHggZGFzaGVkIGJsYWNrO1xyXG59XHJcbi5iaWxsLWRldGFpbHMge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcbi5mdWxsLXdpZHRoIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5vbmVieTMtd2lkdGgge1xyXG4gICAgd2lkdGg6IDc1JTtcclxufVxyXG4ub25lYnkyLXdpZHRoIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuLmRpc3BsYXktZmxleCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uaXRlbS1sYWJlbCB7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbn1cclxuLm5vLXdyYXAtdGV4dHtcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuLml0ZW0tdmFsdWUge1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG59XHJcbi5pdGVtLWFyYWJpYyB7XHJcbiAgICB3aWR0aDogMzMuMzMlO1xyXG4gICAgcGFkZGluZzogM3B4IDEwcHg7XHJcbn1cclxuLm92ZXJmbG93IHtcclxuICAgIG92ZXJmbG93OiBhdXRvOyBcclxufVxyXG4uZHVtbXktaW1nIHtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDU1cHggIWltcG9ydGFudDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHggIWltcG9ydGFudDtcclxuICAgIH1cclxufVxyXG4ubS10LTEge1xyXG4gICAgbWFyZ2luLXRvcDogMnB4O1xyXG59IFxyXG4ubGV0dGVyLXNwYWNlIHtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgd29yZC1zcGFjaW5nOiBub3JtYWw7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsgKi9cclxuICAgIHdvcmQtd3JhcDogbm9ybWFsICFpbXBvcnRhbnQ7XHJcbn1cclxudGFibGUuZml4ZWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIHRhYmxlIHRoIHtcclxuICAgICAgcGFkZGluZzogNXB4IDBweCAxNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIHRhYmxlIHRoZWFkIHRyIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIH1cclxuICB0YWJsZSB0ciB0ZCB7XHJcbiAgICBwYWRkaW5nOiA1cHggMHB4IDE1cHg7XHJcbiAgfVxyXG4gIHRhYmxlIHRkOm50aC1jaGlsZCg0KSB7XHJcbiAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgdGFibGUgdGQ6bnRoLWNoaWxkKDMpICwgdGQ6bnRoLWNoaWxkKDIpLCB0ZDpudGgtY2hpbGQoMSl7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "clVt":
    /*!*********************************************************!*\
      !*** ./src/app/newinvoice/newinvoice-routing.module.ts ***!
      \*********************************************************/

    /*! exports provided: NewinvoicePageRoutingModule */

    /***/
    function clVt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewinvoicePageRoutingModule", function () {
        return NewinvoicePageRoutingModule;
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


      var _newinvoice_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./newinvoice.page */
      "pXoo");

      var routes = [{
        path: '',
        component: _newinvoice_page__WEBPACK_IMPORTED_MODULE_3__["NewinvoicePage"]
      }];

      var NewinvoicePageRoutingModule = function NewinvoicePageRoutingModule() {
        _classCallCheck(this, NewinvoicePageRoutingModule);
      };

      NewinvoicePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewinvoicePageRoutingModule);
      /***/
    },

    /***/
    "pXoo":
    /*!***********************************************!*\
      !*** ./src/app/newinvoice/newinvoice.page.ts ***!
      \***********************************************/

    /*! exports provided: NewinvoicePage */

    /***/
    function pXoo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewinvoicePage", function () {
        return NewinvoicePage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_newinvoice_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./newinvoice.page.html */
      "ptrQ");
      /* harmony import */


      var _newinvoice_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./newinvoice.page.scss */
      "SQ0/");
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


      var _validation_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../validation.service */
      "oxX3");
      /* harmony import */


      var sprintf_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! sprintf-js */
      "4Z/T");
      /* harmony import */


      var sprintf_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sprintf_js__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! esc-pos-encoder-ionic */
      "+4vP");
      /* harmony import */


      var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var html2canvas__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! html2canvas */
      "wOnQ");
      /* harmony import */


      var html2canvas__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(html2canvas__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var buffer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! buffer */
      "tjlA");
      /* harmony import */


      var buffer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _print_preview_print_preview_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./print-preview/print-preview.component */
      "NKOA");

      var NewinvoicePage = /*#__PURE__*/function () {
        function NewinvoicePage(dbService, tostService, navCtrl, printService, validationService, datepipe, modalController) {
          _classCallCheck(this, NewinvoicePage);

          this.dbService = dbService;
          this.tostService = tostService;
          this.navCtrl = navCtrl;
          this.printService = printService;
          this.validationService = validationService;
          this.datepipe = datepipe;
          this.modalController = modalController;
          this.showTable = false;
        }

        _createClass(NewinvoicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.invoice = {
              id: null,
              invoiceNumber: "",
              invoiceDate: new Date(),
              invoiceDateString: "",
              amountPaid: null,
              balanceAmount: null,
              customer: {
                id: null,
                code: null,
                name: "",
                itemList: null,
                nameInArabic: "",
                contactPersonName: "",
                contactPersonNameInArabic: "",
                buildingNumber: "",
                street: "",
                streetInArabic: "",
                city: "",
                cityInArabic: "",
                district: "",
                districtInArabic: "",
                country: "",
                countryInArabic: "",
                pobox: "",
                postalCode: "",
                phoneNumber: "",
                mobile: "",
                email: "",
                vatNumber: "",
                crNumber: "",
                creditLimit: null,
                balance: null
              },
              invoiceItems: [],
              total: null,
              tax: null
            };
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this4 = this;

            this.showTable = false;
            this.applyVat = true;
            this.dbService.getProfile().then(function (data) {
              _this4.profile = data;
            });
            this.resetInvoiceForm();
          }
        }, {
          key: "filterProducts",
          value: function filterProducts(evt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var searchTerm;
              return regeneratorRuntime.wrap(function _callee3$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      this.product = {
                        id: null,
                        name: "",
                        nameInArabic: "",
                        unitPrice: null,
                        billingUnitPrice: null,
                        quantity: null,
                        balanceQuantity: null,
                        displayBalanceQuantity: null,
                        selected: null,
                        purchaseUnitPrice: null
                      };
                      this.products = this.productsBackup;
                      searchTerm = evt.srcElement.value;

                      if (searchTerm) {
                        _context4.next = 5;
                        break;
                      }

                      return _context4.abrupt("return");

                    case 5:
                      this.products = this.products.filter(function (currentProduct) {
                        if (currentProduct.name && searchTerm) {
                          return currentProduct.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                        }
                      });

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "productSelected",
          value: function productSelected(evt) {
            this.selectedProducts = evt.value;
            this.invoice.invoiceItems = this.selectedProducts;
            if (this.invoice.invoiceItems != null && this.invoice.invoiceItems != undefined && this.invoice.invoiceItems.length > 0) this.showTable = true;else this.showTable = false;
          }
        }, {
          key: "resetInvoiceForm",
          value: function resetInvoiceForm() {
            var _this5 = this;

            this.productsBackup = new Array();
            this.products = new Array();
            this.dbService.getAllInventories().then(function (data) {
              _this5.inventoryList = data;
            });
            this.invoice = {
              id: null,
              invoiceNumber: "",
              invoiceDate: new Date(),
              invoiceDateString: "",
              amountPaid: null,
              balanceAmount: null,
              customer: {
                id: null,
                code: null,
                name: "",
                itemList: null,
                nameInArabic: "",
                contactPersonName: "",
                contactPersonNameInArabic: "",
                buildingNumber: "",
                street: "",
                streetInArabic: "",
                city: "",
                cityInArabic: "",
                district: "",
                districtInArabic: "",
                country: "",
                countryInArabic: "",
                pobox: "",
                postalCode: "",
                phoneNumber: "",
                mobile: "",
                email: "",
                vatNumber: "",
                crNumber: "",
                creditLimit: null,
                balance: null
              },
              invoiceItems: [],
              total: null,
              tax: null
            };
            this.dbService.incrementInvoiceNumber().then(function (data) {
              if (data == null || data == undefined) {
                data = 1;
              }

              _this5.invoice.invoiceNumber = _this5.dbService.codeConstant + _this5.dbService.invoiceCodeConstant + data;
            });
            this.invoice.invoiceItems = new Array();
            this.selectedProducts = new Array(); //this.dbService.getInvoiceNumber().then(data=>{
            //this.invoice.invoiceNumber=data;
            //});

            this.dbService.getAllCustomers().then(function (data) {
              return _this5.customerList = data;
            });
          }
        }, {
          key: "populateCustomerProducts",
          value: function populateCustomerProducts() {
            var _this6 = this;

            this.products = [];
            this.productsBackup = [];

            if (this.invoice.customer != null && this.invoice.customer != undefined && this.invoice.customer.itemList != null && this.invoice.customer.itemList != undefined) {
              console.log("populateCustomerProducts");
              var inventory;

              var _iterator = _createForOfIteratorHelper(this.invoice.customer.itemList),
                  _step;

              try {
                var _loop = function _loop() {
                  var inv = _step.value;
                  index = _this6.inventoryList.findIndex(function (i) {
                    return i.id == inv.id;
                  });

                  if (index != null && index != undefined && index >= 0) {
                    inventory = {
                      id: inv.id,
                      name: inv.name,
                      nameInArabic: inv.nameInArabic,
                      unitPrice: inv.unitPrice,
                      billingUnitPrice: null,
                      quantity: null,
                      InvoiceItem: [],
                      purchasePrice: inv.purchasePrice,
                      balanceQuantity: _this6.inventoryList[index].quantity
                    };

                    _this6.products.push(inventory);

                    _this6.productsBackup.push(inventory); //this.invoice.invoiceItems.push(inventory);

                  }
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var index;

                  _loop();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              if (this.products != null && this.products != undefined && this.products.length > 0) this.showTable = true;else this.showTable = false;
            }
          }
        }, {
          key: "calculateInvoiceTotal",
          value: function calculateInvoiceTotal(item) {
            this.invoice.total = 0;
            this.invoice.tax = 0;

            if (undefined == this.invoice.total || null == this.invoice.total) {
              this.invoice.total = 0;
            }

            var _iterator2 = _createForOfIteratorHelper(this.products),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var itm = _step2.value;

                if (itm.quantity != null && itm.quantity != undefined && itm.quantity > 0) {
                  this.invoice.total = this.invoice.total + itm.unitPrice * itm.quantity;
                }
              } //apply vat

            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }

            if (this.applyVat) {
              if (this.profile != null && this.profile != undefined && this.profile.vat != null && this.profile.vat != undefined) {
                this.invoice.tax = this.profile.vat * this.invoice.total / 100;
                this.invoice.total = this.invoice.total + this.invoice.tax;
              }
            }

            if (this.invoice.customer.balance == null || this.invoice.customer.balance == undefined) {
              this.invoice.customer.balance = 0;
            }

            this.invoice.balanceAmount = this.invoice.customer.balance + this.invoice.total - this.invoice.amountPaid;
            this.invoice.balanceAmount = Math.round((this.invoice.balanceAmount + Number.EPSILON) * 100) / 100;
            this.invoice.total = Math.round((this.invoice.total + Number.EPSILON) * 100) / 100;

            if (item != null && item != undefined) {
              var index = this.products.findIndex(function (i) {
                return i.id == item.id;
              });
              if (index != null && index != undefined && index >= 0) this.products[index].displayBalanceQuantity = this.products[index].balanceQuantity - item.quantity;
            }
          }
        }, {
          key: "submitBill",
          value: function submitBill() {
            var _this7 = this;

            this.invoice.invoiceItems = this.products.filter(function (a) {
              return a.quantity != null && a.quantity != undefined && a.quantity > 0;
            });
            this.dbService.createOrUpdateInvoice(this.invoice).then(function (data) {
              _this7.dbService.getAllInventories().then(function (stocks) {
                var stockList = stocks;

                var _iterator3 = _createForOfIteratorHelper(_this7.invoice.invoiceItems),
                    _step3;

                try {
                  var _loop2 = function _loop2() {
                    var itm = _step3.value;
                    index = stockList.findIndex(function (i) {
                      return i.id == itm.id;
                    });
                    stockList[index].quantity = stockList[index].quantity - itm.quantity;
                  };

                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var index;

                    _loop2();
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }

                _this7.dbService.saveAllInventories(stockList).then(function (res) {
                  var index = _this7.customerList.findIndex(function (i) {
                    return i.id == _this7.invoice.customer.id;
                  });

                  _this7.invoice.customer.balance = _this7.invoice.balanceAmount;

                  _this7.dbService.UpdateCustomer(_this7.invoice.customer);

                  _this7.tostService.presentToast("Bill submitted successfully"); //this.navCtrl.navigateRoot('invoice');

                });
              });
            })["catch"](function (reason) {
              _this7.tostService.presentToast("Failed to submit bill");

              console.log(reason);
            });
          }
        }, {
          key: "generateQRCodeContent",
          value: function generateQRCodeContent() {
            var sellerName = this.getTLVForValue("1", this.profile.companyName);
            var vatNumber = this.getTLVForValue("2", this.profile.vatNumber);
            var timestamp = this.getTLVForValue("3", "" + this.invoice.invoiceDate);
            var amt = this.invoice.total - this.invoice.tax;
            var amount = this.getTLVForValue("4", "" + amt);
            var vatAmount = this.getTLVForValue("5", "" + this.invoice.tax);
            var tagsBufArray = [sellerName, vatNumber, timestamp, amount, vatAmount];
            var qrCodeBuf = buffer__WEBPACK_IMPORTED_MODULE_13__["Buffer"].concat(tagsBufArray);
            var qrCodeBase64 = qrCodeBuf.toString('base64');
            return qrCodeBase64;
          }
        }, {
          key: "getTLVForValue",
          value: function getTLVForValue(tagNum, tagValue) {
            var tagBuf = buffer__WEBPACK_IMPORTED_MODULE_13__["Buffer"].from([tagNum]);
            var tagValueLenBuf = buffer__WEBPACK_IMPORTED_MODULE_13__["Buffer"].from([tagValue.length]);
            var tagValueBuf = buffer__WEBPACK_IMPORTED_MODULE_13__["Buffer"].from(tagValue);
            var buffsArray = [tagBuf, tagValueLenBuf, tagValueBuf];
            return buffer__WEBPACK_IMPORTED_MODULE_13__["Buffer"].concat(buffsArray);
          }
        }, {
          key: "getFormatedContent",
          value: function getFormatedContent() {
            var encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_10___default.a();
            var result = "";
            var datetime = this.invoice.invoiceDate.getDate() + '-' + this.invoice.invoiceDate.getMonth() + '-' + this.invoice.invoiceDate.getFullYear() + ' ' + this.invoice.invoiceDate.getHours() + ':' + this.invoice.invoiceDate.getMinutes() + ':' + this.invoice.invoiceDate.getSeconds();
            var billDetails = encoder.initialize().bold(true).raw([0x1B, 0x21, 0x20]).align('center').line(this.profile.companyName).bold(true).newline().raw([0x1B, 0x21, 0x03]).align('left').bold(true).line('VAT # : ' + this.profile.vatNumber + ',' + 'CR # : ' + this.profile.crNumber).align('left').bold(true).line('---------------------------------------------------------------').bold(true).raw([0x1B, 0x21, 0x20]).align('center').bold(true).line('VAT INVOICE').bold(true).raw([0x1B, 0x21, 0x03]).align('left').text(this.invoice.invoiceNumber + '            ' + datetime).newline().align('left').bold(true).line('---------------------------------------------------------------').bold(true).align('left').bold(true).line('Bill To').align('left').bold(true).line('---------------------------------------------------------------').bold(true).align('left').line(this.invoice.customer.name).align('left').line(this.invoice.customer.street + ',' + this.invoice.customer.city + ',' + this.invoice.customer.district).align('left').line('VAT #: ' + this.invoice.customer.vatNumber + '  CR#: ' + this.invoice.customer.crNumber).align('left').line('Mob: ' + this.invoice.customer.mobile).align('left').bold(true).line('---------------------------------------------------------------').align('left').line(Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%s %-25.22s %6s %7s %16s', '#', 'Item', 'Qty', 'Rate', 'Amount')).bold(true).align('left').bold(true).line('---------------------------------------------------------------');
            var counter = 1;
            var totalQuantity = 0;
            var itemDetails = "";

            var _iterator4 = _createForOfIteratorHelper(this.invoice.invoiceItems),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var itm = _step4.value;
                totalQuantity += itm.quantity;
                var temp = encoder.initialize().align('left').line(Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%d %-13.13s %9.0f %8.2f %11.2f ', counter, itm.name, itm.quantity, itm.unitPrice, itm.unitPrice * itm.quantity));
                itemDetails += temp;
                counter = counter + 1;
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            var footer = encoder.initialize().align('left').bold(true).line('------------------------------------------------').bold(true).raw([0x1B, 0x21, 0x08]).align('left').line('Qty : ' + totalQuantity).align('right').line('Total Invoice Value(Excl. VAT) : ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%6.2f ', this.invoice.total - this.invoice.tax)).align('right').line('VAT Payable in SAR(' + this.profile.vat + '%) : ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%6.2f ', this.invoice.tax)).align('right').line('Gross Amount in SAR : ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%6.2f ', this.invoice.total)).align('left').bold(true).line('------------------------------------------------').bold(true).align('right').line('Previous Balance : ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%6.2f', this.invoice.balanceAmount + this.invoice.amountPaid)).align('right').line('Paid Amount : ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%6.2f', this.invoice.amountPaid)).raw([0x1B, 0x21, 0x20]).align('left').line('Balance Amount: ' + Object(sprintf_js__WEBPACK_IMPORTED_MODULE_9__["sprintf"])('%6.2f', this.invoice.balanceAmount)).raw([0x1B, 0x21, 0x08]).align('left').bold(true).line('------------------------------------------------').bold(true);
            var qrcode = encoder.initialize().raw([0x1B, 0x21, 0x03]).align('center').qrcode(this.generateQRCodeContent(), 1, 4, 'h').newline().align('center').raw([0x1B, 0x21, 0x20]).line('Thank You!!!').newline().newline().newline();
            ; // result+=billDetails+itemDetails;

            result = encoder.initialize().encode(); //line(billDetails).line(itemDetails).encode();
            //sprintf('%d %-20.20s %9.2f %3.0f %11.2f ',counter, itm.name, itm.unitPrice, itm.quantity, itm.unitPrice*itm.quantity);

            return result;
          }
        }, {
          key: "printPreview",
          value: function printPreview() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var modal;
              return regeneratorRuntime.wrap(function _callee4$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.modalController.create({
                        component: _print_preview_print_preview_component__WEBPACK_IMPORTED_MODULE_14__["PrintPreviewComponent"],
                        componentProps: {
                          profile: this.profile,
                          invoice: this.invoice,
                          products: this.products
                        }
                      });

                    case 2:
                      modal = _context5.sent;
                      modal.present();

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "printBill",
          value: function printBill() {
            //   try{
            //   let result=this.getFormatedContent(); 
            //    this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter,result);
            //   return this.navCtrl.navigateRoot('invoice');
            //  }catch(reason){
            //     this.tostService.presentToast("Print Failed"+reason)
            //   }
            //this.getImage();
            this.printPreview();
          }
        }, {
          key: "getImage",
          value: function getImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var _this8 = this;

              var node, img;
              return regeneratorRuntime.wrap(function _callee5$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      node = document.getElementById("content");
                      img = new Image();
                      html2canvas__WEBPACK_IMPORTED_MODULE_12___default()(node, {
                        allowTaint: true,
                        useCORS: true,
                        logging: false
                      }).then(function (canvas) {
                        var imgData = canvas.toDataURL("image/png");
                        var encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_10___default.a();
                        var result = encoder.initialize();
                        var img = new Image();
                        img.src = imgData;

                        img.onload = function (e) {
                          var ht = Math.ceil(node.offsetHeight / 8) * 8;
                          ht = ht + 120;
                          result.align('left').image(img, 520, ht, 'threshold', 128);

                          _this8.printService.sendToBluetoothPrinter(_this8.profile.selectedPrinter, result.encode());

                          console.log('print called');
                        };
                      })["catch"](function (error) {
                        console.error("oops, something went wrong!", error);
                      });

                    case 3:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee5);
            }));
          }
        }, {
          key: "numericOnly",
          value: function numericOnly(evt) {
            return this.validationService.numericOnly(evt);
          }
        }, {
          key: "showInvoice",
          value: function showInvoice() {
            this.navCtrl.navigateForward("invoice");
          }
        }, {
          key: "getDateFormated",
          value: function getDateFormated(todayDate) {
            return todayDate.getFullYear() + '-' + (todayDate.getMonth() + 1) + '-' + todayDate.getDate();
          }
        }, {
          key: "getTimeFormated",
          value: function getTimeFormated(todayDate) {
            return ' ' + todayDate.getHours() + ':' + todayDate.getMinutes() + ':' + todayDate.getSeconds();
          }
        }]);

        return NewinvoicePage;
      }();

      NewinvoicePage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_5__["DbService"]
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_7__["ToastserviceService"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _services_print_service__WEBPACK_IMPORTED_MODULE_6__["PrintService"]
        }, {
          type: _validation_service__WEBPACK_IMPORTED_MODULE_8__["ValidationService"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__["DatePipe"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }];
      };

      NewinvoicePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-newinvoice',
        template: _raw_loader_newinvoice_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_newinvoice_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NewinvoicePage);
      /***/
    },

    /***/
    "ptrQ":
    /*!***************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newinvoice/newinvoice.page.html ***!
      \***************************************************************************************/

    /*! exports provided: default */

    /***/
    function ptrQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-menu-button menu=\"mainmenu\"> \r\n\r\n      </ion-menu-button>\r\n    </ion-buttons> \r\n   \r\n    <ion-title>New Invoice</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div>\r\n    <div class=\"row\"></div>\r\n   \r\n    <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%;\" (ionChange)=\"populateCustomerProducts()\" [(ngModel)]=\"invoice.customer\" placeholder=\"Select Customer\">\r\n        <ion-select-option *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\r\n    </ion-select>\r\n<!--<ion-item>\r\n  <ion-label>Product</ion-label>\r\n  <ionic-selectable style=\"height: 30px;\"\r\n    \r\n    [(ngModel)]=\"product\"\r\n    [items]=\"products\"\r\n    itemValueField=\"name\"\r\n    itemTextField=\"name\"\r\n    [canSearch]=\"true\"\r\n    (onChange)=\"productSelected($event)\"\r\n    [isMultiple]=\"true\"\r\n    \r\n    >\r\n  </ionic-selectable>\r\n</ion-item>  -->\r\n    <div id=\"content\" >\r\n      <table *ngIf=\"showTable\" border=\"none\" style=\"width: 94%;margin-left: 2%;margin-right: 5%;margin-top: 2%; color: black;background-color: aliceblue; text-align: center;\">\r\n        <tr style=\"border: none; color: white; background-color: lightslategray;\">\r\n          <td style=\"width: 40%;text-align: left;\">\r\n            Item\r\n          </td>\r\n          <td style=\"text-align: left;\">\r\n            Price\r\n          </td>\r\n          <td style=\"text-align: left;\">\r\n            A.Qty\r\n          </td>\r\n          <td style=\"text-align: left;\">\r\n            Qty\r\n          </td>\r\n          \r\n          <td style=\"text-align: left;\">\r\n            Amount\r\n          </td>\r\n        </tr>\r\n        <tr *ngFor= \"let item of products\" style=\"border: none;\">\r\n          <td style=\"text-align: left;\"><ion-input  disabled [(ngModel)]=\"item.name\" ></ion-input></td>\r\n          <td style=\"text-align: right;\"><ion-input disabled (ionChange)=\"calculateInvoiceTotal(item)\" type=\"number\" [(ngModel)]=\"item.unitPrice\" ></ion-input></td>\r\n          <td style=\"text-align: right;\"><ion-input disabled type=\"number\" [(ngModel)]=\"item.displayBalanceQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\r\n          <td style=\"text-align: right;\"><ion-input (ionChange)=\"calculateInvoiceTotal(item)\" type=\"number\" [(ngModel)]=\"item.quantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\r\n          <td style=\"text-align: right;\"><ion-input disabled type=\"number\" [(ngModel)]=\"item.unitPrice*item.quantity\" ></ion-input></td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n  \r\n    <ion-grid>\r\n      <ion-row>\r\n        <ion-item style=\"width: 100%;\">\r\n        <ion-col size=\"6\">\r\n          <ion-label >Apply VAT</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\">\r\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"applyVat\" (ionChange)=\"calculateInvoiceTotal()\" ></ion-checkbox>\r\n        </ion-col>\r\n      </ion-item>\r\n      </ion-row>\r\n        \r\n      <ion-row>\r\n    <ion-item style=\"width: 100%;\"> \r\n          <ion-col size=\"6\">\r\n            <ion-label >Total</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\" *ngIf=\"applyVat==true\">\r\n            <ion-label style=\"float: right;\">{{(invoice.total-invoice.tax) | number : '1.2-2'}}</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\" *ngIf=\"applyVat==false\">\r\n            <ion-label style=\"float: right;\">{{invoice.total |    number : '1.2-2'}}</ion-label>\r\n          </ion-col>\r\n        </ion-item>\r\n      </ion-row>  \r\n      <ion-row>\r\n        <ion-item style=\"width: 100%;\">\r\n        <ion-col size=\"6\">\r\n          <ion-label >Tax</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" *ngIf=\"applyVat==true\">\r\n          <ion-label style=\"float: right;\">{{(invoice.tax | number : '1.2-2')}}</ion-label>\r\n        </ion-col>\r\n        <ion-col size=\"6\" *ngIf=\"applyVat==false\">\r\n          <ion-label style=\"float: right;\">{{(0 | number : '1.2-2')}}</ion-label>\r\n        </ion-col>\r\n      </ion-item>\r\n    </ion-row>  \r\n        \r\n\r\n\r\n\r\n    <ion-row>\r\n      <ion-item style=\"width: 100%;\">\r\n      <ion-col size=\"6\">\r\n        <ion-label >Gross Total(Incl. Tax)               </ion-label>\r\n      </ion-col>\r\n      <ion-col size=\"6\">\r\n        <ion-label style=\"float: right;\">{{invoice.total | number : '1.2-2'}}</ion-label>\r\n      </ion-col>\r\n    </ion-item>\r\n    </ion-row>\r\n\r\n        \r\n        \r\n        <ion-row>\r\n        <ion-item style=\"width: 100%;\"> \r\n          <ion-col size=\"6\">\r\n            <ion-label text-wrap>Balance Amount(Incl. current invoice)</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-label style=\"float: right;\">{{invoice.balanceAmount | number : '1.2-2'}}</ion-label>\r\n          </ion-col>\r\n        </ion-item>\r\n        </ion-row>\r\n\r\n        <ion-row>\r\n          <ion-col size=\"12\">\r\n            <ion-item style=\"margin-left: 0px; padding-left: 0px;\" >\r\n              <ion-label style=\"margin-left: 0px;\">Amount Paid</ion-label>\r\n              <ion-input class=\"ion-text-right\" type=\"number\" [(ngModel)]=\"invoice.amountPaid\" (ionChange)=\"calculateInvoiceTotal()\"></ion-input>\r\n            </ion-item>\r\n          </ion-col>\r\n        </ion-row>\r\n        \r\n        <!-- <ion-row>\r\n          <ion-col size=\"6\">\r\n            <ion-label color=\"primary\">Invoice Number</ion-label>\r\n          </ion-col>\r\n          <ion-col size=\"6\">\r\n            <ion-label >{{invoice.invoiceNumber}}</ion-label>\r\n          </ion-col>\r\n        </ion-row>   -->\r\n      \r\n    </ion-grid>\r\n    <div style=\"display: none;\">\r\n      <ion-datetime value=\"invoice.invoiceDate\" ></ion-datetime>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n<ion-footer>\r\n  <ion-row style=\"float:right\">\r\n    <ion-col >\r\n    <ion-button  color=\"primary\" (click)=\"submitBill()\">\r\n      <ion-icon name=\"checkmark\"></ion-icon>\r\n     \r\n      \r\n    </ion-button>\r\n    <ion-button color=\"primary\" (click)=\"printBill()\">\r\n      <ion-icon name=\"print\"></ion-icon>\r\n    </ion-button>\r\n  </ion-col>\r\n  </ion-row>\r\n\r\n</ion-footer>";
      /***/
    },

    /***/
    "wOnQ":
    /*!******************************************************!*\
      !*** ./node_modules/html2canvas/dist/html2canvas.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function wOnQ(module, exports, __webpack_require__) {
      /*!
       * html2canvas 1.3.3 <https://html2canvas.hertzen.com>
       * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
       * Released under MIT License
       */
      (function (global, factory) {
        true ? module.exports = factory() : undefined;
      })(this, function () {
        'use strict';
        /*! *****************************************************************************
        Copyright (c) Microsoft Corporation.
          Permission to use, copy, modify, and/or distribute this software for any
        purpose with or without fee is hereby granted.
          THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
        REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
        AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
        INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
        LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
        OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
        PERFORMANCE OF THIS SOFTWARE.
        ***************************************************************************** */

        /* global Reflect, Promise */

        var _extendStatics = function extendStatics(d, b) {
          _extendStatics = Object.setPrototypeOf || {
            __proto__: []
          } instanceof Array && function (d, b) {
            d.__proto__ = b;
          } || function (d, b) {
            for (var p in b) {
              if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
            }
          };

          return _extendStatics(d, b);
        };

        function __extends(d, b) {
          if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");

          _extendStatics(d, b);

          function __() {
            this.constructor = d;
          }

          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        }

        var _assign = function __assign() {
          _assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];

              for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
              }
            }

            return t;
          };

          return _assign.apply(this, arguments);
        };

        function __awaiter(thisArg, _arguments, P, generator) {
          function adopt(value) {
            return value instanceof P ? value : new P(function (resolve) {
              resolve(value);
            });
          }

          return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) {
              try {
                step(generator.next(value));
              } catch (e) {
                reject(e);
              }
            }

            function rejected(value) {
              try {
                step(generator["throw"](value));
              } catch (e) {
                reject(e);
              }
            }

            function step(result) {
              result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }

            step((generator = generator.apply(thisArg, _arguments || [])).next());
          });
        }

        function __generator(thisArg, body) {
          var _ = {
            label: 0,
            sent: function sent() {
              if (t[0] & 1) throw t[1];
              return t[1];
            },
            trys: [],
            ops: []
          },
              f,
              y,
              t,
              g;
          return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
          }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
            return this;
          }), g;

          function verb(n) {
            return function (v) {
              return step([n, v]);
            };
          }

          function step(op) {
            if (f) throw new TypeError("Generator is already executing.");

            while (_) {
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];

                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;

                  case 4:
                    _.label++;
                    return {
                      value: op[1],
                      done: false
                    };

                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;

                  case 7:
                    op = _.ops.pop();

                    _.trys.pop();

                    continue;

                  default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                      _ = 0;
                      continue;
                    }

                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                      _.label = op[1];
                      break;
                    }

                    if (op[0] === 6 && _.label < t[1]) {
                      _.label = t[1];
                      t = op;
                      break;
                    }

                    if (t && _.label < t[2]) {
                      _.label = t[2];

                      _.ops.push(op);

                      break;
                    }

                    if (t[2]) _.ops.pop();

                    _.trys.pop();

                    continue;
                }

                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            }

            if (op[0] & 5) throw op[1];
            return {
              value: op[0] ? op[1] : void 0,
              done: true
            };
          }
        }

        function __spreadArray(to, from, pack) {
          if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
            if (ar || !(i in from)) {
              if (!ar) ar = Array.prototype.slice.call(from, 0, i);
              ar[i] = from[i];
            }
          }
          return to.concat(ar || from);
        }

        var Bounds =
        /** @class */
        function () {
          function Bounds(left, top, width, height) {
            this.left = left;
            this.top = top;
            this.width = width;
            this.height = height;
          }

          Bounds.prototype.add = function (x, y, w, h) {
            return new Bounds(this.left + x, this.top + y, this.width + w, this.height + h);
          };

          Bounds.fromClientRect = function (context, clientRect) {
            return new Bounds(clientRect.left + context.windowBounds.left, clientRect.top + context.windowBounds.top, clientRect.width, clientRect.height);
          };

          Bounds.fromDOMRectList = function (context, domRectList) {
            var domRect = domRectList[0];
            return domRect ? new Bounds(domRect.x + context.windowBounds.left, domRect.y + context.windowBounds.top, domRect.width, domRect.height) : Bounds.EMPTY;
          };

          Bounds.EMPTY = new Bounds(0, 0, 0, 0);
          return Bounds;
        }();

        var parseBounds = function parseBounds(context, node) {
          return Bounds.fromClientRect(context, node.getBoundingClientRect());
        };

        var parseDocumentSize = function parseDocumentSize(document) {
          var body = document.body;
          var documentElement = document.documentElement;

          if (!body || !documentElement) {
            throw new Error("Unable to get document size");
          }

          var width = Math.max(Math.max(body.scrollWidth, documentElement.scrollWidth), Math.max(body.offsetWidth, documentElement.offsetWidth), Math.max(body.clientWidth, documentElement.clientWidth));
          var height = Math.max(Math.max(body.scrollHeight, documentElement.scrollHeight), Math.max(body.offsetHeight, documentElement.offsetHeight), Math.max(body.clientHeight, documentElement.clientHeight));
          return new Bounds(0, 0, width, height);
        };
        /*
         * css-line-break 2.0.1 <https://github.com/niklasvh/css-line-break#readme>
         * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
         * Released under MIT License
         */


        var toCodePoints$1 = function toCodePoints$1(str) {
          var codePoints = [];
          var i = 0;
          var length = str.length;

          while (i < length) {
            var value = str.charCodeAt(i++);

            if (value >= 0xd800 && value <= 0xdbff && i < length) {
              var extra = str.charCodeAt(i++);

              if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
              } else {
                codePoints.push(value);
                i--;
              }
            } else {
              codePoints.push(value);
            }
          }

          return codePoints;
        };

        var fromCodePoint$1 = function fromCodePoint$1() {
          var codePoints = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
          }

          if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
          }

          var length = codePoints.length;

          if (!length) {
            return '';
          }

          var codeUnits = [];
          var index = -1;
          var result = '';

          while (++index < length) {
            var codePoint = codePoints[index];

            if (codePoint <= 0xffff) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 0x10000;
              codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
            }

            if (index + 1 === length || codeUnits.length > 0x4000) {
              result += String.fromCharCode.apply(String, codeUnits);
              codeUnits.length = 0;
            }
          }

          return result;
        };

        var chars$2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Use a lookup table to find the index.

        var lookup$2 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);

        for (var i$2 = 0; i$2 < chars$2.length; i$2++) {
          lookup$2[chars$2.charCodeAt(i$2)] = i$2;
        }

        var decode$1 = function decode$1(base64) {
          var bufferLength = base64.length * 0.75,
              len = base64.length,
              i,
              p = 0,
              encoded1,
              encoded2,
              encoded3,
              encoded4;

          if (base64[base64.length - 1] === '=') {
            bufferLength--;

            if (base64[base64.length - 2] === '=') {
              bufferLength--;
            }
          }

          var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
          var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

          for (i = 0; i < len; i += 4) {
            encoded1 = lookup$2[base64.charCodeAt(i)];
            encoded2 = lookup$2[base64.charCodeAt(i + 1)];
            encoded3 = lookup$2[base64.charCodeAt(i + 2)];
            encoded4 = lookup$2[base64.charCodeAt(i + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }

          return buffer;
        };

        var polyUint16Array$1 = function polyUint16Array$1(buffer) {
          var length = buffer.length;
          var bytes = [];

          for (var i = 0; i < length; i += 2) {
            bytes.push(buffer[i + 1] << 8 | buffer[i]);
          }

          return bytes;
        };

        var polyUint32Array$1 = function polyUint32Array$1(buffer) {
          var length = buffer.length;
          var bytes = [];

          for (var i = 0; i < length; i += 4) {
            bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
          }

          return bytes;
        };
        /** Shift size for getting the index-2 table offset. */


        var UTRIE2_SHIFT_2$1 = 5;
        /** Shift size for getting the index-1 table offset. */

        var UTRIE2_SHIFT_1$1 = 6 + 5;
        /**
         * Shift size for shifting left the index array values.
         * Increases possible data size with 16-bit index values at the cost
         * of compactability.
         * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
         */

        var UTRIE2_INDEX_SHIFT$1 = 2;
        /**
         * Difference between the two shift sizes,
         * for getting an index-1 offset from an index-2 offset. 6=11-5
         */

        var UTRIE2_SHIFT_1_2$1 = UTRIE2_SHIFT_1$1 - UTRIE2_SHIFT_2$1;
        /**
         * The part of the index-2 table for U+D800..U+DBFF stores values for
         * lead surrogate code _units_ not code _points_.
         * Values for lead surrogate code _points_ are indexed with this portion of the table.
         * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
         */

        var UTRIE2_LSCP_INDEX_2_OFFSET$1 = 0x10000 >> UTRIE2_SHIFT_2$1;
        /** Number of entries in a data block. 32=0x20 */

        var UTRIE2_DATA_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_2$1;
        /** Mask for getting the lower bits for the in-data-block offset. */

        var UTRIE2_DATA_MASK$1 = UTRIE2_DATA_BLOCK_LENGTH$1 - 1;
        var UTRIE2_LSCP_INDEX_2_LENGTH$1 = 0x400 >> UTRIE2_SHIFT_2$1;
        /** Count the lengths of both BMP pieces. 2080=0x820 */

        var UTRIE2_INDEX_2_BMP_LENGTH$1 = UTRIE2_LSCP_INDEX_2_OFFSET$1 + UTRIE2_LSCP_INDEX_2_LENGTH$1;
        /**
         * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
         * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
         */

        var UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 = UTRIE2_INDEX_2_BMP_LENGTH$1;
        var UTRIE2_UTF8_2B_INDEX_2_LENGTH$1 = 0x800 >> 6;
        /* U+0800 is the first code point after 2-byte UTF-8 */

        /**
         * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
         * Variable length, for code points up to highStart, where the last single-value range starts.
         * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
         * (For 0x100000 supplementary code points U+10000..U+10ffff.)
         *
         * The part of the index-2 table for supplementary code points starts
         * after this index-1 table.
         *
         * Both the index-1 table and the following part of the index-2 table
         * are omitted completely if there is only BMP data.
         */

        var UTRIE2_INDEX_1_OFFSET$1 = UTRIE2_UTF8_2B_INDEX_2_OFFSET$1 + UTRIE2_UTF8_2B_INDEX_2_LENGTH$1;
        /**
         * Number of index-1 entries for the BMP. 32=0x20
         * This part of the index-1 table is omitted from the serialized form.
         */

        var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 = 0x10000 >> UTRIE2_SHIFT_1$1;
        /** Number of entries in an index-2 block. 64=0x40 */

        var UTRIE2_INDEX_2_BLOCK_LENGTH$1 = 1 << UTRIE2_SHIFT_1_2$1;
        /** Mask for getting the lower bits for the in-index-2-block offset. */

        var UTRIE2_INDEX_2_MASK$1 = UTRIE2_INDEX_2_BLOCK_LENGTH$1 - 1;

        var slice16$1 = function slice16$1(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }

          return new Uint16Array(Array.prototype.slice.call(view, start, end));
        };

        var slice32$1 = function slice32$1(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }

          return new Uint32Array(Array.prototype.slice.call(view, start, end));
        };

        var createTrieFromBase64$1 = function createTrieFromBase64$1(base64) {
          var buffer = decode$1(base64);
          var view32 = Array.isArray(buffer) ? polyUint32Array$1(buffer) : new Uint32Array(buffer);
          var view16 = Array.isArray(buffer) ? polyUint16Array$1(buffer) : new Uint16Array(buffer);
          var headerLength = 24;
          var index = slice16$1(view16, headerLength / 2, view32[4] / 2);
          var data = view32[5] === 2 ? slice16$1(view16, (headerLength + view32[4]) / 2) : slice32$1(view32, Math.ceil((headerLength + view32[4]) / 4));
          return new Trie$1(view32[0], view32[1], view32[2], view32[3], index, data);
        };

        var Trie$1 =
        /** @class */
        function () {
          function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
          }
          /**
           * Get the value for a code point as stored in the Trie.
           *
           * @param codePoint the code point
           * @return the value
           */


          Trie.prototype.get = function (codePoint) {
            var ix;

            if (codePoint >= 0) {
              if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                // Ordinary BMP code point, excluding leading surrogates.
                // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                // 16 bit data is stored in the index array itself.
                ix = this.index[codePoint >> UTRIE2_SHIFT_2$1];
                ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                return this.data[ix];
              }

              if (codePoint <= 0xffff) {
                // Lead Surrogate Code Point.  A Separate index section is stored for
                // lead surrogate code units and code points.
                //   The main index has the code unit data.
                //   For this function, we need the code point data.
                // Note: this expression could be refactored for slightly improved efficiency, but
                //       surrogate code points will be so rare in practice that it's not worth it.
                ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET$1 + (codePoint - 0xd800 >> UTRIE2_SHIFT_2$1)];
                ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                return this.data[ix];
              }

              if (codePoint < this.highStart) {
                // Supplemental code point, use two-level lookup.
                ix = UTRIE2_INDEX_1_OFFSET$1 - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH$1 + (codePoint >> UTRIE2_SHIFT_1$1);
                ix = this.index[ix];
                ix += codePoint >> UTRIE2_SHIFT_2$1 & UTRIE2_INDEX_2_MASK$1;
                ix = this.index[ix];
                ix = (ix << UTRIE2_INDEX_SHIFT$1) + (codePoint & UTRIE2_DATA_MASK$1);
                return this.data[ix];
              }

              if (codePoint <= 0x10ffff) {
                return this.data[this.highValueIndex];
              }
            } // Fall through.  The code point is outside of the legal range of 0..0x10ffff.


            return this.errorValue;
          };

          return Trie;
        }();

        var base64$1 = 'KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==';
        /* @flow */

        var LETTER_NUMBER_MODIFIER = 50; // Non-tailorable Line Breaking Classes

        var BK = 1; //  Cause a line break (after)

        var CR$1 = 2; //  Cause a line break (after), except between CR and LF

        var LF$1 = 3; //  Cause a line break (after)

        var CM = 4; //  Prohibit a line break between the character and the preceding character

        var NL = 5; //  Cause a line break (after)

        var WJ = 7; //  Prohibit line breaks before and after

        var ZW = 8; //  Provide a break opportunity

        var GL = 9; //  Prohibit line breaks before and after

        var SP = 10; // Enable indirect line breaks

        var ZWJ$1 = 11; // Prohibit line breaks within joiner sequences
        // Break Opportunities

        var B2 = 12; //  Provide a line break opportunity before and after the character

        var BA = 13; //  Generally provide a line break opportunity after the character

        var BB = 14; //  Generally provide a line break opportunity before the character

        var HY = 15; //  Provide a line break opportunity after the character, except in numeric context

        var CB = 16; //   Provide a line break opportunity contingent on additional information
        // Characters Prohibiting Certain Breaks

        var CL = 17; //  Prohibit line breaks before

        var CP = 18; //  Prohibit line breaks before

        var EX = 19; //  Prohibit line breaks before

        var IN = 20; //  Allow only indirect line breaks between pairs

        var NS = 21; //  Allow only indirect line breaks before

        var OP = 22; //  Prohibit line breaks after

        var QU = 23; //  Act like they are both opening and closing
        // Numeric Context

        var IS = 24; //  Prevent breaks after any and before numeric

        var NU = 25; //  Form numeric expressions for line breaking purposes

        var PO = 26; //  Do not break following a numeric expression

        var PR = 27; //  Do not break in front of a numeric expression

        var SY = 28; //  Prevent a break before; and allow a break after
        // Other Characters

        var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID

        var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters

        var CJ = 31; //  Treat as NS or ID for strict or normal breaking.

        var EB = 32; //  Do not break from following Emoji Modifier

        var EM = 33; //  Do not break from preceding Emoji Base

        var H2 = 34; //  Form Korean syllable blocks

        var H3 = 35; //  Form Korean syllable blocks

        var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic

        var ID = 37; //  Break before or after; except in some numeric context

        var JL = 38; //  Form Korean syllable blocks

        var JV = 39; //  Form Korean syllable blocks

        var JT = 40; //  Form Korean syllable blocks

        var RI$1 = 41; //  Keep pairs together. For pairs; break before and after other classes

        var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis

        var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions

        var ea_OP = [0x2329, 0xff08];
        var BREAK_MANDATORY = '!';
        var BREAK_NOT_ALLOWED$1 = '×';
        var BREAK_ALLOWED$1 = '÷';
        var UnicodeTrie$1 = createTrieFromBase64$1(base64$1);
        var ALPHABETICS = [AL, HL];
        var HARD_LINE_BREAKS = [BK, CR$1, LF$1, NL];
        var SPACE$1 = [SP, ZW];
        var PREFIX_POSTFIX = [PR, PO];
        var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE$1);
        var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
        var HYPHEN = [HY, BA];

        var codePointsToCharacterClasses = function codePointsToCharacterClasses(codePoints, lineBreak) {
          if (lineBreak === void 0) {
            lineBreak = 'strict';
          }

          var types = [];
          var indices = [];
          var categories = [];
          codePoints.forEach(function (codePoint, index) {
            var classType = UnicodeTrie$1.get(codePoint);

            if (classType > LETTER_NUMBER_MODIFIER) {
              categories.push(true);
              classType -= LETTER_NUMBER_MODIFIER;
            } else {
              categories.push(false);
            }

            if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
              // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
              if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                indices.push(index);
                return types.push(CB);
              }
            }

            if (classType === CM || classType === ZWJ$1) {
              // LB10 Treat any remaining combining mark or ZWJ as AL.
              if (index === 0) {
                indices.push(index);
                return types.push(AL);
              } // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
              // the base character in all of the following rules. Treat ZWJ as if it were CM.


              var prev = types[index - 1];

              if (LINE_BREAKS.indexOf(prev) === -1) {
                indices.push(indices[index - 1]);
                return types.push(prev);
              }

              indices.push(index);
              return types.push(AL);
            }

            indices.push(index);

            if (classType === CJ) {
              return types.push(lineBreak === 'strict' ? NS : ID);
            }

            if (classType === SA) {
              return types.push(AL);
            }

            if (classType === AI) {
              return types.push(AL);
            } // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
            // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
            // to take into account the actual line breaking properties for these characters.


            if (classType === XX) {
              if (codePoint >= 0x20000 && codePoint <= 0x2fffd || codePoint >= 0x30000 && codePoint <= 0x3fffd) {
                return types.push(ID);
              } else {
                return types.push(AL);
              }
            }

            types.push(classType);
          });
          return [indices, types, categories];
        };

        var isAdjacentWithSpaceIgnored = function isAdjacentWithSpaceIgnored(a, b, currentIndex, classTypes) {
          var current = classTypes[currentIndex];

          if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
            var i = currentIndex;

            while (i <= classTypes.length) {
              i++;
              var next = classTypes[i];

              if (next === b) {
                return true;
              }

              if (next !== SP) {
                break;
              }
            }
          }

          if (current === SP) {
            var i = currentIndex;

            while (i > 0) {
              i--;
              var prev = classTypes[i];

              if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;

                while (n <= classTypes.length) {
                  n++;
                  var next = classTypes[n];

                  if (next === b) {
                    return true;
                  }

                  if (next !== SP) {
                    break;
                  }
                }
              }

              if (prev !== SP) {
                break;
              }
            }
          }

          return false;
        };

        var previousNonSpaceClassType = function previousNonSpaceClassType(currentIndex, classTypes) {
          var i = currentIndex;

          while (i >= 0) {
            var type = classTypes[i];

            if (type === SP) {
              i--;
            } else {
              return type;
            }
          }

          return 0;
        };

        var _lineBreakAtIndex = function _lineBreakAtIndex(codePoints, classTypes, indicies, index, forbiddenBreaks) {
          if (indicies[index] === 0) {
            return BREAK_NOT_ALLOWED$1;
          }

          var currentIndex = index - 1;

          if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
            return BREAK_NOT_ALLOWED$1;
          }

          var beforeIndex = currentIndex - 1;
          var afterIndex = currentIndex + 1;
          var current = classTypes[currentIndex]; // LB4 Always break after hard line breaks.
          // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.

          var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
          var next = classTypes[afterIndex];

          if (current === CR$1 && next === LF$1) {
            return BREAK_NOT_ALLOWED$1;
          }

          if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
            return BREAK_MANDATORY;
          } // LB6 Do not break before hard line breaks.


          if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          } // LB7 Do not break before spaces or zero width space.


          if (SPACE$1.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          } // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.


          if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
            return BREAK_ALLOWED$1;
          } // LB8a Do not break after a zero width joiner.


          if (UnicodeTrie$1.get(codePoints[currentIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
          } // zwj emojis


          if ((current === EB || current === EM) && UnicodeTrie$1.get(codePoints[afterIndex]) === ZWJ$1) {
            return BREAK_NOT_ALLOWED$1;
          } // LB11 Do not break before or after Word joiner and related characters.


          if (current === WJ || next === WJ) {
            return BREAK_NOT_ALLOWED$1;
          } // LB12 Do not break after NBSP and related characters.


          if (current === GL) {
            return BREAK_NOT_ALLOWED$1;
          } // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.


          if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
            return BREAK_NOT_ALLOWED$1;
          } // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.


          if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          } // LB14 Do not break after ‘[’, even after spaces.


          if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
            return BREAK_NOT_ALLOWED$1;
          } // LB15 Do not break within ‘”[’, even with intervening spaces.


          if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          } // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.


          if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          } // LB17 Do not break within ‘——’, even with intervening spaces.


          if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
            return BREAK_NOT_ALLOWED$1;
          } // LB18 Break after spaces.


          if (current === SP) {
            return BREAK_ALLOWED$1;
          } // LB19 Do not break before or after quotation marks, such as ‘ ” ’.


          if (current === QU || next === QU) {
            return BREAK_NOT_ALLOWED$1;
          } // LB20 Break before and after unresolved CB.


          if (next === CB || current === CB) {
            return BREAK_ALLOWED$1;
          } // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.


          if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
            return BREAK_NOT_ALLOWED$1;
          } // LB21a Don't break after Hebrew + Hyphen.


          if (before === HL && HYPHEN.indexOf(current) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          } // LB21b Don’t break between Solidus and Hebrew letters.


          if (current === SY && next === HL) {
            return BREAK_NOT_ALLOWED$1;
          } // LB22 Do not break before ellipsis.


          if (next === IN) {
            return BREAK_NOT_ALLOWED$1;
          } // LB23 Do not break between digits and letters.


          if (ALPHABETICS.indexOf(next) !== -1 && current === NU || ALPHABETICS.indexOf(current) !== -1 && next === NU) {
            return BREAK_NOT_ALLOWED$1;
          } // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.


          if (current === PR && [ID, EB, EM].indexOf(next) !== -1 || [ID, EB, EM].indexOf(current) !== -1 && next === PO) {
            return BREAK_NOT_ALLOWED$1;
          } // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.


          if (ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1 || PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          } // LB25 Do not break between the following pairs of classes relevant to numbers:


          if ( // (PR | PO) × ( OP | HY )? NU
          [PR, PO].indexOf(current) !== -1 && (next === NU || [OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU) || // ( OP | HY ) × NU
          [OP, HY].indexOf(current) !== -1 && next === NU || // NU ×	(NU | SY | IS)
          current === NU && [NU, SY, IS].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          } // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)


          if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
            var prevIndex = currentIndex;

            while (prevIndex >= 0) {
              var type = classTypes[prevIndex];

              if (type === NU) {
                return BREAK_NOT_ALLOWED$1;
              } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
              } else {
                break;
              }
            }
          } // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))


          if ([PR, PO].indexOf(next) !== -1) {
            var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;

            while (prevIndex >= 0) {
              var type = classTypes[prevIndex];

              if (type === NU) {
                return BREAK_NOT_ALLOWED$1;
              } else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
              } else {
                break;
              }
            }
          } // LB26 Do not break a Korean syllable.


          if (JL === current && [JL, JV, H2, H3].indexOf(next) !== -1 || [JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1 || [JT, H3].indexOf(current) !== -1 && next === JT) {
            return BREAK_NOT_ALLOWED$1;
          } // LB27 Treat a Korean Syllable Block the same as ID.


          if (KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1 || KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR) {
            return BREAK_NOT_ALLOWED$1;
          } // LB28 Do not break between alphabetics (“at”).


          if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          } // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).


          if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED$1;
          } // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.


          if (ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP && ea_OP.indexOf(codePoints[afterIndex]) === -1 || ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP) {
            return BREAK_NOT_ALLOWED$1;
          } // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
          // indicators preceding the position of the break.


          if (current === RI$1 && next === RI$1) {
            var i = indicies[currentIndex];
            var count = 1;

            while (i > 0) {
              i--;

              if (classTypes[i] === RI$1) {
                count++;
              } else {
                break;
              }
            }

            if (count % 2 !== 0) {
              return BREAK_NOT_ALLOWED$1;
            }
          } // LB30b Do not break between an emoji base and an emoji modifier.


          if (current === EB && next === EM) {
            return BREAK_NOT_ALLOWED$1;
          }

          return BREAK_ALLOWED$1;
        };

        var cssFormattedClasses = function cssFormattedClasses(codePoints, options) {
          if (!options) {
            options = {
              lineBreak: 'normal',
              wordBreak: 'normal'
            };
          }

          var _a = codePointsToCharacterClasses(codePoints, options.lineBreak),
              indicies = _a[0],
              classTypes = _a[1],
              isLetterNumber = _a[2];

          if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
            classTypes = classTypes.map(function (type) {
              return [NU, AL, SA].indexOf(type) !== -1 ? ID : type;
            });
          }

          var forbiddenBreakpoints = options.wordBreak === 'keep-all' ? isLetterNumber.map(function (letterNumber, i) {
            return letterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
          }) : undefined;
          return [indicies, classTypes, forbiddenBreakpoints];
        };

        var Break =
        /** @class */
        function () {
          function Break(codePoints, lineBreak, start, end) {
            this.codePoints = codePoints;
            this.required = lineBreak === BREAK_MANDATORY;
            this.start = start;
            this.end = end;
          }

          Break.prototype.slice = function () {
            return fromCodePoint$1.apply(void 0, this.codePoints.slice(this.start, this.end));
          };

          return Break;
        }();

        var LineBreaker = function LineBreaker(str, options) {
          var codePoints = toCodePoints$1(str);

          var _a = cssFormattedClasses(codePoints, options),
              indicies = _a[0],
              classTypes = _a[1],
              forbiddenBreakpoints = _a[2];

          var length = codePoints.length;
          var lastEnd = 0;
          var nextIndex = 0;
          return {
            next: function next() {
              if (nextIndex >= length) {
                return {
                  done: true,
                  value: null
                };
              }

              var lineBreak = BREAK_NOT_ALLOWED$1;

              while (nextIndex < length && (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) === BREAK_NOT_ALLOWED$1) {}

              if (lineBreak !== BREAK_NOT_ALLOWED$1 || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return {
                  value: value,
                  done: false
                };
              }

              return {
                done: true,
                value: null
              };
            }
          };
        }; // https://www.w3.org/TR/css-syntax-3


        var FLAG_UNRESTRICTED = 1 << 0;
        var FLAG_ID = 1 << 1;
        var FLAG_INTEGER = 1 << 2;
        var FLAG_NUMBER = 1 << 3;
        var LINE_FEED = 0x000a;
        var SOLIDUS = 0x002f;
        var REVERSE_SOLIDUS = 0x005c;
        var CHARACTER_TABULATION = 0x0009;
        var SPACE = 0x0020;
        var QUOTATION_MARK = 0x0022;
        var EQUALS_SIGN = 0x003d;
        var NUMBER_SIGN = 0x0023;
        var DOLLAR_SIGN = 0x0024;
        var PERCENTAGE_SIGN = 0x0025;
        var APOSTROPHE = 0x0027;
        var LEFT_PARENTHESIS = 0x0028;
        var RIGHT_PARENTHESIS = 0x0029;
        var LOW_LINE = 0x005f;
        var HYPHEN_MINUS = 0x002d;
        var EXCLAMATION_MARK = 0x0021;
        var LESS_THAN_SIGN = 0x003c;
        var GREATER_THAN_SIGN = 0x003e;
        var COMMERCIAL_AT = 0x0040;
        var LEFT_SQUARE_BRACKET = 0x005b;
        var RIGHT_SQUARE_BRACKET = 0x005d;
        var CIRCUMFLEX_ACCENT = 0x003d;
        var LEFT_CURLY_BRACKET = 0x007b;
        var QUESTION_MARK = 0x003f;
        var RIGHT_CURLY_BRACKET = 0x007d;
        var VERTICAL_LINE = 0x007c;
        var TILDE = 0x007e;
        var CONTROL = 0x0080;
        var REPLACEMENT_CHARACTER = 0xfffd;
        var ASTERISK = 0x002a;
        var PLUS_SIGN = 0x002b;
        var COMMA = 0x002c;
        var COLON = 0x003a;
        var SEMICOLON = 0x003b;
        var FULL_STOP = 0x002e;
        var NULL = 0x0000;
        var BACKSPACE = 0x0008;
        var LINE_TABULATION = 0x000b;
        var SHIFT_OUT = 0x000e;
        var INFORMATION_SEPARATOR_ONE = 0x001f;
        var DELETE = 0x007f;
        var EOF = -1;
        var ZERO = 0x0030;
        var a = 0x0061;
        var e = 0x0065;
        var f = 0x0066;
        var u = 0x0075;
        var z = 0x007a;
        var A = 0x0041;
        var E = 0x0045;
        var F = 0x0046;
        var U = 0x0055;
        var Z = 0x005a;

        var isDigit = function isDigit(codePoint) {
          return codePoint >= ZERO && codePoint <= 0x0039;
        };

        var isSurrogateCodePoint = function isSurrogateCodePoint(codePoint) {
          return codePoint >= 0xd800 && codePoint <= 0xdfff;
        };

        var isHex = function isHex(codePoint) {
          return isDigit(codePoint) || codePoint >= A && codePoint <= F || codePoint >= a && codePoint <= f;
        };

        var isLowerCaseLetter = function isLowerCaseLetter(codePoint) {
          return codePoint >= a && codePoint <= z;
        };

        var isUpperCaseLetter = function isUpperCaseLetter(codePoint) {
          return codePoint >= A && codePoint <= Z;
        };

        var isLetter = function isLetter(codePoint) {
          return isLowerCaseLetter(codePoint) || isUpperCaseLetter(codePoint);
        };

        var isNonASCIICodePoint = function isNonASCIICodePoint(codePoint) {
          return codePoint >= CONTROL;
        };

        var isWhiteSpace = function isWhiteSpace(codePoint) {
          return codePoint === LINE_FEED || codePoint === CHARACTER_TABULATION || codePoint === SPACE;
        };

        var isNameStartCodePoint = function isNameStartCodePoint(codePoint) {
          return isLetter(codePoint) || isNonASCIICodePoint(codePoint) || codePoint === LOW_LINE;
        };

        var isNameCodePoint = function isNameCodePoint(codePoint) {
          return isNameStartCodePoint(codePoint) || isDigit(codePoint) || codePoint === HYPHEN_MINUS;
        };

        var isNonPrintableCodePoint = function isNonPrintableCodePoint(codePoint) {
          return codePoint >= NULL && codePoint <= BACKSPACE || codePoint === LINE_TABULATION || codePoint >= SHIFT_OUT && codePoint <= INFORMATION_SEPARATOR_ONE || codePoint === DELETE;
        };

        var isValidEscape = function isValidEscape(c1, c2) {
          if (c1 !== REVERSE_SOLIDUS) {
            return false;
          }

          return c2 !== LINE_FEED;
        };

        var isIdentifierStart = function isIdentifierStart(c1, c2, c3) {
          if (c1 === HYPHEN_MINUS) {
            return isNameStartCodePoint(c2) || isValidEscape(c2, c3);
          } else if (isNameStartCodePoint(c1)) {
            return true;
          } else if (c1 === REVERSE_SOLIDUS && isValidEscape(c1, c2)) {
            return true;
          }

          return false;
        };

        var isNumberStart = function isNumberStart(c1, c2, c3) {
          if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
            if (isDigit(c2)) {
              return true;
            }

            return c2 === FULL_STOP && isDigit(c3);
          }

          if (c1 === FULL_STOP) {
            return isDigit(c2);
          }

          return isDigit(c1);
        };

        var stringToNumber = function stringToNumber(codePoints) {
          var c = 0;
          var sign = 1;

          if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
              sign = -1;
            }

            c++;
          }

          var integers = [];

          while (isDigit(codePoints[c])) {
            integers.push(codePoints[c++]);
          }

          var _int = integers.length ? parseInt(fromCodePoint$1.apply(void 0, integers), 10) : 0;

          if (codePoints[c] === FULL_STOP) {
            c++;
          }

          var fraction = [];

          while (isDigit(codePoints[c])) {
            fraction.push(codePoints[c++]);
          }

          var fracd = fraction.length;
          var frac = fracd ? parseInt(fromCodePoint$1.apply(void 0, fraction), 10) : 0;

          if (codePoints[c] === E || codePoints[c] === e) {
            c++;
          }

          var expsign = 1;

          if (codePoints[c] === PLUS_SIGN || codePoints[c] === HYPHEN_MINUS) {
            if (codePoints[c] === HYPHEN_MINUS) {
              expsign = -1;
            }

            c++;
          }

          var exponent = [];

          while (isDigit(codePoints[c])) {
            exponent.push(codePoints[c++]);
          }

          var exp = exponent.length ? parseInt(fromCodePoint$1.apply(void 0, exponent), 10) : 0;
          return sign * (_int + frac * Math.pow(10, -fracd)) * Math.pow(10, expsign * exp);
        };

        var LEFT_PARENTHESIS_TOKEN = {
          type: 2
          /* LEFT_PARENTHESIS_TOKEN */

        };
        var RIGHT_PARENTHESIS_TOKEN = {
          type: 3
          /* RIGHT_PARENTHESIS_TOKEN */

        };
        var COMMA_TOKEN = {
          type: 4
          /* COMMA_TOKEN */

        };
        var SUFFIX_MATCH_TOKEN = {
          type: 13
          /* SUFFIX_MATCH_TOKEN */

        };
        var PREFIX_MATCH_TOKEN = {
          type: 8
          /* PREFIX_MATCH_TOKEN */

        };
        var COLUMN_TOKEN = {
          type: 21
          /* COLUMN_TOKEN */

        };
        var DASH_MATCH_TOKEN = {
          type: 9
          /* DASH_MATCH_TOKEN */

        };
        var INCLUDE_MATCH_TOKEN = {
          type: 10
          /* INCLUDE_MATCH_TOKEN */

        };
        var LEFT_CURLY_BRACKET_TOKEN = {
          type: 11
          /* LEFT_CURLY_BRACKET_TOKEN */

        };
        var RIGHT_CURLY_BRACKET_TOKEN = {
          type: 12
          /* RIGHT_CURLY_BRACKET_TOKEN */

        };
        var SUBSTRING_MATCH_TOKEN = {
          type: 14
          /* SUBSTRING_MATCH_TOKEN */

        };
        var BAD_URL_TOKEN = {
          type: 23
          /* BAD_URL_TOKEN */

        };
        var BAD_STRING_TOKEN = {
          type: 1
          /* BAD_STRING_TOKEN */

        };
        var CDO_TOKEN = {
          type: 25
          /* CDO_TOKEN */

        };
        var CDC_TOKEN = {
          type: 24
          /* CDC_TOKEN */

        };
        var COLON_TOKEN = {
          type: 26
          /* COLON_TOKEN */

        };
        var SEMICOLON_TOKEN = {
          type: 27
          /* SEMICOLON_TOKEN */

        };
        var LEFT_SQUARE_BRACKET_TOKEN = {
          type: 28
          /* LEFT_SQUARE_BRACKET_TOKEN */

        };
        var RIGHT_SQUARE_BRACKET_TOKEN = {
          type: 29
          /* RIGHT_SQUARE_BRACKET_TOKEN */

        };
        var WHITESPACE_TOKEN = {
          type: 31
          /* WHITESPACE_TOKEN */

        };
        var EOF_TOKEN = {
          type: 32
          /* EOF_TOKEN */

        };

        var Tokenizer =
        /** @class */
        function () {
          function Tokenizer() {
            this._value = [];
          }

          Tokenizer.prototype.write = function (chunk) {
            this._value = this._value.concat(toCodePoints$1(chunk));
          };

          Tokenizer.prototype.read = function () {
            var tokens = [];
            var token = this.consumeToken();

            while (token !== EOF_TOKEN) {
              tokens.push(token);
              token = this.consumeToken();
            }

            return tokens;
          };

          Tokenizer.prototype.consumeToken = function () {
            var codePoint = this.consumeCodePoint();

            switch (codePoint) {
              case QUOTATION_MARK:
                return this.consumeStringToken(QUOTATION_MARK);

              case NUMBER_SIGN:
                var c1 = this.peekCodePoint(0);
                var c2 = this.peekCodePoint(1);
                var c3 = this.peekCodePoint(2);

                if (isNameCodePoint(c1) || isValidEscape(c2, c3)) {
                  var flags = isIdentifierStart(c1, c2, c3) ? FLAG_ID : FLAG_UNRESTRICTED;
                  var value = this.consumeName();
                  return {
                    type: 5
                    /* HASH_TOKEN */
                    ,
                    value: value,
                    flags: flags
                  };
                }

                break;

              case DOLLAR_SIGN:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                  this.consumeCodePoint();
                  return SUFFIX_MATCH_TOKEN;
                }

                break;

              case APOSTROPHE:
                return this.consumeStringToken(APOSTROPHE);

              case LEFT_PARENTHESIS:
                return LEFT_PARENTHESIS_TOKEN;

              case RIGHT_PARENTHESIS:
                return RIGHT_PARENTHESIS_TOKEN;

              case ASTERISK:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                  this.consumeCodePoint();
                  return SUBSTRING_MATCH_TOKEN;
                }

                break;

              case PLUS_SIGN:
                if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                  this.reconsumeCodePoint(codePoint);
                  return this.consumeNumericToken();
                }

                break;

              case COMMA:
                return COMMA_TOKEN;

              case HYPHEN_MINUS:
                var e1 = codePoint;
                var e2 = this.peekCodePoint(0);
                var e3 = this.peekCodePoint(1);

                if (isNumberStart(e1, e2, e3)) {
                  this.reconsumeCodePoint(codePoint);
                  return this.consumeNumericToken();
                }

                if (isIdentifierStart(e1, e2, e3)) {
                  this.reconsumeCodePoint(codePoint);
                  return this.consumeIdentLikeToken();
                }

                if (e2 === HYPHEN_MINUS && e3 === GREATER_THAN_SIGN) {
                  this.consumeCodePoint();
                  this.consumeCodePoint();
                  return CDC_TOKEN;
                }

                break;

              case FULL_STOP:
                if (isNumberStart(codePoint, this.peekCodePoint(0), this.peekCodePoint(1))) {
                  this.reconsumeCodePoint(codePoint);
                  return this.consumeNumericToken();
                }

                break;

              case SOLIDUS:
                if (this.peekCodePoint(0) === ASTERISK) {
                  this.consumeCodePoint();

                  while (true) {
                    var c = this.consumeCodePoint();

                    if (c === ASTERISK) {
                      c = this.consumeCodePoint();

                      if (c === SOLIDUS) {
                        return this.consumeToken();
                      }
                    }

                    if (c === EOF) {
                      return this.consumeToken();
                    }
                  }
                }

                break;

              case COLON:
                return COLON_TOKEN;

              case SEMICOLON:
                return SEMICOLON_TOKEN;

              case LESS_THAN_SIGN:
                if (this.peekCodePoint(0) === EXCLAMATION_MARK && this.peekCodePoint(1) === HYPHEN_MINUS && this.peekCodePoint(2) === HYPHEN_MINUS) {
                  this.consumeCodePoint();
                  this.consumeCodePoint();
                  return CDO_TOKEN;
                }

                break;

              case COMMERCIAL_AT:
                var a1 = this.peekCodePoint(0);
                var a2 = this.peekCodePoint(1);
                var a3 = this.peekCodePoint(2);

                if (isIdentifierStart(a1, a2, a3)) {
                  var value = this.consumeName();
                  return {
                    type: 7
                    /* AT_KEYWORD_TOKEN */
                    ,
                    value: value
                  };
                }

                break;

              case LEFT_SQUARE_BRACKET:
                return LEFT_SQUARE_BRACKET_TOKEN;

              case REVERSE_SOLIDUS:
                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                  this.reconsumeCodePoint(codePoint);
                  return this.consumeIdentLikeToken();
                }

                break;

              case RIGHT_SQUARE_BRACKET:
                return RIGHT_SQUARE_BRACKET_TOKEN;

              case CIRCUMFLEX_ACCENT:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                  this.consumeCodePoint();
                  return PREFIX_MATCH_TOKEN;
                }

                break;

              case LEFT_CURLY_BRACKET:
                return LEFT_CURLY_BRACKET_TOKEN;

              case RIGHT_CURLY_BRACKET:
                return RIGHT_CURLY_BRACKET_TOKEN;

              case u:
              case U:
                var u1 = this.peekCodePoint(0);
                var u2 = this.peekCodePoint(1);

                if (u1 === PLUS_SIGN && (isHex(u2) || u2 === QUESTION_MARK)) {
                  this.consumeCodePoint();
                  this.consumeUnicodeRangeToken();
                }

                this.reconsumeCodePoint(codePoint);
                return this.consumeIdentLikeToken();

              case VERTICAL_LINE:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                  this.consumeCodePoint();
                  return DASH_MATCH_TOKEN;
                }

                if (this.peekCodePoint(0) === VERTICAL_LINE) {
                  this.consumeCodePoint();
                  return COLUMN_TOKEN;
                }

                break;

              case TILDE:
                if (this.peekCodePoint(0) === EQUALS_SIGN) {
                  this.consumeCodePoint();
                  return INCLUDE_MATCH_TOKEN;
                }

                break;

              case EOF:
                return EOF_TOKEN;
            }

            if (isWhiteSpace(codePoint)) {
              this.consumeWhiteSpace();
              return WHITESPACE_TOKEN;
            }

            if (isDigit(codePoint)) {
              this.reconsumeCodePoint(codePoint);
              return this.consumeNumericToken();
            }

            if (isNameStartCodePoint(codePoint)) {
              this.reconsumeCodePoint(codePoint);
              return this.consumeIdentLikeToken();
            }

            return {
              type: 6
              /* DELIM_TOKEN */
              ,
              value: fromCodePoint$1(codePoint)
            };
          };

          Tokenizer.prototype.consumeCodePoint = function () {
            var value = this._value.shift();

            return typeof value === 'undefined' ? -1 : value;
          };

          Tokenizer.prototype.reconsumeCodePoint = function (codePoint) {
            this._value.unshift(codePoint);
          };

          Tokenizer.prototype.peekCodePoint = function (delta) {
            if (delta >= this._value.length) {
              return -1;
            }

            return this._value[delta];
          };

          Tokenizer.prototype.consumeUnicodeRangeToken = function () {
            var digits = [];
            var codePoint = this.consumeCodePoint();

            while (isHex(codePoint) && digits.length < 6) {
              digits.push(codePoint);
              codePoint = this.consumeCodePoint();
            }

            var questionMarks = false;

            while (codePoint === QUESTION_MARK && digits.length < 6) {
              digits.push(codePoint);
              codePoint = this.consumeCodePoint();
              questionMarks = true;
            }

            if (questionMarks) {
              var start_1 = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) {
                return digit === QUESTION_MARK ? ZERO : digit;
              })), 16);
              var end = parseInt(fromCodePoint$1.apply(void 0, digits.map(function (digit) {
                return digit === QUESTION_MARK ? F : digit;
              })), 16);
              return {
                type: 30
                /* UNICODE_RANGE_TOKEN */
                ,
                start: start_1,
                end: end
              };
            }

            var start = parseInt(fromCodePoint$1.apply(void 0, digits), 16);

            if (this.peekCodePoint(0) === HYPHEN_MINUS && isHex(this.peekCodePoint(1))) {
              this.consumeCodePoint();
              codePoint = this.consumeCodePoint();
              var endDigits = [];

              while (isHex(codePoint) && endDigits.length < 6) {
                endDigits.push(codePoint);
                codePoint = this.consumeCodePoint();
              }

              var end = parseInt(fromCodePoint$1.apply(void 0, endDigits), 16);
              return {
                type: 30
                /* UNICODE_RANGE_TOKEN */
                ,
                start: start,
                end: end
              };
            } else {
              return {
                type: 30
                /* UNICODE_RANGE_TOKEN */
                ,
                start: start,
                end: start
              };
            }
          };

          Tokenizer.prototype.consumeIdentLikeToken = function () {
            var value = this.consumeName();

            if (value.toLowerCase() === 'url' && this.peekCodePoint(0) === LEFT_PARENTHESIS) {
              this.consumeCodePoint();
              return this.consumeUrlToken();
            } else if (this.peekCodePoint(0) === LEFT_PARENTHESIS) {
              this.consumeCodePoint();
              return {
                type: 19
                /* FUNCTION_TOKEN */
                ,
                value: value
              };
            }

            return {
              type: 20
              /* IDENT_TOKEN */
              ,
              value: value
            };
          };

          Tokenizer.prototype.consumeUrlToken = function () {
            var value = [];
            this.consumeWhiteSpace();

            if (this.peekCodePoint(0) === EOF) {
              return {
                type: 22
                /* URL_TOKEN */
                ,
                value: ''
              };
            }

            var next = this.peekCodePoint(0);

            if (next === APOSTROPHE || next === QUOTATION_MARK) {
              var stringToken = this.consumeStringToken(this.consumeCodePoint());

              if (stringToken.type === 0
              /* STRING_TOKEN */
              ) {
                this.consumeWhiteSpace();

                if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                  this.consumeCodePoint();
                  return {
                    type: 22
                    /* URL_TOKEN */
                    ,
                    value: stringToken.value
                  };
                }
              }

              this.consumeBadUrlRemnants();
              return BAD_URL_TOKEN;
            }

            while (true) {
              var codePoint = this.consumeCodePoint();

              if (codePoint === EOF || codePoint === RIGHT_PARENTHESIS) {
                return {
                  type: 22
                  /* URL_TOKEN */
                  ,
                  value: fromCodePoint$1.apply(void 0, value)
                };
              } else if (isWhiteSpace(codePoint)) {
                this.consumeWhiteSpace();

                if (this.peekCodePoint(0) === EOF || this.peekCodePoint(0) === RIGHT_PARENTHESIS) {
                  this.consumeCodePoint();
                  return {
                    type: 22
                    /* URL_TOKEN */
                    ,
                    value: fromCodePoint$1.apply(void 0, value)
                  };
                }

                this.consumeBadUrlRemnants();
                return BAD_URL_TOKEN;
              } else if (codePoint === QUOTATION_MARK || codePoint === APOSTROPHE || codePoint === LEFT_PARENTHESIS || isNonPrintableCodePoint(codePoint)) {
                this.consumeBadUrlRemnants();
                return BAD_URL_TOKEN;
              } else if (codePoint === REVERSE_SOLIDUS) {
                if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                  value.push(this.consumeEscapedCodePoint());
                } else {
                  this.consumeBadUrlRemnants();
                  return BAD_URL_TOKEN;
                }
              } else {
                value.push(codePoint);
              }
            }
          };

          Tokenizer.prototype.consumeWhiteSpace = function () {
            while (isWhiteSpace(this.peekCodePoint(0))) {
              this.consumeCodePoint();
            }
          };

          Tokenizer.prototype.consumeBadUrlRemnants = function () {
            while (true) {
              var codePoint = this.consumeCodePoint();

              if (codePoint === RIGHT_PARENTHESIS || codePoint === EOF) {
                return;
              }

              if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                this.consumeEscapedCodePoint();
              }
            }
          };

          Tokenizer.prototype.consumeStringSlice = function (count) {
            var SLICE_STACK_SIZE = 60000;
            var value = '';

            while (count > 0) {
              var amount = Math.min(SLICE_STACK_SIZE, count);
              value += fromCodePoint$1.apply(void 0, this._value.splice(0, amount));
              count -= amount;
            }

            this._value.shift();

            return value;
          };

          Tokenizer.prototype.consumeStringToken = function (endingCodePoint) {
            var value = '';
            var i = 0;

            do {
              var codePoint = this._value[i];

              if (codePoint === EOF || codePoint === undefined || codePoint === endingCodePoint) {
                value += this.consumeStringSlice(i);
                return {
                  type: 0
                  /* STRING_TOKEN */
                  ,
                  value: value
                };
              }

              if (codePoint === LINE_FEED) {
                this._value.splice(0, i);

                return BAD_STRING_TOKEN;
              }

              if (codePoint === REVERSE_SOLIDUS) {
                var next = this._value[i + 1];

                if (next !== EOF && next !== undefined) {
                  if (next === LINE_FEED) {
                    value += this.consumeStringSlice(i);
                    i = -1;

                    this._value.shift();
                  } else if (isValidEscape(codePoint, next)) {
                    value += this.consumeStringSlice(i);
                    value += fromCodePoint$1(this.consumeEscapedCodePoint());
                    i = -1;
                  }
                }
              }

              i++;
            } while (true);
          };

          Tokenizer.prototype.consumeNumber = function () {
            var repr = [];
            var type = FLAG_INTEGER;
            var c1 = this.peekCodePoint(0);

            if (c1 === PLUS_SIGN || c1 === HYPHEN_MINUS) {
              repr.push(this.consumeCodePoint());
            }

            while (isDigit(this.peekCodePoint(0))) {
              repr.push(this.consumeCodePoint());
            }

            c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);

            if (c1 === FULL_STOP && isDigit(c2)) {
              repr.push(this.consumeCodePoint(), this.consumeCodePoint());
              type = FLAG_NUMBER;

              while (isDigit(this.peekCodePoint(0))) {
                repr.push(this.consumeCodePoint());
              }
            }

            c1 = this.peekCodePoint(0);
            c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);

            if ((c1 === E || c1 === e) && ((c2 === PLUS_SIGN || c2 === HYPHEN_MINUS) && isDigit(c3) || isDigit(c2))) {
              repr.push(this.consumeCodePoint(), this.consumeCodePoint());
              type = FLAG_NUMBER;

              while (isDigit(this.peekCodePoint(0))) {
                repr.push(this.consumeCodePoint());
              }
            }

            return [stringToNumber(repr), type];
          };

          Tokenizer.prototype.consumeNumericToken = function () {
            var _a = this.consumeNumber(),
                number = _a[0],
                flags = _a[1];

            var c1 = this.peekCodePoint(0);
            var c2 = this.peekCodePoint(1);
            var c3 = this.peekCodePoint(2);

            if (isIdentifierStart(c1, c2, c3)) {
              var unit = this.consumeName();
              return {
                type: 15
                /* DIMENSION_TOKEN */
                ,
                number: number,
                flags: flags,
                unit: unit
              };
            }

            if (c1 === PERCENTAGE_SIGN) {
              this.consumeCodePoint();
              return {
                type: 16
                /* PERCENTAGE_TOKEN */
                ,
                number: number,
                flags: flags
              };
            }

            return {
              type: 17
              /* NUMBER_TOKEN */
              ,
              number: number,
              flags: flags
            };
          };

          Tokenizer.prototype.consumeEscapedCodePoint = function () {
            var codePoint = this.consumeCodePoint();

            if (isHex(codePoint)) {
              var hex = fromCodePoint$1(codePoint);

              while (isHex(this.peekCodePoint(0)) && hex.length < 6) {
                hex += fromCodePoint$1(this.consumeCodePoint());
              }

              if (isWhiteSpace(this.peekCodePoint(0))) {
                this.consumeCodePoint();
              }

              var hexCodePoint = parseInt(hex, 16);

              if (hexCodePoint === 0 || isSurrogateCodePoint(hexCodePoint) || hexCodePoint > 0x10ffff) {
                return REPLACEMENT_CHARACTER;
              }

              return hexCodePoint;
            }

            if (codePoint === EOF) {
              return REPLACEMENT_CHARACTER;
            }

            return codePoint;
          };

          Tokenizer.prototype.consumeName = function () {
            var result = '';

            while (true) {
              var codePoint = this.consumeCodePoint();

              if (isNameCodePoint(codePoint)) {
                result += fromCodePoint$1(codePoint);
              } else if (isValidEscape(codePoint, this.peekCodePoint(0))) {
                result += fromCodePoint$1(this.consumeEscapedCodePoint());
              } else {
                this.reconsumeCodePoint(codePoint);
                return result;
              }
            }
          };

          return Tokenizer;
        }();

        var Parser =
        /** @class */
        function () {
          function Parser(tokens) {
            this._tokens = tokens;
          }

          Parser.create = function (value) {
            var tokenizer = new Tokenizer();
            tokenizer.write(value);
            return new Parser(tokenizer.read());
          };

          Parser.parseValue = function (value) {
            return Parser.create(value).parseComponentValue();
          };

          Parser.parseValues = function (value) {
            return Parser.create(value).parseComponentValues();
          };

          Parser.prototype.parseComponentValue = function () {
            var token = this.consumeToken();

            while (token.type === 31
            /* WHITESPACE_TOKEN */
            ) {
              token = this.consumeToken();
            }

            if (token.type === 32
            /* EOF_TOKEN */
            ) {
              throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
            }

            this.reconsumeToken(token);
            var value = this.consumeComponentValue();

            do {
              token = this.consumeToken();
            } while (token.type === 31
            /* WHITESPACE_TOKEN */
            );

            if (token.type === 32
            /* EOF_TOKEN */
            ) {
              return value;
            }

            throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
          };

          Parser.prototype.parseComponentValues = function () {
            var values = [];

            while (true) {
              var value = this.consumeComponentValue();

              if (value.type === 32
              /* EOF_TOKEN */
              ) {
                return values;
              }

              values.push(value);
              values.push();
            }
          };

          Parser.prototype.consumeComponentValue = function () {
            var token = this.consumeToken();

            switch (token.type) {
              case 11
              /* LEFT_CURLY_BRACKET_TOKEN */
              :
              case 28
              /* LEFT_SQUARE_BRACKET_TOKEN */
              :
              case 2
              /* LEFT_PARENTHESIS_TOKEN */
              :
                return this.consumeSimpleBlock(token.type);

              case 19
              /* FUNCTION_TOKEN */
              :
                return this.consumeFunction(token);
            }

            return token;
          };

          Parser.prototype.consumeSimpleBlock = function (type) {
            var block = {
              type: type,
              values: []
            };
            var token = this.consumeToken();

            while (true) {
              if (token.type === 32
              /* EOF_TOKEN */
              || isEndingTokenFor(token, type)) {
                return block;
              }

              this.reconsumeToken(token);
              block.values.push(this.consumeComponentValue());
              token = this.consumeToken();
            }
          };

          Parser.prototype.consumeFunction = function (functionToken) {
            var cssFunction = {
              name: functionToken.value,
              values: [],
              type: 18
              /* FUNCTION */

            };

            while (true) {
              var token = this.consumeToken();

              if (token.type === 32
              /* EOF_TOKEN */
              || token.type === 3
              /* RIGHT_PARENTHESIS_TOKEN */
              ) {
                return cssFunction;
              }

              this.reconsumeToken(token);
              cssFunction.values.push(this.consumeComponentValue());
            }
          };

          Parser.prototype.consumeToken = function () {
            var token = this._tokens.shift();

            return typeof token === 'undefined' ? EOF_TOKEN : token;
          };

          Parser.prototype.reconsumeToken = function (token) {
            this._tokens.unshift(token);
          };

          return Parser;
        }();

        var isDimensionToken = function isDimensionToken(token) {
          return token.type === 15
          /* DIMENSION_TOKEN */
          ;
        };

        var isNumberToken = function isNumberToken(token) {
          return token.type === 17
          /* NUMBER_TOKEN */
          ;
        };

        var isIdentToken = function isIdentToken(token) {
          return token.type === 20
          /* IDENT_TOKEN */
          ;
        };

        var isStringToken = function isStringToken(token) {
          return token.type === 0
          /* STRING_TOKEN */
          ;
        };

        var isIdentWithValue = function isIdentWithValue(token, value) {
          return isIdentToken(token) && token.value === value;
        };

        var nonWhiteSpace = function nonWhiteSpace(token) {
          return token.type !== 31
          /* WHITESPACE_TOKEN */
          ;
        };

        var nonFunctionArgSeparator = function nonFunctionArgSeparator(token) {
          return token.type !== 31
          /* WHITESPACE_TOKEN */
          && token.type !== 4
          /* COMMA_TOKEN */
          ;
        };

        var parseFunctionArgs = function parseFunctionArgs(tokens) {
          var args = [];
          var arg = [];
          tokens.forEach(function (token) {
            if (token.type === 4
            /* COMMA_TOKEN */
            ) {
              if (arg.length === 0) {
                throw new Error("Error parsing function args, zero tokens for arg");
              }

              args.push(arg);
              arg = [];
              return;
            }

            if (token.type !== 31
            /* WHITESPACE_TOKEN */
            ) {
              arg.push(token);
            }
          });

          if (arg.length) {
            args.push(arg);
          }

          return args;
        };

        var isEndingTokenFor = function isEndingTokenFor(token, type) {
          if (type === 11
          /* LEFT_CURLY_BRACKET_TOKEN */
          && token.type === 12
          /* RIGHT_CURLY_BRACKET_TOKEN */
          ) {
            return true;
          }

          if (type === 28
          /* LEFT_SQUARE_BRACKET_TOKEN */
          && token.type === 29
          /* RIGHT_SQUARE_BRACKET_TOKEN */
          ) {
            return true;
          }

          return type === 2
          /* LEFT_PARENTHESIS_TOKEN */
          && token.type === 3
          /* RIGHT_PARENTHESIS_TOKEN */
          ;
        };

        var isLength = function isLength(token) {
          return token.type === 17
          /* NUMBER_TOKEN */
          || token.type === 15
          /* DIMENSION_TOKEN */
          ;
        };

        var isLengthPercentage = function isLengthPercentage(token) {
          return token.type === 16
          /* PERCENTAGE_TOKEN */
          || isLength(token);
        };

        var parseLengthPercentageTuple = function parseLengthPercentageTuple(tokens) {
          return tokens.length > 1 ? [tokens[0], tokens[1]] : [tokens[0]];
        };

        var ZERO_LENGTH = {
          type: 17
          /* NUMBER_TOKEN */
          ,
          number: 0,
          flags: FLAG_INTEGER
        };
        var FIFTY_PERCENT = {
          type: 16
          /* PERCENTAGE_TOKEN */
          ,
          number: 50,
          flags: FLAG_INTEGER
        };
        var HUNDRED_PERCENT = {
          type: 16
          /* PERCENTAGE_TOKEN */
          ,
          number: 100,
          flags: FLAG_INTEGER
        };

        var getAbsoluteValueForTuple = function getAbsoluteValueForTuple(tuple, width, height) {
          var x = tuple[0],
              y = tuple[1];
          return [getAbsoluteValue(x, width), getAbsoluteValue(typeof y !== 'undefined' ? y : x, height)];
        };

        var getAbsoluteValue = function getAbsoluteValue(token, parent) {
          if (token.type === 16
          /* PERCENTAGE_TOKEN */
          ) {
            return token.number / 100 * parent;
          }

          if (isDimensionToken(token)) {
            switch (token.unit) {
              case 'rem':
              case 'em':
                return 16 * token.number;
              // TODO use correct font-size

              case 'px':
              default:
                return token.number;
            }
          }

          return token.number;
        };

        var DEG = 'deg';
        var GRAD = 'grad';
        var RAD = 'rad';
        var TURN = 'turn';
        var angle = {
          name: 'angle',
          parse: function parse(_context, value) {
            if (value.type === 15
            /* DIMENSION_TOKEN */
            ) {
              switch (value.unit) {
                case DEG:
                  return Math.PI * value.number / 180;

                case GRAD:
                  return Math.PI / 200 * value.number;

                case RAD:
                  return value.number;

                case TURN:
                  return Math.PI * 2 * value.number;
              }
            }

            throw new Error("Unsupported angle type");
          }
        };

        var isAngle = function isAngle(value) {
          if (value.type === 15
          /* DIMENSION_TOKEN */
          ) {
            if (value.unit === DEG || value.unit === GRAD || value.unit === RAD || value.unit === TURN) {
              return true;
            }
          }

          return false;
        };

        var parseNamedSide = function parseNamedSide(tokens) {
          var sideOrCorner = tokens.filter(isIdentToken).map(function (ident) {
            return ident.value;
          }).join(' ');

          switch (sideOrCorner) {
            case 'to bottom right':
            case 'to right bottom':
            case 'left top':
            case 'top left':
              return [ZERO_LENGTH, ZERO_LENGTH];

            case 'to top':
            case 'bottom':
              return deg(0);

            case 'to bottom left':
            case 'to left bottom':
            case 'right top':
            case 'top right':
              return [ZERO_LENGTH, HUNDRED_PERCENT];

            case 'to right':
            case 'left':
              return deg(90);

            case 'to top left':
            case 'to left top':
            case 'right bottom':
            case 'bottom right':
              return [HUNDRED_PERCENT, HUNDRED_PERCENT];

            case 'to bottom':
            case 'top':
              return deg(180);

            case 'to top right':
            case 'to right top':
            case 'left bottom':
            case 'bottom left':
              return [HUNDRED_PERCENT, ZERO_LENGTH];

            case 'to left':
            case 'right':
              return deg(270);
          }

          return 0;
        };

        var deg = function deg(_deg) {
          return Math.PI * _deg / 180;
        };

        var color$1 = {
          name: 'color',
          parse: function parse(context, value) {
            if (value.type === 18
            /* FUNCTION */
            ) {
              var colorFunction = SUPPORTED_COLOR_FUNCTIONS[value.name];

              if (typeof colorFunction === 'undefined') {
                throw new Error("Attempting to parse an unsupported color function \"" + value.name + "\"");
              }

              return colorFunction(context, value.values);
            }

            if (value.type === 5
            /* HASH_TOKEN */
            ) {
              if (value.value.length === 3) {
                var r = value.value.substring(0, 1);
                var g = value.value.substring(1, 2);
                var b = value.value.substring(2, 3);
                return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), 1);
              }

              if (value.value.length === 4) {
                var r = value.value.substring(0, 1);
                var g = value.value.substring(1, 2);
                var b = value.value.substring(2, 3);
                var a = value.value.substring(3, 4);
                return pack(parseInt(r + r, 16), parseInt(g + g, 16), parseInt(b + b, 16), parseInt(a + a, 16) / 255);
              }

              if (value.value.length === 6) {
                var r = value.value.substring(0, 2);
                var g = value.value.substring(2, 4);
                var b = value.value.substring(4, 6);
                return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), 1);
              }

              if (value.value.length === 8) {
                var r = value.value.substring(0, 2);
                var g = value.value.substring(2, 4);
                var b = value.value.substring(4, 6);
                var a = value.value.substring(6, 8);
                return pack(parseInt(r, 16), parseInt(g, 16), parseInt(b, 16), parseInt(a, 16) / 255);
              }
            }

            if (value.type === 20
            /* IDENT_TOKEN */
            ) {
              var namedColor = COLORS[value.value.toUpperCase()];

              if (typeof namedColor !== 'undefined') {
                return namedColor;
              }
            }

            return COLORS.TRANSPARENT;
          }
        };

        var isTransparent = function isTransparent(color) {
          return (0xff & color) === 0;
        };

        var asString = function asString(color) {
          var alpha = 0xff & color;
          var blue = 0xff & color >> 8;
          var green = 0xff & color >> 16;
          var red = 0xff & color >> 24;
          return alpha < 255 ? "rgba(" + red + "," + green + "," + blue + "," + alpha / 255 + ")" : "rgb(" + red + "," + green + "," + blue + ")";
        };

        var pack = function pack(r, g, b, a) {
          return (r << 24 | g << 16 | b << 8 | Math.round(a * 255) << 0) >>> 0;
        };

        var getTokenColorValue = function getTokenColorValue(token, i) {
          if (token.type === 17
          /* NUMBER_TOKEN */
          ) {
            return token.number;
          }

          if (token.type === 16
          /* PERCENTAGE_TOKEN */
          ) {
            var max = i === 3 ? 1 : 255;
            return i === 3 ? token.number / 100 * max : Math.round(token.number / 100 * max);
          }

          return 0;
        };

        var rgb = function rgb(_context, args) {
          var tokens = args.filter(nonFunctionArgSeparator);

          if (tokens.length === 3) {
            var _a = tokens.map(getTokenColorValue),
                r = _a[0],
                g = _a[1],
                b = _a[2];

            return pack(r, g, b, 1);
          }

          if (tokens.length === 4) {
            var _b = tokens.map(getTokenColorValue),
                r = _b[0],
                g = _b[1],
                b = _b[2],
                a = _b[3];

            return pack(r, g, b, a);
          }

          return 0;
        };

        function hue2rgb(t1, t2, hue) {
          if (hue < 0) {
            hue += 1;
          }

          if (hue >= 1) {
            hue -= 1;
          }

          if (hue < 1 / 6) {
            return (t2 - t1) * hue * 6 + t1;
          } else if (hue < 1 / 2) {
            return t2;
          } else if (hue < 2 / 3) {
            return (t2 - t1) * 6 * (2 / 3 - hue) + t1;
          } else {
            return t1;
          }
        }

        var hsl = function hsl(context, args) {
          var tokens = args.filter(nonFunctionArgSeparator);
          var hue = tokens[0],
              saturation = tokens[1],
              lightness = tokens[2],
              alpha = tokens[3];
          var h = (hue.type === 17
          /* NUMBER_TOKEN */
          ? deg(hue.number) : angle.parse(context, hue)) / (Math.PI * 2);
          var s = isLengthPercentage(saturation) ? saturation.number / 100 : 0;
          var l = isLengthPercentage(lightness) ? lightness.number / 100 : 0;
          var a = typeof alpha !== 'undefined' && isLengthPercentage(alpha) ? getAbsoluteValue(alpha, 1) : 1;

          if (s === 0) {
            return pack(l * 255, l * 255, l * 255, 1);
          }

          var t2 = l <= 0.5 ? l * (s + 1) : l + s - l * s;
          var t1 = l * 2 - t2;
          var r = hue2rgb(t1, t2, h + 1 / 3);
          var g = hue2rgb(t1, t2, h);
          var b = hue2rgb(t1, t2, h - 1 / 3);
          return pack(r * 255, g * 255, b * 255, a);
        };

        var SUPPORTED_COLOR_FUNCTIONS = {
          hsl: hsl,
          hsla: hsl,
          rgb: rgb,
          rgba: rgb
        };

        var parseColor = function parseColor(context, value) {
          return color$1.parse(context, Parser.create(value).parseComponentValue());
        };

        var COLORS = {
          ALICEBLUE: 0xf0f8ffff,
          ANTIQUEWHITE: 0xfaebd7ff,
          AQUA: 0x00ffffff,
          AQUAMARINE: 0x7fffd4ff,
          AZURE: 0xf0ffffff,
          BEIGE: 0xf5f5dcff,
          BISQUE: 0xffe4c4ff,
          BLACK: 0x000000ff,
          BLANCHEDALMOND: 0xffebcdff,
          BLUE: 0x0000ffff,
          BLUEVIOLET: 0x8a2be2ff,
          BROWN: 0xa52a2aff,
          BURLYWOOD: 0xdeb887ff,
          CADETBLUE: 0x5f9ea0ff,
          CHARTREUSE: 0x7fff00ff,
          CHOCOLATE: 0xd2691eff,
          CORAL: 0xff7f50ff,
          CORNFLOWERBLUE: 0x6495edff,
          CORNSILK: 0xfff8dcff,
          CRIMSON: 0xdc143cff,
          CYAN: 0x00ffffff,
          DARKBLUE: 0x00008bff,
          DARKCYAN: 0x008b8bff,
          DARKGOLDENROD: 0xb886bbff,
          DARKGRAY: 0xa9a9a9ff,
          DARKGREEN: 0x006400ff,
          DARKGREY: 0xa9a9a9ff,
          DARKKHAKI: 0xbdb76bff,
          DARKMAGENTA: 0x8b008bff,
          DARKOLIVEGREEN: 0x556b2fff,
          DARKORANGE: 0xff8c00ff,
          DARKORCHID: 0x9932ccff,
          DARKRED: 0x8b0000ff,
          DARKSALMON: 0xe9967aff,
          DARKSEAGREEN: 0x8fbc8fff,
          DARKSLATEBLUE: 0x483d8bff,
          DARKSLATEGRAY: 0x2f4f4fff,
          DARKSLATEGREY: 0x2f4f4fff,
          DARKTURQUOISE: 0x00ced1ff,
          DARKVIOLET: 0x9400d3ff,
          DEEPPINK: 0xff1493ff,
          DEEPSKYBLUE: 0x00bfffff,
          DIMGRAY: 0x696969ff,
          DIMGREY: 0x696969ff,
          DODGERBLUE: 0x1e90ffff,
          FIREBRICK: 0xb22222ff,
          FLORALWHITE: 0xfffaf0ff,
          FORESTGREEN: 0x228b22ff,
          FUCHSIA: 0xff00ffff,
          GAINSBORO: 0xdcdcdcff,
          GHOSTWHITE: 0xf8f8ffff,
          GOLD: 0xffd700ff,
          GOLDENROD: 0xdaa520ff,
          GRAY: 0x808080ff,
          GREEN: 0x008000ff,
          GREENYELLOW: 0xadff2fff,
          GREY: 0x808080ff,
          HONEYDEW: 0xf0fff0ff,
          HOTPINK: 0xff69b4ff,
          INDIANRED: 0xcd5c5cff,
          INDIGO: 0x4b0082ff,
          IVORY: 0xfffff0ff,
          KHAKI: 0xf0e68cff,
          LAVENDER: 0xe6e6faff,
          LAVENDERBLUSH: 0xfff0f5ff,
          LAWNGREEN: 0x7cfc00ff,
          LEMONCHIFFON: 0xfffacdff,
          LIGHTBLUE: 0xadd8e6ff,
          LIGHTCORAL: 0xf08080ff,
          LIGHTCYAN: 0xe0ffffff,
          LIGHTGOLDENRODYELLOW: 0xfafad2ff,
          LIGHTGRAY: 0xd3d3d3ff,
          LIGHTGREEN: 0x90ee90ff,
          LIGHTGREY: 0xd3d3d3ff,
          LIGHTPINK: 0xffb6c1ff,
          LIGHTSALMON: 0xffa07aff,
          LIGHTSEAGREEN: 0x20b2aaff,
          LIGHTSKYBLUE: 0x87cefaff,
          LIGHTSLATEGRAY: 0x778899ff,
          LIGHTSLATEGREY: 0x778899ff,
          LIGHTSTEELBLUE: 0xb0c4deff,
          LIGHTYELLOW: 0xffffe0ff,
          LIME: 0x00ff00ff,
          LIMEGREEN: 0x32cd32ff,
          LINEN: 0xfaf0e6ff,
          MAGENTA: 0xff00ffff,
          MAROON: 0x800000ff,
          MEDIUMAQUAMARINE: 0x66cdaaff,
          MEDIUMBLUE: 0x0000cdff,
          MEDIUMORCHID: 0xba55d3ff,
          MEDIUMPURPLE: 0x9370dbff,
          MEDIUMSEAGREEN: 0x3cb371ff,
          MEDIUMSLATEBLUE: 0x7b68eeff,
          MEDIUMSPRINGGREEN: 0x00fa9aff,
          MEDIUMTURQUOISE: 0x48d1ccff,
          MEDIUMVIOLETRED: 0xc71585ff,
          MIDNIGHTBLUE: 0x191970ff,
          MINTCREAM: 0xf5fffaff,
          MISTYROSE: 0xffe4e1ff,
          MOCCASIN: 0xffe4b5ff,
          NAVAJOWHITE: 0xffdeadff,
          NAVY: 0x000080ff,
          OLDLACE: 0xfdf5e6ff,
          OLIVE: 0x808000ff,
          OLIVEDRAB: 0x6b8e23ff,
          ORANGE: 0xffa500ff,
          ORANGERED: 0xff4500ff,
          ORCHID: 0xda70d6ff,
          PALEGOLDENROD: 0xeee8aaff,
          PALEGREEN: 0x98fb98ff,
          PALETURQUOISE: 0xafeeeeff,
          PALEVIOLETRED: 0xdb7093ff,
          PAPAYAWHIP: 0xffefd5ff,
          PEACHPUFF: 0xffdab9ff,
          PERU: 0xcd853fff,
          PINK: 0xffc0cbff,
          PLUM: 0xdda0ddff,
          POWDERBLUE: 0xb0e0e6ff,
          PURPLE: 0x800080ff,
          REBECCAPURPLE: 0x663399ff,
          RED: 0xff0000ff,
          ROSYBROWN: 0xbc8f8fff,
          ROYALBLUE: 0x4169e1ff,
          SADDLEBROWN: 0x8b4513ff,
          SALMON: 0xfa8072ff,
          SANDYBROWN: 0xf4a460ff,
          SEAGREEN: 0x2e8b57ff,
          SEASHELL: 0xfff5eeff,
          SIENNA: 0xa0522dff,
          SILVER: 0xc0c0c0ff,
          SKYBLUE: 0x87ceebff,
          SLATEBLUE: 0x6a5acdff,
          SLATEGRAY: 0x708090ff,
          SLATEGREY: 0x708090ff,
          SNOW: 0xfffafaff,
          SPRINGGREEN: 0x00ff7fff,
          STEELBLUE: 0x4682b4ff,
          TAN: 0xd2b48cff,
          TEAL: 0x008080ff,
          THISTLE: 0xd8bfd8ff,
          TOMATO: 0xff6347ff,
          TRANSPARENT: 0x00000000,
          TURQUOISE: 0x40e0d0ff,
          VIOLET: 0xee82eeff,
          WHEAT: 0xf5deb3ff,
          WHITE: 0xffffffff,
          WHITESMOKE: 0xf5f5f5ff,
          YELLOW: 0xffff00ff,
          YELLOWGREEN: 0x9acd32ff
        };
        var backgroundClip = {
          name: 'background-clip',
          initialValue: 'border-box',
          prefix: false,
          type: 1
          /* LIST */
          ,
          parse: function parse(_context, tokens) {
            return tokens.map(function (token) {
              if (isIdentToken(token)) {
                switch (token.value) {
                  case 'padding-box':
                    return 1
                    /* PADDING_BOX */
                    ;

                  case 'content-box':
                    return 2
                    /* CONTENT_BOX */
                    ;
                }
              }

              return 0
              /* BORDER_BOX */
              ;
            });
          }
        };
        var backgroundColor = {
          name: "background-color",
          initialValue: 'transparent',
          prefix: false,
          type: 3
          /* TYPE_VALUE */
          ,
          format: 'color'
        };

        var parseColorStop = function parseColorStop(context, args) {
          var color = color$1.parse(context, args[0]);
          var stop = args[1];
          return stop && isLengthPercentage(stop) ? {
            color: color,
            stop: stop
          } : {
            color: color,
            stop: null
          };
        };

        var processColorStops = function processColorStops(stops, lineLength) {
          var first = stops[0];
          var last = stops[stops.length - 1];

          if (first.stop === null) {
            first.stop = ZERO_LENGTH;
          }

          if (last.stop === null) {
            last.stop = HUNDRED_PERCENT;
          }

          var processStops = [];
          var previous = 0;

          for (var i = 0; i < stops.length; i++) {
            var stop_1 = stops[i].stop;

            if (stop_1 !== null) {
              var absoluteValue = getAbsoluteValue(stop_1, lineLength);

              if (absoluteValue > previous) {
                processStops.push(absoluteValue);
              } else {
                processStops.push(previous);
              }

              previous = absoluteValue;
            } else {
              processStops.push(null);
            }
          }

          var gapBegin = null;

          for (var i = 0; i < processStops.length; i++) {
            var stop_2 = processStops[i];

            if (stop_2 === null) {
              if (gapBegin === null) {
                gapBegin = i;
              }
            } else if (gapBegin !== null) {
              var gapLength = i - gapBegin;
              var beforeGap = processStops[gapBegin - 1];
              var gapValue = (stop_2 - beforeGap) / (gapLength + 1);

              for (var g = 1; g <= gapLength; g++) {
                processStops[gapBegin + g - 1] = gapValue * g;
              }

              gapBegin = null;
            }
          }

          return stops.map(function (_a, i) {
            var color = _a.color;
            return {
              color: color,
              stop: Math.max(Math.min(1, processStops[i] / lineLength), 0)
            };
          });
        };

        var getAngleFromCorner = function getAngleFromCorner(corner, width, height) {
          var centerX = width / 2;
          var centerY = height / 2;
          var x = getAbsoluteValue(corner[0], width) - centerX;
          var y = centerY - getAbsoluteValue(corner[1], height);
          return (Math.atan2(y, x) + Math.PI * 2) % (Math.PI * 2);
        };

        var calculateGradientDirection = function calculateGradientDirection(angle, width, height) {
          var radian = typeof angle === 'number' ? angle : getAngleFromCorner(angle, width, height);
          var lineLength = Math.abs(width * Math.sin(radian)) + Math.abs(height * Math.cos(radian));
          var halfWidth = width / 2;
          var halfHeight = height / 2;
          var halfLineLength = lineLength / 2;
          var yDiff = Math.sin(radian - Math.PI / 2) * halfLineLength;
          var xDiff = Math.cos(radian - Math.PI / 2) * halfLineLength;
          return [lineLength, halfWidth - xDiff, halfWidth + xDiff, halfHeight - yDiff, halfHeight + yDiff];
        };

        var distance = function distance(a, b) {
          return Math.sqrt(a * a + b * b);
        };

        var findCorner = function findCorner(width, height, x, y, closest) {
          var corners = [[0, 0], [0, height], [width, 0], [width, height]];
          return corners.reduce(function (stat, corner) {
            var cx = corner[0],
                cy = corner[1];
            var d = distance(x - cx, y - cy);

            if (closest ? d < stat.optimumDistance : d > stat.optimumDistance) {
              return {
                optimumCorner: corner,
                optimumDistance: d
              };
            }

            return stat;
          }, {
            optimumDistance: closest ? Infinity : -Infinity,
            optimumCorner: null
          }).optimumCorner;
        };

        var calculateRadius = function calculateRadius(gradient, x, y, width, height) {
          var rx = 0;
          var ry = 0;

          switch (gradient.size) {
            case 0
            /* CLOSEST_SIDE */
            :
              // The ending shape is sized so that that it exactly meets the side of the gradient box closest to the gradient’s center.
              // If the shape is an ellipse, it exactly meets the closest side in each dimension.
              if (gradient.shape === 0
              /* CIRCLE */
              ) {
                rx = ry = Math.min(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
              } else if (gradient.shape === 1
              /* ELLIPSE */
              ) {
                rx = Math.min(Math.abs(x), Math.abs(x - width));
                ry = Math.min(Math.abs(y), Math.abs(y - height));
              }

              break;

            case 2
            /* CLOSEST_CORNER */
            :
              // The ending shape is sized so that that it passes through the corner of the gradient box closest to the gradient’s center.
              // If the shape is an ellipse, the ending shape is given the same aspect-ratio it would have if closest-side were specified.
              if (gradient.shape === 0
              /* CIRCLE */
              ) {
                rx = ry = Math.min(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
              } else if (gradient.shape === 1
              /* ELLIPSE */
              ) {
                // Compute the ratio ry/rx (which is to be the same as for "closest-side")
                var c = Math.min(Math.abs(y), Math.abs(y - height)) / Math.min(Math.abs(x), Math.abs(x - width));

                var _a = findCorner(width, height, x, y, true),
                    cx = _a[0],
                    cy = _a[1];

                rx = distance(cx - x, (cy - y) / c);
                ry = c * rx;
              }

              break;

            case 1
            /* FARTHEST_SIDE */
            :
              // Same as closest-side, except the ending shape is sized based on the farthest side(s)
              if (gradient.shape === 0
              /* CIRCLE */
              ) {
                rx = ry = Math.max(Math.abs(x), Math.abs(x - width), Math.abs(y), Math.abs(y - height));
              } else if (gradient.shape === 1
              /* ELLIPSE */
              ) {
                rx = Math.max(Math.abs(x), Math.abs(x - width));
                ry = Math.max(Math.abs(y), Math.abs(y - height));
              }

              break;

            case 3
            /* FARTHEST_CORNER */
            :
              // Same as closest-corner, except the ending shape is sized based on the farthest corner.
              // If the shape is an ellipse, the ending shape is given the same aspect ratio it would have if farthest-side were specified.
              if (gradient.shape === 0
              /* CIRCLE */
              ) {
                rx = ry = Math.max(distance(x, y), distance(x, y - height), distance(x - width, y), distance(x - width, y - height));
              } else if (gradient.shape === 1
              /* ELLIPSE */
              ) {
                // Compute the ratio ry/rx (which is to be the same as for "farthest-side")
                var c = Math.max(Math.abs(y), Math.abs(y - height)) / Math.max(Math.abs(x), Math.abs(x - width));

                var _b = findCorner(width, height, x, y, false),
                    cx = _b[0],
                    cy = _b[1];

                rx = distance(cx - x, (cy - y) / c);
                ry = c * rx;
              }

              break;
          }

          if (Array.isArray(gradient.size)) {
            rx = getAbsoluteValue(gradient.size[0], width);
            ry = gradient.size.length === 2 ? getAbsoluteValue(gradient.size[1], height) : rx;
          }

          return [rx, ry];
        };

        var linearGradient = function linearGradient(context, tokens) {
          var angle$1 = deg(180);
          var stops = [];
          parseFunctionArgs(tokens).forEach(function (arg, i) {
            if (i === 0) {
              var firstToken = arg[0];

              if (firstToken.type === 20
              /* IDENT_TOKEN */
              && firstToken.value === 'to') {
                angle$1 = parseNamedSide(arg);
                return;
              } else if (isAngle(firstToken)) {
                angle$1 = angle.parse(context, firstToken);
                return;
              }
            }

            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
          });
          return {
            angle: angle$1,
            stops: stops,
            type: 1
            /* LINEAR_GRADIENT */

          };
        };

        var prefixLinearGradient = function prefixLinearGradient(context, tokens) {
          var angle$1 = deg(180);
          var stops = [];
          parseFunctionArgs(tokens).forEach(function (arg, i) {
            if (i === 0) {
              var firstToken = arg[0];

              if (firstToken.type === 20
              /* IDENT_TOKEN */
              && ['top', 'left', 'right', 'bottom'].indexOf(firstToken.value) !== -1) {
                angle$1 = parseNamedSide(arg);
                return;
              } else if (isAngle(firstToken)) {
                angle$1 = (angle.parse(context, firstToken) + deg(270)) % deg(360);
                return;
              }
            }

            var colorStop = parseColorStop(context, arg);
            stops.push(colorStop);
          });
          return {
            angle: angle$1,
            stops: stops,
            type: 1
            /* LINEAR_GRADIENT */

          };
        };

        var webkitGradient = function webkitGradient(context, tokens) {
          var angle = deg(180);
          var stops = [];
          var type = 1
          /* LINEAR_GRADIENT */
          ;
          var shape = 0
          /* CIRCLE */
          ;
          var size = 3
          /* FARTHEST_CORNER */
          ;
          var position = [];
          parseFunctionArgs(tokens).forEach(function (arg, i) {
            var firstToken = arg[0];

            if (i === 0) {
              if (isIdentToken(firstToken) && firstToken.value === 'linear') {
                type = 1
                /* LINEAR_GRADIENT */
                ;
                return;
              } else if (isIdentToken(firstToken) && firstToken.value === 'radial') {
                type = 2
                /* RADIAL_GRADIENT */
                ;
                return;
              }
            }

            if (firstToken.type === 18
            /* FUNCTION */
            ) {
              if (firstToken.name === 'from') {
                var color = color$1.parse(context, firstToken.values[0]);
                stops.push({
                  stop: ZERO_LENGTH,
                  color: color
                });
              } else if (firstToken.name === 'to') {
                var color = color$1.parse(context, firstToken.values[0]);
                stops.push({
                  stop: HUNDRED_PERCENT,
                  color: color
                });
              } else if (firstToken.name === 'color-stop') {
                var values = firstToken.values.filter(nonFunctionArgSeparator);

                if (values.length === 2) {
                  var color = color$1.parse(context, values[1]);
                  var stop_1 = values[0];

                  if (isNumberToken(stop_1)) {
                    stops.push({
                      stop: {
                        type: 16
                        /* PERCENTAGE_TOKEN */
                        ,
                        number: stop_1.number * 100,
                        flags: stop_1.flags
                      },
                      color: color
                    });
                  }
                }
              }
            }
          });
          return type === 1
          /* LINEAR_GRADIENT */
          ? {
            angle: (angle + deg(180)) % deg(360),
            stops: stops,
            type: type
          } : {
            size: size,
            shape: shape,
            stops: stops,
            position: position,
            type: type
          };
        };

        var CLOSEST_SIDE = 'closest-side';
        var FARTHEST_SIDE = 'farthest-side';
        var CLOSEST_CORNER = 'closest-corner';
        var FARTHEST_CORNER = 'farthest-corner';
        var CIRCLE = 'circle';
        var ELLIPSE = 'ellipse';
        var COVER = 'cover';
        var CONTAIN = 'contain';

        var radialGradient = function radialGradient(context, tokens) {
          var shape = 0
          /* CIRCLE */
          ;
          var size = 3
          /* FARTHEST_CORNER */
          ;
          var stops = [];
          var position = [];
          parseFunctionArgs(tokens).forEach(function (arg, i) {
            var isColorStop = true;

            if (i === 0) {
              var isAtPosition_1 = false;
              isColorStop = arg.reduce(function (acc, token) {
                if (isAtPosition_1) {
                  if (isIdentToken(token)) {
                    switch (token.value) {
                      case 'center':
                        position.push(FIFTY_PERCENT);
                        return acc;

                      case 'top':
                      case 'left':
                        position.push(ZERO_LENGTH);
                        return acc;

                      case 'right':
                      case 'bottom':
                        position.push(HUNDRED_PERCENT);
                        return acc;
                    }
                  } else if (isLengthPercentage(token) || isLength(token)) {
                    position.push(token);
                  }
                } else if (isIdentToken(token)) {
                  switch (token.value) {
                    case CIRCLE:
                      shape = 0
                      /* CIRCLE */
                      ;
                      return false;

                    case ELLIPSE:
                      shape = 1
                      /* ELLIPSE */
                      ;
                      return false;

                    case 'at':
                      isAtPosition_1 = true;
                      return false;

                    case CLOSEST_SIDE:
                      size = 0
                      /* CLOSEST_SIDE */
                      ;
                      return false;

                    case COVER:
                    case FARTHEST_SIDE:
                      size = 1
                      /* FARTHEST_SIDE */
                      ;
                      return false;

                    case CONTAIN:
                    case CLOSEST_CORNER:
                      size = 2
                      /* CLOSEST_CORNER */
                      ;
                      return false;

                    case FARTHEST_CORNER:
                      size = 3
                      /* FARTHEST_CORNER */
                      ;
                      return false;
                  }
                } else if (isLength(token) || isLengthPercentage(token)) {
                  if (!Array.isArray(size)) {
                    size = [];
                  }

                  size.push(token);
                  return false;
                }

                return acc;
              }, isColorStop);
            }

            if (isColorStop) {
              var colorStop = parseColorStop(context, arg);
              stops.push(colorStop);
            }
          });
          return {
            size: size,
            shape: shape,
            stops: stops,
            position: position,
            type: 2
            /* RADIAL_GRADIENT */

          };
        };

        var prefixRadialGradient = function prefixRadialGradient(context, tokens) {
          var shape = 0
          /* CIRCLE */
          ;
          var size = 3
          /* FARTHEST_CORNER */
          ;
          var stops = [];
          var position = [];
          parseFunctionArgs(tokens).forEach(function (arg, i) {
            var isColorStop = true;

            if (i === 0) {
              isColorStop = arg.reduce(function (acc, token) {
                if (isIdentToken(token)) {
                  switch (token.value) {
                    case 'center':
                      position.push(FIFTY_PERCENT);
                      return false;

                    case 'top':
                    case 'left':
                      position.push(ZERO_LENGTH);
                      return false;

                    case 'right':
                    case 'bottom':
                      position.push(HUNDRED_PERCENT);
                      return false;
                  }
                } else if (isLengthPercentage(token) || isLength(token)) {
                  position.push(token);
                  return false;
                }

                return acc;
              }, isColorStop);
            } else if (i === 1) {
              isColorStop = arg.reduce(function (acc, token) {
                if (isIdentToken(token)) {
                  switch (token.value) {
                    case CIRCLE:
                      shape = 0
                      /* CIRCLE */
                      ;
                      return false;

                    case ELLIPSE:
                      shape = 1
                      /* ELLIPSE */
                      ;
                      return false;

                    case CONTAIN:
                    case CLOSEST_SIDE:
                      size = 0
                      /* CLOSEST_SIDE */
                      ;
                      return false;

                    case FARTHEST_SIDE:
                      size = 1
                      /* FARTHEST_SIDE */
                      ;
                      return false;

                    case CLOSEST_CORNER:
                      size = 2
                      /* CLOSEST_CORNER */
                      ;
                      return false;

                    case COVER:
                    case FARTHEST_CORNER:
                      size = 3
                      /* FARTHEST_CORNER */
                      ;
                      return false;
                  }
                } else if (isLength(token) || isLengthPercentage(token)) {
                  if (!Array.isArray(size)) {
                    size = [];
                  }

                  size.push(token);
                  return false;
                }

                return acc;
              }, isColorStop);
            }

            if (isColorStop) {
              var colorStop = parseColorStop(context, arg);
              stops.push(colorStop);
            }
          });
          return {
            size: size,
            shape: shape,
            stops: stops,
            position: position,
            type: 2
            /* RADIAL_GRADIENT */

          };
        };

        var isLinearGradient = function isLinearGradient(background) {
          return background.type === 1
          /* LINEAR_GRADIENT */
          ;
        };

        var isRadialGradient = function isRadialGradient(background) {
          return background.type === 2
          /* RADIAL_GRADIENT */
          ;
        };

        var image = {
          name: 'image',
          parse: function parse(context, value) {
            if (value.type === 22
            /* URL_TOKEN */
            ) {
              var image_1 = {
                url: value.value,
                type: 0
                /* URL */

              };
              context.cache.addImage(value.value);
              return image_1;
            }

            if (value.type === 18
            /* FUNCTION */
            ) {
              var imageFunction = SUPPORTED_IMAGE_FUNCTIONS[value.name];

              if (typeof imageFunction === 'undefined') {
                throw new Error("Attempting to parse an unsupported image function \"" + value.name + "\"");
              }

              return imageFunction(context, value.values);
            }

            throw new Error("Unsupported image type " + value.type);
          }
        };

        function isSupportedImage(value) {
          return !(value.type === 20
          /* IDENT_TOKEN */
          && value.value === 'none') && (value.type !== 18
          /* FUNCTION */
          || !!SUPPORTED_IMAGE_FUNCTIONS[value.name]);
        }

        var SUPPORTED_IMAGE_FUNCTIONS = {
          'linear-gradient': linearGradient,
          '-moz-linear-gradient': prefixLinearGradient,
          '-ms-linear-gradient': prefixLinearGradient,
          '-o-linear-gradient': prefixLinearGradient,
          '-webkit-linear-gradient': prefixLinearGradient,
          'radial-gradient': radialGradient,
          '-moz-radial-gradient': prefixRadialGradient,
          '-ms-radial-gradient': prefixRadialGradient,
          '-o-radial-gradient': prefixRadialGradient,
          '-webkit-radial-gradient': prefixRadialGradient,
          '-webkit-gradient': webkitGradient
        };
        var backgroundImage = {
          name: 'background-image',
          initialValue: 'none',
          type: 1
          /* LIST */
          ,
          prefix: false,
          parse: function parse(context, tokens) {
            if (tokens.length === 0) {
              return [];
            }

            var first = tokens[0];

            if (first.type === 20
            /* IDENT_TOKEN */
            && first.value === 'none') {
              return [];
            }

            return tokens.filter(function (value) {
              return nonFunctionArgSeparator(value) && isSupportedImage(value);
            }).map(function (value) {
              return image.parse(context, value);
            });
          }
        };
        var backgroundOrigin = {
          name: 'background-origin',
          initialValue: 'border-box',
          prefix: false,
          type: 1
          /* LIST */
          ,
          parse: function parse(_context, tokens) {
            return tokens.map(function (token) {
              if (isIdentToken(token)) {
                switch (token.value) {
                  case 'padding-box':
                    return 1
                    /* PADDING_BOX */
                    ;

                  case 'content-box':
                    return 2
                    /* CONTENT_BOX */
                    ;
                }
              }

              return 0
              /* BORDER_BOX */
              ;
            });
          }
        };
        var backgroundPosition = {
          name: 'background-position',
          initialValue: '0% 0%',
          type: 1
          /* LIST */
          ,
          prefix: false,
          parse: function parse(_context, tokens) {
            return parseFunctionArgs(tokens).map(function (values) {
              return values.filter(isLengthPercentage);
            }).map(parseLengthPercentageTuple);
          }
        };
        var backgroundRepeat = {
          name: 'background-repeat',
          initialValue: 'repeat',
          prefix: false,
          type: 1
          /* LIST */
          ,
          parse: function parse(_context, tokens) {
            return parseFunctionArgs(tokens).map(function (values) {
              return values.filter(isIdentToken).map(function (token) {
                return token.value;
              }).join(' ');
            }).map(parseBackgroundRepeat);
          }
        };

        var parseBackgroundRepeat = function parseBackgroundRepeat(value) {
          switch (value) {
            case 'no-repeat':
              return 1
              /* NO_REPEAT */
              ;

            case 'repeat-x':
            case 'repeat no-repeat':
              return 2
              /* REPEAT_X */
              ;

            case 'repeat-y':
            case 'no-repeat repeat':
              return 3
              /* REPEAT_Y */
              ;

            case 'repeat':
            default:
              return 0
              /* REPEAT */
              ;
          }
        };

        var BACKGROUND_SIZE;

        (function (BACKGROUND_SIZE) {
          BACKGROUND_SIZE["AUTO"] = "auto";
          BACKGROUND_SIZE["CONTAIN"] = "contain";
          BACKGROUND_SIZE["COVER"] = "cover";
        })(BACKGROUND_SIZE || (BACKGROUND_SIZE = {}));

        var backgroundSize = {
          name: 'background-size',
          initialValue: '0',
          prefix: false,
          type: 1
          /* LIST */
          ,
          parse: function parse(_context, tokens) {
            return parseFunctionArgs(tokens).map(function (values) {
              return values.filter(isBackgroundSizeInfoToken);
            });
          }
        };

        var isBackgroundSizeInfoToken = function isBackgroundSizeInfoToken(value) {
          return isIdentToken(value) || isLengthPercentage(value);
        };

        var borderColorForSide = function borderColorForSide(side) {
          return {
            name: "border-" + side + "-color",
            initialValue: 'transparent',
            prefix: false,
            type: 3
            /* TYPE_VALUE */
            ,
            format: 'color'
          };
        };

        var borderTopColor = borderColorForSide('top');
        var borderRightColor = borderColorForSide('right');
        var borderBottomColor = borderColorForSide('bottom');
        var borderLeftColor = borderColorForSide('left');

        var borderRadiusForSide = function borderRadiusForSide(side) {
          return {
            name: "border-radius-" + side,
            initialValue: '0 0',
            prefix: false,
            type: 1
            /* LIST */
            ,
            parse: function parse(_context, tokens) {
              return parseLengthPercentageTuple(tokens.filter(isLengthPercentage));
            }
          };
        };

        var borderTopLeftRadius = borderRadiusForSide('top-left');
        var borderTopRightRadius = borderRadiusForSide('top-right');
        var borderBottomRightRadius = borderRadiusForSide('bottom-right');
        var borderBottomLeftRadius = borderRadiusForSide('bottom-left');

        var borderStyleForSide = function borderStyleForSide(side) {
          return {
            name: "border-" + side + "-style",
            initialValue: 'solid',
            prefix: false,
            type: 2
            /* IDENT_VALUE */
            ,
            parse: function parse(_context, style) {
              switch (style) {
                case 'none':
                  return 0
                  /* NONE */
                  ;

                case 'dashed':
                  return 2
                  /* DASHED */
                  ;

                case 'dotted':
                  return 3
                  /* DOTTED */
                  ;

                case 'double':
                  return 4
                  /* DOUBLE */
                  ;
              }

              return 1
              /* SOLID */
              ;
            }
          };
        };

        var borderTopStyle = borderStyleForSide('top');
        var borderRightStyle = borderStyleForSide('right');
        var borderBottomStyle = borderStyleForSide('bottom');
        var borderLeftStyle = borderStyleForSide('left');

        var borderWidthForSide = function borderWidthForSide(side) {
          return {
            name: "border-" + side + "-width",
            initialValue: '0',
            type: 0
            /* VALUE */
            ,
            prefix: false,
            parse: function parse(_context, token) {
              if (isDimensionToken(token)) {
                return token.number;
              }

              return 0;
            }
          };
        };

        var borderTopWidth = borderWidthForSide('top');
        var borderRightWidth = borderWidthForSide('right');
        var borderBottomWidth = borderWidthForSide('bottom');
        var borderLeftWidth = borderWidthForSide('left');
        var color = {
          name: "color",
          initialValue: 'transparent',
          prefix: false,
          type: 3
          /* TYPE_VALUE */
          ,
          format: 'color'
        };
        var direction = {
          name: 'direction',
          initialValue: 'ltr',
          prefix: false,
          type: 2
          /* IDENT_VALUE */
          ,
          parse: function parse(_context, direction) {
            switch (direction) {
              case 'rtl':
                return 1
                /* RTL */
                ;

              case 'ltr':
              default:
                return 0
                /* LTR */
                ;
            }
          }
        };
        var display = {
          name: 'display',
          initialValue: 'inline-block',
          prefix: false,
          type: 1
          /* LIST */
          ,
          parse: function parse(_context, tokens) {
            return tokens.filter(isIdentToken).reduce(function (bit, token) {
              return bit | parseDisplayValue(token.value);
            }, 0
            /* NONE */
            );
          }
        };

        var parseDisplayValue = function parseDisplayValue(display) {
          switch (display) {
            case 'block':
            case '-webkit-box':
              return 2
              /* BLOCK */
              ;

            case 'inline':
              return 4
              /* INLINE */
              ;

            case 'run-in':
              return 8
              /* RUN_IN */
              ;

            case 'flow':
              return 16
              /* FLOW */
              ;

            case 'flow-root':
              return 32
              /* FLOW_ROOT */
              ;

            case 'table':
              return 64
              /* TABLE */
              ;

            case 'flex':
            case '-webkit-flex':
              return 128
              /* FLEX */
              ;

            case 'grid':
            case '-ms-grid':
              return 256
              /* GRID */
              ;

            case 'ruby':
              return 512
              /* RUBY */
              ;

            case 'subgrid':
              return 1024
              /* SUBGRID */
              ;

            case 'list-item':
              return 2048
              /* LIST_ITEM */
              ;

            case 'table-row-group':
              return 4096
              /* TABLE_ROW_GROUP */
              ;

            case 'table-header-group':
              return 8192
              /* TABLE_HEADER_GROUP */
              ;

            case 'table-footer-group':
              return 16384
              /* TABLE_FOOTER_GROUP */
              ;

            case 'table-row':
              return 32768
              /* TABLE_ROW */
              ;

            case 'table-cell':
              return 65536
              /* TABLE_CELL */
              ;

            case 'table-column-group':
              return 131072
              /* TABLE_COLUMN_GROUP */
              ;

            case 'table-column':
              return 262144
              /* TABLE_COLUMN */
              ;

            case 'table-caption':
              return 524288
              /* TABLE_CAPTION */
              ;

            case 'ruby-base':
              return 1048576
              /* RUBY_BASE */
              ;

            case 'ruby-text':
              return 2097152
              /* RUBY_TEXT */
              ;

            case 'ruby-base-container':
              return 4194304
              /* RUBY_BASE_CONTAINER */
              ;

            case 'ruby-text-container':
              return 8388608
              /* RUBY_TEXT_CONTAINER */
              ;

            case 'contents':
              return 16777216
              /* CONTENTS */
              ;

            case 'inline-block':
              return 33554432
              /* INLINE_BLOCK */
              ;

            case 'inline-list-item':
              return 67108864
              /* INLINE_LIST_ITEM */
              ;

            case 'inline-table':
              return 134217728
              /* INLINE_TABLE */
              ;

            case 'inline-flex':
              return 268435456
              /* INLINE_FLEX */
              ;

            case 'inline-grid':
              return 536870912
              /* INLINE_GRID */
              ;
          }

          return 0
          /* NONE */
          ;
        };

        var _float = {
          name: 'float',
          initialValue: 'none',
          prefix: false,
          type: 2
          /* IDENT_VALUE */
          ,
          parse: function parse(_context, _float2) {
            switch (_float2) {
              case 'left':
                return 1
                /* LEFT */
                ;

              case 'right':
                return 2
                /* RIGHT */
                ;

              case 'inline-start':
                return 3
                /* INLINE_START */
                ;

              case 'inline-end':
                return 4
                /* INLINE_END */
                ;
            }

            return 0
            /* NONE */
            ;
          }
        };
        var letterSpacing = {
          name: 'letter-spacing',
          initialValue: '0',
          prefix: false,
          type: 0
          /* VALUE */
          ,
          parse: function parse(_context, token) {
            if (token.type === 20
            /* IDENT_TOKEN */
            && token.value === 'normal') {
              return 0;
            }

            if (token.type === 17
            /* NUMBER_TOKEN */
            ) {
              return token.number;
            }

            if (token.type === 15
            /* DIMENSION_TOKEN */
            ) {
              return token.number;
            }

            return 0;
          }
        };
        var LINE_BREAK;

        (function (LINE_BREAK) {
          LINE_BREAK["NORMAL"] = "normal";
          LINE_BREAK["STRICT"] = "strict";
        })(LINE_BREAK || (LINE_BREAK = {}));

        var lineBreak = {
          name: 'line-break',
          initialValue: 'normal',
          prefix: false,
          type: 2
          /* IDENT_VALUE */
          ,
          parse: function parse(_context, lineBreak) {
            switch (lineBreak) {
              case 'strict':
                return LINE_BREAK.STRICT;

              case 'normal':
              default:
                return LINE_BREAK.NORMAL;
            }
          }
        };
        var lineHeight = {
          name: 'line-height',
          initialValue: 'normal',
          prefix: false,
          type: 4
          /* TOKEN_VALUE */

        };

        var computeLineHeight = function computeLineHeight(token, fontSize) {
          if (isIdentToken(token) && token.value === 'normal') {
            return 1.2 * fontSize;
          } else if (token.type === 17
          /* NUMBER_TOKEN */
          ) {
            return fontSize * token.number;
          } else if (isLengthPercentage(token)) {
            return getAbsoluteValue(token, fontSize);
          }

          return fontSize;
        };

        var listStyleImage = {
          name: 'list-style-image',
          initialValue: 'none',
          type: 0
          /* VALUE */
          ,
          prefix: false,
          parse: function parse(context, token) {
            if (token.type === 20
            /* IDENT_TOKEN */
            && token.value === 'none') {
              return null;
            }

            return image.parse(context, token);
          }
        };
        var listStylePosition = {
          name: 'list-style-position',
          initialValue: 'outside',
          prefix: false,
          type: 2
          /* IDENT_VALUE */
          ,
          parse: function parse(_context, position) {
            switch (position) {
              case 'inside':
                return 0
                /* INSIDE */
                ;

              case 'outside':
              default:
                return 1
                /* OUTSIDE */
                ;
            }
          }
        };
        var listStyleType = {
          name: 'list-style-type',
          initialValue: 'none',
          prefix: false,
          type: 2
          /* IDENT_VALUE */
          ,
          parse: function parse(_context, type) {
            switch (type) {
              case 'disc':
                return 0
                /* DISC */
                ;

              case 'circle':
                return 1
                /* CIRCLE */
                ;

              case 'square':
                return 2
                /* SQUARE */
                ;

              case 'decimal':
                return 3
                /* DECIMAL */
                ;

              case 'cjk-decimal':
                return 4
                /* CJK_DECIMAL */
                ;

              case 'decimal-leading-zero':
                return 5
                /* DECIMAL_LEADING_ZERO */
                ;

              case 'lower-roman':
                return 6
                /* LOWER_ROMAN */
                ;

              case 'upper-roman':
                return 7
                /* UPPER_ROMAN */
                ;

              case 'lower-greek':
                return 8
                /* LOWER_GREEK */
                ;

              case 'lower-alpha':
                return 9
                /* LOWER_ALPHA */
                ;

              case 'upper-alpha':
                return 10
                /* UPPER_ALPHA */
                ;

              case 'arabic-indic':
                return 11
                /* ARABIC_INDIC */
                ;

              case 'armenian':
                return 12
                /* ARMENIAN */
                ;

              case 'bengali':
                return 13
                /* BENGALI */
                ;

              case 'cambodian':
                return 14
                /* CAMBODIAN */
                ;

              case 'cjk-earthly-branch':
                return 15
                /* CJK_EARTHLY_BRANCH */
                ;

              case 'cjk-heavenly-stem':
                return 16
                /* CJK_HEAVENLY_STEM */
                ;

              case 'cjk-ideographic':
                return 17
                /* CJK_IDEOGRAPHIC */
                ;

              case 'devanagari':
                return 18
                /* DEVANAGARI */
                ;

              case 'ethiopic-numeric':
                return 19
                /* ETHIOPIC_NUMERIC */
                ;

              case 'georgian':
                return 20
                /* GEORGIAN */
                ;

              case 'gujarati':
                return 21
                /* GUJARATI */
                ;

              case 'gurmukhi':
                return 22
                /* GURMUKHI */
                ;

              case 'hebrew':
                return 22
                /* HEBREW */
                ;

              case 'hiragana':
                return 23
                /* HIRAGANA */
                ;

              case 'hiragana-iroha':
                return 24
                /* HIRAGANA_IROHA */
                ;

              case 'japanese-formal':
                return 25
                /* JAPANESE_FORMAL */
                ;

              case 'japanese-informal':
                return 26
                /* JAPANESE_INFORMAL */
                ;

              case 'kannada':
                return 27
                /* KANNADA */
                ;

              case 'katakana':
                return 28
                /* KATAKANA */
                ;

              case 'katakana-iroha':
                return 29
                /* KATAKANA_IROHA */
                ;

              case 'khmer':
                return 30
                /* KHMER */
                ;

              case 'korean-hangul-formal':
                return 31
                /* KOREAN_HANGUL_FORMAL */
                ;

              case 'korean-hanja-formal':
                return 32
                /* KOREAN_HANJA_FORMAL */
                ;

              case 'korean-hanja-informal':
                return 33
                /* KOREAN_HANJA_INFORMAL */
                ;

              case 'lao':
                return 34
                /* LAO */
                ;

              case 'lower-armenian':
                return 35
                /* LOWER_ARMENIAN */
                ;

              case 'malayalam':
                return 36
                /* MALAYALAM */
                ;

              case 'mongolian':
                return 37
                /* MONGOLIAN */
                ;

              case 'myanmar':
                return 38
                /* MYANMAR */
                ;

              case 'oriya':
                return 39
                /* ORIYA */
                ;

              case 'persian':
                return 40
                /* PERSIAN */
                ;

              case 'simp-chinese-formal':
                return 41
                /* SIMP_CHINESE_FORMAL */
                ;

              case 'simp-chinese-informal':
                return 42
                /* SIMP_CHINESE_INFORMAL */
                ;

              case 'tamil':
                return 43
                /* TAMIL */
                ;

              case 'telugu':
                return 44
                /* TELUGU */
                ;

              case 'thai':
                return 45
                /* THAI */
                ;

              case 'tibetan':
                return 46
                /* TIBETAN */
                ;

              case 'trad-chinese-formal':
                return 47
                /* TRAD_CHINESE_FORMAL */
                ;

              case 'trad-chinese-informal':
                return 48
                /* TRAD_CHINESE_INFORMAL */
                ;

              case 'upper-armenian':
                return 49
                /* UPPER_ARMENIAN */
                ;

              case 'disclosure-open':
                return 50
                /* DISCLOSURE_OPEN */
                ;

              case 'disclosure-closed':
                return 51
                /* DISCLOSURE_CLOSED */
                ;

              case 'none':
              default:
                return -1
                /* NONE */
                ;
            }
          }
        };

        var marginForSide = function marginForSide(side) {
          return {
            name: "margin-" + side,
            initialValue: '0',
            prefix: false,
            type: 4
            /* TOKEN_VALUE */

          };
        };

        var marginTop = marginForSide('top');
        var marginRight = marginForSide('right');
        var marginBottom = marginForSide('bottom');
        var marginLeft = marginForSide('left');
        var overflow = {
          name: 'overflow',
          initialValue: 'visible',
          prefix: false,
          type: 1
          /* LIST */
          ,
          parse: function parse(_context, tokens) {
            return tokens.filter(isIdentToken).map(function (overflow) {
              switch (overflow.value) {
                case 'hidden':
                  return 1
                  /* HIDDEN */
                  ;

                case 'scroll':
                  return 2
                  /* SCROLL */
                  ;

                case 'clip':
                  return 3
                  /* CLIP */
                  ;

                case 'auto':
                  return 4
                  /* AUTO */
                  ;

                case 'visible':
                default:
                  return 0
                  /* VISIBLE */
                  ;
              }
            });
          }
        };
        var overflowWrap = {
          name: 'overflow-wrap',
          initialValue: 'normal',
          prefix: false,
          type: 2
          /* IDENT_VALUE */
          ,
          parse: function parse(_context, overflow) {
            switch (overflow) {
              case 'break-word':
                return "break-word"
                /* BREAK_WORD */
                ;

              case 'normal':
              default:
                return "normal"
                /* NORMAL */
                ;
            }
          }
        };

        var paddingForSide = function paddingForSide(side) {
          return {
            name: "padding-" + side,
            initialValue: '0',
            prefix: false,
            type: 3
            /* TYPE_VALUE */
            ,
            format: 'length-percentage'
          };
        };

        var paddingTop = paddingForSide('top');
        var paddingRight = paddingForSide('right');
        var paddingBottom = paddingForSide('bottom');
        var paddingLeft = paddingForSide('left');
        var textAlign = {
          name: 'text-align',
          initialValue: 'left',
          prefix: false,
          type: 2
          /* IDENT_VALUE */
          ,
          parse: function parse(_context, textAlign) {
            switch (textAlign) {
              case 'right':
                return 2
                /* RIGHT */
                ;

              case 'center':
              case 'justify':
                return 1
                /* CENTER */
                ;

              case 'left':
              default:
                return 0
                /* LEFT */
                ;
            }
          }
        };
        var position = {
          name: 'position',
          initialValue: 'static',
          prefix: false,
          type: 2
          /* IDENT_VALUE */
          ,
          parse: function parse(_context, position) {
            switch (position) {
              case 'relative':
                return 1
                /* RELATIVE */
                ;

              case 'absolute':
                return 2
                /* ABSOLUTE */
                ;

              case 'fixed':
                return 3
                /* FIXED */
                ;

              case 'sticky':
                return 4
                /* STICKY */
                ;
            }

            return 0
            /* STATIC */
            ;
          }
        };
        var textShadow = {
          name: 'text-shadow',
          initialValue: 'none',
          type: 1
          /* LIST */
          ,
          prefix: false,
          parse: function parse(context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
              return [];
            }

            return parseFunctionArgs(tokens).map(function (values) {
              var shadow = {
                color: COLORS.TRANSPARENT,
                offsetX: ZERO_LENGTH,
                offsetY: ZERO_LENGTH,
                blur: ZERO_LENGTH
              };
              var c = 0;

              for (var i = 0; i < values.length; i++) {
                var token = values[i];

                if (isLength(token)) {
                  if (c === 0) {
                    shadow.offsetX = token;
                  } else if (c === 1) {
                    shadow.offsetY = token;
                  } else {
                    shadow.blur = token;
                  }

                  c++;
                } else {
                  shadow.color = color$1.parse(context, token);
                }
              }

              return shadow;
            });
          }
        };
        var textTransform = {
          name: 'text-transform',
          initialValue: 'none',
          prefix: false,
          type: 2
          /* IDENT_VALUE */
          ,
          parse: function parse(_context, textTransform) {
            switch (textTransform) {
              case 'uppercase':
                return 2
                /* UPPERCASE */
                ;

              case 'lowercase':
                return 1
                /* LOWERCASE */
                ;

              case 'capitalize':
                return 3
                /* CAPITALIZE */
                ;
            }

            return 0
            /* NONE */
            ;
          }
        };
        var transform$1 = {
          name: 'transform',
          initialValue: 'none',
          prefix: true,
          type: 0
          /* VALUE */
          ,
          parse: function parse(_context, token) {
            if (token.type === 20
            /* IDENT_TOKEN */
            && token.value === 'none') {
              return null;
            }

            if (token.type === 18
            /* FUNCTION */
            ) {
              var transformFunction = SUPPORTED_TRANSFORM_FUNCTIONS[token.name];

              if (typeof transformFunction === 'undefined') {
                throw new Error("Attempting to parse an unsupported transform function \"" + token.name + "\"");
              }

              return transformFunction(token.values);
            }

            return null;
          }
        };

        var matrix = function matrix(args) {
          var values = args.filter(function (arg) {
            return arg.type === 17
            /* NUMBER_TOKEN */
            ;
          }).map(function (arg) {
            return arg.number;
          });
          return values.length === 6 ? values : null;
        }; // doesn't support 3D transforms at the moment


        var matrix3d = function matrix3d(args) {
          var values = args.filter(function (arg) {
            return arg.type === 17
            /* NUMBER_TOKEN */
            ;
          }).map(function (arg) {
            return arg.number;
          });
          var a1 = values[0],
              b1 = values[1];
          values[2];
          values[3];
          var a2 = values[4],
              b2 = values[5];
          values[6];
          values[7];
          values[8];
          values[9];
          values[10];
          values[11];
          var a4 = values[12],
              b4 = values[13];
          values[14];
          values[15];
          return values.length === 16 ? [a1, b1, a2, b2, a4, b4] : null;
        };

        var SUPPORTED_TRANSFORM_FUNCTIONS = {
          matrix: matrix,
          matrix3d: matrix3d
        };
        var DEFAULT_VALUE = {
          type: 16
          /* PERCENTAGE_TOKEN */
          ,
          number: 50,
          flags: FLAG_INTEGER
        };
        var DEFAULT = [DEFAULT_VALUE, DEFAULT_VALUE];
        var transformOrigin = {
          name: 'transform-origin',
          initialValue: '50% 50%',
          prefix: true,
          type: 1
          /* LIST */
          ,
          parse: function parse(_context, tokens) {
            var origins = tokens.filter(isLengthPercentage);

            if (origins.length !== 2) {
              return DEFAULT;
            }

            return [origins[0], origins[1]];
          }
        };
        var visibility = {
          name: 'visible',
          initialValue: 'none',
          prefix: false,
          type: 2
          /* IDENT_VALUE */
          ,
          parse: function parse(_context, visibility) {
            switch (visibility) {
              case 'hidden':
                return 1
                /* HIDDEN */
                ;

              case 'collapse':
                return 2
                /* COLLAPSE */
                ;

              case 'visible':
              default:
                return 0
                /* VISIBLE */
                ;
            }
          }
        };
        var WORD_BREAK;

        (function (WORD_BREAK) {
          WORD_BREAK["NORMAL"] = "normal";
          WORD_BREAK["BREAK_ALL"] = "break-all";
          WORD_BREAK["KEEP_ALL"] = "keep-all";
        })(WORD_BREAK || (WORD_BREAK = {}));

        var wordBreak = {
          name: 'word-break',
          initialValue: 'normal',
          prefix: false,
          type: 2
          /* IDENT_VALUE */
          ,
          parse: function parse(_context, wordBreak) {
            switch (wordBreak) {
              case 'break-all':
                return WORD_BREAK.BREAK_ALL;

              case 'keep-all':
                return WORD_BREAK.KEEP_ALL;

              case 'normal':
              default:
                return WORD_BREAK.NORMAL;
            }
          }
        };
        var zIndex = {
          name: 'z-index',
          initialValue: 'auto',
          prefix: false,
          type: 0
          /* VALUE */
          ,
          parse: function parse(_context, token) {
            if (token.type === 20
            /* IDENT_TOKEN */
            ) {
              return {
                auto: true,
                order: 0
              };
            }

            if (isNumberToken(token)) {
              return {
                auto: false,
                order: token.number
              };
            }

            throw new Error("Invalid z-index number parsed");
          }
        };
        var time = {
          name: 'time',
          parse: function parse(_context, value) {
            if (value.type === 15
            /* DIMENSION_TOKEN */
            ) {
              switch (value.unit.toLowerCase()) {
                case 's':
                  return 1000 * value.number;

                case 'ms':
                  return value.number;
              }
            }

            throw new Error("Unsupported time type");
          }
        };
        var opacity = {
          name: 'opacity',
          initialValue: '1',
          type: 0
          /* VALUE */
          ,
          prefix: false,
          parse: function parse(_context, token) {
            if (isNumberToken(token)) {
              return token.number;
            }

            return 1;
          }
        };
        var textDecorationColor = {
          name: "text-decoration-color",
          initialValue: 'transparent',
          prefix: false,
          type: 3
          /* TYPE_VALUE */
          ,
          format: 'color'
        };
        var textDecorationLine = {
          name: 'text-decoration-line',
          initialValue: 'none',
          prefix: false,
          type: 1
          /* LIST */
          ,
          parse: function parse(_context, tokens) {
            return tokens.filter(isIdentToken).map(function (token) {
              switch (token.value) {
                case 'underline':
                  return 1
                  /* UNDERLINE */
                  ;

                case 'overline':
                  return 2
                  /* OVERLINE */
                  ;

                case 'line-through':
                  return 3
                  /* LINE_THROUGH */
                  ;

                case 'none':
                  return 4
                  /* BLINK */
                  ;
              }

              return 0
              /* NONE */
              ;
            }).filter(function (line) {
              return line !== 0
              /* NONE */
              ;
            });
          }
        };
        var fontFamily = {
          name: "font-family",
          initialValue: '',
          prefix: false,
          type: 1
          /* LIST */
          ,
          parse: function parse(_context, tokens) {
            var accumulator = [];
            var results = [];
            tokens.forEach(function (token) {
              switch (token.type) {
                case 20
                /* IDENT_TOKEN */
                :
                case 0
                /* STRING_TOKEN */
                :
                  accumulator.push(token.value);
                  break;

                case 17
                /* NUMBER_TOKEN */
                :
                  accumulator.push(token.number.toString());
                  break;

                case 4
                /* COMMA_TOKEN */
                :
                  results.push(accumulator.join(' '));
                  accumulator.length = 0;
                  break;
              }
            });

            if (accumulator.length) {
              results.push(accumulator.join(' '));
            }

            return results.map(function (result) {
              return result.indexOf(' ') === -1 ? result : "'" + result + "'";
            });
          }
        };
        var fontSize = {
          name: "font-size",
          initialValue: '0',
          prefix: false,
          type: 3
          /* TYPE_VALUE */
          ,
          format: 'length'
        };
        var fontWeight = {
          name: 'font-weight',
          initialValue: 'normal',
          type: 0
          /* VALUE */
          ,
          prefix: false,
          parse: function parse(_context, token) {
            if (isNumberToken(token)) {
              return token.number;
            }

            if (isIdentToken(token)) {
              switch (token.value) {
                case 'bold':
                  return 700;

                case 'normal':
                default:
                  return 400;
              }
            }

            return 400;
          }
        };
        var fontVariant = {
          name: 'font-variant',
          initialValue: 'none',
          type: 1
          /* LIST */
          ,
          prefix: false,
          parse: function parse(_context, tokens) {
            return tokens.filter(isIdentToken).map(function (token) {
              return token.value;
            });
          }
        };
        var fontStyle = {
          name: 'font-style',
          initialValue: 'normal',
          prefix: false,
          type: 2
          /* IDENT_VALUE */
          ,
          parse: function parse(_context, overflow) {
            switch (overflow) {
              case 'oblique':
                return "oblique"
                /* OBLIQUE */
                ;

              case 'italic':
                return "italic"
                /* ITALIC */
                ;

              case 'normal':
              default:
                return "normal"
                /* NORMAL */
                ;
            }
          }
        };

        var contains = function contains(bit, value) {
          return (bit & value) !== 0;
        };

        var content = {
          name: 'content',
          initialValue: 'none',
          type: 1
          /* LIST */
          ,
          prefix: false,
          parse: function parse(_context, tokens) {
            if (tokens.length === 0) {
              return [];
            }

            var first = tokens[0];

            if (first.type === 20
            /* IDENT_TOKEN */
            && first.value === 'none') {
              return [];
            }

            return tokens;
          }
        };
        var counterIncrement = {
          name: 'counter-increment',
          initialValue: 'none',
          prefix: true,
          type: 1
          /* LIST */
          ,
          parse: function parse(_context, tokens) {
            if (tokens.length === 0) {
              return null;
            }

            var first = tokens[0];

            if (first.type === 20
            /* IDENT_TOKEN */
            && first.value === 'none') {
              return null;
            }

            var increments = [];
            var filtered = tokens.filter(nonWhiteSpace);

            for (var i = 0; i < filtered.length; i++) {
              var counter = filtered[i];
              var next = filtered[i + 1];

              if (counter.type === 20
              /* IDENT_TOKEN */
              ) {
                var increment = next && isNumberToken(next) ? next.number : 1;
                increments.push({
                  counter: counter.value,
                  increment: increment
                });
              }
            }

            return increments;
          }
        };
        var counterReset = {
          name: 'counter-reset',
          initialValue: 'none',
          prefix: true,
          type: 1
          /* LIST */
          ,
          parse: function parse(_context, tokens) {
            if (tokens.length === 0) {
              return [];
            }

            var resets = [];
            var filtered = tokens.filter(nonWhiteSpace);

            for (var i = 0; i < filtered.length; i++) {
              var counter = filtered[i];
              var next = filtered[i + 1];

              if (isIdentToken(counter) && counter.value !== 'none') {
                var reset = next && isNumberToken(next) ? next.number : 0;
                resets.push({
                  counter: counter.value,
                  reset: reset
                });
              }
            }

            return resets;
          }
        };
        var duration = {
          name: 'duration',
          initialValue: '0s',
          prefix: false,
          type: 1
          /* LIST */
          ,
          parse: function parse(context, tokens) {
            return tokens.filter(isDimensionToken).map(function (token) {
              return time.parse(context, token);
            });
          }
        };
        var quotes = {
          name: 'quotes',
          initialValue: 'none',
          prefix: true,
          type: 1
          /* LIST */
          ,
          parse: function parse(_context, tokens) {
            if (tokens.length === 0) {
              return null;
            }

            var first = tokens[0];

            if (first.type === 20
            /* IDENT_TOKEN */
            && first.value === 'none') {
              return null;
            }

            var quotes = [];
            var filtered = tokens.filter(isStringToken);

            if (filtered.length % 2 !== 0) {
              return null;
            }

            for (var i = 0; i < filtered.length; i += 2) {
              var open_1 = filtered[i].value;
              var close_1 = filtered[i + 1].value;
              quotes.push({
                open: open_1,
                close: close_1
              });
            }

            return quotes;
          }
        };

        var getQuote = function getQuote(quotes, depth, open) {
          if (!quotes) {
            return '';
          }

          var quote = quotes[Math.min(depth, quotes.length - 1)];

          if (!quote) {
            return '';
          }

          return open ? quote.open : quote.close;
        };

        var boxShadow = {
          name: 'box-shadow',
          initialValue: 'none',
          type: 1
          /* LIST */
          ,
          prefix: false,
          parse: function parse(context, tokens) {
            if (tokens.length === 1 && isIdentWithValue(tokens[0], 'none')) {
              return [];
            }

            return parseFunctionArgs(tokens).map(function (values) {
              var shadow = {
                color: 0x000000ff,
                offsetX: ZERO_LENGTH,
                offsetY: ZERO_LENGTH,
                blur: ZERO_LENGTH,
                spread: ZERO_LENGTH,
                inset: false
              };
              var c = 0;

              for (var i = 0; i < values.length; i++) {
                var token = values[i];

                if (isIdentWithValue(token, 'inset')) {
                  shadow.inset = true;
                } else if (isLength(token)) {
                  if (c === 0) {
                    shadow.offsetX = token;
                  } else if (c === 1) {
                    shadow.offsetY = token;
                  } else if (c === 2) {
                    shadow.blur = token;
                  } else {
                    shadow.spread = token;
                  }

                  c++;
                } else {
                  shadow.color = color$1.parse(context, token);
                }
              }

              return shadow;
            });
          }
        };
        var paintOrder = {
          name: 'paint-order',
          initialValue: 'normal',
          prefix: false,
          type: 1
          /* LIST */
          ,
          parse: function parse(_context, tokens) {
            var DEFAULT_VALUE = [0
            /* FILL */
            , 1
            /* STROKE */
            , 2
            /* MARKERS */
            ];
            var layers = [];
            tokens.filter(isIdentToken).forEach(function (token) {
              switch (token.value) {
                case 'stroke':
                  layers.push(1
                  /* STROKE */
                  );
                  break;

                case 'fill':
                  layers.push(0
                  /* FILL */
                  );
                  break;

                case 'markers':
                  layers.push(2
                  /* MARKERS */
                  );
                  break;
              }
            });
            DEFAULT_VALUE.forEach(function (value) {
              if (layers.indexOf(value) === -1) {
                layers.push(value);
              }
            });
            return layers;
          }
        };
        var webkitTextStrokeColor = {
          name: "-webkit-text-stroke-color",
          initialValue: 'currentcolor',
          prefix: false,
          type: 3
          /* TYPE_VALUE */
          ,
          format: 'color'
        };
        var webkitTextStrokeWidth = {
          name: "-webkit-text-stroke-width",
          initialValue: '0',
          type: 0
          /* VALUE */
          ,
          prefix: false,
          parse: function parse(_context, token) {
            if (isDimensionToken(token)) {
              return token.number;
            }

            return 0;
          }
        };

        var CSSParsedDeclaration =
        /** @class */
        function () {
          function CSSParsedDeclaration(context, declaration) {
            var _a, _b;

            this.animationDuration = parse(context, duration, declaration.animationDuration);
            this.backgroundClip = parse(context, backgroundClip, declaration.backgroundClip);
            this.backgroundColor = parse(context, backgroundColor, declaration.backgroundColor);
            this.backgroundImage = parse(context, backgroundImage, declaration.backgroundImage);
            this.backgroundOrigin = parse(context, backgroundOrigin, declaration.backgroundOrigin);
            this.backgroundPosition = parse(context, backgroundPosition, declaration.backgroundPosition);
            this.backgroundRepeat = parse(context, backgroundRepeat, declaration.backgroundRepeat);
            this.backgroundSize = parse(context, backgroundSize, declaration.backgroundSize);
            this.borderTopColor = parse(context, borderTopColor, declaration.borderTopColor);
            this.borderRightColor = parse(context, borderRightColor, declaration.borderRightColor);
            this.borderBottomColor = parse(context, borderBottomColor, declaration.borderBottomColor);
            this.borderLeftColor = parse(context, borderLeftColor, declaration.borderLeftColor);
            this.borderTopLeftRadius = parse(context, borderTopLeftRadius, declaration.borderTopLeftRadius);
            this.borderTopRightRadius = parse(context, borderTopRightRadius, declaration.borderTopRightRadius);
            this.borderBottomRightRadius = parse(context, borderBottomRightRadius, declaration.borderBottomRightRadius);
            this.borderBottomLeftRadius = parse(context, borderBottomLeftRadius, declaration.borderBottomLeftRadius);
            this.borderTopStyle = parse(context, borderTopStyle, declaration.borderTopStyle);
            this.borderRightStyle = parse(context, borderRightStyle, declaration.borderRightStyle);
            this.borderBottomStyle = parse(context, borderBottomStyle, declaration.borderBottomStyle);
            this.borderLeftStyle = parse(context, borderLeftStyle, declaration.borderLeftStyle);
            this.borderTopWidth = parse(context, borderTopWidth, declaration.borderTopWidth);
            this.borderRightWidth = parse(context, borderRightWidth, declaration.borderRightWidth);
            this.borderBottomWidth = parse(context, borderBottomWidth, declaration.borderBottomWidth);
            this.borderLeftWidth = parse(context, borderLeftWidth, declaration.borderLeftWidth);
            this.boxShadow = parse(context, boxShadow, declaration.boxShadow);
            this.color = parse(context, color, declaration.color);
            this.direction = parse(context, direction, declaration.direction);
            this.display = parse(context, display, declaration.display);
            this["float"] = parse(context, _float, declaration.cssFloat);
            this.fontFamily = parse(context, fontFamily, declaration.fontFamily);
            this.fontSize = parse(context, fontSize, declaration.fontSize);
            this.fontStyle = parse(context, fontStyle, declaration.fontStyle);
            this.fontVariant = parse(context, fontVariant, declaration.fontVariant);
            this.fontWeight = parse(context, fontWeight, declaration.fontWeight);
            this.letterSpacing = parse(context, letterSpacing, declaration.letterSpacing);
            this.lineBreak = parse(context, lineBreak, declaration.lineBreak);
            this.lineHeight = parse(context, lineHeight, declaration.lineHeight);
            this.listStyleImage = parse(context, listStyleImage, declaration.listStyleImage);
            this.listStylePosition = parse(context, listStylePosition, declaration.listStylePosition);
            this.listStyleType = parse(context, listStyleType, declaration.listStyleType);
            this.marginTop = parse(context, marginTop, declaration.marginTop);
            this.marginRight = parse(context, marginRight, declaration.marginRight);
            this.marginBottom = parse(context, marginBottom, declaration.marginBottom);
            this.marginLeft = parse(context, marginLeft, declaration.marginLeft);
            this.opacity = parse(context, opacity, declaration.opacity);
            var overflowTuple = parse(context, overflow, declaration.overflow);
            this.overflowX = overflowTuple[0];
            this.overflowY = overflowTuple[overflowTuple.length > 1 ? 1 : 0];
            this.overflowWrap = parse(context, overflowWrap, declaration.overflowWrap);
            this.paddingTop = parse(context, paddingTop, declaration.paddingTop);
            this.paddingRight = parse(context, paddingRight, declaration.paddingRight);
            this.paddingBottom = parse(context, paddingBottom, declaration.paddingBottom);
            this.paddingLeft = parse(context, paddingLeft, declaration.paddingLeft);
            this.paintOrder = parse(context, paintOrder, declaration.paintOrder);
            this.position = parse(context, position, declaration.position);
            this.textAlign = parse(context, textAlign, declaration.textAlign);
            this.textDecorationColor = parse(context, textDecorationColor, (_a = declaration.textDecorationColor) !== null && _a !== void 0 ? _a : declaration.color);
            this.textDecorationLine = parse(context, textDecorationLine, (_b = declaration.textDecorationLine) !== null && _b !== void 0 ? _b : declaration.textDecoration);
            this.textShadow = parse(context, textShadow, declaration.textShadow);
            this.textTransform = parse(context, textTransform, declaration.textTransform);
            this.transform = parse(context, transform$1, declaration.transform);
            this.transformOrigin = parse(context, transformOrigin, declaration.transformOrigin);
            this.visibility = parse(context, visibility, declaration.visibility);
            this.webkitTextStrokeColor = parse(context, webkitTextStrokeColor, declaration.webkitTextStrokeColor);
            this.webkitTextStrokeWidth = parse(context, webkitTextStrokeWidth, declaration.webkitTextStrokeWidth);
            this.wordBreak = parse(context, wordBreak, declaration.wordBreak);
            this.zIndex = parse(context, zIndex, declaration.zIndex);
          }

          CSSParsedDeclaration.prototype.isVisible = function () {
            return this.display > 0 && this.opacity > 0 && this.visibility === 0
            /* VISIBLE */
            ;
          };

          CSSParsedDeclaration.prototype.isTransparent = function () {
            return isTransparent(this.backgroundColor);
          };

          CSSParsedDeclaration.prototype.isTransformed = function () {
            return this.transform !== null;
          };

          CSSParsedDeclaration.prototype.isPositioned = function () {
            return this.position !== 0
            /* STATIC */
            ;
          };

          CSSParsedDeclaration.prototype.isPositionedWithZIndex = function () {
            return this.isPositioned() && !this.zIndex.auto;
          };

          CSSParsedDeclaration.prototype.isFloating = function () {
            return this["float"] !== 0
            /* NONE */
            ;
          };

          CSSParsedDeclaration.prototype.isInlineLevel = function () {
            return contains(this.display, 4
            /* INLINE */
            ) || contains(this.display, 33554432
            /* INLINE_BLOCK */
            ) || contains(this.display, 268435456
            /* INLINE_FLEX */
            ) || contains(this.display, 536870912
            /* INLINE_GRID */
            ) || contains(this.display, 67108864
            /* INLINE_LIST_ITEM */
            ) || contains(this.display, 134217728
            /* INLINE_TABLE */
            );
          };

          return CSSParsedDeclaration;
        }();

        var CSSParsedPseudoDeclaration =
        /** @class */
        function () {
          function CSSParsedPseudoDeclaration(context, declaration) {
            this.content = parse(context, content, declaration.content);
            this.quotes = parse(context, quotes, declaration.quotes);
          }

          return CSSParsedPseudoDeclaration;
        }();

        var CSSParsedCounterDeclaration =
        /** @class */
        function () {
          function CSSParsedCounterDeclaration(context, declaration) {
            this.counterIncrement = parse(context, counterIncrement, declaration.counterIncrement);
            this.counterReset = parse(context, counterReset, declaration.counterReset);
          }

          return CSSParsedCounterDeclaration;
        }(); // eslint-disable-next-line @typescript-eslint/no-explicit-any


        var parse = function parse(context, descriptor, style) {
          var tokenizer = new Tokenizer();
          var value = style !== null && typeof style !== 'undefined' ? style.toString() : descriptor.initialValue;
          tokenizer.write(value);
          var parser = new Parser(tokenizer.read());

          switch (descriptor.type) {
            case 2
            /* IDENT_VALUE */
            :
              var token = parser.parseComponentValue();
              return descriptor.parse(context, isIdentToken(token) ? token.value : descriptor.initialValue);

            case 0
            /* VALUE */
            :
              return descriptor.parse(context, parser.parseComponentValue());

            case 1
            /* LIST */
            :
              return descriptor.parse(context, parser.parseComponentValues());

            case 4
            /* TOKEN_VALUE */
            :
              return parser.parseComponentValue();

            case 3
            /* TYPE_VALUE */
            :
              switch (descriptor.format) {
                case 'angle':
                  return angle.parse(context, parser.parseComponentValue());

                case 'color':
                  return color$1.parse(context, parser.parseComponentValue());

                case 'image':
                  return image.parse(context, parser.parseComponentValue());

                case 'length':
                  var length_1 = parser.parseComponentValue();
                  return isLength(length_1) ? length_1 : ZERO_LENGTH;

                case 'length-percentage':
                  var value_1 = parser.parseComponentValue();
                  return isLengthPercentage(value_1) ? value_1 : ZERO_LENGTH;

                case 'time':
                  return time.parse(context, parser.parseComponentValue());
              }

              break;
          }
        };

        var elementDebuggerAttribute = 'data-html2canvas-debug';

        var getElementDebugType = function getElementDebugType(element) {
          var attribute = element.getAttribute(elementDebuggerAttribute);

          switch (attribute) {
            case 'all':
              return 1
              /* ALL */
              ;

            case 'clone':
              return 2
              /* CLONE */
              ;

            case 'parse':
              return 3
              /* PARSE */
              ;

            case 'render':
              return 4
              /* RENDER */
              ;

            default:
              return 0
              /* NONE */
              ;
          }
        };

        var isDebugging = function isDebugging(element, type) {
          var elementType = getElementDebugType(element);
          return elementType === 1
          /* ALL */
          || type === elementType;
        };

        var ElementContainer =
        /** @class */
        function () {
          function ElementContainer(context, element) {
            this.context = context;
            this.textNodes = [];
            this.elements = [];
            this.flags = 0;

            if (isDebugging(element, 3
            /* PARSE */
            )) {
              debugger;
            }

            this.styles = new CSSParsedDeclaration(context, window.getComputedStyle(element, null));

            if (isHTMLElementNode(element)) {
              if (this.styles.animationDuration.some(function (duration) {
                return duration > 0;
              })) {
                element.style.animationDuration = '0s';
              }

              if (this.styles.transform !== null) {
                // getBoundingClientRect takes transforms into account
                element.style.transform = 'none';
              }
            }

            this.bounds = parseBounds(this.context, element);

            if (isDebugging(element, 4
            /* RENDER */
            )) {
              this.flags |= 16
              /* DEBUG_RENDER */
              ;
            }
          }

          return ElementContainer;
        }();
        /*
         * text-segmentation 1.0.2 <https://github.com/niklasvh/text-segmentation>
         * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
         * Released under MIT License
         */


        var base64 = 'AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=';
        /*
         * utrie 1.0.1 <https://github.com/niklasvh/utrie>
         * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
         * Released under MIT License
         */

        var chars$1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Use a lookup table to find the index.

        var lookup$1 = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);

        for (var i$1 = 0; i$1 < chars$1.length; i$1++) {
          lookup$1[chars$1.charCodeAt(i$1)] = i$1;
        }

        var decode = function decode(base64) {
          var bufferLength = base64.length * 0.75,
              len = base64.length,
              i,
              p = 0,
              encoded1,
              encoded2,
              encoded3,
              encoded4;

          if (base64[base64.length - 1] === '=') {
            bufferLength--;

            if (base64[base64.length - 2] === '=') {
              bufferLength--;
            }
          }

          var buffer = typeof ArrayBuffer !== 'undefined' && typeof Uint8Array !== 'undefined' && typeof Uint8Array.prototype.slice !== 'undefined' ? new ArrayBuffer(bufferLength) : new Array(bufferLength);
          var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);

          for (i = 0; i < len; i += 4) {
            encoded1 = lookup$1[base64.charCodeAt(i)];
            encoded2 = lookup$1[base64.charCodeAt(i + 1)];
            encoded3 = lookup$1[base64.charCodeAt(i + 2)];
            encoded4 = lookup$1[base64.charCodeAt(i + 3)];
            bytes[p++] = encoded1 << 2 | encoded2 >> 4;
            bytes[p++] = (encoded2 & 15) << 4 | encoded3 >> 2;
            bytes[p++] = (encoded3 & 3) << 6 | encoded4 & 63;
          }

          return buffer;
        };

        var polyUint16Array = function polyUint16Array(buffer) {
          var length = buffer.length;
          var bytes = [];

          for (var i = 0; i < length; i += 2) {
            bytes.push(buffer[i + 1] << 8 | buffer[i]);
          }

          return bytes;
        };

        var polyUint32Array = function polyUint32Array(buffer) {
          var length = buffer.length;
          var bytes = [];

          for (var i = 0; i < length; i += 4) {
            bytes.push(buffer[i + 3] << 24 | buffer[i + 2] << 16 | buffer[i + 1] << 8 | buffer[i]);
          }

          return bytes;
        };
        /** Shift size for getting the index-2 table offset. */


        var UTRIE2_SHIFT_2 = 5;
        /** Shift size for getting the index-1 table offset. */

        var UTRIE2_SHIFT_1 = 6 + 5;
        /**
         * Shift size for shifting left the index array values.
         * Increases possible data size with 16-bit index values at the cost
         * of compactability.
         * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
         */

        var UTRIE2_INDEX_SHIFT = 2;
        /**
         * Difference between the two shift sizes,
         * for getting an index-1 offset from an index-2 offset. 6=11-5
         */

        var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
        /**
         * The part of the index-2 table for U+D800..U+DBFF stores values for
         * lead surrogate code _units_ not code _points_.
         * Values for lead surrogate code _points_ are indexed with this portion of the table.
         * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
         */

        var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
        /** Number of entries in a data block. 32=0x20 */

        var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
        /** Mask for getting the lower bits for the in-data-block offset. */

        var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
        var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
        /** Count the lengths of both BMP pieces. 2080=0x820 */

        var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
        /**
         * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
         * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
         */

        var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
        var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6;
        /* U+0800 is the first code point after 2-byte UTF-8 */

        /**
         * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
         * Variable length, for code points up to highStart, where the last single-value range starts.
         * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
         * (For 0x100000 supplementary code points U+10000..U+10ffff.)
         *
         * The part of the index-2 table for supplementary code points starts
         * after this index-1 table.
         *
         * Both the index-1 table and the following part of the index-2 table
         * are omitted completely if there is only BMP data.
         */

        var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
        /**
         * Number of index-1 entries for the BMP. 32=0x20
         * This part of the index-1 table is omitted from the serialized form.
         */

        var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
        /** Number of entries in an index-2 block. 64=0x40 */

        var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
        /** Mask for getting the lower bits for the in-index-2-block offset. */

        var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;

        var slice16 = function slice16(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }

          return new Uint16Array(Array.prototype.slice.call(view, start, end));
        };

        var slice32 = function slice32(view, start, end) {
          if (view.slice) {
            return view.slice(start, end);
          }

          return new Uint32Array(Array.prototype.slice.call(view, start, end));
        };

        var createTrieFromBase64 = function createTrieFromBase64(base64, _byteLength) {
          var buffer = decode(base64);
          var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
          var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
          var headerLength = 24;
          var index = slice16(view16, headerLength / 2, view32[4] / 2);
          var data = view32[5] === 2 ? slice16(view16, (headerLength + view32[4]) / 2) : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
          return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
        };

        var Trie =
        /** @class */
        function () {
          function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
            this.initialValue = initialValue;
            this.errorValue = errorValue;
            this.highStart = highStart;
            this.highValueIndex = highValueIndex;
            this.index = index;
            this.data = data;
          }
          /**
           * Get the value for a code point as stored in the Trie.
           *
           * @param codePoint the code point
           * @return the value
           */


          Trie.prototype.get = function (codePoint) {
            var ix;

            if (codePoint >= 0) {
              if (codePoint < 0x0d800 || codePoint > 0x0dbff && codePoint <= 0x0ffff) {
                // Ordinary BMP code point, excluding leading surrogates.
                // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                // 16 bit data is stored in the index array itself.
                ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
              }

              if (codePoint <= 0xffff) {
                // Lead Surrogate Code Point.  A Separate index section is stored for
                // lead surrogate code units and code points.
                //   The main index has the code unit data.
                //   For this function, we need the code point data.
                // Note: this expression could be refactored for slightly improved efficiency, but
                //       surrogate code points will be so rare in practice that it's not worth it.
                ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + (codePoint - 0xd800 >> UTRIE2_SHIFT_2)];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
              }

              if (codePoint < this.highStart) {
                // Supplemental code point, use two-level lookup.
                ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                ix = this.index[ix];
                ix += codePoint >> UTRIE2_SHIFT_2 & UTRIE2_INDEX_2_MASK;
                ix = this.index[ix];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
              }

              if (codePoint <= 0x10ffff) {
                return this.data[this.highValueIndex];
              }
            } // Fall through.  The code point is outside of the legal range of 0..0x10ffff.


            return this.errorValue;
          };

          return Trie;
        }();
        /*
         * base64-arraybuffer 1.0.1 <https://github.com/niklasvh/base64-arraybuffer>
         * Copyright (c) 2021 Niklas von Hertzen <https://hertzen.com>
         * Released under MIT License
         */


        var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'; // Use a lookup table to find the index.

        var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);

        for (var i = 0; i < chars.length; i++) {
          lookup[chars.charCodeAt(i)] = i;
        }

        var Prepend = 1;
        var CR = 2;
        var LF = 3;
        var Control = 4;
        var Extend = 5;
        var SpacingMark = 7;
        var L = 8;
        var V = 9;
        var T = 10;
        var LV = 11;
        var LVT = 12;
        var ZWJ = 13;
        var Extended_Pictographic = 14;
        var RI = 15;

        var toCodePoints = function toCodePoints(str) {
          var codePoints = [];
          var i = 0;
          var length = str.length;

          while (i < length) {
            var value = str.charCodeAt(i++);

            if (value >= 0xd800 && value <= 0xdbff && i < length) {
              var extra = str.charCodeAt(i++);

              if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
              } else {
                codePoints.push(value);
                i--;
              }
            } else {
              codePoints.push(value);
            }
          }

          return codePoints;
        };

        var fromCodePoint = function fromCodePoint() {
          var codePoints = [];

          for (var _i = 0; _i < arguments.length; _i++) {
            codePoints[_i] = arguments[_i];
          }

          if (String.fromCodePoint) {
            return String.fromCodePoint.apply(String, codePoints);
          }

          var length = codePoints.length;

          if (!length) {
            return '';
          }

          var codeUnits = [];
          var index = -1;
          var result = '';

          while (++index < length) {
            var codePoint = codePoints[index];

            if (codePoint <= 0xffff) {
              codeUnits.push(codePoint);
            } else {
              codePoint -= 0x10000;
              codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
            }

            if (index + 1 === length || codeUnits.length > 0x4000) {
              result += String.fromCharCode.apply(String, codeUnits);
              codeUnits.length = 0;
            }
          }

          return result;
        };

        var UnicodeTrie = createTrieFromBase64(base64);
        var BREAK_NOT_ALLOWED = '×';
        var BREAK_ALLOWED = '÷';

        var codePointToClass = function codePointToClass(codePoint) {
          return UnicodeTrie.get(codePoint);
        };

        var _graphemeBreakAtIndex = function _graphemeBreakAtIndex(_codePoints, classTypes, index) {
          var prevIndex = index - 2;
          var prev = classTypes[prevIndex];
          var current = classTypes[index - 1];
          var next = classTypes[index]; // GB3 Do not break between a CR and LF

          if (current === CR && next === LF) {
            return BREAK_NOT_ALLOWED;
          } // GB4 Otherwise, break before and after controls.


          if (current === CR || current === LF || current === Control) {
            return BREAK_ALLOWED;
          } // GB5


          if (next === CR || next === LF || next === Control) {
            return BREAK_ALLOWED;
          } // Do not break Hangul syllable sequences.
          // GB6


          if (current === L && [L, V, LV, LVT].indexOf(next) !== -1) {
            return BREAK_NOT_ALLOWED;
          } // GB7


          if ((current === LV || current === V) && (next === V || next === T)) {
            return BREAK_NOT_ALLOWED;
          } // GB8


          if ((current === LVT || current === T) && next === T) {
            return BREAK_NOT_ALLOWED;
          } // GB9 Do not break before extending characters or ZWJ.


          if (next === ZWJ || next === Extend) {
            return BREAK_NOT_ALLOWED;
          } // Do not break before SpacingMarks, or after Prepend characters.
          // GB9a


          if (next === SpacingMark) {
            return BREAK_NOT_ALLOWED;
          } // GB9a


          if (current === Prepend) {
            return BREAK_NOT_ALLOWED;
          } // GB11 Do not break within emoji modifier sequences or emoji zwj sequences.


          if (current === ZWJ && next === Extended_Pictographic) {
            while (prev === Extend) {
              prev = classTypes[--prevIndex];
            }

            if (prev === Extended_Pictographic) {
              return BREAK_NOT_ALLOWED;
            }
          } // GB12 Do not break within emoji flag sequences.
          // That is, do not break between regional indicator (RI) symbols
          // if there is an odd number of RI characters before the break point.


          if (current === RI && next === RI) {
            var countRI = 0;

            while (prev === RI) {
              countRI++;
              prev = classTypes[--prevIndex];
            }

            if (countRI % 2 === 0) {
              return BREAK_NOT_ALLOWED;
            }
          }

          return BREAK_ALLOWED;
        };

        var GraphemeBreaker = function GraphemeBreaker(str) {
          var codePoints = toCodePoints(str);
          var length = codePoints.length;
          var index = 0;
          var lastEnd = 0;
          var classTypes = codePoints.map(codePointToClass);
          return {
            next: function next() {
              if (index >= length) {
                return {
                  done: true,
                  value: null
                };
              }

              var graphemeBreak = BREAK_NOT_ALLOWED;

              while (index < length && (graphemeBreak = _graphemeBreakAtIndex(codePoints, classTypes, ++index)) === BREAK_NOT_ALLOWED) {}

              if (graphemeBreak !== BREAK_NOT_ALLOWED || index === length) {
                var value = fromCodePoint.apply(null, codePoints.slice(lastEnd, index));
                lastEnd = index;
                return {
                  value: value,
                  done: false
                };
              }

              return {
                done: true,
                value: null
              };
            }
          };
        };

        var splitGraphemes = function splitGraphemes(str) {
          var breaker = GraphemeBreaker(str);
          var graphemes = [];
          var bk;

          while (!(bk = breaker.next()).done) {
            if (bk.value) {
              graphemes.push(bk.value.slice());
            }
          }

          return graphemes;
        };

        var testRangeBounds = function testRangeBounds(document) {
          var TEST_HEIGHT = 123;

          if (document.createRange) {
            var range = document.createRange();

            if (range.getBoundingClientRect) {
              var testElement = document.createElement('boundtest');
              testElement.style.height = TEST_HEIGHT + "px";
              testElement.style.display = 'block';
              document.body.appendChild(testElement);
              range.selectNode(testElement);
              var rangeBounds = range.getBoundingClientRect();
              var rangeHeight = Math.round(rangeBounds.height);
              document.body.removeChild(testElement);

              if (rangeHeight === TEST_HEIGHT) {
                return true;
              }
            }
          }

          return false;
        };

        var testIOSLineBreak = function testIOSLineBreak(document) {
          var testElement = document.createElement('boundtest');
          testElement.style.width = '50px';
          testElement.style.display = 'block';
          testElement.style.fontSize = '12px';
          testElement.style.letterSpacing = '0px';
          testElement.style.wordSpacing = '0px';
          document.body.appendChild(testElement);
          var range = document.createRange();
          testElement.innerHTML = typeof ''.repeat === 'function' ? '&#128104;'.repeat(10) : '';
          var node = testElement.firstChild;
          var textList = toCodePoints$1(node.data).map(function (i) {
            return fromCodePoint$1(i);
          });
          var offset = 0;
          var prev = {}; // ios 13 does not handle range getBoundingClientRect line changes correctly #2177

          var supports = textList.every(function (text, i) {
            range.setStart(node, offset);
            range.setEnd(node, offset + text.length);
            var rect = range.getBoundingClientRect();
            offset += text.length;
            var boundAhead = rect.x > prev.x || rect.y > prev.y;
            prev = rect;

            if (i === 0) {
              return true;
            }

            return boundAhead;
          });
          document.body.removeChild(testElement);
          return supports;
        };

        var testCORS = function testCORS() {
          return typeof new Image().crossOrigin !== 'undefined';
        };

        var testResponseType = function testResponseType() {
          return typeof new XMLHttpRequest().responseType === 'string';
        };

        var testSVG = function testSVG(document) {
          var img = new Image();
          var canvas = document.createElement('canvas');
          var ctx = canvas.getContext('2d');

          if (!ctx) {
            return false;
          }

          img.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";

          try {
            ctx.drawImage(img, 0, 0);
            canvas.toDataURL();
          } catch (e) {
            return false;
          }

          return true;
        };

        var isGreenPixel = function isGreenPixel(data) {
          return data[0] === 0 && data[1] === 255 && data[2] === 0 && data[3] === 255;
        };

        var testForeignObject = function testForeignObject(document) {
          var canvas = document.createElement('canvas');
          var size = 100;
          canvas.width = size;
          canvas.height = size;
          var ctx = canvas.getContext('2d');

          if (!ctx) {
            return Promise.reject(false);
          }

          ctx.fillStyle = 'rgb(0, 255, 0)';
          ctx.fillRect(0, 0, size, size);
          var img = new Image();
          var greenImageSrc = canvas.toDataURL();
          img.src = greenImageSrc;
          var svg = createForeignObjectSVG(size, size, 0, 0, img);
          ctx.fillStyle = 'red';
          ctx.fillRect(0, 0, size, size);
          return loadSerializedSVG$1(svg).then(function (img) {
            ctx.drawImage(img, 0, 0);
            var data = ctx.getImageData(0, 0, size, size).data;
            ctx.fillStyle = 'red';
            ctx.fillRect(0, 0, size, size);
            var node = document.createElement('div');
            node.style.backgroundImage = "url(" + greenImageSrc + ")";
            node.style.height = size + "px"; // Firefox 55 does not render inline <img /> tags

            return isGreenPixel(data) ? loadSerializedSVG$1(createForeignObjectSVG(size, size, 0, 0, node)) : Promise.reject(false);
          }).then(function (img) {
            ctx.drawImage(img, 0, 0); // Edge does not render background-images

            return isGreenPixel(ctx.getImageData(0, 0, size, size).data);
          })["catch"](function () {
            return false;
          });
        };

        var createForeignObjectSVG = function createForeignObjectSVG(width, height, x, y, node) {
          var xmlns = 'http://www.w3.org/2000/svg';
          var svg = document.createElementNS(xmlns, 'svg');
          var foreignObject = document.createElementNS(xmlns, 'foreignObject');
          svg.setAttributeNS(null, 'width', width.toString());
          svg.setAttributeNS(null, 'height', height.toString());
          foreignObject.setAttributeNS(null, 'width', '100%');
          foreignObject.setAttributeNS(null, 'height', '100%');
          foreignObject.setAttributeNS(null, 'x', x.toString());
          foreignObject.setAttributeNS(null, 'y', y.toString());
          foreignObject.setAttributeNS(null, 'externalResourcesRequired', 'true');
          svg.appendChild(foreignObject);
          foreignObject.appendChild(node);
          return svg;
        };

        var loadSerializedSVG$1 = function loadSerializedSVG$1(svg) {
          return new Promise(function (resolve, reject) {
            var img = new Image();

            img.onload = function () {
              return resolve(img);
            };

            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
          });
        };

        var FEATURES = {
          get SUPPORT_RANGE_BOUNDS() {
            var value = testRangeBounds(document);
            Object.defineProperty(FEATURES, 'SUPPORT_RANGE_BOUNDS', {
              value: value
            });
            return value;
          },

          get SUPPORT_WORD_BREAKING() {
            var value = FEATURES.SUPPORT_RANGE_BOUNDS && testIOSLineBreak(document);
            Object.defineProperty(FEATURES, 'SUPPORT_WORD_BREAKING', {
              value: value
            });
            return value;
          },

          get SUPPORT_SVG_DRAWING() {
            var value = testSVG(document);
            Object.defineProperty(FEATURES, 'SUPPORT_SVG_DRAWING', {
              value: value
            });
            return value;
          },

          get SUPPORT_FOREIGNOBJECT_DRAWING() {
            var value = typeof Array.from === 'function' && typeof window.fetch === 'function' ? testForeignObject(document) : Promise.resolve(false);
            Object.defineProperty(FEATURES, 'SUPPORT_FOREIGNOBJECT_DRAWING', {
              value: value
            });
            return value;
          },

          get SUPPORT_CORS_IMAGES() {
            var value = testCORS();
            Object.defineProperty(FEATURES, 'SUPPORT_CORS_IMAGES', {
              value: value
            });
            return value;
          },

          get SUPPORT_RESPONSE_TYPE() {
            var value = testResponseType();
            Object.defineProperty(FEATURES, 'SUPPORT_RESPONSE_TYPE', {
              value: value
            });
            return value;
          },

          get SUPPORT_CORS_XHR() {
            var value = ('withCredentials' in new XMLHttpRequest());
            Object.defineProperty(FEATURES, 'SUPPORT_CORS_XHR', {
              value: value
            });
            return value;
          }

        };

        var TextBounds =
        /** @class */
        function () {
          function TextBounds(text, bounds) {
            this.text = text;
            this.bounds = bounds;
          }

          return TextBounds;
        }();

        var parseTextBounds = function parseTextBounds(context, value, styles, node) {
          var textList = breakText(value, styles);
          var textBounds = [];
          var offset = 0;
          textList.forEach(function (text) {
            if (styles.textDecorationLine.length || text.trim().length > 0) {
              if (FEATURES.SUPPORT_RANGE_BOUNDS) {
                if (!FEATURES.SUPPORT_WORD_BREAKING) {
                  textBounds.push(new TextBounds(text, Bounds.fromDOMRectList(context, createRange(node, offset, text.length).getClientRects())));
                } else {
                  textBounds.push(new TextBounds(text, getRangeBounds(context, node, offset, text.length)));
                }
              } else {
                var replacementNode = node.splitText(text.length);
                textBounds.push(new TextBounds(text, getWrapperBounds(context, node)));
                node = replacementNode;
              }
            } else if (!FEATURES.SUPPORT_RANGE_BOUNDS) {
              node = node.splitText(text.length);
            }

            offset += text.length;
          });
          return textBounds;
        };

        var getWrapperBounds = function getWrapperBounds(context, node) {
          var ownerDocument = node.ownerDocument;

          if (ownerDocument) {
            var wrapper = ownerDocument.createElement('html2canvaswrapper');
            wrapper.appendChild(node.cloneNode(true));
            var parentNode = node.parentNode;

            if (parentNode) {
              parentNode.replaceChild(wrapper, node);
              var bounds = parseBounds(context, wrapper);

              if (wrapper.firstChild) {
                parentNode.replaceChild(wrapper.firstChild, wrapper);
              }

              return bounds;
            }
          }

          return Bounds.EMPTY;
        };

        var createRange = function createRange(node, offset, length) {
          var ownerDocument = node.ownerDocument;

          if (!ownerDocument) {
            throw new Error('Node has no owner document');
          }

          var range = ownerDocument.createRange();
          range.setStart(node, offset);
          range.setEnd(node, offset + length);
          return range;
        };

        var getRangeBounds = function getRangeBounds(context, node, offset, length) {
          return Bounds.fromClientRect(context, createRange(node, offset, length).getBoundingClientRect());
        };

        var breakText = function breakText(value, styles) {
          return styles.letterSpacing !== 0 ? splitGraphemes(value) : breakWords(value, styles);
        }; // https://drafts.csswg.org/css-text/#word-separator


        var wordSeparators = [0x0020, 0x00a0, 0x1361, 0x10100, 0x10101, 0x1039, 0x1091];

        var breakWords = function breakWords(str, styles) {
          var breaker = LineBreaker(str, {
            lineBreak: styles.lineBreak,
            wordBreak: styles.overflowWrap === "break-word"
            /* BREAK_WORD */
            ? 'break-word' : styles.wordBreak
          });
          var words = [];
          var bk;

          var _loop_1 = function _loop_1() {
            if (bk.value) {
              var value = bk.value.slice();
              var codePoints = toCodePoints$1(value);
              var word_1 = '';
              codePoints.forEach(function (codePoint) {
                if (wordSeparators.indexOf(codePoint) === -1) {
                  word_1 += fromCodePoint$1(codePoint);
                } else {
                  if (word_1.length) {
                    words.push(word_1);
                  }

                  words.push(fromCodePoint$1(codePoint));
                  word_1 = '';
                }
              });

              if (word_1.length) {
                words.push(word_1);
              }
            }
          };

          while (!(bk = breaker.next()).done) {
            _loop_1();
          }

          return words;
        };

        var TextContainer =
        /** @class */
        function () {
          function TextContainer(context, node, styles) {
            this.text = transform(node.data, styles.textTransform);
            this.textBounds = parseTextBounds(context, this.text, styles, node);
          }

          return TextContainer;
        }();

        var transform = function transform(text, _transform) {
          switch (_transform) {
            case 1
            /* LOWERCASE */
            :
              return text.toLowerCase();

            case 3
            /* CAPITALIZE */
            :
              return text.replace(CAPITALIZE, capitalize);

            case 2
            /* UPPERCASE */
            :
              return text.toUpperCase();

            default:
              return text;
          }
        };

        var CAPITALIZE = /(^|\s|:|-|\(|\))([a-z])/g;

        var capitalize = function capitalize(m, p1, p2) {
          if (m.length > 0) {
            return p1 + p2.toUpperCase();
          }

          return m;
        };

        var ImageElementContainer =
        /** @class */
        function (_super) {
          __extends(ImageElementContainer, _super);

          function ImageElementContainer(context, img) {
            var _this = _super.call(this, context, img) || this;

            _this.src = img.currentSrc || img.src;
            _this.intrinsicWidth = img.naturalWidth;
            _this.intrinsicHeight = img.naturalHeight;

            _this.context.cache.addImage(_this.src);

            return _this;
          }

          return ImageElementContainer;
        }(ElementContainer);

        var CanvasElementContainer =
        /** @class */
        function (_super) {
          __extends(CanvasElementContainer, _super);

          function CanvasElementContainer(context, canvas) {
            var _this = _super.call(this, context, canvas) || this;

            _this.canvas = canvas;
            _this.intrinsicWidth = canvas.width;
            _this.intrinsicHeight = canvas.height;
            return _this;
          }

          return CanvasElementContainer;
        }(ElementContainer);

        var SVGElementContainer =
        /** @class */
        function (_super) {
          __extends(SVGElementContainer, _super);

          function SVGElementContainer(context, img) {
            var _this = _super.call(this, context, img) || this;

            var s = new XMLSerializer();
            var bounds = parseBounds(context, img);
            img.setAttribute('width', bounds.width + "px");
            img.setAttribute('height', bounds.height + "px");
            _this.svg = "data:image/svg+xml," + encodeURIComponent(s.serializeToString(img));
            _this.intrinsicWidth = img.width.baseVal.value;
            _this.intrinsicHeight = img.height.baseVal.value;

            _this.context.cache.addImage(_this.svg);

            return _this;
          }

          return SVGElementContainer;
        }(ElementContainer);

        var LIElementContainer =
        /** @class */
        function (_super) {
          __extends(LIElementContainer, _super);

          function LIElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;

            _this.value = element.value;
            return _this;
          }

          return LIElementContainer;
        }(ElementContainer);

        var OLElementContainer =
        /** @class */
        function (_super) {
          __extends(OLElementContainer, _super);

          function OLElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;

            _this.start = element.start;
            _this.reversed = typeof element.reversed === 'boolean' && element.reversed === true;
            return _this;
          }

          return OLElementContainer;
        }(ElementContainer);

        var CHECKBOX_BORDER_RADIUS = [{
          type: 15
          /* DIMENSION_TOKEN */
          ,
          flags: 0,
          unit: 'px',
          number: 3
        }];
        var RADIO_BORDER_RADIUS = [{
          type: 16
          /* PERCENTAGE_TOKEN */
          ,
          flags: 0,
          number: 50
        }];

        var reformatInputBounds = function reformatInputBounds(bounds) {
          if (bounds.width > bounds.height) {
            return new Bounds(bounds.left + (bounds.width - bounds.height) / 2, bounds.top, bounds.height, bounds.height);
          } else if (bounds.width < bounds.height) {
            return new Bounds(bounds.left, bounds.top + (bounds.height - bounds.width) / 2, bounds.width, bounds.width);
          }

          return bounds;
        };

        var getInputValue = function getInputValue(node) {
          var value = node.type === PASSWORD ? new Array(node.value.length + 1).join("\u2022") : node.value;
          return value.length === 0 ? node.placeholder || '' : value;
        };

        var CHECKBOX = 'checkbox';
        var RADIO = 'radio';
        var PASSWORD = 'password';
        var INPUT_COLOR = 0x2a2a2aff;

        var InputElementContainer =
        /** @class */
        function (_super) {
          __extends(InputElementContainer, _super);

          function InputElementContainer(context, input) {
            var _this = _super.call(this, context, input) || this;

            _this.type = input.type.toLowerCase();
            _this.checked = input.checked;
            _this.value = getInputValue(input);

            if (_this.type === CHECKBOX || _this.type === RADIO) {
              _this.styles.backgroundColor = 0xdededeff;
              _this.styles.borderTopColor = _this.styles.borderRightColor = _this.styles.borderBottomColor = _this.styles.borderLeftColor = 0xa5a5a5ff;
              _this.styles.borderTopWidth = _this.styles.borderRightWidth = _this.styles.borderBottomWidth = _this.styles.borderLeftWidth = 1;
              _this.styles.borderTopStyle = _this.styles.borderRightStyle = _this.styles.borderBottomStyle = _this.styles.borderLeftStyle = 1
              /* SOLID */
              ;
              _this.styles.backgroundClip = [0
              /* BORDER_BOX */
              ];
              _this.styles.backgroundOrigin = [0
              /* BORDER_BOX */
              ];
              _this.bounds = reformatInputBounds(_this.bounds);
            }

            switch (_this.type) {
              case CHECKBOX:
                _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = CHECKBOX_BORDER_RADIUS;
                break;

              case RADIO:
                _this.styles.borderTopRightRadius = _this.styles.borderTopLeftRadius = _this.styles.borderBottomRightRadius = _this.styles.borderBottomLeftRadius = RADIO_BORDER_RADIUS;
                break;
            }

            return _this;
          }

          return InputElementContainer;
        }(ElementContainer);

        var SelectElementContainer =
        /** @class */
        function (_super) {
          __extends(SelectElementContainer, _super);

          function SelectElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;

            var option = element.options[element.selectedIndex || 0];
            _this.value = option ? option.text || '' : '';
            return _this;
          }

          return SelectElementContainer;
        }(ElementContainer);

        var TextareaElementContainer =
        /** @class */
        function (_super) {
          __extends(TextareaElementContainer, _super);

          function TextareaElementContainer(context, element) {
            var _this = _super.call(this, context, element) || this;

            _this.value = element.value;
            return _this;
          }

          return TextareaElementContainer;
        }(ElementContainer);

        var IFrameElementContainer =
        /** @class */
        function (_super) {
          __extends(IFrameElementContainer, _super);

          function IFrameElementContainer(context, iframe) {
            var _this = _super.call(this, context, iframe) || this;

            _this.src = iframe.src;
            _this.width = parseInt(iframe.width, 10) || 0;
            _this.height = parseInt(iframe.height, 10) || 0;
            _this.backgroundColor = _this.styles.backgroundColor;

            try {
              if (iframe.contentWindow && iframe.contentWindow.document && iframe.contentWindow.document.documentElement) {
                _this.tree = parseTree(context, iframe.contentWindow.document.documentElement); // http://www.w3.org/TR/css3-background/#special-backgrounds

                var documentBackgroundColor = iframe.contentWindow.document.documentElement ? parseColor(context, getComputedStyle(iframe.contentWindow.document.documentElement).backgroundColor) : COLORS.TRANSPARENT;
                var bodyBackgroundColor = iframe.contentWindow.document.body ? parseColor(context, getComputedStyle(iframe.contentWindow.document.body).backgroundColor) : COLORS.TRANSPARENT;
                _this.backgroundColor = isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? _this.styles.backgroundColor : bodyBackgroundColor : documentBackgroundColor;
              }
            } catch (e) {}

            return _this;
          }

          return IFrameElementContainer;
        }(ElementContainer);

        var LIST_OWNERS = ['OL', 'UL', 'MENU'];

        var parseNodeTree = function parseNodeTree(context, node, parent, root) {
          for (var childNode = node.firstChild, nextNode = void 0; childNode; childNode = nextNode) {
            nextNode = childNode.nextSibling;

            if (isTextNode(childNode) && childNode.data.trim().length > 0) {
              parent.textNodes.push(new TextContainer(context, childNode, parent.styles));
            } else if (isElementNode(childNode)) {
              if (isSlotElement(childNode) && childNode.assignedNodes) {
                childNode.assignedNodes().forEach(function (childNode) {
                  return parseNodeTree(context, childNode, parent, root);
                });
              } else {
                var container = createContainer(context, childNode);

                if (container.styles.isVisible()) {
                  if (createsRealStackingContext(childNode, container, root)) {
                    container.flags |= 4
                    /* CREATES_REAL_STACKING_CONTEXT */
                    ;
                  } else if (createsStackingContext(container.styles)) {
                    container.flags |= 2
                    /* CREATES_STACKING_CONTEXT */
                    ;
                  }

                  if (LIST_OWNERS.indexOf(childNode.tagName) !== -1) {
                    container.flags |= 8
                    /* IS_LIST_OWNER */
                    ;
                  }

                  parent.elements.push(container);
                  childNode.slot;

                  if (childNode.shadowRoot) {
                    parseNodeTree(context, childNode.shadowRoot, container, root);
                  } else if (!isTextareaElement(childNode) && !isSVGElement(childNode) && !isSelectElement(childNode)) {
                    parseNodeTree(context, childNode, container, root);
                  }
                }
              }
            }
          }
        };

        var createContainer = function createContainer(context, element) {
          if (isImageElement(element)) {
            return new ImageElementContainer(context, element);
          }

          if (isCanvasElement(element)) {
            return new CanvasElementContainer(context, element);
          }

          if (isSVGElement(element)) {
            return new SVGElementContainer(context, element);
          }

          if (isLIElement(element)) {
            return new LIElementContainer(context, element);
          }

          if (isOLElement(element)) {
            return new OLElementContainer(context, element);
          }

          if (isInputElement(element)) {
            return new InputElementContainer(context, element);
          }

          if (isSelectElement(element)) {
            return new SelectElementContainer(context, element);
          }

          if (isTextareaElement(element)) {
            return new TextareaElementContainer(context, element);
          }

          if (isIFrameElement(element)) {
            return new IFrameElementContainer(context, element);
          }

          return new ElementContainer(context, element);
        };

        var parseTree = function parseTree(context, element) {
          var container = createContainer(context, element);
          container.flags |= 4
          /* CREATES_REAL_STACKING_CONTEXT */
          ;
          parseNodeTree(context, element, container, container);
          return container;
        };

        var createsRealStackingContext = function createsRealStackingContext(node, container, root) {
          return container.styles.isPositionedWithZIndex() || container.styles.opacity < 1 || container.styles.isTransformed() || isBodyElement(node) && root.styles.isTransparent();
        };

        var createsStackingContext = function createsStackingContext(styles) {
          return styles.isPositioned() || styles.isFloating();
        };

        var isTextNode = function isTextNode(node) {
          return node.nodeType === Node.TEXT_NODE;
        };

        var isElementNode = function isElementNode(node) {
          return node.nodeType === Node.ELEMENT_NODE;
        };

        var isHTMLElementNode = function isHTMLElementNode(node) {
          return isElementNode(node) && typeof node.style !== 'undefined' && !isSVGElementNode(node);
        };

        var isSVGElementNode = function isSVGElementNode(element) {
          return typeof element.className === 'object';
        };

        var isLIElement = function isLIElement(node) {
          return node.tagName === 'LI';
        };

        var isOLElement = function isOLElement(node) {
          return node.tagName === 'OL';
        };

        var isInputElement = function isInputElement(node) {
          return node.tagName === 'INPUT';
        };

        var isHTMLElement = function isHTMLElement(node) {
          return node.tagName === 'HTML';
        };

        var isSVGElement = function isSVGElement(node) {
          return node.tagName === 'svg';
        };

        var isBodyElement = function isBodyElement(node) {
          return node.tagName === 'BODY';
        };

        var isCanvasElement = function isCanvasElement(node) {
          return node.tagName === 'CANVAS';
        };

        var isImageElement = function isImageElement(node) {
          return node.tagName === 'IMG';
        };

        var isIFrameElement = function isIFrameElement(node) {
          return node.tagName === 'IFRAME';
        };

        var isStyleElement = function isStyleElement(node) {
          return node.tagName === 'STYLE';
        };

        var isScriptElement = function isScriptElement(node) {
          return node.tagName === 'SCRIPT';
        };

        var isTextareaElement = function isTextareaElement(node) {
          return node.tagName === 'TEXTAREA';
        };

        var isSelectElement = function isSelectElement(node) {
          return node.tagName === 'SELECT';
        };

        var isSlotElement = function isSlotElement(node) {
          return node.tagName === 'SLOT';
        };

        var CounterState =
        /** @class */
        function () {
          function CounterState() {
            this.counters = {};
          }

          CounterState.prototype.getCounterValue = function (name) {
            var counter = this.counters[name];

            if (counter && counter.length) {
              return counter[counter.length - 1];
            }

            return 1;
          };

          CounterState.prototype.getCounterValues = function (name) {
            var counter = this.counters[name];
            return counter ? counter : [];
          };

          CounterState.prototype.pop = function (counters) {
            var _this = this;

            counters.forEach(function (counter) {
              return _this.counters[counter].pop();
            });
          };

          CounterState.prototype.parse = function (style) {
            var _this = this;

            var counterIncrement = style.counterIncrement;
            var counterReset = style.counterReset;
            var canReset = true;

            if (counterIncrement !== null) {
              counterIncrement.forEach(function (entry) {
                var counter = _this.counters[entry.counter];

                if (counter && entry.increment !== 0) {
                  canReset = false;

                  if (!counter.length) {
                    counter.push(1);
                  }

                  counter[Math.max(0, counter.length - 1)] += entry.increment;
                }
              });
            }

            var counterNames = [];

            if (canReset) {
              counterReset.forEach(function (entry) {
                var counter = _this.counters[entry.counter];
                counterNames.push(entry.counter);

                if (!counter) {
                  counter = _this.counters[entry.counter] = [];
                }

                counter.push(entry.reset);
              });
            }

            return counterNames;
          };

          return CounterState;
        }();

        var ROMAN_UPPER = {
          integers: [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
          values: ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
        };
        var ARMENIAN = {
          integers: [9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
          values: ['Ք', 'Փ', 'Ւ', 'Ց', 'Ր', 'Տ', 'Վ', 'Ս', 'Ռ', 'Ջ', 'Պ', 'Չ', 'Ո', 'Շ', 'Ն', 'Յ', 'Մ', 'Ճ', 'Ղ', 'Ձ', 'Հ', 'Կ', 'Ծ', 'Խ', 'Լ', 'Ի', 'Ժ', 'Թ', 'Ը', 'Է', 'Զ', 'Ե', 'Դ', 'Գ', 'Բ', 'Ա']
        };
        var HEBREW = {
          integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 19, 18, 17, 16, 15, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
          values: ['י׳', 'ט׳', 'ח׳', 'ז׳', 'ו׳', 'ה׳', 'ד׳', 'ג׳', 'ב׳', 'א׳', 'ת', 'ש', 'ר', 'ק', 'צ', 'פ', 'ע', 'ס', 'נ', 'מ', 'ל', 'כ', 'יט', 'יח', 'יז', 'טז', 'טו', 'י', 'ט', 'ח', 'ז', 'ו', 'ה', 'ד', 'ג', 'ב', 'א']
        };
        var GEORGIAN = {
          integers: [10000, 9000, 8000, 7000, 6000, 5000, 4000, 3000, 2000, 1000, 900, 800, 700, 600, 500, 400, 300, 200, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1],
          values: ['ჵ', 'ჰ', 'ჯ', 'ჴ', 'ხ', 'ჭ', 'წ', 'ძ', 'ც', 'ჩ', 'შ', 'ყ', 'ღ', 'ქ', 'ფ', 'ჳ', 'ტ', 'ს', 'რ', 'ჟ', 'პ', 'ო', 'ჲ', 'ნ', 'მ', 'ლ', 'კ', 'ი', 'თ', 'ჱ', 'ზ', 'ვ', 'ე', 'დ', 'გ', 'ბ', 'ა']
        };

        var createAdditiveCounter = function createAdditiveCounter(value, min, max, symbols, fallback, suffix) {
          if (value < min || value > max) {
            return createCounterText(value, fallback, suffix.length > 0);
          }

          return symbols.integers.reduce(function (string, integer, index) {
            while (value >= integer) {
              value -= integer;
              string += symbols.values[index];
            }

            return string;
          }, '') + suffix;
        };

        var createCounterStyleWithSymbolResolver = function createCounterStyleWithSymbolResolver(value, codePointRangeLength, isNumeric, resolver) {
          var string = '';

          do {
            if (!isNumeric) {
              value--;
            }

            string = resolver(value) + string;
            value /= codePointRangeLength;
          } while (value * codePointRangeLength >= codePointRangeLength);

          return string;
        };

        var createCounterStyleFromRange = function createCounterStyleFromRange(value, codePointRangeStart, codePointRangeEnd, isNumeric, suffix) {
          var codePointRangeLength = codePointRangeEnd - codePointRangeStart + 1;
          return (value < 0 ? '-' : '') + (createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, isNumeric, function (codePoint) {
            return fromCodePoint$1(Math.floor(codePoint % codePointRangeLength) + codePointRangeStart);
          }) + suffix);
        };

        var createCounterStyleFromSymbols = function createCounterStyleFromSymbols(value, symbols, suffix) {
          if (suffix === void 0) {
            suffix = '. ';
          }

          var codePointRangeLength = symbols.length;
          return createCounterStyleWithSymbolResolver(Math.abs(value), codePointRangeLength, false, function (codePoint) {
            return symbols[Math.floor(codePoint % codePointRangeLength)];
          }) + suffix;
        };

        var CJK_ZEROS = 1 << 0;
        var CJK_TEN_COEFFICIENTS = 1 << 1;
        var CJK_TEN_HIGH_COEFFICIENTS = 1 << 2;
        var CJK_HUNDRED_COEFFICIENTS = 1 << 3;

        var createCJKCounter = function createCJKCounter(value, numbers, multipliers, negativeSign, suffix, flags) {
          if (value < -9999 || value > 9999) {
            return createCounterText(value, 4
            /* CJK_DECIMAL */
            , suffix.length > 0);
          }

          var tmp = Math.abs(value);
          var string = suffix;

          if (tmp === 0) {
            return numbers[0] + string;
          }

          for (var digit = 0; tmp > 0 && digit <= 4; digit++) {
            var coefficient = tmp % 10;

            if (coefficient === 0 && contains(flags, CJK_ZEROS) && string !== '') {
              string = numbers[coefficient] + string;
            } else if (coefficient > 1 || coefficient === 1 && digit === 0 || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_COEFFICIENTS) || coefficient === 1 && digit === 1 && contains(flags, CJK_TEN_HIGH_COEFFICIENTS) && value > 100 || coefficient === 1 && digit > 1 && contains(flags, CJK_HUNDRED_COEFFICIENTS)) {
              string = numbers[coefficient] + (digit > 0 ? multipliers[digit - 1] : '') + string;
            } else if (coefficient === 1 && digit > 0) {
              string = multipliers[digit - 1] + string;
            }

            tmp = Math.floor(tmp / 10);
          }

          return (value < 0 ? negativeSign : '') + string;
        };

        var CHINESE_INFORMAL_MULTIPLIERS = '十百千萬';
        var CHINESE_FORMAL_MULTIPLIERS = '拾佰仟萬';
        var JAPANESE_NEGATIVE = 'マイナス';
        var KOREAN_NEGATIVE = '마이너스';

        var createCounterText = function createCounterText(value, type, appendSuffix) {
          var defaultSuffix = appendSuffix ? '. ' : '';
          var cjkSuffix = appendSuffix ? '、' : '';
          var koreanSuffix = appendSuffix ? ', ' : '';
          var spaceSuffix = appendSuffix ? ' ' : '';

          switch (type) {
            case 0
            /* DISC */
            :
              return '•' + spaceSuffix;

            case 1
            /* CIRCLE */
            :
              return '◦' + spaceSuffix;

            case 2
            /* SQUARE */
            :
              return '◾' + spaceSuffix;

            case 5
            /* DECIMAL_LEADING_ZERO */
            :
              var string = createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
              return string.length < 4 ? "0" + string : string;

            case 4
            /* CJK_DECIMAL */
            :
              return createCounterStyleFromSymbols(value, '〇一二三四五六七八九', cjkSuffix);

            case 6
            /* LOWER_ROMAN */
            :
              return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3
              /* DECIMAL */
              , defaultSuffix).toLowerCase();

            case 7
            /* UPPER_ROMAN */
            :
              return createAdditiveCounter(value, 1, 3999, ROMAN_UPPER, 3
              /* DECIMAL */
              , defaultSuffix);

            case 8
            /* LOWER_GREEK */
            :
              return createCounterStyleFromRange(value, 945, 969, false, defaultSuffix);

            case 9
            /* LOWER_ALPHA */
            :
              return createCounterStyleFromRange(value, 97, 122, false, defaultSuffix);

            case 10
            /* UPPER_ALPHA */
            :
              return createCounterStyleFromRange(value, 65, 90, false, defaultSuffix);

            case 11
            /* ARABIC_INDIC */
            :
              return createCounterStyleFromRange(value, 1632, 1641, true, defaultSuffix);

            case 12
            /* ARMENIAN */
            :
            case 49
            /* UPPER_ARMENIAN */
            :
              return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3
              /* DECIMAL */
              , defaultSuffix);

            case 35
            /* LOWER_ARMENIAN */
            :
              return createAdditiveCounter(value, 1, 9999, ARMENIAN, 3
              /* DECIMAL */
              , defaultSuffix).toLowerCase();

            case 13
            /* BENGALI */
            :
              return createCounterStyleFromRange(value, 2534, 2543, true, defaultSuffix);

            case 14
            /* CAMBODIAN */
            :
            case 30
            /* KHMER */
            :
              return createCounterStyleFromRange(value, 6112, 6121, true, defaultSuffix);

            case 15
            /* CJK_EARTHLY_BRANCH */
            :
              return createCounterStyleFromSymbols(value, '子丑寅卯辰巳午未申酉戌亥', cjkSuffix);

            case 16
            /* CJK_HEAVENLY_STEM */
            :
              return createCounterStyleFromSymbols(value, '甲乙丙丁戊己庚辛壬癸', cjkSuffix);

            case 17
            /* CJK_IDEOGRAPHIC */
            :
            case 48
            /* TRAD_CHINESE_INFORMAL */
            :
              return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);

            case 47
            /* TRAD_CHINESE_FORMAL */
            :
              return createCJKCounter(value, '零壹貳參肆伍陸柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '負', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);

            case 42
            /* SIMP_CHINESE_INFORMAL */
            :
              return createCJKCounter(value, '零一二三四五六七八九', CHINESE_INFORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);

            case 41
            /* SIMP_CHINESE_FORMAL */
            :
              return createCJKCounter(value, '零壹贰叁肆伍陆柒捌玖', CHINESE_FORMAL_MULTIPLIERS, '负', cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS | CJK_HUNDRED_COEFFICIENTS);

            case 26
            /* JAPANESE_INFORMAL */
            :
              return createCJKCounter(value, '〇一二三四五六七八九', '十百千万', JAPANESE_NEGATIVE, cjkSuffix, 0);

            case 25
            /* JAPANESE_FORMAL */
            :
              return createCJKCounter(value, '零壱弐参四伍六七八九', '拾百千万', JAPANESE_NEGATIVE, cjkSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);

            case 31
            /* KOREAN_HANGUL_FORMAL */
            :
              return createCJKCounter(value, '영일이삼사오육칠팔구', '십백천만', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);

            case 33
            /* KOREAN_HANJA_INFORMAL */
            :
              return createCJKCounter(value, '零一二三四五六七八九', '十百千萬', KOREAN_NEGATIVE, koreanSuffix, 0);

            case 32
            /* KOREAN_HANJA_FORMAL */
            :
              return createCJKCounter(value, '零壹貳參四五六七八九', '拾百千', KOREAN_NEGATIVE, koreanSuffix, CJK_ZEROS | CJK_TEN_COEFFICIENTS | CJK_TEN_HIGH_COEFFICIENTS);

            case 18
            /* DEVANAGARI */
            :
              return createCounterStyleFromRange(value, 0x966, 0x96f, true, defaultSuffix);

            case 20
            /* GEORGIAN */
            :
              return createAdditiveCounter(value, 1, 19999, GEORGIAN, 3
              /* DECIMAL */
              , defaultSuffix);

            case 21
            /* GUJARATI */
            :
              return createCounterStyleFromRange(value, 0xae6, 0xaef, true, defaultSuffix);

            case 22
            /* GURMUKHI */
            :
              return createCounterStyleFromRange(value, 0xa66, 0xa6f, true, defaultSuffix);

            case 22
            /* HEBREW */
            :
              return createAdditiveCounter(value, 1, 10999, HEBREW, 3
              /* DECIMAL */
              , defaultSuffix);

            case 23
            /* HIRAGANA */
            :
              return createCounterStyleFromSymbols(value, 'あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん');

            case 24
            /* HIRAGANA_IROHA */
            :
              return createCounterStyleFromSymbols(value, 'いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす');

            case 27
            /* KANNADA */
            :
              return createCounterStyleFromRange(value, 0xce6, 0xcef, true, defaultSuffix);

            case 28
            /* KATAKANA */
            :
              return createCounterStyleFromSymbols(value, 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン', cjkSuffix);

            case 29
            /* KATAKANA_IROHA */
            :
              return createCounterStyleFromSymbols(value, 'イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス', cjkSuffix);

            case 34
            /* LAO */
            :
              return createCounterStyleFromRange(value, 0xed0, 0xed9, true, defaultSuffix);

            case 37
            /* MONGOLIAN */
            :
              return createCounterStyleFromRange(value, 0x1810, 0x1819, true, defaultSuffix);

            case 38
            /* MYANMAR */
            :
              return createCounterStyleFromRange(value, 0x1040, 0x1049, true, defaultSuffix);

            case 39
            /* ORIYA */
            :
              return createCounterStyleFromRange(value, 0xb66, 0xb6f, true, defaultSuffix);

            case 40
            /* PERSIAN */
            :
              return createCounterStyleFromRange(value, 0x6f0, 0x6f9, true, defaultSuffix);

            case 43
            /* TAMIL */
            :
              return createCounterStyleFromRange(value, 0xbe6, 0xbef, true, defaultSuffix);

            case 44
            /* TELUGU */
            :
              return createCounterStyleFromRange(value, 0xc66, 0xc6f, true, defaultSuffix);

            case 45
            /* THAI */
            :
              return createCounterStyleFromRange(value, 0xe50, 0xe59, true, defaultSuffix);

            case 46
            /* TIBETAN */
            :
              return createCounterStyleFromRange(value, 0xf20, 0xf29, true, defaultSuffix);

            case 3
            /* DECIMAL */
            :
            default:
              return createCounterStyleFromRange(value, 48, 57, true, defaultSuffix);
          }
        };

        var IGNORE_ATTRIBUTE = 'data-html2canvas-ignore';

        var DocumentCloner =
        /** @class */
        function () {
          function DocumentCloner(context, element, options) {
            this.context = context;
            this.options = options;
            this.scrolledElements = [];
            this.referenceElement = element;
            this.counters = new CounterState();
            this.quoteDepth = 0;

            if (!element.ownerDocument) {
              throw new Error('Cloned element does not have an owner document');
            }

            this.documentElement = this.cloneNode(element.ownerDocument.documentElement);
          }

          DocumentCloner.prototype.toIFrame = function (ownerDocument, windowSize) {
            var _this = this;

            var iframe = createIFrameContainer(ownerDocument, windowSize);

            if (!iframe.contentWindow) {
              return Promise.reject("Unable to find iframe window");
            }

            var scrollX = ownerDocument.defaultView.pageXOffset;
            var scrollY = ownerDocument.defaultView.pageYOffset;
            var cloneWindow = iframe.contentWindow;
            var documentClone = cloneWindow.document;
            /* Chrome doesn't detect relative background-images assigned in inline <style> sheets when fetched through getComputedStyle
             if window url is about:blank, we can assign the url to current by writing onto the document
             */

            var iframeLoad = iframeLoader(iframe).then(function () {
              return __awaiter(_this, void 0, void 0, function () {
                var onclone, referenceElement;
                return __generator(this, function (_a) {
                  switch (_a.label) {
                    case 0:
                      this.scrolledElements.forEach(restoreNodeScroll);

                      if (cloneWindow) {
                        cloneWindow.scrollTo(windowSize.left, windowSize.top);

                        if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (cloneWindow.scrollY !== windowSize.top || cloneWindow.scrollX !== windowSize.left)) {
                          this.context.logger.warn('Unable to restore scroll position for cloned document');
                          this.context.windowBounds = this.context.windowBounds.add(cloneWindow.scrollX - windowSize.left, cloneWindow.scrollY - windowSize.top, 0, 0);
                        }
                      }

                      onclone = this.options.onclone;
                      referenceElement = this.clonedReferenceElement;

                      if (typeof referenceElement === 'undefined') {
                        return [2
                        /*return*/
                        , Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")];
                      }

                      if (!(documentClone.fonts && documentClone.fonts.ready)) return [3
                      /*break*/
                      , 2];
                      return [4
                      /*yield*/
                      , documentClone.fonts.ready];

                    case 1:
                      _a.sent();

                      _a.label = 2;

                    case 2:
                      if (!/(AppleWebKit)/g.test(navigator.userAgent)) return [3
                      /*break*/
                      , 4];
                      return [4
                      /*yield*/
                      , imagesReady(documentClone)];

                    case 3:
                      _a.sent();

                      _a.label = 4;

                    case 4:
                      if (typeof onclone === 'function') {
                        return [2
                        /*return*/
                        , Promise.resolve().then(function () {
                          return onclone(documentClone, referenceElement);
                        }).then(function () {
                          return iframe;
                        })];
                      }

                      return [2
                      /*return*/
                      , iframe];
                  }
                });
              });
            });
            documentClone.open();
            documentClone.write(serializeDoctype(document.doctype) + "<html></html>"); // Chrome scrolls the parent document for some reason after the write to the cloned window???

            restoreOwnerScroll(this.referenceElement.ownerDocument, scrollX, scrollY);
            documentClone.replaceChild(documentClone.adoptNode(this.documentElement), documentClone.documentElement);
            documentClone.close();
            return iframeLoad;
          };

          DocumentCloner.prototype.createElementClone = function (node) {
            if (isDebugging(node, 2
            /* CLONE */
            )) {
              debugger;
            }

            if (isCanvasElement(node)) {
              return this.createCanvasClone(node);
            }

            if (isStyleElement(node)) {
              return this.createStyleClone(node);
            }

            var clone = node.cloneNode(false);

            if (isImageElement(clone)) {
              if (isImageElement(node) && node.currentSrc && node.currentSrc !== node.src) {
                clone.src = node.currentSrc;
                clone.srcset = '';
              }

              if (clone.loading === 'lazy') {
                clone.loading = 'eager';
              }
            }

            return clone;
          };

          DocumentCloner.prototype.createStyleClone = function (node) {
            try {
              var sheet = node.sheet;

              if (sheet && sheet.cssRules) {
                var css = [].slice.call(sheet.cssRules, 0).reduce(function (css, rule) {
                  if (rule && typeof rule.cssText === 'string') {
                    return css + rule.cssText;
                  }

                  return css;
                }, '');
                var style = node.cloneNode(false);
                style.textContent = css;
                return style;
              }
            } catch (e) {
              // accessing node.sheet.cssRules throws a DOMException
              this.context.logger.error('Unable to access cssRules property', e);

              if (e.name !== 'SecurityError') {
                throw e;
              }
            }

            return node.cloneNode(false);
          };

          DocumentCloner.prototype.createCanvasClone = function (canvas) {
            var _a;

            if (this.options.inlineImages && canvas.ownerDocument) {
              var img = canvas.ownerDocument.createElement('img');

              try {
                img.src = canvas.toDataURL();
                return img;
              } catch (e) {
                this.context.logger.info("Unable to inline canvas contents, canvas is tainted", canvas);
              }
            }

            var clonedCanvas = canvas.cloneNode(false);

            try {
              clonedCanvas.width = canvas.width;
              clonedCanvas.height = canvas.height;
              var ctx = canvas.getContext('2d');
              var clonedCtx = clonedCanvas.getContext('2d');

              if (clonedCtx) {
                if (!this.options.allowTaint && ctx) {
                  clonedCtx.putImageData(ctx.getImageData(0, 0, canvas.width, canvas.height), 0, 0);
                } else {
                  var gl = (_a = canvas.getContext('webgl2')) !== null && _a !== void 0 ? _a : canvas.getContext('webgl');

                  if (gl) {
                    var attribs = gl.getContextAttributes();

                    if ((attribs === null || attribs === void 0 ? void 0 : attribs.preserveDrawingBuffer) === false) {
                      this.context.logger.warn('Unable to clone WebGL context as it has preserveDrawingBuffer=false', canvas);
                    }
                  }

                  clonedCtx.drawImage(canvas, 0, 0);
                }
              }

              return clonedCanvas;
            } catch (e) {
              this.context.logger.info("Unable to clone canvas as it is tainted", canvas);
            }

            return clonedCanvas;
          };

          DocumentCloner.prototype.cloneNode = function (node) {
            if (isTextNode(node)) {
              return document.createTextNode(node.data);
            }

            if (!node.ownerDocument) {
              return node.cloneNode(false);
            }

            var window = node.ownerDocument.defaultView;

            if (window && isElementNode(node) && (isHTMLElementNode(node) || isSVGElementNode(node))) {
              var clone = this.createElementClone(node);
              clone.style.transitionProperty = 'none';
              var style = window.getComputedStyle(node);
              var styleBefore = window.getComputedStyle(node, ':before');
              var styleAfter = window.getComputedStyle(node, ':after');

              if (this.referenceElement === node && isHTMLElementNode(clone)) {
                this.clonedReferenceElement = clone;
              }

              if (isBodyElement(clone)) {
                createPseudoHideStyles(clone);
              }

              var counters = this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
              var before = this.resolvePseudoContent(node, clone, styleBefore, PseudoElementType.BEFORE);

              for (var child = node.firstChild; child; child = child.nextSibling) {
                if (!isElementNode(child) || !isScriptElement(child) && !child.hasAttribute(IGNORE_ATTRIBUTE) && (typeof this.options.ignoreElements !== 'function' || !this.options.ignoreElements(child))) {
                  if (!this.options.copyStyles || !isElementNode(child) || !isStyleElement(child)) {
                    clone.appendChild(this.cloneNode(child));
                  }
                }
              }

              if (before) {
                clone.insertBefore(before, clone.firstChild);
              }

              var after = this.resolvePseudoContent(node, clone, styleAfter, PseudoElementType.AFTER);

              if (after) {
                clone.appendChild(after);
              }

              this.counters.pop(counters);

              if (style && (this.options.copyStyles || isSVGElementNode(node)) && !isIFrameElement(node)) {
                copyCSSStyles(style, clone);
              }

              if (node.scrollTop !== 0 || node.scrollLeft !== 0) {
                this.scrolledElements.push([clone, node.scrollLeft, node.scrollTop]);
              }

              if ((isTextareaElement(node) || isSelectElement(node)) && (isTextareaElement(clone) || isSelectElement(clone))) {
                clone.value = node.value;
              }

              return clone;
            }

            return node.cloneNode(false);
          };

          DocumentCloner.prototype.resolvePseudoContent = function (node, clone, style, pseudoElt) {
            var _this = this;

            if (!style) {
              return;
            }

            var value = style.content;
            var document = clone.ownerDocument;

            if (!document || !value || value === 'none' || value === '-moz-alt-content' || style.display === 'none') {
              return;
            }

            this.counters.parse(new CSSParsedCounterDeclaration(this.context, style));
            var declaration = new CSSParsedPseudoDeclaration(this.context, style);
            var anonymousReplacedElement = document.createElement('html2canvaspseudoelement');
            copyCSSStyles(style, anonymousReplacedElement);
            declaration.content.forEach(function (token) {
              if (token.type === 0
              /* STRING_TOKEN */
              ) {
                anonymousReplacedElement.appendChild(document.createTextNode(token.value));
              } else if (token.type === 22
              /* URL_TOKEN */
              ) {
                var img = document.createElement('img');
                img.src = token.value;
                img.style.opacity = '1';
                anonymousReplacedElement.appendChild(img);
              } else if (token.type === 18
              /* FUNCTION */
              ) {
                if (token.name === 'attr') {
                  var attr = token.values.filter(isIdentToken);

                  if (attr.length) {
                    anonymousReplacedElement.appendChild(document.createTextNode(node.getAttribute(attr[0].value) || ''));
                  }
                } else if (token.name === 'counter') {
                  var _a = token.values.filter(nonFunctionArgSeparator),
                      counter = _a[0],
                      counterStyle = _a[1];

                  if (counter && isIdentToken(counter)) {
                    var counterState = _this.counters.getCounterValue(counter.value);

                    var counterType = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3
                    /* DECIMAL */
                    ;
                    anonymousReplacedElement.appendChild(document.createTextNode(createCounterText(counterState, counterType, false)));
                  }
                } else if (token.name === 'counters') {
                  var _b = token.values.filter(nonFunctionArgSeparator),
                      counter = _b[0],
                      delim = _b[1],
                      counterStyle = _b[2];

                  if (counter && isIdentToken(counter)) {
                    var counterStates = _this.counters.getCounterValues(counter.value);

                    var counterType_1 = counterStyle && isIdentToken(counterStyle) ? listStyleType.parse(_this.context, counterStyle.value) : 3
                    /* DECIMAL */
                    ;
                    var separator = delim && delim.type === 0
                    /* STRING_TOKEN */
                    ? delim.value : '';
                    var text = counterStates.map(function (value) {
                      return createCounterText(value, counterType_1, false);
                    }).join(separator);
                    anonymousReplacedElement.appendChild(document.createTextNode(text));
                  }
                } else ;
              } else if (token.type === 20
              /* IDENT_TOKEN */
              ) {
                switch (token.value) {
                  case 'open-quote':
                    anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, _this.quoteDepth++, true)));
                    break;

                  case 'close-quote':
                    anonymousReplacedElement.appendChild(document.createTextNode(getQuote(declaration.quotes, --_this.quoteDepth, false)));
                    break;

                  default:
                    // safari doesn't parse string tokens correctly because of lack of quotes
                    anonymousReplacedElement.appendChild(document.createTextNode(token.value));
                }
              }
            });
            anonymousReplacedElement.className = PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;
            var newClassName = pseudoElt === PseudoElementType.BEFORE ? " " + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE : " " + PSEUDO_HIDE_ELEMENT_CLASS_AFTER;

            if (isSVGElementNode(clone)) {
              clone.className.baseValue += newClassName;
            } else {
              clone.className += newClassName;
            }

            return anonymousReplacedElement;
          };

          DocumentCloner.destroy = function (container) {
            if (container.parentNode) {
              container.parentNode.removeChild(container);
              return true;
            }

            return false;
          };

          return DocumentCloner;
        }();

        var PseudoElementType;

        (function (PseudoElementType) {
          PseudoElementType[PseudoElementType["BEFORE"] = 0] = "BEFORE";
          PseudoElementType[PseudoElementType["AFTER"] = 1] = "AFTER";
        })(PseudoElementType || (PseudoElementType = {}));

        var createIFrameContainer = function createIFrameContainer(ownerDocument, bounds) {
          var cloneIframeContainer = ownerDocument.createElement('iframe');
          cloneIframeContainer.className = 'html2canvas-container';
          cloneIframeContainer.style.visibility = 'hidden';
          cloneIframeContainer.style.position = 'fixed';
          cloneIframeContainer.style.left = '-10000px';
          cloneIframeContainer.style.top = '0px';
          cloneIframeContainer.style.border = '0';
          cloneIframeContainer.width = bounds.width.toString();
          cloneIframeContainer.height = bounds.height.toString();
          cloneIframeContainer.scrolling = 'no'; // ios won't scroll without it

          cloneIframeContainer.setAttribute(IGNORE_ATTRIBUTE, 'true');
          ownerDocument.body.appendChild(cloneIframeContainer);
          return cloneIframeContainer;
        };

        var imageReady = function imageReady(img) {
          return new Promise(function (resolve) {
            if (img.complete) {
              resolve();
              return;
            }

            if (!img.src) {
              resolve();
              return;
            }

            img.onload = resolve;
            img.onerror = resolve;
          });
        };

        var imagesReady = function imagesReady(document) {
          return Promise.all([].slice.call(document.images, 0).map(imageReady));
        };

        var iframeLoader = function iframeLoader(iframe) {
          return new Promise(function (resolve, reject) {
            var cloneWindow = iframe.contentWindow;

            if (!cloneWindow) {
              return reject("No window assigned for iframe");
            }

            var documentClone = cloneWindow.document;

            cloneWindow.onload = iframe.onload = function () {
              cloneWindow.onload = iframe.onload = null;
              var interval = setInterval(function () {
                if (documentClone.body.childNodes.length > 0 && documentClone.readyState === 'complete') {
                  clearInterval(interval);
                  resolve(iframe);
                }
              }, 50);
            };
          });
        };

        var ignoredStyleProperties = ['all', 'd', 'content' // Safari shows pseudoelements if content is set
        ];

        var copyCSSStyles = function copyCSSStyles(style, target) {
          // Edge does not provide value for cssText
          for (var i = style.length - 1; i >= 0; i--) {
            var property = style.item(i);

            if (ignoredStyleProperties.indexOf(property) === -1) {
              target.style.setProperty(property, style.getPropertyValue(property));
            }
          }

          return target;
        };

        var serializeDoctype = function serializeDoctype(doctype) {
          var str = '';

          if (doctype) {
            str += '<!DOCTYPE ';

            if (doctype.name) {
              str += doctype.name;
            }

            if (doctype.internalSubset) {
              str += doctype.internalSubset;
            }

            if (doctype.publicId) {
              str += "\"" + doctype.publicId + "\"";
            }

            if (doctype.systemId) {
              str += "\"" + doctype.systemId + "\"";
            }

            str += '>';
          }

          return str;
        };

        var restoreOwnerScroll = function restoreOwnerScroll(ownerDocument, x, y) {
          if (ownerDocument && ownerDocument.defaultView && (x !== ownerDocument.defaultView.pageXOffset || y !== ownerDocument.defaultView.pageYOffset)) {
            ownerDocument.defaultView.scrollTo(x, y);
          }
        };

        var restoreNodeScroll = function restoreNodeScroll(_a) {
          var element = _a[0],
              x = _a[1],
              y = _a[2];
          element.scrollLeft = x;
          element.scrollTop = y;
        };

        var PSEUDO_BEFORE = ':before';
        var PSEUDO_AFTER = ':after';
        var PSEUDO_HIDE_ELEMENT_CLASS_BEFORE = '___html2canvas___pseudoelement_before';
        var PSEUDO_HIDE_ELEMENT_CLASS_AFTER = '___html2canvas___pseudoelement_after';
        var PSEUDO_HIDE_ELEMENT_STYLE = "{\n    content: \"\" !important;\n    display: none !important;\n}";

        var createPseudoHideStyles = function createPseudoHideStyles(body) {
          createStyles(body, "." + PSEUDO_HIDE_ELEMENT_CLASS_BEFORE + PSEUDO_BEFORE + PSEUDO_HIDE_ELEMENT_STYLE + "\n         ." + PSEUDO_HIDE_ELEMENT_CLASS_AFTER + PSEUDO_AFTER + PSEUDO_HIDE_ELEMENT_STYLE);
        };

        var createStyles = function createStyles(body, styles) {
          var document = body.ownerDocument;

          if (document) {
            var style = document.createElement('style');
            style.textContent = styles;
            body.appendChild(style);
          }
        };

        var CacheStorage =
        /** @class */
        function () {
          function CacheStorage() {}

          CacheStorage.getOrigin = function (url) {
            var link = CacheStorage._link;

            if (!link) {
              return 'about:blank';
            }

            link.href = url;
            link.href = link.href; // IE9, LOL! - http://jsfiddle.net/niklasvh/2e48b/

            return link.protocol + link.hostname + link.port;
          };

          CacheStorage.isSameOrigin = function (src) {
            return CacheStorage.getOrigin(src) === CacheStorage._origin;
          };

          CacheStorage.setContext = function (window) {
            CacheStorage._link = window.document.createElement('a');
            CacheStorage._origin = CacheStorage.getOrigin(window.location.href);
          };

          CacheStorage._origin = 'about:blank';
          return CacheStorage;
        }();

        var Cache =
        /** @class */
        function () {
          function Cache(context, _options) {
            this.context = context;
            this._options = _options; // eslint-disable-next-line @typescript-eslint/no-explicit-any

            this._cache = {};
          }

          Cache.prototype.addImage = function (src) {
            var result = Promise.resolve();

            if (this.has(src)) {
              return result;
            }

            if (isBlobImage(src) || isRenderable(src)) {
              (this._cache[src] = this.loadImage(src))["catch"](function () {// prevent unhandled rejection
              });
              return result;
            }

            return result;
          }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


          Cache.prototype.match = function (src) {
            return this._cache[src];
          };

          Cache.prototype.loadImage = function (key) {
            return __awaiter(this, void 0, void 0, function () {
              var isSameOrigin, useCORS, useProxy, src;

              var _this = this;

              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    isSameOrigin = CacheStorage.isSameOrigin(key);
                    useCORS = !isInlineImage(key) && this._options.useCORS === true && FEATURES.SUPPORT_CORS_IMAGES && !isSameOrigin;
                    useProxy = !isInlineImage(key) && !isSameOrigin && !isBlobImage(key) && typeof this._options.proxy === 'string' && FEATURES.SUPPORT_CORS_XHR && !useCORS;

                    if (!isSameOrigin && this._options.allowTaint === false && !isInlineImage(key) && !isBlobImage(key) && !useProxy && !useCORS) {
                      return [2
                      /*return*/
                      ];
                    }

                    src = key;
                    if (!useProxy) return [3
                    /*break*/
                    , 2];
                    return [4
                    /*yield*/
                    , this.proxy(src)];

                  case 1:
                    src = _a.sent();
                    _a.label = 2;

                  case 2:
                    this.context.logger.debug("Added image " + key.substring(0, 256));
                    return [4
                    /*yield*/
                    , new Promise(function (resolve, reject) {
                      var img = new Image();

                      img.onload = function () {
                        return resolve(img);
                      };

                      img.onerror = reject; //ios safari 10.3 taints canvas with data urls unless crossOrigin is set to anonymous

                      if (isInlineBase64Image(src) || useCORS) {
                        img.crossOrigin = 'anonymous';
                      }

                      img.src = src;

                      if (img.complete === true) {
                        // Inline XML images may fail to parse, throwing an Error later on
                        setTimeout(function () {
                          return resolve(img);
                        }, 500);
                      }

                      if (_this._options.imageTimeout > 0) {
                        setTimeout(function () {
                          return reject("Timed out (" + _this._options.imageTimeout + "ms) loading image");
                        }, _this._options.imageTimeout);
                      }
                    })];

                  case 3:
                    return [2
                    /*return*/
                    , _a.sent()];
                }
              });
            });
          };

          Cache.prototype.has = function (key) {
            return typeof this._cache[key] !== 'undefined';
          };

          Cache.prototype.keys = function () {
            return Promise.resolve(Object.keys(this._cache));
          };

          Cache.prototype.proxy = function (src) {
            var _this = this;

            var proxy = this._options.proxy;

            if (!proxy) {
              throw new Error('No proxy defined');
            }

            var key = src.substring(0, 256);
            return new Promise(function (resolve, reject) {
              var responseType = FEATURES.SUPPORT_RESPONSE_TYPE ? 'blob' : 'text';
              var xhr = new XMLHttpRequest();

              xhr.onload = function () {
                if (xhr.status === 200) {
                  if (responseType === 'text') {
                    resolve(xhr.response);
                  } else {
                    var reader_1 = new FileReader();
                    reader_1.addEventListener('load', function () {
                      return resolve(reader_1.result);
                    }, false);
                    reader_1.addEventListener('error', function (e) {
                      return reject(e);
                    }, false);
                    reader_1.readAsDataURL(xhr.response);
                  }
                } else {
                  reject("Failed to proxy resource " + key + " with status code " + xhr.status);
                }
              };

              xhr.onerror = reject;
              var queryString = proxy.indexOf('?') > -1 ? '&' : '?';
              xhr.open('GET', "" + proxy + queryString + "url=" + encodeURIComponent(src) + "&responseType=" + responseType);

              if (responseType !== 'text' && xhr instanceof XMLHttpRequest) {
                xhr.responseType = responseType;
              }

              if (_this._options.imageTimeout) {
                var timeout_1 = _this._options.imageTimeout;
                xhr.timeout = timeout_1;

                xhr.ontimeout = function () {
                  return reject("Timed out (" + timeout_1 + "ms) proxying " + key);
                };
              }

              xhr.send();
            });
          };

          return Cache;
        }();

        var INLINE_SVG = /^data:image\/svg\+xml/i;
        var INLINE_BASE64 = /^data:image\/.*;base64,/i;
        var INLINE_IMG = /^data:image\/.*/i;

        var isRenderable = function isRenderable(src) {
          return FEATURES.SUPPORT_SVG_DRAWING || !isSVG(src);
        };

        var isInlineImage = function isInlineImage(src) {
          return INLINE_IMG.test(src);
        };

        var isInlineBase64Image = function isInlineBase64Image(src) {
          return INLINE_BASE64.test(src);
        };

        var isBlobImage = function isBlobImage(src) {
          return src.substr(0, 4) === 'blob';
        };

        var isSVG = function isSVG(src) {
          return src.substr(-3).toLowerCase() === 'svg' || INLINE_SVG.test(src);
        };

        var Vector =
        /** @class */
        function () {
          function Vector(x, y) {
            this.type = 0
            /* VECTOR */
            ;
            this.x = x;
            this.y = y;
          }

          Vector.prototype.add = function (deltaX, deltaY) {
            return new Vector(this.x + deltaX, this.y + deltaY);
          };

          return Vector;
        }();

        var lerp = function lerp(a, b, t) {
          return new Vector(a.x + (b.x - a.x) * t, a.y + (b.y - a.y) * t);
        };

        var BezierCurve =
        /** @class */
        function () {
          function BezierCurve(start, startControl, endControl, end) {
            this.type = 1
            /* BEZIER_CURVE */
            ;
            this.start = start;
            this.startControl = startControl;
            this.endControl = endControl;
            this.end = end;
          }

          BezierCurve.prototype.subdivide = function (t, firstHalf) {
            var ab = lerp(this.start, this.startControl, t);
            var bc = lerp(this.startControl, this.endControl, t);
            var cd = lerp(this.endControl, this.end, t);
            var abbc = lerp(ab, bc, t);
            var bccd = lerp(bc, cd, t);
            var dest = lerp(abbc, bccd, t);
            return firstHalf ? new BezierCurve(this.start, ab, abbc, dest) : new BezierCurve(dest, bccd, cd, this.end);
          };

          BezierCurve.prototype.add = function (deltaX, deltaY) {
            return new BezierCurve(this.start.add(deltaX, deltaY), this.startControl.add(deltaX, deltaY), this.endControl.add(deltaX, deltaY), this.end.add(deltaX, deltaY));
          };

          BezierCurve.prototype.reverse = function () {
            return new BezierCurve(this.end, this.endControl, this.startControl, this.start);
          };

          return BezierCurve;
        }();

        var isBezierCurve = function isBezierCurve(path) {
          return path.type === 1
          /* BEZIER_CURVE */
          ;
        };

        var BoundCurves =
        /** @class */
        function () {
          function BoundCurves(element) {
            var styles = element.styles;
            var bounds = element.bounds;

            var _a = getAbsoluteValueForTuple(styles.borderTopLeftRadius, bounds.width, bounds.height),
                tlh = _a[0],
                tlv = _a[1];

            var _b = getAbsoluteValueForTuple(styles.borderTopRightRadius, bounds.width, bounds.height),
                trh = _b[0],
                trv = _b[1];

            var _c = getAbsoluteValueForTuple(styles.borderBottomRightRadius, bounds.width, bounds.height),
                brh = _c[0],
                brv = _c[1];

            var _d = getAbsoluteValueForTuple(styles.borderBottomLeftRadius, bounds.width, bounds.height),
                blh = _d[0],
                blv = _d[1];

            var factors = [];
            factors.push((tlh + trh) / bounds.width);
            factors.push((blh + brh) / bounds.width);
            factors.push((tlv + blv) / bounds.height);
            factors.push((trv + brv) / bounds.height);
            var maxFactor = Math.max.apply(Math, factors);

            if (maxFactor > 1) {
              tlh /= maxFactor;
              tlv /= maxFactor;
              trh /= maxFactor;
              trv /= maxFactor;
              brh /= maxFactor;
              brv /= maxFactor;
              blh /= maxFactor;
              blv /= maxFactor;
            }

            var topWidth = bounds.width - trh;
            var rightHeight = bounds.height - brv;
            var bottomWidth = bounds.width - brh;
            var leftHeight = bounds.height - blv;
            var borderTopWidth = styles.borderTopWidth;
            var borderRightWidth = styles.borderRightWidth;
            var borderBottomWidth = styles.borderBottomWidth;
            var borderLeftWidth = styles.borderLeftWidth;
            var paddingTop = getAbsoluteValue(styles.paddingTop, element.bounds.width);
            var paddingRight = getAbsoluteValue(styles.paddingRight, element.bounds.width);
            var paddingBottom = getAbsoluteValue(styles.paddingBottom, element.bounds.width);
            var paddingLeft = getAbsoluteValue(styles.paddingLeft, element.bounds.width);
            this.topLeftBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3, tlh - borderLeftWidth / 3, tlv - borderTopWidth / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + borderTopWidth / 3);
            this.topRightBorderDoubleOuterBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 3, trh - borderRightWidth / 3, trv - borderTopWidth / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + borderTopWidth / 3);
            this.bottomRightBorderDoubleOuterBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 3, brv - borderBottomWidth / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
            this.bottomLeftBorderDoubleOuterBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 3, bounds.top + leftHeight, blh - borderLeftWidth / 3, blv - borderBottomWidth / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth / 3, bounds.top + bounds.height - borderBottomWidth / 3);
            this.topLeftBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth * 2 / 3, bounds.top + borderTopWidth * 2 / 3, tlh - borderLeftWidth * 2 / 3, tlv - borderTopWidth * 2 / 3, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth * 2 / 3, bounds.top + borderTopWidth * 2 / 3);
            this.topRightBorderDoubleInnerBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth * 2 / 3, trh - borderRightWidth * 2 / 3, trv - borderTopWidth * 2 / 3, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth * 2 / 3, bounds.top + borderTopWidth * 2 / 3);
            this.bottomRightBorderDoubleInnerBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth * 2 / 3, brv - borderBottomWidth * 2 / 3, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth * 2 / 3, bounds.top + bounds.height - borderBottomWidth * 2 / 3);
            this.bottomLeftBorderDoubleInnerBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth * 2 / 3, bounds.top + leftHeight, blh - borderLeftWidth * 2 / 3, blv - borderBottomWidth * 2 / 3, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth * 2 / 3, bounds.top + bounds.height - borderBottomWidth * 2 / 3);
            this.topLeftBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2, tlh - borderLeftWidth / 2, tlv - borderTopWidth / 2, CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + borderTopWidth / 2);
            this.topRightBorderStroke = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top + borderTopWidth / 2, trh - borderRightWidth / 2, trv - borderTopWidth / 2, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + borderTopWidth / 2);
            this.bottomRightBorderStroke = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh - borderRightWidth / 2, brv - borderBottomWidth / 2, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
            this.bottomLeftBorderStroke = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth / 2, bounds.top + leftHeight, blh - borderLeftWidth / 2, blv - borderBottomWidth / 2, CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth / 2, bounds.top + bounds.height - borderBottomWidth / 2);
            this.topLeftBorderBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left, bounds.top, tlh, tlv, CORNER.TOP_LEFT) : new Vector(bounds.left, bounds.top);
            this.topRightBorderBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + topWidth, bounds.top, trh, trv, CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top);
            this.bottomRightBorderBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + bottomWidth, bounds.top + rightHeight, brh, brv, CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width, bounds.top + bounds.height);
            this.bottomLeftBorderBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left, bounds.top + leftHeight, blh, blv, CORNER.BOTTOM_LEFT) : new Vector(bounds.left, bounds.top + bounds.height);
            this.topLeftPaddingBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + borderTopWidth, Math.max(0, tlh - borderLeftWidth), Math.max(0, tlv - borderTopWidth), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth, bounds.top + borderTopWidth);
            this.topRightPaddingBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width - borderRightWidth), bounds.top + borderTopWidth, topWidth > bounds.width + borderRightWidth ? 0 : Math.max(0, trh - borderRightWidth), Math.max(0, trv - borderTopWidth), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + borderTopWidth);
            this.bottomRightPaddingBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - borderLeftWidth), bounds.top + Math.min(rightHeight, bounds.height - borderBottomWidth), Math.max(0, brh - borderRightWidth), Math.max(0, brv - borderBottomWidth), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - borderRightWidth, bounds.top + bounds.height - borderBottomWidth);
            this.bottomLeftPaddingBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth, bounds.top + Math.min(leftHeight, bounds.height - borderBottomWidth), Math.max(0, blh - borderLeftWidth), Math.max(0, blv - borderBottomWidth), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth, bounds.top + bounds.height - borderBottomWidth);
            this.topLeftContentBox = tlh > 0 || tlv > 0 ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop, Math.max(0, tlh - (borderLeftWidth + paddingLeft)), Math.max(0, tlv - (borderTopWidth + paddingTop)), CORNER.TOP_LEFT) : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + borderTopWidth + paddingTop);
            this.topRightContentBox = trh > 0 || trv > 0 ? getCurvePoints(bounds.left + Math.min(topWidth, bounds.width + borderLeftWidth + paddingLeft), bounds.top + borderTopWidth + paddingTop, topWidth > bounds.width + borderLeftWidth + paddingLeft ? 0 : trh - borderLeftWidth + paddingLeft, trv - (borderTopWidth + paddingTop), CORNER.TOP_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + borderTopWidth + paddingTop);
            this.bottomRightContentBox = brh > 0 || brv > 0 ? getCurvePoints(bounds.left + Math.min(bottomWidth, bounds.width - (borderLeftWidth + paddingLeft)), bounds.top + Math.min(rightHeight, bounds.height + borderTopWidth + paddingTop), Math.max(0, brh - (borderRightWidth + paddingRight)), brv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_RIGHT) : new Vector(bounds.left + bounds.width - (borderRightWidth + paddingRight), bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
            this.bottomLeftContentBox = blh > 0 || blv > 0 ? getCurvePoints(bounds.left + borderLeftWidth + paddingLeft, bounds.top + leftHeight, Math.max(0, blh - (borderLeftWidth + paddingLeft)), blv - (borderBottomWidth + paddingBottom), CORNER.BOTTOM_LEFT) : new Vector(bounds.left + borderLeftWidth + paddingLeft, bounds.top + bounds.height - (borderBottomWidth + paddingBottom));
          }

          return BoundCurves;
        }();

        var CORNER;

        (function (CORNER) {
          CORNER[CORNER["TOP_LEFT"] = 0] = "TOP_LEFT";
          CORNER[CORNER["TOP_RIGHT"] = 1] = "TOP_RIGHT";
          CORNER[CORNER["BOTTOM_RIGHT"] = 2] = "BOTTOM_RIGHT";
          CORNER[CORNER["BOTTOM_LEFT"] = 3] = "BOTTOM_LEFT";
        })(CORNER || (CORNER = {}));

        var getCurvePoints = function getCurvePoints(x, y, r1, r2, position) {
          var kappa = 4 * ((Math.sqrt(2) - 1) / 3);
          var ox = r1 * kappa; // control point offset horizontal

          var oy = r2 * kappa; // control point offset vertical

          var xm = x + r1; // x-middle

          var ym = y + r2; // y-middle

          switch (position) {
            case CORNER.TOP_LEFT:
              return new BezierCurve(new Vector(x, ym), new Vector(x, ym - oy), new Vector(xm - ox, y), new Vector(xm, y));

            case CORNER.TOP_RIGHT:
              return new BezierCurve(new Vector(x, y), new Vector(x + ox, y), new Vector(xm, ym - oy), new Vector(xm, ym));

            case CORNER.BOTTOM_RIGHT:
              return new BezierCurve(new Vector(xm, y), new Vector(xm, y + oy), new Vector(x + ox, ym), new Vector(x, ym));

            case CORNER.BOTTOM_LEFT:
            default:
              return new BezierCurve(new Vector(xm, ym), new Vector(xm - ox, ym), new Vector(x, y + oy), new Vector(x, y));
          }
        };

        var calculateBorderBoxPath = function calculateBorderBoxPath(curves) {
          return [curves.topLeftBorderBox, curves.topRightBorderBox, curves.bottomRightBorderBox, curves.bottomLeftBorderBox];
        };

        var calculateContentBoxPath = function calculateContentBoxPath(curves) {
          return [curves.topLeftContentBox, curves.topRightContentBox, curves.bottomRightContentBox, curves.bottomLeftContentBox];
        };

        var calculatePaddingBoxPath = function calculatePaddingBoxPath(curves) {
          return [curves.topLeftPaddingBox, curves.topRightPaddingBox, curves.bottomRightPaddingBox, curves.bottomLeftPaddingBox];
        };

        var TransformEffect =
        /** @class */
        function () {
          function TransformEffect(offsetX, offsetY, matrix) {
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            this.matrix = matrix;
            this.type = 0
            /* TRANSFORM */
            ;
            this.target = 2
            /* BACKGROUND_BORDERS */
            | 4
            /* CONTENT */
            ;
          }

          return TransformEffect;
        }();

        var ClipEffect =
        /** @class */
        function () {
          function ClipEffect(path, target) {
            this.path = path;
            this.target = target;
            this.type = 1
            /* CLIP */
            ;
          }

          return ClipEffect;
        }();

        var OpacityEffect =
        /** @class */
        function () {
          function OpacityEffect(opacity) {
            this.opacity = opacity;
            this.type = 2
            /* OPACITY */
            ;
            this.target = 2
            /* BACKGROUND_BORDERS */
            | 4
            /* CONTENT */
            ;
          }

          return OpacityEffect;
        }();

        var isTransformEffect = function isTransformEffect(effect) {
          return effect.type === 0
          /* TRANSFORM */
          ;
        };

        var isClipEffect = function isClipEffect(effect) {
          return effect.type === 1
          /* CLIP */
          ;
        };

        var isOpacityEffect = function isOpacityEffect(effect) {
          return effect.type === 2
          /* OPACITY */
          ;
        };

        var equalPath = function equalPath(a, b) {
          if (a.length === b.length) {
            return a.some(function (v, i) {
              return v === b[i];
            });
          }

          return false;
        };

        var transformPath = function transformPath(path, deltaX, deltaY, deltaW, deltaH) {
          return path.map(function (point, index) {
            switch (index) {
              case 0:
                return point.add(deltaX, deltaY);

              case 1:
                return point.add(deltaX + deltaW, deltaY);

              case 2:
                return point.add(deltaX + deltaW, deltaY + deltaH);

              case 3:
                return point.add(deltaX, deltaY + deltaH);
            }

            return point;
          });
        };

        var StackingContext =
        /** @class */
        function () {
          function StackingContext(container) {
            this.element = container;
            this.inlineLevel = [];
            this.nonInlineLevel = [];
            this.negativeZIndex = [];
            this.zeroOrAutoZIndexOrTransformedOrOpacity = [];
            this.positiveZIndex = [];
            this.nonPositionedFloats = [];
            this.nonPositionedInlineLevel = [];
          }

          return StackingContext;
        }();

        var ElementPaint =
        /** @class */
        function () {
          function ElementPaint(container, parent) {
            this.container = container;
            this.parent = parent;
            this.effects = [];
            this.curves = new BoundCurves(this.container);

            if (this.container.styles.opacity < 1) {
              this.effects.push(new OpacityEffect(this.container.styles.opacity));
            }

            if (this.container.styles.transform !== null) {
              var offsetX = this.container.bounds.left + this.container.styles.transformOrigin[0].number;
              var offsetY = this.container.bounds.top + this.container.styles.transformOrigin[1].number;
              var matrix = this.container.styles.transform;
              this.effects.push(new TransformEffect(offsetX, offsetY, matrix));
            }

            if (this.container.styles.overflowX !== 0
            /* VISIBLE */
            ) {
              var borderBox = calculateBorderBoxPath(this.curves);
              var paddingBox = calculatePaddingBoxPath(this.curves);

              if (equalPath(borderBox, paddingBox)) {
                this.effects.push(new ClipEffect(borderBox, 2
                /* BACKGROUND_BORDERS */
                | 4
                /* CONTENT */
                ));
              } else {
                this.effects.push(new ClipEffect(borderBox, 2
                /* BACKGROUND_BORDERS */
                ));
                this.effects.push(new ClipEffect(paddingBox, 4
                /* CONTENT */
                ));
              }
            }
          }

          ElementPaint.prototype.getEffects = function (target) {
            var inFlow = [2
            /* ABSOLUTE */
            , 3
            /* FIXED */
            ].indexOf(this.container.styles.position) === -1;
            var parent = this.parent;
            var effects = this.effects.slice(0);

            while (parent) {
              var croplessEffects = parent.effects.filter(function (effect) {
                return !isClipEffect(effect);
              });

              if (inFlow || parent.container.styles.position !== 0
              /* STATIC */
              || !parent.parent) {
                effects.unshift.apply(effects, croplessEffects);
                inFlow = [2
                /* ABSOLUTE */
                , 3
                /* FIXED */
                ].indexOf(parent.container.styles.position) === -1;

                if (parent.container.styles.overflowX !== 0
                /* VISIBLE */
                ) {
                  var borderBox = calculateBorderBoxPath(parent.curves);
                  var paddingBox = calculatePaddingBoxPath(parent.curves);

                  if (!equalPath(borderBox, paddingBox)) {
                    effects.unshift(new ClipEffect(paddingBox, 2
                    /* BACKGROUND_BORDERS */
                    | 4
                    /* CONTENT */
                    ));
                  }
                }
              } else {
                effects.unshift.apply(effects, croplessEffects);
              }

              parent = parent.parent;
            }

            return effects.filter(function (effect) {
              return contains(effect.target, target);
            });
          };

          return ElementPaint;
        }();

        var parseStackTree = function parseStackTree(parent, stackingContext, realStackingContext, listItems) {
          parent.container.elements.forEach(function (child) {
            var treatAsRealStackingContext = contains(child.flags, 4
            /* CREATES_REAL_STACKING_CONTEXT */
            );
            var createsStackingContext = contains(child.flags, 2
            /* CREATES_STACKING_CONTEXT */
            );
            var paintContainer = new ElementPaint(child, parent);

            if (contains(child.styles.display, 2048
            /* LIST_ITEM */
            )) {
              listItems.push(paintContainer);
            }

            var listOwnerItems = contains(child.flags, 8
            /* IS_LIST_OWNER */
            ) ? [] : listItems;

            if (treatAsRealStackingContext || createsStackingContext) {
              var parentStack = treatAsRealStackingContext || child.styles.isPositioned() ? realStackingContext : stackingContext;
              var stack = new StackingContext(paintContainer);

              if (child.styles.isPositioned() || child.styles.opacity < 1 || child.styles.isTransformed()) {
                var order_1 = child.styles.zIndex.order;

                if (order_1 < 0) {
                  var index_1 = 0;
                  parentStack.negativeZIndex.some(function (current, i) {
                    if (order_1 > current.element.container.styles.zIndex.order) {
                      index_1 = i;
                      return false;
                    } else if (index_1 > 0) {
                      return true;
                    }

                    return false;
                  });
                  parentStack.negativeZIndex.splice(index_1, 0, stack);
                } else if (order_1 > 0) {
                  var index_2 = 0;
                  parentStack.positiveZIndex.some(function (current, i) {
                    if (order_1 >= current.element.container.styles.zIndex.order) {
                      index_2 = i + 1;
                      return false;
                    } else if (index_2 > 0) {
                      return true;
                    }

                    return false;
                  });
                  parentStack.positiveZIndex.splice(index_2, 0, stack);
                } else {
                  parentStack.zeroOrAutoZIndexOrTransformedOrOpacity.push(stack);
                }
              } else {
                if (child.styles.isFloating()) {
                  parentStack.nonPositionedFloats.push(stack);
                } else {
                  parentStack.nonPositionedInlineLevel.push(stack);
                }
              }

              parseStackTree(paintContainer, stack, treatAsRealStackingContext ? stack : realStackingContext, listOwnerItems);
            } else {
              if (child.styles.isInlineLevel()) {
                stackingContext.inlineLevel.push(paintContainer);
              } else {
                stackingContext.nonInlineLevel.push(paintContainer);
              }

              parseStackTree(paintContainer, stackingContext, realStackingContext, listOwnerItems);
            }

            if (contains(child.flags, 8
            /* IS_LIST_OWNER */
            )) {
              processListItems(child, listOwnerItems);
            }
          });
        };

        var processListItems = function processListItems(owner, elements) {
          var numbering = owner instanceof OLElementContainer ? owner.start : 1;
          var reversed = owner instanceof OLElementContainer ? owner.reversed : false;

          for (var i = 0; i < elements.length; i++) {
            var item = elements[i];

            if (item.container instanceof LIElementContainer && typeof item.container.value === 'number' && item.container.value !== 0) {
              numbering = item.container.value;
            }

            item.listValue = createCounterText(numbering, item.container.styles.listStyleType, true);
            numbering += reversed ? -1 : 1;
          }
        };

        var parseStackingContexts = function parseStackingContexts(container) {
          var paintContainer = new ElementPaint(container, null);
          var root = new StackingContext(paintContainer);
          var listItems = [];
          parseStackTree(paintContainer, root, root, listItems);
          processListItems(paintContainer.container, listItems);
          return root;
        };

        var parsePathForBorder = function parsePathForBorder(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftPaddingBox, curves.topRightBorderBox, curves.topRightPaddingBox);

            case 1:
              return createPathFromCurves(curves.topRightBorderBox, curves.topRightPaddingBox, curves.bottomRightBorderBox, curves.bottomRightPaddingBox);

            case 2:
              return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox);

            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftPaddingBox, curves.topLeftBorderBox, curves.topLeftPaddingBox);
          }
        };

        var parsePathForBorderDoubleOuter = function parsePathForBorderDoubleOuter(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox, curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox);

            case 1:
              return createPathFromCurves(curves.topRightBorderBox, curves.topRightBorderDoubleOuterBox, curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox);

            case 2:
              return createPathFromCurves(curves.bottomRightBorderBox, curves.bottomRightBorderDoubleOuterBox, curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox);

            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderBox, curves.bottomLeftBorderDoubleOuterBox, curves.topLeftBorderBox, curves.topLeftBorderDoubleOuterBox);
          }
        };

        var parsePathForBorderDoubleInner = function parsePathForBorderDoubleInner(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createPathFromCurves(curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox, curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox);

            case 1:
              return createPathFromCurves(curves.topRightBorderDoubleInnerBox, curves.topRightPaddingBox, curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox);

            case 2:
              return createPathFromCurves(curves.bottomRightBorderDoubleInnerBox, curves.bottomRightPaddingBox, curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox);

            case 3:
            default:
              return createPathFromCurves(curves.bottomLeftBorderDoubleInnerBox, curves.bottomLeftPaddingBox, curves.topLeftBorderDoubleInnerBox, curves.topLeftPaddingBox);
          }
        };

        var parsePathForBorderStroke = function parsePathForBorderStroke(curves, borderSide) {
          switch (borderSide) {
            case 0:
              return createStrokePathFromCurves(curves.topLeftBorderStroke, curves.topRightBorderStroke);

            case 1:
              return createStrokePathFromCurves(curves.topRightBorderStroke, curves.bottomRightBorderStroke);

            case 2:
              return createStrokePathFromCurves(curves.bottomRightBorderStroke, curves.bottomLeftBorderStroke);

            case 3:
            default:
              return createStrokePathFromCurves(curves.bottomLeftBorderStroke, curves.topLeftBorderStroke);
          }
        };

        var createStrokePathFromCurves = function createStrokePathFromCurves(outer1, outer2) {
          var path = [];

          if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
          } else {
            path.push(outer1);
          }

          if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
          } else {
            path.push(outer2);
          }

          return path;
        };

        var createPathFromCurves = function createPathFromCurves(outer1, inner1, outer2, inner2) {
          var path = [];

          if (isBezierCurve(outer1)) {
            path.push(outer1.subdivide(0.5, false));
          } else {
            path.push(outer1);
          }

          if (isBezierCurve(outer2)) {
            path.push(outer2.subdivide(0.5, true));
          } else {
            path.push(outer2);
          }

          if (isBezierCurve(inner2)) {
            path.push(inner2.subdivide(0.5, true).reverse());
          } else {
            path.push(inner2);
          }

          if (isBezierCurve(inner1)) {
            path.push(inner1.subdivide(0.5, false).reverse());
          } else {
            path.push(inner1);
          }

          return path;
        };

        var paddingBox = function paddingBox(element) {
          var bounds = element.bounds;
          var styles = element.styles;
          return bounds.add(styles.borderLeftWidth, styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth), -(styles.borderTopWidth + styles.borderBottomWidth));
        };

        var contentBox = function contentBox(element) {
          var styles = element.styles;
          var bounds = element.bounds;
          var paddingLeft = getAbsoluteValue(styles.paddingLeft, bounds.width);
          var paddingRight = getAbsoluteValue(styles.paddingRight, bounds.width);
          var paddingTop = getAbsoluteValue(styles.paddingTop, bounds.width);
          var paddingBottom = getAbsoluteValue(styles.paddingBottom, bounds.width);
          return bounds.add(paddingLeft + styles.borderLeftWidth, paddingTop + styles.borderTopWidth, -(styles.borderRightWidth + styles.borderLeftWidth + paddingLeft + paddingRight), -(styles.borderTopWidth + styles.borderBottomWidth + paddingTop + paddingBottom));
        };

        var calculateBackgroundPositioningArea = function calculateBackgroundPositioningArea(backgroundOrigin, element) {
          if (backgroundOrigin === 0
          /* BORDER_BOX */
          ) {
            return element.bounds;
          }

          if (backgroundOrigin === 2
          /* CONTENT_BOX */
          ) {
            return contentBox(element);
          }

          return paddingBox(element);
        };

        var calculateBackgroundPaintingArea = function calculateBackgroundPaintingArea(backgroundClip, element) {
          if (backgroundClip === 0
          /* BORDER_BOX */
          ) {
            return element.bounds;
          }

          if (backgroundClip === 2
          /* CONTENT_BOX */
          ) {
            return contentBox(element);
          }

          return paddingBox(element);
        };

        var calculateBackgroundRendering = function calculateBackgroundRendering(container, index, intrinsicSize) {
          var backgroundPositioningArea = calculateBackgroundPositioningArea(getBackgroundValueForIndex(container.styles.backgroundOrigin, index), container);
          var backgroundPaintingArea = calculateBackgroundPaintingArea(getBackgroundValueForIndex(container.styles.backgroundClip, index), container);
          var backgroundImageSize = calculateBackgroundSize(getBackgroundValueForIndex(container.styles.backgroundSize, index), intrinsicSize, backgroundPositioningArea);
          var sizeWidth = backgroundImageSize[0],
              sizeHeight = backgroundImageSize[1];
          var position = getAbsoluteValueForTuple(getBackgroundValueForIndex(container.styles.backgroundPosition, index), backgroundPositioningArea.width - sizeWidth, backgroundPositioningArea.height - sizeHeight);
          var path = calculateBackgroundRepeatPath(getBackgroundValueForIndex(container.styles.backgroundRepeat, index), position, backgroundImageSize, backgroundPositioningArea, backgroundPaintingArea);
          var offsetX = Math.round(backgroundPositioningArea.left + position[0]);
          var offsetY = Math.round(backgroundPositioningArea.top + position[1]);
          return [path, offsetX, offsetY, sizeWidth, sizeHeight];
        };

        var isAuto = function isAuto(token) {
          return isIdentToken(token) && token.value === BACKGROUND_SIZE.AUTO;
        };

        var hasIntrinsicValue = function hasIntrinsicValue(value) {
          return typeof value === 'number';
        };

        var calculateBackgroundSize = function calculateBackgroundSize(size, _a, bounds) {
          var intrinsicWidth = _a[0],
              intrinsicHeight = _a[1],
              intrinsicProportion = _a[2];
          var first = size[0],
              second = size[1];

          if (!first) {
            return [0, 0];
          }

          if (isLengthPercentage(first) && second && isLengthPercentage(second)) {
            return [getAbsoluteValue(first, bounds.width), getAbsoluteValue(second, bounds.height)];
          }

          var hasIntrinsicProportion = hasIntrinsicValue(intrinsicProportion);

          if (isIdentToken(first) && (first.value === BACKGROUND_SIZE.CONTAIN || first.value === BACKGROUND_SIZE.COVER)) {
            if (hasIntrinsicValue(intrinsicProportion)) {
              var targetRatio = bounds.width / bounds.height;
              return targetRatio < intrinsicProportion !== (first.value === BACKGROUND_SIZE.COVER) ? [bounds.width, bounds.width / intrinsicProportion] : [bounds.height * intrinsicProportion, bounds.height];
            }

            return [bounds.width, bounds.height];
          }

          var hasIntrinsicWidth = hasIntrinsicValue(intrinsicWidth);
          var hasIntrinsicHeight = hasIntrinsicValue(intrinsicHeight);
          var hasIntrinsicDimensions = hasIntrinsicWidth || hasIntrinsicHeight; // If the background-size is auto or auto auto:

          if (isAuto(first) && (!second || isAuto(second))) {
            // If the image has both horizontal and vertical intrinsic dimensions, it's rendered at that size.
            if (hasIntrinsicWidth && hasIntrinsicHeight) {
              return [intrinsicWidth, intrinsicHeight];
            } // If the image has no intrinsic dimensions and has no intrinsic proportions,
            // it's rendered at the size of the background positioning area.


            if (!hasIntrinsicProportion && !hasIntrinsicDimensions) {
              return [bounds.width, bounds.height];
            } // TODO If the image has no intrinsic dimensions but has intrinsic proportions, it's rendered as if contain had been specified instead.
            // If the image has only one intrinsic dimension and has intrinsic proportions, it's rendered at the size corresponding to that one dimension.
            // The other dimension is computed using the specified dimension and the intrinsic proportions.


            if (hasIntrinsicDimensions && hasIntrinsicProportion) {
              var width_1 = hasIntrinsicWidth ? intrinsicWidth : intrinsicHeight * intrinsicProportion;
              var height_1 = hasIntrinsicHeight ? intrinsicHeight : intrinsicWidth / intrinsicProportion;
              return [width_1, height_1];
            } // If the image has only one intrinsic dimension but has no intrinsic proportions,
            // it's rendered using the specified dimension and the other dimension of the background positioning area.


            var width_2 = hasIntrinsicWidth ? intrinsicWidth : bounds.width;
            var height_2 = hasIntrinsicHeight ? intrinsicHeight : bounds.height;
            return [width_2, height_2];
          } // If the image has intrinsic proportions, it's stretched to the specified dimension.
          // The unspecified dimension is computed using the specified dimension and the intrinsic proportions.


          if (hasIntrinsicProportion) {
            var width_3 = 0;
            var height_3 = 0;

            if (isLengthPercentage(first)) {
              width_3 = getAbsoluteValue(first, bounds.width);
            } else if (isLengthPercentage(second)) {
              height_3 = getAbsoluteValue(second, bounds.height);
            }

            if (isAuto(first)) {
              width_3 = height_3 * intrinsicProportion;
            } else if (!second || isAuto(second)) {
              height_3 = width_3 / intrinsicProportion;
            }

            return [width_3, height_3];
          } // If the image has no intrinsic proportions, it's stretched to the specified dimension.
          // The unspecified dimension is computed using the image's corresponding intrinsic dimension,
          // if there is one. If there is no such intrinsic dimension,
          // it becomes the corresponding dimension of the background positioning area.


          var width = null;
          var height = null;

          if (isLengthPercentage(first)) {
            width = getAbsoluteValue(first, bounds.width);
          } else if (second && isLengthPercentage(second)) {
            height = getAbsoluteValue(second, bounds.height);
          }

          if (width !== null && (!second || isAuto(second))) {
            height = hasIntrinsicWidth && hasIntrinsicHeight ? width / intrinsicWidth * intrinsicHeight : bounds.height;
          }

          if (height !== null && isAuto(first)) {
            width = hasIntrinsicWidth && hasIntrinsicHeight ? height / intrinsicHeight * intrinsicWidth : bounds.width;
          }

          if (width !== null && height !== null) {
            return [width, height];
          }

          throw new Error("Unable to calculate background-size for element");
        };

        var getBackgroundValueForIndex = function getBackgroundValueForIndex(values, index) {
          var value = values[index];

          if (typeof value === 'undefined') {
            return values[0];
          }

          return value;
        };

        var calculateBackgroundRepeatPath = function calculateBackgroundRepeatPath(repeat, _a, _b, backgroundPositioningArea, backgroundPaintingArea) {
          var x = _a[0],
              y = _a[1];
          var width = _b[0],
              height = _b[1];

          switch (repeat) {
            case 2
            /* REPEAT_X */
            :
              return [new Vector(Math.round(backgroundPositioningArea.left), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + backgroundPositioningArea.width), Math.round(height + backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left), Math.round(height + backgroundPositioningArea.top + y))];

            case 3
            /* REPEAT_Y */
            :
              return [new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top)), new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.height + backgroundPositioningArea.top))];

            case 1
            /* NO_REPEAT */
            :
              return [new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y)), new Vector(Math.round(backgroundPositioningArea.left + x + width), Math.round(backgroundPositioningArea.top + y + height)), new Vector(Math.round(backgroundPositioningArea.left + x), Math.round(backgroundPositioningArea.top + y + height))];

            default:
              return [new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.top)), new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.top)), new Vector(Math.round(backgroundPaintingArea.left + backgroundPaintingArea.width), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top)), new Vector(Math.round(backgroundPaintingArea.left), Math.round(backgroundPaintingArea.height + backgroundPaintingArea.top))];
          }
        };

        var SMALL_IMAGE = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        var SAMPLE_TEXT = 'Hidden Text';

        var FontMetrics =
        /** @class */
        function () {
          function FontMetrics(document) {
            this._data = {};
            this._document = document;
          }

          FontMetrics.prototype.parseMetrics = function (fontFamily, fontSize) {
            var container = this._document.createElement('div');

            var img = this._document.createElement('img');

            var span = this._document.createElement('span');

            var body = this._document.body;
            container.style.visibility = 'hidden';
            container.style.fontFamily = fontFamily;
            container.style.fontSize = fontSize;
            container.style.margin = '0';
            container.style.padding = '0';
            container.style.whiteSpace = 'nowrap';
            body.appendChild(container);
            img.src = SMALL_IMAGE;
            img.width = 1;
            img.height = 1;
            img.style.margin = '0';
            img.style.padding = '0';
            img.style.verticalAlign = 'baseline';
            span.style.fontFamily = fontFamily;
            span.style.fontSize = fontSize;
            span.style.margin = '0';
            span.style.padding = '0';
            span.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.appendChild(span);
            container.appendChild(img);
            var baseline = img.offsetTop - span.offsetTop + 2;
            container.removeChild(span);
            container.appendChild(this._document.createTextNode(SAMPLE_TEXT));
            container.style.lineHeight = 'normal';
            img.style.verticalAlign = 'super';
            var middle = img.offsetTop - container.offsetTop + 2;
            body.removeChild(container);
            return {
              baseline: baseline,
              middle: middle
            };
          };

          FontMetrics.prototype.getMetrics = function (fontFamily, fontSize) {
            var key = fontFamily + " " + fontSize;

            if (typeof this._data[key] === 'undefined') {
              this._data[key] = this.parseMetrics(fontFamily, fontSize);
            }

            return this._data[key];
          };

          return FontMetrics;
        }();

        var Renderer =
        /** @class */
        function () {
          function Renderer(context, options) {
            this.context = context;
            this.options = options;
          }

          return Renderer;
        }();

        var MASK_OFFSET = 10000;

        var CanvasRenderer =
        /** @class */
        function (_super) {
          __extends(CanvasRenderer, _super);

          function CanvasRenderer(context, options) {
            var _this = _super.call(this, context, options) || this;

            _this._activeEffects = [];
            _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
            _this.ctx = _this.canvas.getContext('2d');

            if (!options.canvas) {
              _this.canvas.width = Math.floor(options.width * options.scale);
              _this.canvas.height = Math.floor(options.height * options.scale);
              _this.canvas.style.width = options.width + "px";
              _this.canvas.style.height = options.height + "px";
            }

            _this.fontMetrics = new FontMetrics(document);

            _this.ctx.scale(_this.options.scale, _this.options.scale);

            _this.ctx.translate(-options.x, -options.y);

            _this.ctx.textBaseline = 'bottom';
            _this._activeEffects = [];

            _this.context.logger.debug("Canvas renderer initialized (" + options.width + "x" + options.height + ") with scale " + options.scale);

            return _this;
          }

          CanvasRenderer.prototype.applyEffects = function (effects) {
            var _this = this;

            while (this._activeEffects.length) {
              this.popEffect();
            }

            effects.forEach(function (effect) {
              return _this.applyEffect(effect);
            });
          };

          CanvasRenderer.prototype.applyEffect = function (effect) {
            this.ctx.save();

            if (isOpacityEffect(effect)) {
              this.ctx.globalAlpha = effect.opacity;
            }

            if (isTransformEffect(effect)) {
              this.ctx.translate(effect.offsetX, effect.offsetY);
              this.ctx.transform(effect.matrix[0], effect.matrix[1], effect.matrix[2], effect.matrix[3], effect.matrix[4], effect.matrix[5]);
              this.ctx.translate(-effect.offsetX, -effect.offsetY);
            }

            if (isClipEffect(effect)) {
              this.path(effect.path);
              this.ctx.clip();
            }

            this._activeEffects.push(effect);
          };

          CanvasRenderer.prototype.popEffect = function () {
            this._activeEffects.pop();

            this.ctx.restore();
          };

          CanvasRenderer.prototype.renderStack = function (stack) {
            return __awaiter(this, void 0, void 0, function () {
              var styles;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    styles = stack.element.container.styles;
                    if (!styles.isVisible()) return [3
                    /*break*/
                    , 2];
                    return [4
                    /*yield*/
                    , this.renderStackContent(stack)];

                  case 1:
                    _a.sent();

                    _a.label = 2;

                  case 2:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          CanvasRenderer.prototype.renderNode = function (paint) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    if (contains(paint.container.flags, 16
                    /* DEBUG_RENDER */
                    )) {
                      debugger;
                    }

                    if (!paint.container.styles.isVisible()) return [3
                    /*break*/
                    , 3];
                    return [4
                    /*yield*/
                    , this.renderNodeBackgroundAndBorders(paint)];

                  case 1:
                    _a.sent();

                    return [4
                    /*yield*/
                    , this.renderNodeContent(paint)];

                  case 2:
                    _a.sent();

                    _a.label = 3;

                  case 3:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          CanvasRenderer.prototype.renderTextWithLetterSpacing = function (text, letterSpacing, baseline) {
            var _this = this;

            if (letterSpacing === 0) {
              this.ctx.fillText(text.text, text.bounds.left, text.bounds.top + baseline);
            } else {
              var letters = splitGraphemes(text.text);
              letters.reduce(function (left, letter) {
                _this.ctx.fillText(letter, left, text.bounds.top + baseline);

                return left + _this.ctx.measureText(letter).width;
              }, text.bounds.left);
            }
          };

          CanvasRenderer.prototype.createFontStyle = function (styles) {
            var fontVariant = styles.fontVariant.filter(function (variant) {
              return variant === 'normal' || variant === 'small-caps';
            }).join('');
            var fontFamily = styles.fontFamily.join(', ');
            var fontSize = isDimensionToken(styles.fontSize) ? "" + styles.fontSize.number + styles.fontSize.unit : styles.fontSize.number + "px";
            return [[styles.fontStyle, fontVariant, styles.fontWeight, fontSize, fontFamily].join(' '), fontFamily, fontSize];
          };

          CanvasRenderer.prototype.renderTextNode = function (text, styles) {
            return __awaiter(this, void 0, void 0, function () {
              var _a, font, fontFamily, fontSize, _b, baseline, middle, paintOrder;

              var _this = this;

              return __generator(this, function (_c) {
                _a = this.createFontStyle(styles), font = _a[0], fontFamily = _a[1], fontSize = _a[2];
                this.ctx.font = font;
                this.ctx.direction = styles.direction === 1
                /* RTL */
                ? 'rtl' : 'ltr';
                this.ctx.textAlign = 'left';
                this.ctx.textBaseline = 'alphabetic';
                _b = this.fontMetrics.getMetrics(fontFamily, fontSize), baseline = _b.baseline, middle = _b.middle;
                paintOrder = styles.paintOrder;
                text.textBounds.forEach(function (text) {
                  paintOrder.forEach(function (paintOrderLayer) {
                    switch (paintOrderLayer) {
                      case 0
                      /* FILL */
                      :
                        _this.ctx.fillStyle = asString(styles.color);

                        _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);

                        var textShadows = styles.textShadow;

                        if (textShadows.length && text.text.trim().length) {
                          textShadows.slice(0).reverse().forEach(function (textShadow) {
                            _this.ctx.shadowColor = asString(textShadow.color);
                            _this.ctx.shadowOffsetX = textShadow.offsetX.number * _this.options.scale;
                            _this.ctx.shadowOffsetY = textShadow.offsetY.number * _this.options.scale;
                            _this.ctx.shadowBlur = textShadow.blur.number;

                            _this.renderTextWithLetterSpacing(text, styles.letterSpacing, baseline);
                          });
                          _this.ctx.shadowColor = '';
                          _this.ctx.shadowOffsetX = 0;
                          _this.ctx.shadowOffsetY = 0;
                          _this.ctx.shadowBlur = 0;
                        }

                        if (styles.textDecorationLine.length) {
                          _this.ctx.fillStyle = asString(styles.textDecorationColor || styles.color);
                          styles.textDecorationLine.forEach(function (textDecorationLine) {
                            switch (textDecorationLine) {
                              case 1
                              /* UNDERLINE */
                              :
                                // Draws a line at the baseline of the font
                                // TODO As some browsers display the line as more than 1px if the font-size is big,
                                // need to take that into account both in position and size
                                _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top + baseline), text.bounds.width, 1);

                                break;

                              case 2
                              /* OVERLINE */
                              :
                                _this.ctx.fillRect(text.bounds.left, Math.round(text.bounds.top), text.bounds.width, 1);

                                break;

                              case 3
                              /* LINE_THROUGH */
                              :
                                // TODO try and find exact position for line-through
                                _this.ctx.fillRect(text.bounds.left, Math.ceil(text.bounds.top + middle), text.bounds.width, 1);

                                break;
                            }
                          });
                        }

                        break;

                      case 1
                      /* STROKE */
                      :
                        if (styles.webkitTextStrokeWidth && text.text.trim().length) {
                          _this.ctx.strokeStyle = asString(styles.webkitTextStrokeColor);
                          _this.ctx.lineWidth = styles.webkitTextStrokeWidth; // eslint-disable-next-line @typescript-eslint/no-explicit-any

                          _this.ctx.lineJoin = !!window.chrome ? 'miter' : 'round';

                          _this.ctx.strokeText(text.text, text.bounds.left, text.bounds.top + baseline);
                        }

                        _this.ctx.strokeStyle = '';
                        _this.ctx.lineWidth = 0;
                        _this.ctx.lineJoin = 'miter';
                        break;
                    }
                  });
                });
                return [2
                /*return*/
                ];
              });
            });
          };

          CanvasRenderer.prototype.renderReplacedElement = function (container, curves, image) {
            if (image && container.intrinsicWidth > 0 && container.intrinsicHeight > 0) {
              var box = contentBox(container);
              var path = calculatePaddingBoxPath(curves);
              this.path(path);
              this.ctx.save();
              this.ctx.clip();
              this.ctx.drawImage(image, 0, 0, container.intrinsicWidth, container.intrinsicHeight, box.left, box.top, box.width, box.height);
              this.ctx.restore();
            }
          };

          CanvasRenderer.prototype.renderNodeContent = function (paint) {
            return __awaiter(this, void 0, void 0, function () {
              var container, curves, styles, _i, _a, child, image, image, iframeRenderer, canvas, size, _b, fontFamily, fontSize, baseline, bounds, x, textBounds, img, image, url, fontFamily, bounds;

              return __generator(this, function (_c) {
                switch (_c.label) {
                  case 0:
                    this.applyEffects(paint.getEffects(4
                    /* CONTENT */
                    ));
                    container = paint.container;
                    curves = paint.curves;
                    styles = container.styles;
                    _i = 0, _a = container.textNodes;
                    _c.label = 1;

                  case 1:
                    if (!(_i < _a.length)) return [3
                    /*break*/
                    , 4];
                    child = _a[_i];
                    return [4
                    /*yield*/
                    , this.renderTextNode(child, styles)];

                  case 2:
                    _c.sent();

                    _c.label = 3;

                  case 3:
                    _i++;
                    return [3
                    /*break*/
                    , 1];

                  case 4:
                    if (!(container instanceof ImageElementContainer)) return [3
                    /*break*/
                    , 8];
                    _c.label = 5;

                  case 5:
                    _c.trys.push([5, 7,, 8]);

                    return [4
                    /*yield*/
                    , this.context.cache.match(container.src)];

                  case 6:
                    image = _c.sent();
                    this.renderReplacedElement(container, curves, image);
                    return [3
                    /*break*/
                    , 8];

                  case 7:
                    _c.sent();

                    this.context.logger.error("Error loading image " + container.src);
                    return [3
                    /*break*/
                    , 8];

                  case 8:
                    if (container instanceof CanvasElementContainer) {
                      this.renderReplacedElement(container, curves, container.canvas);
                    }

                    if (!(container instanceof SVGElementContainer)) return [3
                    /*break*/
                    , 12];
                    _c.label = 9;

                  case 9:
                    _c.trys.push([9, 11,, 12]);

                    return [4
                    /*yield*/
                    , this.context.cache.match(container.svg)];

                  case 10:
                    image = _c.sent();
                    this.renderReplacedElement(container, curves, image);
                    return [3
                    /*break*/
                    , 12];

                  case 11:
                    _c.sent();

                    this.context.logger.error("Error loading svg " + container.svg.substring(0, 255));
                    return [3
                    /*break*/
                    , 12];

                  case 12:
                    if (!(container instanceof IFrameElementContainer && container.tree)) return [3
                    /*break*/
                    , 14];
                    iframeRenderer = new CanvasRenderer(this.context, {
                      scale: this.options.scale,
                      backgroundColor: container.backgroundColor,
                      x: 0,
                      y: 0,
                      width: container.width,
                      height: container.height
                    });
                    return [4
                    /*yield*/
                    , iframeRenderer.render(container.tree)];

                  case 13:
                    canvas = _c.sent();

                    if (container.width && container.height) {
                      this.ctx.drawImage(canvas, 0, 0, container.width, container.height, container.bounds.left, container.bounds.top, container.bounds.width, container.bounds.height);
                    }

                    _c.label = 14;

                  case 14:
                    if (container instanceof InputElementContainer) {
                      size = Math.min(container.bounds.width, container.bounds.height);

                      if (container.type === CHECKBOX) {
                        if (container.checked) {
                          this.ctx.save();
                          this.path([new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79), new Vector(container.bounds.left + size * 0.16, container.bounds.top + size * 0.5549), new Vector(container.bounds.left + size * 0.27347, container.bounds.top + size * 0.44071), new Vector(container.bounds.left + size * 0.39694, container.bounds.top + size * 0.5649), new Vector(container.bounds.left + size * 0.72983, container.bounds.top + size * 0.23), new Vector(container.bounds.left + size * 0.84, container.bounds.top + size * 0.34085), new Vector(container.bounds.left + size * 0.39363, container.bounds.top + size * 0.79)]);
                          this.ctx.fillStyle = asString(INPUT_COLOR);
                          this.ctx.fill();
                          this.ctx.restore();
                        }
                      } else if (container.type === RADIO) {
                        if (container.checked) {
                          this.ctx.save();
                          this.ctx.beginPath();
                          this.ctx.arc(container.bounds.left + size / 2, container.bounds.top + size / 2, size / 4, 0, Math.PI * 2, true);
                          this.ctx.fillStyle = asString(INPUT_COLOR);
                          this.ctx.fill();
                          this.ctx.restore();
                        }
                      }
                    }

                    if (isTextInputElement(container) && container.value.length) {
                      _b = this.createFontStyle(styles), fontFamily = _b[0], fontSize = _b[1];
                      baseline = this.fontMetrics.getMetrics(fontFamily, fontSize).baseline;
                      this.ctx.font = fontFamily;
                      this.ctx.fillStyle = asString(styles.color);
                      this.ctx.textBaseline = 'alphabetic';
                      this.ctx.textAlign = canvasTextAlign(container.styles.textAlign);
                      bounds = contentBox(container);
                      x = 0;

                      switch (container.styles.textAlign) {
                        case 1
                        /* CENTER */
                        :
                          x += bounds.width / 2;
                          break;

                        case 2
                        /* RIGHT */
                        :
                          x += bounds.width;
                          break;
                      }

                      textBounds = bounds.add(x, 0, 0, -bounds.height / 2 + 1);
                      this.ctx.save();
                      this.path([new Vector(bounds.left, bounds.top), new Vector(bounds.left + bounds.width, bounds.top), new Vector(bounds.left + bounds.width, bounds.top + bounds.height), new Vector(bounds.left, bounds.top + bounds.height)]);
                      this.ctx.clip();
                      this.renderTextWithLetterSpacing(new TextBounds(container.value, textBounds), styles.letterSpacing, baseline);
                      this.ctx.restore();
                      this.ctx.textBaseline = 'alphabetic';
                      this.ctx.textAlign = 'left';
                    }

                    if (!contains(container.styles.display, 2048
                    /* LIST_ITEM */
                    )) return [3
                    /*break*/
                    , 20];
                    if (!(container.styles.listStyleImage !== null)) return [3
                    /*break*/
                    , 19];
                    img = container.styles.listStyleImage;
                    if (!(img.type === 0
                    /* URL */
                    )) return [3
                    /*break*/
                    , 18];
                    image = void 0;
                    url = img.url;
                    _c.label = 15;

                  case 15:
                    _c.trys.push([15, 17,, 18]);

                    return [4
                    /*yield*/
                    , this.context.cache.match(url)];

                  case 16:
                    image = _c.sent();
                    this.ctx.drawImage(image, container.bounds.left - (image.width + 10), container.bounds.top);
                    return [3
                    /*break*/
                    , 18];

                  case 17:
                    _c.sent();

                    this.context.logger.error("Error loading list-style-image " + url);
                    return [3
                    /*break*/
                    , 18];

                  case 18:
                    return [3
                    /*break*/
                    , 20];

                  case 19:
                    if (paint.listValue && container.styles.listStyleType !== -1
                    /* NONE */
                    ) {
                      fontFamily = this.createFontStyle(styles)[0];
                      this.ctx.font = fontFamily;
                      this.ctx.fillStyle = asString(styles.color);
                      this.ctx.textBaseline = 'middle';
                      this.ctx.textAlign = 'right';
                      bounds = new Bounds(container.bounds.left, container.bounds.top + getAbsoluteValue(container.styles.paddingTop, container.bounds.width), container.bounds.width, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 1);
                      this.renderTextWithLetterSpacing(new TextBounds(paint.listValue, bounds), styles.letterSpacing, computeLineHeight(styles.lineHeight, styles.fontSize.number) / 2 + 2);
                      this.ctx.textBaseline = 'bottom';
                      this.ctx.textAlign = 'left';
                    }

                    _c.label = 20;

                  case 20:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          CanvasRenderer.prototype.renderStackContent = function (stack) {
            return __awaiter(this, void 0, void 0, function () {
              var _i, _a, child, _b, _c, child, _d, _e, child, _f, _g, child, _h, _j, child, _k, _l, child, _m, _o, child;

              return __generator(this, function (_p) {
                switch (_p.label) {
                  case 0:
                    if (contains(stack.element.container.flags, 16
                    /* DEBUG_RENDER */
                    )) {
                      debugger;
                    } // https://www.w3.org/TR/css-position-3/#painting-order
                    // 1. the background and borders of the element forming the stacking context.


                    return [4
                    /*yield*/
                    , this.renderNodeBackgroundAndBorders(stack.element)];

                  case 1:
                    // https://www.w3.org/TR/css-position-3/#painting-order
                    // 1. the background and borders of the element forming the stacking context.
                    _p.sent();

                    _i = 0, _a = stack.negativeZIndex;
                    _p.label = 2;

                  case 2:
                    if (!(_i < _a.length)) return [3
                    /*break*/
                    , 5];
                    child = _a[_i];
                    return [4
                    /*yield*/
                    , this.renderStack(child)];

                  case 3:
                    _p.sent();

                    _p.label = 4;

                  case 4:
                    _i++;
                    return [3
                    /*break*/
                    , 2];

                  case 5:
                    // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                    return [4
                    /*yield*/
                    , this.renderNodeContent(stack.element)];

                  case 6:
                    // 3. For all its in-flow, non-positioned, block-level descendants in tree order:
                    _p.sent();

                    _b = 0, _c = stack.nonInlineLevel;
                    _p.label = 7;

                  case 7:
                    if (!(_b < _c.length)) return [3
                    /*break*/
                    , 10];
                    child = _c[_b];
                    return [4
                    /*yield*/
                    , this.renderNode(child)];

                  case 8:
                    _p.sent();

                    _p.label = 9;

                  case 9:
                    _b++;
                    return [3
                    /*break*/
                    , 7];

                  case 10:
                    _d = 0, _e = stack.nonPositionedFloats;
                    _p.label = 11;

                  case 11:
                    if (!(_d < _e.length)) return [3
                    /*break*/
                    , 14];
                    child = _e[_d];
                    return [4
                    /*yield*/
                    , this.renderStack(child)];

                  case 12:
                    _p.sent();

                    _p.label = 13;

                  case 13:
                    _d++;
                    return [3
                    /*break*/
                    , 11];

                  case 14:
                    _f = 0, _g = stack.nonPositionedInlineLevel;
                    _p.label = 15;

                  case 15:
                    if (!(_f < _g.length)) return [3
                    /*break*/
                    , 18];
                    child = _g[_f];
                    return [4
                    /*yield*/
                    , this.renderStack(child)];

                  case 16:
                    _p.sent();

                    _p.label = 17;

                  case 17:
                    _f++;
                    return [3
                    /*break*/
                    , 15];

                  case 18:
                    _h = 0, _j = stack.inlineLevel;
                    _p.label = 19;

                  case 19:
                    if (!(_h < _j.length)) return [3
                    /*break*/
                    , 22];
                    child = _j[_h];
                    return [4
                    /*yield*/
                    , this.renderNode(child)];

                  case 20:
                    _p.sent();

                    _p.label = 21;

                  case 21:
                    _h++;
                    return [3
                    /*break*/
                    , 19];

                  case 22:
                    _k = 0, _l = stack.zeroOrAutoZIndexOrTransformedOrOpacity;
                    _p.label = 23;

                  case 23:
                    if (!(_k < _l.length)) return [3
                    /*break*/
                    , 26];
                    child = _l[_k];
                    return [4
                    /*yield*/
                    , this.renderStack(child)];

                  case 24:
                    _p.sent();

                    _p.label = 25;

                  case 25:
                    _k++;
                    return [3
                    /*break*/
                    , 23];

                  case 26:
                    _m = 0, _o = stack.positiveZIndex;
                    _p.label = 27;

                  case 27:
                    if (!(_m < _o.length)) return [3
                    /*break*/
                    , 30];
                    child = _o[_m];
                    return [4
                    /*yield*/
                    , this.renderStack(child)];

                  case 28:
                    _p.sent();

                    _p.label = 29;

                  case 29:
                    _m++;
                    return [3
                    /*break*/
                    , 27];

                  case 30:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          CanvasRenderer.prototype.mask = function (paths) {
            this.ctx.beginPath();
            this.ctx.moveTo(0, 0);
            this.ctx.lineTo(this.canvas.width, 0);
            this.ctx.lineTo(this.canvas.width, this.canvas.height);
            this.ctx.lineTo(0, this.canvas.height);
            this.ctx.lineTo(0, 0);
            this.formatPath(paths.slice(0).reverse());
            this.ctx.closePath();
          };

          CanvasRenderer.prototype.path = function (paths) {
            this.ctx.beginPath();
            this.formatPath(paths);
            this.ctx.closePath();
          };

          CanvasRenderer.prototype.formatPath = function (paths) {
            var _this = this;

            paths.forEach(function (point, index) {
              var start = isBezierCurve(point) ? point.start : point;

              if (index === 0) {
                _this.ctx.moveTo(start.x, start.y);
              } else {
                _this.ctx.lineTo(start.x, start.y);
              }

              if (isBezierCurve(point)) {
                _this.ctx.bezierCurveTo(point.startControl.x, point.startControl.y, point.endControl.x, point.endControl.y, point.end.x, point.end.y);
              }
            });
          };

          CanvasRenderer.prototype.renderRepeat = function (path, pattern, offsetX, offsetY) {
            this.path(path);
            this.ctx.fillStyle = pattern;
            this.ctx.translate(offsetX, offsetY);
            this.ctx.fill();
            this.ctx.translate(-offsetX, -offsetY);
          };

          CanvasRenderer.prototype.resizeImage = function (image, width, height) {
            var _a;

            if (image.width === width && image.height === height) {
              return image;
            }

            var ownerDocument = (_a = this.canvas.ownerDocument) !== null && _a !== void 0 ? _a : document;
            var canvas = ownerDocument.createElement('canvas');
            canvas.width = Math.max(1, width);
            canvas.height = Math.max(1, height);
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
            return canvas;
          };

          CanvasRenderer.prototype.renderBackgroundImage = function (container) {
            return __awaiter(this, void 0, void 0, function () {
              var index, _loop_1, this_1, _i, _a, backgroundImage;

              return __generator(this, function (_b) {
                switch (_b.label) {
                  case 0:
                    index = container.styles.backgroundImage.length - 1;

                    _loop_1 = function _loop_1(backgroundImage) {
                      var image, url, _c, path, x, y, width, height, pattern, _d, path, x, y, width, height, _e, lineLength, x0, x1, y0, y1, canvas, ctx, gradient_1, pattern, _f, path, left, top_1, width, height, position, x, y, _g, rx, ry, radialGradient_1, midX, midY, f, invF;

                      return __generator(this, function (_h) {
                        switch (_h.label) {
                          case 0:
                            if (!(backgroundImage.type === 0
                            /* URL */
                            )) return [3
                            /*break*/
                            , 5];
                            image = void 0;
                            url = backgroundImage.url;
                            _h.label = 1;

                          case 1:
                            _h.trys.push([1, 3,, 4]);

                            return [4
                            /*yield*/
                            , this_1.context.cache.match(url)];

                          case 2:
                            image = _h.sent();
                            return [3
                            /*break*/
                            , 4];

                          case 3:
                            _h.sent();

                            this_1.context.logger.error("Error loading background-image " + url);
                            return [3
                            /*break*/
                            , 4];

                          case 4:
                            if (image) {
                              _c = calculateBackgroundRendering(container, index, [image.width, image.height, image.width / image.height]), path = _c[0], x = _c[1], y = _c[2], width = _c[3], height = _c[4];
                              pattern = this_1.ctx.createPattern(this_1.resizeImage(image, width, height), 'repeat');
                              this_1.renderRepeat(path, pattern, x, y);
                            }

                            return [3
                            /*break*/
                            , 6];

                          case 5:
                            if (isLinearGradient(backgroundImage)) {
                              _d = calculateBackgroundRendering(container, index, [null, null, null]), path = _d[0], x = _d[1], y = _d[2], width = _d[3], height = _d[4];
                              _e = calculateGradientDirection(backgroundImage.angle, width, height), lineLength = _e[0], x0 = _e[1], x1 = _e[2], y0 = _e[3], y1 = _e[4];
                              canvas = document.createElement('canvas');
                              canvas.width = width;
                              canvas.height = height;
                              ctx = canvas.getContext('2d');
                              gradient_1 = ctx.createLinearGradient(x0, y0, x1, y1);
                              processColorStops(backgroundImage.stops, lineLength).forEach(function (colorStop) {
                                return gradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                              });
                              ctx.fillStyle = gradient_1;
                              ctx.fillRect(0, 0, width, height);

                              if (width > 0 && height > 0) {
                                pattern = this_1.ctx.createPattern(canvas, 'repeat');
                                this_1.renderRepeat(path, pattern, x, y);
                              }
                            } else if (isRadialGradient(backgroundImage)) {
                              _f = calculateBackgroundRendering(container, index, [null, null, null]), path = _f[0], left = _f[1], top_1 = _f[2], width = _f[3], height = _f[4];
                              position = backgroundImage.position.length === 0 ? [FIFTY_PERCENT] : backgroundImage.position;
                              x = getAbsoluteValue(position[0], width);
                              y = getAbsoluteValue(position[position.length - 1], height);
                              _g = calculateRadius(backgroundImage, x, y, width, height), rx = _g[0], ry = _g[1];

                              if (rx > 0 && ry > 0) {
                                radialGradient_1 = this_1.ctx.createRadialGradient(left + x, top_1 + y, 0, left + x, top_1 + y, rx);
                                processColorStops(backgroundImage.stops, rx * 2).forEach(function (colorStop) {
                                  return radialGradient_1.addColorStop(colorStop.stop, asString(colorStop.color));
                                });
                                this_1.path(path);
                                this_1.ctx.fillStyle = radialGradient_1;

                                if (rx !== ry) {
                                  midX = container.bounds.left + 0.5 * container.bounds.width;
                                  midY = container.bounds.top + 0.5 * container.bounds.height;
                                  f = ry / rx;
                                  invF = 1 / f;
                                  this_1.ctx.save();
                                  this_1.ctx.translate(midX, midY);
                                  this_1.ctx.transform(1, 0, 0, f, 0, 0);
                                  this_1.ctx.translate(-midX, -midY);
                                  this_1.ctx.fillRect(left, invF * (top_1 - midY) + midY, width, height * invF);
                                  this_1.ctx.restore();
                                } else {
                                  this_1.ctx.fill();
                                }
                              }
                            }

                            _h.label = 6;

                          case 6:
                            index--;
                            return [2
                            /*return*/
                            ];
                        }
                      });
                    };

                    this_1 = this;
                    _i = 0, _a = container.styles.backgroundImage.slice(0).reverse();
                    _b.label = 1;

                  case 1:
                    if (!(_i < _a.length)) return [3
                    /*break*/
                    , 4];
                    backgroundImage = _a[_i];
                    return [5
                    /*yield**/
                    , _loop_1(backgroundImage)];

                  case 2:
                    _b.sent();

                    _b.label = 3;

                  case 3:
                    _i++;
                    return [3
                    /*break*/
                    , 1];

                  case 4:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          CanvasRenderer.prototype.renderSolidBorder = function (color, side, curvePoints) {
            return __awaiter(this, void 0, void 0, function () {
              return __generator(this, function (_a) {
                this.path(parsePathForBorder(curvePoints, side));
                this.ctx.fillStyle = asString(color);
                this.ctx.fill();
                return [2
                /*return*/
                ];
              });
            });
          };

          CanvasRenderer.prototype.renderDoubleBorder = function (color, width, side, curvePoints) {
            return __awaiter(this, void 0, void 0, function () {
              var outerPaths, innerPaths;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    if (!(width < 3)) return [3
                    /*break*/
                    , 2];
                    return [4
                    /*yield*/
                    , this.renderSolidBorder(color, side, curvePoints)];

                  case 1:
                    _a.sent();

                    return [2
                    /*return*/
                    ];

                  case 2:
                    outerPaths = parsePathForBorderDoubleOuter(curvePoints, side);
                    this.path(outerPaths);
                    this.ctx.fillStyle = asString(color);
                    this.ctx.fill();
                    innerPaths = parsePathForBorderDoubleInner(curvePoints, side);
                    this.path(innerPaths);
                    this.ctx.fill();
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          CanvasRenderer.prototype.renderNodeBackgroundAndBorders = function (paint) {
            return __awaiter(this, void 0, void 0, function () {
              var styles, hasBackground, borders, backgroundPaintingArea, side, _i, borders_1, border;

              var _this = this;

              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    this.applyEffects(paint.getEffects(2
                    /* BACKGROUND_BORDERS */
                    ));
                    styles = paint.container.styles;
                    hasBackground = !isTransparent(styles.backgroundColor) || styles.backgroundImage.length;
                    borders = [{
                      style: styles.borderTopStyle,
                      color: styles.borderTopColor,
                      width: styles.borderTopWidth
                    }, {
                      style: styles.borderRightStyle,
                      color: styles.borderRightColor,
                      width: styles.borderRightWidth
                    }, {
                      style: styles.borderBottomStyle,
                      color: styles.borderBottomColor,
                      width: styles.borderBottomWidth
                    }, {
                      style: styles.borderLeftStyle,
                      color: styles.borderLeftColor,
                      width: styles.borderLeftWidth
                    }];
                    backgroundPaintingArea = calculateBackgroundCurvedPaintingArea(getBackgroundValueForIndex(styles.backgroundClip, 0), paint.curves);
                    if (!(hasBackground || styles.boxShadow.length)) return [3
                    /*break*/
                    , 2];
                    this.ctx.save();
                    this.path(backgroundPaintingArea);
                    this.ctx.clip();

                    if (!isTransparent(styles.backgroundColor)) {
                      this.ctx.fillStyle = asString(styles.backgroundColor);
                      this.ctx.fill();
                    }

                    return [4
                    /*yield*/
                    , this.renderBackgroundImage(paint.container)];

                  case 1:
                    _a.sent();

                    this.ctx.restore();
                    styles.boxShadow.slice(0).reverse().forEach(function (shadow) {
                      _this.ctx.save();

                      var borderBoxArea = calculateBorderBoxPath(paint.curves);
                      var maskOffset = shadow.inset ? 0 : MASK_OFFSET;
                      var shadowPaintingArea = transformPath(borderBoxArea, -maskOffset + (shadow.inset ? 1 : -1) * shadow.spread.number, (shadow.inset ? 1 : -1) * shadow.spread.number, shadow.spread.number * (shadow.inset ? -2 : 2), shadow.spread.number * (shadow.inset ? -2 : 2));

                      if (shadow.inset) {
                        _this.path(borderBoxArea);

                        _this.ctx.clip();

                        _this.mask(shadowPaintingArea);
                      } else {
                        _this.mask(borderBoxArea);

                        _this.ctx.clip();

                        _this.path(shadowPaintingArea);
                      }

                      _this.ctx.shadowOffsetX = shadow.offsetX.number + maskOffset;
                      _this.ctx.shadowOffsetY = shadow.offsetY.number;
                      _this.ctx.shadowColor = asString(shadow.color);
                      _this.ctx.shadowBlur = shadow.blur.number;
                      _this.ctx.fillStyle = shadow.inset ? asString(shadow.color) : 'rgba(0,0,0,1)';

                      _this.ctx.fill();

                      _this.ctx.restore();
                    });
                    _a.label = 2;

                  case 2:
                    side = 0;
                    _i = 0, borders_1 = borders;
                    _a.label = 3;

                  case 3:
                    if (!(_i < borders_1.length)) return [3
                    /*break*/
                    , 13];
                    border = borders_1[_i];
                    if (!(border.style !== 0
                    /* NONE */
                    && !isTransparent(border.color) && border.width > 0)) return [3
                    /*break*/
                    , 11];
                    if (!(border.style === 2
                    /* DASHED */
                    )) return [3
                    /*break*/
                    , 5];
                    return [4
                    /*yield*/
                    , this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 2
                    /* DASHED */
                    )];

                  case 4:
                    _a.sent();

                    return [3
                    /*break*/
                    , 11];

                  case 5:
                    if (!(border.style === 3
                    /* DOTTED */
                    )) return [3
                    /*break*/
                    , 7];
                    return [4
                    /*yield*/
                    , this.renderDashedDottedBorder(border.color, border.width, side, paint.curves, 3
                    /* DOTTED */
                    )];

                  case 6:
                    _a.sent();

                    return [3
                    /*break*/
                    , 11];

                  case 7:
                    if (!(border.style === 4
                    /* DOUBLE */
                    )) return [3
                    /*break*/
                    , 9];
                    return [4
                    /*yield*/
                    , this.renderDoubleBorder(border.color, border.width, side, paint.curves)];

                  case 8:
                    _a.sent();

                    return [3
                    /*break*/
                    , 11];

                  case 9:
                    return [4
                    /*yield*/
                    , this.renderSolidBorder(border.color, side, paint.curves)];

                  case 10:
                    _a.sent();

                    _a.label = 11;

                  case 11:
                    side++;
                    _a.label = 12;

                  case 12:
                    _i++;
                    return [3
                    /*break*/
                    , 3];

                  case 13:
                    return [2
                    /*return*/
                    ];
                }
              });
            });
          };

          CanvasRenderer.prototype.renderDashedDottedBorder = function (color, width, side, curvePoints, style) {
            return __awaiter(this, void 0, void 0, function () {
              var strokePaths, boxPaths, startX, startY, endX, endY, length, dashLength, spaceLength, useLineDash, multiplier, numberOfDashes, minSpace, maxSpace, path1, path2, path1, path2;
              return __generator(this, function (_a) {
                this.ctx.save();
                strokePaths = parsePathForBorderStroke(curvePoints, side);
                boxPaths = parsePathForBorder(curvePoints, side);

                if (style === 2
                /* DASHED */
                ) {
                  this.path(boxPaths);
                  this.ctx.clip();
                }

                if (isBezierCurve(boxPaths[0])) {
                  startX = boxPaths[0].start.x;
                  startY = boxPaths[0].start.y;
                } else {
                  startX = boxPaths[0].x;
                  startY = boxPaths[0].y;
                }

                if (isBezierCurve(boxPaths[1])) {
                  endX = boxPaths[1].end.x;
                  endY = boxPaths[1].end.y;
                } else {
                  endX = boxPaths[1].x;
                  endY = boxPaths[1].y;
                }

                if (side === 0 || side === 2) {
                  length = Math.abs(startX - endX);
                } else {
                  length = Math.abs(startY - endY);
                }

                this.ctx.beginPath();

                if (style === 3
                /* DOTTED */
                ) {
                  this.formatPath(strokePaths);
                } else {
                  this.formatPath(boxPaths.slice(0, 2));
                }

                dashLength = width < 3 ? width * 3 : width * 2;
                spaceLength = width < 3 ? width * 2 : width;

                if (style === 3
                /* DOTTED */
                ) {
                  dashLength = width;
                  spaceLength = width;
                }

                useLineDash = true;

                if (length <= dashLength * 2) {
                  useLineDash = false;
                } else if (length <= dashLength * 2 + spaceLength) {
                  multiplier = length / (2 * dashLength + spaceLength);
                  dashLength *= multiplier;
                  spaceLength *= multiplier;
                } else {
                  numberOfDashes = Math.floor((length + spaceLength) / (dashLength + spaceLength));
                  minSpace = (length - numberOfDashes * dashLength) / (numberOfDashes - 1);
                  maxSpace = (length - (numberOfDashes + 1) * dashLength) / numberOfDashes;
                  spaceLength = maxSpace <= 0 || Math.abs(spaceLength - minSpace) < Math.abs(spaceLength - maxSpace) ? minSpace : maxSpace;
                }

                if (useLineDash) {
                  if (style === 3
                  /* DOTTED */
                  ) {
                    this.ctx.setLineDash([0, dashLength + spaceLength]);
                  } else {
                    this.ctx.setLineDash([dashLength, spaceLength]);
                  }
                }

                if (style === 3
                /* DOTTED */
                ) {
                  this.ctx.lineCap = 'round';
                  this.ctx.lineWidth = width;
                } else {
                  this.ctx.lineWidth = width * 2 + 1.1;
                }

                this.ctx.strokeStyle = asString(color);
                this.ctx.stroke();
                this.ctx.setLineDash([]); // dashed round edge gap

                if (style === 2
                /* DASHED */
                ) {
                  if (isBezierCurve(boxPaths[0])) {
                    path1 = boxPaths[3];
                    path2 = boxPaths[0];
                    this.ctx.beginPath();
                    this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                    this.ctx.stroke();
                  }

                  if (isBezierCurve(boxPaths[1])) {
                    path1 = boxPaths[1];
                    path2 = boxPaths[2];
                    this.ctx.beginPath();
                    this.formatPath([new Vector(path1.end.x, path1.end.y), new Vector(path2.start.x, path2.start.y)]);
                    this.ctx.stroke();
                  }
                }

                this.ctx.restore();
                return [2
                /*return*/
                ];
              });
            });
          };

          CanvasRenderer.prototype.render = function (element) {
            return __awaiter(this, void 0, void 0, function () {
              var stack;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    if (this.options.backgroundColor) {
                      this.ctx.fillStyle = asString(this.options.backgroundColor);
                      this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height);
                    }

                    stack = parseStackingContexts(element);
                    return [4
                    /*yield*/
                    , this.renderStack(stack)];

                  case 1:
                    _a.sent();

                    this.applyEffects([]);
                    return [2
                    /*return*/
                    , this.canvas];
                }
              });
            });
          };

          return CanvasRenderer;
        }(Renderer);

        var isTextInputElement = function isTextInputElement(container) {
          if (container instanceof TextareaElementContainer) {
            return true;
          } else if (container instanceof SelectElementContainer) {
            return true;
          } else if (container instanceof InputElementContainer && container.type !== RADIO && container.type !== CHECKBOX) {
            return true;
          }

          return false;
        };

        var calculateBackgroundCurvedPaintingArea = function calculateBackgroundCurvedPaintingArea(clip, curves) {
          switch (clip) {
            case 0
            /* BORDER_BOX */
            :
              return calculateBorderBoxPath(curves);

            case 2
            /* CONTENT_BOX */
            :
              return calculateContentBoxPath(curves);

            case 1
            /* PADDING_BOX */
            :
            default:
              return calculatePaddingBoxPath(curves);
          }
        };

        var canvasTextAlign = function canvasTextAlign(textAlign) {
          switch (textAlign) {
            case 1
            /* CENTER */
            :
              return 'center';

            case 2
            /* RIGHT */
            :
              return 'right';

            case 0
            /* LEFT */
            :
            default:
              return 'left';
          }
        };

        var ForeignObjectRenderer =
        /** @class */
        function (_super) {
          __extends(ForeignObjectRenderer, _super);

          function ForeignObjectRenderer(context, options) {
            var _this = _super.call(this, context, options) || this;

            _this.canvas = options.canvas ? options.canvas : document.createElement('canvas');
            _this.ctx = _this.canvas.getContext('2d');
            _this.options = options;
            _this.canvas.width = Math.floor(options.width * options.scale);
            _this.canvas.height = Math.floor(options.height * options.scale);
            _this.canvas.style.width = options.width + "px";
            _this.canvas.style.height = options.height + "px";

            _this.ctx.scale(_this.options.scale, _this.options.scale);

            _this.ctx.translate(-options.x, -options.y);

            _this.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + options.width + "x" + options.height + " at " + options.x + "," + options.y + ") with scale " + options.scale);

            return _this;
          }

          ForeignObjectRenderer.prototype.render = function (element) {
            return __awaiter(this, void 0, void 0, function () {
              var svg, img;
              return __generator(this, function (_a) {
                switch (_a.label) {
                  case 0:
                    svg = createForeignObjectSVG(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, element);
                    return [4
                    /*yield*/
                    , loadSerializedSVG(svg)];

                  case 1:
                    img = _a.sent();

                    if (this.options.backgroundColor) {
                      this.ctx.fillStyle = asString(this.options.backgroundColor);
                      this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale);
                    }

                    this.ctx.drawImage(img, -this.options.x * this.options.scale, -this.options.y * this.options.scale);
                    return [2
                    /*return*/
                    , this.canvas];
                }
              });
            });
          };

          return ForeignObjectRenderer;
        }(Renderer);

        var loadSerializedSVG = function loadSerializedSVG(svg) {
          return new Promise(function (resolve, reject) {
            var img = new Image();

            img.onload = function () {
              resolve(img);
            };

            img.onerror = reject;
            img.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(svg));
          });
        };

        var Logger =
        /** @class */
        function () {
          function Logger(_a) {
            var id = _a.id,
                enabled = _a.enabled;
            this.id = id;
            this.enabled = enabled;
            this.start = Date.now();
          } // eslint-disable-next-line @typescript-eslint/no-explicit-any


          Logger.prototype.debug = function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            if (this.enabled) {
              // eslint-disable-next-line no-console
              if (typeof window !== 'undefined' && window.console && typeof console.debug === 'function') {
                // eslint-disable-next-line no-console
                console.debug.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
              } else {
                this.info.apply(this, args);
              }
            }
          };

          Logger.prototype.getTime = function () {
            return Date.now() - this.start;
          }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


          Logger.prototype.info = function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            if (this.enabled) {
              // eslint-disable-next-line no-console
              if (typeof window !== 'undefined' && window.console && typeof console.info === 'function') {
                // eslint-disable-next-line no-console
                console.info.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
              }
            }
          }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


          Logger.prototype.warn = function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            if (this.enabled) {
              // eslint-disable-next-line no-console
              if (typeof window !== 'undefined' && window.console && typeof console.warn === 'function') {
                // eslint-disable-next-line no-console
                console.warn.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
              } else {
                this.info.apply(this, args);
              }
            }
          }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


          Logger.prototype.error = function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            if (this.enabled) {
              // eslint-disable-next-line no-console
              if (typeof window !== 'undefined' && window.console && typeof console.error === 'function') {
                // eslint-disable-next-line no-console
                console.error.apply(console, __spreadArray([this.id, this.getTime() + "ms"], args));
              } else {
                this.info.apply(this, args);
              }
            }
          };

          Logger.instances = {};
          return Logger;
        }();

        var Context =
        /** @class */
        function () {
          function Context(options, windowBounds) {
            var _a;

            this.windowBounds = windowBounds;
            this.instanceName = "#" + Context.instanceCount++;
            this.logger = new Logger({
              id: this.instanceName,
              enabled: options.logging
            });
            this.cache = (_a = options.cache) !== null && _a !== void 0 ? _a : new Cache(this, options);
          }

          Context.instanceCount = 1;
          return Context;
        }();

        var html2canvas = function html2canvas(element, options) {
          if (options === void 0) {
            options = {};
          }

          return renderElement(element, options);
        };

        if (typeof window !== 'undefined') {
          CacheStorage.setContext(window);
        }

        var renderElement = function renderElement(element, opts) {
          return __awaiter(void 0, void 0, void 0, function () {
            var ownerDocument, defaultView, resourceOptions, contextOptions, windowOptions, windowBounds, context, foreignObjectRendering, cloneOptions, documentCloner, clonedElement, container, _a, width, height, left, top, backgroundColor, renderOptions, canvas, renderer, root, renderer;

            var _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;

            return __generator(this, function (_u) {
              switch (_u.label) {
                case 0:
                  if (!element || typeof element !== 'object') {
                    return [2
                    /*return*/
                    , Promise.reject('Invalid element provided as first argument')];
                  }

                  ownerDocument = element.ownerDocument;

                  if (!ownerDocument) {
                    throw new Error("Element is not attached to a Document");
                  }

                  defaultView = ownerDocument.defaultView;

                  if (!defaultView) {
                    throw new Error("Document is not attached to a Window");
                  }

                  resourceOptions = {
                    allowTaint: (_b = opts.allowTaint) !== null && _b !== void 0 ? _b : false,
                    imageTimeout: (_c = opts.imageTimeout) !== null && _c !== void 0 ? _c : 15000,
                    proxy: opts.proxy,
                    useCORS: (_d = opts.useCORS) !== null && _d !== void 0 ? _d : false
                  };
                  contextOptions = _assign({
                    logging: (_e = opts.logging) !== null && _e !== void 0 ? _e : true,
                    cache: opts.cache
                  }, resourceOptions);
                  windowOptions = {
                    windowWidth: (_f = opts.windowWidth) !== null && _f !== void 0 ? _f : defaultView.innerWidth,
                    windowHeight: (_g = opts.windowHeight) !== null && _g !== void 0 ? _g : defaultView.innerHeight,
                    scrollX: (_h = opts.scrollX) !== null && _h !== void 0 ? _h : defaultView.pageXOffset,
                    scrollY: (_j = opts.scrollY) !== null && _j !== void 0 ? _j : defaultView.pageYOffset
                  };
                  windowBounds = new Bounds(windowOptions.scrollX, windowOptions.scrollY, windowOptions.windowWidth, windowOptions.windowHeight);
                  context = new Context(contextOptions, windowBounds);
                  foreignObjectRendering = (_k = opts.foreignObjectRendering) !== null && _k !== void 0 ? _k : false;
                  cloneOptions = {
                    allowTaint: (_l = opts.allowTaint) !== null && _l !== void 0 ? _l : false,
                    onclone: opts.onclone,
                    ignoreElements: opts.ignoreElements,
                    inlineImages: foreignObjectRendering,
                    copyStyles: foreignObjectRendering
                  };
                  context.logger.debug("Starting document clone with size " + windowBounds.width + "x" + windowBounds.height + " scrolled to " + -windowBounds.left + "," + -windowBounds.top);
                  documentCloner = new DocumentCloner(context, element, cloneOptions);
                  clonedElement = documentCloner.clonedReferenceElement;

                  if (!clonedElement) {
                    return [2
                    /*return*/
                    , Promise.reject("Unable to find element in cloned iframe")];
                  }

                  return [4
                  /*yield*/
                  , documentCloner.toIFrame(ownerDocument, windowBounds)];

                case 1:
                  container = _u.sent();
                  _a = isBodyElement(clonedElement) || isHTMLElement(clonedElement) ? parseDocumentSize(clonedElement.ownerDocument) : parseBounds(context, clonedElement), width = _a.width, height = _a.height, left = _a.left, top = _a.top;
                  backgroundColor = parseBackgroundColor(context, clonedElement, opts.backgroundColor);
                  renderOptions = {
                    canvas: opts.canvas,
                    backgroundColor: backgroundColor,
                    scale: (_o = (_m = opts.scale) !== null && _m !== void 0 ? _m : defaultView.devicePixelRatio) !== null && _o !== void 0 ? _o : 1,
                    x: ((_p = opts.x) !== null && _p !== void 0 ? _p : 0) + left,
                    y: ((_q = opts.y) !== null && _q !== void 0 ? _q : 0) + top,
                    width: (_r = opts.width) !== null && _r !== void 0 ? _r : Math.ceil(width),
                    height: (_s = opts.height) !== null && _s !== void 0 ? _s : Math.ceil(height)
                  };
                  if (!foreignObjectRendering) return [3
                  /*break*/
                  , 3];
                  context.logger.debug("Document cloned, using foreign object rendering");
                  renderer = new ForeignObjectRenderer(context, renderOptions);
                  return [4
                  /*yield*/
                  , renderer.render(clonedElement)];

                case 2:
                  canvas = _u.sent();
                  return [3
                  /*break*/
                  , 5];

                case 3:
                  context.logger.debug("Document cloned, element located at " + left + "," + top + " with size " + width + "x" + height + " using computed rendering");
                  context.logger.debug("Starting DOM parsing");
                  root = parseTree(context, clonedElement);

                  if (backgroundColor === root.styles.backgroundColor) {
                    root.styles.backgroundColor = COLORS.TRANSPARENT;
                  }

                  context.logger.debug("Starting renderer for element at " + renderOptions.x + "," + renderOptions.y + " with size " + renderOptions.width + "x" + renderOptions.height);
                  renderer = new CanvasRenderer(context, renderOptions);
                  return [4
                  /*yield*/
                  , renderer.render(root)];

                case 4:
                  canvas = _u.sent();
                  _u.label = 5;

                case 5:
                  if ((_t = opts.removeContainer) !== null && _t !== void 0 ? _t : true) {
                    if (!DocumentCloner.destroy(container)) {
                      context.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore");
                    }
                  }

                  context.logger.debug("Finished rendering");
                  return [2
                  /*return*/
                  , canvas];
              }
            });
          });
        };

        var parseBackgroundColor = function parseBackgroundColor(context, element, backgroundColorOverride) {
          var ownerDocument = element.ownerDocument; // http://www.w3.org/TR/css3-background/#special-backgrounds

          var documentBackgroundColor = ownerDocument.documentElement ? parseColor(context, getComputedStyle(ownerDocument.documentElement).backgroundColor) : COLORS.TRANSPARENT;
          var bodyBackgroundColor = ownerDocument.body ? parseColor(context, getComputedStyle(ownerDocument.body).backgroundColor) : COLORS.TRANSPARENT;
          var defaultBackgroundColor = typeof backgroundColorOverride === 'string' ? parseColor(context, backgroundColorOverride) : backgroundColorOverride === null ? COLORS.TRANSPARENT : 0xffffffff;
          return element === ownerDocument.documentElement ? isTransparent(documentBackgroundColor) ? isTransparent(bodyBackgroundColor) ? defaultBackgroundColor : bodyBackgroundColor : documentBackgroundColor : defaultBackgroundColor;
        };

        return html2canvas;
      }); //# sourceMappingURL=html2canvas.js.map

      /***/

    },

    /***/
    "yZBn":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newinvoice/print-preview/print-preview.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function yZBn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"imageToPrint\" style=\"overflow: scroll;\">  \n    <div> \n       <div class=\"text-center dummy-img\" > \n      </div> \n      <div class=\"text-center\" >\n          <h3 class=\"title-content-center\"> {{profile?.companyName}}</h3>\n      </div>\n      <div class=\"text-center\" >\n        <h3 class=\"title-content-center\"> {{profile?.companyNameInArabic}}</h3>\n    </div>\n    \n    <div  class=\" text-center \">\n      {{profile?.addressLine1}} {{profile?.addressLine1inArabic}}   \n    </div>\n    <div  class=\" text-center \">\n      {{profile?.addressLine2}} {{profile?.addressLine2InArabic}}   \n  </div>\n  <div class=\"display-flex full-width\">\n      <div  class=\"item-label no-wrap-text\" style=\"margin-left: 1%;\">\n        VAT # / ضريبة القيمة المضافة  :\n      </div>\n      <div  class=\"item-label \"  style=\"margin-left: 20%;\">\n        {{profile?.vatNumber}}  \n      </div>\n      \n  </div>\n  <div class=\"line-separator\"></div>\n  \n  <div  class=\"text-center\">\n   <h5>VAT INVOICE / فاتوره ضريبية </h5>\n  </div>\n  <div class=\" full-width\">\n    <div class=\"item-label no-wrap-text\">\n    Invoice # / رقم الفاتورة : {{invoice?.invoiceNumber}}\n    </div>\n  </div>\n  <div class=\"display-flex  full-width\">\n    <div class=\"item-label no-wrap-text\">\n    Invoice Date / تاريخ   :\n    \n    </div>\n    <div class=\"item-label no-wrap-text\" style=\"margin-left: 10%;\">{{invoice?.invoiceDate | date : 'dd-MM-yyyy hh:mm'}} </div>\n  </div>\n  <div class=\"line-separator\"></div>\n  \n  <div class=\"display-flex  full-width\">\n    <div class=\"item-lebel no-wrap-text\" style=\"margin-left: 3%;\">\n      <b>Bill To : </b>\n    </div>\n  </div>\n  <div class=\"full-width\">\n    <div  class=\" full-width\" style=\"margin-left: 3%; word-wrap: break-word;\" >\n      {{invoice?.customer.name}} \n    </div>\n    <div  class=\" full-width\" style=\"margin-left: 3%; word-wrap: break-word;\" >\n      {{invoice?.customer.nameInArabic}} \n    </div>\n    \n  </div>\n  <div class=\"full-width\">\n    <div  class=\" full-width\" style=\"margin-left: 3%; word-wrap: break-word;\" >\n      {{invoice?.customer.street}},{{invoice?.customer.city}} \n    </div>\n    <div  class=\" full-width\" style=\"margin-left: 3%; word-wrap: break-word;\" >\n      {{invoice?.customer.streetInArabic}},{{invoice?.customer.cityInArabic }} \n    </div>\n    \n  </div>\n  <div class=\"display-flex  full-width\">\n    <div  class=\"item-label no-wrap-text\" >\n       VAT # / ضريبة القيمة المضافة : \n    </div>\n    <div  class=\"item-label \"  style=\"width: 100%; margin-left: 20%;\">\n      {{invoice?.customer.vatNumber}}\n    </div>\n    \n  </div>\n  <div class=\"line-separator\"></div>\n  <table style=\"width:100%\" class=\"fixed\">\n          <thead>\n            <tr>\n\n              <th style=\"text-align: left; width: 37%; margin-left: 2%;\">\n                <div style=\"margin-left: 3%;\">Item</div>\n                <div class=\"letter-space\" style=\"margin-left: 3%;\">العنصر</div>\n              </th>\n              <th style=\"width:4%\">\n                <div>Qty</div>\n                <div class=\"letter-space\">الكمية</div>\n              </th>\n              <th style=\"width:7%\">\n                <div>Price</div>\n                <div class=\"letter-space\">السعر</div>\n              </th>\n              <th style=\"width:35% ;margin-right: 2%;\">\n                <div style=\"margin-right: 2%;\">Amount</div>\n                <div class=\"letter-space\">المبلغ</div>\n              </th>\n               \n              \n            </tr>\n          </thead>\n          <tr *ngFor=\"let order of orderItems\">\n            <td style=\"text-align: left;margin-left: 3%;\">\n              <div style=\"margin-left: 3%;\">\n                {{order.name}} {{order.nameInArabic}}\n              </div>\n            </td>\n            <td>{{order.quantity}}</td>\n            <td>{{order.unitPrice }}</td>\n            <td >\n              <div style=\"margin-right: 3%;\">\n                {{(order.unitPrice * order.quantity) | number : '1.2-2'}}\n              </div>\n              \n            </td>\n\n            \n           \n          </tr>\n        </table>\n        <div class=\"line-separator\"></div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label\">\n            Qty : {{totalQuantity}}\n          </div>\n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"content-right item-label\" style=\"width: 100%;\">\n            Total Invoice Value(Excl. VAT) : {{(invoice?.total-invoice?.tax) | number : '1.2-2'}}\n          </div>\n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right\" style=\"width: 100%;\">\n            VAT Payable in SAR ({{profile?.vat}}%): {{invoice?.tax | number : '1.2-2'}}\n          </div>\n          \n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right\" style=\"width: 100%;\">\n            Gross Amount in SAR : {{invoice?.total | number : '1.2-2'}}\n          </div>\n        </div>\n        <div class=\"line-separator\"></div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right\" style=\"width: 100%;\">\n          Previous Balance : {{(this.invoice.balanceAmount+this.invoice.amountPaid) | number : '1.2-2' }}\n          </div>\n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right\" style=\"width: 100%;\">\n          Paid Amount : {{this.invoice.amountPaid | number : '1.2-2' }}\n          </div>\n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label title-content-left\" style=\"width: 100%;\">\n          Balance Amount : {{this.invoice.balanceAmount | number : '1.2-2' }}\n          </div>\n        </div>\n        <div class=\"line-separator\"></div>\n        <div class=\"display-flex full-width \" >\n        <div style=\"margin-left: 10%;\">\n          <ngx-qrcode  \n  [elementType]=\"elementType\"\n  [errorCorrectionLevel]=\"correctionLevel\"\n  [value]=\"value\"\n  \n  ></ngx-qrcode>\n</div>\n</div>\n    </div>\n </div>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=newinvoice-newinvoice-module-es5.js.map