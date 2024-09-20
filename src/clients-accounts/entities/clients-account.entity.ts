import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Client } from 'src/clients/entities/client.entity';

@ObjectType()
export class ClientsAccount {
  @Field()
  CUSTNMBR: string;
  @Field()
  ADRSCODE: string;
  @Field()
  SLPRSNID: string;
  @Field()
  UPSZONE: string;
  @Field()
  SHIPMTHD: string;
  @Field()
  TAXSCHID: string;
  @Field()
  CNTCPRSN: string;
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
  MODIFDT: Date;
  @Field()
  CREATDDT: Date;
  @Field()
  GPSFOINTEGRATIONID: string;
  @Field(() => Int)
  INTEGRATIONSOURCE: number;
  @Field()
  INTEGRATIONID: string;
  @Field()
  CCode: string;
  @Field()
  DECLID: string;
  @Field()
  LOCNCODE: string;
  @Field()
  SALSTERR: string;
  @Field()
  USERDEF1: string;
  @Field()
  USERDEF2: string;
  @Field()
  ShipToName: string;
  @Field(() => Int)
  Print_Phone_NumberGB: number;
  @Field()
  DEX_ROW_TS: Date;
  @Field(() => Int)
  DEX_ROW_ID: number;
  @Field((type) => Client)
  client: Client | null
}
