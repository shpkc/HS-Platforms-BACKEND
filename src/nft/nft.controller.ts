import { Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { NftsService } from "./nft.service";

@Controller("nfts")
export class NftsController {
  constructor(private nftsService: NftsService) {}

  @Get()
  async getNfts(
    @Query("page", ParseIntPipe) page: number,
    @Query("perPage", ParseIntPipe) perPage: number
  ) {
    return this.nftsService.getNfts(page, perPage);
  }

  @Get("/all-id")
  async getAllGamesId() {
    return this.nftsService.getAllNftsId();
  }
  //   @Get("/main")
  //   async getNftsMain() {
  //     return this.nftsService.getNftssMain();
  //   }

  @Get("/:id")
  async getNftsDetail(@Param("id") id) {
    return this.nftsService.getNftsDetail(id);
  }
}
