import { Injectable } from '@nestjs/common';
import { CreateTasascambioInput } from './dto/create-tasascambio.input';
import { UpdateTasacambioInput } from './dto/update-tasascambio.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Proforma, Prisma } from '@prisma/client';

@Injectable()
export class TasascambioService {
  create(createTasascambioDto: CreateTasascambioInput) {
    return 'This action adds a new tasascambio';
  }

  findAll() {
    return `This action returns all tasascambio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tasascambio`;
  }

  update(id: number, updateTasascambioDto: UpdateTasacambioInput) {
    return `This action updates a #${id} tasascambio`;
  }

  remove(id: number) {
    return `This action removes a #${id} tasascambio`;
  }
}
