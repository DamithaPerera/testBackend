import {IsEmail, IsOptional, IsString, MaxLength, MinLength} from 'class-validator';

export class SignupDtoDto {
  @IsString()
  @IsEmail()
  email: string;

  @IsString()
  @MaxLength(50)
  name: string;

  @IsString()
  @MinLength(8)
  password: string;

  @IsOptional()
  @IsString()
  roleId: string;
}
