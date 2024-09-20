import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class PriceBookWork {
  @Field((_type) => String, {
    nullable: false,
  })
  PRCBKID!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  PRODTCOD!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  LINKCODE!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  SEQNUMBR!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  DEX_ROW_ID!: number;
}
