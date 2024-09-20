import { Module } from '@nestjs/common';
import { SalesTaxWorkHistoryService } from './sales-tax-work-history.service';
import { SalesTaxWorkHistoryResolver } from './sales-tax-work-history.resolver';
import { PrismaService } from 'src/prisma/prisma.service';
@Module({
  providers: [SalesTaxWorkHistoryResolver, SalesTaxWorkHistoryService, PrismaService],
})
export class SalesTaxWorkHistoryModule {}
