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

  var onChange = function onChange(evt) {
    console.log(evt.target.value);
  };

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wZXNxdWlzYS5qcyJdLCJuYW1lcyI6WyJQZXNxdWlzYSIsInVzZVN0YXRlIiwiTm9tZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJmb3JtIiwic2V0Rm9ybSIsInNhdmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsImV2dCIsInRhcmdldCIsInZhbHVlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBSztBQUFBOztBQUFBLGtCQUVRQyxzREFBUSxDQUFDO0FBQy9CQyxRQUFJLEVBQUcsS0FEd0I7QUFFL0JDLFNBQUssRUFBRSxLQUZ3QjtBQUcvQkMsWUFBUSxFQUFFO0FBSHFCLEdBQUQsQ0FGaEI7QUFBQSxNQUVUQyxJQUZTO0FBQUEsTUFFSEMsT0FGRzs7QUFTdEIsTUFBTUMsSUFBSTtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHV0MsS0FBSyxDQUFDLFVBQUQsRUFBWTtBQUNsQ0Msc0JBQU0sRUFBRSxNQUQwQjtBQUVsQ0Msb0JBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVQLElBQWY7QUFGNEIsZUFBWixDQUhoQjs7QUFBQTtBQUdOUSxzQkFITTtBQUFBO0FBQUEscUJBUVNBLFFBQVEsQ0FBQ0MsSUFBVCxFQVJUOztBQUFBO0FBUUpDLGtCQVJJO0FBU1ZDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQVRVO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBWVRDLHFCQUFPLENBQUNDLEdBQVI7O0FBWlM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBSlYsSUFBSTtBQUFBO0FBQUE7QUFBQSxLQUFWOztBQWVBLE1BQU1XLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUFDLEdBQUcsRUFBRztBQUNuQkgsV0FBTyxDQUFDQyxHQUFSLENBQVlFLEdBQUcsQ0FBQ0MsTUFBSixDQUFXQyxLQUF2QjtBQUNILEdBRkQ7O0FBR0ksU0FDRTtBQUFLLGFBQVMsRUFBQyxNQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDQTtBQUFLLGFBQVMsRUFBQyxrQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FESixDQURBLEVBSUE7QUFBSyxhQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMseUNBQTdCO0FBQXNFLGVBQVcsRUFBQyxNQUFsRjtBQUF5RixZQUFRLEVBQUVILFFBQW5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLHlDQUE3QjtBQUFzRSxlQUFXLEVBQUMsT0FBbEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUhKLEVBSUk7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixhQUFTLEVBQUMseUNBQTdCO0FBQXNFLGVBQVcsRUFBQyxVQUFsRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSTtBQUFRLGFBQVMsRUFBQyxrRUFBbEI7QUFDUSxXQUFPLEVBQUVYLElBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEosQ0FKQSxFQVlBO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLENBWkEsQ0FERjtBQWtCSCxDQTdDRDs7R0FBTVAsUTs7S0FBQUEsUTtBQStDU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBlc3F1aXNhLmpzLjFjNTkyNDAzODY0M2E2M2NlYTlhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFBlc3F1aXNhID0gKCkgPT57XHJcblxyXG4gICAgY29uc3QgIFsgZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgTm9tZSA6ICcxMTEnLFxyXG4gICAgICAgIEVtYWlsOiAnMjIyJyxcclxuICAgICAgICBXaGF0c2FwcDogJzMzMydcclxuICAgIH0pICBcclxuXHJcblxyXG5jb25zdCBzYXZlID0gYXN5bmMgKCkgPT57XHJcbiBcclxudHJ5eyBcclxuIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2FwaS9zYXZlJyx7XHJcbiAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgIH0pXHJcblxyXG4gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG59ICAgY2F0Y2ggKGVycil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbn1cclxufVxyXG5jb25zdCBvbkNoYW5nZSA9IGV2dCA9PntcclxuICAgIGNvbnNvbGUubG9nKGV2dC50YXJnZXQudmFsdWUpXHJcbn1cclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdwdC02Jz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdDEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8cD5Dcml0aWNhcyBlIHN1Z2VzdMO1ZXMuPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEvNSBteC1hdXRvXCI+XHJcbiAgICAgIFxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG0tMiByb3VkZWQncGxhY2Vob2xkZXI9XCJOb21lXCIgb25DaGFuZ2U9e29uQ2hhbmdlfT48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG0tMiByb3VkZWQncGxhY2Vob2xkZXI9XCJFbWFpbFwiPjwvaW5wdXQ+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzc05hbWU9J3AtNCBibG9jayBzaGFkb3cgYmctYmx1ZS0xMDAgbS0yIHJvdWRlZCdwbGFjZWhvbGRlcj1cIldoYXRzYXBwXCI+PC9pbnB1dD5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdiZy15ZWxsb3ctNDAwIHB4LTYgcHktNCBmb250LWJvbGQgcm91bmRlZC1sZyBzaGFkb3ctbGcgYmxvY2sgbS0yJ1xyXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXtzYXZlfT5FbnZpYXIgcmVzcG9zdGE8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQxMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHA+TWVuc2FnZW0gZGVzY29udG8uPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICAgICAgICAgICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUGVzcXVpc2EiXSwic291cmNlUm9vdCI6IiJ9