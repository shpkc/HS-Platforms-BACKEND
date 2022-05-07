import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Banners } from "../entities/Banner";

@Injectable()
export class BannersService {
  @InjectRepository(Banners)
  private BannersRepository: Repository<Banners>;
}
