import { Injectable } from '@nestjs/common';
import { CreateProformasDetailInput } from './dto/create-proformas-detail.input';
import { UpdateProformasDetailInput } from './dto/update-proformas-detail.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { ProformaDetail, Prisma } from '@prisma/client';

@Injectable()
export class ProformasDetailsService {

  constructor (private prisma: PrismaService) {}

  create(createProformasDetailInput: CreateProformasDetailInput) {
    return 'This action adds a new proformasDetail';
  }

  findAll() {
    return this.prisma.proformaDetail.findMany(
      
    );
  }

  findOne(SOPNUMBE: string) {
    return this.prisma.proformaDetail.findUnique({
      where: { SOPNUMBE, SOPTYPE:2,  },
      include: {
        proformas:{
          include:{
            work_history:true,
          },
          
        }, 
      },
    });
   /*
    findOne(SOPNUMBE: string) {
      return this.prisma.proformaDetail.findUnique({
        where: {
            proformas: SOPNUMBE, SOPTYPE: 2,
        },
          include: {
            work_history: {
                where: {
                  SOPTYPE: 2,
                } 
            }
          }
      });*/
    
    /*const trimmedSOP10100s = sop10100.map(sop10100 => ({
      ...sop10100,
      comment1: sop10100.CUSTNMBR.trim(), // Esto es equivalente a RTRIM en SQL para cadenas vacías al principio y al final
    }));

    return trimmedSOP10100s;*/
  }

  update(id: number, updateProformasDetailInput: UpdateProformasDetailInput) {
    return `This action updates a #${id} proformasDetail`;
  }

  remove(id: number) {
    return `This action removes a #${id} proformasDetail`;
  }
}
