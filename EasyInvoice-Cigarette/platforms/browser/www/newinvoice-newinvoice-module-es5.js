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


      __webpack_exports__["default"] = "@charset \"UTF-8\";.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }.ngx-datatable [hidden] {\n    display: none !important; }.ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }/*\n  This stylesheet uses scss valiables for most of the colors / background-colors of the table\n  to enable the customization of the displayed table without cloning the stylesheet into the\n  own application.\n\n  To modify table colors, add the following lines to the scss file of your application\n  (this example modifies the color of the selected row - selectionType = single, multi or multiClick):\n\n  $ngx-datatable-selected-active-background: yellow;\n  $ngx-datatable-selected-active-background-hover: rgba(yellow, 0.2);\n\n  @import '~@swimlane/ngx-datatable/index.css';\n  @import '~@swimlane/ngx-datatable/themes/material.scss';\n  @import '~@swimlane/ngx-datatable/assets/icons.css';\n\nThat's all.\n*/@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter::before {\n  content: '\\62';\n}.datatable-icon-collapse::before {\n  content: '\\61';\n}.datatable-icon-expand::before {\n  content: '\\63';\n}.datatable-icon-close::before {\n  content: '\\64';\n}.datatable-icon-up::before {\n  content: '\\65';\n}.datatable-icon-down::before {\n  content: '\\66';\n}.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort::before {\n  content: '\\67';\n}.datatable-icon-done::before {\n  content: '\\68';\n}.datatable-icon-done-all::before {\n  content: '\\69';\n}.datatable-icon-search::before {\n  content: '\\6a';\n}.datatable-icon-pin::before {\n  content: '\\6b';\n}.datatable-icon-add::before {\n  content: '\\6d';\n}.datatable-icon-left::before {\n  content: '\\6f';\n}.datatable-icon-right::before {\n  content: '\\70';\n}.datatable-icon-skip::before {\n  content: '\\71';\n}.datatable-icon-prev::before {\n  content: '\\72';\n}.ngx-datatable.material {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  /**\n  * Shared Styles\n  */\n  /**\n  * Global Row Styles\n  */\n  /**\n  * Header Styles\n  */\n  /**\n  * Body Styles\n  */\n  /**\n  * Footer Styles\n  */\n}.ngx-datatable.material.striped .datatable-row-odd {\n  background: #eee;\n}.ngx-datatable.material.single-selection .datatable-body-row.active, .ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active, .ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active, .ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}.ngx-datatable.material.single-selection .datatable-body-row.active:hover, .ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}.ngx-datatable.material.single-selection .datatable-body-row.active:focus, .ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group {\n  background-color: #eee;\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: linear;\n}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group {\n  background-color: #ddd;\n}.ngx-datatable.material.cell-selection .datatable-body-cell:hover, .ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group {\n  background-color: #eee;\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: linear;\n}.ngx-datatable.material.cell-selection .datatable-body-cell:focus, .ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group {\n  background-color: #ddd;\n}.ngx-datatable.material.cell-selection .datatable-body-cell.active, .ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover, .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus, .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}.ngx-datatable.material .empty-row {\n  height: 50px;\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}.ngx-datatable.material .loading-row {\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}.ngx-datatable.material .datatable-header .datatable-row-left,\n.ngx-datatable.material .datatable-body .datatable-row-left {\n  background-color: #fff;\n  background-position: 100% 0;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==);\n}.ngx-datatable.material .datatable-header .datatable-row-right,\n.ngx-datatable.material .datatable-body .datatable-row-right {\n  background-position: 0 0;\n  background-color: #fff;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==);\n}.ngx-datatable.material .datatable-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}.ngx-datatable.material .datatable-header .datatable-header-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  font-weight: 400;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.54);\n  vertical-align: bottom;\n  font-size: 12px;\n  font-weight: 500;\n}.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper {\n  position: relative;\n}.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after {\n  transition: transform 400ms ease, opacity 400ms ease;\n  opacity: 0.5;\n  transform: scale(1);\n}.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -30px 0 0 -30px;\n  height: 60px;\n  width: 60px;\n  background: #eee;\n  border-radius: 100%;\n  opacity: 1;\n  filter: none;\n  transform: scale(0);\n  z-index: 9999;\n  pointer-events: none;\n}.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle {\n  border-right: none;\n}.ngx-datatable.material .datatable-header .resize-handle {\n  border-right: solid 1px #eee;\n}.ngx-datatable.material .datatable-body {\n  position: relative;\n}.ngx-datatable.material .datatable-body .datatable-row-detail {\n  background: #f5f5f5;\n  padding: 10px;\n}.ngx-datatable.material .datatable-body .datatable-group-header {\n  background: #f5f5f5;\n  border-bottom: solid 1px #d9d8d9;\n  border-top: solid 1px #d9d8d9;\n}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}.ngx-datatable.material .datatable-body .progress-linear {\n  display: block;\n  position: -webkit-sticky;\n  position: sticky;\n  width: 100%;\n  height: 5px;\n  padding: 0;\n  margin: 0;\n  top: 0;\n}.ngx-datatable.material .datatable-body .progress-linear .container {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 5px;\n  transform: translate(0, 0) scale(1, 1);\n  background-color: #aad1f9;\n}.ngx-datatable.material .datatable-body .progress-linear .container .bar {\n  transition: all 0.2s linear;\n  -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: transform 0.2s linear;\n  background-color: #106cc8;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 5px;\n}.ngx-datatable.material .datatable-footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n}.ngx-datatable.material .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}.ngx-datatable.material .datatable-footer .datatable-pager {\n  margin: 0 10px;\n}.ngx-datatable.material .datatable-footer .datatable-pager li {\n  vertical-align: middle;\n}.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a {\n  color: rgba(0, 0, 0, 0.26) !important;\n  background-color: transparent !important;\n}.ngx-datatable.material .datatable-footer .datatable-pager li.active a {\n  background-color: rgba(158, 158, 158, 0.2);\n  font-weight: bold;\n}.ngx-datatable.material .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0 6px;\n  border-radius: 3px;\n  margin: 6px 3px;\n  text-align: center;\n  vertical-align: top;\n  color: rgba(0, 0, 0, 0.54);\n  text-decoration: none;\n  vertical-align: bottom;\n}.ngx-datatable.material .datatable-footer .datatable-pager a:hover {\n  color: rgba(0, 0, 0, 0.75);\n  background-color: rgba(158, 158, 158, 0.2);\n}.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 20px;\n  line-height: 20px;\n  padding: 0 3px;\n}.ngx-datatable.material .datatable-summary-row .datatable-body-row {\n  background-color: #ddd;\n}.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover {\n  background-color: #ddd;\n}.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}/**\n * Checkboxes\n**/.datatable-checkbox {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0;\n}.datatable-checkbox input[type=checkbox] {\n  position: relative;\n  margin: 0 1rem 0 0;\n  cursor: pointer;\n  outline: none;\n}.datatable-checkbox input[type=checkbox]:before {\n  transition: all 0.3s ease-in-out;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #f2f2f2;\n}.datatable-checkbox input[type=checkbox]:checked:before {\n  transform: rotate(-45deg);\n  height: 0.5rem;\n  border-color: #009688;\n  border-top-style: none;\n  border-right-style: none;\n}.datatable-checkbox input[type=checkbox]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  cursor: pointer;\n}/**\n * Progress bar animations\n */@-webkit-keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1);\n  }\n}@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1);\n  }\n}#content {\n  position: relative;\n  margin-bottom: 10px;\n}.item-details-table {\n  width: 94%;\n  margin-left: 2%;\n  margin-right: 5%;\n  margin-top: 2%;\n  color: black;\n  background-color: aliceblue;\n  text-align: center;\n}.item-details-table td {\n  padding: 5px;\n}.vat-check .check {\n  margin: 0;\n  margin-right: 10px;\n}.m-t-5 {\n  margin-top: 5px;\n}table.fixed {\n  width: 100%;\n}table th {\n  padding: 10px 0px;\n  text-align: center;\n}table th:last-child {\n  padding-right: 5px;\n}table thead tr {\n  border-bottom: 1px solid #31c7df;\n  background: #34d2eb;\n  color: #fff;\n}table tr td {\n  padding: 10px 0px;\n}table td:nth-child(4) {\n  width: 40%;\n  text-align: center;\n}table td:nth-child(3), td:nth-child(2), td:nth-child(1) {\n  width: 20%;\n  text-align: center;\n}.line-separator {\n  border: 1px solid #f4f4f4;\n}.display-flex {\n  display: flex;\n  text-align: left;\n}.summary-label {\n  width: 60%;\n  padding: 3px 10px;\n  text-align: end;\n  font-weight: 600;\n  color: #837f7f;\n}.full-width {\n  width: 100%;\n}.item-value {\n  width: 40%;\n  padding: 3px 10px;\n  text-align: end;\n}.confirm-dialog .alert-title {\n  color: #4679e9 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2NzcyIsIi4uLy4uLy4uL25ld2ludm9pY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixDQ0FoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0I7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRSxFQUFFLENBQ0o7SUFDRSx3QkFBd0IsRUFBRSxDQUM1Qjs7O0lBS0Usc0JBQXNCLEVBQUUsQ0FDMUI7SUFDRSxnQkFBZ0IsRUFBRSxDQUNwQjtJQUNFLGtCQUFrQixFQUFFLENBQ3RCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlDQUFpQyxFQUFFLENBQ3JDO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QixFQUFFLENBQzdCO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDM0I7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFLENBQy9COzs7SUFPRSxhQUFhO0lBQ2IsbUJBQW1CO0lBSW5CLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsQ0FDbEI7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUUsQ0FDcEI7O01BRUUsYUFBYSxFQUFFLENBQ25COztJQUVFLFVBQVUsRUFBRSxDQUNkOzs7O0lBSUUsa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUUsQ0FDbEI7TUFDRSxvQkFBb0I7TUFDcEIsNEJBQTRCLEVBQUUsQ0FDaEM7TUFDRSxrQkFBa0I7TUFDbEIscUJBQXFCLEVBQUUsQ0FDdkI7UUFDRSxlQUFlLEVBQUUsQ0FDbkI7UUFDRSxZQUFZLEVBQUUsQ0FDaEI7UUFDRSxpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixlQUFlLEVBQUUsQ0FDbkI7O1FBRUUscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsY0FBYztRQUNkLGtCQUFrQixFQUFFLENBQ3RCO1FBQ0UsaUJBQWlCLEVBQUUsQ0FDckI7UUFDRSxtQkFBbUIsRUFBRSxDQUN2QjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0Usa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixTQUFTLEVBQUUsQ0FDWDtVQUNFLFFBQVEsRUFBRSxDQUNaO1VBQ0UsT0FBTyxFQUFFLENBQ2I7UUFDRSxlQUFlLEVBQUUsQ0FDdkI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWMsRUFBRSxDQUNoQjtNQUNFLHFCQUFxQixFQUFFLENBQ3pCO01BQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7TUFLRSxhQUFhO01BT2Isc0JBQXNCLEVBQUUsQ0FDMUI7TUFDRSxhQUFhLEVBQUUsQ0FDZjtRQUtFLGFBQWEsRUFBRSxDQUNyQjtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixXQUFXLEVBQUUsQ0FDZjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWE7TUFDYixpQkFBaUIsRUFBRSxDQUNuQjs7UUFFRSxVQUFVO1FBQ1YsU0FBUztRQUNULHFCQUFxQjtRQUNyQixnQkFBZ0IsRUFBRSxDQUNwQjs7UUFFRSxhQUFhLEVBQUUsQ0FDakI7UUFDRSxlQUFlO1FBQ2YscUJBQXFCLEVBQUUsQ0FDekI7UUFDRSxtQkFBbUIsRUFBRSxDQ3JNN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSxDRkVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUFnQztFQUNoQzs0RkFDc0c7RUFDdEcsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQixDQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDLENBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEMsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2QsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0VwQ0E7RUFDRSxnQkFsRHlCO0VBbUR6QixxSEFsRHlCO0VBc0l6Qjs7R0FBQTtFQWtCQTs7R0FBQTtFQW9CQTs7R0FBQTtFQXlEQTs7R0FBQTtFQW9GQTs7R0FBQTtBQ3hTRixDRG9DSTtFQUNFLGdCQXBENkI7QUNrQm5DLENEMENNO0VBRUUseUJBbERtQztFQW1EbkMsV0FsRDhCO0FDU3RDLENENENNO0VBRUUseUJBdER5QztFQXVEekMsV0F0RG9DO0FDVzVDLENEOENNO0VBRUUseUJBMUR5QztFQTJEekMsV0ExRG9DO0FDYTVDLENEb0RNO0VBRUUsc0JBaEZpQztFQWlGakMsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FDbkRSLENEc0RNO0VBRUUsc0JBdkZpQztBQ2tDekMsQ0Q0RE07RUFFRSxzQkE3RnVDO0VBOEZ2QywrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUMzRFIsQ0Q4RE07RUFFRSxzQkFwR3VDO0FDdUMvQyxDRGdFTTtFQUVFLHlCQXRHbUM7RUF1R25DLFdBdEc4QjtBQ3VDdEMsQ0RrRU07RUFFRSx5QkExR3lDO0VBMkd6QyxXQTFHb0M7QUN5QzVDLENEb0VNO0VBRUUseUJBOUd5QztFQStHekMsV0E5R29DO0FDMkM1QyxDRDJFRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDekVKLENENEVFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQzFFSixDRGtGSTs7RUFDRSxzQkEvSnFCO0VBZ0tyQiwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUpBQUE7QUMvRU4sQ0RrRkk7O0VBQ0Usd0JBQUE7RUFDQSxzQkF2S3FCO0VBd0tyQiwyQkFBQTtFQUNBLHlKQUFBO0FDL0VOLENEc0ZFO0VBQ0UsNENBQUE7QUNwRkosQ0RzRkk7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFoSzZCO0VBaUs3QiwwQkFoS3dCO0VBaUt4QixzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3BGTixDRHNGTTtFQUNFLGtCQUFBO0FDcEZSLENEd0ZRO0VBQ0Usb0RBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUN0RlYsQ0QwRk07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ3hGUixDRDRGUTtFQUNFLGtCQUFBO0FDMUZWLENEK0ZJO0VBQ0UsNEJBQUE7QUM3Rk4sQ0RvR0U7RUFDRSxrQkFBQTtBQ2xHSixDRG9HSTtFQUNFLG1CQWhONEI7RUFpTjVCLGFBQUE7QUNsR04sQ0RxR0k7RUFDRSxtQkFuTjhCO0VBb045QixnQ0FBQTtFQUNBLDZCQUFBO0FDbkdOLENEdUdNO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQS9Ob0I7RUFnT3BCLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDckdSLENENEdNO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQTlPb0I7RUErT3BCLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDMUdSLENEOEdJO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtBQzVHTixDRDhHTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFFQSxzQ0FBQTtFQUNBLHlCQUFBO0FDNUdSLENEOEdRO0VBQ0UsMkJBQUE7RUFDQSwwRUFBQTtFQUNBLGtFQUFBO0VBR0EsaUNBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUM5R1YsQ0R1SEU7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQTdSMEI7QUN3SzlCLENEdUhJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNySE4sQ0R3SEk7RUFDRSxjQUFBO0FDdEhOLENEd0hNO0VBQ0Usc0JBQUE7QUN0SFIsQ0R3SFE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0FDdEhWLENEeUhRO0VBQ0UsMENBMVMwQjtFQTJTMUIsaUJBQUE7QUN2SFYsQ0QySE07RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkE3VGdCO0VBOFRoQixxQkFBQTtFQUNBLHNCQUFBO0FDekhSLENEMkhRO0VBQ0UsMEJBalVvQjtFQWtVcEIsMENBalV5QjtBQ3dNbkMsQ0Q2SE07Ozs7RUFJRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDM0hSLENEa0lJO0VBQ0Usc0JBN1U2QjtBQzZNbkMsQ0RrSU07RUFDRSxzQkEvVWlDO0FDK016QyxDRG1JTTtFQUNFLGlCQUFBO0FDaklSLENEdUlBOztFQUFBLENBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ3BJRixDRHNJRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ3BJSixDRHNJSTtFQUdFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDcElOLENEdUlJO0VBSUUseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDcklOLENEd0lJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3RJTixDRDJJQTs7RUFBQSxDQUdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esd0NBQUE7RUN4SUY7RUQySUE7SUFDRSxVQUFBO0lBQ0EsdUNBQUE7RUN6SUY7QUFDRixDRGdJQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHdDQUFBO0VDeElGO0VEMklBO0lBQ0UsVUFBQTtJQUNBLHVDQUFBO0VDeklGO0FBQ0YsQ0FqVkE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBbVZKLENBalZBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQW9WSixDQW5WSTtFQUNJLFlBQUE7QUFxVlIsQ0FqVkk7RUFDSSxTQUFBO0VBQ0Esa0JBQUE7QUFvVlIsQ0FqVkE7RUFDSSxlQUFBO0FBb1ZKLENBbFZBO0VBQ0ksV0FBQTtBQXFWSixDQWxWRTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUFxVk4sQ0FuVkU7RUFDRSxrQkFBQTtBQXNWSixDQXBWRTtFQUNJLGdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBdVZOLENBclZFO0VBQ0UsaUJBQUE7QUF3VkosQ0F0VkU7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7QUF5Vk4sQ0F2VkU7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUEwVkosQ0F4VkE7RUFDSSx5QkFBQTtBQTJWSixDQXpWQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQTRWSixDQTFWQTtFQUNJLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUE2VkosQ0EzVkE7RUFDSSxXQUFBO0FBOFZKLENBNVZBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQStWSixDQTVWSTtFQUNJLHlCQUFBO0FBK1ZSIiwiZmlsZSI6Im5ld2ludm9pY2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJztcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90Jyk7XG4gIHNyYzogdXJsKCdmb250cy9kYXRhLXRhYmxlLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIHVybCgnZm9udHMvZGF0YS10YWJsZS53b2ZmJykgZm9ybWF0KCd3b2ZmJyksXG4gICAgdXJsKCdmb250cy9kYXRhLXRhYmxlLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLnN2ZyNkYXRhLXRhYmxlJykgZm9ybWF0KCdzdmcnKTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuXG5bZGF0YS1pY29uXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBjb250ZW50OiBhdHRyKGRhdGEtaWNvbik7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHNwZWFrOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzc149J2RhdGF0YWJsZS1pY29uLSddOjpiZWZvcmUsXG5bY2xhc3MqPScgZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiAnZGF0YS10YWJsZScgIWltcG9ydGFudDtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLWZpbHRlcjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY29sbGFwc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYxJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWV4cGFuZDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjMnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tY2xvc2U6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY0Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXVwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2NSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1kb3duOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Nic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zb3J0LXVuc2V0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG4gIG9wYWNpdHk6IDAuNTtcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY3Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmU6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY4Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvbmUtYWxsOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2OSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1zZWFyY2g6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZhJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXBpbjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmInO1xufVxuXG4uZGF0YXRhYmxlLWljb24tYWRkOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2ZCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1sZWZ0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Zic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1yaWdodDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzAnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tc2tpcDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcHJldjo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNzInO1xufVxuIiwiLm5neC1kYXRhdGFibGUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgLyoqXG4gICAqIFZlcnRpY2FsIFNjcm9sbGluZyBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEhvcml6b250YWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgSGVhZGVyIEhlaWdodCBBZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIEZpeGVkIHJvdyBoZWlnaHQgYWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBTaGFyZWQgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogSGVhZGVyIFN0eWxlc1xuICAgKi9cbiAgLyoqXG4gICAqIEJvZHkgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogRm9vdGVyIFN0eWxlc1xuICAgKi8gfVxuICAubmd4LWRhdGF0YWJsZSBbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XG4gIC5uZ3gtZGF0YXRhYmxlICosXG4gIC5uZ3gtZGF0YXRhYmxlICo6YmVmb3JlLFxuICAubmd4LWRhdGF0YWJsZSAqOmFmdGVyIHtcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cbiAgLm5neC1kYXRhdGFibGUuc2Nyb2xsLXZlcnRpY2FsIC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwudmlydHVhbGl6ZWQgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtaG9yeiAuZGF0YXRhYmxlLWJvZHkge1xuICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlLmZpeGVkLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1pbm5lciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgICAgLm5neC1kYXRhdGFibGUuZml4ZWQtcm93IC5kYXRhdGFibGUtc2Nyb2xsIC5kYXRhdGFibGUtYm9keS1yb3cgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktcm93LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC13ZWJraXQtZmxleC1mbG93OiByb3c7XG4gICAgLW1vei1mbGV4LWZsb3c6IHJvdztcbiAgICAtbXMtZmxleC1mbG93OiByb3c7XG4gICAgLW8tZmxleC1mbG93OiByb3c7XG4gICAgZmxleC1mbG93OiByb3c7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5LWNlbGwsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMS42MjU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbDpmb2N1cyxcbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlci1jZWxsOmZvY3VzIHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHotaW5kZXg6IDk7IH1cbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctbGVmdCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctY2VudGVyLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1ncm91cCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgLXdlYmtpdC1hbGlnbi1pdGVtczogc3RyZXRjaDsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLnNvcnRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5sb25ncHJlc3MgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBtb3ZlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5zb3J0LWJ0biB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMDAlO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZSxcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICBwYWRkaW5nOiAwIDRweDtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgY3Vyc29yOiBldy1yZXNpemU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwucmVzaXplYWJsZTpob3ZlciAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6aG92ZXIgLnJlc2l6ZS1oYW5kbGUtLW5vdC1yZXNpemFibGUge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC50YXJnZXRNYXJrZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbUxlZnQge1xuICAgICAgICAgIHJpZ2h0OiAwOyB9XG4gICAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlci5kcmFnRnJvbVJpZ2h0IHtcbiAgICAgICAgICBsZWZ0OiAwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtdGVtcGxhdGUtd3JhcCB7XG4gICAgICAgIGhlaWdodDogaW5oZXJpdDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXNjcm9sbCB7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgZGlzcGxheTogLW1vei1ib3g7XG4gICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLXdlYmtpdC1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtd2Via2l0LWZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAtbW96LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgLW1vei1ib3gtZGlyZWN0aW9uOiBub3JtYWw7XG4gICAgICAtbXMtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICBvdXRsaW5lOiBub25lOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1ib2R5LXJvdyA+IGRpdiB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgICAgZGlzcGxheTogLW1zLWZsZXhib3g7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICAgICAgZGlzcGxheTogZmxleDsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLWZvb3Rlci1pbm5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnNlbGVjdGVkLWNvdW50IC5wYWdlLWNvdW50IHtcbiAgICAgIGZsZXg6IDEgMSA0MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgNjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDIwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIge1xuICAgICAgZmxleDogMSAxIDgwJTtcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlcixcbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyIGxpIGEge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkuZGlzYWJsZWQgYSB7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cbiIsIi8qXG4gIFRoaXMgc3R5bGVzaGVldCB1c2VzIHNjc3MgdmFsaWFibGVzIGZvciBtb3N0IG9mIHRoZSBjb2xvcnMgLyBiYWNrZ3JvdW5kLWNvbG9ycyBvZiB0aGUgdGFibGVcbiAgdG8gZW5hYmxlIHRoZSBjdXN0b21pemF0aW9uIG9mIHRoZSBkaXNwbGF5ZWQgdGFibGUgd2l0aG91dCBjbG9uaW5nIHRoZSBzdHlsZXNoZWV0IGludG8gdGhlXG4gIG93biBhcHBsaWNhdGlvbi5cblxuICBUbyBtb2RpZnkgdGFibGUgY29sb3JzLCBhZGQgdGhlIGZvbGxvd2luZyBsaW5lcyB0byB0aGUgc2NzcyBmaWxlIG9mIHlvdXIgYXBwbGljYXRpb25cbiAgKHRoaXMgZXhhbXBsZSBtb2RpZmllcyB0aGUgY29sb3Igb2YgdGhlIHNlbGVjdGVkIHJvdyAtIHNlbGVjdGlvblR5cGUgPSBzaW5nbGUsIG11bHRpIG9yIG11bHRpQ2xpY2spOlxuXG4gICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyOiByZ2JhKHllbGxvdywgMC4yKTtcblxuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvaW5kZXguY3NzJztcbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9tYXRlcmlhbC5zY3NzJztcbiAgQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MnO1xuXG5UaGF0J3MgYWxsLlxuKi9cblxuLy8gY29tbW9uIGRhdGF0YWJsZSBjb2xvcnNcbiRuZ3gtZGF0YXRhYmxlLWJhY2tncm91bmQ6ICNmZmYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1ib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXG4gIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMikgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQ6ICNlZWUgIWRlZmF1bHQ7XG5cbi8vIGRlZmF1bHQgcm93IGFuZCBjZWxsIGJhY2tncm91bmQgY29sb3JzXG4kbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQ6ICNmZmYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQtaG92ZXI6ICNlZWUgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQtZm9jdXM6ICNkZGQgIWRlZmF1bHQ7XG5cbi8vIGRlZmF1bHQgYmFja2dyb3VuZCBjb2xvcnMgZm9yIGNlbGwgc2VsZWN0aW9uIHN0eWxlXG4kbmd4LWRhdGF0YWJsZS1jZWxsc2VsZWN0aW9uLWJhY2tncm91bmQtaG92ZXI6ICNlZWUgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1jZWxsc2VsZWN0aW9uLWJhY2tncm91bmQtZm9jdXM6ICNkZGQgIWRlZmF1bHQ7XG5cbi8vIGJhY2tncm91bmQgYW5kIHRleHQgY29sb3JzIGZvciBzZWxlY3RlZCBjZWxsIC8gcm93XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZDogIzMwNGZmZSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvcjogI2ZmZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyOiAjMTkzYWU0ICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWhvdmVyOiAjZmZmICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtZm9jdXM6ICMyMDQxZWYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItZm9jdXM6ICNmZmYgIWRlZmF1bHQ7XG5cbi8vIGNvbG9ycyBmb3IgaGVhZGVyIGVsZW1lbnRzXG4kZGF0YXRhYmxlLWhlYWRlci1jZWxsLWJhY2tncm91bmQ6ICNmZmYgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWhlYWRlci1jZWxsLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1oZWFkZXItYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtaGVhZGVyLXJlc2l6ZS1oYW5kbGUtY29sb3I6ICNlZWUgIWRlZmF1bHQ7XG5cbi8vIGNvbG9ycyBmb3IgdGFibGUgYm9keSBlbGVtZW50c1xuJGRhdGF0YWJsZS1yb3ctZGV0YWlsLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWJvZHktY2VsbC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJhY2tncm91bmQ6ICNmNWY1ZjUgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1ib3JkZXItdG9wLWNvbG9yOiAjZDlkOGQ5ICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYm9yZGVyLWJvdHRvbS1jb2xvcjogI2Q5ZDhkOSAhZGVmYXVsdDtcblxuLy8gY29sb3JzIGZvciBmb290ZXIgZWxlbWVudHNcbiRkYXRhdGFibGUtZm9vdGVyLWNlbGwtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWZvb3Rlci1ib3JkZXItdG9wLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItY29sb3ItaG92ZXI6IHJnYmEoMCwgMCwgMCwgMC43NSkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC4yKSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItZGlzYWJsZWQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yNikgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWRpc2FibGVkLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1hY3RpdmUtYmFja2dyb3VuZDogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpICFkZWZhdWx0O1xuXG4vLyBjb2xvcnMgZm9yIHN1bW1hcnkgcm93IGVsZW1lbnRzXG4kZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQ6ICNkZGQgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXN1bW1hcnktcm93LWJhY2tncm91bmQtaG92ZXI6ICNkZGQgIWRlZmF1bHQ7XG5cbi5uZ3gtZGF0YXRhYmxlLm1hdGVyaWFsIHtcbiAgYmFja2dyb3VuZDogJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDtcbiAgYm94LXNoYWRvdzogJG5neC1kYXRhdGFibGUtYm94LXNoYWRvdztcblxuICAmLnN0cmlwZWQge1xuICAgIC5kYXRhdGFibGUtcm93LW9kZCB7XG4gICAgICBiYWNrZ3JvdW5kOiAkbmd4LWRhdGF0YWJsZS1yb3ctb2RkLWJhY2tncm91bmQ7XG4gICAgfVxuICB9XG5cbiAgJi5zaW5nbGUtc2VsZWN0aW9uLFxuICAmLm11bHRpLXNlbGVjdGlvbixcbiAgJi5tdWx0aS1jbGljay1zZWxlY3Rpb24ge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgJi5hY3RpdmUsXG4gICAgICAmLmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZTpob3ZlcixcbiAgICAgICYuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItaG92ZXI7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmZvY3VzLFxuICAgICAgJi5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1mb2N1cztcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1mb2N1cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmOm5vdCguY2VsbC1zZWxlY3Rpb24pIHtcbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtZGVmYXVsdC1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzLFxuICAgICAgJjpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZC1mb2N1cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmLmNlbGwtc2VsZWN0aW9uIHtcbiAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAmOmhvdmVyLFxuICAgICAgJjpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogYmFja2dyb3VuZDtcbiAgICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgICAgIH1cblxuICAgICAgJjpmb2N1cyxcbiAgICAgICY6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1jZWxsc2VsZWN0aW9uLWJhY2tncm91bmQtZm9jdXM7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlLFxuICAgICAgJi5hY3RpdmUgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZDtcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvcjtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmU6aG92ZXIsXG4gICAgICAmLmFjdGl2ZTpob3ZlciAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWhvdmVyO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZTpmb2N1cyxcbiAgICAgICYuYWN0aXZlOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtZm9jdXM7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItZm9jdXM7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG5cdCAqIFNoYXJlZCBTdHlsZXNcblx0ICovXG4gIC5lbXB0eS1yb3cge1xuICAgIGhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwO1xuICB9XG5cbiAgLmxvYWRpbmctcm93IHtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxLjJyZW07XG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICBib3JkZXItdG9wOiAwO1xuICB9XG5cbiAgLyoqXG5cdCAqIEdsb2JhbCBSb3cgU3R5bGVzXG5cdCAqL1xuICAuZGF0YXRhYmxlLWhlYWRlcixcbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICAuZGF0YXRhYmxlLXJvdy1sZWZ0IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWJhY2tncm91bmQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBUUFBQUFCQ0FZQUFBRDVQQS9OQUFBQUZrbEVRVlFJSFdQU2tOZVNCbUpoVFFWdGJpRE5DZ0FTYWdJSXVKWDhPZ0FBQUFCSlJVNUVya0pnZ2c9PSk7XG4gICAgfVxuXG4gICAgLmRhdGF0YWJsZS1yb3ctcmlnaHQge1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUkxMlBRa05kaTFWVFE1Z2JTd2tBc0RRQVJMQUlHdE9TRlVBQUFBQUJKUlU1RXJrSmdnZz09KTtcbiAgICB9XG4gIH1cblxuICAvKipcblx0ICogSGVhZGVyIFN0eWxlc1xuXHQgKi9cbiAgLmRhdGF0YWJsZS1oZWFkZXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkZGF0YXRhYmxlLWhlYWRlci1ib3JkZXItYm90dG9tLWNvbG9yO1xuXG4gICAgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLWhlYWRlci1jZWxsLWJhY2tncm91bmQ7XG4gICAgICBjb2xvcjogJGRhdGF0YWJsZS1oZWFkZXItY2VsbC1jb2xvcjtcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgICYubG9uZ3ByZXNzIHtcbiAgICAgICAgLmRyYWdnYWJsZTo6YWZ0ZXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSA0MDBtcyBlYXNlLCBvcGFjaXR5IDQwMG1zIGVhc2U7XG4gICAgICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRyYWdnYWJsZTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgbWFyZ2luOiAtMzBweCAwIDAgLTMwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIGZpbHRlcjogbm9uZTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICAgICAgei1pbmRleDogOTk5OTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgICYuZHJhZ2dpbmcge1xuICAgICAgICAucmVzaXplLWhhbmRsZSB7XG4gICAgICAgICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAxcHggJGRhdGF0YWJsZS1oZWFkZXItcmVzaXplLWhhbmRsZS1jb2xvcjtcbiAgICB9XG4gIH1cblxuICAvKipcblx0ICogQm9keSBTdHlsZXNcblx0ICovXG4gIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgLmRhdGF0YWJsZS1yb3ctZGV0YWlsIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkYXRhdGFibGUtcm93LWRldGFpbC1iYWNrZ3JvdW5kO1xuICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLWdyb3VwLWhlYWRlciB7XG4gICAgICBiYWNrZ3JvdW5kOiAkZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1iYWNrZ3JvdW5kO1xuICAgICAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJvcmRlci1ib3R0b20tY29sb3I7XG4gICAgICBib3JkZXItdG9wOiBzb2xpZCAxcHggJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYm9yZGVyLXRvcC1jb2xvcjtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgY29sb3I6ICRkYXRhdGFibGUtYm9keS1jZWxsLWNvbG9yO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcblxuICAgICAgICAvLyBjZWxsIGFjdGl2ZSBjbGFzc1xuICAgICAgICAvLyAmLmFjdGl2ZSB7XG4gICAgICAgIC8vICBiYWNrZ3JvdW5kOiAjMDgyOWUwXG4gICAgICAgIC8vIH1cbiAgICAgIH1cbiAgICAgIC5kYXRhdGFibGUtYm9keS1ncm91cC1jZWxsIHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMC45cmVtIDEuMnJlbTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgYm9yZGVyLXRvcDogMDtcbiAgICAgICAgY29sb3I6ICRkYXRhdGFibGUtYm9keS1jZWxsLWNvbG9yO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtbGluZWFyIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgdG9wOiAwO1xuXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAwKSBzY2FsZSgxLCAxKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3MCwgMjA5LCAyNDkpO1xuXG4gICAgICAgIC5iYXIge1xuICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGxpbmVhcjtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogcXVlcnkgMC44cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcbiAgICAgICAgICBhbmltYXRpb246IHF1ZXJ5IDAuOHMgaW5maW5pdGUgY3ViaWMtYmV6aWVyKDAuMzksIDAuNTc1LCAwLjU2NSwgMSk7XG5cbiAgICAgICAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBsaW5lYXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE2LCAxMDgsIDIwMCk7XG5cbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG5cdCAqIEZvb3RlciBTdHlsZXNcblx0ICovXG4gIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgJGRhdGF0YWJsZS1mb290ZXItYm9yZGVyLXRvcC1jb2xvcjtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBjb2xvcjogJGRhdGF0YWJsZS1mb290ZXItY2VsbC1jb2xvcjtcblxuICAgIC5wYWdlLWNvdW50IHtcbiAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xuICAgICAgaGVpZ2h0OiA1MHB4O1xuICAgICAgcGFkZGluZzogMCAxLjJyZW07XG4gICAgfVxuXG4gICAgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBtYXJnaW46IDAgMTBweDtcblxuICAgICAgbGkge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgICYuZGlzYWJsZWQgYSB7XG4gICAgICAgICAgY29sb3I6ICRkYXRhdGFibGUtcGFnZXItZGlzYWJsZWQtY29sb3IgIWltcG9ydGFudDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWRpc2FibGVkLWJhY2tncm91bmQgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWN0aXZlIGEge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtcGFnZXItYWN0aXZlLWJhY2tncm91bmQ7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgbWluLXdpZHRoOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjJweDtcbiAgICAgICAgcGFkZGluZzogMCA2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbWFyZ2luOiA2cHggM3B4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWNvbG9yO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgY29sb3I6ICRkYXRhdGFibGUtcGFnZXItY29sb3ItaG92ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1wYWdlci1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC5kYXRhdGFibGUtaWNvbi1sZWZ0LFxuICAgICAgLmRhdGF0YWJsZS1pY29uLXNraXAsXG4gICAgICAuZGF0YXRhYmxlLWljb24tcmlnaHQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tcHJldiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgM3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIFN1bW1hcnkgcm93IHN0eWxlc1xuICAuZGF0YXRhYmxlLXN1bW1hcnktcm93IHtcbiAgICAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtc3VtbWFyeS1yb3ctYmFja2dyb3VuZDtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtc3VtbWFyeS1yb3ctYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBDaGVja2JveGVzXG4qKi9cbi5kYXRhdGFibGUtY2hlY2tib3gge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHBhZGRpbmc6IDA7XG5cbiAgaW5wdXRbdHlwZT0nY2hlY2tib3gnXSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMCAxcmVtIDAgMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICAtbW96LXRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB6LWluZGV4OiAxO1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjJmMmYyO1xuICAgIH1cblxuICAgICY6Y2hlY2tlZDpiZWZvcmUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgICAgaGVpZ2h0OiAwLjVyZW07XG4gICAgICBib3JkZXItY29sb3I6ICMwMDk2ODg7XG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBub25lO1xuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBub25lO1xuICAgIH1cblxuICAgICY6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgd2lkdGg6IDFyZW07XG4gICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFByb2dyZXNzIGJhciBhbmltYXRpb25zXG4gKi9cbkBrZXlmcmFtZXMgcXVlcnkge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMzUlKSBzY2FsZSgwLjMsIDEpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgc2NhbGUoMCwgMSk7XG4gIH1cbn1cbiIsIkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL3RoZW1lcy9tYXRlcmlhbC5zY3NzJztcbkBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzJztcblxuI2NvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLml0ZW0tZGV0YWlscy10YWJsZSB7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW4tbGVmdDogMiU7XG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICBtYXJnaW4tdG9wOiAyJTsgXG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGFsaWNlYmx1ZTsgXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRkIHtcbiAgICAgICAgcGFkZGluZzogNXB4XG4gICAgfVxufVxuLnZhdC1jaGVjayB7XG4gICAgLmNoZWNrIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgfVxufVxuLm0tdC01IHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG59XG50YWJsZS5maXhlZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAvLyBtYXJnaW4tYm90dG9tOiA1cHg7XG4gIH1cbiAgdGFibGUgdGgge1xuICAgICAgcGFkZGluZzogMTBweCAgMHB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIHRhYmxlIHRoOmxhc3QtY2hpbGQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgfVxuICB0YWJsZSB0aGVhZCB0ciB7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMxYzdkZjtcbiAgICAgIGJhY2tncm91bmQ6ICMzNGQyZWI7XG4gICAgICBjb2xvcjogI2ZmZjtcbiAgfVxuICB0YWJsZSB0ciB0ZCB7XG4gICAgcGFkZGluZzogMTBweCAwcHg7XG4gIH1cbiAgdGFibGUgdGQ6bnRoLWNoaWxkKDQpIHtcbiAgICAgIHdpZHRoOiA0MCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgdGFibGUgdGQ6bnRoLWNoaWxkKDMpICwgdGQ6bnRoLWNoaWxkKDIpLCB0ZDpudGgtY2hpbGQoMSl7XG4gICAgd2lkdGg6IDIwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubGluZS1zZXBhcmF0b3Ige1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNGY0ZjQ7XG59XG4uZGlzcGxheS1mbGV4IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG4uc3VtbWFyeS1sYWJlbCB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBwYWRkaW5nOiAzcHggMTBweDtcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogIzgzN2Y3Zjtcbn1cbi5mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cbi5pdGVtLXZhbHVlIHtcbiAgICB3aWR0aDogNDAlO1xuICAgIHBhZGRpbmc6IDNweCAxMHB4O1xuICAgIHRleHQtYWxpZ246IGVuZDtcbn1cbi5jb25maXJtLWRpYWxvZyB7XG4gICAgLmFsZXJ0LXRpdGxlIHtcbiAgICAgICAgY29sb3I6ICM0Njc5ZTkgIWltcG9ydGFudDtcbiAgICB9XG59Il19 */";
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _print_preview_print_preview_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./print-preview/print-preview.component */
      "NKOA");

      var NewinvoicePage = /*#__PURE__*/function () {
        function NewinvoicePage(dbService, tostService, navCtrl, printService, validationService, datepipe, modalController, alertController) {
          _classCallCheck(this, NewinvoicePage);

          this.dbService = dbService;
          this.tostService = tostService;
          this.navCtrl = navCtrl;
          this.printService = printService;
          this.validationService = validationService;
          this.datepipe = datepipe;
          this.modalController = modalController;
          this.alertController = alertController;
          this.showTable = false;
          this.isSubmitted = false;
        }

        _createClass(NewinvoicePage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.invoice = this.getInvoiceData();
          }
        }, {
          key: "getInvoiceData",
          value: function getInvoiceData() {
            return {
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
              tax: null,
              isNewInvoice: false
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

            if (this.invoice.invoiceItems != null && this.invoice.invoiceItems != undefined && this.invoice.invoiceItems.length > 0) {
              this.showTable = true;
            } else {
              this.showTable = false;
            }
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
            this.invoice = this.getInvoiceData();
            this.invoice.invoiceItems = new Array();
            this.selectedProducts = new Array(); //this.dbService.getInvoiceNumber().then(data=>{
            //this.invoice.invoiceNumber=data;
            //});

            this.dbService.getAllCustomers().then(function (data) {
              return _this2.customerList = data;
            });
            this.dbService.incrementInvoiceNumber().then(function (data) {
              if (data == null || data == undefined) {
                data = 1;
              }

              _this2.invoice.invoiceNumber = _this2.dbService.codeConstant + _this2.dbService.invoiceCodeConstant + data;
            });
          }
        }, {
          key: "populateCustomerProducts",
          value: function populateCustomerProducts() {
            var _this3 = this;

            this.products = [];
            this.productsBackup = [];

            if (this.invoice.customer != null && this.invoice.customer != undefined && this.invoice.customer.itemList != null && this.invoice.customer.itemList != undefined) {
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

              if (this.products != null && this.products != undefined && this.products.length > 0) {
                this.showTable = true;
              } else {
                this.showTable = false;
              } // if (this.customerList)

            }

            console.log(this.invoice);
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

                  _this4.tostService.presentToast("Bill submitted successfully");

                  _this4.isSubmitted = true; //this.navCtrl.navigateRoot('invoice');
                });
              });
            })["catch"](function (reason) {
              _this4.tostService.presentToast("Failed to submit bill");

              console.log(reason);
            });
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
                        component: _print_preview_print_preview_component__WEBPACK_IMPORTED_MODULE_10__["PrintPreviewComponent"],
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
          key: "doSubmitBill",
          value: function doSubmitBill() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var _this6 = this;

              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertController.create({
                        cssClass: 'confirm-dialog',
                        header: 'Submit Invoice',
                        message: 'Invoice cannot be modified once submitted. Do you wish to submit the invoice?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {
                            alert.dismiss();
                          }
                        }, {
                          text: 'Submit',
                          handler: function handler() {
                            _this6.submitBill();
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "printBill",
          value: function printBill() {
            this.printPreview();
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
          type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainmenu\"> \n\n      </ion-menu-button>\n    </ion-buttons> \n   \n    <ion-title>New Invoice</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div>\n    <ion-item class=\"full-width m-0\">\n      <ion-label>Customer Name</ion-label>\n      <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%;\" \n      (ionChange)=\"populateCustomerProducts()\" [(ngModel)]=\"invoice.customer\" placeholder=\"Select Customer\">\n          <ion-select-option *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\n      </ion-select>\n    </ion-item>\n<!--<ion-item>\n  <ion-label>Product</ion-label>\n  <ionic-selectable style=\"height: 30px;\"\n    \n    [(ngModel)]=\"product\"\n    [items]=\"products\"\n    itemValueField=\"name\"\n    itemTextField=\"name\"\n    [canSearch]=\"true\"\n    (onChange)=\"productSelected($event)\"\n    [isMultiple]=\"true\"\n    \n    >\n  </ionic-selectable>\n</ion-item>  -->\n    <div id=\"content\" >\n      <!-- <table *ngIf=\"showTable\" border=\"none\"  class=\"item-details-table\">\n        <tr style=\"border: none; color: white; background-color: lightslategray;\">\n          <td style=\"width: 40%;text-align: left;\">\n            Item\n          </td>\n          <td style=\"text-align: left;\">\n            Price\n          </td>\n          <td style=\"text-align: left;\">\n            A.Qty\n          </td>\n          <td style=\"text-align: left;\">\n            Qty\n          </td>\n          \n          <td style=\"text-align: left;\">\n            Amount\n          </td>\n        </tr>\n        <tr *ngFor= \"let item of products\" style=\"border: none;\">\n          <td style=\"text-align: left;\">\n            <ion-input  disabled [(ngModel)]=\"item.name\" ></ion-input>\n          </td>\n          <td style=\"text-align: right;\">\n            <ion-input disabled (ionChange)=\"calculateInvoiceTotal(item)\" type=\"number\" [(ngModel)]=\"item.unitPrice\" ></ion-input>\n          </td>\n          <td style=\"text-align: right;\">\n            <ion-input disabled type=\"number\" [(ngModel)]=\"item.displayBalanceQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input>\n          </td>\n          <td style=\"text-align: right;\">\n            <ion-input (ionChange)=\"calculateInvoiceTotal(item)\" type=\"number\" [(ngModel)]=\"item.quantity\"  (keypress)=\"numericOnly($event)\"></ion-input>\n          </td>\n          <td style=\"text-align: right;\">\n            <ion-input disabled type=\"number\" [(ngModel)]=\"item.unitPrice*item.quantity\" ></ion-input>\n          </td>\n        </tr>\n      </table> -->\n      <table *ngIf=\"showTable\"  class=\"fixed\">\n        <thead>\n          <tr>\n            <th>\n              <div>Item</div>\n            </th>\n            <th>\n              <div>Price</div>\n            </th> \n            <th>\n              <div>A.Qty</div>\n            </th>\n            <th>\n              <div>Qty</div>\n            </th>\n            <th>\n              <div>Amount</div>\n            </th>\n          </tr>\n        </thead>\n        <tr *ngFor= \"let item of products\">\n          <td>{{item.name}}</td>\n          <td><ion-input [disabled]=\"!profile.canEnableUnit && isSubmitted\" (ionChange)=\"calculateInvoiceTotal(item)\" type=\"number\" [(ngModel)]=\"item.unitPrice\" ></ion-input></td>\n          <td><ion-input disabled type=\"number\" [(ngModel)]=\"item.displayBalanceQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n          <td><ion-input [disabled]=\"isSubmitted\" (ionChange)=\"calculateInvoiceTotal(item)\" type=\"number\" [(ngModel)]=\"item.quantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n          <td><ion-input disabled type=\"number\" [(ngModel)]=\"item.unitPrice*item.quantity\" ></ion-input></td>\n        </tr>\n      </table>\n      <div class=\"line-separator\"></div>\n    </div>\n\n      <ion-item class=\"vat-check\" no-lines lines=\"none\">\n        <ion-label> Apply VAT</ion-label>\n        <ion-checkbox class=\"check\" slot=\"start\" [(ngModel)]=\"applyVat\" (ionChange)=\"calculateInvoiceTotal()\" ></ion-checkbox>\n      </ion-item>\n\n    <div class=\"line-separator\"></div>\n\n    <div class=\"display-flex full-width m-t-5\">\n      <div  class=\"summary-label\">\n        Total :\n      </div>\n      <div text-center class=\"item-value\" *ngIf=\"applyVat==true\">\n        {{(invoice.total-invoice.tax) | number : '1.2-2'}}\n      </div>\n      <div text-center class=\"item-value\" *ngIf=\"applyVat==false\">\n        {{(invoice.total) | number : '1.2-2'}}\n      </div>\n\n    </div>\n    <div class=\"display-flex full-width\">\n      <div  class=\"summary-label\">\n        Tax :\n      </div>\n      <div text-center class=\"item-value\">\n        {{(invoice.tax) | number : '1.2-2'}}\n      </div>\n    </div>\n\n    <div class=\"display-flex full-width\">\n      <div  class=\"summary-label\">\n        Tax :\n      </div>\n      <div text-center class=\"item-value\" *ngIf=\"applyVat==true\">\n        {{(invoice.tax) | number : '1.2-2'}}\n      </div>\n      <div text-center class=\"item-value\" *ngIf=\"applyVat==false\">\n        {{(0 | number : '1.2-2')}}\n      </div>\n    </div>\n\n    <div class=\"display-flex full-width\">\n      <div  class=\"summary-label\">\n        Gross Total(Incl. Tax) :\n      </div>\n      <div text-center class=\"item-value\">\n        {{invoice.total | number : '1.2-2'}}\n      </div>\n    </div>\n\n    <div class=\"display-flex full-width\">\n      <div  class=\"summary-label\">\n        Balance Amount(Incl. current invoice) :\n      </div>\n      <div text-center class=\"item-value\">\n        {{invoice.balanceAmount | number : '1.2-2'}}\n      </div>\n    </div>\n\n    <div class=\"display-flex full-width\">\n      <div  class=\"summary-label\">\n        Amount Paid :\n      </div>\n      <div text-center class=\"item-value\">\n        <ion-input class=\"ion-text-right\" type=\"number\" [(ngModel)]=\"invoice.amountPaid\" (ionChange)=\"calculateInvoiceTotal()\"></ion-input>\n      </div>\n    </div>\n  \n    <!-- <ion-grid>\n      <ion-row>\n        <ion-item style=\"width: 100%;\">\n        <ion-col size=\"6\">\n          <ion-label >Apply VAT</ion-label>\n        </ion-col>\n        <ion-col size=\"6\">\n          <ion-checkbox color=\"primary\" [(ngModel)]=\"applyVat\" (ionChange)=\"calculateInvoiceTotal()\" ></ion-checkbox>\n        </ion-col>\n      </ion-item>\n      </ion-row>\n        \n      <ion-row>\n    <ion-item style=\"width: 100%;\"> \n          <ion-col size=\"6\">\n            <ion-label >Total</ion-label>\n          </ion-col>\n          <ion-col size=\"6\" *ngIf=\"applyVat==true\">\n            <ion-label style=\"float: right;\">{{(invoice.total-invoice.tax) | number : '1.2-2'}}</ion-label>\n          </ion-col>\n          <ion-col size=\"6\" *ngIf=\"applyVat==false\">\n            <ion-label style=\"float: right;\">{{invoice.total |    number : '1.2-2'}}</ion-label>\n          </ion-col>\n        </ion-item>\n      </ion-row>  \n      <ion-row>\n        <ion-item style=\"width: 100%;\">\n        <ion-col size=\"6\">\n          <ion-label >Tax</ion-label>\n        </ion-col>\n        <ion-col size=\"6\" *ngIf=\"applyVat==true\">\n          <ion-label style=\"float: right;\">{{(invoice.tax | number : '1.2-2')}}</ion-label>\n        </ion-col>\n        <ion-col size=\"6\" *ngIf=\"applyVat==false\">\n          <ion-label style=\"float: right;\">{{(0 | number : '1.2-2')}}</ion-label>\n        </ion-col>\n      </ion-item>\n    </ion-row>  \n        \n\n\n\n    <ion-row>\n      <ion-item style=\"width: 100%;\">\n      <ion-col size=\"6\">\n        <ion-label >Gross Total(Incl. Tax)               </ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label style=\"float: right;\">{{invoice.total | number : '1.2-2'}}</ion-label>\n      </ion-col>\n    </ion-item>\n    </ion-row>\n\n        \n        \n        <ion-row>\n        <ion-item style=\"width: 100%;\"> \n          <ion-col size=\"6\">\n            <ion-label text-wrap>Balance Amount(Incl. current invoice)</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label style=\"float: right;\">{{invoice.balanceAmount | number : '1.2-2'}}</ion-label>\n          </ion-col>\n        </ion-item>\n        </ion-row>\n\n        <ion-row>\n          <ion-col size=\"12\">\n            <ion-item style=\"margin-left: 0px; padding-left: 0px;\" >\n              <ion-label style=\"margin-left: 0px;\">Amount Paid</ion-label>\n              <ion-input class=\"ion-text-right\" type=\"number\" [(ngModel)]=\"invoice.amountPaid\" (ionChange)=\"calculateInvoiceTotal()\"></ion-input>\n            </ion-item>\n          </ion-col>\n        </ion-row> -->\n        \n        <!-- <ion-row>\n          <ion-col size=\"6\">\n            <ion-label color=\"primary\">Invoice Number</ion-label>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-label >{{invoice.invoiceNumber}}</ion-label>\n          </ion-col>\n        </ion-row>   \n      \n    </ion-grid>-->\n    <div style=\"display: none;\">\n      <ion-datetime value=\"invoice.invoiceDate\" ></ion-datetime>\n    </div>\n  </div>\n</ion-content>\n<ion-footer>\n  <ion-row style=\"float:right\">\n    <ion-col >\n    <ion-button  color=\"primary\" (click)=\"doSubmitBill()\" [disabled]=\"isSubmitted\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n     \n      \n    </ion-button>\n    <ion-button color=\"primary\" (click)=\"printBill()\">\n      <ion-icon name=\"print\"></ion-icon>\n    </ion-button>\n  </ion-col>\n  </ion-row>\n\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=newinvoice-newinvoice-module-es5.js.map