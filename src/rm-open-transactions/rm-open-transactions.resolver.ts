import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RmOpenTransactionsService } from './rm-open-transactions.service';
import { RmOpenTransaction } from './entities/rm-open-transaction.entity';
import { CreateRmOpenTransactionInput } from './dto/create-rm-open-transaction.input';
import { UpdateRmOpenTransactionInput } from './dto/update-rm-open-transaction.input';

@Resolver(() => RmOpenTransaction)
export class RmOpenTransactionsResolver {
  constructor(private readonly rmOpenTransactionsService: RmOpenTransactionsService) {}

  @Mutation(() => RmOpenTransaction)
  createRmOpenTransaction(@Args('createRmOpenTransactionInput') createRmOpenTransactionInput: CreateRmOpenTransactionInput) {
    return this.rmOpenTransactionsService.create(createRmOpenTransactionInput);
  }

  @Query(() => [RmOpenTransaction], { name: 'rmOpenTransactions' })
  findAll() {
    return this.rmOpenTransactionsService.findAll();
  }

  @Query(() => RmOpenTransaction, { name: 'rmOpenTransaction' })
  findOne(@Args('DOCNUMBR', { type: () => String }) DOCNUMBR: string) {
    return this.rmOpenTransactionsService.findOne(DOCNUMBR);
  }

  @Mutation(() => RmOpenTransaction)
  updateRmOpenTransaction(@Args('updateRmOpenTransactionInput') updateRmOpenTransactionInput: UpdateRmOpenTransactionInput) {
    return this.rmOpenTransactionsService.update(updateRmOpenTransactionInput.id, updateRmOpenTransactionInput);
  }

  @Mutation(() => RmOpenTransaction)
  removeRmOpenTransaction(@Args('id', { type: () => Int }) id: number) {
    return this.rmOpenTransactionsService.remove(id);
  }
}
