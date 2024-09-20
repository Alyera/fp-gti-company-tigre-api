import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SalesTaxWorkHistoryService } from './sales-tax-work-history.service';
import { SalesTaxesWorkHistory } from './entities/sales-tax-work-history.entity';
import { CreateSalesTaxWorkHistoryInput } from './dto/create-sales-tax-work-history.input';
import { UpdateSalesTaxWorkHistoryInput } from './dto/update-sales-tax-work-history.input';

@Resolver(() => SalesTaxesWorkHistory)
export class SalesTaxWorkHistoryResolver {
  constructor(private readonly salesTaxWorkHistoryService: SalesTaxWorkHistoryService) {}

  @Mutation(() => SalesTaxesWorkHistory)
  createSalesTaxWorkHistory(@Args('createSalesTaxWorkHistoryInput') createSalesTaxWorkHistoryInput: CreateSalesTaxWorkHistoryInput) {
    return this.salesTaxWorkHistoryService.create(createSalesTaxWorkHistoryInput);
  }

  @Query(() => [SalesTaxesWorkHistory], { name: 'sales_taxes_work_history' })
  findAll() {
    return this.salesTaxWorkHistoryService.findAll();
  }

  @Query(() => SalesTaxesWorkHistory, { name: 'sales_taxes_work_historys' })
  findOne(@Args('SOPNUMBE', { type: () => String }) SOPNUMBE: string) {
    return this.salesTaxWorkHistoryService.findOne(SOPNUMBE);
  }

 
  @Mutation(() => SalesTaxesWorkHistory)
  updateSalesTaxWorkHistory(@Args('updateSalesTaxWorkHistoryInput') updateSalesTaxWorkHistoryInput: UpdateSalesTaxWorkHistoryInput) {
    return this.salesTaxWorkHistoryService.update(updateSalesTaxWorkHistoryInput.id, updateSalesTaxWorkHistoryInput);
  }

  @Mutation(() => SalesTaxesWorkHistory)
  removeSalesTaxWorkHistory(@Args('id', { type: () => Int }) id: number) {
    return this.salesTaxWorkHistoryService.remove(id);
  }
}
