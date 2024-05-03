import { PartialType, PickType } from '@nestjs/swagger';
import { IsString, IsEnum, IsNotEmpty } from 'class-validator';

enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  KHOHOL = 'KHOHOL',
}

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsNotEmpty()
  @IsEnum(Gender)
  gender: Gender;

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  secondName: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}

export class UpdateUserDTO extends PartialType(
  PickType(CreateUserDTO, ['firstName', 'secondName']),
) {}
