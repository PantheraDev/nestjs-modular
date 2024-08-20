import { IsString, IsNotEmpty, IsEmail, Length } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({description: 'Users email'})
  @IsEmail()
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty()
  @Length(6)
  readonly password: string;

  @IsNotEmpty()
  @ApiProperty()
  readonly role: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}
