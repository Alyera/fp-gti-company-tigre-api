import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSalesTaxWorkHistoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
