import { Injectable } from '@nestjs/common';
import { CreateClientsEmailInput } from './dto/create-clients-email.input';
import { UpdateClientsEmailInput } from './dto/update-clients-email.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ClientsEmailsService {

  constructor (private prisma: PrismaService) {}

  create(createClientsEmailInput: CreateClientsEmailInput) {
    return 'This action adds a new clientsEmail';
  }

  findAll() {
    return this.prisma.clientsEmail.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} clientsEmail`;
  }

  update(id: number, updateClientsEmailInput: UpdateClientsEmailInput) {
    return `This action updates a #${id} clientsEmail`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientsEmail`;
  }
}
