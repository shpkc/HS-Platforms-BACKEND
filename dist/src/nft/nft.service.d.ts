import { Nfts } from "../entities/Nfts";
import { Collections } from "../entities/Collections";
export declare class NftsService {
    private nftsRepository;
    private collectionsRepository;
    getNfts(page: number, perPage: number): Promise<{
        result: Nfts[];
        totalCount: number;
    }>;
    getNftsDetail(id: number): Promise<{
        result: Nfts;
    }>;
    getAllNftsId(): Promise<{
        result: Nfts[];
    }>;
    getNftsMain(): Promise<{
        banner: Collections[];
        recommend: Nfts[];
    }>;
}
