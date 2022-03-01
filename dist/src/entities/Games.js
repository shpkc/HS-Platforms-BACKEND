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
exports.Games = void 0;
const typeorm_1 = require("typeorm");
let Games = class Games {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Games.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "title" }),
    __metadata("design:type", String)
], Games.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "description" }),
    __metadata("design:type", String)
], Games.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "genre" }),
    __metadata("design:type", String)
], Games.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "developer" }),
    __metadata("design:type", String)
], Games.prototype, "developer", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "currency" }),
    __metadata("design:type", String)
], Games.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "website", default: "" }),
    __metadata("design:type", String)
], Games.prototype, "website", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isReleased", default: true }),
    __metadata("design:type", Boolean)
], Games.prototype, "isReleased", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isWindow", default: true }),
    __metadata("design:type", Boolean)
], Games.prototype, "isWindow", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isApple", default: false }),
    __metadata("design:type", Boolean)
], Games.prototype, "isApple", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isGoogle", default: false }),
    __metadata("design:type", Boolean)
], Games.prototype, "isGoogle", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isSteam", default: false }),
    __metadata("design:type", Boolean)
], Games.prototype, "isSteam", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isNFT", default: false }),
    __metadata("design:type", Boolean)
], Games.prototype, "isNFT", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "releaseDate", default: "" }),
    __metadata("design:type", String)
], Games.prototype, "releaseDate", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Games.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Games.prototype, "updatedAt", void 0);
Games = __decorate([
    (0, typeorm_1.Index)("title", ["title"]),
    (0, typeorm_1.Entity)({ name: "games" })
], Games);
exports.Games = Games;
//# sourceMappingURL=Games.js.map