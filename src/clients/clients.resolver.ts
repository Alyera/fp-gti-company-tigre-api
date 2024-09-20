import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClientsService } from './clients.service';
import { Client } from './entities/client.entity';
import { CreateClientInput } from './dto/create-client.input';
import { UpdateClientInput } from './dto/update-client.input';
import { Common } from 'src/common/entities/common.entity';

@Resolver(() => Client)
export class ClientsResolver {
  constructor(private readonly clientsService: ClientsService) {}

  @Mutation(() => Client)
  createClient(@Args('createClientInput') createClientInput: CreateClientInput) {
    return this.clientsService.create(createClientInput);
  }

  @Query(() => [Client], { name: 'clients' })
  findAll() {
    return this.clientsService.findAll();
  }

  @Query(() => Client, { name: 'client' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.clientsService.findOne(id);
  }

  @Query((returns) => Client, { name: 'clientAccountsByRIF', nullable: true })
  clientAccountsByRIF(@Args('CUSTNMBR', { type: () => String}) CUSTNMBR: string) {
    return this.clientsService.clientAccountsByRIF(CUSTNMBR);
  }

  @Query((returns) => Client, { name: 'clientProformasByRIF', nullable: true })
  clientProformasByRIF(@Args('CUSTNMBR', { type: () => String}) CUSTNMBR: string, @Args('PAGE', { type: () => Int}) PAGE: number) {
    return this.clientsService.clientProformasByRIF(CUSTNMBR,PAGE);
  }

  @Query((returns) => Client, { name: 'clientInvoicesByRIF', nullable: true })
  clientInvoicesByRIF(@Args('CUSTNMBR', { type: () => String}) CUSTNMBR: string) {
    return this.clientsService.clientInvoicesByRIF(CUSTNMBR);
  }

  @Mutation(() => Client)
  updateClient(@Args('updateClientInput') updateClientInput: UpdateClientInput) {
    return this.clientsService.update(updateClientInput.id, updateClientInput);
  }

  @Mutation(() => Client)
  removeClient(@Args('id', { type: () => Int }) id: number) {
    return this.clientsService.remove(id);
  }

  @Query((returns) => [Client], { name: 'clientProformasFluent', nullable: true })
  clientProformasFluent(@Args('CUSTNMBR', { type: () => String}) CUSTNMBR: string) {
    return this.clientsService.clientProformasFluent(CUSTNMBR);
  }
}