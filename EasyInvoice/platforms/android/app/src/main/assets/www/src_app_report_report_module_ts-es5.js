(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkrem"] = self["webpackChunkrem"] || []).push([["src_app_report_report_module_ts"], {
    /***/
    28205:
    /*!*************************************************!*\
      !*** ./src/app/report/report-routing.module.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportPageRoutingModule": function ReportPageRoutingModule() {
          return (
            /* binding */
            _ReportPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _report_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./report.page */
      7804);

      var routes = [{
        path: '',
        component: _report_page__WEBPACK_IMPORTED_MODULE_0__.ReportPage
      }];

      var _ReportPageRoutingModule = function ReportPageRoutingModule() {
        _classCallCheck(this, ReportPageRoutingModule);
      };

      _ReportPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _ReportPageRoutingModule);
      /***/
    },

    /***/
    54107:
    /*!*****************************************!*\
      !*** ./src/app/report/report.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportPageModule": function ReportPageModule() {
          return (
            /* binding */
            _ReportPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _report_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./report-routing.module */
      28205);
      /* harmony import */


      var _report_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./report.page */
      7804);

      var _ReportPageModule = function ReportPageModule() {
        _classCallCheck(this, ReportPageModule);
      };

      _ReportPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _report_routing_module__WEBPACK_IMPORTED_MODULE_0__.ReportPageRoutingModule],
        declarations: [_report_page__WEBPACK_IMPORTED_MODULE_1__.ReportPage]
      })], _ReportPageModule);
      /***/
    },

    /***/
    7804:
    /*!***************************************!*\
      !*** ./src/app/report/report.page.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ReportPage": function ReportPage() {
          return (
            /* binding */
            _ReportPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./report.page.html */
      5984);
      /* harmony import */


      var _report_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./report.page.scss */
      53445);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../data.service */
      81502);
      /* harmony import */


      var _services_db_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../services/db.service */
      73773);
      /* harmony import */


      var _services_toastservice_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../services/toastservice.service */
      48236);

      var _ReportPage = /*#__PURE__*/function () {
        function ReportPage(dbService, toastService, navCtrl, dataService) {
          _classCallCheck(this, ReportPage);

          this.dbService = dbService;
          this.toastService = toastService;
          this.navCtrl = navCtrl;
          this.dataService = dataService;
        }

        _createClass(ReportPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.customerList = [];
          }
        }, {
          key: "addNewInvoice",
          value: function addNewInvoice() {
            this.navCtrl.navigateRoot('newinvoice');
          }
        }, {
          key: "getAllInvoices",
          value: function getAllInvoices() {
            var _this = this;

            this.dbService.getAllInvoices().then(function (data) {
              _this.invoiceList = data;

              _this.filterInvoices();
            })["catch"](function (reason) {
              _this.toastService.presentToast("Failed to fetch invoices");

              console.log(reason);
            });
          }
        }, {
          key: "getAllCustomers",
          value: function getAllCustomers() {
            var _this2 = this;

            this.dbService.getAllCustomers().then(function (data) {
              return _this2.customerList = data;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.startDate = null;
            this.endDate = null;
            this.getAllInvoices();
            this.getAllCustomers();
          }
        }, {
          key: "filterInvoices",
          value: function filterInvoices() {
            var _this3 = this;

            var start = new Date(this.startDate);
            var end = new Date(this.endDate);

            if (this.startDate != null && this.startDate != undefined) {
              start = new Date(start.getFullYear(), start.getMonth(), start.getDate());
            }

            if (this.endDate != null && this.endDate != undefined) {
              end = new Date(end.getFullYear(), end.getMonth(), end.getDate());
            }

            if (this.selectedCustomer != null && this.selectedCustomer != undefined && (this.startDate == null || this.startDate == undefined) && (this.endDate == null || this.endDate == undefined)) {
              this.filterInvoiceList = this.invoiceList.filter(function (inv) {
                return inv.customer.id == _this3.selectedCustomer.id;
              });
            } else if (this.selectedCustomer != null && this.selectedCustomer != undefined && this.startDate != null && this.startDate != undefined && (this.endDate == null || this.endDate == undefined)) {
              this.filterInvoiceList = this.invoiceList.filter(function (inv) {
                return inv.customer.id == _this3.selectedCustomer.id && new Date(inv.invoiceDate) >= start;
              });
            } else if (this.selectedCustomer != null && this.selectedCustomer != undefined && this.startDate != null && this.startDate != undefined && this.endDate != null && this.endDate != undefined) {
              this.filterInvoiceList = this.invoiceList.filter(function (inv) {
                return inv.customer.id == _this3.selectedCustomer.id && new Date(inv.invoiceDate) >= start && new Date(inv.invoiceDate) <= end;
              });
            } else if ((this.selectedCustomer == null || this.selectedCustomer == undefined) && this.startDate != null && this.startDate != undefined && this.endDate != null && this.endDate != undefined) {
              this.filterInvoiceList = this.invoiceList.filter(function (inv) {
                return new Date(inv.invoiceDate) >= start && new Date(inv.invoiceDate) <= end;
              });
            } else if ((this.selectedCustomer == null || this.selectedCustomer == undefined) && this.startDate != null && this.startDate != undefined && (this.endDate == null || this.endDate == undefined)) {
              this.filterInvoiceList = this.invoiceList.filter(function (inv) {
                return new Date(inv.invoiceDate) >= start;
              });
            } else if ((this.selectedCustomer == null || this.selectedCustomer == undefined) && (this.startDate == null || this.startDate == undefined) && this.endDate != null && this.endDate != undefined) {
              this.filterInvoiceList = this.invoiceList.filter(function (inv) {
                return new Date(inv.invoiceDate) <= end;
              });
            } else {
              this.filterInvoiceList = this.invoiceList;
            }
          }
        }, {
          key: "download",
          value: function download() {
            var invoiceDataList = new Array();

            var _iterator = _createForOfIteratorHelper(this.invoiceList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var inv = _step.value;

                var _iterator2 = _createForOfIteratorHelper(inv.invoiceItems),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var itm = _step2.value;
                    var invoiceData = {
                      InvoiceNumber: inv.invoiceNumber,
                      InvoiceDate: inv.invoiceDate,
                      Customer: inv.customer.name,
                      Item: itm.name,
                      UnitPrice: itm.unitPrice,
                      Quantity: itm.quantity,
                      Tax: inv.tax,
                      Total: inv.total
                    };
                    invoiceDataList.push(invoiceData);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              } // this.dataService.downloadCcSV(this.invoiceList,'invoices.csv');

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.dataService.exportToExcel(invoiceDataList, 'invoices.xlsx');
          }
        }, {
          key: "viewInvoice",
          value: function viewInvoice(invoice) {
            var navigationExtras = {
              queryParams: {
                invoice: invoice
              }
            };
            console.log("selected invoice" + invoice.invoiceNumber);
            this.navCtrl.navigateRoot('viewinvoice', navigationExtras);
          }
        }]);

        return ReportPage;
      }();

      _ReportPage.ctorParameters = function () {
        return [{
          type: _services_db_service__WEBPACK_IMPORTED_MODULE_3__.DbService
        }, {
          type: _services_toastservice_service__WEBPACK_IMPORTED_MODULE_4__.ToastserviceService
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
        }, {
          type: _data_service__WEBPACK_IMPORTED_MODULE_2__.DataService
        }];
      };

      _ReportPage = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-report',
        template: _raw_loader_report_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_report_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _ReportPage);
      /***/
    },

    /***/
    53445:
    /*!*****************************************!*\
      !*** ./src/app/report/report.page.scss ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZXBvcnQucGFnZS5zY3NzIn0= */";
      /***/
    },

    /***/
    5984:
    /*!*******************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/report/report.page.html ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Report</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-row>\n    <ion-col size=\"4\">\n      <ion-item>\n      <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%;\"  [(ngModel)]=\"selectedCustomer\" placeholder=\"Customer\">\n        <ion-select-option *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n    </ion-col>\n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"startDate\" placeholder=\"Start Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n\n    <ion-col size=\"4\">\n      <ion-item>\n        <ion-datetime displayFormat=\"MMM DD YYYY\" [(ngModel)]=\"endDate\" placeholder=\"End Date\"></ion-datetime>\n      </ion-item>\n    </ion-col>\n  </ion-row>\n  <ion-row style=\"float:right\">\n    <ion-button style=\"padding-right: 4px;\" (click)=\"filterInvoices()\">Search</ion-button>\n  </ion-row>\n  <!--ion-item-divider></ion-item-divider>-->\n  <ion-list>\n    \n    <ion-item *ngFor= \"let inv of filterInvoiceList\" (click)=\"viewInvoice(inv)\">\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\">Invoice Number</ion-col>\n          <ion-col size=\"4\">Customer</ion-col>\n          <ion-col size=\"3\">Total</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"4\">{{inv.invoiceNumber}}</ion-col>\n          <ion-col size=\"4\">{{inv.customer.name}}</ion-col>\n          <ion-col size=\"3\">{{inv.total}}</ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-item>\n  </ion-list>    \n  \n</ion-content>\n<ion-footer>\n  \n    \n      <ion-row style=\"float:right\">\n        <ion-col >\n          <ion-button ion-button  color=\"primary\" (click)=\"download()\">\n            <ion-icon name=\"mail\"></ion-icon>\n          </ion-button>\n        </ion-col>\n      </ion-row>\n        \n    \n  \n  \n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_report_report_module_ts-es5.js.map