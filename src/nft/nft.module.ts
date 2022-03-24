import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Nfts } from "src/entities/Nfts";
import { Collections } from "src/entities/Collections";
import { NftsController } from "./nft.controller";
import { NftsService } from "./nft.service";

@Module({
  imports: [TypeOrmModule.forFeature([Nfts, Collections])],
  controllers: [NftsController],
  providers: [NftsService],
})
export class NftModule {}
