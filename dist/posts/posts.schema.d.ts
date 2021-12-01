import { Document } from "mongoose";
export declare class Post extends Document {
    email: string;
    name: string;
    password: string;
    imgUrl: string;
    readonly readOnlyData: {
        id: string;
        email: string;
        name: string;
        imgUrl: string;
    };
}
export declare const PostSchema: import("mongoose").Schema<Post, import("mongoose").Model<Post, any, any>, undefined, {}>;
