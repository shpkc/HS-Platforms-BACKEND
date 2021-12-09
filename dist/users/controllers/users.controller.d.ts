import { AuthService } from "src/auth/auth.service";
import { LoginRequestDto } from "src/auth/dto/login.request.dto";
import { UsersService } from "../services/users.service";
import { UserRequestDto } from "../dto/users.request.dto";
export declare class UsersController {
    private readonly usersService;
    private readonly authService;
    constructor(usersService: UsersService, authService: AuthService);
    getCurrentUser(user: any): any;
    signUp(body: UserRequestDto): Promise<{
        id: string;
        email: string;
        nickname: string;
    }>;
    logIn(data: LoginRequestDto): Promise<{
        token: string;
    }>;
    getAllCat(): Promise<{
        id: string;
        email: string;
        nickname: string;
    }[]>;
}
