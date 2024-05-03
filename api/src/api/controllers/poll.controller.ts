import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { PollService } from '../services/poll.service';
import { CreatePollDTO, UpdatePollDTO } from '../dtos/poll.dto';
import { JwtAuthGuard } from 'src/utils/security/guards/jwt-auth.guard';
import { PollByIdPipe } from '../pipes/poll-by-id.pipe';
import { OptionBydIdPipe } from '../pipes/option-by-id.pipe';

@Controller('polls')
export class PollController {
  constructor(private readonly pollService: PollService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async createPoll(@Req() req, @Body() body: CreatePollDTO) {
    return await this.pollService.createPoll(req.user.id, body);
  }

  @Get()
  async getAll() {
    return await this.pollService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get('my')
  async getMyPolls(@Req() req) {
    return await this.pollService.getMyPolls(req.user.id);
  }

  @Get(':id')
  async getPoll(@Param('id', PollByIdPipe) id: string) {
    return await this.pollService.getPoll(id);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':pollId/have-voted')
  async haveVoted(@Req() req, @Param('pollId', PollByIdPipe) pollId: string) {
    return await this.pollService.haveVoted(req.user.id, pollId);
  }

  @Get(':pollId/results')
  async getResults(@Param('pollId', PollByIdPipe) pollId: string) {
    return await this.pollService.getResults(pollId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':pollId')
  async updatePoll(
    @Req() req,
    @Param('pollId', PollByIdPipe) pollId: string,
    @Body() body: UpdatePollDTO,
  ) {
    return await this.pollService.updatePoll(req.user.id, pollId, body);
  }

  @UseGuards(JwtAuthGuard)
  @Post(':pollId/vote/:optionId')
  async vote(
    @Req() req,
    @Param('pollId', PollByIdPipe) pollId: string,
    @Param('optionId', OptionBydIdPipe) optionId: string,
  ) {
    return await this.pollService.vote(req.user.id, pollId, optionId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':pollId/vote/:optionId')
  async unvote(
    @Req() req,
    @Param('pollId', PollByIdPipe) pollId: string,
    @Param('optionId', OptionBydIdPipe) optionId: string,
  ) {
    return await this.pollService.unvote(req.user.id, pollId, optionId);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':pollId')
  async deletePoll(@Req() req, @Param('pollId', PollByIdPipe) pollId: string) {
    return await this.pollService.deletePoll(req.user.id, pollId);
  }
}
