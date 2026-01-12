import { IsString, IsEmail, IsOptional, IsDate, IsUUID, Length } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class SignUpRequestDto {
    @ApiProperty({
        description: 'Name of the user',
        example: 'João da Silva',
        maxLength: 64,
    })
    @IsString()
    @Length(1, 64)
    name: string;

    @ApiProperty({
        description: 'CPF of the user',
        example: '12345678900',
        maxLength: 14,
    })
    @IsString()
    @Length(11, 14)
    doc: string;

    @ApiProperty({
        description: 'e-mail of the user',
        example: 'joao.silva@email.com',
    })
    @IsEmail()
    email: string;

    @ApiProperty({
        description: 'Hash of the user',
        example: '1c2l3j12lj2v3wupq98pu@v',
    })
    @IsString()
    hash: string;
}

