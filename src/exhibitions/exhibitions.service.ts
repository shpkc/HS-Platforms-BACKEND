import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Exhibitions } from "../entities/Exhibitions";
import { Collections } from "../entities/Collections";

@Injectable()
export class ExhibitionsService {
  @InjectRepository(Exhibitions)
  private exhibitionsRepository: Repository<Exhibitions>;
  @InjectRepository(Collections)
  private collectionsRepository: Repository<Collections>;

  async getExhibitions(page: number, perPage: number) {
    const [result, total] = await this.exhibitionsRepository
      .createQueryBuilder("exhibitions")
      .where("products.isUse = true")
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();

    return {
      result,
      totalCount: total,
    };
  }

  async getExhibitionsDetail(id: number) {
    const result = await this.exhibitionsRepository.findOne({
      where: {
        id: id,
      },
    });
    return {
      result,
    };
  }

  async getAllExhibitionsId() {
    const result = await this.exhibitionsRepository
      .createQueryBuilder("exhibitions")
      .where("exhibitions.isUse = true")
      .select(["exhibitions.id"])
      .getMany();
    return {
      result,
    };
  }

  // NOTE : main API (banner, recommendCollections, newProducts, bestProducts)
  async getMain() {
    // NOTE: BANNER 컬렉션으로 4개 지정
    const bannerIdList = ["1", "2", "3", "4"];
    const bannerResult = await this.collectionsRepository
      .createQueryBuilder("collections")
      .where("collections.id IN (:...ids)", { ids: bannerIdList })
      .getMany();

    // NOTE : 추천 컬렉션
    const recommendCollectionIdList = ["1", "2", "3", "4"];
    const recommendCollectionsResult = await this.collectionsRepository
      .createQueryBuilder("collections")
      .where("collections.id IN (:...ids)", { ids: recommendCollectionIdList })
      .getMany();

    // NOTE : NEW Exhibitions 8개
    const newExhibitionsResult = await this.exhibitionsRepository
      .createQueryBuilder("exhibitions")
      .where("exhibitions.isNew = true")
      .take(8)
      .getMany();

    // NOTE : BEST Exhibitions 8개
    const bestExhibitionsIdList = ["1", "2", "3", "4", "6", "10", "13", "14"];
    const bestExhibitionsResult = await this.exhibitionsRepository
      .createQueryBuilder("exhibitions")
      .where("exhibitions.id IN (:...ids)", { ids: bestExhibitionsIdList })
      .getMany();

    return {
      banner: bannerResult,
      recommendCollections: recommendCollectionsResult,
      newExhibitions: newExhibitionsResult,
      bestExhibitions: bestExhibitionsResult,
    };
  }
  // NOTE : product rate api
  async rateExhibition(id: string, score: number) {
    const exhibition = await this.exhibitionsRepository.findOne({
      where: { id },
    });
    exhibition.reviewScore += score;
    await this.exhibitionsRepository.save(exhibition);
    return {
      serverCode: "200",
      serverMsg: "API : Reserved",
    };
  }
}
