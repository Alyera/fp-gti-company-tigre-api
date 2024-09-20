import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsrDefinedWorkHistoryService } from './usr-defined-work-history.service';
import { UsrDefinedWorkHistory } from './entities/usr-defined-work-history.entity';
import { CreateUsrDefinedWorkHistoryInput } from './dto/create-usr-defined-work-history.input';
import { UpdateUsrDefinedWorkHistoryInput } from './dto/update-usr-defined-work-history.input';

@Resolver(() => UsrDefinedWorkHistory)
export class UsrDefinedWorkHistoryResolver {
  constructor(private readonly usrDefinedWorkHistoryService: UsrDefinedWorkHistoryService) {}

  @Mutation(() => UsrDefinedWorkHistory)
  createUsrDefinedWorkHistory(@Args('createUsrDefinedWorkHistoryInput') createUsrDefinedWorkHistoryInput: CreateUsrDefinedWorkHistoryInput) {
    return this.usrDefinedWorkHistoryService.create(createUsrDefinedWorkHistoryInput);
  }

  @Query(() => [UsrDefinedWorkHistory], { name: 'work_history' })
  findAll() {
    return this.usrDefinedWorkHistoryService.findAll();
  }

  @Query(() => UsrDefinedWorkHistory, { name: 'work_historys' })
  findOne(@Args('SOPNUMBE', { type: () => String }) SOPNUMBE: string) {
    return this.usrDefinedWorkHistoryService.findOne(SOPNUMBE);
  }

  @Mutation(() => UsrDefinedWorkHistory)
  updateUsrDefinedWorkHistory(@Args('updateUsrDefinedWorkHistoryInput') updateUsrDefinedWorkHistoryInput: UpdateUsrDefinedWorkHistoryInput) {
    return this.usrDefinedWorkHistoryService.update(updateUsrDefinedWorkHistoryInput.id, updateUsrDefinedWorkHistoryInput);
  }

  @Mutation(() => UsrDefinedWorkHistory)
  removeUsrDefinedWorkHistory(@Args('id', { type: () => Int }) id: number) {
    return this.usrDefinedWorkHistoryService.remove(id);
  }
}
