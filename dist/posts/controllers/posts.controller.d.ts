import { PostRequestDto } from "../dto/posts.request.dto";
import { PostsService } from "../services/posts.service";
export declare class PostsController {
    private readonly postsService;
    constructor(postsService: PostsService);
    getAllCat(): Promise<{
        title: string;
        content: string;
    }[]>;
    addPost(body: PostRequestDto): Promise<{
        title: string;
        content: string;
    }>;
}
