import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ClientsEmailsService } from './clients-emails.service';
import { ClientsEmail } from './entities/clients-email.entity';
import { CreateClientsEmailInput } from './dto/create-clients-email.input';
import { UpdateClientsEmailInput } from './dto/update-clients-email.input';

@Resolver(() => ClientsEmail)
export class ClientsEmailsResolver {
  constructor(private readonly clientsEmailsService: ClientsEmailsService) {}

  @Mutation(() => ClientsEmail)
  createClientsEmail(@Args('createClientsEmailInput') createClientsEmailInput: CreateClientsEmailInput) {
    return this.clientsEmailsService.create(createClientsEmailInput);
  }

  @Query(() => [ClientsEmail], { name: 'clientsEmails' })
  findAll() {
    return this.clientsEmailsService.findAll();
  }

  @Query(() => ClientsEmail, { name: 'clientsEmail' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.clientsEmailsService.findOne(id);
  }

  @Mutation(() => ClientsEmail)
  updateClientsEmail(@Args('updateClientsEmailInput') updateClientsEmailInput: UpdateClientsEmailInput) {
    return this.clientsEmailsService.update(updateClientsEmailInput.id, updateClientsEmailInput);
  }

  @Mutation(() => ClientsEmail)
  removeClientsEmail(@Args('id', { type: () => Int }) id: number) {
    return this.clientsEmailsService.remove(id);
  }
}
