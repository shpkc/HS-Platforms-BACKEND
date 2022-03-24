import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Collections } from "../entities/Collections";

@Injectable()
export class CollectionsService {
  @InjectRepository(Collections)
  private collectionsRepository: Repository<Collections>;

  async getCollections(page: number, perPage: number) {
    const [result, total] = await this.collectionsRepository
      .createQueryBuilder("collections")
      .where("collections.isUse = true")
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();

    return {
      result,
      totalCount: total,
    };
  }

  async getCollectionsDetail(id: number) {
    const result = await this.collectionsRepository.findOne({
      where: {
        id: id,
      },
    });
    return {
      result,
    };
  }
}
