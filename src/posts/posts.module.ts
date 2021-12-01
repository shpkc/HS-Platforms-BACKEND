import { Module } from "@nestjs/common";
import { PostsController } from "./controllers/posts.controller";
import { PostsService } from "./services/posts.service";
import { PostsRepository } from "./posts.repository";
import { MongooseModule } from "@nestjs/mongoose";
import { Post, PostSchema } from "./posts.schema";

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Post.name, schema: PostSchema }]),
  ],
  controllers: [PostsController],
  providers: [PostsService, PostsRepository],
  exports: [PostsService, PostsRepository],
})
export class PostsModule {}
