import { Injectable, PipeTransform } from '@nestjs/common';
import { OptionRepository } from 'src/database/repositories/option.repository';
import { InvalidEntityIdException } from 'src/utils/exceptions/invalid-entity-id.exception';

@Injectable()
export class OptionBydIdPipe implements PipeTransform<string, Promise<string>> {
  constructor(private readonly optionRepository: OptionRepository) {}

  async transform(optionId: string): Promise<string> {
    const option = await this.optionRepository.findById(optionId);
    if (!option) {
      throw new InvalidEntityIdException('Option');
    }

    return optionId;
  }
}
