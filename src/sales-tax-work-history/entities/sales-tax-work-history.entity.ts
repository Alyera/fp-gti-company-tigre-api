import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Proforma } from 'src/proformas/entities/proforma.entity';

@ObjectType()
export class SalesTaxesWorkHistory {
  @Field((_type) => Int, {
    nullable: false,
  })
  SOPTYPE!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  SOPNUMBE!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  LNITMSEQ!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  TAXDTLID!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  ACTINDX!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  BKOUTTAX!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  TXABLETX!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  STAXAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORSLSTAX!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  FRTTXAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORFRTTAX!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  MSCTXAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORMSCTAX!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  TAXDTSLS!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORTOTSLS!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  TDTTXSLS!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORTXSLS!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  TXDTOTTX!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  OTTAXPON!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  DELETE1!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  CURRNIDX!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  TRXSORCE!: string;

  @Field((_type) => Float, {
    nullable: false,
  })
  TXDTLPCTAMT!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  DEX_ROW_ID!: number;

  @Field((type) => Proforma)
  proforma?: Proforma;

  @Field((type) => Invoice)
  invoice?: Invoice;
}
