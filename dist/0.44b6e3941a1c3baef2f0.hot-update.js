"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 44:
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Nfts = void 0;
const typeorm_1 = __webpack_require__(20);
let Nfts = class Nfts {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Nfts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "tokenId" }),
    __metadata("design:type", String)
], Nfts.prototype, "tokenId", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "title" }),
    __metadata("design:type", String)
], Nfts.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "description" }),
    __metadata("design:type", String)
], Nfts.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "currency", default: "ETH" }),
    __metadata("design:type", String)
], Nfts.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "price", default: 1.0 }),
    __metadata("design:type", Number)
], Nfts.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "mediaType", default: "IMAGE" }),
    __metadata("design:type", String)
], Nfts.prototype, "mediaType", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "image", default: "" }),
    __metadata("design:type", String)
], Nfts.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "owner", default: "" }),
    __metadata("design:type", String)
], Nfts.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "seller", default: "" }),
    __metadata("design:type", String)
], Nfts.prototype, "seller", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isSold", default: false }),
    __metadata("design:type", Boolean)
], Nfts.prototype, "isSold", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isUse", default: true }),
    __metadata("design:type", Boolean)
], Nfts.prototype, "isUse", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Nfts.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Nfts.prototype, "updatedAt", void 0);
Nfts = __decorate([
    (0, typeorm_1.Entity)({ name: "nfts" })
], Nfts);
exports.Nfts = Nfts;


/***/ }),

/***/ 42:
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
exports.NftsController = void 0;
const common_1 = __webpack_require__(10);
const nft_service_1 = __webpack_require__(43);
let NftsController = class NftsController {
    constructor(nftsService) {
        this.nftsService = nftsService;
    }
    async getNfts(page, perPage) {
        return this.nftsService.getNfts(page, perPage);
    }
    async getAllGamesId() {
        return this.nftsService.getAllGamesId();
    }
    async getNftsMain() {
        return this.nftsService.getNftssMain();
    }
    async getNftsDetail(id) {
        return this.nftsService.getNftsDetail(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("page", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("perPage", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], NftsController.prototype, "getNfts", null);
__decorate([
    (0, common_1.Get)("/all-id"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NftsController.prototype, "getAllGamesId", null);
__decorate([
    (0, common_1.Get)("/main"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NftsController.prototype, "getNftsMain", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NftsController.prototype, "getNftsDetail", null);
NftsController = __decorate([
    (0, common_1.Controller)("nft"),
    __metadata("design:paramtypes", [typeof (_a = typeof nft_service_1.NftsService !== "undefined" && nft_service_1.NftsService) === "function" ? _a : Object])
], NftsController);
exports.NftsController = NftsController;


/***/ }),

/***/ 43:
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
exports.NftsService = void 0;
const common_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(12);
const typeorm_2 = __webpack_require__(20);
const Nfts_1 = __webpack_require__(44);
let NftsService = class NftsService {
    async getNfts(page, perPage) {
        const [result, total] = await this.nftsRepository
            .createQueryBuilder("nfts")
            .where("games.isSold = false")
            .andWhere("games.isReleased = false")
            .take(perPage)
            .skip(perPage * (page - 1))
            .getManyAndCount();
        return {
            result,
            totalCount: total,
        };
    }
    async getNftsDetail(id) {
        const result = await this.nftsRepository.findOne({
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
    async getGamesMain() {
        const bannerIdList = ["22", "19", "23", "24"];
        const bannerResult = await this.gamesRepository
            .createQueryBuilder("games")
            .where("games.id IN (:...ids)", { ids: bannerIdList })
            .getMany();
        const upcomingResult = await this.gamesRepository
            .createQueryBuilder("games")
            .where("games.isUse = true")
            .andWhere("games.isReleased = false")
            .take(4)
            .getMany();
        const bestIdList = ["16", "18", "17", "22", "20"];
        const bestResult = await this.gamesRepository
            .createQueryBuilder("games")
            .where("games.id IN (:...ids)", { ids: bestIdList })
            .getMany();
        return {
            banner: bannerResult,
            upcoming: upcomingResult,
            best: bestResult,
        };
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(Nfts_1.Nfts),
    __metadata("design:type", typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object)
], NftsService.prototype, "nftsRepository", void 0);
NftsService = __decorate([
    (0, common_1.Injectable)()
], NftsService);
exports.NftsService = NftsService;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3f9f5eb78a176e997434")
/******/ })();
/******/ 
/******/ }
;