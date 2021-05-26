(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("react-markdown-to-matrix", [], factory);
	else if(typeof exports === 'object')
		exports["react-markdown-to-matrix"] = factory();
	else
		root["react-markdown-to-matrix"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/*! exports provided: MarkdownToMatrix, ElementWrapperProps, HeadingWrapperProps, Heading, loadAndParseFile, loadFile, parseFile */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from /Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/kip/Dropbox/kip_code/codecademy/markdown-to-matrix/lib/src/index.tsx: Unexpected token (95:1)\\n\\n\\u001b[0m \\u001b[90m 93 | \\u001b[39m\\u001b[90m// additional exports\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 94 | \\u001b[39m\\u001b[36mexport\\u001b[39m { \\u001b[33mElementWrapperProps\\u001b[39m\\u001b[33m,\\u001b[39m \\u001b[33mHeadingWrapperProps\\u001b[39m }\\u001b[33m;\\u001b[39m\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m 95 | \\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<<\\u001b[39m\\u001b[33m<\\u001b[39m \\u001b[33mHEAD\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 96 | \\u001b[39m\\u001b[36mexport\\u001b[39m { \\u001b[33mHeading\\u001b[39m } from \\u001b[32m'./components'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 97 | \\u001b[39m\\u001b[36mexport\\u001b[39m { loadAndParseFile\\u001b[33m,\\u001b[39m loadFile\\u001b[33m,\\u001b[39m parseFile } from \\u001b[32m'./helpers'\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 98 | \\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m===\\u001b[39m\\u001b[33m=\\u001b[39m\\u001b[0m\\n    at Object._raise (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:766:17)\\n    at Object.raiseWithData (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:759:17)\\n    at Object.raise (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:753:17)\\n    at Object.unexpected (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:8966:16)\\n    at Object.jsxParseIdentifier (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:4492:12)\\n    at Object.jsxParseNamespacedName (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:4502:23)\\n    at Object.jsxParseElementName (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:4513:21)\\n    at Object.jsxParseOpeningElementAt (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:4599:22)\\n    at Object.jsxParseElementAt (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:4632:33)\\n    at Object.jsxParseElement (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:4706:17)\\n    at Object.parseExprAtom (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:4713:19)\\n    at Object.parseExprSubscripts (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:9844:23)\\n    at Object.parseUpdate (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:9824:21)\\n    at Object.parseMaybeUnary (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:9813:17)\\n    at Object.parseMaybeUnary (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:7000:20)\\n    at Object.parseExprOps (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:9683:23)\\n    at Object.parseMaybeConditional (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:9657:23)\\n    at Object.parseMaybeAssign (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:9620:21)\\n    at /Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:6931:39\\n    at Object.tryParse (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:9003:20)\\n    at Object.parseMaybeAssign (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:6931:18)\\n    at Object.parseExpressionBase (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:9564:23)\\n    at /Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:9558:39\\n    at Object.allowInAnd (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:11296:16)\\n    at Object.parseExpression (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:9558:17)\\n    at Object.parseStatementContent (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:11561:23)\\n    at Object.parseStatementContent (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:6698:18)\\n    at Object.parseStatement (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:11430:17)\\n    at Object.parseBlockOrModuleBlockBody (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:12012:25)\\n    at Object.parseBlockBody (/Users/kip/npm/codecademy/react-markdown-to-matrix/lib/node_modules/@babel/parser/lib/index.js:11998:10)\");\n\n//# sourceURL=webpack://react-markdown-to-matrix/./src/index.tsx?");

/***/ })

/******/ });
});