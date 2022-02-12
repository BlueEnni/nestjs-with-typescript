import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @MaxLength(20)
  @IsNotEmpty()
  @ApiProperty()
  userName: string;

  @IsEmail()
  @IsOptional()
  @ApiProperty()
  email?: string;

  @MaxLength(20)
  @MinLength(5)
  @ApiProperty()
  password: string;
}
