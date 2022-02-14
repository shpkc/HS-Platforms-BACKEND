import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import dotenv from "dotenv";
import { Courts } from "./src/entities/Courts";
import { Games } from "./src/entities/Games";

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Courts, Games],
  migrations: [__dirname + "/src/migrations/*.ts"],
  cli: { migrationsDir: "src/migrations" },
  autoLoadEntities: true,
  charset: "utf8mb4",
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
