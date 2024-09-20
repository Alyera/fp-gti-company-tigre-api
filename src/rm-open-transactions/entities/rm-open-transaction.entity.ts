import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { GraphQLByte } from 'graphql-scalars';
import { Client } from 'src/clients/entities/client.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';

@ObjectType()
export class RmOpenTransaction {
  @Field((_type) => String, {
    nullable: false,
  })
  CUSTNMBR!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CPRCSTNM!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  DOCNUMBR!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CHEKNMBR!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  BACHNUMB!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  BCHSOURC!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  TRXSORCE!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  RMDTYPAL!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  CSHRCTYP!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  CBKIDCRD!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CBKIDCSH!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CBKIDCHK!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  DUEDATE!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  DOCDATE!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  POSTDATE!: Date;

  @Field((_type) => String, {
    nullable: false,
  })
  PSTUSRID!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  GLPOSTDT!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  LSTEDTDT!: Date;

  @Field((_type) => String, {
    nullable: false,
  })
  LSTUSRED!: string;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORTRXAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  CURTRXAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  SLSAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  COSTAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  FRTAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  MISCAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  TAXAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  COMDLRAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  CASHAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DISTKNAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DISAVAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DISAVTKN!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DISCRTND!: number;

  @Field((_type) => Date, {
    nullable: false,
  })
  DISCDATE!: Date;

  @Field((_type) => Float, {
    nullable: false,
  })
  DSCDLRAM!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  DSCPCTAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  WROFAMNT!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  TRXDSCRN!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CSPORNBR!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  SLPRSNID!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  SLSTERCD!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  DINVPDOF!: Date;

  @Field((_type) => Float, {
    nullable: false,
  })
  PPSAMDED!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  GSTDSAMT!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  DELETE1!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  AGNGBUKT!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  VOIDSTTS!: number;

  @Field((_type) => Date, {
    nullable: false,
  })
  VOIDDATE!: Date;

  @Field((_type) => String, {
    nullable: false,
  })
  TAXSCHID!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CURNCYID!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  PYMTRMID!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  SHIPMTHD!: string;

  @Field((_type) => Float, {
    nullable: false,
  })
  TRDISAMT!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  SLSCHDID!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  FRTSCHID!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  MSCSCHID!: string;

  @Field((_type) => Float, {
    nullable: false,
  })
  NOTEINDX!: number;

  @Field((_type) => Date, {
    nullable: false,
  })
  Tax_Date!: Date;

  @Field((_type) => Int, {
    nullable: false,
  })
  APLYWITH!: number;

  @Field((_type) => Date, {
    nullable: false,
  })
  SALEDATE!: Date;

  @Field((_type) => Int, {
    nullable: false,
  })
  CORRCTN!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  SIMPLIFD!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  Electronic!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  ECTRX!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  BKTSLSAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  BKTFRTAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  BKTMSCAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  BackoutTradeDisc!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  Factoring!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  DIRECTDEBIT!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  ADRSCODE!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  EFTFLAG!: number;

  @Field((_type) => Date, {
    nullable: false,
  })
  DEX_ROW_TS!: Date;

  @Field((_type) => Int, {
    nullable: false,
  })
  DEX_ROW_ID!: number;

  @Field((type) => Client)
  client?: Client;

  @Field((type) => Invoice)
  invoice?: Invoice;
}
