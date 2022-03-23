"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 41:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NftModule = void 0;
const common_1 = __webpack_require__(10);
const nft_controller_1 = __webpack_require__(42);
const nft_service_1 = __webpack_require__(43);
let NftModule = class NftModule {
};
NftModule = __decorate([
    (0, common_1.Module)({
        controllers: [nft_controller_1.NftController],
        providers: [nft_service_1.NftService]
    })
], NftModule);
exports.NftModule = NftModule;


/***/ }),

/***/ 43:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NftService = void 0;
const common_1 = __webpack_require__(10);
let NftService = class NftService {
};
NftService = __decorate([
    (0, common_1.Injectable)()
], NftService);
exports.NftService = NftService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("44b6e3941a1c3baef2f0")
/******/ })();
/******/ 
/******/ }
;