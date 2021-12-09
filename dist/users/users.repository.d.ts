import { Model, Types } from "mongoose";
import { User } from "./users.schema";
import { UserRequestDto } from "./dto/users.request.dto";
export declare class UsersRepository {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    findUserByEmail(email: string): Promise<User | null>;
    findUserByIdWithoutPassword(userId: string | Types.ObjectId): Promise<User | null>;
    existsByEmail(email: string): Promise<boolean>;
    create(user: UserRequestDto): Promise<User>;
}
