import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClientsAccountInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
