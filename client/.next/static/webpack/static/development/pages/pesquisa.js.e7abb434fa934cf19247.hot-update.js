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
    var key = evt.target.name;
    setForm(function (old) {
      return _objectSpread(_objectSpread({}, old), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, key, value));
    });
  };

  return __jsx("div", {
    className: "pt-6",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }, __jsx("div", {
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
  }, "Criticas e sugest\xF5es.")), __jsx("div", {
    className: "w-1/5 mx-auto",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
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
      lineNumber: 43,
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
      lineNumber: 44,
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
      lineNumber: 45,
      columnNumber: 11
    }
  }), __jsx("button", {
    className: "bg-yellow-400 px-6 py-4 font-bold rounded-lg shadow-lg block m-2",
    onClick: save,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 11
    }
  }, "Enviar resposta")), __jsx("div", {
    className: "mt12 text-center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }
  }, __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wZXNxdWlzYS5qcyJdLCJuYW1lcyI6WyJQZXNxdWlzYSIsInVzZVN0YXRlIiwiTm9tZSIsIkVtYWlsIiwiV2hhdHNhcHAiLCJmb3JtIiwic2V0Rm9ybSIsInNhdmUiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZSIsImV2dCIsInZhbHVlIiwidGFyZ2V0Iiwia2V5IiwibmFtZSIsIm9sZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFLO0FBQUE7O0FBQUEsa0JBRVFDLHNEQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRyxLQUR3QjtBQUUvQkMsU0FBSyxFQUFFLEtBRndCO0FBRy9CQyxZQUFRLEVBQUU7QUFIcUIsR0FBRCxDQUZoQjtBQUFBLE1BRVRDLElBRlM7QUFBQSxNQUVIQyxPQUZHOztBQVN0QixNQUFNQyxJQUFJO0FBQUEsZ01BQUc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUdXQyxLQUFLLENBQUMsVUFBRCxFQUFZO0FBQ2xDQyxzQkFBTSxFQUFFLE1BRDBCO0FBRWxDQyxvQkFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZVAsSUFBZjtBQUY0QixlQUFaLENBSGhCOztBQUFBO0FBR05RLHNCQUhNO0FBQUE7QUFBQSxxQkFRU0EsUUFBUSxDQUFDQyxJQUFULEVBUlQ7O0FBQUE7QUFRSkMsa0JBUkk7QUFTVkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBVFU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFZVEMscUJBQU8sQ0FBQ0MsR0FBUjs7QUFaUztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFIOztBQUFBLG9CQUFKVixJQUFJO0FBQUE7QUFBQTtBQUFBLEtBQVY7O0FBZUEsTUFBTVcsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQUMsR0FBRyxFQUFHO0FBQ25CLFFBQU1DLEtBQUssR0FBR0QsR0FBRyxDQUFDRSxNQUFKLENBQVdELEtBQXpCO0FBQ0EsUUFBTUUsR0FBRyxHQUFHSCxHQUFHLENBQUNFLE1BQUosQ0FBV0UsSUFBdkI7QUFDQWpCLFdBQU8sQ0FBQyxVQUFBa0IsR0FBRztBQUFBLDZDQUNKQSxHQURJLHFHQUVORixHQUZNLEVBRUFGLEtBRkE7QUFBQSxLQUFKLENBQVA7QUFJSCxHQVBEOztBQVFJLFNBQ0U7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0E7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREosQ0FEQSxFQUlBO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLHlDQUE3QjtBQUFzRSxlQUFXLEVBQUMsTUFBbEY7QUFBeUYsWUFBUSxFQUFFRixRQUFuRztBQUE2RyxRQUFJLEVBQUMsTUFBbEg7QUFBeUgsU0FBSyxFQUFFYixJQUFJLENBQUNILElBQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixFQUdJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsYUFBUyxFQUFDLHlDQUE3QjtBQUFzRSxlQUFXLEVBQUMsT0FBbEY7QUFBMkYsWUFBUSxFQUFFZ0IsUUFBckc7QUFBK0csUUFBSSxFQUFDLE9BQXBIO0FBQTRILFNBQUssRUFBRWIsSUFBSSxDQUFDRixLQUF4STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosRUFJSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLGFBQVMsRUFBQyx5Q0FBN0I7QUFBc0UsZUFBVyxFQUFDLFVBQWxGO0FBQThGLFlBQVEsRUFBRWUsUUFBeEc7QUFBa0gsUUFBSSxFQUFDLFVBQXZIO0FBQWtJLFNBQUssRUFBRWIsSUFBSSxDQUFDRCxRQUE5STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosRUFLSTtBQUFRLGFBQVMsRUFBQyxrRUFBbEI7QUFDUSxXQUFPLEVBQUVHLElBRGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEosQ0FKQSxFQVlBO0FBQUssYUFBUyxFQUFDLGtCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDBCQURKLENBWkEsQ0FERjtBQWtCSCxDQWxERDs7R0FBTVAsUTs7S0FBQUEsUTtBQW9EU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svc3RhdGljXFxkZXZlbG9wbWVudFxccGFnZXNcXHBlc3F1aXNhLmpzLmU3YWJiNDM0ZmE5MzRjZjE5MjQ3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGV9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IFBlc3F1aXNhID0gKCkgPT57XHJcblxyXG4gICAgY29uc3QgIFsgZm9ybSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICAgICAgTm9tZSA6ICcxMTEnLFxyXG4gICAgICAgIEVtYWlsOiAnMjIyJyxcclxuICAgICAgICBXaGF0c2FwcDogJzMzMydcclxuICAgIH0pICBcclxuXHJcblxyXG5jb25zdCBzYXZlID0gYXN5bmMgKCkgPT57XHJcbiBcclxudHJ5eyBcclxuIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2FwaS9zYXZlJyx7XHJcbiAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm0pXHJcbiAgIH0pXHJcblxyXG4gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXHJcbiAgIGNvbnNvbGUubG9nKGRhdGEpXHJcblxyXG59ICAgY2F0Y2ggKGVycil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbn1cclxufVxyXG5jb25zdCBvbkNoYW5nZSA9IGV2dCA9PntcclxuICAgIGNvbnN0IHZhbHVlID0gZXZ0LnRhcmdldC52YWx1ZVxyXG4gICAgY29uc3Qga2V5ID0gZXZ0LnRhcmdldC5uYW1lXHJcbiAgICBzZXRGb3JtKG9sZCA9PiAoe1xyXG4gICAgICAgIC4uLm9sZCxcclxuICAgICAgICBba2V5XTogdmFsdWVcclxuICAgIH0pKVxyXG59XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ncHQtNic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQxMiB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPHA+Q3JpdGljYXMgZSBzdWdlc3TDtWVzLjwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzUgbXgtYXV0b1wiPlxyXG4gICAgICBcclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT0ncC00IGJsb2NrIHNoYWRvdyBiZy1ibHVlLTEwMCBtLTIgcm91ZGVkJ3BsYWNlaG9sZGVyPVwiTm9tZVwiIG9uQ2hhbmdlPXtvbkNoYW5nZX0gbmFtZT1cIk5vbWVcIiB2YWx1ZT17Zm9ybS5Ob21lfT48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG0tMiByb3VkZWQncGxhY2Vob2xkZXI9XCJFbWFpbFwiICBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9XCJFbWFpbFwiIHZhbHVlPXtmb3JtLkVtYWlsfT48L2lucHV0PlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPSdwLTQgYmxvY2sgc2hhZG93IGJnLWJsdWUtMTAwIG0tMiByb3VkZWQncGxhY2Vob2xkZXI9XCJXaGF0c2FwcFwiICBvbkNoYW5nZT17b25DaGFuZ2V9IG5hbWU9XCJXaGF0c2FwcFwiIHZhbHVlPXtmb3JtLldoYXRzYXBwfT48L2lucHV0PlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2JnLXllbGxvdy00MDAgcHgtNiBweS00IGZvbnQtYm9sZCByb3VuZGVkLWxnIHNoYWRvdy1sZyBibG9jayBtLTInXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3NhdmV9PkVudmlhciByZXNwb3N0YTwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdDEyIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8cD5NZW5zYWdlbSBkZXNjb250by48L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG4gICAgICAgICAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQZXNxdWlzYSJdLCJzb3VyY2VSb290IjoiIn0=