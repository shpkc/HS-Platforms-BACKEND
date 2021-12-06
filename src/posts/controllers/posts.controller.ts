import {
  Body,
  Controller,
  Get,
  Post,
  UseFilters,
  UseInterceptors,
} from "@nestjs/common";
import { ApiOperation, ApiResponse } from "@nestjs/swagger";
import { CurrentPost } from "src/common/decorators/user.decorator";
import { HttpExceptionFilter } from "src/common/exceptions/http-exception.filter";
import { SuccessInterceptor } from "src/common/interceptors/success.interceptor";
import { PostRequestDto } from "../dto/posts.request.dto";
import { PostsService } from "../services/posts.service";

@Controller("posts")
@UseInterceptors(SuccessInterceptor)
@UseFilters(HttpExceptionFilter)
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @ApiOperation({ summary: "모든 고양이 가져오기" })
  @Get()
  getAllCat() {
    return this.postsService.getAllPost();
  }

  @Post()
  async addPost(@Body() body: PostRequestDto) {
    console.log(body);
    return await this.postsService.addPost(body);
  }
}
