import { Test, TestingModule } from '@nestjs/testing';
import { TasascambioService } from './tasascambio.service';

describe('TasascambioService', () => {
  let service: TasascambioService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasascambioService],
    }).compile();

    service = module.get<TasascambioService>(TasascambioService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
