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
exports.Nfts = void 0;
const typeorm_1 = require("typeorm");
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
    (0, typeorm_1.Column)("varchar", { name: "category", default: "ART" }),
    __metadata("design:type", String)
], Nfts.prototype, "category", void 0);
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
    (0, typeorm_1.Column)("varchar", { name: "contractAddress", default: "" }),
    __metadata("design:type", String)
], Nfts.prototype, "contractAddress", void 0);
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
    __metadata("design:type", Date)
], Nfts.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Nfts.prototype, "updatedAt", void 0);
Nfts = __decorate([
    (0, typeorm_1.Entity)({ name: "nfts" })
], Nfts);
exports.Nfts = Nfts;
//# sourceMappingURL=Nfts.js.map