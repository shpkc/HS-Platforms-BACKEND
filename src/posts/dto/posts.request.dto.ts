import { PickType } from "@nestjs/swagger";
import { Post } from "../posts.schema";

export class PostRequestDto extends PickType(Post, [
  "title",
  "content",
  "category",
  "tag",
] as const) {}
