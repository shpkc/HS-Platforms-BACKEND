import { CourtsService } from "./courts.service";
export declare class CourtsController {
    private courtsService;
    constructor(courtsService: CourtsService);
    getCourts(page: number, perPage: number): Promise<import("../entities/Courts").Courts[]>;
}
