module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store */ \"./src/redux/store.js\");\nvar _jsxFileName = \"/Users/Stepan/Documents/code/proj/game-change/src/pages/_app.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\nconst GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__[\"createGlobalStyle\"]`\n  body {\n    font-family:Helvetica, sans-serif;\n    margin:0px;\n    padding: 20px;\n    background-color: #151515;\n    color: whitesmoke;\n  }\n`;\nfunction App({\n  Component,\n  pageProps\n}) {\n  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__[\"Provider\"], {\n    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 10\n    }\n  }, __jsx(GlobalStyle, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 5\n    }\n  }), __jsx(Component, _extends({}, pageProps, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 5\n    }\n  })));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcz8yMjU0Il0sIm5hbWVzIjpbIkdsb2JhbFN0eWxlIiwiY3JlYXRlR2xvYmFsU3R5bGUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzdG9yZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQSxNQUFNQSxXQUFXLEdBQUdDLG1FQUFrQjs7Ozs7Ozs7Q0FBdEM7QUFXZSxTQUFTQyxHQUFULENBQWE7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQWIsRUFBdUM7QUFFcEQsU0FBTyxNQUFDLG9EQUFEO0FBQVUsU0FBSyxFQUFFQyxvREFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNMLE1BQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREssRUFFTCxNQUFDLFNBQUQsZUFBZUQsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRkssQ0FBUDtBQUlEIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHsgY3JlYXRlR2xvYmFsU3R5bGUgfSBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcblxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3JlZHV4L3N0b3JlJztcblxuXG5jb25zdCBHbG9iYWxTdHlsZSA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxuICBib2R5IHtcbiAgICBmb250LWZhbWlseTpIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgbWFyZ2luOjBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTE1MTU7XG4gICAgY29sb3I6IHdoaXRlc21va2U7XG4gIH1cbmBcblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG5cbiAgcmV0dXJuIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxHbG9iYWxTdHlsZSAvPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC9Qcm92aWRlcj5cbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n");

/***/ }),

/***/ "./src/redux/actions.js":
/*!******************************!*\
  !*** ./src/redux/actions.js ***!
  \******************************/
