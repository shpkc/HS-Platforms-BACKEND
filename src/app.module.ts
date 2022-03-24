import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { LoggerMiddleware } from "./middlewares/logger.middleware";
import * as ormconfig from "./ormconfig";
import { GamesModule } from "./games/games.module";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { NftModule } from "./nft/nft.module";
import { CollectionModule } from "./collections/collections.module";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot(ormconfig),
    GamesModule,
    UsersModule,
    AuthModule,
    NftModule,
    CollectionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes("*");
  }
}
