import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Posts } from "../entities/Posts";

@Injectable()
export class PostsService {
  @InjectRepository(Posts)
  private postsRepository: Repository<Posts>;

  async getPosts(page: number, perPage: number) {
    const [result, total] = await this.postsRepository
      .createQueryBuilder("posts")
      .where("posts.isUse = true")
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();

    return {
      result,
      totalCount: total,
    };
  }

  async getPostsDetail(slug: string) {
    const result = await this.postsRepository.findOne({
      where: {
        slug,
      },
    });
    return {
      result,
    };
  }

  async getAllPostsId() {
    const result = await this.postsRepository
      .createQueryBuilder("posts")
      .where("posts.isUse = true")
      .select(["posts.id"])
      .getMany();
    return {
      result,
    };
  }
}
