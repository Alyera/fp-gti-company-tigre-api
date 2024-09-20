import { Module } from '@nestjs/common';
import { ProformasDetailsService } from './proformas-details.service';
import { ProformasDetailsResolver } from './proformas-details.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ProformasDetailsResolver, ProformasDetailsService, PrismaService],
})
export class ProformasDetailsModule {}
