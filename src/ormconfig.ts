import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import dotenv from "dotenv";
import { ChannelChats } from "./entities/ChannelChats";
import { ChannelMembers } from "./entities/ChannelMembers";
import { Channels } from "./entities/Channels";
import { DMs } from "./entities/DMs";
import { Mentions } from "./entities/Mentions";
import { Users } from "./entities/Users";
import { Workspaces } from "./entities/Workspaces";
import { Courts } from "./entities/Courts";
import { Movies } from "./entities/Movies";
import { Actors } from "./entities/Actors";
import { MovieActors } from "./entities/MovieActors";

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Movies, Actors, MovieActors],
  migrations: [__dirname + "/src/migrations/*.ts"],
  cli: { migrationsDir: "src/migrations" },
  autoLoadEntities: true,
  charset: "utf8mb4",
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
