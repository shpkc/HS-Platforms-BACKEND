import { Module } from "@nestjs/common";
import { NftsController } from "./nft.controller";
import { NftsService } from "./nft.service";

@Module({
  controllers: [NftsController],
  providers: [NftsService],
})
export class NftModule {}
