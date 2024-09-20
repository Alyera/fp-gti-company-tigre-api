import { Test, TestingModule } from '@nestjs/testing';
import { UsrDefinedWorkHistoryService } from './usr-defined-work-history.service';

describe('UsrDefinedWorkHistoryService', () => {
  let service: UsrDefinedWorkHistoryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsrDefinedWorkHistoryService],
    }).compile();

    service = module.get<UsrDefinedWorkHistoryService>(UsrDefinedWorkHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
