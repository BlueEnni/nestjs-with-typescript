import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { PickType } from '@nestjs/swagger';

export class UpdateUserDto extends PickType(CreateUserDto, [
  'password',
  'email',
]) {}

//export class UpdateUserDto extends OmitType(CreateUserDto, ['password']) {}
