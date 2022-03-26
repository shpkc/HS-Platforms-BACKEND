import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Nfts } from "../entities/Nfts";
import { Collections } from "../entities/Collections";

@Injectable()
export class NftsService {
  @InjectRepository(Nfts)
  private nftsRepository: Repository<Nfts>;
  @InjectRepository(Collections)
  private collectionsRepository: Repository<Collections>;

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
    const bannerIdList = ["1", "2"];
    const bannerResult = await this.collectionsRepository
      .createQueryBuilder("collections")
      .where("collections.id IN (:...ids)", { ids: bannerIdList })
      .getMany();

    const trendNftsIdList = ["5", "6", "7"];
    const trendNftsResult = await this.nftsRepository
      .createQueryBuilder("nfts")
      .where("nfts.id IN (:...ids)", { ids: trendNftsIdList })
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
      banner: bannerResult,
      trendNfts: trendNftsResult,
    };
  }
}
