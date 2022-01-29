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
exports.MoviesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const Actors_1 = require("../entities/Actors");
const MovieActors_1 = require("../entities/MovieActors");
const Movies_1 = require("../entities/Movies");
const typeorm_2 = require("typeorm");
let MoviesService = class MoviesService {
    constructor(moviesRepository, movieActorsRepository, actorsRepository) {
        this.moviesRepository = moviesRepository;
        this.movieActorsRepository = movieActorsRepository;
        this.actorsRepository = actorsRepository;
    }
    async getMovies() {
        return this.moviesRepository.find();
    }
    async getMovieMembers(title) {
        return this.actorsRepository
            .createQueryBuilder("actors")
            .innerJoin("actors.Movies", "movies", "movies.title = :title", {
            title,
        })
            .getMany();
    }
    async createMovieActors(title, name) {
        const movie = await this.moviesRepository
            .createQueryBuilder("movie")
            .where("movie.title = :title", { title })
            .getOne();
        if (!movie) {
            return null;
        }
        const actor = await this.actorsRepository
            .createQueryBuilder("user")
            .where("user.name = :name", { name })
            .getOne();
        if (!actor) {
            return null;
        }
        const movieActor = new MovieActors_1.MovieActors();
        movieActor.MovieId = movie.id;
        movieActor.ActorId = actor.id;
        await this.movieActorsRepository.save(movieActor);
    }
};
MoviesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Movies_1.Movies)),
    __param(1, (0, typeorm_1.InjectRepository)(MovieActors_1.MovieActors)),
    __param(2, (0, typeorm_1.InjectRepository)(Actors_1.Actors)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], MoviesService);
exports.MoviesService = MoviesService;
//# sourceMappingURL=movies.service.js.map