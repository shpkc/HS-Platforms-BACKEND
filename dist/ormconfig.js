"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const dotenv_1 = __importDefault(require("dotenv"));
const Users_1 = require("./src/entities/Users");
const Games_1 = require("./src/entities/Games");
const Nfts_1 = require("./src/entities/Nfts");
const Collections_1 = require("./src/entities/Collections");
dotenv_1.default.config();
const config = {
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [Users_1.Users, Games_1.Games, Nfts_1.Nfts, Collections_1.Collections],
    migrations: [__dirname + "/src/migrations/*.ts"],
    cli: { migrationsDir: "src/migrations" },
    autoLoadEntities: true,
    charset: "utf8mb4",
    synchronize: false,
    logging: true,
    keepConnectionAlive: true,
};
module.exports = config;
//# sourceMappingURL=ormconfig.js.map