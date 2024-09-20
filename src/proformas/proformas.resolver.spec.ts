import { Test, TestingModule } from '@nestjs/testing';
import { ProformasResolver } from './proformas.resolver';
import { ProformasService } from './proformas.service';

describe('ProformasResolver', () => {
  let resolver: ProformasResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProformasResolver, ProformasService],
    }).compile();

    resolver = module.get<ProformasResolver>(ProformasResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
