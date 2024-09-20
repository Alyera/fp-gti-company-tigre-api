import { Injectable } from '@nestjs/common';
import { CreateRmOpenTransactionInput } from './dto/create-rm-open-transaction.input';
import { UpdateRmOpenTransactionInput } from './dto/update-rm-open-transaction.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RmOpenTransactionsService {
  constructor(private prisma: PrismaService) {}

  create(createRmOpenTransactionInput: CreateRmOpenTransactionInput) {
    return 'This action adds a new rmOpenTransaction';
  }

  findAll() {
    return this.prisma.rMOpenTransactions.findMany();
  }

  findOne(DOCNUMBR: string) {
    return 'rpeuba';
  }

  update(
    id: number,
    updateRmOpenTransactionInput: UpdateRmOpenTransactionInput,
  ) {
    return `This action updates a #${id} rmOpenTransaction`;
  }

  remove(id: number) {
    return `This action removes a #${id} rmOpenTransaction`;
  }
}
