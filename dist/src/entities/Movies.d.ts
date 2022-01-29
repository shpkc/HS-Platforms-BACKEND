import { MovieActors } from "./MovieActors";
export declare class Movies {
    id: number;
    title: string;
    subTitle: string;
    thumbnail: string;
    contents: string;
    MovieActors: MovieActors[];
    createdAt: Date;
    updatedAt: Date;
}
