import { CreateProformaInput } from './create-proforma.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProformaInput extends PartialType(CreateProformaInput) {
  @Field(() => Int)
  id: number;
}
