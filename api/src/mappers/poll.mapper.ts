import { Injectable } from '@nestjs/common';

@Injectable()
export class PollMapper {
  mapPollToPollDto(poll) {
    return {
      id: poll.id,
      title: poll.title,
      options: poll.options.map((option) => ({
        id: option.id,
        title: option.title,
        votes: option.votes,
      })),
    };
  }
}