/*! exports provided: SET_FILTER, SET_WORD, SET_ORDER, SET_IS_FETCHING, SET_IS_NOT_FETCHING, ADD_ITEMS, RESET_ITEMS, SET_FETCHING_ERROR, setFilter, setWord, setOrder, setIsFetching, setIsNotFetching, addItems, resetItems, setFetchingError, fetchItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_FILTER\", function() { return SET_FILTER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_WORD\", function() { return SET_WORD; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_ORDER\", function() { return SET_ORDER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_IS_FETCHING\", function() { return SET_IS_FETCHING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_IS_NOT_FETCHING\", function() { return SET_IS_NOT_FETCHING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ADD_ITEMS\", function() { return ADD_ITEMS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESET_ITEMS\", function() { return RESET_ITEMS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_FETCHING_ERROR\", function() { return SET_FETCHING_ERROR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFilter\", function() { return setFilter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setWord\", function() { return setWord; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setOrder\", function() { return setOrder; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setIsFetching\", function() { return setIsFetching; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setIsNotFetching\", function() { return setIsNotFetching; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addItems\", function() { return addItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"resetItems\", function() { return resetItems; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setFetchingError\", function() { return setFetchingError; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fetchItems\", function() { return fetchItems; });\nconst SET_FILTER = 'SET_FILTER';\nconst SET_WORD = 'SET_WORD';\nconst SET_ORDER = 'SET_ORDER';\nconst SET_IS_FETCHING = 'SET_IS_FETCHING';\nconst SET_IS_NOT_FETCHING = 'SET_IS_NOT_FETCHING';\nconst ADD_ITEMS = 'ADD_ITEMS';\nconst RESET_ITEMS = 'RESET_ITEMS';\nconst SET_FETCHING_ERROR = 'SET_FETCHING_ERROR';\nconst page_size = 20;\nconst ERA = '2000-01-01,2021-12-31';\nconst URL = 'https://api.rawg.io/api/games?';\nlet page = 1;\nfunction setFilter(filter) {\n  return {\n    type: SET_FILTER,\n    filter\n  };\n}\nfunction setWord(word) {\n  return {\n    type: SET_WORD,\n    word\n  };\n}\nfunction setOrder(order) {\n  return {\n    type: SET_ORDER,\n    order\n  };\n}\nfunction setIsFetching() {\n  return {\n    type: SET_IS_FETCHING\n  };\n}\nfunction setIsNotFetching() {\n  return {\n    type: SET_IS_NOT_FETCHING\n  };\n}\nfunction addItems(items) {\n  return {\n    type: ADD_ITEMS,\n    items\n  };\n}\nfunction resetItems(items) {\n  return {\n    type: RESET_ITEMS,\n    items\n  };\n}\nfunction setFetchingError(error) {\n  return {\n    type: SET_FETCHING_ERROR,\n    error\n  };\n} ////////////////////////////////////////       ASYNC ACTIONS\n\nfunction fetchItems({\n  reset = true,\n  word,\n  order,\n  filter\n}) {\n  if (reset) page = 1;\n  if (word === undefined) word = null;\n  if (order === undefined) order = null;\n  if (filter === undefined) filter = null;\n  let requestUrl = URL + 'page_size=' + page_size + '&page=' + page + '&dates=' + ERA;\n  if (word) requestUrl = requestUrl + '&search=' + word;\n  if (order) requestUrl = requestUrl + '&ordering=' + order;\n  if (filter) requestUrl = requestUrl + '&platforms=' + filter;\n  return dispatch => {\n    console.log('URL', requestUrl);\n    dispatch(setOrder(order));\n    dispatch(setWord(word));\n    dispatch(setFilter(filter));\n    dispatch(setIsFetching());\n    dispatch(setFetchingError(null));\n    fetch(requestUrl).then(res => {\n      if (!res.ok) {\n        console.log(res);\n        throw res.status;\n      }\n\n      dispatch(setIsNotFetching());\n      return res.json();\n    }).then(res => {\n      page++;\n\n      if (reset) {\n        dispatch(resetItems(res.results));\n      } else {\n        dispatch(addItems(res.results));\n      }\n    }).catch(e => {\n      console.log('ERROR_CATCHED: ', e);\n      dispatch(setFetchingError(e));\n      dispatch(setIsNotFetching());\n    });\n  };\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvYWN0aW9ucy5qcz8yYWI3Il0sIm5hbWVzIjpbIlNFVF9GSUxURVIiLCJTRVRfV09SRCIsIlNFVF9PUkRFUiIsIlNFVF9JU19GRVRDSElORyIsIlNFVF9JU19OT1RfRkVUQ0hJTkciLCJBRERfSVRFTVMiLCJSRVNFVF9JVEVNUyIsIlNFVF9GRVRDSElOR19FUlJPUiIsInBhZ2Vfc2l6ZSIsIkVSQSIsIlVSTCIsInBhZ2UiLCJzZXRGaWx0ZXIiLCJmaWx0ZXIiLCJ0eXBlIiwic2V0V29yZCIsIndvcmQiLCJzZXRPcmRlciIsIm9yZGVyIiwic2V0SXNGZXRjaGluZyIsInNldElzTm90RmV0Y2hpbmciLCJhZGRJdGVtcyIsIml0ZW1zIiwicmVzZXRJdGVtcyIsInNldEZldGNoaW5nRXJyb3IiLCJlcnJvciIsImZldGNoSXRlbXMiLCJyZXNldCIsInVuZGVmaW5lZCIsInJlcXVlc3RVcmwiLCJkaXNwYXRjaCIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJyZXN1bHRzIiwiY2F0Y2giLCJlIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBTyxNQUFNQSxVQUFVLEdBQUcsWUFBbkI7QUFDQSxNQUFNQyxRQUFRLEdBQUcsVUFBakI7QUFDQSxNQUFNQyxTQUFTLEdBQUcsV0FBbEI7QUFDQSxNQUFNQyxlQUFlLEdBQUcsaUJBQXhCO0FBQ0EsTUFBTUMsbUJBQW1CLEdBQUcscUJBQTVCO0FBQ0EsTUFBTUMsU0FBUyxHQUFHLFdBQWxCO0FBQ0EsTUFBTUMsV0FBVyxHQUFHLGFBQXBCO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsb0JBQTNCO0FBRVAsTUFBTUMsU0FBUyxHQUFHLEVBQWxCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLHVC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LElBQUosRUFBUDtBQUNILEtBTEwsRUFNS0osSUFOTCxDQU1VQyxHQUFHLElBQUk7QUFDVHhCLFVBQUk7O0FBQ0osVUFBSWdCLEtBQUosRUFBVztBQUNQRyxnQkFBUSxDQUFDUCxVQUFVLENBQUNZLEdBQUcsQ0FBQ0ksT0FBTCxDQUFYLENBQVI7QUFDSCxPQUZELE1BRU87QUFDSFQsZ0JBQVEsQ0FBQ1QsUUFBUSxDQUFDYyxHQUFHLENBQUNJLE9BQUwsQ0FBVCxDQUFSO0FBQ0g7QUFDSixLQWJMLEVBY0tDLEtBZEwsQ0FjV0MsQ0FBQyxJQUFJO0FBQ1JWLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCUyxDQUEvQjtBQUNBWCxjQUFRLENBQUNOLGdCQUFnQixDQUFDaUIsQ0FBRCxDQUFqQixDQUFSO0FBQ0FYLGNBQVEsQ0FBQ1YsZ0JBQWdCLEVBQWpCLENBQVI7QUFDSCxLQWxCTDtBQXFCSCxHQTVCRDtBQThCSCIsImZpbGUiOiIuL3NyYy9yZWR1eC9hY3Rpb25zLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IFNFVF9GSUxURVIgPSAnU0VUX0ZJTFRFUidcbmV4cG9ydCBjb25zdCBTRVRfV09SRCA9ICdTRVRfV09SRCdcbmV4cG9ydCBjb25zdCBTRVRfT1JERVIgPSAnU0VUX09SREVSJ1xuZXhwb3J0IGNvbnN0IFNFVF9JU19GRVRDSElORyA9ICdTRVRfSVNfRkVUQ0hJTkcnXG5leHBvcnQgY29uc3QgU0VUX0lTX05PVF9GRVRDSElORyA9ICdTRVRfSVNfTk9UX0ZFVENISU5HJ1xuZXhwb3J0IGNvbnN0IEFERF9JVEVNUyA9ICdBRERfSVRFTVMnXG5leHBvcnQgY29uc3QgUkVTRVRfSVRFTVMgPSAnUkVTRVRfSVRFTVMnXG5leHBvcnQgY29uc3QgU0VUX0ZFVENISU5HX0VSUk9SID0gJ1NFVF9GRVRDSElOR19FUlJPUidcblxuY29uc3QgcGFnZV9zaXplID0gMjBcbmNvbnN0IEVSQSA9ICcyMDAwLTAxLTAxLDIwMjEtMTItMzEnXG5jb25zdCBVUkwgPSAnaHR0cHM6Ly9hcGkucmF3Zy5pby9hcGkvZ2FtZXM/J1xubGV0IHBhZ2UgPSAxXG5cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEZpbHRlcihmaWx0ZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTRVRfRklMVEVSLFxuICAgICAgICBmaWx0ZXJcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0V29yZCh3b3JkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU0VUX1dPUkQsXG4gICAgICAgIHdvcmRcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0T3JkZXIob3JkZXIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICB0eXBlOiBTRVRfT1JERVIsXG4gICAgICAgIG9yZGVyXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldElzRmV0Y2hpbmcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU0VUX0lTX0ZFVENISU5HXG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldElzTm90RmV0Y2hpbmcoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU0VUX0lTX05PVF9GRVRDSElOR1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRJdGVtcyhpdGVtcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IEFERF9JVEVNUyxcbiAgICAgICAgaXRlbXNcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVzZXRJdGVtcyhpdGVtcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIHR5cGU6IFJFU0VUX0lURU1TLFxuICAgICAgICBpdGVtc1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRGZXRjaGluZ0Vycm9yKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogU0VUX0ZFVENISU5HX0VSUk9SLFxuICAgICAgICBlcnJvclxuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gICAgICAgQVNZTkMgQUNUSU9OU1xuXG5cbmV4cG9ydCBmdW5jdGlvbiBmZXRjaEl0ZW1zKHsgcmVzZXQgPSB0cnVlLCB3b3JkLCBvcmRlciwgZmlsdGVyIH0pIHtcbiAgICBpZiAocmVzZXQpIHBhZ2UgPSAxO1xuXG4gICAgaWYgKHdvcmQgPT09IHVuZGVmaW5lZCkgd29yZCA9IG51bGxcbiAgICBpZiAob3JkZXIgPT09IHVuZGVmaW5lZCkgb3JkZXIgPSBudWxsXG4gICAgaWYgKGZpbHRlciA9PT0gdW5kZWZpbmVkKSBmaWx0ZXIgPSBudWxsXG5cbiAgICBsZXQgcmVxdWVzdFVybCA9IFVSTCArICdwYWdlX3NpemU9JyArIHBhZ2Vfc2l6ZSArICcmcGFnZT0nICsgcGFnZSArICcmZGF0ZXM9JyArIEVSQVxuXG4gICAgaWYgKHdvcmQpIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsICsgJyZzZWFyY2g9JyArIHdvcmRcbiAgICBpZiAob3JkZXIpIHJlcXVlc3RVcmwgPSByZXF1ZXN0VXJsICsgJyZvcmRlcmluZz0nICsgb3JkZXJcbiAgICBpZiAoZmlsdGVyKSByZXF1ZXN0VXJsID0gcmVxdWVzdFVybCArICcmcGxhdGZvcm1zPScgKyBmaWx0ZXJcblxuXG4gICAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnVVJMJywgcmVxdWVzdFVybClcbiAgICAgICAgZGlzcGF0Y2goc2V0T3JkZXIob3JkZXIpKVxuICAgICAgICBkaXNwYXRjaChzZXRXb3JkKHdvcmQpKVxuICAgICAgICBkaXNwYXRjaChzZXRGaWx0ZXIoZmlsdGVyKSlcbiAgICAgICAgZGlzcGF0Y2goc2V0SXNGZXRjaGluZygpKVxuICAgICAgICBkaXNwYXRjaChzZXRGZXRjaGluZ0Vycm9yKG51bGwpKVxuICAgICAgICBmZXRjaChyZXF1ZXN0VXJsKVxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcy5vaykgeyBjb25zb2xlLmxvZyhyZXMpOyB0aHJvdyByZXMuc3RhdHVzIH1cbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRJc05vdEZldGNoaW5nKCkpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHBhZ2UrKztcbiAgICAgICAgICAgICAgICBpZiAocmVzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2gocmVzZXRJdGVtcyhyZXMucmVzdWx0cykpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGF0Y2goYWRkSXRlbXMocmVzLnJlc3VsdHMpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goZSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0VSUk9SX0NBVENIRUQ6ICcsIGUpXG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goc2V0RmV0Y2hpbmdFcnJvcihlKSlcbiAgICAgICAgICAgICAgICBkaXNwYXRjaChzZXRJc05vdEZldGNoaW5nKCkpXG4gICAgICAgICAgICB9KVxuXG5cbiAgICB9XG5cbn1cblxuXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/redux/actions.js\n");

/***/ }),

