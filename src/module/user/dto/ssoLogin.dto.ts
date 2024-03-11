import {
  IsBoolean,
  IsEmail,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';

export class SsoLoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(8)
  name: string;

  @IsOptional()
  @IsString()
  image: string;

  @IsOptional()
  @IsBoolean()
  googleSSO: boolean;

  @IsString()
  accessToken: boolean;
}
