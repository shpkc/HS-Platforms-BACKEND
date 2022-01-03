import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Actors } from "src/entities/Actors";
import { MovieActors } from "src/entities/MovieActors";
import { Movies } from "src/entities/Movies";
import { MoviesController } from "./movies.controller";
import { MoviesService } from "./movies.service";

@Module({
  imports: [TypeOrmModule.forFeature([Movies, MovieActors, Actors])],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
