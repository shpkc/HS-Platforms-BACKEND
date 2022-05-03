import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
} from "@nestjs/common";
import { ExhibitionsService } from "./exhibitions.service";

@Controller("exhibitions")
export class ExhibitionsController {
  constructor(private exhibitionsService: ExhibitionsService) {}

  @Get()
  async getExhibitions(
    @Query("page", ParseIntPipe) page: number,
    @Query("perPage", ParseIntPipe) perPage: number
  ) {
    return this.exhibitionsService.getExhibitions(page, perPage);
  }

  @Get("/all-id")
  async getAllExhibitionsId() {
    return this.exhibitionsService.getAllExhibitionsId();
  }
  @Get("/main")
  async getMain() {
    return this.exhibitionsService.getMain();
  }

  @Get("/:id")
  async getExhibitionsDetail(@Param("id") id) {
    return this.exhibitionsService.getExhibitionsDetail(id);
  }

  @Post("/ratings/:id")
  async rateExhibition(@Param("id") id: string, @Body("score") score) {
    return this.exhibitionsService.rateExhibition(id, parseInt(score));
  }
}
