import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUsrDefinedWorkHistoryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
