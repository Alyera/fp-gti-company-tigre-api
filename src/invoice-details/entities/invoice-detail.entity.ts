import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { GraphQLByte } from 'graphql-scalars';
import { Invoice } from 'src/invoices/entities/invoice.entity';

@ObjectType()
export class InvoiceDetail {
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

  @Field((_type) => Int, {
    nullable: false,
  })
  CMPNTSEQ!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  ITEMNMBR!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  ITEMDESC!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  NONINVEN!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  DROPSHIP!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  UOFM!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  LOCNCODE!: string;

  @Field((_type) => Float, {
    nullable: false,
  })
  UNITCOST!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORUNTCST!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  UNITPRCE!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORUNTPRC!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  XTNDPRCE!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  OXTNDPRC!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  REMPRICE!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  OREPRICE!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  EXTDCOST!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  OREXTCST!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  MRKDNAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORMRKDAM!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  MRKDNPCT!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  MRKDNTYP!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  INVINDX!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  CSLSINDX!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  SLSINDX!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  MKDNINDX!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  RTNSINDX!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  INUSINDX!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  INSRINDX!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  DMGDINDX!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  ITMTSHID!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  IVITMTXB!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  BKTSLSAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORBKTSLS!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  TAXAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORTAXAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  TXBTXAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  OTAXTAMT!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  BSIVCTTL!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  TRDISAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORTDISAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DISCSALE!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORDAVSLS!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QUANTITY!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ATYALLOC!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYINSVC!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYINUSE!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYDMGED!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYRTRND!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYONHND!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYCANCE!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYCANOT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYORDER!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYPRBAC!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYPRBOO!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYPRINV!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYPRORD!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYPRVRECVD!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYRECVD!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYREMAI!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYREMBO!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYTBAOR!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYTOINV!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYTORDR!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYFULFI!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYSLCTD!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  QTYBSUOM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  EXTQTYAL!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  EXTQTYSEL!: number;

  @Field((_type) => Date, {
    nullable: false,
  })
  ReqShipDate!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  FUFILDAT!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  ACTLSHIP!: Date;

  @Field((_type) => String, {
    nullable: false,
  })
  SHIPMTHD!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  SALSTERR!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  SLPRSNID!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  PRCLEVEL!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  COMMNTID!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  BRKFLD1!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  BRKFLD2!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  BRKFLD3!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  CURRNIDX!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  TRXSORCE!: string;

  @Field((_type) => GraphQLByte, {
    nullable: false,
  })
  SOPLNERR!: Buffer;

  @Field((_type) => String, {
    nullable: false,
  })
  DOCNCORR!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  ORGSEQNM!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  ITEMCODE!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  PURCHSTAT!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  DECPLQTY!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  DECPLCUR!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  ODECPLCU!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  EXCEPTIONALDEMAND!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  TAXSCHID!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  TXSCHSRC!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  PRSTADCD!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  ShipToName!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CNTCPRSN!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  ADDRESS1!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  ADDRESS2!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  ADDRESS3!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CITY!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  STATE!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  ZIPCODE!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CCode!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  COUNTRY!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  PHONE1!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  PHONE2!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  PHONE3!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  FAXNUMBR!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  Flags!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  CONTNBR!: string;

  @Field((_type) => Float, {
    nullable: false,
  })
  CONTLNSEQNBR!: number;

  @Field((_type) => Date, {
    nullable: false,
  })
  CONTSTARTDTE!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  CONTENDDTE!: Date;

  @Field((_type) => String, {
    nullable: false,
  })
  CONTITEMNBR!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CONTSERIALNBR!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  ISLINEINTRA!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  Print_Phone_NumberGB!: number;

  @Field((_type) => Date, {
    nullable: false,
  })
  DEX_ROW_TS!: Date;

  @Field((_type) => Int, {
    nullable: false,
  })
  DEX_ROW_ID!: number;

  @Field((type) => Invoice)
  invoice?: Invoice;
}
