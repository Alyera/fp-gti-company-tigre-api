import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProformasService } from './proformas.service';
import { Proforma } from './entities/proforma.entity';
import { CreateProformaInput } from './dto/create-proforma.input';
import { UpdateProformaInput } from './dto/update-proforma.input';

@Resolver(() => Proforma)
export class ProformasResolver {
  constructor(private readonly proformasService: ProformasService) {}

  @Mutation(() => Proforma)
  createProforma(@Args('createProformaInput') createProformaInput: CreateProformaInput) {
    return this.proformasService.create(createProformaInput);
  }

  @Query(() => [Proforma], { name: 'proformasS' })
  findAll() {
    return this.proformasService.findAll();
  }

  @Query(() => [Proforma], { name: 'proformabyCUSTNMBR' })
  findOne(@Args('CUSTNMBR', { type: () => String })  CUSTNMBR: string) {
    return this.proformasService.findOne(CUSTNMBR);
  }

  @Mutation(() => Proforma)
  updateProforma(@Args('updateProformaInput') updateProformaInput: UpdateProformaInput) {
    return this.proformasService.update(updateProformaInput.id, updateProformaInput);
  }

  @Mutation(() => Proforma)
  removeProforma(@Args('id', { type: () => Int }) id: number) {
    return this.proformasService.remove(id);
  }


  @Query(() => Proforma, { name: 'proformasByCustomerRIF' })
  findByCustomerRIF(@Args('CUSTNMBR', { type: () => String })  CUSTNMBR: string) {
    return this.proformasService.findByCustomerRIF(CUSTNMBR);
  }

  @Query(() => Proforma, { name: 'proformasBySopnumbe' })
  findBySOPNUMBE(@Args('SOPNUMBE', { type: () => String })  SOPNUMBE: string) {
    return this.proformasService.findBySOPNUMBE(SOPNUMBE);
  }
}
