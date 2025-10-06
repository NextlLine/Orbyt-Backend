import { Body, Controller, Post } from "@nestjs/common";
import { CreateUserDtoRequest } from "src/modules/auth/dto/create.user.request.dto";
import { AuthService } from "src/app/modules/auth/auth.service";


@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/create')
    createUser(@Body() newUserDto: CreateUserDtoRequest){
        return this.authService.createUser(newUserDto)
    }
}