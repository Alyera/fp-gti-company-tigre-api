import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Proforma } from 'src/proformas/entities/proforma.entity';

@ObjectType()
export class UsrDefinedWorkHistory {
  @Field((_type) => Int, {
    nullable: false,
  })
  SOPTYPE!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  SOPNUMBE!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  USRDAT01!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  USRDAT02!: Date;

  @Field((_type) => String, {
    nullable: false,
  })
  USRTAB01!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  USRTAB09!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  USRTAB03!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  USERDEF1!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  USERDEF2!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  USRDEF03!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  USRDEF04!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  USRDEF05!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  COMMENT_1!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  COMMENT_2!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  COMMENT_3!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  COMMENT_4!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  DEX_ROW_ID!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  CMMTTEXT!: string;

  @Field((type) => Proforma, {nullable: true})
  proforma?: Proforma | null;

  @Field((type) => Invoice)
  invoice?: Invoice;
}
