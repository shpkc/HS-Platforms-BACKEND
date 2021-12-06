import { Document } from "mongoose";
export declare class Post extends Document {
    title: string;
    content: string;
    readonly readOnlyData: {
        title: string;
        content: string;
    };
}
export declare const PostSchema: import("mongoose").Schema<Post, import("mongoose").Model<Post, any, any>, undefined, {}>;
