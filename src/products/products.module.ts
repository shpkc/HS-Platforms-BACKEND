import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Products } from "src/entities/Products";
import { Collections } from "src/entities/Collections";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
  imports: [TypeOrmModule.forFeature([Products, Collections])],
  controllers: [ProductsController],
  providers: [ProductsService],
})
export class ProductModule {}
