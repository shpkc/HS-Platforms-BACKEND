import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from "@nestjs/common";
import { PostsService } from "./posts.service";

@Controller("posts")
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  async getPosts(
    @Query("page", ParseIntPipe) page: number,
    @Query("perPage", ParseIntPipe) perPage: number
  ) {
    return this.postsService.getPosts(page, perPage);
  }

  @Get("/all-id")
  async getAllPostId() {
    return this.postsService.getAllPostsId();
  }
  @Get("/:id")
  async getProductsDetail(@Param("id") id) {
    return this.postsService.getPostsDetail(id);
  }
}
