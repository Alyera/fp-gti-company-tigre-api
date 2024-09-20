import { CreateUsrDefinedWorkHistoryInput } from './create-usr-defined-work-history.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUsrDefinedWorkHistoryInput extends PartialType(CreateUsrDefinedWorkHistoryInput) {
  @Field(() => Int)
  id: number;
}
