import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import dotenv from "dotenv";
import { Games } from "./entities/Games";
import { Nfts } from "./entities/Nfts";
import { Users } from "./entities/Users";
import { Collections } from "./entities/Collections";

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Users, Games, Nfts, Collections],
  migrations: [__dirname + "/src/migrations/*.ts"],
  cli: { migrationsDir: "src/migrations" },
  autoLoadEntities: true,
  charset: "utf8mb4",
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
