import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateOptionDTO {
  @IsOptional()
  @IsString()
  id: string;

  @IsNotEmpty()
  @IsString()
  title: string;
}
