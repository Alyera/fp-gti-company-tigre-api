import { Test, TestingModule } from '@nestjs/testing';
import { RmOpenTransactionsService } from './rm-open-transactions.service';

describe('RmOpenTransactionsService', () => {
  let service: RmOpenTransactionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RmOpenTransactionsService],
    }).compile();

    service = module.get<RmOpenTransactionsService>(RmOpenTransactionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
