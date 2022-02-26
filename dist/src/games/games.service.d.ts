import { Games } from "../entities/Games";
export declare class GamesService {
    private gamesRepository;
    getGames(page: number, perPage: number): Promise<{
        result: Games[];
        totalCount: number;
    }>;
    getGamesDetail(id: number): Promise<{
        result: Games;
    }>;
    getAllGamesId(): Promise<{
        result: Games[];
    }>;
    getGamesMain(): Promise<{
        banner: Games[];
        upcoming: Games[];
        best: Games[];
    }>;
}
