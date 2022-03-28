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
      .where("nfts.isUse = true")
      .select(["nfts.id"])
      .getManyAndCount();
    return {
      result,
    };
  }

  // NOTE : home API (banner, collection, main products)
  async getNftsMain() {
    const bannerIdList = ["1", "2", "3", "4"];
    const bannerResult = await this.collectionsRepository
      .createQueryBuilder("collections")
      .where("collections.id IN (:...ids)", { ids: bannerIdList })
      .getMany();

    const mainCollectionIdList = ["1", "2", "3", "4"];
    const mainCollectionsResult = await this.collectionsRepository
      .createQueryBuilder("collections")
      .where("collections.id IN (:...ids)", { ids: mainCollectionIdList })
      .getMany();

    // NOTE : 첫번째부터 8개
    const mainProductsResult = await this.nftsRepository
      .createQueryBuilder("nfts")
      .where("nfts.isUse = true")
      .take(8)
      .getMany();

    return {
      banner: bannerResult,
      mainCollections: mainCollectionsResult,
      mainProducts: mainProductsResult,
    };
  }
}
