import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateClientsEmailInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
