import { Test, TestingModule } from '@nestjs/testing';
import { RmOpenTransactionsResolver } from './rm-open-transactions.resolver';
import { RmOpenTransactionsService } from './rm-open-transactions.service';

describe('RmOpenTransactionsResolver', () => {
  let resolver: RmOpenTransactionsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RmOpenTransactionsResolver, RmOpenTransactionsService],
    }).compile();

    resolver = module.get<RmOpenTransactionsResolver>(RmOpenTransactionsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
