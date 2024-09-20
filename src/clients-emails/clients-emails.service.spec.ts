import { Test, TestingModule } from '@nestjs/testing';
import { ClientsEmailsService } from './clients-emails.service';

describe('ClientsEmailsService', () => {
  let service: ClientsEmailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClientsEmailsService],
    }).compile();

    service = module.get<ClientsEmailsService>(ClientsEmailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
