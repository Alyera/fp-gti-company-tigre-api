import { Module } from '@nestjs/common';
import { UsrDefinedWorkHistoryService } from './usr-defined-work-history.service';
import { UsrDefinedWorkHistoryResolver } from './usr-defined-work-history.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [UsrDefinedWorkHistoryResolver, UsrDefinedWorkHistoryService, PrismaService],
})
export class UsrDefinedWorkHistoryModule {}
