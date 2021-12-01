import { PostsRepository } from "../posts.repository";
export declare class PostsService {
    private readonly postsRepository;
    constructor(postsRepository: PostsRepository);
    getAllCat(): Promise<{
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    }[]>;
}
