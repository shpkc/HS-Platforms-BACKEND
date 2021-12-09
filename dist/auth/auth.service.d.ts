import { LoginRequestDto } from "./dto/login.request.dto";
import { JwtService } from "@nestjs/jwt";
import { UsersRepository } from "src/users/users.repository";
export declare class AuthService {
    private readonly usersRepository;
    private jwtService;
    constructor(usersRepository: UsersRepository, jwtService: JwtService);
    jwtLogIn(data: LoginRequestDto): Promise<{
        token: string;
    }>;
}
