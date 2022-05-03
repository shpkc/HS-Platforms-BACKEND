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
exports.ExhibitionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Exhibitions_1 = require("../entities/Exhibitions");
const Collections_1 = require("../entities/Collections");
let ExhibitionsService = class ExhibitionsService {
    async getExhibitions(page, perPage) {
        const [result, total] = await this.exhibitionsRepository
            .createQueryBuilder("exhibitions")
            .where("products.isUse = true")
            .take(perPage)
            .skip(perPage * (page - 1))
            .getManyAndCount();
        return {
            result,
            totalCount: total,
        };
    }
    async getExhibitionsDetail(id) {
        const result = await this.exhibitionsRepository.findOne({
            where: {
                id: id,
            },
        });
        return {
            result,
        };
    }
    async getAllExhibitionsId() {
        const result = await this.exhibitionsRepository
            .createQueryBuilder("exhibitions")
            .where("exhibitions.isUse = true")
            .select(["exhibitions.id"])
            .getMany();
        return {
            result,
        };
    }
    async getMain() {
        const bannerIdList = ["1", "2", "3", "4"];
        const bannerResult = await this.collectionsRepository
            .createQueryBuilder("collections")
            .where("collections.id IN (:...ids)", { ids: bannerIdList })
            .getMany();
        const recommendCollectionIdList = ["1", "2", "3", "4"];
        const recommendCollectionsResult = await this.collectionsRepository
            .createQueryBuilder("collections")
            .where("collections.id IN (:...ids)", { ids: recommendCollectionIdList })
            .getMany();
        const newExhibitionsResult = await this.exhibitionsRepository
            .createQueryBuilder("exhibitions")
            .where("exhibitions.isNew = true")
            .take(8)
            .getMany();
        const bestExhibitionsIdList = ["1", "2", "3", "4", "6", "10", "13", "14"];
        const bestExhibitionsResult = await this.exhibitionsRepository
            .createQueryBuilder("exhibitions")
            .where("exhibitions.id IN (:...ids)", { ids: bestExhibitionsIdList })
            .getMany();
        return {
            banner: bannerResult,
            recommendCollections: recommendCollectionsResult,
            newExhibitions: newExhibitionsResult,
            bestExhibitions: bestExhibitionsResult,
        };
    }
    async rateExhibition(id, score) {
        const exhibition = await this.exhibitionsRepository.findOne({
            where: { id },
        });
        exhibition.reviewScore += score;
        await this.exhibitionsRepository.save(exhibition);
        return {
            serverCode: "200",
            serverMsg: "API : Reserved",
        };
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(Exhibitions_1.Exhibitions),
    __metadata("design:type", typeorm_2.Repository)
], ExhibitionsService.prototype, "exhibitionsRepository", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(Collections_1.Collections),
    __metadata("design:type", typeorm_2.Repository)
], ExhibitionsService.prototype, "collectionsRepository", void 0);
ExhibitionsService = __decorate([
    (0, common_1.Injectable)()
], ExhibitionsService);
exports.ExhibitionsService = ExhibitionsService;
//# sourceMappingURL=exhibitions.service.js.map