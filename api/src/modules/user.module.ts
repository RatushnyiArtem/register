import { Module } from '@nestjs/common';
import { UserController } from 'src/api/controllers/user.controller';
import { MapperModule } from './mapper.module';
import { UserService } from 'src/api/services/user.service';
import { PrismaModule } from 'src/database/prisma.module';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [MapperModule, PrismaModule],
})
export class UserModule {}
