"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NftsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Nfts_1 = require("../entities/Nfts");
const Collections_1 = require("../entities/Collections");
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
        const bannerIdList = ["1", "2", "3", "4"];
        const bannerResult = await this.collectionsRepository
            .createQueryBuilder("collections")
            .where("collections.id IN (:...ids)", { ids: bannerIdList })
            .getMany();
        const mainCollectionIdList = ["1", "2", "3", "4"];
        const mainCollectionsResult = await this.collectionsRepository
            .createQueryBuilder("collections")
            .where("collections.id IN (:...ids)", { ids: mainCollectionIdList })
            .getMany();
        const mainProductsResult = await this.nftsRepository
            .createQueryBuilder("nfts")
            .where("nfts.isUse = true")
            .take(8)
            .getMany();
        return {
            banner: bannerResult,
            mainCollections: mainCollectionsResult,
            mainProducts: mainProductsResult,
        };
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(Nfts_1.Nfts),
    __metadata("design:type", typeorm_2.Repository)
], NftsService.prototype, "nftsRepository", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(Collections_1.Collections),
    __metadata("design:type", typeorm_2.Repository)
], NftsService.prototype, "collectionsRepository", void 0);
NftsService = __decorate([
    (0, common_1.Injectable)()
], NftsService);
exports.NftsService = NftsService;
//# sourceMappingURL=nft.service.js.map