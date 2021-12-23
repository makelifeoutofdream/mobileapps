(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~newinvoice-newinvoice-module~viewinvoice-viewinvoice-module"],{

/***/ "4Z/T":
/*!************************************************!*\
  !*** ./node_modules/sprintf-js/src/sprintf.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/* global window, exports, define */

!function() {
    'use strict'

    var re = {
        not_string: /[^s]/,
        not_bool: /[^t]/,
        not_type: /[^T]/,
        not_primitive: /[^v]/,
        number: /[diefg]/,
        numeric_arg: /[bcdiefguxX]/,
        json: /[j]/,
        not_json: /[^j]/,
        text: /^[^\x25]+/,
        modulo: /^\x25{2}/,
        placeholder: /^\x25(?:([1-9]\d*)\$|\(([^)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijostTuvxX])/,
        key: /^([a-z_][a-z_\d]*)/i,
        key_access: /^\.([a-z_][a-z_\d]*)/i,
        index_access: /^\[(\d+)\]/,
        sign: /^[+-]/
    }

    function sprintf(key) {
        // `arguments` is not an array, but should be fine for this call
        return sprintf_format(sprintf_parse(key), arguments)
    }

    function vsprintf(fmt, argv) {
        return sprintf.apply(null, [fmt].concat(argv || []))
    }

    function sprintf_format(parse_tree, argv) {
        var cursor = 1, tree_length = parse_tree.length, arg, output = '', i, k, ph, pad, pad_character, pad_length, is_positive, sign
        for (i = 0; i < tree_length; i++) {
            if (typeof parse_tree[i] === 'string') {
                output += parse_tree[i]
            }
            else if (typeof parse_tree[i] === 'object') {
                ph = parse_tree[i] // convenience purposes only
                if (ph.keys) { // keyword argument
                    arg = argv[cursor]
                    for (k = 0; k < ph.keys.length; k++) {
                        if (arg == undefined) {
                            throw new Error(sprintf('[sprintf] Cannot access property "%s" of undefined value "%s"', ph.keys[k], ph.keys[k-1]))
                        }
                        arg = arg[ph.keys[k]]
                    }
                }
                else if (ph.param_no) { // positional argument (explicit)
                    arg = argv[ph.param_no]
                }
                else { // positional argument (implicit)
                    arg = argv[cursor++]
                }

                if (re.not_type.test(ph.type) && re.not_primitive.test(ph.type) && arg instanceof Function) {
                    arg = arg()
                }

                if (re.numeric_arg.test(ph.type) && (typeof arg !== 'number' && isNaN(arg))) {
                    throw new TypeError(sprintf('[sprintf] expecting number but found %T', arg))
                }

                if (re.number.test(ph.type)) {
                    is_positive = arg >= 0
                }

                switch (ph.type) {
                    case 'b':
                        arg = parseInt(arg, 10).toString(2)
                        break
                    case 'c':
                        arg = String.fromCharCode(parseInt(arg, 10))
                        break
                    case 'd':
                    case 'i':
                        arg = parseInt(arg, 10)
                        break
                    case 'j':
                        arg = JSON.stringify(arg, null, ph.width ? parseInt(ph.width) : 0)
                        break
                    case 'e':
                        arg = ph.precision ? parseFloat(arg).toExponential(ph.precision) : parseFloat(arg).toExponential()
                        break
                    case 'f':
                        arg = ph.precision ? parseFloat(arg).toFixed(ph.precision) : parseFloat(arg)
                        break
                    case 'g':
                        arg = ph.precision ? String(Number(arg.toPrecision(ph.precision))) : parseFloat(arg)
                        break
                    case 'o':
                        arg = (parseInt(arg, 10) >>> 0).toString(8)
                        break
                    case 's':
                        arg = String(arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 't':
                        arg = String(!!arg)
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'T':
                        arg = Object.prototype.toString.call(arg).slice(8, -1).toLowerCase()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'u':
                        arg = parseInt(arg, 10) >>> 0
                        break
                    case 'v':
                        arg = arg.valueOf()
                        arg = (ph.precision ? arg.substring(0, ph.precision) : arg)
                        break
                    case 'x':
                        arg = (parseInt(arg, 10) >>> 0).toString(16)
                        break
                    case 'X':
                        arg = (parseInt(arg, 10) >>> 0).toString(16).toUpperCase()
                        break
                }
                if (re.json.test(ph.type)) {
                    output += arg
                }
                else {
                    if (re.number.test(ph.type) && (!is_positive || ph.sign)) {
                        sign = is_positive ? '+' : '-'
                        arg = arg.toString().replace(re.sign, '')
                    }
                    else {
                        sign = ''
                    }
                    pad_character = ph.pad_char ? ph.pad_char === '0' ? '0' : ph.pad_char.charAt(1) : ' '
                    pad_length = ph.width - (sign + arg).length
                    pad = ph.width ? (pad_length > 0 ? pad_character.repeat(pad_length) : '') : ''
                    output += ph.align ? sign + arg + pad : (pad_character === '0' ? sign + pad + arg : pad + sign + arg)
                }
            }
        }
        return output
    }

    var sprintf_cache = Object.create(null)

    function sprintf_parse(fmt) {
        if (sprintf_cache[fmt]) {
            return sprintf_cache[fmt]
        }

        var _fmt = fmt, match, parse_tree = [], arg_names = 0
        while (_fmt) {
            if ((match = re.text.exec(_fmt)) !== null) {
                parse_tree.push(match[0])
            }
            else if ((match = re.modulo.exec(_fmt)) !== null) {
                parse_tree.push('%')
            }
            else if ((match = re.placeholder.exec(_fmt)) !== null) {
                if (match[2]) {
                    arg_names |= 1
                    var field_list = [], replacement_field = match[2], field_match = []
                    if ((field_match = re.key.exec(replacement_field)) !== null) {
                        field_list.push(field_match[1])
                        while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                            if ((field_match = re.key_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else if ((field_match = re.index_access.exec(replacement_field)) !== null) {
                                field_list.push(field_match[1])
                            }
                            else {
                                throw new SyntaxError('[sprintf] failed to parse named argument key')
                            }
                        }
                    }
                    else {
                        throw new SyntaxError('[sprintf] failed to parse named argument key')
                    }
                    match[2] = field_list
                }
                else {
                    arg_names |= 2
                }
                if (arg_names === 3) {
                    throw new Error('[sprintf] mixing positional and named placeholders is not (yet) supported')
                }

                parse_tree.push(
                    {
                        placeholder: match[0],
                        param_no:    match[1],
                        keys:        match[2],
                        sign:        match[3],
                        pad_char:    match[4],
                        align:       match[5],
                        width:       match[6],
                        precision:   match[7],
                        type:        match[8]
                    }
                )
            }
            else {
                throw new SyntaxError('[sprintf] unexpected placeholder')
            }
            _fmt = _fmt.substring(match[0].length)
        }
        return sprintf_cache[fmt] = parse_tree
    }

    /**
     * export to either browser or node.js
     */
    /* eslint-disable quote-props */
    if (true) {
        exports['sprintf'] = sprintf
        exports['vsprintf'] = vsprintf
    }
    if (typeof window !== 'undefined') {
        window['sprintf'] = sprintf
        window['vsprintf'] = vsprintf

        if (true) {
            !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
                return {
                    'sprintf': sprintf,
                    'vsprintf': vsprintf
                }
            }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))
        }
    }
    /* eslint-enable quote-props */
}(); // eslint-disable-line


/***/ }),

