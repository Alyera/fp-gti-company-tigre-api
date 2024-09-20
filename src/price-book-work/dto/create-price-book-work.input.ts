import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePriceBookWorkInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
