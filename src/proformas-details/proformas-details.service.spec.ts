import { Test, TestingModule } from '@nestjs/testing';
import { ProformasDetailsService } from './proformas-details.service';

describe('ProformasDetailsService', () => {
  let service: ProformasDetailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProformasDetailsService],
    }).compile();

    service = module.get<ProformasDetailsService>(ProformasDetailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
