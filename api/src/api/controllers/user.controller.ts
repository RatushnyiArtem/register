import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Req,
  UseGuards,
} from '@nestjs/common';
import { UserMapper } from 'src/mappers/user.mapper';
import { UserService } from '../services/user.service';
import { UserByIdPipe } from '../pipes/user-by-id.pipe';
import { JwtAuthGuard } from 'src/utils/security/guards/jwt-auth.guard';
import { UpdateUserDTO } from '../dtos/user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly userMapper: UserMapper,
    private readonly userService: UserService,
  ) {}

  @Get(':id')
  async findById(@Param('id', UserByIdPipe) id: string) {
    const user = await this.userService.findById(id);
    return this.userMapper.getUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  async update(@Req() req, @Body() user: UpdateUserDTO) {
    const updatedUser = await this.userService.update(req.user.id, user);
    return this.userMapper.getUser(updatedUser);
  }

  @UseGuards(JwtAuthGuard)
  @Delete()
  async delete(@Req() req) {
    return await this.userService.delete(req.user.id);
  }
}
