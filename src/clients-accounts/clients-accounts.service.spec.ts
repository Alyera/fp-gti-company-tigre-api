import { Test, TestingModule } from '@nestjs/testing';
import { ClientsAccountsService } from './clients-accounts.service';

describe('ClientsAccountsService', () => {
  let service: ClientsAccountsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientsAccountsService],
    }).compile();

    service = module.get<ClientsAccountsService>(ClientsAccountsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
