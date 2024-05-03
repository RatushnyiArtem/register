import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { CreateOptionDTO } from './option.dto';
import { PartialType, PickType } from '@nestjs/swagger';
import { State } from '@prisma/client';

export class CreatePollDTO {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsNotEmpty()
  @Type(() => CreateOptionDTO)
  @ArrayMinSize(2)
  options: CreateOptionDTO[];
}

export class UpdatePollDTO extends PartialType(
  PickType(CreatePollDTO, ['title', 'description', 'options']),
) {
  @IsOptional()
  @IsEnum(State)
  state?: State;
}
