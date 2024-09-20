import { Injectable } from '@nestjs/common';
import { CreateClientsAccountInput } from './dto/create-clients-account.input';
import { UpdateClientsAccountInput } from './dto/update-clients-account.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientsAccountsService {

  constructor (private prisma: PrismaService) {}

  create(createClientsAccountInput: CreateClientsAccountInput) {
    return 'This action adds a new clientsAccount';
  }

  findAll() {
    return this.prisma.clientAccounts.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} clientsAccount`;
  }

  update(id: number, updateClientsAccountInput: UpdateClientsAccountInput) {
    return `This action updates a #${id} clientsAccount`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientsAccount`;
  }
}
