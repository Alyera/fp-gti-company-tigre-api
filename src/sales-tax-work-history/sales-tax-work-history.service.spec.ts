import { Test, TestingModule } from '@nestjs/testing';
import { SalesTaxWorkHistoryService } from './sales-tax-work-history.service';

describe('SalesTaxWorkHistoryService', () => {
  let service: SalesTaxWorkHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesTaxWorkHistoryService],
    }).compile();

    service = module.get<SalesTaxWorkHistoryService>(SalesTaxWorkHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
