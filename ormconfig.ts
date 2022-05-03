import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import dotenv from "dotenv";
import { Users } from "./src/entities/Users";
import { Nfts } from "./src/entities/Nfts";
import { Collections } from "./src/entities/Collections";
import { Products } from "./src/entities/Products";
import { Exhibitions } from "./src/entities/Exhibitions";

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Users, Nfts, Collections, Products, Exhibitions],
  migrations: [__dirname + "/src/migrations/*.ts"],
  cli: { migrationsDir: "src/migrations" },
  autoLoadEntities: true,
  charset: "utf8mb4",
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
