import { ProductsService } from "./products.service";
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    getProducts(page: number, perPage: number): Promise<{
        result: import("../entities/Products").Products[];
        totalCount: number;
    }>;
    getAllProductsId(): Promise<{
        result: import("../entities/Products").Products[];
    }>;
    getMain(): Promise<{
        banner: import("../entities/Collections").Collections[];
        recommendCollections: import("../entities/Collections").Collections[];
        newProducts: import("../entities/Products").Products[];
        bestProducts: import("../entities/Products").Products[];
    }>;
    getProductsDetail(id: any): Promise<{
        result: import("../entities/Products").Products;
    }>;
}
