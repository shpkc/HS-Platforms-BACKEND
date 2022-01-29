import { MovieActors } from "./MovieActors";
import { Movies } from "./Movies";
export declare class Actors {
    id: number;
    name: string;
    profileImage: string;
    sex: string;
    MovieActors: MovieActors[];
    createdAt: Date;
    updatedAt: Date;
    Movies: Movies[];
}
