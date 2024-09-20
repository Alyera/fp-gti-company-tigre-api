import { Injectable } from '@nestjs/common';
import { CreateUsrDefinedWorkHistoryInput } from './dto/create-usr-defined-work-history.input';
import { UpdateUsrDefinedWorkHistoryInput } from './dto/update-usr-defined-work-history.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDefinedWorkHistory, Prisma } from '@prisma/client';

@Injectable()
export class UsrDefinedWorkHistoryService {

  constructor(private prisma: PrismaService) {}

  create(createUsrDefinedWorkHistoryInput: CreateUsrDefinedWorkHistoryInput) {
    return 'This action adds a new usrDefinedWorkHistory';
  }

  async findAll() {
    return this.prisma.UserDefinedWorkHistory.findMany({
      //proforma:true
    });
  }

  async findOne(SOPNUMBE: string): Promise<UserDefinedWorkHistory> {
    return this.prisma.UserDefinedWorkHistory.findUnique({ where: { 
      SOPNUMBE: SOPNUMBE, 
     } });
  }

  update(id: number, updateUsrDefinedWorkHistoryInput: UpdateUsrDefinedWorkHistoryInput) {
    return `This action updates a #${id} usrDefinedWorkHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} usrDefinedWorkHistory`;
  }
}
