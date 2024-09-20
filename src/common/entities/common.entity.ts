import { ObjectType, Field, Int, Float } from '@nestjs/graphql';

@ObjectType()
export class Common {
  @Field((_type) => Number, {
    nullable: false,
  })
  Page!: number;

}
