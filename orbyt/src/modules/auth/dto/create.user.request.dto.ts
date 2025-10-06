import { IsString, IsEmail, IsOptional, IsDate, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateUserDtoRequest {
    @IsEmail()
    email: string;

    @IsString()
    name: string;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    activatedAt: Date | null = null;

    @IsString()
    hash: string;
}
