import { Connection, Repository } from "typeorm";
import { ChannelMembers } from "../entities/ChannelMembers";
import { Users } from "../entities/Users";
export declare class UsersService {
    private usersRepository;
    private channelMembersRepository;
    private connection;
    constructor(usersRepository: Repository<Users>, channelMembersRepository: Repository<ChannelMembers>, connection: Connection);
    findByEmail(email: string): Promise<Users>;
    join(email: string, nickname: string, password: string): Promise<boolean>;
}
