import { Module } from '@nestjs/common';
import { MapperModule } from './mapper.module';
import { PrismaModule } from 'src/database/prisma.module';
import { PollController } from 'src/api/controllers/poll.controller';
import { PollService } from 'src/api/services/poll.service';

@Module({
  controllers: [PollController],
  providers: [PollService],
  imports: [MapperModule, PrismaModule],
})
export class PollModule {}
