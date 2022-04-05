import { Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { ProductsService } from "./products.service";

@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  async getProducts(
    @Query("page", ParseIntPipe) page: number,
    @Query("perPage", ParseIntPipe) perPage: number
  ) {
    return this.productsService.getProducts(page, perPage);
  }

  @Get("/all-id")
  async getAllProductsId() {
    return this.productsService.getAllProductsId();
  }
  @Get("/main")
  async getMain() {
    return this.productsService.getMain();
  }

  @Get("/:id")
  async getProductsDetail(@Param("id") id) {
    return this.productsService.getProductsDetail(id);
  }
}
