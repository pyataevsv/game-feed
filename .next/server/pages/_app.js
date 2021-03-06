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

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("IlR1");


/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "IlR1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("h74D");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("Dtiu");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("fTHX");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const GlobalStyle = styled_components__WEBPACK_IMPORTED_MODULE_2__["createGlobalStyle"]`
  body {
    font-family:Helvetica, sans-serif;
    margin:0px;
    padding: 20px;
    background-color: #151515;
    color: whitesmoke;
  }
`;
function App({
  Component,
  pageProps
}) {
  return __jsx(react_redux__WEBPACK_IMPORTED_MODULE_1__["Provider"], {
    store: _redux_store__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]
  }, __jsx(GlobalStyle, null), __jsx(Component, pageProps));
}

/***/ }),

/***/ "Krf4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return SET_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SET_WORD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SET_ORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return SET_IS_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SET_IS_NOT_FETCHING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ADD_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RESET_ITEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return SET_FETCHING_ERROR; });
/* unused harmony export setFilter */
/* unused harmony export setWord */
/* unused harmony export setOrder */
/* unused harmony export setIsFetching */
/* unused harmony export setIsNotFetching */
/* unused harmony export addItems */
/* unused harmony export resetItems */
/* unused harmony export setFetchingError */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return fetchItems; });
const SET_FILTER = 'SET_FILTER';
const SET_WORD = 'SET_WORD';
const SET_ORDER = 'SET_ORDER';
const SET_IS_FETCHING = 'SET_IS_FETCHING';
const SET_IS_NOT_FETCHING = 'SET_IS_NOT_FETCHING';
const ADD_ITEMS = 'ADD_ITEMS';
const RESET_ITEMS = 'RESET_ITEMS';
const SET_FETCHING_ERROR = 'SET_FETCHING_ERROR';
const page_size = 20;
const ERA = '2000-01-01,2021-12-31';
const URL = 'https://api.rawg.io/api/games?';
let page = 1;
function setFilter(filter) {
  return {
    type: SET_FILTER,
    filter
  };
}
function setWord(word) {
  return {
    type: SET_WORD,
    word
  };
}
function setOrder(order) {
  return {
    type: SET_ORDER,
    order
  };
}
function setIsFetching() {
  return {
    type: SET_IS_FETCHING
  };
}
function setIsNotFetching() {
  return {
    type: SET_IS_NOT_FETCHING
  };
}
function addItems(items) {
  return {
    type: ADD_ITEMS,
    items
  };
}
function resetItems(items) {
  return {
    type: RESET_ITEMS,
    items
  };
}
function setFetchingError(error) {
  return {
    type: SET_FETCHING_ERROR,
    error
  };
} ////////////////////////////////////////       ASYNC ACTIONS

function fetchItems({
  reset = true,
  word,
  order,
  filter
}) {
  if (reset) page = 1;
  if (word === undefined) word = null;
  if (order === undefined) order = null;
  if (filter === undefined) filter = null;
  let requestUrl = URL + 'page_size=' + page_size + '&page=' + page + '&dates=' + ERA;
  if (word) requestUrl = requestUrl + '&search=' + word;
  if (order) requestUrl = requestUrl + '&ordering=' + order;
  if (filter) requestUrl = requestUrl + '&platforms=' + filter;
  return dispatch => {
    console.log('URL', requestUrl);
    dispatch(setOrder(order));
    dispatch(setWord(word));
    dispatch(setFilter(filter));
    dispatch(setIsFetching());
    dispatch(setFetchingError(null));
    fetch(requestUrl).then(res => {
      if (!res.ok) {
        console.log(res);
        throw res.status;
      }

      dispatch(setIsNotFetching());
      return res.json();
    }).then(res => {
      page++;

      if (reset) {
        dispatch(resetItems(res.results));
      } else {
        dispatch(addItems(res.results));
      }
    }).catch(e => {
      console.log('ERROR_CATCHED: ', e);
      dispatch(setFetchingError(e));
      dispatch(setIsNotFetching());
    });
  };
}

/***/ }),

/***/ "ZSx1":
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "fTHX":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "redux"
var external_redux_ = __webpack_require__("rKB8");

// EXTERNAL MODULE: external "redux-logger"
var external_redux_logger_ = __webpack_require__("4DCN");
var external_redux_logger_default = /*#__PURE__*/__webpack_require__.n(external_redux_logger_);

// EXTERNAL MODULE: external "redux-thunk"
var external_redux_thunk_ = __webpack_require__("ZSx1");
var external_redux_thunk_default = /*#__PURE__*/__webpack_require__.n(external_redux_thunk_);

// EXTERNAL MODULE: ./src/redux/actions.js
var actions = __webpack_require__("Krf4");

// CONCATENATED MODULE: ./src/redux/reducers.js
//const { combineReducers } = require("redux")


const iniState = {
  items: [],
  filter: null,
  searchWord: null,
  order: null,
  isFetching: false,
  fetchingError: {
    status: null
  }
};
const rootReducer = Object(external_redux_["combineReducers"])({
  filter: filterReducer,
  searchWord: searchWordReducer,
  order: orderReducer,
  isFetching: fetchingReducer,
  items: itemsReducer,
  fetchingError: fetchingErrorReducer
});
/* harmony default export */ var reducers = (rootReducer);

function filterReducer(state = iniState.filter, action) {
  if (action.type === actions["d" /* SET_FILTER */]) {
    return action.filter;
  }

  return state;
}

function searchWordReducer(state = iniState.searchWord, action) {
  console.log('ACTION', action);

  if (action.type === actions["h" /* SET_WORD */]) {
    return action.word;
  }

  return state;
}

function orderReducer(state = iniState.order, action) {
  if (action.type === actions["g" /* SET_ORDER */]) {
    return action.order;
  }

  return state;
}

function fetchingReducer(state = iniState.isFetching, action) {
  switch (action.type) {
    case actions["e" /* SET_IS_FETCHING */]:
      return true;

    case actions["f" /* SET_IS_NOT_FETCHING */]:
      return false;

    default:
      return state;
  }
}

function itemsReducer(state = iniState.items, action) {
  switch (action.type) {
    case actions["a" /* ADD_ITEMS */]:
      return state.concat(action.items);

    case actions["b" /* RESET_ITEMS */]:
      return action.items;

    default:
      return state;
  }
}

function fetchingErrorReducer(state = iniState.fetchingError, action) {
  if (action.type === actions["c" /* SET_FETCHING_ERROR */]) {
    return action.error;
  }

  return state;
}
// CONCATENATED MODULE: ./src/redux/store.js




const store = Object(external_redux_["createStore"])(reducers, Object(external_redux_["applyMiddleware"])(external_redux_thunk_default.a, external_redux_logger_default.a));
/* harmony default export */ var redux_store = __webpack_exports__["a"] = (store);

/***/ }),

/***/ "h74D":
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });