import { Model, Types } from "mongoose";
import { Post } from "./posts.schema";
import { PostRequestDto } from "./dto/posts.request.dto";
export declare class PostsRepository {
    private readonly postModel;
    constructor(postModel: Model<Post>);
    findAll(): Promise<Post[]>;
    findByIdAndUpdateImg(id: string, fileName: string): Promise<{
        title: string;
        content: string;
    }>;
    findCatByIdWithoutPassword(catId: string | Types.ObjectId): Promise<Post | null>;
    findCatByEmail(email: string): Promise<Post | null>;
    existsByEmail(email: string): Promise<boolean>;
    create(post: PostRequestDto): Promise<Post>;
}