/***/ "NKOA":
/*!*********************************************************************!*\
  !*** ./src/app/newinvoice/print-preview/print-preview.component.ts ***!
  \*********************************************************************/
/*! exports provided: PrintPreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintPreviewComponent", function() { return PrintPreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_print_preview_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./print-preview.component.html */ "yZBn");
/* harmony import */ var _print_preview_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./print-preview.component.scss */ "W+k4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! esc-pos-encoder-ionic */ "+4vP");
/* harmony import */ var esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_db_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/db.service */ "ajt+");
/* harmony import */ var src_app_services_print_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/print.service */ "Bhbv");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! buffer */ "tjlA");
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "hiuq");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dom-to-image */ "cLAn");
/* harmony import */ var dom_to_image__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_10__);











let PrintPreviewComponent = class PrintPreviewComponent {
    constructor(printService, dbService, modalCtrl, navCtrl) {
        this.printService = printService;
        this.dbService = dbService;
        this.modalCtrl = modalCtrl;
        this.navCtrl = navCtrl;
        this.canPrint = true;
        this.elementType = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__["NgxQrcodeElementTypes"].URL;
        this.correctionLevel = _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_9__["NgxQrcodeErrorCorrectionLevels"].HIGH;
        this.value = "";
        this.printerSizes = [{
                name: '58mm',
                value: 368
            }, {
                name: '80mm',
                value: 520
            }];
        this.paperSize = '';
    }
    ngOnInit() {
        this.prepareInvoice();
    }
    ngOnDestroy() {
        document.getElementById('imageToPrint').innerHTML = '';
    }
    ngAfterViewInit() {
        // this.prepareInvoice().then(data=>{
        //  setTimeout(() => {
        //    this.pairTo();
        //  },100);
        // }).catch(err=>{
        //  alert('Error whiel preparing preview'+err);
        // })
    }
    prepareInvoice() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            //this.value=this.generateQRCodeContent();
            this.datetime = new Date(this.invoice.invoiceDate).getDate() + '-' + new Date(this.invoice.invoiceDate).getMonth() + '-' + new Date(this.invoice.invoiceDate).getFullYear() + ' ' + new Date(this.invoice.invoiceDate).getHours() + ':' + new Date(this.invoice.invoiceDate).getMinutes() + ':' + new Date(this.invoice.invoiceDate).getSeconds();
            this.filterUnselectedProducts().then(data => {
                this.orderItems = data;
                this.getTotalQuantity();
                this.canPrint = true;
                setTimeout(() => {
                    this.pairTo();
                }, 2000);
            });
        });
    }
    filterUnselectedProducts() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return this.products.filter(a => a.quantity != null && a.quantity != undefined && a.quantity > 0);
        });
    }
    getTotalQuantity() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.totalQuantity = this.orderItems.reduce((accum, item) => accum + item.quantity, 0);
        });
    }
    pairTo() {
        var node = document.getElementById("imageToPrint");
        var width = this.profile && this.profile.selectedPrinterSize ? this.profile.selectedPrinterSize : 368;
        //html2canvas(node, {
        dom_to_image__WEBPACK_IMPORTED_MODULE_10__["toPng"](node).then(dataUrl => {
            //var imgData = canvas.toDataURL("image/png");
            let encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_5___default.a();
            let result = encoder.initialize();
            let img = new Image();
            img.src = dataUrl;
            img.onload = (e) => {
                var ht = Math.ceil(node.offsetHeight / 8) * 8;
                ht = ht + 120;
                console.log(ht, "Height");
                let finalPrint = result
                    .codepage('windows-1252')
                    .image(img, width, ht, 'threshold', 120)
                    .encode();
                //   this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter,result.encode());
                // console.log('print called');
                // this.modalCtrl.dismiss();
                // this.navCtrl.navigateRoot('invoice');
                this.printService.connectToBluetoothPrinter(this.profile.selectedPrinter).subscribe((res) => {
                    //this.printService.clearData();
                    this.printService.printDataToPrinter(finalPrint).then(() => {
                        this.printService.disconnectBluetoothPrinter().then(() => {
                            this.modalCtrl.dismiss();
                        }, (err) => {
                            alert('Disconnecting error ::' + err);
                        });
                    }, (err) => {
                        alert("Printing Failed..");
                        alert(err);
                    });
                }, (error) => {
                    alert(error + " actual conncetion error");
                    alert("connecting to printer failed..");
                    this.modalCtrl.dismiss();
                });
            };
        }).catch(function (error) {
            console.error("oops, something went wrong!", error);
            alert(error);
            this.modalCtrl.dismiss();
        });
    }
    generateQRCodeContent() {
        var sellerName = this.getTLVForValue("1", this.profile.companyName);
        var vatNumber = this.getTLVForValue("2", this.profile.vatNumber);
        var timestamp = this.getTLVForValue("3", "" + this.invoice.invoiceDate);
        let amt = (this.invoice.total - this.invoice.tax);
        var amount = this.getTLVForValue("4", "" + amt);
        var vatAmount = this.getTLVForValue("5", "" + this.invoice.tax);
        var tagsBufArray = [sellerName, vatNumber, timestamp, amount, vatAmount];
        var qrCodeBuf = buffer__WEBPACK_IMPORTED_MODULE_8__["Buffer"].concat(tagsBufArray);
        var qrCodeBase64 = qrCodeBuf.toString('base64');
        return qrCodeBase64;
    }
    getTLVForValue(tagNum, tagValue) {
        var tagBuf = buffer__WEBPACK_IMPORTED_MODULE_8__["Buffer"].from([tagNum]);
        var tagValueLenBuf = buffer__WEBPACK_IMPORTED_MODULE_8__["Buffer"].from([tagValue.length]);
        var tagValueBuf = buffer__WEBPACK_IMPORTED_MODULE_8__["Buffer"].from(tagValue);
        var buffsArray = [tagBuf, tagValueLenBuf, tagValueBuf];
        return buffer__WEBPACK_IMPORTED_MODULE_8__["Buffer"].concat(buffsArray);
    }
};
PrintPreviewComponent.ctorParameters = () => [
    { type: src_app_services_print_service__WEBPACK_IMPORTED_MODULE_7__["PrintService"] },
    { type: src_app_services_db_service__WEBPACK_IMPORTED_MODULE_6__["DbService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] }
];
PrintPreviewComponent.propDecorators = {
    profile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    invoice: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    products: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
PrintPreviewComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-print-preview',
        template: _raw_loader_print_preview_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_print_preview_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PrintPreviewComponent);



/***/ }),