/***/ "./src/redux/reducers.js":
/*!*******************************!*\
  !*** ./src/redux/reducers.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./actions */ \"./src/redux/actions.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);\n//const { combineReducers } = require(\"redux\")\n\n\nconst iniState = {\n  items: [],\n  filter: null,\n  searchWord: null,\n  order: null,\n  isFetching: false,\n  fetchingError: {\n    status: null\n  }\n};\nconst rootReducer = Object(redux__WEBPACK_IMPORTED_MODULE_1__[\"combineReducers\"])({\n  filter: filterReducer,\n  searchWord: searchWordReducer,\n  order: orderReducer,\n  isFetching: fetchingReducer,\n  items: itemsReducer,\n  fetchingError: fetchingErrorReducer\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);\n\nfunction filterReducer(state = iniState.filter, action) {\n  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_FILTER\"]) {\n    return action.filter;\n  }\n\n  return state;\n}\n\nfunction searchWordReducer(state = iniState.searchWord, action) {\n  console.log('ACTION', action);\n\n  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_WORD\"]) {\n    return action.word;\n  }\n\n  return state;\n}\n\nfunction orderReducer(state = iniState.order, action) {\n  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_ORDER\"]) {\n    return action.order;\n  }\n\n  return state;\n}\n\nfunction fetchingReducer(state = iniState.isFetching, action) {\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_IS_FETCHING\"]:\n      return true;\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_IS_NOT_FETCHING\"]:\n      return false;\n\n    default:\n      return state;\n  }\n}\n\nfunction itemsReducer(state = iniState.items, action) {\n  switch (action.type) {\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"ADD_ITEMS\"]:\n      return state.concat(action.items);\n\n    case _actions__WEBPACK_IMPORTED_MODULE_0__[\"RESET_ITEMS\"]:\n      return action.items;\n\n    default:\n      return state;\n  }\n}\n\nfunction fetchingErrorReducer(state = iniState.fetchingError, action) {\n  if (action.type === _actions__WEBPACK_IMPORTED_MODULE_0__[\"SET_FETCHING_ERROR\"]) {\n    return action.error;\n  }\n\n  return state;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvcmVkdWNlcnMuanM/MzdjNCJdLCJuYW1lcyI6WyJpbmlTdGF0ZSIsIml0ZW1zIiwiZmlsdGVyIiwic2VhcmNoV29yZCIsIm9yZGVyIiwiaXNGZXRjaGluZyIsImZldGNoaW5nRXJyb3IiLCJzdGF0dXMiLCJyb290UmVkdWNlciIsImNvbWJpbmVSZWR1Y2VycyIsImZpbHRlclJlZHVjZXIiLCJzZWFyY2hXb3JkUmVkdWNlciIsIm9yZGVyUmVkdWNlciIsImZldGNoaW5nUmVkdWNlciIsIml0ZW1zUmVkdWNlciIsImZldGNoaW5nRXJyb3JSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiYWN0aW9ucyIsImNvbnNvbGUiLCJsb2ciLCJ3b3JkIiwiY29uY2F0IiwiZXJyb3IiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0EsTUFBTUEsUUFBUSxHQUFHO0FBQ2JDLE9BQUssRUFBRSxFQURNO0FBRWJDLFFBQU0sRUFBRSxJQUZLO0FBR2JDLFlBQVUsRUFBRSxJQUhDO0FBSWJDLE9BQUssRUFBRSxJQUpNO0FBS2JDLFlBQVUsRUFBRSxLQUxDO0FBTWJDLGVBQWEsRUFBRTtBQUFFQyxVQUFNLEVBQUU7QUFBVjtBQU5GLENBQWpCO0FBU0EsTUFBTUMsV0FBVyxHQUFHQyw2REFBZSxDQUFDO0FBQ2hDUCxRQUFNLEVBQUVRLGFBRHdCO0FBRWhDUCxZQUFVLEVBQUVRLGlCQUZvQjtBQUdoQ1AsT0FBSyxFQUFFUSxZQUh5QjtBQUloQ1AsWUFBVSxFQUFFUSxlQUpvQjtBQUtoQ1osT0FBSyxFQUFFYSxZQUx5QjtBQU1oQ1IsZUFBYSxFQUFFUztBQU5pQixDQUFELENBQW5DO0FBU2VQLDBFQUFmOztBQUVBLFNBQVNFLGFBQVQsQ0FBdUJNLEtBQUssR0FBR2hCLFFBQVEsQ0FBQ0UsTUFBeEMsRUFBZ0RlLE1BQWhELEVBQXdEO0FBQ3BELE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQkMsbURBQXBCLEVBQXdDO0FBQ3BDLFdBQU9GLE1BQU0sQ0FBQ2YsTUFBZDtBQUNIOztBQUNELFNBQU9jLEtBQVA7QUFDSDs7QUFDRCxTQUFTTCxpQkFBVCxDQUEyQkssS0FBSyxHQUFHaEIsUUFBUSxDQUFDRyxVQUE1QyxFQUF3RGMsTUFBeEQsRUFBZ0U7QUFDNURHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JKLE1BQXRCOztBQUNBLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQkMsaURBQXBCLEVBQXNDO0FBQ2xDLFdBQU9GLE1BQU0sQ0FBQ0ssSUFBZDtBQUNIOztBQUNELFNBQU9OLEtBQVA7QUFDSDs7QUFDRCxTQUFTSixZQUFULENBQXNCSSxLQUFLLEdBQUdoQixRQUFRLENBQUNJLEtBQXZDLEVBQThDYSxNQUE5QyxFQUFzRDtBQUNsRCxNQUFJQSxNQUFNLENBQUNDLElBQVAsS0FBZ0JDLGtEQUFwQixFQUF1QztBQUNuQyxXQUFPRixNQUFNLENBQUNiLEtBQWQ7QUFDSDs7QUFDRCxTQUFPWSxLQUFQO0FBQ0g7O0FBQ0QsU0FBU0gsZUFBVCxDQUF5QkcsS0FBSyxHQUFHaEIsUUFBUSxDQUFDSyxVQUExQyxFQUFzRFksTUFBdEQsRUFBOEQ7QUFDMUQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS0Msd0RBQUw7QUFDSSxhQUFPLElBQVA7O0FBQ0osU0FBS0EsNERBQUw7QUFDSSxhQUFPLEtBQVA7O0FBQ0o7QUFDSSxhQUFPSCxLQUFQO0FBTlI7QUFRSDs7QUFDRCxTQUFTRixZQUFULENBQXNCRSxLQUFLLEdBQUdoQixRQUFRLENBQUNDLEtBQXZDLEVBQThDZ0IsTUFBOUMsRUFBc0Q7QUFFbEQsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0ksU0FBS0Msa0RBQUw7QUFDSSxhQUFPSCxLQUFLLENBQUNPLE1BQU4sQ0FBYU4sTUFBTSxDQUFDaEIsS0FBcEIsQ0FBUDs7QUFDSixTQUFLa0Isb0RBQUw7QUFDSSxhQUFPRixNQUFNLENBQUNoQixLQUFkOztBQUVKO0FBQ0ksYUFBT2UsS0FBUDtBQVBSO0FBU0g7O0FBQ0QsU0FBU0Qsb0JBQVQsQ0FBOEJDLEtBQUssR0FBR2hCLFFBQVEsQ0FBQ00sYUFBL0MsRUFBOERXLE1BQTlELEVBQXNFO0FBRWxFLE1BQUlBLE1BQU0sQ0FBQ0MsSUFBUCxLQUFnQkMsMkRBQXBCLEVBQWdEO0FBQzVDLFdBQU9GLE1BQU0sQ0FBQ08sS0FBZDtBQUNIOztBQUNELFNBQU9SLEtBQVA7QUFDSCIsImZpbGUiOiIuL3NyYy9yZWR1eC9yZWR1Y2Vycy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vY29uc3QgeyBjb21iaW5lUmVkdWNlcnMgfSA9IHJlcXVpcmUoXCJyZWR1eFwiKVxuaW1wb3J0ICogYXMgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCdcblxuXG5jb25zdCBpbmlTdGF0ZSA9IHtcbiAgICBpdGVtczogW10sXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIHNlYXJjaFdvcmQ6IG51bGwsXG4gICAgb3JkZXI6IG51bGwsXG4gICAgaXNGZXRjaGluZzogZmFsc2UsXG4gICAgZmV0Y2hpbmdFcnJvcjogeyBzdGF0dXM6IG51bGwsIH1cbn1cblxuY29uc3Qgcm9vdFJlZHVjZXIgPSBjb21iaW5lUmVkdWNlcnMoe1xuICAgIGZpbHRlcjogZmlsdGVyUmVkdWNlcixcbiAgICBzZWFyY2hXb3JkOiBzZWFyY2hXb3JkUmVkdWNlcixcbiAgICBvcmRlcjogb3JkZXJSZWR1Y2VyLFxuICAgIGlzRmV0Y2hpbmc6IGZldGNoaW5nUmVkdWNlcixcbiAgICBpdGVtczogaXRlbXNSZWR1Y2VyLFxuICAgIGZldGNoaW5nRXJyb3I6IGZldGNoaW5nRXJyb3JSZWR1Y2VyXG59KVxuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlclxuXG5mdW5jdGlvbiBmaWx0ZXJSZWR1Y2VyKHN0YXRlID0gaW5pU3RhdGUuZmlsdGVyLCBhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuU0VUX0ZJTFRFUikge1xuICAgICAgICByZXR1cm4gYWN0aW9uLmZpbHRlclxuICAgIH1cbiAgICByZXR1cm4gc3RhdGVcbn1cbmZ1bmN0aW9uIHNlYXJjaFdvcmRSZWR1Y2VyKHN0YXRlID0gaW5pU3RhdGUuc2VhcmNoV29yZCwgYWN0aW9uKSB7XG4gICAgY29uc29sZS5sb2coJ0FDVElPTicsIGFjdGlvbilcbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09IGFjdGlvbnMuU0VUX1dPUkQpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi53b3JkXG4gICAgfVxuICAgIHJldHVybiBzdGF0ZVxufVxuZnVuY3Rpb24gb3JkZXJSZWR1Y2VyKHN0YXRlID0gaW5pU3RhdGUub3JkZXIsIGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24udHlwZSA9PT0gYWN0aW9ucy5TRVRfT1JERVIpIHtcbiAgICAgICAgcmV0dXJuIGFjdGlvbi5vcmRlclxuICAgIH1cbiAgICByZXR1cm4gc3RhdGVcbn1cbmZ1bmN0aW9uIGZldGNoaW5nUmVkdWNlcihzdGF0ZSA9IGluaVN0YXRlLmlzRmV0Y2hpbmcsIGFjdGlvbikge1xuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICAgICAgY2FzZSBhY3Rpb25zLlNFVF9JU19GRVRDSElORzpcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIGNhc2UgYWN0aW9ucy5TRVRfSVNfTk9UX0ZFVENISU5HOlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5mdW5jdGlvbiBpdGVtc1JlZHVjZXIoc3RhdGUgPSBpbmlTdGF0ZS5pdGVtcywgYWN0aW9uKSB7XG5cbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgICAgIGNhc2UgYWN0aW9ucy5BRERfSVRFTVM6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuY29uY2F0KGFjdGlvbi5pdGVtcylcbiAgICAgICAgY2FzZSBhY3Rpb25zLlJFU0VUX0lURU1TOlxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbi5pdGVtc1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gc3RhdGVcbiAgICB9XG59XG5mdW5jdGlvbiBmZXRjaGluZ0Vycm9yUmVkdWNlcihzdGF0ZSA9IGluaVN0YXRlLmZldGNoaW5nRXJyb3IsIGFjdGlvbikge1xuXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSBhY3Rpb25zLlNFVF9GRVRDSElOR19FUlJPUikge1xuICAgICAgICByZXR1cm4gYWN0aW9uLmVycm9yXG4gICAgfVxuICAgIHJldHVybiBzdGF0ZVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/redux/reducers.js\n");

