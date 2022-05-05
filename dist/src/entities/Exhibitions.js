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
exports.Exhibitions = void 0;
const typeorm_1 = require("typeorm");
let Exhibitions = class Exhibitions {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Exhibitions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "title" }),
    __metadata("design:type", String)
], Exhibitions.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "description", default: "" }),
    __metadata("design:type", String)
], Exhibitions.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "category", default: "" }),
    __metadata("design:type", String)
], Exhibitions.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "location", default: "" }),
    __metadata("design:type", String)
], Exhibitions.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "duration", default: "" }),
    __metadata("design:type", String)
], Exhibitions.prototype, "duration", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "reviewScore", default: 0.0 }),
    __metadata("design:type", Number)
], Exhibitions.prototype, "reviewScore", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "reviewParticipants", default: 1 }),
    __metadata("design:type", Number)
], Exhibitions.prototype, "reviewParticipants", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "keywords", default: "" }),
    __metadata("design:type", String)
], Exhibitions.prototype, "keywords", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isNew", default: false }),
    __metadata("design:type", Boolean)
], Exhibitions.prototype, "isNew", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isSeoul", default: true }),
    __metadata("design:type", Boolean)
], Exhibitions.prototype, "isSeoul", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isOngoing", default: true }),
    __metadata("design:type", Boolean)
], Exhibitions.prototype, "isOngoing", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isUse", default: true }),
    __metadata("design:type", Boolean)
], Exhibitions.prototype, "isUse", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Exhibitions.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Exhibitions.prototype, "updatedAt", void 0);
Exhibitions = __decorate([
    (0, typeorm_1.Entity)({ name: "exhibitions" })
], Exhibitions);
exports.Exhibitions = Exhibitions;
//# sourceMappingURL=Exhibitions.js.map