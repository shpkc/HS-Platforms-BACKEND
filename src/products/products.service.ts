import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Products } from "../entities/Products";
import { Collections } from "../entities/Collections";

@Injectable()
export class ProductsService {
  @InjectRepository(Products)
  private productsRepository: Repository<Products>;
  @InjectRepository(Collections)
  private collectionsRepository: Repository<Collections>;

  async getProducts(page: number, perPage: number) {
    const [result, total] = await this.productsRepository
      .createQueryBuilder("products")
      .where("products.isUse = true")
      .take(perPage)
      .skip(perPage * (page - 1))
      .getManyAndCount();

    return {
      result,
      totalCount: total,
    };
  }

  async getProductsDetail(id: number) {
    const result = await this.productsRepository.findOne({
      where: {
        id: id,
      },
    });
    return {
      result,
    };
  }

  async getAllProductsId() {
    const result = await this.productsRepository
      .createQueryBuilder("products")
      .where("products.isUse = true")
      .select(["products.id"])
      .getMany();
    return {
      result,
    };
  }

  // NOTE : main API (banner, recommendCollections, newProducts, bestProducts)
  async getMain() {
    // NOTE: BANNER 컬렉션으로 4개 지정
    const bannerIdList = ["1", "2", "3", "4"];
    const bannerResult = await this.collectionsRepository
      .createQueryBuilder("collections")
      .where("collections.id IN (:...ids)", { ids: bannerIdList })
      .getMany();

    // NOTE : 추천 컬렉션
    const recommendCollectionIdList = ["1", "2", "3", "4"];
    const recommendCollectionsResult = await this.collectionsRepository
      .createQueryBuilder("collections")
      .where("collections.id IN (:...ids)", { ids: recommendCollectionIdList })
      .getMany();

    // NOTE : NEW Products
    const newProductsResult = await this.productsRepository
      .createQueryBuilder("products")
      .where("products.isNew = true")
      .take(8)
      .getMany();

    // NOTE : BEST Products 8개
    const bestProductsIdList = ["1", "2", "3", "4", "5", "6", "7", "8"];
    const bestProductsResult = await this.productsRepository
      .createQueryBuilder("products")
      .where("products.id IN (:...ids)", { ids: bestProductsIdList })
      .getMany();

    return {
      banner: bannerResult,
      recommendCollections: recommendCollectionsResult,
      newProducts: newProductsResult,
      bestProducts: bestProductsResult,
    };
  }
}
