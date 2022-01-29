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
exports.Actors = void 0;
const typeorm_1 = require("typeorm");
const MovieActors_1 = require("./MovieActors");
const Movies_1 = require("./Movies");
let Actors = class Actors {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: "int", name: "id" }),
    __metadata("design:type", Number)
], Actors.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "name" }),
    __metadata("design:type", String)
], Actors.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "profileImage" }),
    __metadata("design:type", String)
], Actors.prototype, "profileImage", void 0);
__decorate([
    (0, typeorm_1.Column)("varchar", { name: "sex" }),
    __metadata("design:type", String)
], Actors.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MovieActors_1.MovieActors, (movieActors) => movieActors.Actor),
    __metadata("design:type", Array)
], Actors.prototype, "MovieActors", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Actors.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Actors.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Movies_1.Movies, (movies) => movies.MovieActors),
    (0, typeorm_1.JoinTable)({
        name: "movieactors",
        joinColumn: {
            name: "ActorId",
            referencedColumnName: "id",
        },
        inverseJoinColumn: {
            name: "MovieId",
            referencedColumnName: "id",
        },
    }),
    __metadata("design:type", Array)
], Actors.prototype, "Movies", void 0);
Actors = __decorate([
    (0, typeorm_1.Entity)({ schema: "sleact", name: "actors" })
], Actors);
exports.Actors = Actors;
//# sourceMappingURL=Actors.js.map