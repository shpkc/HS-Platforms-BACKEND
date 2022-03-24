import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Collections } from "src/entities/Collections";
import { CollectionsController } from "./collections.controller";
import { CollectionsService } from "./collections.service";

@Module({
  imports: [TypeOrmModule.forFeature([Collections])],
  controllers: [CollectionsController],
  providers: [CollectionsService],
})
export class CollectionModule {}
