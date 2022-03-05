import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Games } from "../entities/Games";

@Injectable()
export class GamesService {
  @InjectRepository(Games)
  private gamesRepository: Repository<Games>;

  async getGames(page: number, perPage: number) {
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

  async getGamesDetail(id: number) {
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
    // NOTE : 19,22,26,30번 배너 설정
    const bannerIdList = ["19", "22", "26", "20"];
    const bannerResult = await this.gamesRepository
      .createQueryBuilder("games")
      .where("games.id IN (:...ids)", { ids: bannerIdList })
      .getMany();

    // NOTE : 메인에서 UPCOMING은 release false로 4개
    const upcomingResult = await this.gamesRepository
      .createQueryBuilder("games")
      .where("games.isUse = true")
      .andWhere("games.isReleased = false")
      .take(4)
      .getMany();

    // NOTE : best game id
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
}
