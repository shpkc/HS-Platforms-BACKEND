import { Nfts } from "../entities/Nfts";
export declare class NftsService {
    private nftsRepository;
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
        recommend: Nfts[];
    }>;
}
