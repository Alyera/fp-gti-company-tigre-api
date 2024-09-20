import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClientsAccountsService } from './clients-accounts.service';
import { ClientsAccount } from './entities/clients-account.entity';
import { CreateClientsAccountInput } from './dto/create-clients-account.input';
import { UpdateClientsAccountInput } from './dto/update-clients-account.input';

@Resolver(() => ClientsAccount)
export class ClientsAccountsResolver {
  constructor(private readonly clientsAccountsService: ClientsAccountsService) {}

  @Mutation(() => ClientsAccount)
  createClientsAccount(@Args('createClientsAccountInput') createClientsAccountInput: CreateClientsAccountInput) {
    return this.clientsAccountsService.create(createClientsAccountInput);
  }

  @Query(() => [ClientsAccount], { name: 'clientsAccounts' })
  findAll() {
    return this.clientsAccountsService.findAll();
  }

  @Query(() => ClientsAccount, { name: 'clientsAccount' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.clientsAccountsService.findOne(id);
  }

  @Mutation(() => ClientsAccount)
  updateClientsAccount(@Args('updateClientsAccountInput') updateClientsAccountInput: UpdateClientsAccountInput) {
    return this.clientsAccountsService.update(updateClientsAccountInput.id, updateClientsAccountInput);
  }

  @Mutation(() => ClientsAccount)
  removeClientsAccount(@Args('id', { type: () => Int }) id: number) {
    return this.clientsAccountsService.remove(id);
  }
}
