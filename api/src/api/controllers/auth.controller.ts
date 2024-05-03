import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDTO } from '../dtos/user.dto';
import { LocalAuthGuard } from 'src/utils/security/guards/local-auth.guard';
import { JwtAuthGuard } from 'src/utils/security/guards/jwt-auth.guard';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  register(@Body() body: CreateUserDTO) {
    return this.authService.register(body);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Req() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('/me')
  getMe(@Req() req) {
    return req.user;
  }
}
