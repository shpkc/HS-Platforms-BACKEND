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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Products_1 = require("../entities/Products");
const Collections_1 = require("../entities/Collections");
let ProductsService = class ProductsService {
    async getProducts(page, perPage) {
        const [result, total] = await this.productsRepository
            .createQueryBuilder("products")
            .where("products.isUse = true")
            .take(perPage)
            .skip(perPage * (page - 1))
            .getManyAndCount();
        return {
            result,
            totalCount: total,
        };
    }
    async getProductsDetail(id) {
        const result = await this.productsRepository.findOne({
            where: {
                id: id,
            },
        });
        return {
            result,
        };
    }
    async getAllProductsId() {
        const result = await this.productsRepository
            .createQueryBuilder("nfts")
            .where("nfts.isUse = true")
            .select(["nfts.id"])
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
        const newProductsResult = await this.productsRepository
            .createQueryBuilder("products")
            .where("products.isNew = true")
            .take(8)
            .getMany();
        const bestProductsIdList = ["1", "2", "3", "4"];
        const bestProductsResult = await this.productsRepository
            .createQueryBuilder("products")
            .where("collections.id IN (:...ids)", { ids: bestProductsIdList })
            .getMany();
        return {
            banner: bannerResult,
            recommendCollections: recommendCollectionsResult,
            newProducts: newProductsResult,
            bestProducts: bestProductsResult,
        };
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(Products_1.Products),
    __metadata("design:type", typeorm_2.Repository)
], ProductsService.prototype, "productsRepository", void 0);
__decorate([
    (0, typeorm_1.InjectRepository)(Collections_1.Collections),
    __metadata("design:type", typeorm_2.Repository)
], ProductsService.prototype, "collectionsRepository", void 0);
ProductsService = __decorate([
    (0, common_1.Injectable)()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map