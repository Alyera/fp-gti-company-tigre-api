import { Injectable } from '@nestjs/common';
import { CreatePriceBookWorkInput } from './dto/create-price-book-work.input';
import { UpdatePriceBookWorkInput } from './dto/update-price-book-work.input';

@Injectable()
export class PriceBookWorkService {
  create(createPriceBookWorkInput: CreatePriceBookWorkInput) {
    return 'This action adds a new priceBookWork';
  }

  findAll() {
    return `This action returns all priceBookWork`;
  }

  findOne(id: number) {
    return `This action returns a #${id} priceBookWork`;
  }

  update(id: number, updatePriceBookWorkInput: UpdatePriceBookWorkInput) {
    return `This action updates a #${id} priceBookWork`;
  }

  remove(id: number) {
    return `This action removes a #${id} priceBookWork`;
  }
}
