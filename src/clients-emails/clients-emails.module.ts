import { Module } from '@nestjs/common';
import { ClientsEmailsService } from './clients-emails.service';
import { ClientsEmailsResolver } from './clients-emails.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ClientsEmailsResolver, ClientsEmailsService, PrismaService],
})
export class ClientsEmailsModule {}
