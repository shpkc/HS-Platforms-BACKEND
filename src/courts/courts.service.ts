import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { ChannelMembers } from "../entities/ChannelMembers";
import { Channels } from "../entities/Channels";
import { Users } from "../entities/Users";
import { WorkspaceMembers } from "../entities/WorkspaceMembers";
import { Courts } from "../entities/Courts";

@Injectable()
export class CourtsService {
  @InjectRepository(Courts)
  private courtsRepository: Repository<Courts>;

  async findAllCourts() {
    return this.courtsRepository.find();
  }
}
