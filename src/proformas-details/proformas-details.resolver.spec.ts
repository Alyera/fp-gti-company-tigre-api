import { Test, TestingModule } from '@nestjs/testing';
import { ProformasDetailsResolver } from './proformas-details.resolver';
import { ProformasDetailsService } from './proformas-details.service';

describe('ProformasDetailsResolver', () => {
  let resolver: ProformasDetailsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProformasDetailsResolver, ProformasDetailsService],
    }).compile();

    resolver = module.get<ProformasDetailsResolver>(ProformasDetailsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
