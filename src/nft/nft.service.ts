import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Nfts } from "../entities/Nfts";

@Injectable()
export class NftsService {
  @InjectRepository(Nfts)
  private nftsRepository: Repository<Nfts>;

  async getNfts(page: number, perPage: number) {
    const [result, total] = await this.nftsRepository
      .createQueryBuilder("nfts")
      .where("nfts.isUse = true")
      .andWhere("nfts.isSold = false")
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();

    return {
      result,
      totalCount: total,
    };
  }

  async getNftsDetail(id: number) {
    const result = await this.nftsRepository.findOne({
      where: {
        id: id,
      },
    });
    return {
      result,
    };
  }

  async getAllNftsId() {
    const [result] = await this.nftsRepository
      .createQueryBuilder("nfts")
      .select(["nfts.id"])
      .getManyAndCount();
    return {
      result,
    };
  }

  async getNftsMain() {
    // NOTE : recommend 4개 list
    const recommendIdList = ["5", "5", "5", "5"];
    const recommendResult = await this.nftsRepository
      .createQueryBuilder("nfts")
      .where("nfts.id IN (:...ids)", { ids: recommendIdList })
      .getMany();

    // NOTE : 메인에서 UPCOMING은 release false로 4개
    //   const recommendResult = await this.nftsRepository
    //     .createQueryBuilder("games")
    //     .where("games.isUse = true")
    //     .andWhere("games.isReleased = false")
    //     .take(4)
    //     .getMany();

    //   // NOTE : best game id
    //   const bestIdList = ["16", "18", "17", "22", "20"];
    //   const bestResult = await this.gamesRepository
    //     .createQueryBuilder("games")
    //     .where("games.id IN (:...ids)", { ids: bestIdList })
    //     .getMany();
    return {
      // banner: bannerResult,
      recommend: recommendResult,
      // marketplace: bestResult,
    };
  }
}
