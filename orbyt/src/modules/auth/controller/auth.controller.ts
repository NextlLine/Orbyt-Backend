import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { CreateUserDtoRequest } from "src/modules/auth/dto/create.user.request.dto";
import { AuthService } from "../service/auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {} 

    @Post('/signup')
    async createUser(@Body() newUserDto: CreateUserDtoRequest){
        return await this.authService.createUser(newUserDto)
    }
}