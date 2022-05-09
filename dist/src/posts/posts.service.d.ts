import { Posts } from "../entities/Posts";
export declare class PostsService {
    private postsRepository;
    getPosts(page: number, perPage: number): Promise<{
        result: Posts[];
        totalCount: number;
    }>;
    getPostsDetail(slug: string): Promise<{
        result: Posts;
    }>;
    getAllPostsId(): Promise<{
        result: Posts[];
    }>;
}
