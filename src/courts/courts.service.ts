import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Courts } from "../entities/Courts";

@Injectable()
export class CourtsService {
  @InjectRepository(Courts)
  private courtsRepository: Repository<Courts>;

  async getCourts(page: number, perPage: number) {
    const [result, total] = await this.courtsRepository
      .createQueryBuilder("courts")
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();

    return {
      data: result,
      totalCount: total,
    };
  }

  async getCourtsDetail(id: number) {
    const result = await this.courtsRepository.findOne({
      where: {
        id: id,
      },
    });

    return {
      data: result,
    };
  }
}
