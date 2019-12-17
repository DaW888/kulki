/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/ShortestWay.ts":
/*!****************************!*\
  !*** ./src/ShortestWay.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar __spreadArrays = (undefined && undefined.__spreadArrays) || function () {\r\n    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;\r\n    for (var r = Array(s), k = 0, i = 0; i < il; i++)\r\n        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)\r\n            r[k] = a[j];\r\n    return r;\r\n};\r\nvar ShortestWay = /** @class */ (function () {\r\n    function ShortestWay() {\r\n        this.valTab = [];\r\n        this.pathTab = [];\r\n        this.posTab = [];\r\n        this.fillValTab();\r\n        this.fillPathTab();\r\n        this.fillPosTab();\r\n    }\r\n    ShortestWay.prototype.fillValTab = function () {\r\n        for (var i = 0; i < 9; i++) {\r\n            this.valTab[i] = [];\r\n            for (var j = 0; j < 9; j++) {\r\n                this.valTab[i][j] = 0;\r\n            }\r\n        }\r\n    };\r\n    ShortestWay.prototype.fillPathTab = function () {\r\n        for (var i = 0; i < 9; i++) {\r\n            this.pathTab[i] = [];\r\n            for (var j = 0; j < 9; j++) {\r\n                this.pathTab[i][j] = [];\r\n            }\r\n        }\r\n    };\r\n    ShortestWay.prototype.fillPosTab = function () {\r\n        for (var i = 0; i < 9; i++) {\r\n            this.posTab[i] = [];\r\n            for (var j = 0; j < 9; j++) {\r\n                this.posTab[i][j] = i + \" \" + j;\r\n            }\r\n        }\r\n    };\r\n    ShortestWay.prototype.find = function (start, meta) {\r\n        this.valTab[start.x][start.y] = 'S';\r\n        this.valTab[meta.x][meta.y] = 'M';\r\n        // this.valTab[0][5] = 'X';\r\n        // this.valTab[1][5] = 'X';\r\n        // this.valTab[2][5] = 'X';\r\n        // this.valTab[4][5] = 'X';\r\n        // this.valTab[5][5] = 'X';\r\n        // this.valTab[6][5] = 'X';\r\n        // this.valTab[7][5] = 'X';\r\n        // this.valTab[8][5] = 'X';\r\n        var curs = [];\r\n        curs.push(start);\r\n        //let g, d, l, p; // gora, dol, lewo, prawo\r\n        var nCurs = [];\r\n        var found = false;\r\n        for (var i = 1; i <= 20; i++) {\r\n            nCurs = [];\r\n            for (var j = 0; j < curs.length; j++) {\r\n                console.log(curs[j]);\r\n                var _a = this.getValues(curs[j]), g = _a.g, d = _a.d, l = _a.l, p = _a.p, posG = _a.posG, posD = _a.posD, posL = _a.posL, posP = _a.posP;\r\n                console.log(g, d, l, p, posG, posD, posL, posP);\r\n                var poss = this.addPath(i, curs[j], posG, posD, posL, posP);\r\n                console.log(nCurs);\r\n                nCurs.push.apply(nCurs, poss);\r\n                console.log(nCurs);\r\n                console.log(poss);\r\n                console.log(this.pathTab);\r\n                if (g == 'M' || d == 'M' || l == 'M' || p == 'M') {\r\n                    console.log('Znalazl');\r\n                    found = true;\r\n                    break;\r\n                }\r\n            }\r\n            if (found) {\r\n                console.log(this.pathTab[meta.x][meta.y]);\r\n                var path = this.pathTab[meta.x][meta.y];\r\n                // this.drawTab();\r\n                this.drawPath(path);\r\n                break;\r\n            }\r\n            console.log(nCurs);\r\n            curs = nCurs;\r\n        }\r\n        if (!found) {\r\n            // this.drawTab();\r\n        }\r\n        console.log(nCurs);\r\n    };\r\n    ShortestWay.prototype.addPath = function (i, cur, posG, posD, posL, posP) {\r\n        var poss = [];\r\n        console.log('TO JEST IIII', i);\r\n        if (posG) {\r\n            console.log('G:', posG);\r\n            if (this.valTab[posG.x][posG.y] == 0 && this.pathTab[posG.x][posG.y].length == 0) {\r\n                this.pathTab[posG.x][posG.y] = __spreadArrays(this.pathTab[cur.x][cur.y], [this.posTab[posG.x][posG.y]]);\r\n                poss.push(posG);\r\n                this.valTab[posG.x][posG.y] = i;\r\n            }\r\n            else if (this.valTab[posG.x][posG.y] == 'M' && this.pathTab[posG.x][posG.y].length == 0) {\r\n                this.pathTab[posG.x][posG.y] = __spreadArrays(this.pathTab[cur.x][cur.y], [this.posTab[posG.x][posG.y]]);\r\n                poss.push(posG);\r\n            }\r\n        }\r\n        if (posD) {\r\n            console.log('D:', posD);\r\n            if (this.valTab[posD.x][posD.y] == 0 && this.pathTab[posD.x][posD.y].length == 0) {\r\n                this.pathTab[posD.x][posD.y] = __spreadArrays(this.pathTab[cur.x][cur.y], [this.posTab[posD.x][posD.y]]);\r\n                poss.push(posD);\r\n                this.valTab[posD.x][posD.y] = i;\r\n            }\r\n            else if (this.valTab[posD.x][posD.y] == 'M' && this.pathTab[posD.x][posD.y].length == 0) {\r\n                this.pathTab[posD.x][posD.y] = __spreadArrays(this.pathTab[cur.x][cur.y], [this.posTab[posD.x][posD.y]]);\r\n                poss.push(posD);\r\n            }\r\n        }\r\n        if (posL) {\r\n            console.log('L:', posL);\r\n            if (this.valTab[posL.x][posL.y] == 0 && this.pathTab[posL.x][posL.y].length == 0) {\r\n                this.pathTab[posL.x][posL.y] = __spreadArrays(this.pathTab[cur.x][cur.y], [this.posTab[posL.x][posL.y]]);\r\n                poss.push(posL);\r\n                this.valTab[posL.x][posL.y] = i;\r\n            }\r\n            else if (this.valTab[posL.x][posL.y] == 'M' && this.pathTab[posL.x][posL.y].length == 0) {\r\n                this.pathTab[posL.x][posL.y] = __spreadArrays(this.pathTab[cur.x][cur.y], [this.posTab[posL.x][posL.y]]);\r\n                poss.push(posL);\r\n            }\r\n        }\r\n        if (posP) {\r\n            console.log('P:', posP);\r\n            if (this.valTab[posP.x][posP.y] == 0 && this.pathTab[posP.x][posP.y].length == 0) {\r\n                this.pathTab[posP.x][posP.y] = __spreadArrays(this.pathTab[cur.x][cur.y], [this.posTab[posP.x][posP.y]]);\r\n                poss.push(posP);\r\n                this.valTab[posP.x][posP.y] = i;\r\n            }\r\n            else if (this.valTab[posP.x][posP.y] == 'M' && this.pathTab[posP.x][posP.y].length == 0) {\r\n                this.pathTab[posP.x][posP.y] = __spreadArrays(this.pathTab[cur.x][cur.y], [this.posTab[posP.x][posP.y]]);\r\n                poss.push(posP);\r\n            }\r\n        }\r\n        console.log(poss);\r\n        return poss;\r\n    };\r\n    ShortestWay.prototype.getValues = function (cur) {\r\n        var _a = [null, null, null, null], posG = _a[0], posD = _a[1], posL = _a[2], posP = _a[3];\r\n        var _b = [null, null, null, null], g = _b[0], d = _b[1], l = _b[2], p = _b[3];\r\n        try {\r\n            g = this.valTab[cur.x][cur.y - 1];\r\n            g = g === undefined ? null : g;\r\n        }\r\n        catch (_c) {\r\n            g = null;\r\n        }\r\n        try {\r\n            d = this.valTab[cur.x][cur.y + 1];\r\n            d = d === undefined ? null : d;\r\n        }\r\n        catch (_d) {\r\n            d = null;\r\n        }\r\n        try {\r\n            l = this.valTab[cur.x - 1][cur.y];\r\n            l = l === undefined ? null : l;\r\n        }\r\n        catch (_e) {\r\n            l = null;\r\n        }\r\n        try {\r\n            p = this.valTab[cur.x + 1][cur.y];\r\n            p = p === undefined ? null : p;\r\n        }\r\n        catch (_f) {\r\n            p = null;\r\n        }\r\n        posG = g === null ? null : { x: cur.x, y: cur.y - 1 };\r\n        posD = d === null ? null : { x: cur.x, y: cur.y + 1 };\r\n        posL = l === null ? null : { x: cur.x - 1, y: cur.y };\r\n        posP = p === null ? null : { x: cur.x + 1, y: cur.y };\r\n        return { g: g, d: d, l: l, p: p, posG: posG, posD: posD, posL: posL, posP: posP };\r\n    };\r\n    ShortestWay.prototype.drawTab = function () {\r\n        var main = document.querySelectorAll('.box');\r\n        // main.forEach((m: HTMLElement) => {\r\n        //     if (path.includes(m.dataset.id)) {\r\n        //         console.log('jest');\r\n        //         m.style.backgroundColor = 'blue';\r\n        //     }\r\n        // })\r\n    };\r\n    //NIE RUSZAJ\r\n    ShortestWay.prototype.drawTab2 = function () {\r\n        var main = document.getElementById('main');\r\n        var selected = false;\r\n        this.valTab.forEach(function (el, i) {\r\n            el.forEach(function (el2, j) {\r\n                var dv = document.createElement('div');\r\n                dv.style.border = '2px solid black';\r\n                dv.className = 'box';\r\n                dv.style.width = '50px';\r\n                dv.style.height = '50px';\r\n                dv.innerText = el2.toString();\r\n                dv.setAttribute('data-id', i + \" \" + j);\r\n                dv.onclick = function () {\r\n                    if (!selected) {\r\n                        this.innerText = 'S';\r\n                    }\r\n                    else {\r\n                        this.innerText = 'M';\r\n                    }\r\n                    selected = !selected;\r\n                    this.style.backgroundColor = 'red';\r\n                    console.log(i, j);\r\n                };\r\n                main.appendChild(dv);\r\n            });\r\n        });\r\n    };\r\n    ShortestWay.prototype.drawPath = function (path) {\r\n        var main = document.querySelectorAll('.box');\r\n        console.log(main);\r\n        main.forEach(function (m) {\r\n            if (path.includes(m.dataset.id)) {\r\n                console.log('jest');\r\n                m.style.backgroundColor = 'blue';\r\n            }\r\n        });\r\n    };\r\n    return ShortestWay;\r\n}());\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ShortestWay);\r\n\n\n//# sourceURL=webpack:///./src/ShortestWay.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ShortestWay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ShortestWay */ \"./src/ShortestWay.ts\");\n\r\nvar Main = /** @class */ (function () {\r\n    function Main() {\r\n        this.genTab();\r\n    }\r\n    Main.prototype.genTab = function () {\r\n        var _this = this;\r\n        var main = document.getElementById('main');\r\n        var selected = false;\r\n        var _loop_1 = function (i) {\r\n            var _loop_2 = function (j) {\r\n                var dv = document.createElement('div');\r\n                dv.style.border = '2px solid black';\r\n                dv.className = 'box';\r\n                dv.style.width = '50px';\r\n                dv.style.height = '50px';\r\n                dv.innerText = j.toString();\r\n                dv.setAttribute('data-id', i + \" \" + j);\r\n                dv.onclick = function (_a) {\r\n                    var target = _a.target;\r\n                    console.log(target);\r\n                    if (!selected) {\r\n                        target.innerText = 'S';\r\n                        _this.start = { x: i, y: j };\r\n                    }\r\n                    else {\r\n                        target.innerText = 'M';\r\n                        _this.meta = { x: i, y: j };\r\n                        var sh = new _ShortestWay__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\r\n                        sh.find(_this.start, _this.meta);\r\n                    }\r\n                    selected = !selected;\r\n                    target.style.backgroundColor = 'red';\r\n                    console.log(i, j);\r\n                };\r\n                main.appendChild(dv);\r\n            };\r\n            for (var j = 0; j < 9; j++) {\r\n                _loop_2(j);\r\n            }\r\n        };\r\n        for (var i = 0; i < 9; i++) {\r\n            _loop_1(i);\r\n        }\r\n    };\r\n    return Main;\r\n}());\r\nnew Main();\r\n// const sh: ShortestWay = new ShortestWay();\r\n// sh.find({ x: 0, y: 0 }, { x: 4, y: 1 });\r\n\n\n//# sourceURL=webpack:///./src/index.ts?");

/***/ })

/******/ });