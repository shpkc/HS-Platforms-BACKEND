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
exports.MovieActors = void 0;
const typeorm_1 = require("typeorm");
const Actors_1 = require("./Actors");
const Movies_1 = require("./Movies");
let MovieActors = class MovieActors {
};
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], MovieActors.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], MovieActors.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "MovieId" }),
    __metadata("design:type", Number)
], MovieActors.prototype, "MovieId", void 0);
__decorate([
    (0, typeorm_1.Column)("int", { primary: true, name: "ActorId" }),
    __metadata("design:type", Number)
], MovieActors.prototype, "ActorId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Movies_1.Movies, (movies) => movies.MovieActors, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "MovieId", referencedColumnName: "id" }]),
    __metadata("design:type", Movies_1.Movies)
], MovieActors.prototype, "Movie", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Actors_1.Actors, (actors) => actors.MovieActors, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
    }),
    (0, typeorm_1.JoinColumn)([{ name: "ActorId", referencedColumnName: "id" }]),
    __metadata("design:type", Actors_1.Actors)
], MovieActors.prototype, "Actor", void 0);
MovieActors = __decorate([
    (0, typeorm_1.Index)("ActorId", ["ActorId"], {}),
    (0, typeorm_1.Entity)({ schema: "sleact", name: "movieactors" })
], MovieActors);
exports.MovieActors = MovieActors;
//# sourceMappingURL=MovieActors.js.map