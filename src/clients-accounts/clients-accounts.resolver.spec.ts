import { Test, TestingModule } from '@nestjs/testing';
import { ClientsAccountsResolver } from './clients-accounts.resolver';
import { ClientsAccountsService } from './clients-accounts.service';

describe('ClientsAccountsResolver', () => {
  let resolver: ClientsAccountsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientsAccountsResolver, ClientsAccountsService],
    }).compile();

    resolver = module.get<ClientsAccountsResolver>(ClientsAccountsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