/***/ }),

/***/ "./src/redux/store.js":
/*!****************************!*\
  !*** ./src/redux/store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ \"redux\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers */ \"./src/redux/reducers.js\");\n\n\n\n\nconst store = Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"createStore\"])(_reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"], Object(redux__WEBPACK_IMPORTED_MODULE_0__[\"applyMiddleware\"])(redux_thunk__WEBPACK_IMPORTED_MODULE_2___default.a, redux_logger__WEBPACK_IMPORTED_MODULE_1___default.a));\n/* harmony default export */ __webpack_exports__[\"default\"] = (store);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVkdXgvc3RvcmUuanM/N2QzMSJdLCJuYW1lcyI6WyJzdG9yZSIsImNyZWF0ZVN0b3JlIiwicm9vdFJlZHVjZXIiLCJhcHBseU1pZGRsZXdhcmUiLCJ0aHVuayIsImxvZ2dlciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0EsTUFBTUEsS0FBSyxHQUFHQyx5REFBVyxDQUNyQkMsaURBRHFCLEVBRXJCQyw2REFBZSxDQUFDQyxrREFBRCxFQUFRQyxtREFBUixDQUZNLENBQXpCO0FBS2VMLG9FQUFmIiwiZmlsZSI6Ii4vc3JjL3JlZHV4L3N0b3JlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgYXBwbHlNaWRkbGV3YXJlLCBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCBsb2dnZXIgZnJvbSAncmVkdXgtbG9nZ2VyJ1xuaW1wb3J0IHRodW5rIGZyb20gJ3JlZHV4LXRodW5rJ1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4vcmVkdWNlcnMnO1xuXG5cbmNvbnN0IHN0b3JlID0gY3JlYXRlU3RvcmUoXG4gICAgcm9vdFJlZHVjZXIsXG4gICAgYXBwbHlNaWRkbGV3YXJlKHRodW5rLCBsb2dnZXIpXG4pXG5cbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/store.js\n");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiPzc4Y2QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QtcmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react-redux\n");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eFwiP2QzMjUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux\n");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIj8xYzAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-logger\n");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC10aHVua1wiPzg4MDgiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVkdXgtdGh1bmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWR1eC10aHVua1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-thunk\n");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-components\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtY29tcG9uZW50c1wiP2Y1YWQiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic3R5bGVkLWNvbXBvbmVudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtY29tcG9uZW50c1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-components\n");

/***/ })

/******/ });