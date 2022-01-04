import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Actors } from "src/entities/Actors";
import { MovieActors } from "src/entities/MovieActors";
import { Movies } from "src/entities/Movies";
import { MoreThan, Repository } from "typeorm";
import { ChannelChats } from "../entities/ChannelChats";
import { ChannelMembers } from "../entities/ChannelMembers";
import { Channels } from "../entities/Channels";
import { Users } from "../entities/Users";
import { Workspaces } from "../entities/Workspaces";
import { EventsGateway } from "../events/events.gateway";

@Injectable()
export class MoviesService {
  constructor(
    @InjectRepository(Movies)
    private moviesRepository: Repository<Movies>,
    @InjectRepository(MovieActors)
    private movieActorsRepository: Repository<MovieActors>,
    @InjectRepository(Actors)
    private actorsRepository: Repository<Actors>
  ) {}

  async getMovies() {
    return this.moviesRepository.find();
  }

  async getMovieMembers(title: string) {
    return this.actorsRepository
      .createQueryBuilder("actors")
      .innerJoin("actors.Movies", "movies", "movies.title = :title", {
        title,
      })
      .getMany();
  }

  async createMovieActors(title, name) {
    const movie = await this.moviesRepository
      .createQueryBuilder("movie")
      .where("movie.title = :title", { title })
      .getOne();
    if (!movie) {
      return null; // TODO: 이 때 어떻게 에러 발생?
    }
    const actor = await this.actorsRepository
      .createQueryBuilder("user")
      .where("user.name = :name", { name })
      .getOne();
    if (!actor) {
      return null;
    }
    const movieActor = new MovieActors();
    movieActor.MovieId = movie.id;
    movieActor.ActorId = actor.id;
    await this.movieActorsRepository.save(movieActor);
  }
}