/***/ "W+k4":
/*!***********************************************************************!*\
  !*** ./src/app/newinvoice/print-preview/print-preview.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-center {\n  text-align: center;\n}\n\n#imageToPrint {\n  position: relative;\n  font-size: 16px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif !important;\n}\n\n.p-5 {\n  padding: 5px;\n}\n\nimg {\n  width: 100px;\n  height: 100px;\n}\n\n.title {\n  font-size: 18px !important;\n  font-weight: bold;\n}\n\n.content-center {\n  text-align: center;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.content-left {\n  text-align: left;\n  font-size: 16px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.content-right {\n  text-align: right;\n  font-size: 16px;\n  margin: 0px;\n  line-height: 1.5;\n}\n\n.title-content-center {\n  text-align: center;\n  font-size: 18px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.title-content-left {\n  text-align: left;\n  font-size: 18px;\n  margin: 0px;\n  font-weight: 700;\n  line-height: 1.5;\n}\n\n.line-separator {\n  margin: 10px 0px;\n  border: 1px dashed black;\n}\n\n.bill-details {\n  display: inline-block;\n}\n\n.full-width {\n  width: 100% !important;\n}\n\n.printer-dropdown {\n  width: 100% !important;\n}\n\n.p-b-5 {\n  padding-bottom: 5px;\n}\n\n.oneby3-width {\n  width: 75%;\n}\n\n.oneby2-width {\n  width: 50%;\n}\n\n.display-flex {\n  display: flex;\n  text-align: left;\n}\n\n.item-label {\n  width: 50%;\n  padding: 3px 10px;\n}\n\n.item-cus-label {\n  width: 100%;\n  padding: 3px 10px;\n}\n\n.font-14 {\n  font-size: 14px;\n  font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n.no-wrap-text {\n  white-space: nowrap;\n}\n\n.item-value {\n  width: 50%;\n  padding: 3px 10px;\n}\n\n.item-arabic {\n  width: 33.33%;\n  padding: 3px 10px;\n}\n\n.overflow {\n  overflow: auto;\n}\n\n.dummy-img img {\n  width: 55px !important;\n  height: 50px !important;\n}\n\n.m-t-1 {\n  margin-top: 2px;\n}\n\n.letter-space {\n  letter-spacing: 0;\n  word-spacing: normal;\n  /* text-align: center !important; */\n  word-wrap: normal !important;\n}\n\ntable.fixed {\n  width: 100%;\n}\n\ntable th {\n  padding: 5px 0px 15px;\n  text-align: center;\n}\n\ntable thead tr {\n  border-bottom: 1px solid black;\n}\n\ntable tr td {\n  padding: 5px 0px 15px;\n}\n\ntable td:nth-child(4) {\n  width: 40%;\n  text-align: center;\n}\n\ntable td:nth-child(3), td:nth-child(2), td:nth-child(1) {\n  width: 20%;\n  text-align: center;\n}\n\n.m-r-3p {\n  margin-right: 3%;\n}\n\n.m-r-2p {\n  margin-right: 2%;\n}\n\n.m-l-3p {\n  margin-left: 3%;\n}\n\n.custom-th {\n  width: 35%;\n  margin-right: 2%;\n  font-weight: normal;\n}\n\n.w-7 {\n  width: 7%;\n  font-weight: normal;\n}\n\n.w-4 {\n  width: 4%;\n  font-weight: normal;\n}\n\n.custom-item-th {\n  text-align: left !important;\n  width: 37%;\n  margin-left: 2%;\n  font-weight: normal;\n}\n\n.word-break {\n  word-wrap: break-word;\n}\n\n.text-left {\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3ByaW50LXByZXZpZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsMkRBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7QUFFSjs7QUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBR0o7O0FBREE7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBSUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUVBLGdCQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFJQTtFQUNJLGdCQUFBO0VBQ0Esd0JBQUE7QUFESjs7QUFHQTtFQUNJLHFCQUFBO0FBQUo7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUNBO0VBQ0ksc0JBQUE7QUFFSjs7QUFBQTtFQUNJLG1CQUFBO0FBR0o7O0FBREE7RUFDSSxVQUFBO0FBSUo7O0FBRkE7RUFDSSxVQUFBO0FBS0o7O0FBSEE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtBQU9KOztBQUxBO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBUUo7O0FBTkE7RUFDSSxlQUFBO0VBQ0EsZ0RBQUE7QUFTSjs7QUFQQTtFQUNJLG1CQUFBO0FBVUo7O0FBUkE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFXSjs7QUFUQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQVlKOztBQVZBO0VBQ0ksY0FBQTtBQWFKOztBQVZJO0VBQ0ksc0JBQUE7RUFDQSx1QkFBQTtBQWFSOztBQVZBO0VBQ0ksZUFBQTtBQWFKOztBQVhBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7QUFjSjs7QUFWQTtFQUNJLFdBQUE7QUFhSjs7QUFYRTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFjTjs7QUFaRTtFQUNJLDhCQUFBO0FBZU47O0FBYkU7RUFDRSxxQkFBQTtBQWdCSjs7QUFkRTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtBQWlCTjs7QUFmRTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtBQWtCSjs7QUFoQkE7RUFDSSxnQkFBQTtBQW1CSjs7QUFqQkE7RUFDSSxnQkFBQTtBQW9CSjs7QUFsQkE7RUFDSSxlQUFBO0FBcUJKOztBQW5CQTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBc0JKOztBQXBCQTtFQUNJLFNBQUE7RUFDQSxtQkFBQTtBQXVCSjs7QUFyQkE7RUFDSSxTQUFBO0VBQ0EsbUJBQUE7QUF3Qko7O0FBdEJBO0VBQ0ksMkJBQUE7RUFDQyxVQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBeUJMOztBQXZCQTtFQUNLLHFCQUFBO0FBMEJMOztBQXhCQTtFQUNJLGdCQUFBO0FBMkJKIiwiZmlsZSI6InByaW50LXByZXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiNpbWFnZVRvUHJpbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmb250LXNpemU6IDE2cHggO1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZiAhaW1wb3J0YW50OyAgICBcbiAgICBcbn1cbi5wLTUge1xuICAgIHBhZGRpbmc6IDVweDtcbn1cbmltZyB7XG4gICAgd2lkdGg6IDEwMHB4O1xuICAgIGhlaWdodDogMTAwcHg7XG59XG4udGl0bGV7XG4gICAgZm9udC1zaXplOiAxOHB4ICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY29udGVudC1jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBcbiAgICBtYXJnaW46IDBweDtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgXG59XG5cblxuLmNvbnRlbnQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIFxufVxuLmNvbnRlbnQtcmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBtYXJnaW46IDBweDtcbiAgIC8vIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBcbn1cblxuLnRpdGxlLWNvbnRlbnQtY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBcbn1cbi50aXRsZS1jb250ZW50LWxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBcbn1cblxuLmxpbmUtc2VwYXJhdG9yIHtcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIGJvcmRlciA6IDFweCBkYXNoZWQgYmxhY2s7XG59XG4uYmlsbC1kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG4uZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcbn1cbi5wcmludGVyLWRyb3Bkb3duIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuLnAtYi01IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuLm9uZWJ5My13aWR0aCB7XG4gICAgd2lkdGg6IDc1JTtcbn1cbi5vbmVieTItd2lkdGgge1xuICAgIHdpZHRoOiA1MCU7XG59XG4uZGlzcGxheS1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uaXRlbS1sYWJlbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbn1cbi5pdGVtLWN1cy1sYWJlbCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG59XG4uZm9udC0xNCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtZmFtaWx5OiBWZXJkYW5hLCBHZW5ldmEsIFRhaG9tYSwgc2Fucy1zZXJpZlxufVxuLm5vLXdyYXAtdGV4dHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuLml0ZW0tdmFsdWUge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG59XG4uaXRlbS1hcmFiaWMge1xuICAgIHdpZHRoOiAzMy4zMyU7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG59XG4ub3ZlcmZsb3cge1xuICAgIG92ZXJmbG93OiBhdXRvOyBcbn1cbi5kdW1teS1pbWcge1xuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiA1NXB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogNTBweCAhaW1wb3J0YW50O1xuICAgIH1cbn1cbi5tLXQtMSB7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xufSBcbi5sZXR0ZXItc3BhY2Uge1xuICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgIHdvcmQtc3BhY2luZzogbm9ybWFsO1xuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50OyAqL1xuICAgIHdvcmQtd3JhcDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgXG59XG50YWJsZS5maXhlZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgdGFibGUgdGgge1xuICAgICAgcGFkZGluZzogNXB4IDBweCAxNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIHRhYmxlIHRoZWFkIHRyIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjaztcbiAgfVxuICB0YWJsZSB0ciB0ZCB7XG4gICAgcGFkZGluZzogNXB4IDBweCAxNXB4O1xuICB9XG4gIHRhYmxlIHRkOm50aC1jaGlsZCg0KSB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIHRhYmxlIHRkOm50aC1jaGlsZCgzKSAsIHRkOm50aC1jaGlsZCgyKSwgdGQ6bnRoLWNoaWxkKDEpe1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm0tci0zcCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAzJTtcbn1cbi5tLXItMnAge1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG59XG4ubS1sLTNwIHtcbiAgICBtYXJnaW4tbGVmdDogMyU7XG59XG4uY3VzdG9tLXRoIHtcbiAgICB3aWR0aDozNSUgO1xuICAgIG1hcmdpbi1yaWdodDogMiU7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi53LTcge1xuICAgIHdpZHRoOjclIDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuLnctNCB7XG4gICAgd2lkdGg6NCUgO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG4uY3VzdG9tLWl0ZW0tdGgge1xuICAgIHRleHQtYWxpZ246IGxlZnQgIWltcG9ydGFudDtcbiAgICAgd2lkdGg6IDM3JTsgXG4gICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi53b3JkLWJyZWFrIHtcbiAgICAgd29yZC13cmFwOiBicmVhay13b3JkO1xufVxuLnRleHQtbGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */");

/***/ }),

