import { Courts } from "../entities/Courts";
export declare class CourtsService {
    private courtsRepository;
    getCourts(page: number, perPage: number): Promise<Courts[]>;
}
