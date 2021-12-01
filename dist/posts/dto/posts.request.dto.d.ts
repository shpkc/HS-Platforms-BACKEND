import { Post } from "../posts.schema";
declare const PostRequestDto_base: import("@nestjs/common").Type<Pick<Post, "name" | "email" | "password">>;
export declare class PostRequestDto extends PostRequestDto_base {
}
export {};
