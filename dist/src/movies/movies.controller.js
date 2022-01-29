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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MoviesController = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const movies_service_1 = require("./movies.service");
let MoviesController = class MoviesController {
    constructor(moviesService) {
        this.moviesService = moviesService;
    }
    async getMovies() {
        return this.moviesService.getMovies();
    }
    async addMovies() {
        return this.moviesService.getMovies();
    }
    async getMovieMembers(title) {
        return this.moviesService.getMovieMembers(title);
    }
    async createMovieActors(title, name) {
        return this.moviesService.createMovieActors(title, name);
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "영화 리스트 가져오기" }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getMovies", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "영화 추가하기" }),
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "addMovies", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "영화 출연진 가져오기" }),
    (0, common_1.Get)(":title/members"),
    __param(0, (0, common_1.Param)("title")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "getMovieMembers", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: "특정 영화 출연진 추가하기" }),
    (0, common_1.Post)(":title/actors/:name"),
    __param(0, (0, common_1.Param)("title")),
    __param(1, (0, common_1.Param)("name")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], MoviesController.prototype, "createMovieActors", null);
MoviesController = __decorate([
    (0, swagger_1.ApiTags)("MOVIES"),
    (0, common_1.Controller)("movies"),
    __metadata("design:paramtypes", [movies_service_1.MoviesService])
], MoviesController);
exports.MoviesController = MoviesController;
//# sourceMappingURL=movies.controller.js.map