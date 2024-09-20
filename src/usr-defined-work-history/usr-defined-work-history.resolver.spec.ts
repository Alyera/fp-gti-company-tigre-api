import { Test, TestingModule } from '@nestjs/testing';
import { UsrDefinedWorkHistoryResolver } from './usr-defined-work-history.resolver';
import { UsrDefinedWorkHistoryService } from './usr-defined-work-history.service';

describe('UsrDefinedWorkHistoryResolver', () => {
  let resolver: UsrDefinedWorkHistoryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsrDefinedWorkHistoryResolver, UsrDefinedWorkHistoryService],
    }).compile();

    resolver = module.get<UsrDefinedWorkHistoryResolver>(UsrDefinedWorkHistoryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
