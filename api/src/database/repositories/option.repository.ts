import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class OptionRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string) {
    return this.prisma.option.findFirst({
      where: {
        id,
      },
    });
  }

  async findMany(args: Prisma.OptionFindManyArgs) {
    return this.prisma.option.findMany({ ...args, include: { votes: true } });
  }

  async findByPollAndUser(pollId: string, userId: string) {
    return this.prisma.option.findFirst({
      where: {
        pollId,
        votes: {
          some: {
            userId,
          },
        },
      },
    });
  }

  async deleteById(id: string) {
    return this.prisma.option.delete({
      where: {
        id,
      },
    });
  }
}
