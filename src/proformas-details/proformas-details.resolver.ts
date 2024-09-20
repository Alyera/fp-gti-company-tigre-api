import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProformasDetailsService } from './proformas-details.service';
import { ProformasDetail } from './entities/proformas-detail.entity';
import { CreateProformasDetailInput } from './dto/create-proformas-detail.input';
import { UpdateProformasDetailInput } from './dto/update-proformas-detail.input';

@Resolver(() => ProformasDetail)
export class ProformasDetailsResolver {
  constructor(private readonly proformasDetailsService: ProformasDetailsService) {}

  @Mutation(() => ProformasDetail)
  createProformasDetail(@Args('createProformasDetailInput') createProformasDetailInput: CreateProformasDetailInput) {
    return this.proformasDetailsService.create(createProformasDetailInput);
  }

  @Query(() => [ProformasDetail], { name: 'proformas' })
  findAll() {
    return this.proformasDetailsService.findAll();
  }

  @Query(() => ProformasDetail, { name: 'proformasdetail', nullable: true  })
  findOne(@Args('SOPNUMBE', { type: () => String })  SOPNUMBE: string) {
    return this.proformasDetailsService.findOne(SOPNUMBE);
  }

  @Mutation(() => ProformasDetail)
  updateProformasDetail(@Args('updateProformasDetailInput') updateProformasDetailInput: UpdateProformasDetailInput) {
    return this.proformasDetailsService.update(updateProformasDetailInput.id, updateProformasDetailInput);
  }

  @Mutation(() => ProformasDetail)
  removeProformasDetail(@Args('id', { type: () => Int }) id: number) {
    return this.proformasDetailsService.remove(id);
  }
}
