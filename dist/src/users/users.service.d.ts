import { Connection, Repository } from "typeorm";
import { Users } from "../entities/Users";
export declare class UsersService {
    private usersRepository;
    private connection;
    constructor(usersRepository: Repository<Users>, connection: Connection);
    findByEmail(email: string): Promise<Users>;
    join(email: string, nickname: string, password: string): Promise<boolean>;
}
