import { Model } from "mongoose";
import { User } from "./users.schema";
import { UserRequestDto } from "./dto/users.request.dto";
export declare class UsersRepository {
    private readonly userModel;
    constructor(userModel: Model<User>);
    findAll(): Promise<User[]>;
    existsByEmail(email: string): Promise<boolean>;
    create(user: UserRequestDto): Promise<User>;
}
