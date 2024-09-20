import { CreateClientsAccountInput } from './create-clients-account.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateClientsAccountInput extends PartialType(CreateClientsAccountInput) {
  @Field(() => Int)
  id: number;
}
