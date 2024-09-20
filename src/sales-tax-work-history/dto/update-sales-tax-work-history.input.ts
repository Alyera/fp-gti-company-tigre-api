import { CreateSalesTaxWorkHistoryInput } from './create-sales-tax-work-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateSalesTaxWorkHistoryInput extends PartialType(CreateSalesTaxWorkHistoryInput) {
  @Field(() => Int)
  id: number;
}
