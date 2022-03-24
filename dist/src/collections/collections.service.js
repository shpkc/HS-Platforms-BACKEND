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
exports.CollectionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Collections_1 = require("../entities/Collections");
let CollectionsService = class CollectionsService {
    async getCollections(page, perPage) {
        const [result, total] = await this.collectionsRepository
            .createQueryBuilder("collections")
            .where("collections.isUse = true")
            .take(perPage)
            .skip(perPage * (page - 1))
            .getManyAndCount();
        return {
            result,
            totalCount: total,
        };
    }
    async getCollectionsDetail(id) {
        const result = await this.collectionsRepository.findOne({
            where: {
                id: id,
            },
        });
        return {
            result,
        };
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(Collections_1.Collections),
    __metadata("design:type", typeorm_2.Repository)
], CollectionsService.prototype, "collectionsRepository", void 0);
CollectionsService = __decorate([
    (0, common_1.Injectable)()
], CollectionsService);
exports.CollectionsService = CollectionsService;
//# sourceMappingURL=collections.service.js.map