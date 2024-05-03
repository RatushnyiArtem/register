import { Module } from '@nestjs/common';
import { AuthModule } from 'src/modules/auth.module';
import { PollModule } from 'src/modules/poll.module';
import { UserModule } from 'src/modules/user.module';

@Module({
  imports: [AuthModule, UserModule, PollModule],
})
export class ApiModule {}
