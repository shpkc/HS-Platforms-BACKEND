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
        controllers: [nft_controller_1.NftsController],
        providers: [nft_service_1.NftsService],
    })
], NftModule);
exports.NftModule = NftModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("41f2006d2096ccbd367a")
/******/ })();
/******/ 
/******/ }
;