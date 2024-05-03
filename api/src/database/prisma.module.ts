import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserRepository } from './repositories/user.repository';
import { PollRepository } from './repositories/poll.repository';
import { VoteRepository } from './repositories/vote.repository';
import { OptionRepository } from './repositories/option.repository';

@Module({
  providers: [
    PrismaService,
    UserRepository,
    PollRepository,
    VoteRepository,
    OptionRepository,
  ],
  exports: [
    PrismaService,
    UserRepository,
    PollRepository,
    VoteRepository,
    OptionRepository,
  ],
})
export class PrismaModule {}
