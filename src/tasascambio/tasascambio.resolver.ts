import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TasascambioService } from './tasascambio.service';
import { TasasCambio } from './entities/tasascambio.entity';
import { CreateTasascambioInput } from './dto/create-tasascambio.input';
import { UpdateTasacambioInput } from './dto/update-tasascambio.input';

@Resolver(() => TasasCambio)
export class TasascambioResolver {
  constructor(private readonly tasascambioService: TasascambioService) {}

  @Query(() => [TasasCambio], { name: 'work_history' })
  findAll() {
    return this.tasascambioService.findAll();
  }

  /*@Query(() => TasasCambio, { name: 'work_historys' })
  findOne(@Args('SOPNUMBE', { type: () => String }) SOPNUMBE: string) {
    return this.tasascambioService.findOne();
  }*/

  @Mutation(() => TasasCambio)
  updateTasasCambio(@Args('updateTasasCambioInput') updateTasasCambioInput: UpdateTasacambioInput) {
    return this.tasascambioService.update(updateTasasCambioInput.id, updateTasasCambioInput);
  }

  @Mutation(() => TasasCambio)
  removeTasasCambio(@Args('id', { type: () => Int }) id: number) {
    return this.tasascambioService.remove(id);
  }
}
