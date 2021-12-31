import { Module } from '@nestjs/common';
import { CourtsService } from './courts.service';
import { CourtsController } from './courts.controller';

@Module({
  providers: [CourtsService],
  controllers: [CourtsController]
})
export class CourtsModule {}
