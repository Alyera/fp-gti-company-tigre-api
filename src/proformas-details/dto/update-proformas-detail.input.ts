import { CreateProformasDetailInput } from './create-proformas-detail.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProformasDetailInput extends PartialType(CreateProformasDetailInput) {
  @Field(() => Int)
  id: number;
}
