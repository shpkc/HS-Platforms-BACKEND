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
    // NOTE : 임시로 6,7,8,9,10번 배너 설정
    const bannerIdList = ["6", "7", "8", "9", "10"];
    const bannerResult = await this.gamesRepository
      .createQueryBuilder("games")
      .where("games.id IN (:...ids)", { ids: bannerIdList })
      .getMany();

    // NOTE : 메인에서 UPCOMING은 release false로 5개
    const upcomingResult = await this.gamesRepository
      .createQueryBuilder("games")
      .where("games.isReleased = false")
      .take(5)
      .getMany();

    // NOTE : best game id
    // NOTE : Axie Infinity, The Sandbox, Gods Unchained, DeFi Kingdoms, Splinterlands
    const bestIdList = ["1", "2", "3", "4", "5"];
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
