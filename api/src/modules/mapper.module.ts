import { Module } from '@nestjs/common';
import { PollMapper } from 'src/mappers/poll.mapper';
import { UserMapper } from 'src/mappers/user.mapper';

@Module({
  providers: [UserMapper, PollMapper],
  exports: [UserMapper, PollMapper],
})
export class MapperModule {}
