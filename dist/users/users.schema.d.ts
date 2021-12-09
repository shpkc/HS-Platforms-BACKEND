import { Document } from "mongoose";
export declare class User extends Document {
    email: string;
    nickname: string;
    password: string;
    readonly readOnlyData: {
        id: string;
        email: string;
        nickname: string;
    };
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any>, undefined, {}>;
