import * as bcrypt from 'bcrypt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/user.dto';
import { UserRepository } from 'src/database/repositories/user.repository';
import { AlreadyRegisteredException } from 'src/utils/exceptions/already-registered.exception';
import { User } from '@prisma/client';
import { JwtService } from '@nestjs/jwt';
import { UserMapper } from 'src/mappers/user.mapper';

@Injectable()
export class AuthService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly jwtService: JwtService,
    private readonly userMapper: UserMapper,
  ) {}

  async register(body: CreateUserDTO) {
    const { password, ...securedUser } = body;

    const user = await this.userRepository.find({
      username: securedUser.username,
    });

    if (user) throw new AlreadyRegisteredException('username');

    const hashedPassword = await this.hashPassword(password);

    await this.userRepository.create({
      ...securedUser,
      password: hashedPassword,
    });
  }

  private async hashPassword(password: string) {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
  }

  async login(user: User) {
    return this.getAccessToken(user.id);
  }

  private getAccessToken(userId: string) {
    const payload = { sub: userId };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  async validateUser(username: string, password: string) {
    const user = await this.userRepository.find({ username });

    if (!user) throw new UnauthorizedException('Username is wrong');

    const comparedPasswords = await bcrypt.compare(password, user.password);

    if (!comparedPasswords)
      throw new UnauthorizedException('Password is wrong');

    return this.userMapper.getUser(user);
  }
}
