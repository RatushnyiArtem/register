import { Injectable } from '@nestjs/common';
import { PollRepository } from 'src/database/repositories/poll.repository';
import { CreatePollDTO, UpdatePollDTO } from '../dtos/poll.dto';
import { VoteRepository } from 'src/database/repositories/vote.repository';
import { NotBelongException } from 'src/utils/exceptions/not-belong.exception';
import { VotingNotAllowedException } from 'src/utils/exceptions/voting-not-allowed.exception';
import { OptionRepository } from 'src/database/repositories/option.repository';

@Injectable()
export class PollService {
  constructor(
    private readonly pollRepository: PollRepository,
    private readonly voteRepository: VoteRepository,
    private readonly optionRepository: OptionRepository,
  ) {}

  async createPoll(userId: string, { options, ...body }: CreatePollDTO) {
    return this.pollRepository.create({
      ...body,
      options: {
        create: options.map((option) => ({
          title: option.title,
        })),
      },
      authorId: userId,
    });
  }

  async getPoll(id: string) {
    return this.pollRepository.findById(id);
  }

  getMyPolls(userId: string) {
    return this.pollRepository.findMany({
      where: {
        authorId: userId,
      },
    });
  }

  async getAll() {
    return this.pollRepository.findMany();
  }

  async vote(userId: string, pollId: string, optionId: string) {
    const poll = await this.pollRepository.findById(pollId);

    if (poll.state === 'CLOSED') {
      throw new VotingNotAllowedException('This poll is closed');
    }

    return this.voteRepository.create({
      optionId,
      userId,
    });
  }

  async unvote(userId: string, pollId: string, optionId: string) {
    const poll = await this.pollRepository.findById(pollId);

    if (poll.state === 'CLOSED') {
      throw new VotingNotAllowedException('This poll is closed');
    }

    const vote = await this.voteRepository.findByUserAndOption(
      userId,
      optionId,
    );

    if (!vote) {
      throw new VotingNotAllowedException('You have not voted for this option');
    }

    return this.voteRepository.deleteById(vote.id);
  }

  async haveVoted(userId: string, pollId: string) {
    const option = await this.optionRepository.findByPollAndUser(
      pollId,
      userId,
    );

    if (!option) return { haveVoted: false, option: {} };

    return {
      haveVoted: true,
      option: option.id,
    };
  }

  async getResults(pollId: string) {
    const options = await this.optionRepository.findMany({
      where: {
        pollId,
      },
    });

    const poll = await this.pollRepository.findById(pollId);

    return options.map((option) => ({
      id: option.id,
      votes: option.votes.length,
      percentFromTotal:
        poll.options
          .map((option) => option.votes.length)
          .reduce((a, b) => a + b, 0) === 0
          ? 0
          : (
              (option.votes.length /
                poll.options
                  .map((option) => option.votes.length)
                  .reduce((a, b) => a + b, 0)) *
              100
            ).toFixed(2),
    }));
  }

  async updatePoll(userId: string, pollId: string, body: UpdatePollDTO) {
    const poll = await this.pollRepository.findById(pollId);

    if (poll.authorId !== userId) {
      throw new NotBelongException('Poll', 'User');
    }

    const incomingOptionIds = body.options.map((option) => option.id);

    const optionsToRemove = poll.options.filter(
      (option) => !incomingOptionIds.includes(option.id),
    );

    for (const option of optionsToRemove) {
      await this.optionRepository.deleteById(option.id);
    }

    const updateOptions = body.options.map((option) => ({
      where: { id: option.id },
      update: {
        title: option.title,
      },
      create: {
        title: option.title,
      },
    }));

    return this.pollRepository.updateById(pollId, {
      ...body,
      options: { upsert: updateOptions },
    });
  }

  async deletePoll(userId: string, pollId: string) {
    const poll = await this.pollRepository.findById(pollId);

    if (poll.authorId !== userId) {
      throw new NotBelongException('Poll', 'User');
    }

    return this.pollRepository.deleteById(pollId);
  }
}
