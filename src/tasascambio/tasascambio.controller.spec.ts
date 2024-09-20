import { Test, TestingModule } from '@nestjs/testing';
import { TasascambioController } from './tasascambio.resolver';
import { TasascambioService } from './tasascambio.service';

describe('TasascambioController', () => {
  let controller: TasascambioController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TasascambioController],
      providers: [TasascambioService],
    }).compile();

    controller = module.get<TasascambioController>(TasascambioController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
