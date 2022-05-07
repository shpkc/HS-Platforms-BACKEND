import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Banners } from "src/entities/Banner";
import { BannersController } from "./banners.controller";
import { BannersService } from "./banners.service";

@Module({
  imports: [TypeOrmModule.forFeature([Banners])],
  controllers: [BannersController],
  providers: [BannersService],
})
export class BannerModule {}
