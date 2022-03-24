"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 47:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CollectionModule = void 0;
const common_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(12);
const Collections_1 = __webpack_require__(23);
const collections_controller_1 = __webpack_require__(46);
const collections_service_1 = __webpack_require__(45);
let CollectionModule = class CollectionModule {
};
CollectionModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([Collections_1.Collections])],
        controllers: [collections_controller_1.CollectionsController],
        providers: [collections_service_1.CollectionsService],
    })
], CollectionModule);
exports.CollectionModule = CollectionModule;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("a8894ac117c24dc2e685")
/******/ })();
/******/ 
/******/ }
;