import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { GraphQLByte } from "graphql-scalars"
import { Client } from 'src/clients/entities/client.entity';
import { ProformasDetail } from 'src/proformas-details/entities/proformas-detail.entity';
import { SalesTaxesWorkHistory } from 'src/sales-tax-work-history/entities/sales-tax-work-history.entity';
import { UsrDefinedWorkHistory } from 'src/usr-defined-work-history/entities/usr-defined-work-history.entity';


@ObjectType()
export class Proforma {
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
  ORIGTYPE!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  ORIGNUMB!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  DOCID!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  DOCDATE!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  GLPOSTDT!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  QUOTEDAT!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  QUOEXPDA!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  ORDRDATE!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  INVODATE!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  BACKDATE!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  RETUDATE!: Date;

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

  @Field((_type) => Date, {
    nullable: false,
  })
  DISCDATE!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  DUEDATE!: Date;

  @Field((_type) => Int, {
    nullable: false,
  })
  REPTING!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  TRXFREQU!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  TIMEREPD!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  TIMETREP!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  DYSTINCR!: number;

  @Field((_type) => Date, {
    nullable: false,
  })
  DTLSTREP!: Date;

  @Field((_type) => String, {
    nullable: false,
  })
  DSTBTCH1!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  DSTBTCH2!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  USDOCID1!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  USDOCID2!: string;

  @Field((_type) => Float, {
    nullable: false,
  })
  DISCFRGT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORDAVFRT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DISCMISC!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORDAVMSC!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DISAVAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORDAVAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DISCRTND!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORDISRTD!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DISTKNAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORDISTKN!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  DSCPCTAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DSCDLRAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORDDLRAT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DISAVTKN!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORDATKN!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  PYMTRMID!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  PRCLEVEL!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  LOCNCODE!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  BCHSOURC!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  BACHNUMB!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CUSTNMBR!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CUSTNAME!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CSTPONBR!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  PROSPECT!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  MSTRNUMB!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  PCKSLPNO!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  PICTICNU!: string;

  @Field((_type) => Float, {
    nullable: false,
  })
  MRKDNAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORMRKDAM!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  PRBTADCD!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  PRSTADCD!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  CNTCPRSN!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  ShipToName!: string;

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
  PHNUMBR1!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  PHNUMBR2!: string;

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
  COMAPPTO!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  COMMAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  OCOMMAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  CMMSLAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORCOSAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  NCOMAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORNCMAMT!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  SHIPMTHD!: string;

  @Field((_type) => Float, {
    nullable: false,
  })
  TRDISAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORTDISAM!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  TRDISPCT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  SUBTOTAL!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORSUBTOT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  REMSUBTO!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  OREMSUBT!: number;

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
  FRTAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORFRTAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  MISCAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORMISCAMT!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  TXENGCLD!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  TAXEXMT1!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  TAXEXMT2!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  TXRGNNUM!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  TAXSCHID!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  TXSCHSRC!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  BSIVCTTL!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  FRTSCHID!: string;

  @Field((_type) => Float, {
    nullable: false,
  })
  FRTTXAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORFRTTAX!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  FRGTTXBL!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  MSCSCHID!: string;

  @Field((_type) => Float, {
    nullable: false,
  })
  MSCTXAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORMSCTAX!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  MISCTXBL!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  BKTFRTAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORBKTFRT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  BKTMSCAM!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORBKTMSC!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  BCKTXAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  OBTAXAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  TXBTXAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  OTAXTAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  TAXAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORTAXAMT!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  ECTRX!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DOCAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORDOCAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  PYMTRCVD!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORPMTRVD!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DEPRECVD!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORDEPRVD!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  CODAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORCODAMT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ACCTAMNT!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORACTAMT!: number;

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
  UPSZONE!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  TIMESPRT!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  PSTGSTUS!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  VOIDSTTS!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  ALLOCABY!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  NOTEINDX!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  CURNCYID!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  CURRNIDX!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  RATETPID!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  EXGTBLID!: string;

  @Field((_type) => Float, {
    nullable: false,
  })
  XCHGRATE!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  DENXRATE!: number;

  @Field((_type) => Date, {
    nullable: false,
  })
  EXCHDATE!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  TIME1!: Date;

  @Field((_type) => Int, {
    nullable: false,
  })
  RTCLCMTD!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  MCTRXSTT!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  TRXSORCE!: string;

  @Field((_type) => GraphQLByte, {
    nullable: false,
  })
  SOPHDRE1!: Buffer;

  @Field((_type) => GraphQLByte, {
    nullable: false,
  })
  SOPHDRE2!: Buffer;

  @Field((_type) => GraphQLByte, {
    nullable: false,
  })
  SOPLNERR!: Buffer;

  @Field((_type) => GraphQLByte, {
    nullable: false,
  })
  SOPHDRFL!: Buffer;

  @Field((_type) => GraphQLByte, {
    nullable: false,
  })
  SOPMCERR!: Buffer;

  @Field((_type) => String, {
    nullable: false,
  })
  COMMNTID!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  REFRENCE!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  POSTEDDT!: Date;

  @Field((_type) => String, {
    nullable: false,
  })
  PTDUSRID!: string;

  @Field((_type) => String, {
    nullable: false,
  })
  USER2ENT!: string;

  @Field((_type) => Date, {
    nullable: false,
  })
  CREATDDT!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  MODIFDT!: Date;

  @Field((_type) => Date, {
    nullable: false,
  })
  Tax_Date!: Date;

  @Field((_type) => Int, {
    nullable: false,
  })
  APLYWITH!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  WITHHAMT!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  SHPPGDOC!: number;

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
  CORRNXST!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  DOCNCORR!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  SEQNCORR!: number;

  @Field((_type) => Date, {
    nullable: false,
  })
  SALEDATE!: Date;

  @Field((_type) => GraphQLByte, {
    nullable: false,
  })
  SOPHDRE3!: Buffer;

  @Field((_type) => Int, {
    nullable: false,
  })
  EXCEPTIONALDEMAND!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  Flags!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  BackoutTradeDisc!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  OrigBackoutTradeDisc!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  GPSFOINTEGRATIONID!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  INTEGRATIONSOURCE!: number;

  @Field((_type) => String, {
    nullable: false,
  })
  INTEGRATIONID!: string;

  @Field((_type) => Int, {
    nullable: false,
  })
  SOPSTATUS!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  SHIPCOMPLETE!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  DIRECTDEBIT!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  WorkflowApprStatCreditLm!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  WorkflowPriorityCreditLm!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  WorkflowApprStatusQuote!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  WorkflowPriorityQuote!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  Workflow_Status!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  ContractExchangeRateStat!: number;

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

  @Field((_type) => Float, {
    nullable: false,
  })
  UNITPRCE!: number;

  @Field((_type) => Float, {
    nullable: false,
  })
  ORUNTPRC!: number;

  @Field((_type) => Int, {
    nullable: false,
  })
  LNITMSEQ!: number;

  @Field((type) => [Client], {nullable: true})
  client?: [Client] | null;

  @Field((type) => [ProformasDetail], {nullable: true})
  detail: [ProformasDetail] | null;

  @Field((type) => [SalesTaxesWorkHistory])
  sales_taxes_work_history?: [SalesTaxesWorkHistory];

  @Field((type) => [UsrDefinedWorkHistory], {nullable: true})
  work_history: [UsrDefinedWorkHistory] | null;



  
}
