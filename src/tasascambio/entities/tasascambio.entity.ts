import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Proforma } from 'src/proformas/entities/proforma.entity';

@ObjectType()
export class TasasCambio {
  @Field((_type) => String, {
    nullable: false,
  })
  EXGTBLID!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CURNCYID!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  EXCHDATE!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  TIME1!: Date;

  @Field((_type) => Float, {
    nullable: false,
  })
  XCHGRATE!: number;

  @Field((_type) => Date, {
    nullable: false,
  })
  EXPNDATE!: Date;

  @Field((_type) => Int, {
    nullable: false,
  })
  DEX_ROW_ID!: number;

  @Field((type) => Proforma)
  proforma?: Proforma;

}
