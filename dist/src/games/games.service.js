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
exports.GamesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const Games_1 = require("../entities/Games");
let GamesService = class GamesService {
    async getGames(page, perPage) {
        const [result, total] = await this.gamesRepository
            .createQueryBuilder("games")
            .where("games.isUse = true")
            .take(perPage)
            .skip(perPage * (page - 1))
            .getManyAndCount();
        return {
            result,
            totalCount: total,
        };
    }
    async getGamesDetail(id) {
        const result = await this.gamesRepository.findOne({
            where: {
                id: id,
            },
        });
        return {
            result,
        };
    }
    async getAllGamesId() {
        const [result, total] = await this.gamesRepository
            .createQueryBuilder("games")
            .select(["games.id"])
            .getManyAndCount();
        return {
            result,
        };
    }
    async getGamesMain() {
        const bannerIdList = ["19", "22", "26", "20"];
        const bannerResult = await this.gamesRepository
            .createQueryBuilder("games")
            .where("games.id IN (:...ids)", { ids: bannerIdList })
            .getMany();
        const upcomingResult = await this.gamesRepository
            .createQueryBuilder("games")
            .where("games.isUse = true")
            .andWhere("games.isReleased = false")
            .take(4)
            .getMany();
        const bestIdList = ["16", "18", "17", "22", "20"];
        const bestResult = await this.gamesRepository
            .createQueryBuilder("games")
            .where("games.id IN (:...ids)", { ids: bestIdList })
            .getMany();
        return {
            banner: bannerResult,
            upcoming: upcomingResult,
            best: bestResult,
        };
    }
};
__decorate([
    (0, typeorm_1.InjectRepository)(Games_1.Games),
    __metadata("design:type", typeorm_2.Repository)
], GamesService.prototype, "gamesRepository", void 0);
GamesService = __decorate([
    (0, common_1.Injectable)()
], GamesService);
exports.GamesService = GamesService;
//# sourceMappingURL=games.service.js.map