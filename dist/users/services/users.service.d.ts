import { UserRequestDto } from "../dto/users.request.dto";
import { UsersRepository } from "../users.repository";
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: UsersRepository);
    getAllUser(): Promise<{
        id: string;
        email: string;
        nickname: string;
    }[]>;
    signUp(body: UserRequestDto): Promise<{
        id: string;
        email: string;
        nickname: string;
    }>;
}
