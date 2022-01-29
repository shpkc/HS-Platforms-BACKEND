import { MoviesService } from "./movies.service";
export declare class MoviesController {
    private moviesService;
    constructor(moviesService: MoviesService);
    getMovies(): Promise<import("../entities/Movies").Movies[]>;
    addMovies(): Promise<import("../entities/Movies").Movies[]>;
    getMovieMembers(title: string): Promise<import("../entities/Actors").Actors[]>;
    createMovieActors(title: any, name: string): Promise<any>;
}