/***/ "yZBn":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/newinvoice/print-preview/print-preview.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button size=\"small\" shape=\"round\" (click)=\"closeModal()\" color=\"medium\">\n        <ion-icon slot=\"start\" name=\"close\"></ion-icon> Close\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header> -->\n<!-- <ion-button color=\"primary\" (click)=\"pairTo()\" [disabled]=\"!canPrint\">\n  <ion-icon name=\"print\"></ion-icon>\n</ion-button> -->\n<div class=\"overflow\">\n   <!-- <ion-item class=\"full-width m-0 printer-dropdown\">\n    <ion-label>Printer Size</ion-label>\n    <ion-select [(ngModel)]=\"paperSize\" (ionChange)='pairTo(paperSize)' placeholder=\"Select printer size\">\n     <ion-select-option  *ngFor=\"let size of printerSizes\" [value]=\"size.value\"> {{size.name}}</ion-select-option>\n   </ion-select>\n </ion-item> -->\n   <h5 class=\"p-5 text-center\">Print Preview</h5>\n  <div id=\"imageToPrint\">  \n    <div> \n      <div class=\"text-center title\" >\n          <h3 class=\"content-center\"> {{profile?.companyName}}</h3>\n      </div>\n      <div class=\"text-center title\" >\n        <h3 class=\"content-center letter-space\"> {{profile?.companyNameInArabic}}</h3>\n    </div>\n    \n    <div  class=\"text-center  letter-space content-center\">\n      {{profile?.addressLine1}} {{profile?.addressLine1inArabic}}   \n    </div>\n    <div  class=\"text-center letter-space content-center\">\n      {{profile?.addressLine2}} {{profile?.addressLine2InArabic}}   \n  </div>\n  <div class=\"full-width\">\n      <div text-left class=\"item-cus-label letter-space title\">\n        VAT # / ضريبة القيمة المضافة  :\n      </div>\n      <div  text-left class=\"item-cus-label title\">\n        {{profile?.vatNumber}}  \n      </div>\n      \n  </div>\n  <div class=\"line-separator\"></div>\n  \n  <div  class=\"text-center title\">\n   <h5 class=\"title\">VAT INVOICE / فاتوره ضريبية </h5>\n  </div>\n  <div class=\"full-width\">\n    <div class=\"item-cus-label\">\n    Invoice # / رقم الفاتورة :\n    </div>\n    <div text-left class=\"item-cus-label\">\n      {{invoice?.invoiceNumber}}\n    </div>\n  </div>\n  <div class=\"full-width\">\n    <div class=\"item-cus-label\">\n    Invoice Date / تاريخ   :</div>\n    <div text-left class=\"item-cus-label\">{{invoice?.invoiceDate | date : 'dd-MM-yyyy hh:mm'}} </div>\n  </div>\n  <div class=\"line-separator\"></div>\n  \n  <div class=\"display-flex  full-width\">\n    <div class=\"item-lebel no-wrap-text m-l-3p\">\n      <b>Bill To : </b>\n    </div>\n  </div>\n  <div class=\"line-separator\"></div>\n  <div class=\"full-width\">\n    <div  class=\"full-width word-break m-l-3p\">\n      {{invoice?.customer.name}} \n    </div>\n    <div  class=\"full-width letter-space word-break m-l-3p\">\n      {{invoice?.customer.nameInArabic}} \n    </div>\n    \n  </div>\n  <div class=\"full-width\">\n    <div  class=\"full-width word-break m-l-3p\" >\n      {{invoice?.customer.street}},{{invoice?.customer.city}} \n    </div>\n    <div  class=\"full-width letter-space word-break m-l-3p\"  >\n      {{invoice?.customer.streetInArabic}},{{invoice?.customer.cityInArabic }} \n    </div>\n    \n  </div>\n  <div class=\"full-width\">\n    <div  class=\"item-cus-label letter-space\" >\n       VAT # / ضريبة القيمة المضافة : \n    </div>\n    <div  text-right class=\"item-value\">\n      {{invoice?.customer.vatNumber}}\n    </div>\n    \n  </div>\n         <div class=\"line-separator\"></div>\n        <table  class=\"fixed full-width\">\n          <thead>\n            <tr>\n  \n              <th class=\"custom-item-th\">\n                <div class=\"m-l-3p\">Item</div>\n                <div class=\"letter-space m-l-3p\">العنصر</div>\n              </th>\n              <th class=\"w-4\">\n                <div>Qty</div>\n                <div class=\"letter-space\">الكمية</div>\n              </th>\n              <th class=\"w-7\">\n                <div>Price</div>\n                <div class=\"letter-space\">السعر</div>\n              </th>\n              <th class=\"custom-th\">\n                <div class=\"m-r-2p\">Amount</div>\n                <div class=\"letter-space\">المبلغ</div>\n              </th>\n               \n              \n            </tr>\n          </thead>\n          <tr *ngFor=\"let order of orderItems\">\n            <td class=\"m-l-3p text-left\">\n              <div  class=\"letter-space m-l-3p\">\n                {{order.name}} {{order.nameInArabic}}\n              </div>\n            </td>\n            <td>{{order.quantity}}</td>\n            <td>{{order.unitPrice }}</td>\n            <td >\n              <div class=\"m-r-3p\">\n                {{(order.unitPrice * order.quantity) | number : '1.2-2'}}\n              </div>\n            </td>\n          </tr>\n        </table>\n        <div class=\"line-separator\"></div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right\">\n            Qty : {{totalQuantity}}\n          </div>\n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"content-right item-label full-width\">\n            Total Invoice Value(Excl.VAT) : {{(invoice?.total-invoice?.tax) | number : '1.2-2'}}\n          </div>\n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right full-width\">\n            VAT Payable in SAR ({{profile?.vat}}%): {{invoice?.tax | number : '1.2-2'}}\n          </div>\n          \n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right full-width\">\n            Gross Amount in SAR : {{invoice?.total | number : '1.2-2'}}\n          </div>\n        </div>\n        <div class=\"line-separator\"></div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right full-width\">\n          Previous Balance : {{(this.invoice.balanceAmount+this.invoice.amountPaid) | number : '1.2-2' }}\n          </div>\n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label content-right full-width\">\n          Paid Amount : {{this.invoice.amountPaid | number : '1.2-2' }}\n          </div>\n        </div>\n        <div class=\"display-flex full-width\">\n          <div  class=\"item-label title content-right full-width\">\n          Balance Amount : {{this.invoice.balanceAmount | number : '1.2-2' }}\n          </div>\n        </div>\n        <div class=\"line-separator\"></div>\n        <div>\n        <!-- <div  class=\"text-center full-width\">\n          <ngx-qrcode  \n            [elementType]=\"elementType\"\n            [errorCorrectionLevel]=\"correctionLevel\"\n            [value]=\"value\"></ngx-qrcode>\n        </div> -->\n      </div>\n      <div class=\"line-separator\"></div>\n      <div text-center class=\"text-center p-b-5\">Thank you for shopping.....</div>\n    </div>\n  </div>\n</div>\n");

/***/ })

}]);
//# sourceMappingURL=default~newinvoice-newinvoice-module~viewinvoice-viewinvoice-module-es2015.js.map