import { Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { CollectionsService } from "./collections.service";

@Controller("collections")
export class CollectionsController {
  constructor(private collectionsService: CollectionsService) {}

  @Get()
  async getCollections(
    @Query("page", ParseIntPipe) page: number,
    @Query("perPage", ParseIntPipe) perPage: number
  ) {
    return this.collectionsService.getCollections(page, perPage);
  }

  @Get("/:id")
  async getCollectionsDetail(@Param("id") id) {
    return this.collectionsService.getCollectionsDetail(id);
  }
}
