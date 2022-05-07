import {
  Controller,
  Get,
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

  @Get("/all-id")
  async getAllCourtsId() {
    return this.courtsService.getAllCourtsId();
  }

  @Get("/main")
  async getMain() {
    return this.courtsService.getMain();
  }

  @Get("/:id")
  async getCourtsDetail(@Param("id") id) {
    return this.courtsService.getCourtsDetail(id);
  }

  @Post()
  async createCourts(@Body() body) {
    return this.courtsService.createCourts(
      body.name,
      body.introduction,
      body.city,
      body.address,
      body.phone,
      body.imgLength,
      body.lat,
      body.lng,
      body.reservation,
      body.reservationLink,
      body.numberOfCourts,
      body.isOnlineReservation,
      body.Parking,
      body.isIndoor,
      body.isOutDoor,
      body.courtType
    );
  }
}
