import { Collections } from "../entities/Collections";
export declare class CollectionsService {
    private collectionsRepository;
    getCollections(page: number, perPage: number): Promise<{
        result: Collections[];
        totalCount: number;
    }>;
    getCollectionsDetail(id: number): Promise<{
        result: Collections;
    }>;
}
