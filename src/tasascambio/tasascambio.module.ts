import { Module } from '@nestjs/common';
import { TasascambioService } from './tasascambio.service';
import { TasascambioResolver } from './tasascambio.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [TasascambioService, TasascambioResolver, PrismaService],
})
export class TasascambioModule {}



