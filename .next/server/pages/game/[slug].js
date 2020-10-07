module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2I6W");


/***/ }),

/***/ "2I6W":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "getServerSideProps", function() { return /* binding */ getServerSideProps; });

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__("4Q3z");

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__("Dtiu");
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: ./src/redux/store.js + 1 modules
var store = __webpack_require__("fTHX");

// CONCATENATED MODULE: ./src/components/Slider.js
var __jsx = external_react_default.a.createElement;


const Wrapper = external_styled_components_default.a.div.withConfig({
  displayName: "Slider__Wrapper",
  componentId: "sc-17tqp4z-0"
})(["float:left;display:flex;width:60%;@media (max-width:1189px){width:100%;}button{display:block;width:30px;font-size:20px;font-weight:boler;color:grey;outline-style:none;border:none;background-color:#333;&:hover{cursor:pointer;background-color:#444;}&:active{background-color:#555;}}"]);
const Sliderbox = external_styled_components_default.a.div.withConfig({
  displayName: "Slider__Sliderbox",
  componentId: "sc-17tqp4z-1"
})(["border-radius:5px;width:100%;padding:25% 0;position:relative;overflow:hidden;flex:1;"]);
const Innerbox = external_styled_components_default.a.div.withConfig({
  displayName: "Slider__Innerbox",
  componentId: "sc-17tqp4z-2"
})(["position:relative;width:100%;height:100%;right:40px;"]);
const Img = external_styled_components_default.a.div.withConfig({
  displayName: "Slider__Img",
  componentId: "sc-17tqp4z-3"
})(["position:absolute;top:0;left:", ";background-image:url(", ");background-size:cover;background-position:center;width:100%;height:100%;transition:all .5s ease-in-out;"], props => props.id * 100 - 100 * props.state + '%', props => props.src);

function Slider({
  slides
}) {
  const {
    0: state,
    1: setState
  } = Object(external_react_["useState"])(1);
  console.log(slides);
  return __jsx(Wrapper, null, __jsx("button", {
    onClick: () => {
      if (state != 1) setState(state - 1);
    }
  }, "\u2190"), __jsx(Sliderbox, null, slides ? slides.map((i, id) => __jsx(Img, {
    key: id,
    id: id,
    src: i.image,
    state: state
  })) : null), __jsx("button", {
    onClick: () => {
      if (state != slides.length - 1) setState(state + 1);
    }
  }, "\u2192"));
}

/* harmony default export */ var components_Slider = (Slider);
// CONCATENATED MODULE: ./src/pages/game/[slug].js
var _slug_jsx = external_react_default.a.createElement;





const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const Column = external_styled_components_default.a.div.withConfig({
  displayName: "slug__Column",
  componentId: "y6zr3n-0"
})(["box-sizing:border-box;float:left;width:40%;padding:0px 20px;@media (max-width:1189px){width:100%;padding:0px 0px;}a{color:orange;text-decoration:none;line-height:40px;font-weight:bolder;}"]);
const Head = external_styled_components_default.a.div.withConfig({
  displayName: "slug__Head",
  componentId: "y6zr3n-1"
})(["display:flex;justify-content:space-between;align-items:center;padding:10px 0px;div:nth-child(1){font-size:33px;}div:nth-child(2){font-size:24px;padding:5px 10px;background-color:#444;border-radius:5px;border:1px solid #777;}"]);
const Released = external_styled_components_default.a.div.withConfig({
  displayName: "slug__Released",
  componentId: "y6zr3n-2"
})(["padding:0px 0px;text-align:right;color:#777;"]);
const Descr = external_styled_components_default.a.div.withConfig({
  displayName: "slug__Descr",
  componentId: "y6zr3n-3"
})(["color:#e5e4e4;letter-spacing:0.3px;position:relative;overflow:hidden;height:", ";div{position:", ";top:0;left:0;width:100%;height:102%;text-align:justify;}button{display:block;position:absolute;bottom:0px;width:100%;background-color:rgba(50,50,50,0.95);color:white;border:none;outline-style:none;padding:5px;cursor:pointer;}"], props => props.open ? null : '100px', props => props.open ? 'relative' : 'absolute');

const Game = () => {
  const {
    0: descr,
    1: setDescr
  } = Object(external_react_["useState"])(false);
  const {
    0: slides,
    1: setSlides
  } = Object(external_react_["useState"])(null);
  const {
    0: {
      name,
      description_raw,
      website,
      background_image,
      rating,
      released
    },
    1: setDetails
  } = Object(external_react_["useState"])({});
  const router = Object(router_["useRouter"])();
  const {
    slug
  } = router.query; //screenshots

  Object(external_react_["useEffect"])(() => {
    if (slug) {
      const scrURL = 'https://api.rawg.io/api/games/' + slug + '/screenshots';
      fetch(scrURL).then(x => {
        if (!x.ok) throw new Error(x); //console.log(x)

        return x.json();
      }).then(x => setSlides(x.results)).catch(x => console.log(x));
      return () => {};
    }
  }, []); //screenshots

  Object(external_react_["useEffect"])(() => {
    if (slug) {
      const scrURL = 'https://api.rawg.io/api/games/' + slug;
      fetch(scrURL).then(x => {
        if (!x.ok) throw new Error(x);
        console.log(x);
        return x.json();
      }).then(x => {
        console.log(x);
        setDetails(x);
      }).catch(x => console.log(x));
      return () => {};
    }
  }, []);
  return _slug_jsx("div", null, _slug_jsx(components_Slider, {
    slides: slides
  }), _slug_jsx(Column, null, _slug_jsx(Head, null, _slug_jsx("div", null, name), _slug_jsx("div", null, rating)), _slug_jsx(Released, null, new Date(released).getDate(), "  ", monthNames[new Date(released).getMonth()], ", ", new Date(released).getFullYear()), _slug_jsx(Descr, {
    open: descr
  }, _slug_jsx("div", null, description_raw, _slug_jsx("br", null), "\xA0", _slug_jsx("br", null), "\xA0"), _slug_jsx("button", {
    onClick: () => setDescr(!descr)
  }, descr ? 'less' : 'more')), _slug_jsx("a", {
    href: website,
    target: '_blank'
  }, "Go to website \u2192")));
};

const getServerSideProps = async ({
  params
}) => {
  const slug = params.slug;
  return {
    props: {
      slug: params.slug
    }
  };
};
/* harmony default export */ var _slug_ = __webpack_exports__["default"] = (Game);

/***/ }),

/***/ "4DCN":
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),

/***/ "4Q3z":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "Dtiu":
/***/ (function(module, exports) {

module.exports = require("styled-components");

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

/***/ "rKB8":
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ })

/******/ });