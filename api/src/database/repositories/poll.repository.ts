import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { Prisma } from '@prisma/client';

@Injectable()
export class PollRepository {
  constructor(private readonly prisma: PrismaService) {}

  private readonly include: Prisma.PollInclude = {
    options: true,
  };

  async create(data: Prisma.PollUncheckedCreateInput) {
    return this.prisma.poll.create({
      data,
      include: this.include,
    });
  }

  async findMany(args?: Prisma.PollFindManyArgs) {
    return this.prisma.poll.findMany({
      ...args,
      include: this.include,
    });
  }

  async findById(id: string) {
    return this.prisma.poll.findFirst({
      where: { id },
      include: {
        options: {
          include: {
            votes: true,
          },
        },
      },
    });
  }

  async updateById(
    id: string,
    data: Prisma.PollUncheckedUpdateWithoutAuthorInput,
  ) {
    return this.prisma.poll.update({
      where: { id },
      data,
      include: this.include,
    });
  }

  async deleteById(id: string) {
    const options = await this.prisma.option.findMany({
      where: { pollId: id },
    });

    const votes = await this.prisma.vote.findMany({
      where: { optionId: { in: options.map((option) => option.id) } },
    });

    await this.prisma.vote.deleteMany({
      where: { id: { in: votes.map((vote) => vote.id) } },
    });

    await this.prisma.option.deleteMany({
      where: { id: { in: options.map((option) => option.id) } },
    });

    return this.prisma.poll.delete({
      where: { id },
    });
  }
}
