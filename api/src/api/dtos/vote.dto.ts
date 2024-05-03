import { IsNotEmpty, IsString } from 'class-validator';

export class CreateVotesDTO {
  @IsNotEmpty()
  @IsString()
  userId: string;
}
