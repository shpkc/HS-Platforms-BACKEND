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
    // NOTE : 임시로 1,2,3,4,5번 배너 설정
    const bannerIdList = ["1", "2", "3", "4", "5"];
    const bannerResult = await this.gamesRepository
        .createQueryBuilder("games")
      .where("games.id IN (:...ids)", { ids: bannerIdList })
      .getMany();
    return {
      banner: bannerResult,
    };
  }
}
