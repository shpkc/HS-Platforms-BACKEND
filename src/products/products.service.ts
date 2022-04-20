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

    // NOTE : NEW Products 8개
    const newProductsResult = await this.productsRepository
      .createQueryBuilder("products")
      .where("products.isNew = true")
      .take(8)
      .getMany();

    // NOTE : BEST Products 8개
    // NOTE : 펫닥, 원티드, 블립, 오늘의 집, 네모, 왓챠 피디아, 어반베이스, 헤이딜러
    const bestProductsIdList = ["1", "2", "3", "4", "6", "10", "13", "14"];
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
  // NOTE : product rate api
  async rateProduct(id: string, score: number) {
    const product = await this.productsRepository.findOne({
      where: { id },
    });
    product.reviewScore += score;
    await this.productsRepository.save(product);
  }
}
