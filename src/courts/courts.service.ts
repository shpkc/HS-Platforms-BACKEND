import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Courts } from "../entities/Courts";

@Injectable()
export class CourtsService {
  @InjectRepository(Courts)
  private courtsRepository: Repository<Courts>;

  async getCourts() {
    return this.courtsRepository.find();
  }
}
