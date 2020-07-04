webpackHotUpdate("static\\development\\pages\\pesquisa.js",{

/***/ "./pages/pesquisa.js":
/*!***************************!*\
  !*** ./pages/pesquisa.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);



var _this = undefined,
    _jsxFileName = "C:\\Users\\marcato\\Google Drive\\Estudos\\Fullstack-TulioFaria\\client\\pages\\pesquisa.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Pesquisa = function Pesquisa() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    Nome: '111',
    Email: '222',
    Whatsapp: '333'
  }),
      form = _useState[0],
      setForm = _useState[1];

  var save = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
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

  var onChange = function onChange(evt) {};

  return __jsx("div", {
    className: "pt-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mt12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }, "Criticas e sugest\xF5es.")), __jsx("div", {
    className: "w-1/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 m-2 rouded",
    placeholder: "Nome",
    onChange: onChange,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 m-2 rouded",
    placeholder: "Email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 m-2 rouded",
    placeholder: "Whatsapp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  }), __jsx("button", {
    className: "bg-yellow-400 px-6 py-4 font-bold rounded-lg shadow-lg block m-2",
    onClick: save,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 11
    }
  }, "Enviar resposta")), __jsx("div", {
    className: "mt12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wZXNxdWlzYS5qcyJdLCJuYW1lcyI6WyJQZXNxdWlzYSIsInVzZVN0YXRlIiwiTm9tZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJmb3JtIiwic2V0Rm9ybSIsInNhdmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsImV2dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUs7QUFBQTs7QUFBQSxrQkFFUUMsc0RBQVEsQ0FBQztBQUMvQkMsUUFBSSxFQUFHLEtBRHdCO0FBRS9CQyxTQUFLLEVBQUUsS0FGd0I7QUFHL0JDLFlBQVEsRUFBRTtBQUhxQixHQUFELENBRmhCO0FBQUEsTUFFVEMsSUFGUztBQUFBLE1BRUhDLE9BRkc7O0FBU3RCLE1BQU1DLElBQUk7QUFBQSxnTUFBRztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR1dDLEtBQUssQ0FBQyxVQUFELEVBQVk7QUFDbENDLHNCQUFNLEVBQUUsTUFEMEI7QUFFbENDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUCxJQUFmO0FBRjRCLGVBQVosQ0FIaEI7O0FBQUE7QUFHTlEsc0JBSE07QUFBQTtBQUFBLHFCQVFTQSxRQUFRLENBQUNDLElBQVQsRUFSVDs7QUFBQTtBQVFKQyxrQkFSSTtBQVNWQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFUVTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVlUQyxxQkFBTyxDQUFDQyxHQUFSOztBQVpTO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQUpWLElBQUk7QUFBQTtBQUFBO0FBQUEsS0FBVjs7QUFlQSxNQUFNVyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFBQyxHQUFHLEVBQUcsQ0FFdEIsQ0FGRDs7QUFHSSxTQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURKLENBREEsRUFJQTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBQyx5Q0FBN0I7QUFBc0UsZUFBVyxFQUFDLE1BQWxGO0FBQXlGLFlBQVEsRUFBRUQsUUFBbkc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLEVBR0k7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMseUNBQTdCO0FBQXNFLGVBQVcsRUFBQyxPQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBQyx5Q0FBN0I7QUFBc0UsZUFBVyxFQUFDLFVBQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFKSixFQUtJO0FBQVEsYUFBUyxFQUFDLGtFQUFsQjtBQUNRLFdBQU8sRUFBRVgsSUFEakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFMSixDQUpBLEVBWUE7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREosQ0FaQSxDQURGO0FBa0JILENBN0NEOztHQUFNUCxROztLQUFBQSxRO0FBK0NTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9zdGF0aWNcXGRldmVsb3BtZW50XFxwYWdlc1xccGVzcXVpc2EuanMuOTk2N2UxZGM2Zjg1MzMxMDBmNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZX0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUGVzcXVpc2EgPSAoKSA9PntcclxuXHJcbiAgICBjb25zdCAgWyBmb3JtLCBzZXRGb3JtXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBOb21lIDogJzExMScsXHJcbiAgICAgICAgRW1haWw6ICcyMjInLFxyXG4gICAgICAgIFdoYXRzYXBwOiAnMzMzJ1xyXG4gICAgfSkgIFxyXG5cclxuXHJcbmNvbnN0IHNhdmUgPSBhc3luYyAoKSA9PntcclxuIFxyXG50cnl7IFxyXG4gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnYXBpL3NhdmUnLHtcclxuICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZm9ybSlcclxuICAgfSlcclxuXHJcbiAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcclxuICAgY29uc29sZS5sb2coZGF0YSlcclxuXHJcbn0gICBjYXRjaCAoZXJyKXtcclxuICAgIGNvbnNvbGUubG9nKGVycilcclxufVxyXG59XHJcbmNvbnN0IG9uQ2hhbmdlID0gZXZ0ID0+e1xyXG5cclxufVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3B0LTYnPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10MTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxwPkNyaXRpY2FzIGUgc3VnZXN0w7Vlcy48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMS81IG14LWF1dG9cIj5cclxuICAgICAgXHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9J3AtNCBibG9jayBzaGFkb3cgYmctYmx1ZS0xMDAgbS0yIHJvdWRlZCdwbGFjZWhvbGRlcj1cIk5vbWVcIiBvbkNoYW5nZT17b25DaGFuZ2V9PjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9J3AtNCBibG9jayBzaGFkb3cgYmctYmx1ZS0xMDAgbS0yIHJvdWRlZCdwbGFjZWhvbGRlcj1cIkVtYWlsXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT0ncC00IGJsb2NrIHNoYWRvdyBiZy1ibHVlLTEwMCBtLTIgcm91ZGVkJ3BsYWNlaG9sZGVyPVwiV2hhdHNhcHBcIj48L2lucHV0PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLXllbGxvdy00MDAgcHgtNiBweS00IGZvbnQtYm9sZCByb3VuZGVkLWxnIHNoYWRvdy1sZyBibG9jayBtLTInXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NhdmV9PkVudmlhciByZXNwb3N0YTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdDEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8cD5NZW5zYWdlbSBkZXNjb250by48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXNxdWlzYSJdLCJzb3VyY2VSb290IjoiIn0=