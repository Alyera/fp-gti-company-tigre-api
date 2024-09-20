import { Test, TestingModule } from '@nestjs/testing';
import { InvoiceDetailsResolver } from './invoice-details.resolver';
import { InvoiceDetailsService } from './invoice-details.service';

describe('InvoiceDetailsResolver', () => {
  let resolver: InvoiceDetailsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoiceDetailsResolver, InvoiceDetailsService],
    }).compile();

    resolver = module.get<InvoiceDetailsResolver>(InvoiceDetailsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
