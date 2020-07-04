webpackHotUpdate("static\\development\\pages\\pesquisa.js",{

/***/ "./pages/pesquisa.js":
/*!***************************!*\
  !*** ./pages/pesquisa.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);




var _this = undefined,
    _jsxFileName = "C:\\Users\\marcato\\Google Drive\\Estudos\\Fullstack-TulioFaria\\client\\pages\\pesquisa.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var Pesquisa = function Pesquisa() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    Nome: '111',
    Email: '222',
    Whatsapp: '333'
  }),
      form = _useState[0],
      setForm = _useState[1];

  var save = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee() {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return fetch('api/save', {
                method: 'POST',
                body: JSON.stringify(form)
              });

            case 3:
              response = _context.sent;
              _context.next = 6;
              return response.json();

            case 6:
              data = _context.sent;
              console.log(data);
              _context.next = 13;
              break;

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));

    return function save() {
      return _ref.apply(this, arguments);
    };
  }();

  var onChange = function onChange(evt) {
    var value = evt.target.value;
    setForm(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));
    });
  };

  return __jsx("div", {
    className: "pt-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mt12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, "Criticas e sugest\xF5es.")), __jsx("div", {
    className: "w-1/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 m-2 rouded",
    placeholder: "Nome",
    onChange: onChange,
    name: "Nome",
    value: form.Nome,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 m-2 rouded",
    placeholder: "Email",
    onChange: onChange,
    name: "Email",
    value: form.Email,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 m-2 rouded",
    placeholder: "Whatsapp",
    onChange: onChange,
    name: "Whatsapp",
    value: form.Whatsapp,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }), __jsx("button", {
    className: "bg-yellow-400 px-6 py-4 font-bold rounded-lg shadow-lg block m-2",
    onClick: save,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 11
    }
  }, "Enviar resposta")), __jsx("div", {
    className: "mt12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }, "Mensagem desconto.")));
};

_s(Pesquisa, "HypnJ+vz9K3mYiuNDIqHzeNCBrE=");

_c = Pesquisa;
/* harmony default export */ __webpack_exports__["default"] = (Pesquisa);

var _c;

$RefreshReg$(_c, "Pesquisa");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports_1 = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports_1;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wZXNxdWlzYS5qcyJdLCJuYW1lcyI6WyJQZXNxdWlzYSIsInVzZVN0YXRlIiwiTm9tZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJmb3JtIiwic2V0Rm9ybSIsInNhdmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwib2xkIiwia2V5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUs7QUFBQTs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFHLEtBRHdCO0FBRS9CQyxTQUFLLEVBQUUsS0FGd0I7QUFHL0JDLFlBQVEsRUFBRTtBQUhxQixHQUFELENBRmhCO0FBQUEsTUFFVEMsSUFGUztBQUFBLE1BRUhDLE9BRkc7O0FBU3RCLE1BQU1DLElBQUk7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR1dDLEtBQUssQ0FBQyxVQUFELEVBQVk7QUFDbENDLHNCQUFNLEVBQUUsTUFEMEI7QUFFbENDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmO0FBRjRCLGVBQVosQ0FIaEI7O0FBQUE7QUFHTlEsc0JBSE07QUFBQTtBQUFBLHFCQVFTQSxRQUFRLENBQUNDLElBQVQsRUFSVDs7QUFBQTtBQVFKQyxrQkFSSTtBQVNWQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFUVTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVlUQyxxQkFBTyxDQUFDQyxHQUFSOztBQVpTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUpWLElBQUk7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUFlQSxNQUFNVyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxHQUFHLEVBQUc7QUFDbkIsUUFBTUMsS0FBSyxHQUFHRCxHQUFHLENBQUNFLE1BQUosQ0FBV0QsS0FBekI7QUFDQWQsV0FBTyxDQUFDLFVBQUFnQixHQUFHO0FBQUEsNkNBQ0pBLEdBREkscUdBRU5DLEdBRk0sRUFFQUgsS0FGQTtBQUFBLEtBQUosQ0FBUDtBQUlILEdBTkQ7O0FBT0ksU0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FESixDQURBLEVBSUE7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMseUNBQTdCO0FBQXNFLGVBQVcsRUFBQyxNQUFsRjtBQUF5RixZQUFRLEVBQUVGLFFBQW5HO0FBQTZHLFFBQUksRUFBQyxNQUFsSDtBQUF5SCxTQUFLLEVBQUViLElBQUksQ0FBQ0gsSUFBckk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMseUNBQTdCO0FBQXNFLGVBQVcsRUFBQyxPQUFsRjtBQUEyRixZQUFRLEVBQUVnQixRQUFyRztBQUErRyxRQUFJLEVBQUMsT0FBcEg7QUFBNEgsU0FBSyxFQUFFYixJQUFJLENBQUNGLEtBQXhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixFQUlJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLHlDQUE3QjtBQUFzRSxlQUFXLEVBQUMsVUFBbEY7QUFBOEYsWUFBUSxFQUFFZSxRQUF4RztBQUFrSCxRQUFJLEVBQUMsVUFBdkg7QUFBa0ksU0FBSyxFQUFFYixJQUFJLENBQUNELFFBQTlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQVEsYUFBUyxFQUFDLGtFQUFsQjtBQUNRLFdBQU8sRUFBRUcsSUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMSixDQUpBLEVBWUE7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosQ0FaQSxDQURGO0FBa0JILENBakREOztHQUFNUCxROztLQUFBQSxRO0FBbURTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGVzcXVpc2EuanMuNTA1ZjRkMWIwNWE1M2FlNjIwN2EuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUGVzcXVpc2EgPSAoKSA9PntcclxuXHJcbiAgICBjb25zdCAgWyBmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBOb21lIDogJzExMScsXHJcbiAgICAgICAgRW1haWw6ICcyMjInLFxyXG4gICAgICAgIFdoYXRzYXBwOiAnMzMzJ1xyXG4gICAgfSkgIFxyXG5cclxuXHJcbmNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PntcclxuIFxyXG50cnl7IFxyXG4gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnYXBpL3NhdmUnLHtcclxuICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybSlcclxuICAgfSlcclxuXHJcbiAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbn0gICBjYXRjaCAoZXJyKXtcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxufVxyXG59XHJcbmNvbnN0IG9uQ2hhbmdlID0gZXZ0ID0+e1xyXG4gICAgY29uc3QgdmFsdWUgPSBldnQudGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRGb3JtKG9sZCA9PiAoe1xyXG4gICAgICAgIC4uLm9sZCxcclxuICAgICAgICBba2V5XTogdmFsdWVcclxuICAgIH0pKVxyXG59XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtNic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQxMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHA+Q3JpdGljYXMgZSBzdWdlc3TDtWVzLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzUgbXgtYXV0b1wiPlxyXG4gICAgICBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT0ncC00IGJsb2NrIHNoYWRvdyBiZy1ibHVlLTEwMCBtLTIgcm91ZGVkJ3BsYWNlaG9sZGVyPVwiTm9tZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT1cIk5vbWVcIiB2YWx1ZT17Zm9ybS5Ob21lfT48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG0tMiByb3VkZWQncGxhY2Vob2xkZXI9XCJFbWFpbFwiICBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9XCJFbWFpbFwiIHZhbHVlPXtmb3JtLkVtYWlsfT48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG0tMiByb3VkZWQncGxhY2Vob2xkZXI9XCJXaGF0c2FwcFwiICBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9XCJXaGF0c2FwcFwiIHZhbHVlPXtmb3JtLldoYXRzYXBwfT48L2lucHV0PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLXllbGxvdy00MDAgcHgtNiBweS00IGZvbnQtYm9sZCByb3VuZGVkLWxnIHNoYWRvdy1sZyBibG9jayBtLTInXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NhdmV9PkVudmlhciByZXNwb3N0YTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdDEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8cD5NZW5zYWdlbSBkZXNjb250by48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXNxdWlzYSJdLCJzb3VyY2VSb290IjoiIn0=