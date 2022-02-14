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
}
