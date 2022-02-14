"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 25:
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GamesService = void 0;
const common_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(12);
const typeorm_2 = __webpack_require__(20);
const Games_1 = __webpack_require__(28);
let GamesService = class GamesService {
    async getGames(page, perPage) {
        const [result, total] = await this.gamesRepository
            .createQueryBuilder("games")
            .take(perPage)
            .skip(perPage * (page - 1))
            .getManyAndCount();
        return {
            result,
            totalCount: total,
        };
    }
    async getGamesDetail(id) {
        const result = await this.gamesRepository.findOne({
            where: {
                id: id,
            },
        });
        return {
            result,
        };
    }
    async getAllGamesId() {
        const [result, total] = await this.gamesRepository
            .createQueryBuilder("games")
            .select(["games.id"])
            .getManyAndCount();
        return {
            result,
        };
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(Games_1.Games),
    __metadata("design:type", typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object)
], GamesService.prototype, "gamesRepository", void 0);
GamesService = __decorate([
    (0, common_1.Injectable)()
], GamesService);
exports.GamesService = GamesService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1791c3e84988eec67eef")
/******/ })();
/******/ 
/******/ }
;