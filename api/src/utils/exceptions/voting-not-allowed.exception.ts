import { ForbiddenException } from '@nestjs/common';

export class VotingNotAllowedException extends ForbiddenException {
  constructor(reason: string = '') {
    super(`Voting is not allowed. ${reason}`);
  }
}
