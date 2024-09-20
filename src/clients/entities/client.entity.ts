import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { ClientsAccount } from 'src/clients-accounts/entities/clients-account.entity';
import { ClientsEmail } from 'src/clients-emails/entities/clients-email.entity';
import { Proforma } from 'src/proformas/entities/proforma.entity';


@ObjectType()
export class Client {
  @Field()
  CUSTNMBR: string;
  @Field()
  CUSTNAME: string;
  @Field()
  CUSTCLAS: string;
  @Field()
  CPRCSTNM: string;
  @Field()
  CNTCPRSN: string;
  @Field()
  STMTNAME: string;
  @Field()
  SHRTNAME: string;
  @Field()
  ADRSCODE: string;
  @Field()
  UPSZONE: string;
  @Field()
  SHIPMTHD: string;
  @Field()
  TAXSCHID: string;
  @Field()
  ADDRESS1: string;
  @Field()
  ADDRESS2: string;
  @Field()
  ADDRESS3: string;
  @Field()
  COUNTRY: string;
  @Field()
  CITY: string;
  @Field()
  STATE: string;
  @Field()
  ZIP: string;
  @Field()
  PHONE1: string;
  @Field()
  PHONE2: string;
  @Field()
  PHONE3: string;
  @Field()
  FAX: string;
  @Field()
  PRBTADCD: string;
  @Field()
  PRSTADCD: string;
  @Field()
  STADDRCD: string;
  @Field()
  SLPRSNID: string;
  @Field()
  CHEKBKID: string;
  @Field()
  PYMTRMID: string;
  @Field(() => Int)
  CRLMTTYP: number;
  @Field(() => Float)
  CRLMTAMT: number;
  @Field(() => Int)
  CRLMTPER: number;
  @Field(() => Float)
  CRLMTPAM: number;
  @Field()
  CURNCYID: string;
  @Field()
  RATETPID: string;
  @Field(() => Int)
  CUSTDISC: number;
  @Field()
  PRCLEVEL: string;
  @Field(() => Int)
  MINPYTYP: number;
  @Field(() => Float)
  MINPYDLR: number;
  @Field(() => Int)
  MINPYPCT: number;
  @Field(() => Int)
  FNCHATYP: number;
  @Field(() => Int)
  FNCHPCNT: number;
  @Field(() => Float)
  FINCHDLR: number;
  @Field(() => Int)
  MXWOFTYP: number;
  @Field(() => Float)
  MXWROFAM: number;
  @Field()
  COMMENT1: string;
  @Field()
  COMMENT2: string;
  @Field()
  USERDEF1: string;
  @Field()
  USERDEF2: string;
  @Field()
  TAXEXMT1: string;
  @Field()
  TAXEXMT2: string;
  @Field()
  TXRGNNUM: string;
  @Field(() => Int)
  BALNCTYP: number;
  @Field(() => Int)
  STMTCYCL: number;
  @Field()
  BANKNAME: string;
  @Field()
  BNKBRNCH: string;
  @Field()
  SALSTERR: string;
  @Field(() => Int)
  DEFCACTY: number;
  @Field(() => Int)
  RMCSHACC: number;
  @Field(() => Int)
  RMARACC: number;
  @Field(() => Int)
  RMSLSACC: number;
  @Field(() => Int)
  RMIVACC: number;
  @Field(() => Int)
  RMCOSACC: number;
  @Field(() => Int)
  RMTAKACC: number;
  @Field(() => Int)
  RMAVACC: number;
  @Field(() => Int)
  RMFCGACC: number;
  @Field(() => Int)
  RMWRACC: number;
  @Field(() => Int)
  RMSORACC: number;
  @Field()
  FRSTINDT: Date;
  @Field(() => Int)
  INACTIVE: number;
  @Field(() => Int)
  HOLD: number;
  @Field()
  CRCARDID: string;
  @Field()
  CRCRDNUM: string;
  @Field()
  CCRDXPDT: Date;
  @Field(() => Int)
  KPDSTHST: number;
  @Field(() => Int)
  KPCALHST: number;
  @Field(() => Int)
  KPERHIST: number;
  @Field(() => Int)
  KPTRXHST: number;
  @Field(() => Float)
  NOTEINDX: number;
  @Field()
  CREATDDT: Date;
  @Field()
  MODIFDT: Date;
  @Field(() => Int)
  Revalue_Customer: number;
  @Field(() => Int)
  Post_Results_To: number;
  @Field()
  FINCHID: string;
  @Field()
  GOVCRPID: string;
  @Field()
  GOVINDID: string;
  @Field(() => Int)
  DISGRPER: number;
  @Field(() => Int)
  DUEGRPER: number;
  @Field()
  DOCFMTID: string;
  @Field(() => Int)
  Send_Email_Statements: number;
  @Field(() => Int)
  USERLANG: number;
  @Field()
  GPSFOINTEGRATIONID: string;
  @Field(() => Int)
  INTEGRATIONSOURCE: number;
  @Field()
  INTEGRATIONID: string;
  @Field(() => Int)
  ORDERFULFILLDEFAULT: number;
  @Field(() => Int)
  CUSTPRIORITY: number;
  @Field()
  CCode: string;
  @Field()
  DECLID: string;
  @Field(() => Int)
  RMOvrpymtWrtoffAcctIdx: number;
  @Field(() => Int)
  SHIPCOMPLETE: number;
  @Field(() => Int)
  CBVAT: number;
  @Field(() => Int)
  INCLUDEINDP: number;
  @Field()
  DEX_ROW_TS: Date;
  @Field(() => Int)
  DEX_ROW_ID: number;
  @Field()
  SOPNUMBE: string;
  @Field((_type) => Number, {
    nullable: false,
  })
  @Field(() => Int)
  PAGE: number;

  @Field((type) => [ClientsAccount], { nullable: true })
  accounts?: [ClientsAccount] | null;

  @Field((type) => ClientsEmail, { nullable: true })
  email : ClientsEmail | null

  @Field((type) =>  [Proforma], { nullable: true })
  proformas?: Proforma[] | null

  @Field((type) => [Invoice], { nullable: true })
  invoices?: [Invoice] | null
  
}
