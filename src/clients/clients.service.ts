import { Injectable } from '@nestjs/common';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { PrismaService } from 'src/prisma/prisma.service';



@Injectable()
export class ClientsService {
  clientInvoicesByRIF(CUSTNMBR: string) {
    throw new Error('Method not implemented.');
  }

  constructor (private prisma: PrismaService) {}

  create(createClientInput: CreateClientInput) {
    return 'This action adds a new client';
  }

  findAll() {
    return this.prisma.client.findMany();
  }

  findOne(CUSTNMBR: string) {
    return this.prisma.client.findUnique({where: { CUSTNMBR }});
  }

  update(id: number, updateClientInput: UpdateClientInput) {
    return `This action updates a #${id} client`;
  }

  remove(id: number) {
    return `This action removes a #${id} client`;
  }

  clientAccountsByRIF(CUSTNMBR: string) {
    return this.prisma.client.findUnique({
      where: { CUSTNMBR },
      include: {
        accounts: {
          select: {
            CUSTNMBR: true,
             
          },
          where: {
            CUSTNMBR: CUSTNMBR
          }
        }
        
        /*email: {
          select: {
          },
          where: {
            CUSTNMBR: CUSTNMBR
          }
        },
        documents:{
          select: {
            SOPNUMBE: true,
            PRSTADCD:true,
            SUBTOTAL:true,
            ORSUBTOT:true,

          },
          where: {
            CUSTNMBR: CUSTNMBR
          }
        }*/
      }
    });
  }

  clientProformasByRIF(CUSTNMBR: string, PAGE:number) {
    const page=PAGE;
    // Example: 52
    return this.prisma.client.findUnique({
      where: { CUSTNMBR},
      
      select: {
        CUSTNMBR:true,
        proformas: {
          orderBy: [
            { DOCDATE: 'desc' },
            { SOPNUMBE: 'desc' }
          ],
          skip: ( page - 1) * 100,
          take: 100,
          select:{
            SOPNUMBE:true,
            PRSTADCD:true,
            SUBTOTAL:true,
            ORSUBTOT:true,
            TAXAMNT:true,
            ORTAXAMT:true,
            DOCAMNT:true,
            ORDOCAMT:true,
            DOCDATE:true,
            CURNCYID:true,
            CREATDDT:true,
            sales_taxes_work_history:{
              select:{
                TXDTLPCTAMT:true,
              },
              where:{
                LNITMSEQ:0
              }
            },
            work_history:{
              select:{
                USRDAT02:true,
                COMMENT_1:true,
                USRDEF03:true
              },
              where:{
                SOPTYPE:2
              }
            },
            khistory:{
              where:{
                SOPTYPE:2,
                DELETE1:0,
              }
            }
          },
          where: {
            CUSTNMBR: CUSTNMBR,
            SOPTYPE: 2,
            VOIDSTTS:0,
            khistory: {
              every: {
                NOT: {
                  DELETE1: 0,
                  SOPTYPE:2,
                },
              },
            },
          },
        },
      },
    })
    
  }

  

  clientProformasFluent(CUSTNMBR: string) {
    return this.prisma.client.findUnique({
      where: {CUSTNMBR:CUSTNMBR}})
    
    .proformas({
      select:{
        CUSTNMBR:true
      }
    })
  }
  
}
