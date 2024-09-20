import { Module } from '@nestjs/common';
import { ProformasService } from './proformas.service';
import { ProformasResolver } from './proformas.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [ProformasResolver, ProformasService, PrismaService],
})
export class ProformasModule {}
