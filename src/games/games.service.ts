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
    // NOTE : 26,19,23,24 배너 설정
    // NOTE : 갓오브워 라그나로크, 카트, 스플래툰3, 베요네타3
    const bannerIdList = ["26", "19", "23", "24"];
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
