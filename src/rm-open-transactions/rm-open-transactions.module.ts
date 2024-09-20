import { Module } from '@nestjs/common';
import { RmOpenTransactionsService } from './rm-open-transactions.service';
import { RmOpenTransactionsResolver } from './rm-open-transactions.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [RmOpenTransactionsResolver, RmOpenTransactionsService, PrismaService],
})
export class RmOpenTransactionsModule {}
