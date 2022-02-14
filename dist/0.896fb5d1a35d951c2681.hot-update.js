"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 26:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CourtsController = void 0;
const common_1 = __webpack_require__(10);
const games_service_1 = __webpack_require__(25);
let CourtsController = class CourtsController {
    constructor(gamesService) {
        this.gamesService = gamesService;
    }
    async getGames(page, perPage) {
        return this.gamesService.getGames(page, perPage);
    }
    async getAllGamesId() {
        return this.gamesService.getAllGamesId();
    }
    async getGamesDetail(id) {
        return this.gamesService.getGamesDetail(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("page", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("perPage", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CourtsController.prototype, "getGames", null);
__decorate([
    (0, common_1.Get)("/all-id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CourtsController.prototype, "getAllGamesId", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CourtsController.prototype, "getGamesDetail", null);
CourtsController = __decorate([
    (0, common_1.Controller)("games"),
    __metadata("design:paramtypes", [typeof (_a = typeof games_service_1.GamesService !== "undefined" && games_service_1.GamesService) === "function" ? _a : Object])
], CourtsController);
exports.CourtsController = CourtsController;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4e14f085661846fd3793")
/******/ })();
/******/ 
/******/ }
;