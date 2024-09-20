import { Injectable } from '@nestjs/common';
import { CreateSalesTaxWorkHistoryInput } from './dto/create-sales-tax-work-history.input';
import { UpdateSalesTaxWorkHistoryInput } from './dto/update-sales-tax-work-history.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { SalesTaxesWorkHistory, Prisma } from '@prisma/client';

@Injectable()
export class SalesTaxWorkHistoryService {

  constructor(private prisma: PrismaService) {}
  
  async SalesTaxesWorkHistory(
    sales_taxes_work_historyWhereUniqueInput: Prisma.SalesTaxesWorkHistoryWhereUniqueInput,
  ): Promise<SalesTaxesWorkHistory | null> {
    return this.prisma.sales_taxes_work_history.findUnique({
      where: sales_taxes_work_historyWhereUniqueInput,
    });
  }

  async SalesTaxWorkHistory(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.SalesTaxesWorkHistoryWhereUniqueInput;
    where?: Prisma.SalesTaxesWorkHistoryWhereUniqueInput;
    orderBy?: Prisma.SalesTaxesWorkHistoryOrderByWithRelationInput;
  }): Promise<SalesTaxesWorkHistory[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.sales_taxes_work_history.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
    });
  }



  create(createSalesTaxWorkHistoryInput: CreateSalesTaxWorkHistoryInput) {
    return 'This action adds a new salesTaxWorkHistory';
  }

  findAll() {
    return this.prisma.SalesTaxesWorkHistory.findMany({
      include:{
        proforma:true
      }
    });
  }

  async findOne(SOPNUMBE: string): Promise<SalesTaxesWorkHistory> {
    return this.prisma.SalesTaxesWorkHistory.findUnique({ where: { SOPNUMBE } });
  }
  

  update(id: number, updateSalesTaxWorkHistoryInput: UpdateSalesTaxWorkHistoryInput) {
    return `This action updates a #${id} salesTaxWorkHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesTaxWorkHistory`;
  }
}
