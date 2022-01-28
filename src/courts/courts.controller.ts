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
import { ApiCookieAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { LoggedInGuard } from "../auth/logged-in.guard";
import { User } from "../decorators/user.decorator";
import { Users } from "../entities/Users";
import { CourtsService } from "./courts.service";

@Controller("courts")
export class CourtsController {
  constructor(private courtsService: CourtsService) {}

  @ApiOperation({ summary: "코트 정보 가져오기" })
  @Get()
  async getCourts(
    @Query("page", ParseIntPipe) page: number,
    @Query("perPage", ParseIntPipe) perPage: number
  ) {
    return this.courtsService.getCourts(page, perPage);
  }
}
