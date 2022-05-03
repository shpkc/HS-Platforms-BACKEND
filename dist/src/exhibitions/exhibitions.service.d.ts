import { Exhibitions } from "../entities/Exhibitions";
import { Collections } from "../entities/Collections";
export declare class ExhibitionsService {
    private exhibitionsRepository;
    private collectionsRepository;
    getExhibitions(page: number, perPage: number): Promise<{
        result: Exhibitions[];
        totalCount: number;
    }>;
    getExhibitionsDetail(id: number): Promise<{
        result: Exhibitions;
    }>;
    getAllExhibitionsId(): Promise<{
        result: Exhibitions[];
    }>;
    getMain(): Promise<{
        banner: Collections[];
        recommendCollections: Collections[];
        newExhibitions: Exhibitions[];
        bestExhibitions: Exhibitions[];
    }>;
    rateExhibition(id: string, score: number): Promise<{
        serverCode: string;
        serverMsg: string;
    }>;
}
