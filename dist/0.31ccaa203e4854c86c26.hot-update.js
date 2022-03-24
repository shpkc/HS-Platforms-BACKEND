"use strict";
exports.id = 0;
exports.ids = null;
exports.modules = {

/***/ 45:
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
exports.CollectionsController = void 0;
const common_1 = __webpack_require__(10);
const collections_service_1 = __webpack_require__(44);
let CollectionsController = class CollectionsController {
    constructor(collectionsService) {
        this.collectionsService = collectionsService;
    }
    async getCollections(page, perPage) {
        return this.collectionsService.getCollections(page, perPage);
    }
    async getCollectionsDetail(id) {
        return this.collectionsService.getCollectionsDetail(id);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)("page", common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)("perPage", common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], CollectionsController.prototype, "getCollections", null);
__decorate([
    (0, common_1.Get)("/:id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CollectionsController.prototype, "getCollectionsDetail", null);
CollectionsController = __decorate([
    (0, common_1.Controller)("collections"),
    __metadata("design:paramtypes", [typeof (_a = typeof collections_service_1.CollectionsService !== "undefined" && collections_service_1.CollectionsService) === "function" ? _a : Object])
], CollectionsController);
exports.CollectionsController = CollectionsController;


/***/ }),

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
exports.CollectionsService = void 0;
const common_1 = __webpack_require__(10);
const typeorm_1 = __webpack_require__(12);
const typeorm_2 = __webpack_require__(20);
const Collections_1 = __webpack_require__(48);
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
    __metadata("design:type", typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object)
], CollectionsService.prototype, "collectionsRepository", void 0);
CollectionsService = __decorate([
    (0, common_1.Injectable)()
], CollectionsService);
exports.CollectionsService = CollectionsService;


/***/ }),

/***/ 48:
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
exports.Collections = void 0;
const typeorm_1 = __webpack_require__(20);
let Collections = class Collections {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Collections.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "title" }),
    __metadata("design:type", String)
], Collections.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "description" }),
    __metadata("design:type", String)
], Collections.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isUse", default: true }),
    __metadata("design:type", Boolean)
], Collections.prototype, "isUse", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Collections.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Collections.prototype, "updatedAt", void 0);
Collections = __decorate([
    (0, typeorm_1.Entity)({ name: "collections" })
], Collections);
exports.Collections = Collections;


/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("775384d9f2e5f47d24a8")
/******/ })();
/******/ 
/******/ }
;