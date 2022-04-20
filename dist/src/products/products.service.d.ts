import { Products } from "../entities/Products";
import { Collections } from "../entities/Collections";
export declare class ProductsService {
    private productsRepository;
    private collectionsRepository;
    getProducts(page: number, perPage: number): Promise<{
        result: Products[];
        totalCount: number;
    }>;
    getProductsDetail(id: number): Promise<{
        result: Products;
    }>;
    getAllProductsId(): Promise<{
        result: Products[];
    }>;
    getMain(): Promise<{
        banner: Collections[];
        recommendCollections: Collections[];
        newProducts: Products[];
        bestProducts: Products[];
    }>;
    rateProduct(id: string, score: number): Promise<{
        serverCode: string;
        serverMsg: string;
    }>;
}
