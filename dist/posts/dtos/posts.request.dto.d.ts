import { Post } from "../posts.schema";
declare const CatRequestDto_base: import("@nestjs/common").Type<Pick<Post, "email" | "name" | "password">>;
export declare class CatRequestDto extends CatRequestDto_base {
}
export {};
