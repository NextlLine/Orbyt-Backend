import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { SignUpRequestDto } from "src/modules/auth/dto/signup.request.dto";
import { AuthService } from "../service/auth.service";
import { SignInDtoRequest } from "../dto/singin.request.dto";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {} 

    @Post('/signup')
    async signUp(@Body() newUserDto: SignUpRequestDto) {
        return await this.authService.signUp(newUserDto);
    }

    @Post('/signin')
    async signIn(@Body() signinUserDto: SignInDtoRequest) {
        return await this.authService.signIn(signinUserDto);
    }
}