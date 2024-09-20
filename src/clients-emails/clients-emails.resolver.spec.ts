import { Test, TestingModule } from '@nestjs/testing';
import { ClientsEmailsResolver } from './clients-emails.resolver';
import { ClientsEmailsService } from './clients-emails.service';

describe('ClientsEmailsResolver', () => {
  let resolver: ClientsEmailsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientsEmailsResolver, ClientsEmailsService],
    }).compile();

    resolver = module.get<ClientsEmailsResolver>(ClientsEmailsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
