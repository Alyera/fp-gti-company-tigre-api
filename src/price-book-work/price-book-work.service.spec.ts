import { Test, TestingModule } from '@nestjs/testing';
import { PriceBookWorkService } from './price-book-work.service';

describe('PriceBookWorkService', () => {
  let service: PriceBookWorkService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PriceBookWorkService],
    }).compile();

    service = module.get<PriceBookWorkService>(PriceBookWorkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
