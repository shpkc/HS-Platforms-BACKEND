import { Courts } from "../entities/Courts";
export declare class CourtsService {
    private courtsRepository;
    getCourts(page: number, perPage: number): Promise<{
        data: Courts[];
        totalCount: number;
    }>;
    getCourtsDetail(id: number): Promise<{
        data: Courts;
    }>;
}
