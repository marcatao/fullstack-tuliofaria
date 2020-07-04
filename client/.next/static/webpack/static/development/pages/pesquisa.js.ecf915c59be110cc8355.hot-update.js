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
    _jsxFileName = "C:\\Users\\marcato\\Google Drive\\Estudos\\Fullstack-TulioFaria\\client\\pages\\pesquisa.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Pesquisa = function Pesquisa() {
  var save = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var form, response, data;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              form = {
                Nome: '111',
                Email: '222',
                Whatsapp: '333'
              };
              _context.prev = 1;
              _context.next = 4;
              return fetch('api/save', {
                method: 'POST',
                body: JSON.stringify(form)
              });

            case 4:
              response = _context.sent;
              _context.next = 7;
              return response.json();

            case 7:
              data = _context.sent;
              console.log(data);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              console.log(_context.t0);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11]]);
    }));

    return function save() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    className: "pt-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "mt12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, "Criticas e sugest\xF5es.")), __jsx("div", {
    className: "w-1/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 m-2 rouded",
    placeholder: "Nome",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 m-2 rouded",
    placeholder: "Email",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }), __jsx("input", {
    type: "text",
    className: "p-4 block shadow bg-blue-100 m-2 rouded",
    placeholder: "Whatsapp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 11
    }
  }), __jsx("button", {
    className: "bg-yellow-400 px-6 py-4 font-bold rounded-lg shadow-lg block m-2",
    onClick: save,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, "Enviar resposta")), __jsx("div", {
    className: "mt12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }, "Mensagem desconto.")));
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wZXNxdWlzYS5qcyJdLCJuYW1lcyI6WyJQZXNxdWlzYSIsInNhdmUiLCJmb3JtIiwiTm9tZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQUs7QUFDdEIsTUFBTUMsSUFBSTtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNKQyxrQkFESSxHQUNHO0FBQ1RDLG9CQUFJLEVBQUcsS0FERTtBQUVUQyxxQkFBSyxFQUFFLEtBRkU7QUFHVEMsd0JBQVEsRUFBRTtBQUhELGVBREg7QUFBQTtBQUFBO0FBQUEscUJBT1dDLEtBQUssQ0FBQyxVQUFELEVBQVk7QUFDbENDLHNCQUFNLEVBQUUsTUFEMEI7QUFFbENDLG9CQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlUixJQUFmO0FBRjRCLGVBQVosQ0FQaEI7O0FBQUE7QUFPTlMsc0JBUE07QUFBQTtBQUFBLHFCQVlTQSxRQUFRLENBQUNDLElBQVQsRUFaVDs7QUFBQTtBQVlKQyxrQkFaSTtBQWFWQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFiVTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQWdCVEMscUJBQU8sQ0FBQ0MsR0FBUjs7QUFoQlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBSmQsSUFBSTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQW9CSSxTQUNFO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNBO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQURKLENBREEsRUFJQTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBQyx5Q0FBN0I7QUFBc0UsZUFBVyxFQUFDLE1BQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLHlDQUE3QjtBQUFzRSxlQUFXLEVBQUMsT0FBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMseUNBQTdCO0FBQXNFLGVBQVcsRUFBQyxVQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSTtBQUFRLGFBQVMsRUFBQyxrRUFBbEI7QUFDUSxXQUFPLEVBQUVBLElBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEosQ0FKQSxFQVlBO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLENBWkEsQ0FERjtBQWtCSCxDQXZDRDs7S0FBTUQsUTtBQXlDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBlc3F1aXNhLmpzLmVjZjkxNWM1OWJlMTEwY2M4MzU1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgUGVzcXVpc2EgPSAoKSA9PntcclxuY29uc3Qgc2F2ZSA9IGFzeW5jICgpID0+e1xyXG4gICBjb25zdCBmb3JtID0ge1xyXG4gICAgICAgTm9tZSA6ICcxMTEnLFxyXG4gICAgICAgRW1haWw6ICcyMjInLFxyXG4gICAgICAgV2hhdHNhcHA6ICczMzMnXHJcbiAgIH1cclxudHJ5eyBcclxuIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2FwaS9zYXZlJyx7XHJcbiAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgIH0pXHJcblxyXG4gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG59ICAgY2F0Y2ggKGVycil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbn1cclxufVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdC02Jz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdDEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8cD5Dcml0aWNhcyBlIHN1Z2VzdMO1ZXMuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNSBteC1hdXRvXCI+XHJcbiAgICAgIFxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG0tMiByb3VkZWQncGxhY2Vob2xkZXI9XCJOb21lXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT0ncC00IGJsb2NrIHNoYWRvdyBiZy1ibHVlLTEwMCBtLTIgcm91ZGVkJ3BsYWNlaG9sZGVyPVwiRW1haWxcIj48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG0tMiByb3VkZWQncGxhY2Vob2xkZXI9XCJXaGF0c2FwcFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmcteWVsbG93LTQwMCBweC02IHB5LTQgZm9udC1ib2xkIHJvdW5kZWQtbGcgc2hhZG93LWxnIGJsb2NrIG0tMidcclxuICAgICAgICAgICAgICAgICAgb25DbGljaz17c2F2ZX0+RW52aWFyIHJlc3Bvc3RhPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10MTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgIDxwPk1lbnNhZ2VtIGRlc2NvbnRvLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbiAgICAgICAgICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBlc3F1aXNhIl0sInNvdXJjZVJvb3QiOiIifQ==