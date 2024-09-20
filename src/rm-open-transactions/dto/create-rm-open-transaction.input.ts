import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateRmOpenTransactionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
