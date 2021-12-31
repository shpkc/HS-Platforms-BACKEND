"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 67:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourtsController = void 0;
const common_1 = __webpack_require__(10);
let CourtsController = class CourtsController {
};
CourtsController = __decorate([
    (0, common_1.Controller)('courts')
], CourtsController);
exports.CourtsController = CourtsController;


/***/ }),

/***/ 65:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourtsModule = void 0;
const common_1 = __webpack_require__(10);
const courts_service_1 = __webpack_require__(66);
const courts_controller_1 = __webpack_require__(67);
let CourtsModule = class CourtsModule {
};
CourtsModule = __decorate([
    (0, common_1.Module)({
        providers: [courts_service_1.CourtsService],
        controllers: [courts_controller_1.CourtsController]
    })
], CourtsModule);
exports.CourtsModule = CourtsModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("9599f3f580ae2a40b8fc")
/******/ })();
/******/ 
/******/ }
;