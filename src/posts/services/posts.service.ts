import { Injectable, UnauthorizedException } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { Post, PostSchema } from "../posts.schema";
import { PostsRepository } from "../posts.repository";
import { PostRequestDto } from "../dto/posts.request.dto";

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) {}

  async getAllPost() {
    const allpost = await this.postsRepository.findAll();
    const readOnlyPosts = allpost.map((post) => post.readOnlyData);
    return readOnlyPosts;
  }

  async addPost(body: PostRequestDto) {
    const { title, content, category, tag } = body;

    const post = await this.postsRepository.create({
      title,
      content,
      category,
      tag,
    });

    return post.readOnlyData;
  }
}
