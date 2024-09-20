import { CreatePriceBookWorkInput } from './create-price-book-work.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdatePriceBookWorkInput extends PartialType(CreatePriceBookWorkInput) {
  @Field(() => Int)
  id: number;
}
