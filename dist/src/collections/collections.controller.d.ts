import { CollectionsService } from "./collections.service";
export declare class CollectionsController {
    private collectionsService;
    constructor(collectionsService: CollectionsService);
    getCollections(page: number, perPage: number): Promise<{
        result: import("../entities/Collections").Collections[];
        totalCount: number;
    }>;
    getCollectionsDetail(id: any): Promise<{
        result: import("../entities/Collections").Collections;
    }>;
}
