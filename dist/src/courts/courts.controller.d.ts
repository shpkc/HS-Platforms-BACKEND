import { CourtsService } from "./courts.service";
export declare class CourtsController {
    private courtsService;
    constructor(courtsService: CourtsService);
    getCourts(page: number, perPage: number): Promise<{
        result: import("../entities/Courts").Courts[];
        totalCount: number;
    }>;
    getAllCourtsId(): Promise<{
        result: import("../entities/Courts").Courts[];
    }>;
    getMain(): Promise<{
        banner: import("../entities/Courts").Courts[];
        bestCourts: import("../entities/Courts").Courts[];
    }>;
    getCourtsDetail(id: any): Promise<{
        result: import("../entities/Courts").Courts;
    }>;
    createCourts(body: any): Promise<void>;
}
