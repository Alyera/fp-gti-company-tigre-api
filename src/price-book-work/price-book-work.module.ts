import { Module } from '@nestjs/common';
import { PriceBookWorkService } from './price-book-work.service';
import { PriceBookWorkResolver } from './price-book-work.resolver';

@Module({
  providers: [PriceBookWorkResolver, PriceBookWorkService],
})
export class PriceBookWorkModule {}
