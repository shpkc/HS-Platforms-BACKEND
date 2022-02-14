import { Module } from "@nestjs/common";
import { GamesService } from "./games.service";
import { GamesController } from "./games.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Games } from "../entities/Games";
@Module({
  imports: [TypeOrmModule.forFeature([Games])],
  providers: [GamesService],
  controllers: [GamesController],
})
export class GamesModule {}
