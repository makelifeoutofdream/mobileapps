(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~newinvoice-newinvoice-module~viewinvoice-viewinvoice-module"], {
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


      var src_app_services_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/services/db.service */
      "ajt+");
      /* harmony import */


      var src_app_services_print_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/services/print.service */
      "Bhbv");
      /* harmony import */


      var buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! buffer */
      "tjlA");
      /* harmony import */


      var buffer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_8__);
      /* harmony import */


      var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @techiediaries/ngx-qrcode */
      "hiuq");
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! dom-to-image */
      "cLAn");
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_10__);

      var PrintPreviewComponent = /*#__PURE__*/function () {
        function PrintPreviewComponent(printService, dbService, modalCtrl) {
          _classCallCheck(this, PrintPreviewComponent);

          this.printService = printService;
          this.dbService = dbService;
          this.modalCtrl = modalCtrl;
          this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__["NgxQrcodeElementTypes"].URL;
          this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__["NgxQrcodeErrorCorrectionLevels"].HIGH;
          this.value = "";
        }

        _createClass(PrintPreviewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.value = this.generateQRCodeContent();
            this.datetime = new Date(this.invoice.invoiceDate).getDate() + '-' + new Date(this.invoice.invoiceDate).getMonth() + '-' + new Date(this.invoice.invoiceDate).getFullYear() + ' ' + new Date(this.invoice.invoiceDate).getHours() + ':' + new Date(this.invoice.invoiceDate).getMinutes() + ':' + new Date(this.invoice.invoiceDate).getSeconds();
            this.filterUnselectedProducts().then(function (data) {
              _this.orderItems = data;

              _this.getTotalQuantity().then(function (data) {
                setTimeout(function () {
                  _this.pairTo();
                }, 3000);
              });
            });
          }
        }, {
          key: "filterUnselectedProducts",
          value: function filterUnselectedProducts() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      return _context.abrupt("return", this.products.filter(function (a) {
                        return a.quantity != null && a.quantity != undefined && a.quantity > 0;
                      }));

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getTotalQuantity",
          value: function getTotalQuantity() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      this.totalQuantity = this.orderItems.reduce(function (accum, item) {
                        return accum + item.quantity;
                      }, 0);

                    case 1:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "pairTo",
          value: function pairTo() {
            var _this2 = this;

            var node = document.getElementById("imageToPrint"); //html2canvas(node, {

            dom_to_image__WEBPACK_IMPORTED_MODULE_10__["toPng"](node).then(function (dataUrl) {
              //var imgData = canvas.toDataURL("image/png");
              var encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_5___default.a();
              var result = encoder.initialize();
              var img = new Image();
              img.src = dataUrl;

              img.onload = function (e) {
                var ht = Math.ceil(node.offsetHeight / 8) * 8;
                ht = ht + 120;
                result.align('left').image(img, 552, ht, 'threshold', 180).newline().align('center').raw([0x1B, 0x21, 0x20]).line('Thank You!!!').newline().newline().newline().newline().newline().newline().newline().newline().newline().newline().newline().newline();

                _this2.printService.sendToBluetoothPrinter(_this2.profile.selectedPrinter, result.encode());

                console.log('print called');

                _this2.modalCtrl.dismiss();
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
            var qrCodeBuf = buffer__WEBPACK_IMPORTED_MODULE_8__["Buffer"].concat(tagsBufArray);
            var qrCodeBase64 = qrCodeBuf.toString('base64');
            return qrCodeBase64;
          }
        }, {
          key: "getTLVForValue",
          value: function getTLVForValue(tagNum, tagValue) {
            var tagBuf = buffer__WEBPACK_IMPORTED_MODULE_8__["Buffer"].from([tagNum]);
            var tagValueLenBuf = buffer__WEBPACK_IMPORTED_MODULE_8__["Buffer"].from([tagValue.length]);
            var tagValueBuf = buffer__WEBPACK_IMPORTED_MODULE_8__["Buffer"].from(tagValue);
            var buffsArray = [tagBuf, tagValueLenBuf, tagValueBuf];
            return buffer__WEBPACK_IMPORTED_MODULE_8__["Buffer"].concat(buffsArray);
          }
        }]);

        return PrintPreviewComponent;
      }();

      PrintPreviewComponent.ctorParameters = function () {
        return [{
          type: src_app_services_print_service__WEBPACK_IMPORTED_MODULE_7__["PrintService"]
        }, {
          type: src_app_services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"]
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


      __webpack_exports__["default"] = ".text-center {\n  text-align: center;\n}\n\n#imageToPrint {\n  position: relative;\n  font-size: 16px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\n}\n\nimg {\n  width: 100px;\n  height: 100px;\n}\n\n.title {\n  font-size: 18px !important;\n  font-weight: bold;\n}\n\n.content-center {\n  text-align: center;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.content-left {\n  text-align: left;\n  font-size: 16px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.content-right {\n  text-align: right;\n  font-size: 16px;\n  margin: 0px;\n  line-height: 1.5;\n}\n\n.title-content-center {\n  text-align: center;\n  font-size: 18px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.title-content-left {\n  text-align: left;\n  font-size: 18px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.line-separator {\n  margin: 10px 0px;\n  border: 1px dashed black;\n}\n\n.bill-details {\n  display: inline-block;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.oneby3-width {\n  width: 75%;\n}\n\n.oneby2-width {\n  width: 50%;\n}\n\n.display-flex {\n  display: flex;\n  text-align: left;\n}\n\n.item-label {\n  width: 50%;\n  padding: 3px 10px;\n}\n\n.item-cus-label {\n  width: 100%;\n  padding: 3px 10px;\n}\n\n.font-14 {\n  font-size: 14px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.no-wrap-text {\n  white-space: nowrap;\n}\n\n.item-value {\n  width: 50%;\n  padding: 3px 10px;\n}\n\n.item-arabic {\n  width: 33.33%;\n  padding: 3px 10px;\n}\n\n.overflow {\n  overflow: auto;\n}\n\n.dummy-img img {\n  width: 55px !important;\n  height: 50px !important;\n}\n\n.m-t-1 {\n  margin-top: 2px;\n}\n\n.letter-space {\n  letter-spacing: 0;\n  word-spacing: normal;\n  /* text-align: center !important; */\n  word-wrap: normal !important;\n}\n\ntable.fixed {\n  width: 100%;\n}\n\ntable th {\n  padding: 5px 0px 15px;\n  text-align: center;\n}\n\ntable thead tr {\n  border-bottom: 1px solid black;\n}\n\ntable tr td {\n  padding: 5px 0px 15px;\n}\n\ntable td:nth-child(4) {\n  width: 40%;\n  text-align: center;\n}\n\ntable td:nth-child(3), td:nth-child(2), td:nth-child(1) {\n  width: 20%;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ByaW50LXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkRBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBRUo7O0FBQUE7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBREE7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBR0o7O0FBRUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0FBQUo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFESjs7QUFLQTtFQUNJLGdCQUFBO0VBQ0Esd0JBQUE7QUFGSjs7QUFJQTtFQUNJLHFCQUFBO0FBREo7O0FBR0E7RUFDSSxXQUFBO0FBQUo7O0FBRUE7RUFDSSxVQUFBO0FBQ0o7O0FBQ0E7RUFDSSxVQUFBO0FBRUo7O0FBQUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFHSjs7QUFEQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQUlKOztBQUZBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsZ0RBQUE7QUFNSjs7QUFKQTtFQUNJLG1CQUFBO0FBT0o7O0FBTEE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFRSjs7QUFOQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQVNKOztBQVBBO0VBQ0ksY0FBQTtBQVVKOztBQVBJO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQVVSOztBQVBBO0VBQ0ksZUFBQTtBQVVKOztBQVJBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7QUFXSjs7QUFQQTtFQUNJLFdBQUE7QUFVSjs7QUFSRTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFXTjs7QUFURTtFQUNJLDhCQUFBO0FBWU47O0FBVkU7RUFDRSxxQkFBQTtBQWFKOztBQVhFO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBY047O0FBWkU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFlSiIsImZpbGUiOiJwcmludC1wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRleHQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jaW1hZ2VUb1ByaW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOiAxNnB4IDtcbiAgICBmb250LWZhbWlseTogVmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWYgIWltcG9ydGFudDsgICAgXG4gICAgXG59XG5pbWcge1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xufVxuLnRpdGxle1xuICAgIGZvbnQtc2l6ZTogMThweCAhaW1wb3J0YW50O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmNvbnRlbnQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIFxufVxuXG5cbi5jb250ZW50LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBcbn1cbi5jb250ZW50LXJpZ2h0IHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAvLyBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgXG59XG5cbi50aXRsZS1jb250ZW50LWNlbnRlciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgXG59XG4udGl0bGUtY29udGVudC1sZWZ0IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgXG59XG5cbi5saW5lLXNlcGFyYXRvciB7XG4gICAgbWFyZ2luOiAxMHB4IDBweDtcbiAgICBib3JkZXIgOiAxcHggZGFzaGVkIGJsYWNrO1xufVxuLmJpbGwtZGV0YWlscyB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLmZ1bGwtd2lkdGgge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuLm9uZWJ5My13aWR0aCB7XG4gICAgd2lkdGg6IDc1JTtcbn1cbi5vbmVieTItd2lkdGgge1xuICAgIHdpZHRoOiA1MCU7XG59XG4uZGlzcGxheS1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaXRlbS1sYWJlbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbn1cbi5pdGVtLWN1cy1sYWJlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG59XG4uZm9udC0xNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxufVxuLm5vLXdyYXAtdGV4dHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLml0ZW0tdmFsdWUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG59XG4uaXRlbS1hcmFiaWMge1xuICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG59XG4ub3ZlcmZsb3cge1xuICAgIG92ZXJmbG93OiBhdXRvOyBcbn1cbi5kdW1teS1pbWcge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5tLXQtMSB7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufSBcbi5sZXR0ZXItc3BhY2Uge1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyAqL1xuICAgIHdvcmQtd3JhcDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgXG59XG50YWJsZS5maXhlZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgdGFibGUgdGgge1xuICAgICAgcGFkZGluZzogNXB4IDBweCAxNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIHRhYmxlIHRoZWFkIHRyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxuICB0YWJsZSB0ciB0ZCB7XG4gICAgcGFkZGluZzogNXB4IDBweCAxNXB4O1xuICB9XG4gIHRhYmxlIHRkOm50aC1jaGlsZCg0KSB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIHRhYmxlIHRkOm50aC1jaGlsZCgzKSAsIHRkOm50aC1jaGlsZCgyKSwgdGQ6bnRoLWNoaWxkKDEpe1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSJdfQ== */";
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


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button size=\"small\" shape=\"round\" (click)=\"closeModal()\" color=\"medium\">\n        <ion-icon slot=\"start\" name=\"close\"></ion-icon> Close\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<div class=\"overflow\">\n  <div id=\"imageToPrint\">  \n    <div> \n      <div class=\"text-center title\" >\n          <h3 class=\"content-center\"> {{profile?.companyName}}</h3>\n      </div>\n      <div class=\"text-center title\" >\n        <h3 class=\"content-center letter-space\"> {{profile?.companyNameInArabic}}</h3>\n    </div>\n    \n    <div  class=\"text-center  letter-space content-center\">\n      {{profile?.addressLine1}} {{profile?.addressLine1inArabic}}   \n    </div>\n    <div  class=\" text-center letter-space content-center\">\n      {{profile?.addressLine2}} {{profile?.addressLine2InArabic}}   \n  </div>\n  <div class=\"full-width \">\n      <div text-left class=\"item-cus-label letter-space title\">\n        VAT # / ضريبة القيمة المضافة  :\n      </div>\n      <div  text-left class=\"item-cus-label title\">\n        {{profile?.vatNumber}}  \n      </div>\n      \n  </div>\n  <div class=\"line-separator\"></div>\n  \n  <div  class=\"text-center title\">\n   <h5 class=\"title\">VAT INVOICE / فاتوره ضريبية </h5>\n  </div>\n  <div class=\"full-width\">\n    <div class=\"item-cus-label\">\n    Invoice # / رقم الفاتورة :\n    </div>\n    <div text-left class=\"item-cus-label\">\n      {{invoice?.invoiceNumber}}\n    </div>\n  </div>\n  <div class=\"full-width\">\n    <div class=\"item-cus-label\">\n    Invoice Date / تاريخ   :</div>\n    <div text-left class=\"item-cus-label\">{{invoice?.invoiceDate | date : 'dd-MM-yyyy hh:mm'}} </div>\n  </div>\n  <div class=\"line-separator\"></div>\n  \n  <div class=\"display-flex  full-width\">\n    <div class=\"item-lebel no-wrap-text\" style=\"margin-left: 3%;\">\n      <b>Bill To : </b>\n    </div>\n  </div>\n  <div class=\"line-separator\"></div>\n  <div class=\"full-width\">\n    <div  class=\" full-width\" style=\"margin-left: 3%; word-wrap: break-word;\" >\n      {{invoice?.customer.name}} \n    </div>\n    <div  class=\" full-width letter-space\" style=\"margin-left: 3%; word-wrap: break-word;\" >\n      {{invoice?.customer.nameInArabic}} \n    </div>\n    \n  </div>\n  <div class=\"full-width\">\n    <div  class=\" full-width\" style=\"margin-left: 3%; word-wrap: break-word;\" >\n      {{invoice?.customer.street}},{{invoice?.customer.city}} \n    </div>\n    <div  class=\" full-width letter-space\" style=\"margin-left: 3%; word-wrap: break-word;\" >\n      {{invoice?.customer.streetInArabic}},{{invoice?.customer.cityInArabic }} \n    </div>\n    \n  </div>\n  <div class=\"full-width\">\n    <div  class=\"item-cus-label letter-space\" >\n       VAT # / ضريبة القيمة المضافة : \n    </div>\n    <div  text-right class=\"item-value \">\n      {{invoice?.customer.vatNumber}}\n    </div>\n    \n  </div>\n  <div class=\"line-separator\"></div>\n  <table style=\"width:100%\" class=\"fixed\">\n          <thead>\n            <tr>\n  \n              <th style=\"text-align: left; width: 37%; margin-left: 2%;font-weight: normal;\">\n                <div style=\"margin-left: 3%;\">Item</div>\n                <div class=\"letter-space\" style=\"margin-left: 3%;\">العنصر</div>\n              </th>\n              <th style=\"width:4% ;font-weight: normal;\">\n                <div>Qty</div>\n                <div class=\"letter-space\">الكمية</div>\n              </th>\n              <th style=\"width:7% ;font-weight: normal;\">\n                <div>Price</div>\n                <div class=\"letter-space\">السعر</div>\n              </th>\n              <th style=\"width:35% ;margin-right: 2%;font-weight: normal;\">\n                <div style=\"margin-right: 2%;\">Amount</div>\n                <div class=\"letter-space\">المبلغ</div>\n              </th>\n               \n              \n            </tr>\n          </thead>\n          <tr *ngFor=\"let order of orderItems\">\n            <td style=\"text-align: left;margin-left: 3%;\">\n              <div style=\"margin-left: 3%; \" class=\"letter-space\">\n                {{order.name}} {{order.nameInArabic}}\n              </div>\n            </td>\n            <td>{{order.quantity}}</td>\n            <td>{{order.unitPrice }}</td>\n            <td >\n              <div style=\"margin-right: 3%;\">\n                {{(order.unitPrice * order.quantity) | number : '1.2-2'}}\n              </div>\n              \n            </td>\n  \n            \n           \n          </tr>\n        </table>\n        <div class=\"line-separator\"></div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right\">\n            Qty : {{totalQuantity}}\n          </div>\n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"content-right item-label\" style=\"width: 100%;\">\n            Total Invoice Value(Excl.VAT) : {{(invoice?.total-invoice?.tax) | number : '1.2-2'}}\n          </div>\n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right\" style=\"width: 100%;\">\n            VAT Payable in SAR ({{profile?.vat}}%): {{invoice?.tax | number : '1.2-2'}}\n          </div>\n          \n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right\" style=\"width: 100%;\">\n            Gross Amount in SAR : {{invoice?.total | number : '1.2-2'}}\n          </div>\n        </div>\n        <div class=\"line-separator\"></div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right\" style=\"width: 100%;\">\n          Previous Balance : {{(this.invoice.balanceAmount+this.invoice.amountPaid) | number : '1.2-2' }}\n          </div>\n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right\" style=\"width: 100%;\">\n          Paid Amount : {{this.invoice.amountPaid | number : '1.2-2' }}\n          </div>\n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label title-content-left\" style=\"width: 100%;\">\n          Balance Amount : {{this.invoice.balanceAmount | number : '1.2-2' }}\n          </div>\n        </div>\n        <div class=\"line-separator\"></div>\n        <div style=\"width:300px;height:300px\" >\n        <div style=\"margin-left: 10%;\">\n          <ngx-qrcode  \n  [elementType]=\"elementType\"\n  [errorCorrectionLevel]=\"correctionLevel\"\n  [value]=\"value\"\n  \n  ></ngx-qrcode>\n  </div>\n  </div>\n  <div class=\"title-content-center full-width\">\n    Thank you !!!\n  </div>\n  <p>&nbsp;</p> \n  <p>&nbsp;</p> \n  <p>&nbsp;</p> \n  <div style=\"height: 40px;\">\n\n  </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~newinvoice-newinvoice-module~viewinvoice-viewinvoice-module-es5.js.map