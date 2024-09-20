import { CreateTasascambioInput } from './create-tasascambio.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTasacambioInput extends PartialType(CreateTasascambioInput) {
  @Field(() => Int)
  id: number;
}