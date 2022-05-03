import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Exhibitions } from "src/entities/Exhibitions";
import { Collections } from "src/entities/Collections";
import { ExhibitionsController } from "./exhibitions.controller";
import { ExhibitionsService } from "./exhibitions.service";

@Module({
  imports: [TypeOrmModule.forFeature([Exhibitions, Collections])],
  controllers: [ExhibitionsController],
  providers: [ExhibitionsService],
})
export class ExhibitionsModule {}
