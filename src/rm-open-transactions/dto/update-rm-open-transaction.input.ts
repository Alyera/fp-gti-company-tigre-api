import { CreateRmOpenTransactionInput } from './create-rm-open-transaction.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateRmOpenTransactionInput extends PartialType(CreateRmOpenTransactionInput) {
  @Field(() => Int)
  id: number;
}
