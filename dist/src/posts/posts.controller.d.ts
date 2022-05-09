import { PostsService } from "./posts.service";
export declare class PostsController {
    private postsService;
    constructor(postsService: PostsService);
    getPosts(page: number, perPage: number): Promise<{
        result: import("../entities/Posts").Posts[];
        totalCount: number;
    }>;
    getAllPostsSlug(): Promise<{
        result: import("../entities/Posts").Posts[];
    }>;
    getProductsDetail(id: any): Promise<{
        result: import("../entities/Posts").Posts;
    }>;
}
