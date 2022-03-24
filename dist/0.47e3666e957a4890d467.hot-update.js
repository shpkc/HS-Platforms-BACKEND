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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NftsService = void 0;
const common_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(12);
const typeorm_2 = __webpack_require__(20);
const Nfts_1 = __webpack_require__(21);
let NftsService = class NftsService {
    async getNfts(page, perPage) {
        const [result, total] = await this.nftsRepository
            .createQueryBuilder("nfts")
            .where("nfts.isUse = true")
            .andWhere("nfts.isSold = false")
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
    async getAllNftsId() {
        const [result] = await this.nftsRepository
            .createQueryBuilder("nfts")
            .select(["nfts.id"])
            .getManyAndCount();
        return {
            result,
        };
    }
    async getNftsMain() {
        const recommendIdList = ["5", "5", "5", "5"];
        const recommendResult = await this.nftsRepository
            .createQueryBuilder("nfts")
            .where("nfts.id IN (:...ids)", { ids: recommendIdList })
            .getMany();
        const bannerIdList = ["1"];
        const bannerResult = await this.collectionsRepository
            .createQueryBuilder("collections")
            .where("collections.id IN (:...ids)", { ids: bannerIdList })
            .getMany();
        return {
            banner: bannerResult,
            recommend: recommendResult,
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
/******/ 	__webpack_require__.h = () => ("05d200397902ac67b467")
/******/ })();
/******/ 
/******/ }
;