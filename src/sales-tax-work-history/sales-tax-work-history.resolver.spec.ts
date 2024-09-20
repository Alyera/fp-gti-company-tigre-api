import { Test, TestingModule } from '@nestjs/testing';
import { SalesTaxWorkHistoryResolver } from './sales-tax-work-history.resolver';
import { SalesTaxWorkHistoryService } from './sales-tax-work-history.service';

describe('SalesTaxWorkHistoryResolver', () => {
  let resolver: SalesTaxWorkHistoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesTaxWorkHistoryResolver, SalesTaxWorkHistoryService],
    }).compile();

    resolver = module.get<SalesTaxWorkHistoryResolver>(SalesTaxWorkHistoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
