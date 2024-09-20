import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTasascambioInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
