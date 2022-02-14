import { Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { GamesService } from "./games.service";

@Controller("games")
export class GamesController {
  constructor(private gamesService: GamesService) {}

  @Get()
  async getGames(
    @Query("page", ParseIntPipe) page: number,
    @Query("perPage", ParseIntPipe) perPage: number
  ) {
    return this.gamesService.getGames(page, perPage);
  }

  @Get("/all-id")
  async getAllGamesId() {
    return this.gamesService.getAllGamesId();
  }

  @Get("/:id")
  async getGamesDetail(@Param("id") id) {
    return this.gamesService.getGamesDetail(id);
  }
}
