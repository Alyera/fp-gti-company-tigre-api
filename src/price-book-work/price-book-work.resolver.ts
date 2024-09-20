import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PriceBookWorkService } from './price-book-work.service';
import { PriceBookWork } from './entities/price-book-work.entity';
import { CreatePriceBookWorkInput } from './dto/create-price-book-work.input';
import { UpdatePriceBookWorkInput } from './dto/update-price-book-work.input';

@Resolver(() => PriceBookWork)
export class PriceBookWorkResolver {
  constructor(private readonly priceBookWorkService: PriceBookWorkService) {}

  @Mutation(() => PriceBookWork)
  createPriceBookWork(@Args('createPriceBookWorkInput') createPriceBookWorkInput: CreatePriceBookWorkInput) {
    return this.priceBookWorkService.create(createPriceBookWorkInput);
  }

  @Query(() => [PriceBookWork], { name: 'priceBookWork' })
  findAll() {
    return this.priceBookWorkService.findAll();
  }

  @Query(() => PriceBookWork, { name: 'priceBookWork' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.priceBookWorkService.findOne(id);
  }

  @Mutation(() => PriceBookWork)
  updatePriceBookWork(@Args('updatePriceBookWorkInput') updatePriceBookWorkInput: UpdatePriceBookWorkInput) {
    return this.priceBookWorkService.update(updatePriceBookWorkInput.id, updatePriceBookWorkInput);
  }

  @Mutation(() => PriceBookWork)
  removePriceBookWork(@Args('id', { type: () => Int }) id: number) {
    return this.priceBookWorkService.remove(id);
  }
}
