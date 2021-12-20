(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

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
        declarations: [_newinvoice_page__WEBPACK_IMPORTED_MODULE_6__["NewinvoicePage"], _print_preview_print_preview_component__WEBPACK_IMPORTED_MODULE_9__["PrintPreviewComponent"]],
        entryComponents: [_print_preview_print_preview_component__WEBPACK_IMPORTED_MODULE_9__["PrintPreviewComponent"]]
      })], NewinvoicePageModule);
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


      __webpack_exports__["default"] = "@charset \"UTF-8\";.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }.ngx-datatable [hidden] {\n    display: none !important; }.ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }/*\n  This stylesheet uses scss valiables for most of the colors / background-colors of the table\n  to enable the customization of the displayed table without cloning the stylesheet into the\n  own application.\n\n  To modify table colors, add the following lines to the scss file of your application\n  (this example modifies the color of the selected row - selectionType = single, multi or multiClick):\n\n  $ngx-datatable-selected-active-background: yellow;\n  $ngx-datatable-selected-active-background-hover: rgba(yellow, 0.2);\n\n  @import '~@swimlane/ngx-datatable/index.css';\n  @import '~@swimlane/ngx-datatable/themes/material.scss';\n  @import '~@swimlane/ngx-datatable/assets/icons.css';\n\nThat's all.\n*/@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter::before {\n  content: '\\62';\n}.datatable-icon-collapse::before {\n  content: '\\61';\n}.datatable-icon-expand::before {\n  content: '\\63';\n}.datatable-icon-close::before {\n  content: '\\64';\n}.datatable-icon-up::before {\n  content: '\\65';\n}.datatable-icon-down::before {\n  content: '\\66';\n}.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort::before {\n  content: '\\67';\n}.datatable-icon-done::before {\n  content: '\\68';\n}.datatable-icon-done-all::before {\n  content: '\\69';\n}.datatable-icon-search::before {\n  content: '\\6a';\n}.datatable-icon-pin::before {\n  content: '\\6b';\n}.datatable-icon-add::before {\n  content: '\\6d';\n}.datatable-icon-left::before {\n  content: '\\6f';\n}.datatable-icon-right::before {\n  content: '\\70';\n}.datatable-icon-skip::before {\n  content: '\\71';\n}.datatable-icon-prev::before {\n  content: '\\72';\n}.ngx-datatable.material {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  /**\n  * Shared Styles\n  */\n  /**\n  * Global Row Styles\n  */\n  /**\n  * Header Styles\n  */\n  /**\n  * Body Styles\n  */\n  /**\n  * Footer Styles\n  */\n}.ngx-datatable.material.striped .datatable-row-odd {\n  background: #eee;\n}.ngx-datatable.material.single-selection .datatable-body-row.active, .ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active, .ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active, .ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}.ngx-datatable.material.single-selection .datatable-body-row.active:hover, .ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}.ngx-datatable.material.single-selection .datatable-body-row.active:focus, .ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group {\n  background-color: #eee;\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: linear;\n}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group {\n  background-color: #ddd;\n}.ngx-datatable.material.cell-selection .datatable-body-cell:hover, .ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group {\n  background-color: #eee;\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: linear;\n}.ngx-datatable.material.cell-selection .datatable-body-cell:focus, .ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group {\n  background-color: #ddd;\n}.ngx-datatable.material.cell-selection .datatable-body-cell.active, .ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover, .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus, .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}.ngx-datatable.material .empty-row {\n  height: 50px;\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}.ngx-datatable.material .loading-row {\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}.ngx-datatable.material .datatable-header .datatable-row-left,\n.ngx-datatable.material .datatable-body .datatable-row-left {\n  background-color: #fff;\n  background-position: 100% 0;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==);\n}.ngx-datatable.material .datatable-header .datatable-row-right,\n.ngx-datatable.material .datatable-body .datatable-row-right {\n  background-position: 0 0;\n  background-color: #fff;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==);\n}.ngx-datatable.material .datatable-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}.ngx-datatable.material .datatable-header .datatable-header-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  font-weight: 400;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.54);\n  vertical-align: bottom;\n  font-size: 12px;\n  font-weight: 500;\n}.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper {\n  position: relative;\n}.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after {\n  transition: transform 400ms ease, opacity 400ms ease;\n  opacity: 0.5;\n  transform: scale(1);\n}.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -30px 0 0 -30px;\n  height: 60px;\n  width: 60px;\n  background: #eee;\n  border-radius: 100%;\n  opacity: 1;\n  filter: none;\n  transform: scale(0);\n  z-index: 9999;\n  pointer-events: none;\n}.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle {\n  border-right: none;\n}.ngx-datatable.material .datatable-header .resize-handle {\n  border-right: solid 1px #eee;\n}.ngx-datatable.material .datatable-body {\n  position: relative;\n}.ngx-datatable.material .datatable-body .datatable-row-detail {\n  background: #f5f5f5;\n  padding: 10px;\n}.ngx-datatable.material .datatable-body .datatable-group-header {\n  background: #f5f5f5;\n  border-bottom: solid 1px #d9d8d9;\n  border-top: solid 1px #d9d8d9;\n}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}.ngx-datatable.material .datatable-body .progress-linear {\n  display: block;\n  position: -webkit-sticky;\n  position: sticky;\n  width: 100%;\n  height: 5px;\n  padding: 0;\n  margin: 0;\n  top: 0;\n}.ngx-datatable.material .datatable-body .progress-linear .container {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 5px;\n  transform: translate(0, 0) scale(1, 1);\n  background-color: #aad1f9;\n}.ngx-datatable.material .datatable-body .progress-linear .container .bar {\n  transition: all 0.2s linear;\n  -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: transform 0.2s linear;\n  background-color: #106cc8;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 5px;\n}.ngx-datatable.material .datatable-footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n}.ngx-datatable.material .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}.ngx-datatable.material .datatable-footer .datatable-pager {\n  margin: 0 10px;\n}.ngx-datatable.material .datatable-footer .datatable-pager li {\n  vertical-align: middle;\n}.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a {\n  color: rgba(0, 0, 0, 0.26) !important;\n  background-color: transparent !important;\n}.ngx-datatable.material .datatable-footer .datatable-pager li.active a {\n  background-color: rgba(158, 158, 158, 0.2);\n  font-weight: bold;\n}.ngx-datatable.material .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0 6px;\n  border-radius: 3px;\n  margin: 6px 3px;\n  text-align: center;\n  vertical-align: top;\n  color: rgba(0, 0, 0, 0.54);\n  text-decoration: none;\n  vertical-align: bottom;\n}.ngx-datatable.material .datatable-footer .datatable-pager a:hover {\n  color: rgba(0, 0, 0, 0.75);\n  background-color: rgba(158, 158, 158, 0.2);\n}.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 20px;\n  line-height: 20px;\n  padding: 0 3px;\n}.ngx-datatable.material .datatable-summary-row .datatable-body-row {\n  background-color: #ddd;\n}.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover {\n  background-color: #ddd;\n}.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}/**\n * Checkboxes\n**/.datatable-checkbox {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0;\n}.datatable-checkbox input[type=checkbox] {\n  position: relative;\n  margin: 0 1rem 0 0;\n  cursor: pointer;\n  outline: none;\n}.datatable-checkbox input[type=checkbox]:before {\n  transition: all 0.3s ease-in-out;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #f2f2f2;\n}.datatable-checkbox input[type=checkbox]:checked:before {\n  transform: rotate(-45deg);\n  height: 0.5rem;\n  border-color: #009688;\n  border-top-style: none;\n  border-right-style: none;\n}.datatable-checkbox input[type=checkbox]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  cursor: pointer;\n}/**\n * Progress bar animations\n */@-webkit-keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1);\n  }\n}@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1);\n  }\n}#content {\n  position: relative;\n  margin-bottom: 10px;\n}.item-details-table {\n  width: 94%;\n  margin-left: 2%;\n  margin-right: 5%;\n  margin-top: 2%;\n  color: black;\n  background-color: aliceblue;\n  text-align: center;\n}.item-details-table td {\n  padding: 5px;\n}.vat-check .check {\n  margin: 0;\n  margin-right: 10px;\n}.m-t-5 {\n  margin-top: 5px;\n}table.fixed {\n  width: 100%;\n}table th {\n  padding: 10px 0px;\n  text-align: center;\n}table th:last-child {\n  padding-right: 5px;\n}table thead tr {\n  border-bottom: 1px solid #31c7df;\n  background: #34d2eb;\n  color: #fff;\n}table tr td {\n  padding: 10px 0px;\n}table td:nth-child(4) {\n  width: 40%;\n  text-align: center;\n}table td:nth-child(3), td:nth-child(2), td:nth-child(1) {\n  width: 20%;\n  text-align: center;\n}.line-separator {\n  border: 1px solid #f4f4f4;\n}.display-flex {\n  display: flex;\n  text-align: left;\n}.summary-label {\n  width: 60%;\n  padding: 3px 10px;\n  text-align: end;\n  font-weight: 600;\n  color: #837f7f;\n}.full-width {\n  width: 100%;\n}.item-value {\n  width: 40%;\n  padding: 3px 10px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2NzcyIsIi4uLy4uLy4uL25ld2ludm9pY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixDQ0FoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0I7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRSxFQUFFLENBQ0o7SUFDRSx3QkFBd0IsRUFBRSxDQUM1Qjs7O0lBS0Usc0JBQXNCLEVBQUUsQ0FDMUI7SUFDRSxnQkFBZ0IsRUFBRSxDQUNwQjtJQUNFLGtCQUFrQixFQUFFLENBQ3RCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlDQUFpQyxFQUFFLENBQ3JDO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QixFQUFFLENBQzdCO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDM0I7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFLENBQy9COzs7SUFPRSxhQUFhO0lBQ2IsbUJBQW1CO0lBSW5CLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsQ0FDbEI7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFB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RUFBQSxDQUdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esd0NBQUE7RUN4SUY7RUQySUE7SUFDRSxVQUFBO0lBQ0EsdUNBQUE7RUN6SUY7QUFDRixDRGdJQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHdDQUFBO0VDeElGO0VEMklBO0lBQ0UsVUFBQTtJQUNBLHVDQUFBO0VDeklGO0FBQ0YsQ0FqVkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBbVZKLENBalZBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQW9WSixDQW5WSTtFQUNJLFlBQUE7QUFxVlIsQ0FqVkk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7QUFvVlIsQ0FqVkE7RUFDSSxlQUFBO0FBb1ZKLENBbFZBO0VBQ0ksV0FBQTtBQXFWSixDQWxWRTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFxVk4sQ0FuVkU7RUFDRSxrQkFBQTtBQXNWSixDQXBWRTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBdVZOLENBclZFO0VBQ0UsaUJBQUE7QUF3VkosQ0F0VkU7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUF5Vk4sQ0F2VkU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUEwVkosQ0F4VkE7RUFDSSx5QkFBQTtBQTJWSixDQXpWQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQTRWSixDQTFWQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUE2VkosQ0EzVkE7RUFDSSxXQUFBO0FBOFZKLENBNVZBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQStWSiIsImZpbGUiOiJuZXdpbnZvaWNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZSc7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdCcpO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUud29mZicpIGZvcm1hdCgnd29mZicpLFxuICAgIHVybCgnZm9udHMvZGF0YS10YWJsZS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS5zdmcjZGF0YS10YWJsZScpIGZvcm1hdCgnc3ZnJyk7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuW2RhdGEtaWNvbl06OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgY29udGVudDogYXR0cihkYXRhLWljb24pO1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3NePSdkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlLFxuW2NsYXNzKj0nIGRhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1maWx0ZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYyJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNvbGxhcHNlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1leHBhbmQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWNsb3NlOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi11cDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjUnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG93bjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydC11bnNldDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nyc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb25lLWFsbDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjknO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2VhcmNoOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2YSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1waW46OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZiJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWFkZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tbGVmdDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmYnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcmlnaHQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcwJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNraXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXByZXY6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDcyJztcbn1cbiIsIi5uZ3gtZGF0YXRhYmxlIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIC8qKlxuICAgKiBWZXJ0aWNhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBIb3Jpem9udGFsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIEhlYWRlciBIZWlnaHQgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCByb3cgaGVpZ2h0IGFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogU2hhcmVkIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEhlYWRlciBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBCb2R5IFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEZvb3RlciBTdHlsZXNcbiAgICovIH1cbiAgLm5neC1kYXRhdGFibGUgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxuICAubmd4LWRhdGF0YWJsZSAqLFxuICAubmd4LWRhdGF0YWJsZSAqOmJlZm9yZSxcbiAgLm5neC1kYXRhdGFibGUgKjphZnRlciB7XG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbCAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXk6IGF1dG87IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsLnZpcnR1YWxpemVkIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLWhvcnogLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLXJvdyAuZGF0YXRhYmxlLXNjcm9sbCAuZGF0YXRhYmxlLWJvZHktcm93IC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LXJvdyxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAtd2Via2l0LWZsZXgtZmxvdzogcm93O1xuICAgIC1tb3otZmxleC1mbG93OiByb3c7XG4gICAgLW1zLWZsZXgtZmxvdzogcm93O1xuICAgIC1vLWZsZXgtZmxvdzogcm93O1xuICAgIGZsZXgtZmxvdzogcm93OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgbGluZS1oZWlnaHQ6IDEuNjI1OyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGw6Zm9jdXMsXG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICB6LWluZGV4OiA5OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWxlZnQsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIC13ZWJraXQtYWxpZ24taXRlbXM6IHN0cmV0Y2g7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5zb3J0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwubG9uZ3ByZXNzIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogbW92ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuc29ydC1idG4ge1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDVweDtcbiAgICAgICAgcGFkZGluZzogMCA0cHg7XG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIGN1cnNvcjogZXctcmVzaXplOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnJlc2l6ZWFibGU6aG92ZXIgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmhvdmVyIC5yZXNpemUtaGFuZGxlLS1ub3QtcmVzaXphYmxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21MZWZ0IHtcbiAgICAgICAgICByaWdodDogMDsgfVxuICAgICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIuZHJhZ0Zyb21SaWdodCB7XG4gICAgICAgICAgbGVmdDogMDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXRlbXBsYXRlLXdyYXAge1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LWRldGFpbCB7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC13ZWJraXQtYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLXdlYmtpdC1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgLW1vei1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgIC1tb3otYm94LWRpcmVjdGlvbjogbm9ybWFsO1xuICAgICAgLW1zLWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtYm9keS1yb3cgPiBkaXYge1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1mb290ZXItaW5uZXIge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgNDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDYwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSAyMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA4MCU7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIsXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLmRpc2FibGVkIGEge1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XG4iLCIvKlxuICBUaGlzIHN0eWxlc2hlZXQgdXNlcyBzY3NzIHZhbGlhYmxlcyBmb3IgbW9zdCBvZiB0aGUgY29sb3JzIC8gYmFja2dyb3VuZC1jb2xvcnMgb2YgdGhlIHRhYmxlXG4gIHRvIGVuYWJsZSB0aGUgY3VzdG9taXphdGlvbiBvZiB0aGUgZGlzcGxheWVkIHRhYmxlIHdpdGhvdXQgY2xvbmluZyB0aGUgc3R5bGVzaGVldCBpbnRvIHRoZVxuICBvd24gYXBwbGljYXRpb24uXG5cbiAgVG8gbW9kaWZ5IHRhYmxlIGNvbG9ycywgYWRkIHRoZSBmb2xsb3dpbmcgbGluZXMgdG8gdGhlIHNjc3MgZmlsZSBvZiB5b3VyIGFwcGxpY2F0aW9uXG4gICh0aGlzIGV4YW1wbGUgbW9kaWZpZXMgdGhlIGNvbG9yIG9mIHRoZSBzZWxlY3RlZCByb3cgLSBzZWxlY3Rpb25UeXBlID0gc2luZ2xlLCBtdWx0aSBvciBtdWx0aUNsaWNrKTpcblxuICAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZDogeWVsbG93O1xuICAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1ob3ZlcjogcmdiYSh5ZWxsb3csIDAuMik7XG5cbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyc7XG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2Nzcyc7XG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzJztcblxuVGhhdCdzIGFsbC5cbiovXG5cbi8vIGNvbW1vbiBkYXRhdGFibGUgY29sb3JzXG4kbmd4LWRhdGF0YWJsZS1iYWNrZ3JvdW5kOiAjZmZmICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kOiAjZWVlICFkZWZhdWx0O1xuXG4vLyBkZWZhdWx0IHJvdyBhbmQgY2VsbCBiYWNrZ3JvdW5kIGNvbG9yc1xuJG5neC1kYXRhdGFibGUtZGVmYXVsdC1iYWNrZ3JvdW5kOiAjZmZmICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtZGVmYXVsdC1iYWNrZ3JvdW5kLWhvdmVyOiAjZWVlICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtZGVmYXVsdC1iYWNrZ3JvdW5kLWZvY3VzOiAjZGRkICFkZWZhdWx0O1xuXG4vLyBkZWZhdWx0IGJhY2tncm91bmQgY29sb3JzIGZvciBjZWxsIHNlbGVjdGlvbiBzdHlsZVxuJG5neC1kYXRhdGFibGUtY2VsbHNlbGVjdGlvbi1iYWNrZ3JvdW5kLWhvdmVyOiAjZWVlICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtY2VsbHNlbGVjdGlvbi1iYWNrZ3JvdW5kLWZvY3VzOiAjZGRkICFkZWZhdWx0O1xuXG4vLyBiYWNrZ3JvdW5kIGFuZCB0ZXh0IGNvbG9ycyBmb3Igc2VsZWN0ZWQgY2VsbCAvIHJvd1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ6ICMzMDRmZmUgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3I6ICNmZmYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1ob3ZlcjogIzE5M2FlNCAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1ob3ZlcjogI2ZmZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWZvY3VzOiAjMjA0MWVmICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWZvY3VzOiAjZmZmICFkZWZhdWx0O1xuXG4vLyBjb2xvcnMgZm9yIGhlYWRlciBlbGVtZW50c1xuJGRhdGF0YWJsZS1oZWFkZXItY2VsbC1iYWNrZ3JvdW5kOiAjZmZmICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1oZWFkZXItY2VsbC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtaGVhZGVyLWJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMikgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWhlYWRlci1yZXNpemUtaGFuZGxlLWNvbG9yOiAjZWVlICFkZWZhdWx0O1xuXG4vLyBjb2xvcnMgZm9yIHRhYmxlIGJvZHkgZWxlbWVudHNcbiRkYXRhdGFibGUtcm93LWRldGFpbC1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1ib2R5LWNlbGwtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NykgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1iYWNrZ3JvdW5kOiAjZjVmNWY1ICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYm9yZGVyLXRvcC1jb2xvcjogI2Q5ZDhkOSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJvcmRlci1ib3R0b20tY29sb3I6ICNkOWQ4ZDkgIWRlZmF1bHQ7XG5cbi8vIGNvbG9ycyBmb3IgZm9vdGVyIGVsZW1lbnRzXG4kZGF0YXRhYmxlLWZvb3Rlci1jZWxsLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1mb290ZXItYm9yZGVyLXRvcC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWNvbG9yLWhvdmVyOiByZ2JhKDAsIDAsIDAsIDAuNzUpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMikgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWRpc2FibGVkLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItYWN0aXZlLWJhY2tncm91bmQ6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKSAhZGVmYXVsdDtcblxuLy8gY29sb3JzIGZvciBzdW1tYXJ5IHJvdyBlbGVtZW50c1xuJGRhdGF0YWJsZS1zdW1tYXJ5LXJvdy1iYWNrZ3JvdW5kOiAjZGRkICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1zdW1tYXJ5LXJvdy1iYWNrZ3JvdW5kLWhvdmVyOiAjZGRkICFkZWZhdWx0O1xuXG4ubmd4LWRhdGF0YWJsZS5tYXRlcmlhbCB7XG4gIGJhY2tncm91bmQ6ICRuZ3gtZGF0YXRhYmxlLWJhY2tncm91bmQ7XG4gIGJveC1zaGFkb3c6ICRuZ3gtZGF0YXRhYmxlLWJveC1zaGFkb3c7XG5cbiAgJi5zdHJpcGVkIHtcbiAgICAuZGF0YXRhYmxlLXJvdy1vZGQge1xuICAgICAgYmFja2dyb3VuZDogJG5neC1kYXRhdGFibGUtcm93LW9kZC1iYWNrZ3JvdW5kO1xuICAgIH1cbiAgfVxuXG4gICYuc2luZ2xlLXNlbGVjdGlvbixcbiAgJi5tdWx0aS1zZWxlY3Rpb24sXG4gICYubXVsdGktY2xpY2stc2VsZWN0aW9uIHtcbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgICYuYWN0aXZlLFxuICAgICAgJi5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZDtcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmU6aG92ZXIsXG4gICAgICAmLmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWhvdmVyO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZTpmb2N1cyxcbiAgICAgICYuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtZm9jdXM7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItZm9jdXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJjpub3QoLmNlbGwtc2VsZWN0aW9uKSB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyxcbiAgICAgICY6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQtZm9jdXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJi5jZWxsLXNlbGVjdGlvbiB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgJjpob3ZlcixcbiAgICAgICY6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1jZWxsc2VsZWN0aW9uLWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtY2VsbHNlbGVjdGlvbi1iYWNrZ3JvdW5kLWZvY3VzO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZSxcbiAgICAgICYuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmhvdmVyLFxuICAgICAgJi5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1ob3ZlcjtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmU6Zm9jdXMsXG4gICAgICAmLmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWZvY3VzO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWZvY3VzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBTaGFyZWQgU3R5bGVzXG5cdCAqL1xuICAuZW1wdHktcm93IHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgfVxuXG4gIC5sb2FkaW5nLXJvdyB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMS4ycmVtO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgYm9yZGVyLXRvcDogMDtcbiAgfVxuXG4gIC8qKlxuXHQgKiBHbG9iYWwgUm93IFN0eWxlc1xuXHQgKi9cbiAgLmRhdGF0YWJsZS1oZWFkZXIsXG4gIC5kYXRhdGFibGUtYm9keSB7XG4gICAgLmRhdGF0YWJsZS1yb3ctbGVmdCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1iYWNrZ3JvdW5kO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSUhXUFNrTmVTQm1KaFRRVnRiaUROQ2dBU2FnSUl1Slg4T2dBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtcm93LXJpZ2h0IHtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDAgMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWJhY2tncm91bmQ7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFCQ0FZQUFBRDVQQS9OQUFBQUZrbEVRVlFJMTJQUWtOZGkxVlRRNWdiU3drQXNEUUFSTEFJR3RPU0ZVQUFBQUFCSlJVNUVya0pnZ2c9PSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG5cdCAqIEhlYWRlciBTdHlsZXNcblx0ICovXG4gIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGRhdGF0YWJsZS1oZWFkZXItYm9yZGVyLWJvdHRvbS1jb2xvcjtcblxuICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1oZWFkZXItY2VsbC1iYWNrZ3JvdW5kO1xuICAgICAgY29sb3I6ICRkYXRhdGFibGUtaGVhZGVyLWNlbGwtY29sb3I7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAmLmxvbmdwcmVzcyB7XG4gICAgICAgIC5kcmFnZ2FibGU6OmFmdGVyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gNDAwbXMgZWFzZSwgb3BhY2l0eSA0MDBtcyBlYXNlO1xuICAgICAgICAgIG9wYWNpdHk6IDAuNTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kcmFnZ2FibGU6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIG1hcmdpbjogLTMwcHggMCAwIC0zMHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIHotaW5kZXg6IDk5OTk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuXG4gICAgICAmLmRyYWdnaW5nIHtcbiAgICAgICAgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgIGJvcmRlci1yaWdodDogc29saWQgMXB4ICRkYXRhdGFibGUtaGVhZGVyLXJlc2l6ZS1oYW5kbGUtY29sb3I7XG4gICAgfVxuICB9XG5cbiAgLyoqXG5cdCAqIEJvZHkgU3R5bGVzXG5cdCAqL1xuICAuZGF0YXRhYmxlLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgIC5kYXRhdGFibGUtcm93LWRldGFpbCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZGF0YXRhYmxlLXJvdy1kZXRhaWwtYmFja2dyb3VuZDtcbiAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgLmRhdGF0YWJsZS1ncm91cC1oZWFkZXIge1xuICAgICAgYmFja2dyb3VuZDogJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYmFja2dyb3VuZDtcbiAgICAgIGJvcmRlci1ib3R0b206IHNvbGlkIDFweCAkZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1ib3JkZXItYm90dG9tLWNvbG9yO1xuICAgICAgYm9yZGVyLXRvcDogc29saWQgMXB4ICRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJvcmRlci10b3AtY29sb3I7XG4gICAgfVxuXG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLWJvZHktY2VsbC1jb2xvcjtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG5cbiAgICAgICAgLy8gY2VsbCBhY3RpdmUgY2xhc3NcbiAgICAgICAgLy8gJi5hY3RpdmUge1xuICAgICAgICAvLyAgYmFja2dyb3VuZDogIzA4MjllMFxuICAgICAgICAvLyB9XG4gICAgICB9XG4gICAgICAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHBhZGRpbmc6IDAuOXJlbSAxLjJyZW07XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGJvcmRlci10b3A6IDA7XG4gICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLWJvZHktY2VsbC1jb2xvcjtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLWxpbmVhciB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNXB4O1xuICAgICAgcGFkZGluZzogMDtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIHRvcDogMDtcblxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzAsIDIwOSwgMjQ5KTtcblxuICAgICAgICAuYmFyIHtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBsaW5lYXI7XG4gICAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG4gICAgICAgICAgYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuXG4gICAgICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNiwgMTA4LCAyMDApO1xuXG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBGb290ZXIgU3R5bGVzXG5cdCAqL1xuICAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRkYXRhdGFibGUtZm9vdGVyLWJvcmRlci10b3AtY29sb3I7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgY29sb3I6ICRkYXRhdGFibGUtZm9vdGVyLWNlbGwtY29sb3I7XG5cbiAgICAucGFnZS1jb3VudCB7XG4gICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIHBhZGRpbmc6IDAgMS4ycmVtO1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgbWFyZ2luOiAwIDEwcHg7XG5cbiAgICAgIGxpIHtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAmLmRpc2FibGVkIGEge1xuICAgICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWRpc2FibGVkLWNvbG9yICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1wYWdlci1kaXNhYmxlZC1iYWNrZ3JvdW5kICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFjdGl2ZSBhIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIG1pbi13aWR0aDogMjRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIG1hcmdpbjogNnB4IDNweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1wYWdlci1jb2xvcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWNvbG9yLWhvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtcGFnZXItYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZGF0YXRhYmxlLWljb24tbGVmdCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1za2lwLFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXJpZ2h0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXByZXYge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDNweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBTdW1tYXJ5IHJvdyBzdHlsZXNcbiAgLmRhdGF0YWJsZS1zdW1tYXJ5LXJvdyB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQ7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQtaG92ZXI7XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQ2hlY2tib3hlc1xuKiovXG4uZGF0YXRhYmxlLWNoZWNrYm94IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBwYWRkaW5nOiAwO1xuXG4gIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDAgMXJlbSAwIDA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgI2YyZjJmMjtcbiAgICB9XG5cbiAgICAmOmNoZWNrZWQ6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgYm9yZGVyLWNvbG9yOiAjMDA5Njg4O1xuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogbm9uZTtcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogbm9uZTtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBQcm9ncmVzcyBiYXIgYW5pbWF0aW9uc1xuICovXG5Aa2V5ZnJhbWVzIHF1ZXJ5IHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDM1JSkgc2NhbGUoMC4zLCAxKTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHNjYWxlKDAsIDEpO1xuICB9XG59XG4iLCJAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcbkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2Nzcyc7XG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cbiNjb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5pdGVtLWRldGFpbHMtdGFibGUge1xuICAgIHdpZHRoOiA5NCU7XG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xuICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgbWFyZ2luLXRvcDogMiU7IFxuICAgIGNvbG9yOiBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhbGljZWJsdWU7IFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDVweFxuICAgIH1cbn1cbi52YXQtY2hlY2sge1xuICAgIC5jaGVjayB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbn1cbi5tLXQtNSB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xufVxudGFibGUuZml4ZWQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgLy8gbWFyZ2luLWJvdHRvbTogNXB4O1xuICB9XG4gIHRhYmxlIHRoIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggIDBweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuICB0YWJsZSB0aDpsYXN0LWNoaWxkIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XG4gIH1cbiAgdGFibGUgdGhlYWQgdHIge1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMWM3ZGY7XG4gICAgICBiYWNrZ3JvdW5kOiAjMzRkMmViO1xuICAgICAgY29sb3I6ICNmZmY7XG4gIH1cbiAgdGFibGUgdHIgdGQge1xuICAgIHBhZGRpbmc6IDEwcHggMHB4O1xuICB9XG4gIHRhYmxlIHRkOm50aC1jaGlsZCg0KSB7XG4gICAgICB3aWR0aDogNDAlO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIHRhYmxlIHRkOm50aC1jaGlsZCgzKSAsIHRkOm50aC1jaGlsZCgyKSwgdGQ6bnRoLWNoaWxkKDEpe1xuICAgIHdpZHRoOiAyMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxpbmUtc2VwYXJhdG9yIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjRmNGY0O1xufVxuLmRpc3BsYXktZmxleCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuLnN1bW1hcnktbGFiZWwge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgcGFkZGluZzogM3B4IDEwcHg7XG4gICAgdGV4dC1hbGlnbjogZW5kO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICM4MzdmN2Y7XG59XG4uZnVsbC13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG4uaXRlbS12YWx1ZSB7XG4gICAgd2lkdGg6IDQwJTtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG59Il19 */";
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
              amountPaid: 0,
              balanceAmount: 0,
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
                creditLimit: 0,
                balance: 0
              },
              invoiceItems: [],
              total: null,
              tax: null
            };
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this = this;

            this.showTable = false;
            this.applyVat = true;
            this.dbService.getProfile().then(function (data) {
              _this.profile = data;
              console.log(_this.profile.canEnableUnit);
            });
            this.resetInvoiceForm();
          }
        }, {
          key: "filterProducts",
          value: function filterProducts(evt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var searchTerm;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
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
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return");

                    case 5:
                      this.products = this.products.filter(function (currentProduct) {
                        if (currentProduct.name && searchTerm) {
                          return currentProduct.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
                        }
                      });

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
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
            var _this2 = this;

            this.productsBackup = new Array();
            this.products = new Array();
            this.dbService.getAllInventories().then(function (data) {
              _this2.inventoryList = data;
            });
            this.invoice = {
              id: null,
              invoiceNumber: "",
              invoiceDate: new Date(),
              invoiceDateString: "",
              amountPaid: 0,
              balanceAmount: 0,
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
                creditLimit: 0,
                balance: 0
              },
              invoiceItems: [],
              total: null,
              tax: null
            };
            this.dbService.incrementInvoiceNumber().then(function (data) {
              if (data == null || data == undefined) {
                data = 1;
              }

              _this2.invoice.invoiceNumber = _this2.dbService.codeConstant + _this2.dbService.invoiceCodeConstant + data;
            });
            this.invoice.invoiceItems = new Array();
            this.selectedProducts = new Array(); //this.dbService.getInvoiceNumber().then(data=>{
            //this.invoice.invoiceNumber=data;
            //});

            this.dbService.getAllCustomers().then(function (data) {
              return _this2.customerList = data;
            });
          }
        }, {
          key: "populateCustomerProducts",
          value: function populateCustomerProducts() {
            var _this3 = this;

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
                  index = _this3.inventoryList.findIndex(function (i) {
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
                      balanceQuantity: _this3.inventoryList[index].quantity
                    };

                    _this3.products.push(inventory);

                    _this3.productsBackup.push(inventory); //this.invoice.invoiceItems.push(inventory);

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
            var _this4 = this;

            this.invoice.invoiceItems = this.products.filter(function (a) {
              return a.quantity != null && a.quantity != undefined && a.quantity > 0;
            });
            this.dbService.createOrUpdateInvoice(this.invoice).then(function (data) {
              _this4.dbService.getAllInventories().then(function (stocks) {
                var stockList = stocks;

                var _iterator3 = _createForOfIteratorHelper(_this4.invoice.invoiceItems),
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

                _this4.dbService.saveAllInventories(stockList).then(function (res) {
                  var index = _this4.customerList.findIndex(function (i) {
                    return i.id == _this4.invoice.customer.id;
                  });

                  _this4.invoice.customer.balance = _this4.invoice.balanceAmount;

                  _this4.dbService.UpdateCustomer(_this4.invoice.customer);

                  _this4.tostService.presentToast("Bill submitted successfully"); //this.navCtrl.navigateRoot('invoice');

                });
              });
            })["catch"](function (reason) {
              _this4.tostService.presentToast("Failed to submit bill");

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
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this5 = this;

              var modal;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.modalController.create({
                        component: _print_preview_print_preview_component__WEBPACK_IMPORTED_MODULE_14__["PrintPreviewComponent"],
                        componentProps: {
                          profile: this.profile,
                          invoice: this.invoice,
                          products: this.products
                        }
                      });

                    case 2:
                      modal = _context2.sent;
                      modal.onDidDismiss().then(function () {
                        _this5.navCtrl.navigateRoot('invoice');
                      });
                      modal.present();

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "printBill",
          value: function printBill() {
            this.printPreview();
          }
        }, {
          key: "getImage",
          value: function getImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              var node, img;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
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

                          _this6.printService.sendToBluetoothPrinter(_this6.profile.selectedPrinter, result.encode());

                          console.log('print called');
                        };
                      })["catch"](function (error) {
                        console.error("oops, something went wrong!", error);
                      });

                    case 3:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3);
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainmenu\"> \n\n      </ion-menu-button>\n    </ion-buttons> \n   \n    <ion-title>New Invoice</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div>\n    <ion-item class=\"full-width m-0\">\n      <ion-label>Customer Name</ion-label>\n      <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%;\" \n      (ionChange)=\"populateCustomerProducts()\" [(ngModel)]=\"invoice.customer\" placeholder=\"Select Customer\">\n          <ion-select-option *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n<!--<ion-item>\n  <ion-label>Product</ion-label>\n  <ionic-selectable style=\"height: 30px;\"\n    \n    [(ngModel)]=\"product\"\n    [items]=\"products\"\n    itemValueField=\"name\"\n    itemTextField=\"name\"\n    [canSearch]=\"true\"\n    (onChange)=\"productSelected($event)\"\n    [isMultiple]=\"true\"\n    \n    >\n  </ionic-selectable>\n</ion-item>  -->\n    <div id=\"content\" >\n      <!-- <table *ngIf=\"showTable\" border=\"none\"  class=\"item-details-table\">\n        <tr style=\"border: none; color: white; background-color: lightslategray;\">\n          <td style=\"width: 40%;text-align: left;\">\n            Item\n          </td>\n          <td style=\"text-align: left;\">\n            Price\n          </td>\n          <td style=\"text-align: left;\">\n            A.Qty\n          </td>\n          <td style=\"text-align: left;\">\n            Qty\n          </td>\n          \n          <td style=\"text-align: left;\">\n            Amount\n          </td>\n        </tr>\n        <tr *ngFor= \"let item of products\" style=\"border: none;\">\n          <td style=\"text-align: left;\">\n            <ion-input  disabled [(ngModel)]=\"item.name\" ></ion-input>\n          </td>\n          <td style=\"text-align: right;\">\n            <ion-input disabled (ionChange)=\"calculateInvoiceTotal(item)\" type=\"number\" [(ngModel)]=\"item.unitPrice\" ></ion-input>\n          </td>\n          <td style=\"text-align: right;\">\n            <ion-input disabled type=\"number\" [(ngModel)]=\"item.displayBalanceQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input>\n          </td>\n          <td style=\"text-align: right;\">\n            <ion-input (ionChange)=\"calculateInvoiceTotal(item)\" type=\"number\" [(ngModel)]=\"item.quantity\"  (keypress)=\"numericOnly($event)\"></ion-input>\n          </td>\n          <td style=\"text-align: right;\">\n            <ion-input disabled type=\"number\" [(ngModel)]=\"item.unitPrice*item.quantity\" ></ion-input>\n          </td>\n        </tr>\n      </table> -->\n      <table *ngIf=\"showTable\"  class=\"fixed\">\n        <thead>\n          <tr>\n            <th>\n              <div>Item</div>\n            </th>\n            <th>\n              <div>Price</div>\n            </th> \n            <th>\n              <div>A.Qty</div>\n            </th>\n            <th>\n              <div>Qty</div>\n            </th>\n            <th>\n              <div>Amount</div>\n            </th>\n          </tr>\n        </thead>\n        <tr *ngFor= \"let item of products\">\n          <td>{{item.name}}</td>\n          <td><ion-input [disabled]=\"!profile.canEnableUnit\" (ionChange)=\"calculateInvoiceTotal(item)\" type=\"number\" [(ngModel)]=\"item.unitPrice\" ></ion-input></td>\n          <td><ion-input disabled type=\"number\" [(ngModel)]=\"item.displayBalanceQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n          <td><ion-input (ionChange)=\"calculateInvoiceTotal(item)\" type=\"number\" [(ngModel)]=\"item.quantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n          <td><ion-input disabled type=\"number\" [(ngModel)]=\"item.unitPrice*item.quantity\" ></ion-input></td>\n        </tr>\n      </table>\n      <div class=\"line-separator\"></div>\n    </div>\n\n      <ion-item class=\"vat-check\" no-lines lines=\"none\">\n        <ion-label> Apply VAT</ion-label>\n        <ion-checkbox class=\"check\" slot=\"start\" [(ngModel)]=\"applyVat\" (ionChange)=\"calculateInvoiceTotal()\" ></ion-checkbox>\n      </ion-item>\n\n    <div class=\"line-separator\"></div>\n\n    <div class=\"display-flex full-width m-t-5\">\n      <div  class=\"summary-label\">\n        Total :\n      </div>\n      <div text-center class=\"item-value\" *ngIf=\"applyVat==true\">\n        {{(invoice.total-invoice.tax) | number : '1.2-2'}}\n      </div>\n      <div text-center class=\"item-value\" *ngIf=\"applyVat==false\">\n        {{(invoice.total) | number : '1.2-2'}}\n      </div>\n\n    </div>\n    <div class=\"display-flex full-width\">\n      <div  class=\"summary-label\">\n        Tax :\n      </div>\n      <div text-center class=\"item-value\">\n        {{(invoice.tax) | number : '1.2-2'}}\n      </div>\n    </div>\n\n    <div class=\"display-flex full-width\">\n      <div  class=\"summary-label\">\n        Tax :\n      </div>\n      <div text-center class=\"item-value\" *ngIf=\"applyVat==true\">\n        {{(invoice.tax) | number : '1.2-2'}}\n      </div>\n      <div text-center class=\"item-value\" *ngIf=\"applyVat==false\">\n        {{(0 | number : '1.2-2')}}\n      </div>\n    </div>\n\n    <div class=\"display-flex full-width\">\n      <div  class=\"summary-label\">\n        Gross Total(Incl. Tax) :\n      </div>\n      <div text-center class=\"item-value\">\n        {{invoice.total | number : '1.2-2'}}\n      </div>\n    </div>\n\n    <div class=\"display-flex full-width\">\n      <div  class=\"summary-label\">\n        Balance Amount(Incl. current invoice) :\n      </div>\n      <div text-center class=\"item-value\">\n        {{invoice.balanceAmount | number : '1.2-2'}}\n      </div>\n    </div>\n\n    <div class=\"display-flex full-width\">\n      <div  class=\"summary-label\">\n        Amount Paid :\n      </div>\n      <div text-center class=\"item-value\">\n        <ion-input class=\"ion-text-right\" type=\"number\" [(ngModel)]=\"invoice.amountPaid\" (ionChange)=\"calculateInvoiceTotal()\"></ion-input>\n      </div>\n    </div>\n  \n    <!-- <ion-grid>\n      <ion-row>\n        <ion-item style=\"width: 100%;\">\n        <ion-col size=\"6\">\n          <ion-label >Apply VAT</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"applyVat\" (ionChange)=\"calculateInvoiceTotal()\" ></ion-checkbox>\n        </ion-col>\n      </ion-item>\n      </ion-row>\n        \n      <ion-row>\n    <ion-item style=\"width: 100%;\"> \n          <ion-col size=\"6\">\n            <ion-label >Total</ion-label>\n          </ion-col>\n          <ion-col size=\"6\" *ngIf=\"applyVat==true\">\n            <ion-label style=\"float: right;\">{{(invoice.total-invoice.tax) | number : '1.2-2'}}</ion-label>\n          </ion-col>\n          <ion-col size=\"6\" *ngIf=\"applyVat==false\">\n            <ion-label style=\"float: right;\">{{invoice.total |    number : '1.2-2'}}</ion-label>\n          </ion-col>\n        </ion-item>\n      </ion-row>  \n      <ion-row>\n        <ion-item style=\"width: 100%;\">\n        <ion-col size=\"6\">\n          <ion-label >Tax</ion-label>\n        </ion-col>\n        <ion-col size=\"6\" *ngIf=\"applyVat==true\">\n          <ion-label style=\"float: right;\">{{(invoice.tax | number : '1.2-2')}}</ion-label>\n        </ion-col>\n        <ion-col size=\"6\" *ngIf=\"applyVat==false\">\n          <ion-label style=\"float: right;\">{{(0 | number : '1.2-2')}}</ion-label>\n        </ion-col>\n      </ion-item>\n    </ion-row>  \n        \n\n\n\n    <ion-row>\n      <ion-item style=\"width: 100%;\">\n      <ion-col size=\"6\">\n        <ion-label >Gross Total(Incl. Tax)               </ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label style=\"float: right;\">{{invoice.total | number : '1.2-2'}}</ion-label>\n      </ion-col>\n    </ion-item>\n    </ion-row>\n\n        \n        \n        <ion-row>\n        <ion-item style=\"width: 100%;\"> \n          <ion-col size=\"6\">\n            <ion-label text-wrap>Balance Amount(Incl. current invoice)</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label style=\"float: right;\">{{invoice.balanceAmount | number : '1.2-2'}}</ion-label>\n          </ion-col>\n        </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"margin-left: 0px; padding-left: 0px;\" >\n              <ion-label style=\"margin-left: 0px;\">Amount Paid</ion-label>\n              <ion-input class=\"ion-text-right\" type=\"number\" [(ngModel)]=\"invoice.amountPaid\" (ionChange)=\"calculateInvoiceTotal()\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row> -->\n        \n        <!-- <ion-row>\n          <ion-col size=\"6\">\n            <ion-label color=\"primary\">Invoice Number</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label >{{invoice.invoiceNumber}}</ion-label>\n          </ion-col>\n        </ion-row>   \n      \n    </ion-grid>-->\n    <div style=\"display: none;\">\n      <ion-datetime value=\"invoice.invoiceDate\" ></ion-datetime>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-row style=\"float:right\">\n    <ion-col >\n    <ion-button  color=\"primary\" (click)=\"submitBill()\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n     \n      \n    </ion-button>\n    <ion-button color=\"primary\" (click)=\"printBill()\">\n      <ion-icon name=\"print\"></ion-icon>\n    </ion-button>\n  </ion-col>\n  </ion-row>\n\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=newinvoice-newinvoice-module-es5.js.map