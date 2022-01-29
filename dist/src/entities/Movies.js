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
exports.Movies = void 0;
const typeorm_1 = require("typeorm");
const MovieActors_1 = require("./MovieActors");
let Movies = class Movies {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Movies.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "title" }),
    __metadata("design:type", String)
], Movies.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "subTitle" }),
    __metadata("design:type", String)
], Movies.prototype, "subTitle", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "thumbnail" }),
    __metadata("design:type", String)
], Movies.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "contents" }),
    __metadata("design:type", String)
], Movies.prototype, "contents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MovieActors_1.MovieActors, (movieActors) => movieActors.Movie, {
        cascade: ["insert"],
    }),
    __metadata("design:type", Array)
], Movies.prototype, "MovieActors", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Movies.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Movies.prototype, "updatedAt", void 0);
Movies = __decorate([
    (0, typeorm_1.Entity)({ schema: "sleact", name: "movies" })
], Movies);
exports.Movies = Movies;
//# sourceMappingURL=Movies.js.map