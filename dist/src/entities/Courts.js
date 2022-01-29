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
exports.Courts = void 0;
const typeorm_1 = require("typeorm");
let Courts = class Courts {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Courts.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name", length: 30 }),
    __metadata("design:type", String)
], Courts.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "introduction" }),
    __metadata("design:type", String)
], Courts.prototype, "introduction", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "city" }),
    __metadata("design:type", String)
], Courts.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "address" }),
    __metadata("design:type", String)
], Courts.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "phone" }),
    __metadata("design:type", String)
], Courts.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "lat", default: 0 }),
    __metadata("design:type", Number)
], Courts.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)("float", { name: "lng", default: 0 }),
    __metadata("design:type", Number)
], Courts.prototype, "lng", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { name: "imgLength", default: 0 }),
    __metadata("design:type", Number)
], Courts.prototype, "imgLength", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "reservation" }),
    __metadata("design:type", String)
], Courts.prototype, "reservation", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "reservationLink" }),
    __metadata("design:type", String)
], Courts.prototype, "reservationLink", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "courtType" }),
    __metadata("design:type", String)
], Courts.prototype, "courtType", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "numberOfCourts" }),
    __metadata("design:type", String)
], Courts.prototype, "numberOfCourts", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "keywords", default: "" }),
    __metadata("design:type", String)
], Courts.prototype, "keywords", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isOnlineReservation", default: true }),
    __metadata("design:type", Boolean)
], Courts.prototype, "isOnlineReservation", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isParking", default: true }),
    __metadata("design:type", Boolean)
], Courts.prototype, "isParking", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isIndoor", default: true }),
    __metadata("design:type", Boolean)
], Courts.prototype, "isIndoor", void 0);
__decorate([
    (0, typeorm_1.Column)("boolean", { name: "isOutDoor", default: true }),
    __metadata("design:type", Boolean)
], Courts.prototype, "isOutDoor", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Courts.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Courts.prototype, "updatedAt", void 0);
Courts = __decorate([
    (0, typeorm_1.Index)("name", ["name"]),
    (0, typeorm_1.Entity)({ name: "courts" })
], Courts);
exports.Courts = Courts;
//# sourceMappingURL=Courts.js.map