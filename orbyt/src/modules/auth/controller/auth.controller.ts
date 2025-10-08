import { Body, Controller, Get, HttpException, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { SignUpRequestDto } from "src/modules/auth/dto/signup.request.dto";
import { AuthService } from "../service/auth.service";
import { SignInDtoRequest } from "../dto/singin.request.dto";
import { AuthGuard } from "../../../util/jwt.guard";
import { Request } from '@nestjs/common';
import { Public } from "src/util/endpoint.docorator";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Public()
    @Post('signup')
    async signUp(@Body() data: SignUpRequestDto) {
        return await this.authService.signUp(data);
    }

    @Public()
    @Post('signin')
    async signIn(@Body() data: SignInDtoRequest) {
        return await this.authService.signIn(data);
    }
}