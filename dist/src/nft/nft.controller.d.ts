import { NftsService } from "./nft.service";
export declare class NftsController {
    private nftsService;
    constructor(nftsService: NftsService);
    getNfts(page: number, perPage: number): Promise<{
        result: import("../entities/Nfts").Nfts[];
        totalCount: number;
    }>;
    getAllGamesId(): Promise<{
        result: import("../entities/Nfts").Nfts[];
    }>;
    getNftsDetail(id: any): Promise<{
        result: import("../entities/Nfts").Nfts;
    }>;
}
