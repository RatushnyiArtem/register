import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/database/repositories/user.repository';
import { UpdateUserDTO } from '../dtos/user.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async findById(id: string) {
    return this.userRepository.findById(id);
  }

  async update(userId: string, body: UpdateUserDTO) {
    return this.userRepository.update(userId, body);
  }

  async delete(userId: string) {
    return this.userRepository.delete(userId);
  }
}
