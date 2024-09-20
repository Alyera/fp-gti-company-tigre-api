import { CreateClientsEmailInput } from './create-clients-email.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateClientsEmailInput extends PartialType(CreateClientsEmailInput) {
  @Field(() => Int)
  id: number;
}
