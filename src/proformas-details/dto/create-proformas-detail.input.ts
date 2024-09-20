import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProformasDetailInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
