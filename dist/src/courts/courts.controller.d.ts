import { CourtsService } from "./courts.service";
export declare class CourtsController {
    private courtsService;
    constructor(courtsService: CourtsService);
    getCourts(page: number, perPage: number): Promise<{
        data: import("../entities/Courts").Courts[];
        totalCount: number;
    }>;
    getCourtsDetail(id: any): Promise<{
        data: import("../entities/Courts").Courts;
    }>;
}
