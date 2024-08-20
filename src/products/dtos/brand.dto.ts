import { IsString, IsUrl, IsNotEmpty } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';

export class CreateBrandDto {
  @IsString()
  @ApiProperty()
  @IsNotEmpty()
  readonly name: string;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty()
  readonly image: string;
}

export class UpdateBrandDto extends PartialType(CreateBrandDto) {}
