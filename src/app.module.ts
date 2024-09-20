import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { ClientsModule } from './clients/clients.module';
import { ClientsEmailsModule } from './clients-emails/clients-emails.module';
import { PrismaService } from './prisma/prisma.service';
import { ClientsAccountsModule } from './clients-accounts/clients-accounts.module';
import { ProformasModule } from './proformas/proformas.module';
import { InvoicesModule } from './invoices/invoices.module';
import { ProformasDetailsModule } from './proformas-details/proformas-details.module';
import { InvoiceDetailsModule } from './invoice-details/invoice-details.module';
import { RmOpenTransactionsModule } from './rm-open-transactions/rm-open-transactions.module';
import { PriceBookWorkModule } from './price-book-work/price-book-work.module';
import { SalesTaxWorkHistoryModule } from './sales-tax-work-history/sales-tax-work-history.module';
import { UsrDefinedWorkHistoryModule } from './usr-defined-work-history/usr-defined-work-history.module';
import { CommonModule } from './common/common.module';
import { TasascambioModule } from './tasascambio/tasascambio.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    ClientsModule,
    ClientsEmailsModule,
    ClientsAccountsModule,
    ProformasModule,
    InvoicesModule,
    ProformasDetailsModule,
    InvoiceDetailsModule,
    RmOpenTransactionsModule,
    PriceBookWorkModule,
    SalesTaxWorkHistoryModule,
    UsrDefinedWorkHistoryModule,
    CommonModule,
    TasascambioModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
