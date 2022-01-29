import { Actors } from "src/entities/Actors";
import { MovieActors } from "src/entities/MovieActors";
import { Movies } from "src/entities/Movies";
import { Repository } from "typeorm";
export declare class MoviesService {
    private moviesRepository;
    private movieActorsRepository;
    private actorsRepository;
    constructor(moviesRepository: Repository<Movies>, movieActorsRepository: Repository<MovieActors>, actorsRepository: Repository<Actors>);
    getMovies(): Promise<Movies[]>;
    getMovieMembers(title: string): Promise<Actors[]>;
    createMovieActors(title: any, name: any): Promise<any>;
}
