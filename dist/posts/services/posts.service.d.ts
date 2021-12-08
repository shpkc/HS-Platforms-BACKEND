import { PostsRepository } from "../posts.repository";
import { PostRequestDto } from "../dto/posts.request.dto";
export declare class PostsService {
    private readonly postsRepository;
    constructor(postsRepository: PostsRepository);
    getAllPost(): Promise<{
        title: string;
        content: string;
        category: string;
        tag: string;
        participants: string;
    }[]>;
    addPost(body: PostRequestDto): Promise<{
        title: string;
        content: string;
        category: string;
        tag: string;
        participants: string;
    }>;
}
