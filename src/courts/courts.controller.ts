import {
  Controller,
  Get,
  UseGuards,
  Post,
  Body,
  Param,
  ParseIntPipe,
  Query,
} from "@nestjs/common";
import { CourtsService } from "./courts.service";

@Controller("courts")
export class CourtsController {
  constructor(private courtsService: CourtsService) {}

  @Get()
  async getCourts(
    @Query("page", ParseIntPipe) page: number,
    @Query("perPage", ParseIntPipe) perPage: number
  ) {
    return this.courtsService.getCourts(page, perPage);
  }

  @Get("/:id")
  async getCourtsDetail(@Param("id") id) {
    return this.courtsService.getCourtsDetail(id);
  }
}
