import { Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { BannersService } from "./banners.service";

@Controller("banners")
export class BannersController {
  constructor(private bannersService: BannersService) {}
}
