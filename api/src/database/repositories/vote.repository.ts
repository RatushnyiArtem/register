import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class VoteRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: Prisma.VoteUncheckedCreateInput) {
    return this.prisma.vote.create({
      data,
    });
  }

  async findByUserAndOption(userId: string, optionId: string) {
    return this.prisma.vote.findFirst({
      where: {
        userId,
        optionId,
      },
    });
  }

  async deleteById(id: string) {
    return this.prisma.vote.delete({
      where: { id },
    });
  }
}
