import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Client } from 'src/clients/entities/client.entity';

@ObjectType()
export class ClientsEmail {
  @Field()
  CUSTNMBR: string;

  @Field(() => Int)
  Email_Type: number;

  @Field()
  Email_Recipient: string;

  @Field(() => Int)
  DEX_ROW_ID: number;

  @Field((type) => Client)
  client: Client
  
}
