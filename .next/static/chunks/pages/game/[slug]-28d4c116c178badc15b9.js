_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[8],{"1mXj":function(e,t,n){(function(e){!function(t){"use strict";function n(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function o(e,t,n){o.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:n,enumerable:!0})}function i(e,t){i.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function a(e,t){a.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function u(e,t,n){u.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:n,enumerable:!0})}function l(e,t,n){var r=e.slice((n||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,r),e}function c(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function f(e,t,n,r,s,d,p){p=p||[];var g=(s=s||[]).slice(0);if("undefined"!=typeof d){if(r){if("function"==typeof r&&r(g,d))return;if("object"===("undefined"==typeof r?"undefined":N(r))){if(r.prefilter&&r.prefilter(g,d))return;if(r.normalize){var h=r.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===c(e)&&"regexp"===c(t)&&(e=e.toString(),t=t.toString());var v="undefined"==typeof e?"undefined":N(e),b="undefined"==typeof t?"undefined":N(t),y="undefined"!==v||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==b||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!y&&m)n(new i(g,t));else if(!m&&y)n(new a(g,e));else if(c(e)!==c(t))n(new o(g,e,t));else if("date"===c(e)&&e-t!==0)n(new o(g,e,t));else if("object"===v&&null!==e&&null!==t)if(p.filter((function(t){return t.lhs===e})).length)e!==t&&n(new o(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;for(e.length,w=0;w<e.length;w++)w>=t.length?n(new u(g,w,new a(void 0,e[w]))):f(e[w],t[w],n,r,g,w,p);for(;w<t.length;)n(new u(g,w,new i(void 0,t[w++])))}else{var x=Object.keys(e),k=Object.keys(t);x.forEach((function(o,i){var a=k.indexOf(o);a>=0?(f(e[o],t[o],n,r,g,o,p),k=l(k,a)):f(e[o],void 0,n,r,g,o,p)})),k.forEach((function(e){f(void 0,t[e],n,r,g,e,p)}))}p.length=p.length-1}else e!==t&&("number"===v&&isNaN(e)&&isNaN(t)||n(new o(g,e,t)))}function s(e,t,n,r){return r=r||[],f(e,t,(function(e){e&&r.push(e)}),n),r.length?r:void 0}function d(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":d(o[n.path[r]],n.index,n.item);break;case"D":delete o[n.path[r]];break;case"E":case"N":o[n.path[r]]=n.rhs}}else switch(n.kind){case"A":d(e[t],n.index,n.item);break;case"D":e=l(e,t);break;case"E":case"N":e[t]=n.rhs}return e}function p(e,t,n){if(e&&t&&n&&n.kind){for(var r=e,o=-1,i=n.path?n.path.length-1:0;++o<i;)"undefined"==typeof r[n.path[o]]&&(r[n.path[o]]="number"==typeof n.path[o]?[]:{}),r=r[n.path[o]];switch(n.kind){case"A":d(n.path?r[n.path[o]]:r,n.index,n.item);break;case"D":delete r[n.path[o]];break;case"E":case"N":r[n.path[o]]=n.rhs}}}function g(e,t,n){if(n.path&&n.path.length){var r,o=e[t],i=n.path.length-1;for(r=0;r<i;r++)o=o[n.path[r]];switch(n.kind){case"A":g(o[n.path[r]],n.index,n.item);break;case"D":case"E":o[n.path[r]]=n.lhs;break;case"N":delete o[n.path[r]]}}else switch(n.kind){case"A":g(e[t],n.index,n.item);break;case"D":case"E":e[t]=n.lhs;break;case"N":e=l(e,t)}return e}function h(e,t,n){if(e&&t&&n&&n.kind){var r,o,i=e;for(o=n.path.length-1,r=0;r<o;r++)"undefined"==typeof i[n.path[r]]&&(i[n.path[r]]={}),i=i[n.path[r]];switch(n.kind){case"A":g(i[n.path[r]],n.index,n.item);break;case"D":case"E":i[n.path[r]]=n.lhs;break;case"N":delete i[n.path[r]]}}}function v(e,t,n){e&&t&&f(e,t,(function(r){n&&!n(e,t,r)||p(e,t,r)}))}function b(e){return"color: "+z[e].color+"; font-weight: bold"}function y(e){var t=e.kind,n=e.path,r=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[n.join("."),r,"\u2192",o];case"N":return[n.join("."),o];case"D":return[n.join(".")];case"A":return[n.join(".")+"["+i+"]",a];default:return[]}}function m(e,t,n,r){var o=s(e,t);try{r?n.groupCollapsed("diff"):n.group("diff")}catch(e){n.log("diff")}o?o.forEach((function(e){var t=e.kind,r=y(e);n.log.apply(n,["%c "+z[t].text,b(t)].concat(C(r)))})):n.log("\u2014\u2014 no diff \u2014\u2014");try{n.groupEnd()}catch(e){n.log("\u2014\u2014 diff end \u2014\u2014 ")}}function w(e,t,n,r){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[r]?e[r].apply(e,C(n)):e[r];case"function":return e(t);default:return e}}function x(e){var t=e.timestamp,n=e.duration;return function(e,r,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+r),n&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function k(e,t){var n=t.logger,r=t.actionTransformer,o=t.titleFormatter,i=void 0===o?x(t):o,a=t.collapsed,u=t.colors,l=t.level,c=t.diff,f="undefined"==typeof t.titleFormatter;e.forEach((function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,v=o.error,b=o.took,y=o.nextState,x=e[s+1];x&&(y=x.prevState,b=x.started-d);var k=r(g),j="function"==typeof a?a((function(){return y}),g,o):a,S=O(p),E=u.title?"color: "+u.title(k)+";":"",_=["color: gray; font-weight: lighter;"];_.push(E),t.timestamp&&_.push("color: gray; font-weight: lighter;"),t.duration&&_.push("color: gray; font-weight: lighter;");var A=i(k,S,b);try{j?u.title&&f?n.groupCollapsed.apply(n,["%c "+A].concat(_)):n.groupCollapsed(A):u.title&&f?n.group.apply(n,["%c "+A].concat(_)):n.group(A)}catch(e){n.log(A)}var D=w(l,k,[h],"prevState"),N=w(l,k,[k],"action"),C=w(l,k,[v,h],"error"),P=w(l,k,[y],"nextState");if(D)if(u.prevState){var z="color: "+u.prevState(h)+"; font-weight: bold";n[D]("%c prev state",z,h)}else n[D]("prev state",h);if(N)if(u.action){var F="color: "+u.action(k)+"; font-weight: bold";n[N]("%c action    ",F,k)}else n[N]("action    ",k);if(v&&C)if(u.error){var I="color: "+u.error(v,h)+"; font-weight: bold;";n[C]("%c error     ",I,v)}else n[C]("error     ",v);if(P)if(u.nextState){var T="color: "+u.nextState(y)+"; font-weight: bold";n[P]("%c next state",T,y)}else n[P]("next state",y);c&&m(h,y,n,j);try{n.groupEnd()}catch(e){n.log("\u2014\u2014 log end \u2014\u2014")}}))}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},F,e),n=t.logger,r=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,u=t.diffPredicate;if("undefined"==typeof n)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var l=[];return function(e){var n=e.getState;return function(e){return function(c){if("function"==typeof i&&!i(n,c))return e(c);var f={};l.push(f),f.started=D.now(),f.startedTime=new Date,f.prevState=r(n()),f.action=c;var s=void 0;if(a)try{s=e(c)}catch(e){f.error=o(e)}else s=e(c);f.took=D.now()-f.started,f.nextState=r(n());var d=t.diff&&"function"==typeof u?u(n,c):t.diff;if(k(l,Object.assign({},t,{diff:d})),l.length=0,f.error)throw f.error;return s}}}}var S,E,_=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return _("0",t-e.toString().length)+e},O=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},D="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},P=[];S="object"===("undefined"==typeof e?"undefined":N(e))&&e?e:"undefined"!=typeof window?window:{},(E=S.DeepDiff)&&P.push((function(){"undefined"!=typeof E&&S.DeepDiff===s&&(S.DeepDiff=E,E=void 0)})),n(o,r),n(i,r),n(a,r),n(u,r),Object.defineProperties(s,{diff:{value:s,enumerable:!0},observableDiff:{value:f,enumerable:!0},applyDiff:{value:v,enumerable:!0},applyChange:{value:p,enumerable:!0},revertChange:{value:h,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof E},enumerable:!0},noConflict:{value:function(){return P&&(P.forEach((function(e){e()})),P=null),s},enumerable:!0}});var z={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},F={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,n=e.getState;return"function"==typeof t||"function"==typeof n?j()({dispatch:t,getState:n}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};t.defaults=F,t.createLogger=j,t.logger=I,t.default=I,Object.defineProperty(t,"__esModule",{value:!0})}(t)}).call(this,n("yLpj"))},"2I6W":function(e,t,n){"use strict";n.r(t),n.d(t,"__N_SSP",(function(){return y}));var r=n("q1tI"),o=n.n(r),i=n("nOHt"),a=n("vOnD"),u=(n("fTHX"),o.a.createElement),l=a.b.div.withConfig({displayName:"Slider__Wrapper",componentId:"sc-17tqp4z-0"})(["float:left;display:flex;width:60%;@media (max-width:1189px){width:100%;}button{display:block;width:30px;font-size:20px;font-weight:boler;color:grey;outline-style:none;border:none;background-color:#333;&:hover{cursor:pointer;background-color:#444;}&:active{background-color:#555;}}"]),c=a.b.div.withConfig({displayName:"Slider__Sliderbox",componentId:"sc-17tqp4z-1"})(["border-radius:5px;width:100%;padding:25% 0;position:relative;overflow:hidden;flex:1;"]),f=(a.b.div.withConfig({displayName:"Slider__Innerbox",componentId:"sc-17tqp4z-2"})(["position:relative;width:100%;height:100%;right:40px;"]),a.b.div.withConfig({displayName:"Slider__Img",componentId:"sc-17tqp4z-3"})(["position:absolute;top:0;left:",";background-image:url(",");background-size:cover;background-position:center;width:100%;height:100%;transition:all .5s ease-in-out;"],(function(e){return 100*e.id-100*e.state+"%"}),(function(e){return e.src})));var s=function(e){var t=e.slides,n=Object(r.useState)(1),o=n[0],i=n[1];return console.log(t),u(l,null,u("button",{onClick:function(){1!=o&&i(o-1)}},"\u2190"),u(c,null,t?t.map((function(e,t){return u(f,{key:t,id:t,src:e.image,state:o})})):null),u("button",{onClick:function(){o!=t.length-1&&i(o+1)}},"\u2192"))},d=o.a.createElement,p=["January","February","March","April","May","June","July","August","September","October","November","December"],g=a.b.div.withConfig({displayName:"slug__Column",componentId:"y6zr3n-0"})(["box-sizing:border-box;float:left;width:40%;padding:0px 20px;@media (max-width:1189px){width:100%;padding:0px 0px;}a{color:orange;text-decoration:none;line-height:40px;font-weight:bolder;}"]),h=a.b.div.withConfig({displayName:"slug__Head",componentId:"y6zr3n-1"})(["display:flex;justify-content:space-between;align-items:center;padding:10px 0px;div:nth-child(1){font-size:33px;}div:nth-child(2){font-size:24px;padding:5px 10px;background-color:#444;border-radius:5px;border:1px solid #777;}"]),v=a.b.div.withConfig({displayName:"slug__Released",componentId:"y6zr3n-2"})(["padding:0px 0px;text-align:right;color:#777;"]),b=a.b.div.withConfig({displayName:"slug__Descr",componentId:"y6zr3n-3"})(["color:#e5e4e4;letter-spacing:0.3px;position:relative;overflow:hidden;height:",";div{position:",";top:0;left:0;width:100%;height:102%;text-align:justify;}button{display:block;position:absolute;bottom:0px;width:100%;background-color:rgba(50,50,50,0.95);color:white;border:none;outline-style:none;padding:5px;cursor:pointer;}"],(function(e){return e.open?null:"100px"}),(function(e){return e.open?"relative":"absolute"})),y=!0;t.default=function(){var e=Object(r.useState)(!1),t=e[0],n=e[1],o=Object(r.useState)(null),a=o[0],u=o[1],l=Object(r.useState)({}),c=l[0],f=c.name,y=c.description_raw,m=c.website,w=(c.background_image,c.rating),x=c.released,k=l[1],j=Object(i.useRouter)().query.slug;return Object(r.useEffect)((function(){if(j)return fetch("https://api.rawg.io/api/games/"+j+"/screenshots").then((function(e){if(!e.ok)throw new Error(e);return e.json()})).then((function(e){return u(e.results)})).catch((function(e){return console.log(e)})),function(){}}),[]),Object(r.useEffect)((function(){if(j)return fetch("https://api.rawg.io/api/games/"+j).then((function(e){if(!e.ok)throw new Error(e);return console.log(e),e.json()})).then((function(e){console.log(e),k(e)})).catch((function(e){return console.log(e)})),function(){}}),[]),d("div",null,d(s,{slides:a}),d(g,null,d(h,null,d("div",null,f),d("div",null,w)),d(v,null,new Date(x).getDate(),"  ",p[new Date(x).getMonth()],", ",new Date(x).getFullYear()),d(b,{open:t},d("div",null,y,d("br",null),"\xa0",d("br",null),"\xa0"),d("button",{onClick:function(){return n(!t)}},t?"less":"more")),d("a",{href:m,target:"_blank"},"Go to website \u2192")))}},EAsZ:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/game/[slug]",function(){return n("2I6W")}])},fTHX:function(e,t,n){"use strict";var r=n("ANjH"),o=n("1mXj"),i=n.n(o);function a(e){return function(t){var n=t.dispatch,r=t.getState;return function(t){return function(o){return"function"===typeof o?o(n,r,e):t(o)}}}}var u=a();u.withExtraArgument=a;var l=u,c=n("Krf4"),f={items:[],filter:null,searchWord:null,order:null,isFetching:!1,fetchingError:{status:null}},s=Object(r.c)({filter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.filter,t=arguments.length>1?arguments[1]:void 0;if(t.type===c.d)return t.filter;return e},searchWord:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.searchWord,t=arguments.length>1?arguments[1]:void 0;if(console.log("ACTION",t),t.type===c.h)return t.word;return e},order:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.order,t=arguments.length>1?arguments[1]:void 0;if(t.type===c.g)return t.order;return e},isFetching:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.isFetching,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.e:return!0;case c.f:return!1;default:return e}},items:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.items,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.a:return e.concat(t.items);case c.b:return t.items;default:return e}},fetchingError:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f.fetchingError,t=arguments.length>1?arguments[1]:void 0;if(t.type===c.c)return t.error;return e}});var d=Object(r.d)(s,Object(r.a)(l,i.a));t.a=d}},[["EAsZ",1,2,0,3]]]);