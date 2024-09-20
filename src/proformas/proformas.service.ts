import { Injectable } from '@nestjs/common';
import { CreateProformaInput } from './dto/create-proforma.input';
import { UpdateProformaInput } from './dto/update-proforma.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { Proforma, Prisma } from '@prisma/client';

@Injectable()
export class ProformasService {
  constructor(private prisma: PrismaService) {}

  create(createProformaInput: CreateProformaInput) {
    return 'This action adds a new proforma';
  }

  findAll() {
    return this.prisma.Proforma.findAll(
      
    );
  }

  findOne(CUSTNMBR: string) {
    return this.prisma.Proforma.findMany({
       
      where: { CUSTNMBR:CUSTNMBR, SOPTYPE:2 },
    
    });
  }

  update(id: number, updateProformaInput: UpdateProformaInput) {
    return `This action updates a #${id} proforma`;
  }

  remove(id: number) {
    return `This action removes a #${id} proforma`;
  }

  findByCustomerRIF(CUSTNMBR: string) {
    return this.prisma.proforma.findMany({
      where: {
        CUSTNMBR: CUSTNMBR,
            SOPTYPE: 2,
            VOIDSTTS:0
      },
      include:{
        sales_taxes_work_history:{
          where:{
            LNITMSEQ:0
          }
        },
        work_history:{
          where:{
            SOPTYPE:2
          }
        },
        khistory:{
          where:{
            SOPTYPE:2,

          }
        }
      },
    })
  }

  findBySOPNUMBE(SOPNUMBE: string) {
    return this.prisma.proforma.findUnique({
      where: {SOPNUMBE: SOPNUMBE, SOPTYPE:2},
      
      include: {
        detail: {
          where:{
            SOPNUMBE: SOPNUMBE, SOPTYPE:2
          },
          orderBy: {
            DEX_ROW_ID: 'desc',
          },
        },
       work_history:{
          where:{
          SOPNUMBE: SOPNUMBE, SOPTYPE:2
        }}
      },
    })
  }

  
}
