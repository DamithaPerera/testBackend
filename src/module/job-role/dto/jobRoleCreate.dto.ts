import { IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class JobRoleCreateDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(8)
  description: string;

  @IsOptional()
  @IsUUID()
  @IsString()
  createdUser: string;
}
