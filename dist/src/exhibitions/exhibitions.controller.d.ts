import { ExhibitionsService } from "./exhibitions.service";
export declare class ExhibitionsController {
    private exhibitionsService;
    constructor(exhibitionsService: ExhibitionsService);
    getExhibitions(page: number, perPage: number): Promise<{
        result: import("../entities/Exhibitions").Exhibitions[];
        totalCount: number;
    }>;
    getAllExhibitionsId(): Promise<{
        result: import("../entities/Exhibitions").Exhibitions[];
    }>;
    getMain(): Promise<{
        banner: import("../entities/Collections").Collections[];
        recommendCollections: import("../entities/Collections").Collections[];
        newExhibitions: import("../entities/Exhibitions").Exhibitions[];
        bestExhibitions: import("../entities/Exhibitions").Exhibitions[];
    }>;
    getExhibitionsDetail(id: any): Promise<{
        result: import("../entities/Exhibitions").Exhibitions;
    }>;
    rateExhibition(id: string, score: any): Promise<{
        serverCode: string;
        serverMsg: string;
    }>;
}
