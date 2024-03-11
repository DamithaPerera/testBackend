import { IsString, MinLength } from 'class-validator';

export class JobRoleUpdateDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @MinLength(8)
  description: string;
}
