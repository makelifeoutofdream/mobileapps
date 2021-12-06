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

      var NewinvoicePageModule = function NewinvoicePageModule() {
        _classCallCheck(this, NewinvoicePageModule);
      };

      NewinvoicePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _newinvoice_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewinvoicePageRoutingModule"], ionic_selectable__WEBPACK_IMPORTED_MODULE_7__["IonicSelectableModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_8__["NgxDatatableModule"]],
        declarations: [_newinvoice_page__WEBPACK_IMPORTED_MODULE_6__["NewinvoicePage"]]
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


      __webpack_exports__["default"] = "@charset \"UTF-8\";.ngx-datatable {\n  display: block;\n  overflow: hidden;\n  justify-content: center;\n  position: relative;\n  transform: translate3d(0, 0, 0);\n  /**\n   * Vertical Scrolling Adjustments\n   */\n  /**\n   * Horizontal Scrolling Adjustments\n   */\n  /**\n   * Fixed Header Height Adjustments\n   */\n  /**\n   * Fixed row height adjustments\n   */\n  /**\n   * Shared Styles\n   */\n  /**\n   * Header Styles\n   */\n  /**\n   * Body Styles\n   */\n  /**\n   * Footer Styles\n   */ }.ngx-datatable [hidden] {\n    display: none !important; }.ngx-datatable *,\n  .ngx-datatable *:before,\n  .ngx-datatable *:after {\n    box-sizing: border-box; }.ngx-datatable.scroll-vertical .datatable-body {\n    overflow-y: auto; }.ngx-datatable.scroll-vertical.virtualized .datatable-body .datatable-row-wrapper {\n    position: absolute; }.ngx-datatable.scroll-horz .datatable-body {\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner {\n    white-space: nowrap; }.ngx-datatable.fixed-header .datatable-header .datatable-header-inner .datatable-header-cell {\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll {\n    white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row {\n      white-space: nowrap; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable.fixed-row .datatable-scroll .datatable-body-row .datatable-body-group-cell {\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis; }.ngx-datatable .datatable-body-row,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-header-inner {\n    display: flex;\n    flex-direction: row;\n    -o-flex-flow: row;\n    flex-flow: row; }.ngx-datatable .datatable-body-cell,\n  .ngx-datatable .datatable-header-cell {\n    overflow-x: hidden;\n    vertical-align: top;\n    display: inline-block;\n    line-height: 1.625; }.ngx-datatable .datatable-body-cell:focus,\n    .ngx-datatable .datatable-header-cell:focus {\n      outline: none; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-right {\n    z-index: 9; }.ngx-datatable .datatable-row-left,\n  .ngx-datatable .datatable-row-center,\n  .ngx-datatable .datatable-row-group,\n  .ngx-datatable .datatable-row-right {\n    position: relative; }.ngx-datatable .datatable-header {\n    display: block;\n    overflow: hidden; }.ngx-datatable .datatable-header .datatable-header-inner {\n      align-items: stretch;\n      -webkit-align-items: stretch; }.ngx-datatable .datatable-header .datatable-header-cell {\n      position: relative;\n      display: inline-block; }.ngx-datatable .datatable-header .datatable-header-cell.sortable .datatable-header-cell-wrapper {\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell.longpress .datatable-header-cell-wrapper {\n        cursor: move; }.ngx-datatable .datatable-header .datatable-header-cell .sort-btn {\n        line-height: 100%;\n        vertical-align: middle;\n        display: inline-block;\n        cursor: pointer; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle,\n      .ngx-datatable .datatable-header .datatable-header-cell .resize-handle--not-resizable {\n        display: inline-block;\n        position: absolute;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        width: 5px;\n        padding: 0 4px;\n        visibility: hidden; }.ngx-datatable .datatable-header .datatable-header-cell .resize-handle {\n        cursor: ew-resize; }.ngx-datatable .datatable-header .datatable-header-cell.resizeable:hover .resize-handle {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell:hover .resize-handle--not-resizable {\n        visibility: visible; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker {\n        position: absolute;\n        top: 0;\n        bottom: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromLeft {\n          right: 0; }.ngx-datatable .datatable-header .datatable-header-cell .targetMarker.dragFromRight {\n          left: 0; }.ngx-datatable .datatable-header .datatable-header-cell .datatable-header-cell-template-wrap {\n        height: inherit; }.ngx-datatable .datatable-body {\n    position: relative;\n    z-index: 10;\n    display: block; }.ngx-datatable .datatable-body .datatable-scroll {\n      display: inline-block; }.ngx-datatable .datatable-body .datatable-row-detail {\n      overflow-y: hidden; }.ngx-datatable .datatable-body .datatable-row-wrapper {\n      display: flex;\n      flex-direction: column; }.ngx-datatable .datatable-body .datatable-body-row {\n      outline: none; }.ngx-datatable .datatable-body .datatable-body-row > div {\n        display: flex; }.ngx-datatable .datatable-footer {\n    display: block;\n    width: 100%;\n    overflow: auto; }.ngx-datatable .datatable-footer .datatable-footer-inner {\n      display: flex;\n      align-items: center;\n      width: 100%; }.ngx-datatable .datatable-footer .selected-count .page-count {\n      flex: 1 1 40%; }.ngx-datatable .datatable-footer .selected-count .datatable-pager {\n      flex: 1 1 60%; }.ngx-datatable .datatable-footer .page-count {\n      flex: 1 1 20%; }.ngx-datatable .datatable-footer .datatable-pager {\n      flex: 1 1 80%;\n      text-align: right; }.ngx-datatable .datatable-footer .datatable-pager .pager,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li {\n        padding: 0;\n        margin: 0;\n        display: inline-block;\n        list-style: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li,\n      .ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        outline: none; }.ngx-datatable .datatable-footer .datatable-pager .pager li a {\n        cursor: pointer;\n        display: inline-block; }.ngx-datatable .datatable-footer .datatable-pager .pager li.disabled a {\n        cursor: not-allowed; }/*\n  This stylesheet uses scss valiables for most of the colors / background-colors of the table\n  to enable the customization of the displayed table without cloning the stylesheet into the\n  own application.\n\n  To modify table colors, add the following lines to the scss file of your application\n  (this example modifies the color of the selected row - selectionType = single, multi or multiClick):\n\n  $ngx-datatable-selected-active-background: yellow;\n  $ngx-datatable-selected-active-background-hover: rgba(yellow, 0.2);\n\n  @import '~@swimlane/ngx-datatable/index.css';\n  @import '~@swimlane/ngx-datatable/themes/material.scss';\n  @import '~@swimlane/ngx-datatable/assets/icons.css';\n\nThat's all.\n*/@font-face {\n  font-family: 'data-table';\n  src: url('data-table.eot');\n  src: url('data-table.eot?#iefix') format('embedded-opentype'), url('data-table.woff') format('woff'),\n    url('data-table.ttf') format('truetype'), url('data-table.svg#data-table') format('svg');\n  font-weight: normal;\n  font-style: normal;\n}[data-icon]::before {\n  font-family: 'data-table' !important;\n  content: attr(data-icon);\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}[class^='datatable-icon-']::before,\n[class*=' datatable-icon-']::before {\n  font-family: 'data-table' !important;\n  font-style: normal !important;\n  font-weight: normal !important;\n  font-variant: normal !important;\n  text-transform: none !important;\n  speak: none;\n  line-height: 1;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}.datatable-icon-filter::before {\n  content: '\\62';\n}.datatable-icon-collapse::before {\n  content: '\\61';\n}.datatable-icon-expand::before {\n  content: '\\63';\n}.datatable-icon-close::before {\n  content: '\\64';\n}.datatable-icon-up::before {\n  content: '\\65';\n}.datatable-icon-down::before {\n  content: '\\66';\n}.datatable-icon-sort-unset::before {\n  content: '\\63';\n  opacity: 0.5;\n}.datatable-icon-sort::before {\n  content: '\\67';\n}.datatable-icon-done::before {\n  content: '\\68';\n}.datatable-icon-done-all::before {\n  content: '\\69';\n}.datatable-icon-search::before {\n  content: '\\6a';\n}.datatable-icon-pin::before {\n  content: '\\6b';\n}.datatable-icon-add::before {\n  content: '\\6d';\n}.datatable-icon-left::before {\n  content: '\\6f';\n}.datatable-icon-right::before {\n  content: '\\70';\n}.datatable-icon-skip::before {\n  content: '\\71';\n}.datatable-icon-prev::before {\n  content: '\\72';\n}.ngx-datatable.material {\n  background: #fff;\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  /**\n  * Shared Styles\n  */\n  /**\n  * Global Row Styles\n  */\n  /**\n  * Header Styles\n  */\n  /**\n  * Body Styles\n  */\n  /**\n  * Footer Styles\n  */\n}.ngx-datatable.material.striped .datatable-row-odd {\n  background: #eee;\n}.ngx-datatable.material.single-selection .datatable-body-row.active, .ngx-datatable.material.single-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active, .ngx-datatable.material.multi-selection .datatable-body-row.active .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active, .ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}.ngx-datatable.material.single-selection .datatable-body-row.active:hover, .ngx-datatable.material.single-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-selection .datatable-body-row.active:hover .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}.ngx-datatable.material.single-selection .datatable-body-row.active:focus, .ngx-datatable.material.single-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-selection .datatable-body-row.active:focus .datatable-row-group, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus, .ngx-datatable.material.multi-click-selection .datatable-body-row.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:hover .datatable-row-group {\n  background-color: #eee;\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: linear;\n}.ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus, .ngx-datatable.material:not(.cell-selection) .datatable-body-row:focus .datatable-row-group {\n  background-color: #ddd;\n}.ngx-datatable.material.cell-selection .datatable-body-cell:hover, .ngx-datatable.material.cell-selection .datatable-body-cell:hover .datatable-row-group {\n  background-color: #eee;\n  transition-property: background;\n  transition-duration: 0.3s;\n  transition-timing-function: linear;\n}.ngx-datatable.material.cell-selection .datatable-body-cell:focus, .ngx-datatable.material.cell-selection .datatable-body-cell:focus .datatable-row-group {\n  background-color: #ddd;\n}.ngx-datatable.material.cell-selection .datatable-body-cell.active, .ngx-datatable.material.cell-selection .datatable-body-cell.active .datatable-row-group {\n  background-color: #304ffe;\n  color: #fff;\n}.ngx-datatable.material.cell-selection .datatable-body-cell.active:hover, .ngx-datatable.material.cell-selection .datatable-body-cell.active:hover .datatable-row-group {\n  background-color: #193ae4;\n  color: #fff;\n}.ngx-datatable.material.cell-selection .datatable-body-cell.active:focus, .ngx-datatable.material.cell-selection .datatable-body-cell.active:focus .datatable-row-group {\n  background-color: #2041ef;\n  color: #fff;\n}.ngx-datatable.material .empty-row {\n  height: 50px;\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}.ngx-datatable.material .loading-row {\n  text-align: left;\n  padding: 0.5rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n}.ngx-datatable.material .datatable-header .datatable-row-left,\n.ngx-datatable.material .datatable-body .datatable-row-left {\n  background-color: #fff;\n  background-position: 100% 0;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQIHWPSkNeSBmJhTQVtbiDNCgASagIIuJX8OgAAAABJRU5ErkJggg==);\n}.ngx-datatable.material .datatable-header .datatable-row-right,\n.ngx-datatable.material .datatable-body .datatable-row-right {\n  background-position: 0 0;\n  background-color: #fff;\n  background-repeat: repeat-y;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABCAYAAAD5PA/NAAAAFklEQVQI12PQkNdi1VTQ5gbSwkAsDQARLAIGtOSFUAAAAABJRU5ErkJggg==);\n}.ngx-datatable.material .datatable-header {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n}.ngx-datatable.material .datatable-header .datatable-header-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  font-weight: 400;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.54);\n  vertical-align: bottom;\n  font-size: 12px;\n  font-weight: 500;\n}.ngx-datatable.material .datatable-header .datatable-header-cell .datatable-header-cell-wrapper {\n  position: relative;\n}.ngx-datatable.material .datatable-header .datatable-header-cell.longpress .draggable::after {\n  transition: transform 400ms ease, opacity 400ms ease;\n  opacity: 0.5;\n  transform: scale(1);\n}.ngx-datatable.material .datatable-header .datatable-header-cell .draggable::after {\n  content: \" \";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -30px 0 0 -30px;\n  height: 60px;\n  width: 60px;\n  background: #eee;\n  border-radius: 100%;\n  opacity: 1;\n  filter: none;\n  transform: scale(0);\n  z-index: 9999;\n  pointer-events: none;\n}.ngx-datatable.material .datatable-header .datatable-header-cell.dragging .resize-handle {\n  border-right: none;\n}.ngx-datatable.material .datatable-header .resize-handle {\n  border-right: solid 1px #eee;\n}.ngx-datatable.material .datatable-body {\n  position: relative;\n}.ngx-datatable.material .datatable-body .datatable-row-detail {\n  background: #f5f5f5;\n  padding: 10px;\n}.ngx-datatable.material .datatable-body .datatable-group-header {\n  background: #f5f5f5;\n  border-bottom: solid 1px #d9d8d9;\n  border-top: solid 1px #d9d8d9;\n}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}.ngx-datatable.material .datatable-body .datatable-body-row .datatable-body-group-cell {\n  text-align: left;\n  padding: 0.9rem 1.2rem;\n  vertical-align: top;\n  border-top: 0;\n  color: rgba(0, 0, 0, 0.87);\n  transition: width 0.3s ease;\n  font-size: 14px;\n  font-weight: 400;\n}.ngx-datatable.material .datatable-body .progress-linear {\n  display: block;\n  position: -webkit-sticky;\n  position: sticky;\n  width: 100%;\n  height: 5px;\n  padding: 0;\n  margin: 0;\n  top: 0;\n}.ngx-datatable.material .datatable-body .progress-linear .container {\n  display: block;\n  position: relative;\n  overflow: hidden;\n  width: 100%;\n  height: 5px;\n  transform: translate(0, 0) scale(1, 1);\n  background-color: #aad1f9;\n}.ngx-datatable.material .datatable-body .progress-linear .container .bar {\n  transition: all 0.2s linear;\n  -webkit-animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  animation: query 0.8s infinite cubic-bezier(0.39, 0.575, 0.565, 1);\n  transition: transform 0.2s linear;\n  background-color: #106cc8;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n  height: 5px;\n}.ngx-datatable.material .datatable-footer {\n  border-top: 1px solid rgba(0, 0, 0, 0.12);\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(0, 0, 0, 0.54);\n}.ngx-datatable.material .datatable-footer .page-count {\n  line-height: 50px;\n  height: 50px;\n  padding: 0 1.2rem;\n}.ngx-datatable.material .datatable-footer .datatable-pager {\n  margin: 0 10px;\n}.ngx-datatable.material .datatable-footer .datatable-pager li {\n  vertical-align: middle;\n}.ngx-datatable.material .datatable-footer .datatable-pager li.disabled a {\n  color: rgba(0, 0, 0, 0.26) !important;\n  background-color: transparent !important;\n}.ngx-datatable.material .datatable-footer .datatable-pager li.active a {\n  background-color: rgba(158, 158, 158, 0.2);\n  font-weight: bold;\n}.ngx-datatable.material .datatable-footer .datatable-pager a {\n  height: 22px;\n  min-width: 24px;\n  line-height: 22px;\n  padding: 0 6px;\n  border-radius: 3px;\n  margin: 6px 3px;\n  text-align: center;\n  vertical-align: top;\n  color: rgba(0, 0, 0, 0.54);\n  text-decoration: none;\n  vertical-align: bottom;\n}.ngx-datatable.material .datatable-footer .datatable-pager a:hover {\n  color: rgba(0, 0, 0, 0.75);\n  background-color: rgba(158, 158, 158, 0.2);\n}.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-left,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-skip,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-right,\n.ngx-datatable.material .datatable-footer .datatable-pager .datatable-icon-prev {\n  font-size: 20px;\n  line-height: 20px;\n  padding: 0 3px;\n}.ngx-datatable.material .datatable-summary-row .datatable-body-row {\n  background-color: #ddd;\n}.ngx-datatable.material .datatable-summary-row .datatable-body-row:hover {\n  background-color: #ddd;\n}.ngx-datatable.material .datatable-summary-row .datatable-body-row .datatable-body-cell {\n  font-weight: bold;\n}/**\n * Checkboxes\n**/.datatable-checkbox {\n  position: relative;\n  margin: 0;\n  cursor: pointer;\n  vertical-align: middle;\n  display: inline-block;\n  box-sizing: border-box;\n  padding: 0;\n}.datatable-checkbox input[type=checkbox] {\n  position: relative;\n  margin: 0 1rem 0 0;\n  cursor: pointer;\n  outline: none;\n}.datatable-checkbox input[type=checkbox]:before {\n  transition: all 0.3s ease-in-out;\n  content: \"\";\n  position: absolute;\n  left: 0;\n  z-index: 1;\n  width: 1rem;\n  height: 1rem;\n  border: 2px solid #f2f2f2;\n}.datatable-checkbox input[type=checkbox]:checked:before {\n  transform: rotate(-45deg);\n  height: 0.5rem;\n  border-color: #009688;\n  border-top-style: none;\n  border-right-style: none;\n}.datatable-checkbox input[type=checkbox]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 1rem;\n  height: 1rem;\n  background: #fff;\n  cursor: pointer;\n}/**\n * Progress bar animations\n */@-webkit-keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1);\n  }\n}@keyframes query {\n  0% {\n    opacity: 1;\n    transform: translateX(35%) scale(0.3, 1);\n  }\n  100% {\n    opacity: 0;\n    transform: translateX(-50%) scale(0, 1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9hc3NldHMvaWNvbnMuY3NzIiwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0Bzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS90aGVtZXMvbWF0ZXJpYWwuc2NzcyIsIi4uLy4uLy4uL25ld2ludm9pY2UucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQixDQ0FoQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQiwrQkFBK0I7RUFDL0I7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRTtFQUNGOztJQUVFO0VBQ0Y7O0lBRUU7RUFDRjs7SUFFRSxFQUFFLENBQ0o7SUFDRSx3QkFBd0IsRUFBRSxDQUM1Qjs7O0lBS0Usc0JBQXNCLEVBQUUsQ0FDMUI7SUFDRSxnQkFBZ0IsRUFBRSxDQUNwQjtJQUNFLGtCQUFrQixFQUFFLENBQ3RCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGlDQUFpQyxFQUFFLENBQ3JDO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUI7TUFDbkIsZ0JBQWdCO01BQ2hCLHVCQUF1QixFQUFFLENBQzdCO0lBQ0UsbUJBQW1CLEVBQUUsQ0FDckI7TUFDRSxtQkFBbUIsRUFBRSxDQUNyQjtRQUNFLGdCQUFnQjtRQUNoQixtQkFBbUI7UUFDbkIsdUJBQXVCLEVBQUUsQ0FDM0I7UUFDRSxnQkFBZ0I7UUFDaEIsbUJBQW1CO1FBQ25CLHVCQUF1QixFQUFFLENBQy9COzs7SUFPRSxhQUFhO0lBQ2IsbUJBQW1CO0lBSW5CLGlCQUFpQjtJQUNqQixjQUFjLEVBQUUsQ0FDbEI7O0lBRUUsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsa0JBQWtCLEVBQUUsQ0FDcEI7O01BRUUsYUFBYSxFQUFFLENBQ25COztJQUVFLFVBQVUsRUFBRSxDQUNkOzs7O0lBSUUsa0JBQWtCLEVBQUUsQ0FDdEI7SUFDRSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUUsQ0FDbEI7TUFDRSxvQkFBb0I7TUFDcEIsNEJBQTRCLEVBQUUsQ0FDaEM7TUFDRSxrQkFBa0I7TUFDbEIscUJBQXFCLEVBQUUsQ0FDdkI7UUFDRSxlQUFlLEVBQUUsQ0FDbkI7UUFDRSxZQUFZLEVBQUUsQ0FDaEI7UUFDRSxpQkFBaUI7UUFDakIsc0JBQXNCO1FBQ3RCLHFCQUFxQjtRQUNyQixlQUFlLEVBQUUsQ0FDbkI7O1FBRUUscUJBQXFCO1FBQ3JCLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsY0FBYztRQUNkLGtCQUFrQixFQUFFLENBQ3RCO1FBQ0UsaUJBQWlCLEVBQUUsQ0FDckI7UUFDRSxtQkFBbUIsRUFBRSxDQUN2QjtRQUNFLG1CQUFtQixFQUFFLENBQ3ZCO1FBQ0Usa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixTQUFTLEVBQUUsQ0FDWDtVQUNFLFFBQVEsRUFBRSxDQUNaO1VBQ0UsT0FBTyxFQUFFLENBQ2I7UUFDRSxlQUFlLEVBQUUsQ0FDdkI7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGNBQWMsRUFBRSxDQUNoQjtNQUNFLHFCQUFxQixFQUFFLENBQ3pCO01BQ0Usa0JBQWtCLEVBQUUsQ0FDdEI7TUFLRSxhQUFhO01BT2Isc0JBQXNCLEVBQUUsQ0FDMUI7TUFDRSxhQUFhLEVBQUUsQ0FDZjtRQUtFLGFBQWEsRUFBRSxDQUNyQjtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsY0FBYyxFQUFFLENBQ2hCO01BQ0UsYUFBYTtNQUNiLG1CQUFtQjtNQUNuQixXQUFXLEVBQUUsQ0FDZjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWEsRUFBRSxDQUNqQjtNQUNFLGFBQWE7TUFDYixpQkFBaUIsRUFBRSxDQUNuQjs7UUFFRSxVQUFVO1FBQ1YsU0FBUztRQUNULHFCQUFxQjtRQUNyQixnQkFBZ0IsRUFBRSxDQUNwQjs7UUFFRSxhQUFhLEVBQUUsQ0FDakI7UUFDRSxlQUFlO1FBQ2YscUJBQXFCLEVBQUUsQ0FDekI7UUFDRSxtQkFBbUIsRUFBRSxDQ3JNN0I7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FBQSxDRkVBO0VBQ0UseUJBQXlCO0VBQ3pCLDBCQUFnQztFQUNoQzs0RkFDc0c7RUFDdEcsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQixDQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLHdCQUF3QjtFQUN4Qiw2QkFBNkI7RUFDN0IsOEJBQThCO0VBQzlCLCtCQUErQjtFQUMvQiwrQkFBK0I7RUFDL0IsV0FBVztFQUNYLGNBQWM7RUFDZCxtQ0FBbUM7RUFDbkMsa0NBQWtDO0FBQ3BDLENBRUE7O0VBRUUsb0NBQW9DO0VBQ3BDLDZCQUE2QjtFQUM3Qiw4QkFBOEI7RUFDOUIsK0JBQStCO0VBQy9CLCtCQUErQjtFQUMvQixXQUFXO0VBQ1gsY0FBYztFQUNkLG1DQUFtQztFQUNuQyxrQ0FBa0M7QUFDcEMsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7RUFDZCxZQUFZO0FBQ2QsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0FFQTtFQUNFLGNBQWM7QUFDaEIsQ0VwQ0E7RUFDRSxnQkFsRHlCO0VBbUR6QixxSEFsRHlCO0VBc0l6Qjs7R0FBQTtFQWtCQTs7R0FBQTtFQW9CQTs7R0FBQTtFQXlEQTs7R0FBQTtFQW9GQTs7R0FBQTtBQ3hTRixDRG9DSTtFQUNFLGdCQXBENkI7QUNrQm5DLENEMENNO0VBRUUseUJBbERtQztFQW1EbkMsV0FsRDhCO0FDU3RDLENENENNO0VBRUUseUJBdER5QztFQXVEekMsV0F0RG9DO0FDVzVDLENEOENNO0VBRUUseUJBMUR5QztFQTJEekMsV0ExRG9DO0FDYTVDLENEb0RNO0VBRUUsc0JBaEZpQztFQWlGakMsK0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtDQUFBO0FDbkRSLENEc0RNO0VBRUUsc0JBdkZpQztBQ2tDekMsQ0Q0RE07RUFFRSxzQkE3RnVDO0VBOEZ2QywrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0NBQUE7QUMzRFIsQ0Q4RE07RUFFRSxzQkFwR3VDO0FDdUMvQyxDRGdFTTtFQUVFLHlCQXRHbUM7RUF1R25DLFdBdEc4QjtBQ3VDdEMsQ0RrRU07RUFFRSx5QkExR3lDO0VBMkd6QyxXQTFHb0M7QUN5QzVDLENEb0VNO0VBRUUseUJBOUd5QztFQStHekMsV0E5R29DO0FDMkM1QyxDRDJFRTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDekVKLENENEVFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQzFFSixDRGtGSTs7RUFDRSxzQkEvSnFCO0VBZ0tyQiwyQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUpBQUE7QUMvRU4sQ0RrRkk7O0VBQ0Usd0JBQUE7RUFDQSxzQkF2S3FCO0VBd0tyQiwyQkFBQTtFQUNBLHlKQUFBO0FDL0VOLENEc0ZFO0VBQ0UsNENBQUE7QUNwRkosQ0RzRkk7RUFDRSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFoSzZCO0VBaUs3QiwwQkFoS3dCO0VBaUt4QixzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ3BGTixDRHNGTTtFQUNFLGtCQUFBO0FDcEZSLENEd0ZRO0VBQ0Usb0RBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUN0RlYsQ0QwRk07RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ3hGUixDRDRGUTtFQUNFLGtCQUFBO0FDMUZWLENEK0ZJO0VBQ0UsNEJBQUE7QUM3Rk4sQ0RvR0U7RUFDRSxrQkFBQTtBQ2xHSixDRG9HSTtFQUNFLG1CQWhONEI7RUFpTjVCLGFBQUE7QUNsR04sQ0RxR0k7RUFDRSxtQkFuTjhCO0VBb045QixnQ0FBQTtFQUNBLDZCQUFBO0FDbkdOLENEdUdNO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQS9Ob0I7RUFnT3BCLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDckdSLENENEdNO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQTlPb0I7RUErT3BCLDJCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDMUdSLENEOEdJO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsTUFBQTtBQzVHTixDRDhHTTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFFQSxzQ0FBQTtFQUNBLHlCQUFBO0FDNUdSLENEOEdRO0VBQ0UsMkJBQUE7RUFDQSwwRUFBQTtFQUNBLGtFQUFBO0VBR0EsaUNBQUE7RUFDQSx5QkFBQTtFQUVBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUM5R1YsQ0R1SEU7RUFDRSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQTdSMEI7QUN3SzlCLENEdUhJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNySE4sQ0R3SEk7RUFDRSxjQUFBO0FDdEhOLENEd0hNO0VBQ0Usc0JBQUE7QUN0SFIsQ0R3SFE7RUFDRSxxQ0FBQTtFQUNBLHdDQUFBO0FDdEhWLENEeUhRO0VBQ0UsMENBMVMwQjtFQTJTMUIsaUJBQUE7QUN2SFYsQ0QySE07RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkE3VGdCO0VBOFRoQixxQkFBQTtFQUNBLHNCQUFBO0FDekhSLENEMkhRO0VBQ0UsMEJBalVvQjtFQWtVcEIsMENBalV5QjtBQ3dNbkMsQ0Q2SE07Ozs7RUFJRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDM0hSLENEa0lJO0VBQ0Usc0JBN1U2QjtBQzZNbkMsQ0RrSU07RUFDRSxzQkEvVWlDO0FDK016QyxDRG1JTTtFQUNFLGlCQUFBO0FDaklSLENEdUlBOztFQUFBLENBR0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ3BJRixDRHNJRTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQ3BJSixDRHNJSTtFQUdFLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDcElOLENEdUlJO0VBSUUseUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0FDcklOLENEd0lJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ3RJTixDRDJJQTs7RUFBQSxDQUdBO0VBQ0U7SUFDRSxVQUFBO0lBQ0Esd0NBQUE7RUN4SUY7RUQySUE7SUFDRSxVQUFBO0lBQ0EsdUNBQUE7RUN6SUY7QUFDRixDRGdJQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLHdDQUFBO0VDeElGO0VEMklBO0lBQ0UsVUFBQTtJQUNBLHVDQUFBO0VDeklGO0FBQ0YiLCJmaWxlIjoibmV3aW52b2ljZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnO1xuICBzcmM6IHVybCgnZm9udHMvZGF0YS10YWJsZS5lb3QnKTtcbiAgc3JjOiB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgdXJsKCdmb250cy9kYXRhLXRhYmxlLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSxcbiAgICB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCB1cmwoJ2ZvbnRzL2RhdGEtdGFibGUuc3ZnI2RhdGEtdGFibGUnKSBmb3JtYXQoJ3N2ZycpO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5cbltkYXRhLWljb25dOjpiZWZvcmUge1xuICBmb250LWZhbWlseTogJ2RhdGEtdGFibGUnICFpbXBvcnRhbnQ7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS1pY29uKTtcbiAgZm9udC1zdHlsZTogbm9ybWFsICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC12YXJpYW50OiBub3JtYWwgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgc3BlYWs6IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzXj0nZGF0YXRhYmxlLWljb24tJ106OmJlZm9yZSxcbltjbGFzcyo9JyBkYXRhdGFibGUtaWNvbi0nXTo6YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6ICdkYXRhLXRhYmxlJyAhaW1wb3J0YW50O1xuICBmb250LXN0eWxlOiBub3JtYWwgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbCAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBzcGVhazogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZmlsdGVyOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Mic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jb2xsYXBzZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZXhwYW5kOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Myc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1jbG9zZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjQnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tdXA6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY1Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWRvd246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY2Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNvcnQtdW5zZXQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDYzJztcbiAgb3BhY2l0eTogMC41O1xufVxuXG4uZGF0YXRhYmxlLWljb24tc29ydDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjcnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZTo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNjgnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tZG9uZS1hbGw6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDY5Jztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXNlYXJjaDo6YmVmb3JlIHtcbiAgY29udGVudDogJ1xcNmEnO1xufVxuXG4uZGF0YXRhYmxlLWljb24tcGluOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw2Yic7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1hZGQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZkJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLWxlZnQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICdcXDZmJztcbn1cblxuLmRhdGF0YWJsZS1pY29uLXJpZ2h0OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MCc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1za2lwOjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3MSc7XG59XG5cbi5kYXRhdGFibGUtaWNvbi1wcmV2OjpiZWZvcmUge1xuICBjb250ZW50OiAnXFw3Mic7XG59XG4iLCIubmd4LWRhdGF0YWJsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAvKipcbiAgICogVmVydGljYWwgU2Nyb2xsaW5nIEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogSG9yaXpvbnRhbCBTY3JvbGxpbmcgQWRqdXN0bWVudHNcbiAgICovXG4gIC8qKlxuICAgKiBGaXhlZCBIZWFkZXIgSGVpZ2h0IEFkanVzdG1lbnRzXG4gICAqL1xuICAvKipcbiAgICogRml4ZWQgcm93IGhlaWdodCBhZGp1c3RtZW50c1xuICAgKi9cbiAgLyoqXG4gICAqIFNoYXJlZCBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBIZWFkZXIgU3R5bGVzXG4gICAqL1xuICAvKipcbiAgICogQm9keSBTdHlsZXNcbiAgICovXG4gIC8qKlxuICAgKiBGb290ZXIgU3R5bGVzXG4gICAqLyB9XG4gIC5uZ3gtZGF0YXRhYmxlIFtoaWRkZW5dIHtcbiAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cbiAgLm5neC1kYXRhdGFibGUgKixcbiAgLm5neC1kYXRhdGFibGUgKjpiZWZvcmUsXG4gIC5uZ3gtZGF0YXRhYmxlICo6YWZ0ZXIge1xuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxuICAubmd4LWRhdGF0YWJsZS5zY3JvbGwtdmVydGljYWwgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC12ZXJ0aWNhbC52aXJ0dWFsaXplZCAuZGF0YXRhYmxlLWJvZHkgLmRhdGF0YWJsZS1yb3ctd3JhcHBlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlLnNjcm9sbC1ob3J6IC5kYXRhdGFibGUtYm9keSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IH1cbiAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLm5neC1kYXRhdGFibGUuZml4ZWQtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWlubmVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZS5maXhlZC1yb3cgLmRhdGF0YWJsZS1zY3JvbGwgLmRhdGF0YWJsZS1ib2R5LXJvdyAuZGF0YXRhYmxlLWJvZHktZ3JvdXAtY2VsbCB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1yb3csXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWNlbnRlcixcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgLXdlYmtpdC1mbGV4LWZsb3c6IHJvdztcbiAgICAtbW96LWZsZXgtZmxvdzogcm93O1xuICAgIC1tcy1mbGV4LWZsb3c6IHJvdztcbiAgICAtby1mbGV4LWZsb3c6IHJvdztcbiAgICBmbGV4LWZsb3c6IHJvdzsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWJvZHktY2VsbCxcbiAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjYyNTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keS1jZWxsOmZvY3VzLFxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyLWNlbGw6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgei1pbmRleDogOTsgfVxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1sZWZ0LFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1jZW50ZXIsXG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtcm93LWdyb3VwLFxuICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItaW5uZXIge1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAtd2Via2l0LWFsaWduLWl0ZW1zOiBzdHJldGNoOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwuc29ydGFibGUgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC13cmFwcGVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLmxvbmdwcmVzcyAuZGF0YXRhYmxlLWhlYWRlci1jZWxsLXdyYXBwZXIge1xuICAgICAgICBjdXJzb3I6IG1vdmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnNvcnQtYnRuIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwMCU7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWhlYWRlciAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIC5yZXNpemUtaGFuZGxlLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgIHBhZGRpbmc6IDAgNHB4O1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnJlc2l6ZS1oYW5kbGUge1xuICAgICAgICBjdXJzb3I6IGV3LXJlc2l6ZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC5yZXNpemVhYmxlOmhvdmVyIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbDpob3ZlciAucmVzaXplLWhhbmRsZS0tbm90LXJlc2l6YWJsZSB7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLnRhcmdldE1hcmtlciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tTGVmdCB7XG4gICAgICAgICAgcmlnaHQ6IDA7IH1cbiAgICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1oZWFkZXIgLmRhdGF0YWJsZS1oZWFkZXItY2VsbCAudGFyZ2V0TWFya2VyLmRyYWdGcm9tUmlnaHQge1xuICAgICAgICAgIGxlZnQ6IDA7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtaGVhZGVyIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwgLmRhdGF0YWJsZS1oZWFkZXItY2VsbC10ZW1wbGF0ZS13cmFwIHtcbiAgICAgICAgaGVpZ2h0OiBpbmhlcml0OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGRpc3BsYXk6IGJsb2NrOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtc2Nyb2xsIHtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgb3ZlcmZsb3cteTogaGlkZGVuOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1ib2R5IC5kYXRhdGFibGUtcm93LXdyYXBwZXIge1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICBkaXNwbGF5OiAtbW96LWJveDtcbiAgICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtd2Via2l0LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIC1tb3otYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgICAtbW96LWJveC1kaXJlY3Rpb246IG5vcm1hbDtcbiAgICAgIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93IHtcbiAgICAgIG91dGxpbmU6IG5vbmU7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtYm9keSAuZGF0YXRhYmxlLWJvZHktcm93ID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgIGRpc3BsYXk6IC1tb3otYm94O1xuICAgICAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcbiAgICAgICAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4OyB9XG4gIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtZm9vdGVyLWlubmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuc2VsZWN0ZWQtY291bnQgLnBhZ2UtY291bnQge1xuICAgICAgZmxleDogMSAxIDQwJTsgfVxuICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5zZWxlY3RlZC1jb3VudCAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIGZsZXg6IDEgMSA2MCU7IH1cbiAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAucGFnZS1jb3VudCB7XG4gICAgICBmbGV4OiAxIDEgMjAlOyB9XG4gICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciB7XG4gICAgICBmbGV4OiAxIDEgODAlO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgICAgIC5uZ3gtZGF0YXRhYmxlIC5kYXRhdGFibGUtZm9vdGVyIC5kYXRhdGFibGUtcGFnZXIgLnBhZ2VyLFxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbGlzdC1zdHlsZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGksXG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaSBhIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgICAgLm5neC1kYXRhdGFibGUgLmRhdGF0YWJsZS1mb290ZXIgLmRhdGF0YWJsZS1wYWdlciAucGFnZXIgbGkgYSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG4gICAgICAubmd4LWRhdGF0YWJsZSAuZGF0YXRhYmxlLWZvb3RlciAuZGF0YXRhYmxlLXBhZ2VyIC5wYWdlciBsaS5kaXNhYmxlZCBhIHtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxuIiwiLypcbiAgVGhpcyBzdHlsZXNoZWV0IHVzZXMgc2NzcyB2YWxpYWJsZXMgZm9yIG1vc3Qgb2YgdGhlIGNvbG9ycyAvIGJhY2tncm91bmQtY29sb3JzIG9mIHRoZSB0YWJsZVxuICB0byBlbmFibGUgdGhlIGN1c3RvbWl6YXRpb24gb2YgdGhlIGRpc3BsYXllZCB0YWJsZSB3aXRob3V0IGNsb25pbmcgdGhlIHN0eWxlc2hlZXQgaW50byB0aGVcbiAgb3duIGFwcGxpY2F0aW9uLlxuXG4gIFRvIG1vZGlmeSB0YWJsZSBjb2xvcnMsIGFkZCB0aGUgZm9sbG93aW5nIGxpbmVzIHRvIHRoZSBzY3NzIGZpbGUgb2YgeW91ciBhcHBsaWNhdGlvblxuICAodGhpcyBleGFtcGxlIG1vZGlmaWVzIHRoZSBjb2xvciBvZiB0aGUgc2VsZWN0ZWQgcm93IC0gc2VsZWN0aW9uVHlwZSA9IHNpbmdsZSwgbXVsdGkgb3IgbXVsdGlDbGljayk6XG5cbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ6IHllbGxvdztcbiAgJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6IHJnYmEoeWVsbG93LCAwLjIpO1xuXG4gIEBpbXBvcnQgJ35Ac3dpbWxhbmUvbmd4LWRhdGF0YWJsZS9pbmRleC5jc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL21hdGVyaWFsLnNjc3MnO1xuICBAaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvYXNzZXRzL2ljb25zLmNzcyc7XG5cblRoYXQncyBhbGwuXG4qL1xuXG4vLyBjb21tb24gZGF0YXRhYmxlIGNvbG9yc1xuJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDogI2ZmZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSxcbiAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZDogI2VlZSAhZGVmYXVsdDtcblxuLy8gZGVmYXVsdCByb3cgYW5kIGNlbGwgYmFja2dyb3VuZCBjb2xvcnNcbiRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZDogI2ZmZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZC1ob3ZlcjogI2VlZSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWRlZmF1bHQtYmFja2dyb3VuZC1mb2N1czogI2RkZCAhZGVmYXVsdDtcblxuLy8gZGVmYXVsdCBiYWNrZ3JvdW5kIGNvbG9ycyBmb3IgY2VsbCBzZWxlY3Rpb24gc3R5bGVcbiRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1ob3ZlcjogI2VlZSAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1mb2N1czogI2RkZCAhZGVmYXVsdDtcblxuLy8gYmFja2dyb3VuZCBhbmQgdGV4dCBjb2xvcnMgZm9yIHNlbGVjdGVkIGNlbGwgLyByb3dcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kOiAjMzA0ZmZlICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yOiAjZmZmICFkZWZhdWx0O1xuJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI6ICMxOTNhZTQgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItaG92ZXI6ICNmZmYgIWRlZmF1bHQ7XG4kbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1mb2N1czogIzIwNDFlZiAhZGVmYXVsdDtcbiRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1mb2N1czogI2ZmZiAhZGVmYXVsdDtcblxuLy8gY29sb3JzIGZvciBoZWFkZXIgZWxlbWVudHNcbiRkYXRhdGFibGUtaGVhZGVyLWNlbGwtYmFja2dyb3VuZDogI2ZmZiAhZGVmYXVsdDtcbiRkYXRhdGFibGUtaGVhZGVyLWNlbGwtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWhlYWRlci1ib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1oZWFkZXItcmVzaXplLWhhbmRsZS1jb2xvcjogI2VlZSAhZGVmYXVsdDtcblxuLy8gY29sb3JzIGZvciB0YWJsZSBib2R5IGVsZW1lbnRzXG4kZGF0YXRhYmxlLXJvdy1kZXRhaWwtYmFja2dyb3VuZDogI2Y1ZjVmNSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtYm9keS1jZWxsLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYmFja2dyb3VuZDogI2Y1ZjVmNSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJvcmRlci10b3AtY29sb3I6ICNkOWQ4ZDkgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1ib3JkZXItYm90dG9tLWNvbG9yOiAjZDlkOGQ5ICFkZWZhdWx0O1xuXG4vLyBjb2xvcnMgZm9yIGZvb3RlciBlbGVtZW50c1xuJGRhdGF0YWJsZS1mb290ZXItY2VsbC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtZm9vdGVyLWJvcmRlci10b3AtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xMikgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1jb2xvci1ob3ZlcjogcmdiYSgwLCAwLCAwLCAwLjc1KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItYmFja2dyb3VuZC1ob3ZlcjogcmdiYSgxNTgsIDE1OCwgMTU4LCAwLjIpICFkZWZhdWx0O1xuJGRhdGF0YWJsZS1wYWdlci1kaXNhYmxlZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KSAhZGVmYXVsdDtcbiRkYXRhdGFibGUtcGFnZXItZGlzYWJsZWQtYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWRlZmF1bHQ7XG4kZGF0YXRhYmxlLXBhZ2VyLWFjdGl2ZS1iYWNrZ3JvdW5kOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuMikgIWRlZmF1bHQ7XG5cbi8vIGNvbG9ycyBmb3Igc3VtbWFyeSByb3cgZWxlbWVudHNcbiRkYXRhdGFibGUtc3VtbWFyeS1yb3ctYmFja2dyb3VuZDogI2RkZCAhZGVmYXVsdDtcbiRkYXRhdGFibGUtc3VtbWFyeS1yb3ctYmFja2dyb3VuZC1ob3ZlcjogI2RkZCAhZGVmYXVsdDtcblxuLm5neC1kYXRhdGFibGUubWF0ZXJpYWwge1xuICBiYWNrZ3JvdW5kOiAkbmd4LWRhdGF0YWJsZS1iYWNrZ3JvdW5kO1xuICBib3gtc2hhZG93OiAkbmd4LWRhdGF0YWJsZS1ib3gtc2hhZG93O1xuXG4gICYuc3RyaXBlZCB7XG4gICAgLmRhdGF0YWJsZS1yb3ctb2RkIHtcbiAgICAgIGJhY2tncm91bmQ6ICRuZ3gtZGF0YXRhYmxlLXJvdy1vZGQtYmFja2dyb3VuZDtcbiAgICB9XG4gIH1cblxuICAmLnNpbmdsZS1zZWxlY3Rpb24sXG4gICYubXVsdGktc2VsZWN0aW9uLFxuICAmLm11bHRpLWNsaWNrLXNlbGVjdGlvbiB7XG4gICAgLmRhdGF0YWJsZS1ib2R5LXJvdyB7XG4gICAgICAmLmFjdGl2ZSxcbiAgICAgICYuYWN0aXZlIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQ7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3I7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmhvdmVyLFxuICAgICAgJi5hY3RpdmU6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1ob3ZlcjtcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1ob3ZlcjtcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmU6Zm9jdXMsXG4gICAgICAmLmFjdGl2ZTpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kLWZvY3VzO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yLWZvY3VzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICY6bm90KC5jZWxsLXNlbGVjdGlvbikge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgJjpob3ZlcixcbiAgICAgICY6aG92ZXIgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1kZWZhdWx0LWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IGJhY2tncm91bmQ7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgICY6Zm9jdXMsXG4gICAgICAmOmZvY3VzIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtZGVmYXVsdC1iYWNrZ3JvdW5kLWZvY3VzO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYuY2VsbC1zZWxlY3Rpb24ge1xuICAgIC5kYXRhdGFibGUtYm9keS1jZWxsIHtcbiAgICAgICY6aG92ZXIsXG4gICAgICAmOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtY2VsbHNlbGVjdGlvbi1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBiYWNrZ3JvdW5kO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjNzO1xuICAgICAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgICAgfVxuXG4gICAgICAmOmZvY3VzLFxuICAgICAgJjpmb2N1cyAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLWNlbGxzZWxlY3Rpb24tYmFja2dyb3VuZC1mb2N1cztcbiAgICAgIH1cblxuICAgICAgJi5hY3RpdmUsXG4gICAgICAmLmFjdGl2ZSAuZGF0YXRhYmxlLXJvdy1ncm91cCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1iYWNrZ3JvdW5kO1xuICAgICAgICBjb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWNvbG9yO1xuICAgICAgfVxuXG4gICAgICAmLmFjdGl2ZTpob3ZlcixcbiAgICAgICYuYWN0aXZlOmhvdmVyIC5kYXRhdGFibGUtcm93LWdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtc2VsZWN0ZWQtYWN0aXZlLWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIGNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtY29sb3ItaG92ZXI7XG4gICAgICB9XG5cbiAgICAgICYuYWN0aXZlOmZvY3VzLFxuICAgICAgJi5hY3RpdmU6Zm9jdXMgLmRhdGF0YWJsZS1yb3ctZ3JvdXAge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1zZWxlY3RlZC1hY3RpdmUtYmFja2dyb3VuZC1mb2N1cztcbiAgICAgICAgY29sb3I6ICRuZ3gtZGF0YXRhYmxlLXNlbGVjdGVkLWFjdGl2ZS1jb2xvci1mb2N1cztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcblx0ICogU2hhcmVkIFN0eWxlc1xuXHQgKi9cbiAgLmVtcHR5LXJvdyB7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDA7XG4gIH1cblxuICAubG9hZGluZy1yb3cge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZzogMC41cmVtIDEuMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIGJvcmRlci10b3A6IDA7XG4gIH1cblxuICAvKipcblx0ICogR2xvYmFsIFJvdyBTdHlsZXNcblx0ICovXG4gIC5kYXRhdGFibGUtaGVhZGVyLFxuICAuZGF0YXRhYmxlLWJvZHkge1xuICAgIC5kYXRhdGFibGUtcm93LWxlZnQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5neC1kYXRhdGFibGUtYmFja2dyb3VuZDtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDEwMCUgMDtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteTtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUJDQVlBQUFENVBBL05BQUFBRmtsRVFWUUlIV1BTa05lU0JtSmhUUVZ0YmlETkNnQVNhZ0lJdUpYOE9nQUFBQUJKUlU1RXJrSmdnZz09KTtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLXJvdy1yaWdodCB7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwIDA7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbmd4LWRhdGF0YWJsZS1iYWNrZ3JvdW5kO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC15O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQVFBQUFBQkNBWUFBQUQ1UEEvTkFBQUFGa2xFUVZRSTEyUFFrTmRpMVZUUTVnYlN3a0FzRFFBUkxBSUd0T1NGVUFBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBIZWFkZXIgU3R5bGVzXG5cdCAqL1xuICAuZGF0YXRhYmxlLWhlYWRlciB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRkYXRhdGFibGUtaGVhZGVyLWJvcmRlci1ib3R0b20tY29sb3I7XG5cbiAgICAuZGF0YXRhYmxlLWhlYWRlci1jZWxsIHtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtaGVhZGVyLWNlbGwtYmFja2dyb3VuZDtcbiAgICAgIGNvbG9yOiAkZGF0YXRhYmxlLWhlYWRlci1jZWxsLWNvbG9yO1xuICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgIC5kYXRhdGFibGUtaGVhZGVyLWNlbGwtd3JhcHBlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgJi5sb25ncHJlc3Mge1xuICAgICAgICAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDQwMG1zIGVhc2UsIG9wYWNpdHkgNDAwbXMgZWFzZTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuZHJhZ2dhYmxlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcgJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW46IC0zMHB4IDAgMCAtMzBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZmlsdGVyOiBub25lO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB6LWluZGV4OiA5OTk5O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJi5kcmFnZ2luZyB7XG4gICAgICAgIC5yZXNpemUtaGFuZGxlIHtcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAucmVzaXplLWhhbmRsZSB7XG4gICAgICBib3JkZXItcmlnaHQ6IHNvbGlkIDFweCAkZGF0YXRhYmxlLWhlYWRlci1yZXNpemUtaGFuZGxlLWNvbG9yO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuXHQgKiBCb2R5IFN0eWxlc1xuXHQgKi9cbiAgLmRhdGF0YWJsZS1ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuZGF0YXRhYmxlLXJvdy1kZXRhaWwge1xuICAgICAgYmFja2dyb3VuZDogJGRhdGF0YWJsZS1yb3ctZGV0YWlsLWJhY2tncm91bmQ7XG4gICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtZ3JvdXAtaGVhZGVyIHtcbiAgICAgIGJhY2tncm91bmQ6ICRkYXRhdGFibGUtZ3JvdXAtaGVhZGVyLWJhY2tncm91bmQ7XG4gICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggJGRhdGF0YWJsZS1ncm91cC1oZWFkZXItYm9yZGVyLWJvdHRvbS1jb2xvcjtcbiAgICAgIGJvcmRlci10b3A6IHNvbGlkIDFweCAkZGF0YXRhYmxlLWdyb3VwLWhlYWRlci1ib3JkZXItdG9wLWNvbG9yO1xuICAgIH1cblxuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgLmRhdGF0YWJsZS1ib2R5LWNlbGwge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1ib2R5LWNlbGwtY29sb3I7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuXG4gICAgICAgIC8vIGNlbGwgYWN0aXZlIGNsYXNzXG4gICAgICAgIC8vICYuYWN0aXZlIHtcbiAgICAgICAgLy8gIGJhY2tncm91bmQ6ICMwODI5ZTBcbiAgICAgICAgLy8gfVxuICAgICAgfVxuICAgICAgLmRhdGF0YWJsZS1ib2R5LWdyb3VwLWNlbGwge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nOiAwLjlyZW0gMS4ycmVtO1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgICAgICBib3JkZXItdG9wOiAwO1xuICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1ib2R5LWNlbGwtY29sb3I7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5wcm9ncmVzcy1saW5lYXIge1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDVweDtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICB0b3A6IDA7XG5cbiAgICAgIC5jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgMCkgc2NhbGUoMSwgMSk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApIHNjYWxlKDEsIDEpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTcwLCAyMDksIDI0OSk7XG5cbiAgICAgICAgLmJhciB7XG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgbGluZWFyO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBxdWVyeSAwLjhzIGluZmluaXRlIGN1YmljLWJlemllcigwLjM5LCAwLjU3NSwgMC41NjUsIDEpO1xuICAgICAgICAgIGFuaW1hdGlvbjogcXVlcnkgMC44cyBpbmZpbml0ZSBjdWJpYy1iZXppZXIoMC4zOSwgMC41NzUsIDAuNTY1LCAxKTtcblxuICAgICAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuMnMgbGluZWFyO1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGxpbmVhcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTYsIDEwOCwgMjAwKTtcblxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKipcblx0ICogRm9vdGVyIFN0eWxlc1xuXHQgKi9cbiAgLmRhdGF0YWJsZS1mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkZGF0YXRhYmxlLWZvb3Rlci1ib3JkZXItdG9wLWNvbG9yO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGNvbG9yOiAkZGF0YXRhYmxlLWZvb3Rlci1jZWxsLWNvbG9yO1xuXG4gICAgLnBhZ2UtY291bnQge1xuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEuMnJlbTtcbiAgICB9XG5cbiAgICAuZGF0YXRhYmxlLXBhZ2VyIHtcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xuXG4gICAgICBsaSB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICAgICAgJi5kaXNhYmxlZCBhIHtcbiAgICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1wYWdlci1kaXNhYmxlZC1jb2xvciAhaW1wb3J0YW50O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXRhdGFibGUtcGFnZXItZGlzYWJsZWQtYmFja2dyb3VuZCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hY3RpdmUgYSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1wYWdlci1hY3RpdmUtYmFja2dyb3VuZDtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBhIHtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICBtaW4td2lkdGg6IDI0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW46IDZweCAzcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgY29sb3I6ICRkYXRhdGFibGUtcGFnZXItY29sb3I7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBjb2xvcjogJGRhdGF0YWJsZS1wYWdlci1jb2xvci1ob3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGF0YXRhYmxlLXBhZ2VyLWJhY2tncm91bmQtaG92ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmRhdGF0YWJsZS1pY29uLWxlZnQsXG4gICAgICAuZGF0YXRhYmxlLWljb24tc2tpcCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1yaWdodCxcbiAgICAgIC5kYXRhdGFibGUtaWNvbi1wcmV2IHtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAzcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gU3VtbWFyeSByb3cgc3R5bGVzXG4gIC5kYXRhdGFibGUtc3VtbWFyeS1yb3cge1xuICAgIC5kYXRhdGFibGUtYm9keS1yb3cge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1zdW1tYXJ5LXJvdy1iYWNrZ3JvdW5kO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhdGF0YWJsZS1zdW1tYXJ5LXJvdy1iYWNrZ3JvdW5kLWhvdmVyO1xuICAgICAgfVxuXG4gICAgICAuZGF0YXRhYmxlLWJvZHktY2VsbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENoZWNrYm94ZXNcbioqL1xuLmRhdGF0YWJsZS1jaGVja2JveCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcGFkZGluZzogMDtcblxuICBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAwIDFyZW0gMCAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIC1tb3otdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNmMmYyZjI7XG4gICAgfVxuXG4gICAgJjpjaGVja2VkOmJlZm9yZSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAtbW96LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgICBoZWlnaHQ6IDAuNXJlbTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwOTY4ODtcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IG5vbmU7XG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB3aWR0aDogMXJlbTtcbiAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUHJvZ3Jlc3MgYmFyIGFuaW1hdGlvbnNcbiAqL1xuQGtleWZyYW1lcyBxdWVyeSB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgzNSUpIHNjYWxlKDAuMywgMSk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSBzY2FsZSgwLCAxKTtcbiAgfVxufVxuIiwiQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2luZGV4LmNzcyc7XG5AaW1wb3J0ICd+QHN3aW1sYW5lL25neC1kYXRhdGFibGUvdGhlbWVzL21hdGVyaWFsLnNjc3MnO1xuQGltcG9ydCAnfkBzd2ltbGFuZS9uZ3gtZGF0YXRhYmxlL2Fzc2V0cy9pY29ucy5jc3MnOyJdfQ== */";
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


      var dom_to_image__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! dom-to-image */
      "cLAn");
      /* harmony import */


      var dom_to_image__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dom_to_image__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var buffer__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! buffer */
      "tjlA");
      /* harmony import */


      var buffer__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_13__);

      var NewinvoicePage = /*#__PURE__*/function () {
        function NewinvoicePage(dbService, tostService, navCtrl, printService, validationService, datepipe) {
          _classCallCheck(this, NewinvoicePage);

          this.dbService = dbService;
          this.tostService = tostService;
          this.navCtrl = navCtrl;
          this.printService = printService;
          this.validationService = validationService;
          this.datepipe = datepipe;
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
          key: "printBill",
          value: function printBill() {
            try {
              var result = this.getFormatedContent();
              this.printService.sendToBluetoothPrinter(this.profile.selectedPrinter, result);
              return this.navCtrl.navigateRoot('invoice');
            } catch (reason) {
              this.tostService.presentToast("Print Failed" + reason);
            }
          }
        }, {
          key: "getImage",
          value: function getImage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var node, img;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      node = document.getElementById("content");
                      img = new Image();
                      dom_to_image__WEBPACK_IMPORTED_MODULE_12___default.a.toPng(node).then(function (dataUrl) {
                        var _this5 = this;

                        img.src = dataUrl;
                        var encoder = new esc_pos_encoder_ionic__WEBPACK_IMPORTED_MODULE_10___default.a();
                        var result = encoder.initialize();
                        img.src = dataUrl;

                        img.onload = function () {
                          var ht = Math.ceil(node.offsetHeight / 8) * 8;
                          ht = ht + 120;
                          result.align('left').image(img, 520, ht, 'threshold', 128);

                          _this5.printService.sendToBluetoothPrinter(_this5.profile.selectedPrinter, result);

                          console.log('print called');
                        };
                      })["catch"](function (error) {
                        console.error("oops, something went wrong!", error);
                      });

                    case 3:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
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


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button menu=\"mainmenu\"> \n\n      </ion-menu-button>\n    </ion-buttons> \n   \n    <ion-title>New Invoice</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <div id=\"content\">\n  <div class=\"row\"></div>\n   \n <ion-select style=\"margin-top: 2%;height: 30px;margin-right: 4%;\" (ionChange)=\"populateCustomerProducts()\" [(ngModel)]=\"invoice.customer\" placeholder=\"Select Customer\">\n  <ion-select-option *ngFor=\"let cus of customerList\" [value]=\"cus\">{{cus.name}}</ion-select-option>\n</ion-select>\n<!--<ion-item>\n  <ion-label>Product</ion-label>\n  <ionic-selectable style=\"height: 30px;\"\n    \n    [(ngModel)]=\"product\"\n    [items]=\"products\"\n    itemValueField=\"name\"\n    itemTextField=\"name\"\n    [canSearch]=\"true\"\n    (onChange)=\"productSelected($event)\"\n    [isMultiple]=\"true\"\n    \n    >\n  </ionic-selectable>\n</ion-item>  -->\n\n<table *ngIf=\"showTable\" border=\"none\" style=\"width: 94%;margin-left: 2%;margin-right: 5%;margin-top: 2%; color: black;background-color: aliceblue; text-align: center;\">\n  <tr style=\"border: none; color: white; background-color: lightslategray;\">\n    <td style=\"width: 40%;text-align: left;\">\n      Item\n    </td>\n    <td style=\"text-align: left;\">\n      Price\n    </td>\n    <td style=\"text-align: left;\">\n      A.Qty\n    </td>\n    <td style=\"text-align: left;\">\n      Qty\n    </td>\n    \n    <td style=\"text-align: left;\">\n      Amount\n    </td>\n  </tr>\n  <tr *ngFor= \"let item of products\" style=\"border: none;\">\n    <td style=\"text-align: left;\"><ion-input  disabled [(ngModel)]=\"item.name\" ></ion-input></td>\n    <td style=\"text-align: right;\"><ion-input disabled (ionChange)=\"calculateInvoiceTotal(item)\" type=\"number\" [(ngModel)]=\"item.unitPrice\" ></ion-input></td>\n    <td style=\"text-align: right;\"><ion-input disabled type=\"number\" [(ngModel)]=\"item.displayBalanceQuantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n    <td style=\"text-align: right;\"><ion-input (ionChange)=\"calculateInvoiceTotal(item)\" type=\"number\" [(ngModel)]=\"item.quantity\"  (keypress)=\"numericOnly($event)\"></ion-input></td>\n    <td style=\"text-align: right;\"><ion-input disabled type=\"number\" [(ngModel)]=\"item.unitPrice*item.quantity\" ></ion-input></td>\n  </tr>\n</table>\n<ion-grid>\n  <ion-row>\n    <ion-item style=\"width: 100%;\">\n    <ion-col size=\"6\">\n      <ion-label >Apply VAT</ion-label>\n    </ion-col>\n    <ion-col size=\"6\">\n      <ion-checkbox color=\"primary\" [(ngModel)]=\"applyVat\" (ionChange)=\"calculateInvoiceTotal()\" ></ion-checkbox>\n    </ion-col>\n  </ion-item>\n  </ion-row>\n    \n  <ion-row>\n<ion-item style=\"width: 100%;\"> \n      <ion-col size=\"6\">\n        <ion-label >Total</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"applyVat==true\">\n        <ion-label style=\"float: right;\">{{(invoice.total-invoice.tax) | number : '1.2-2'}}</ion-label>\n      </ion-col>\n      <ion-col size=\"6\" *ngIf=\"applyVat==false\">\n        <ion-label style=\"float: right;\">{{invoice.total |    number : '1.2-2'}}</ion-label>\n      </ion-col>\n    </ion-item>\n  </ion-row>  \n  <ion-row>\n    <ion-item style=\"width: 100%;\">\n    <ion-col size=\"6\">\n      <ion-label >Tax</ion-label>\n    </ion-col>\n    <ion-col size=\"6\" *ngIf=\"applyVat==true\">\n      <ion-label style=\"float: right;\">{{(invoice.tax | number : '1.2-2')}}</ion-label>\n    </ion-col>\n    <ion-col size=\"6\" *ngIf=\"applyVat==false\">\n      <ion-label style=\"float: right;\">{{(0 | number : '1.2-2')}}</ion-label>\n    </ion-col>\n  </ion-item>\n</ion-row>  \n    \n\n\n\n<ion-row>\n  <ion-item style=\"width: 100%;\">\n   <ion-col size=\"6\">\n     <ion-label >Gross Total(Incl. Tax)               </ion-label>\n   </ion-col>\n   <ion-col size=\"6\">\n     <ion-label style=\"float: right;\">{{invoice.total | number : '1.2-2'}}</ion-label>\n   </ion-col>\n </ion-item>\n </ion-row>\n\n    \n    \n    <ion-row>\n     <ion-item style=\"width: 100%;\"> \n      <ion-col size=\"6\">\n        <ion-label text-wrap>Balance Amount(Incl. current invoice)</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label style=\"float: right;\">{{invoice.balanceAmount | number : '1.2-2'}}</ion-label>\n      </ion-col>\n    </ion-item>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item style=\"margin-left: 0px; padding-left: 0px;\" >\n          <ion-label style=\"margin-left: 0px;\">Amount Paid</ion-label>\n          <ion-input class=\"ion-text-right\" type=\"number\" [(ngModel)]=\"invoice.amountPaid\" (ionChange)=\"calculateInvoiceTotal()\"></ion-input>\n        </ion-item>\n      </ion-col>\n    </ion-row>\n    \n    <!-- <ion-row>\n      <ion-col size=\"6\">\n        <ion-label color=\"primary\">Invoice Number</ion-label>\n      </ion-col>\n      <ion-col size=\"6\">\n        <ion-label >{{invoice.invoiceNumber}}</ion-label>\n      </ion-col>\n    </ion-row>   -->\n  \n  </ion-grid>\n  <div style=\"display: none;\">\n  <ion-datetime value=\"invoice.invoiceDate\" ></ion-datetime>\n</div>\n</div>\n</ion-content>\n<ion-footer>\n  <ion-row style=\"float:right\">\n    <ion-col >\n    <ion-button  color=\"primary\" (click)=\"submitBill()\">\n      <ion-icon name=\"checkmark\"></ion-icon>\n     \n      \n    </ion-button>\n    <ion-button color=\"primary\" (click)=\"printBill()\">\n      <ion-icon name=\"print\"></ion-icon>\n    </ion-button>\n  </ion-col>\n  </ion-row>\n\n</ion-footer>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=newinvoice-newinvoice-module-es5.js.map