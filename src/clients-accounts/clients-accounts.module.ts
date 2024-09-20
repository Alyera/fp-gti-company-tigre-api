import { Module } from '@nestjs/common';
import { ClientsAccountsService } from './clients-accounts.service';
import { ClientsAccountsResolver } from './clients-accounts.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ClientsAccountsResolver, ClientsAccountsService, PrismaService],
})
export class ClientsAccountsModule {}
