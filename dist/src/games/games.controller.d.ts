import { GamesService } from "./games.service";
export declare class GamesController {
    private gamesService;
    constructor(gamesService: GamesService);
    getGames(page: number, perPage: number): Promise<{
        result: import("../entities/Games").Games[];
        totalCount: number;
    }>;
    getAllGamesId(): Promise<{
        result: import("../entities/Games").Games[];
    }>;
    getGamesDetail(id: any): Promise<{
        result: import("../entities/Games").Games;
    }>;
}
