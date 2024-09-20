import { Test, TestingModule } from '@nestjs/testing';
import { PriceBookWorkResolver } from './price-book-work.resolver';
import { PriceBookWorkService } from './price-book-work.service';

describe('PriceBookWorkResolver', () => {
  let resolver: PriceBookWorkResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceBookWorkResolver, PriceBookWorkService],
    }).compile();

    resolver = module.get<PriceBookWorkResolver>(PriceBookWorkResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
