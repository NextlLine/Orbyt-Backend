import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class SignInDtoRequest {
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