import { Injectable, PipeTransform } from '@nestjs/common';
import { PollRepository } from 'src/database/repositories/poll.repository';
import { InvalidEntityIdException } from 'src/utils/exceptions/invalid-entity-id.exception';

@Injectable()
export class PollByIdPipe implements PipeTransform<string, Promise<string>> {
  constructor(private readonly pollRepository: PollRepository) {}

  async transform(pollId: string): Promise<string> {
    const auction = await this.pollRepository.findById(pollId);
    if (!auction) {
      throw new InvalidEntityIdException('Poll');
    }

    return pollId;
  }
}
