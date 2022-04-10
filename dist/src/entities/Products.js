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
exports.Products = void 0;
const typeorm_1 = require("typeorm");
let Products = class Products {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Products.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "title" }),
    __metadata("design:type", String)
], Products.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "subTitle" }),
    __metadata("design:type", String)
], Products.prototype, "subTitle", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "description" }),
    __metadata("design:type", String)
], Products.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "category", default: "" }),
    __metadata("design:type", String)
], Products.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "reviewScore", default: 0.0 }),
    __metadata("design:type", Number)
], Products.prototype, "reviewScore", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "reviewParticipants", default: 1 }),
    __metadata("design:type", Number)
], Products.prototype, "reviewParticipants", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "keywords", default: "" }),
    __metadata("design:type", String)
], Products.prototype, "keywords", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "companyName", default: "" }),
    __metadata("design:type", String)
], Products.prototype, "companyName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "companyCeoName", default: "" }),
    __metadata("design:type", String)
], Products.prototype, "companyCeoName", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "homepage", default: "" }),
    __metadata("design:type", String)
], Products.prototype, "homepage", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "webLink", default: "" }),
    __metadata("design:type", String)
], Products.prototype, "webLink", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "appStoreLink", default: "" }),
    __metadata("design:type", String)
], Products.prototype, "appStoreLink", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "playStoreLink", default: "" }),
    __metadata("design:type", String)
], Products.prototype, "playStoreLink", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "releaseDate", default: "" }),
    __metadata("design:type", String)
], Products.prototype, "releaseDate", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isNew", default: false }),
    __metadata("design:type", Boolean)
], Products.prototype, "isNew", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isUse", default: true }),
    __metadata("design:type", Boolean)
], Products.prototype, "isUse", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Products.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Products.prototype, "updatedAt", void 0);
Products = __decorate([
    (0, typeorm_1.Entity)({ name: "products" })
], Products);
exports.Products = Products;
//# sourceMappingURL=Products.js.map