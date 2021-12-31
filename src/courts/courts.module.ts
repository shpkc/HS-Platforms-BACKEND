import { Module } from "@nestjs/common";
import { CourtsService } from "./courts.service";
import { CourtsController } from "./courts.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Courts } from "../entities/Courts";
@Module({
  imports: [TypeOrmModule.forFeature([Courts])],
  providers: [CourtsService],
  controllers: [CourtsController],
})
export class CourtsModule {}
