import { Body, Controller, Get, HttpException, HttpStatus, Post, UseGuards } from "@nestjs/common";
import { SignUpRequestDto } from "src/modules/auth/dto/signup.request.dto";
import { AuthService } from "../service/auth.service";
import { SignInDtoRequest } from "../dto/singin.request.dto";
import { AuthGuard } from "../../../util/guard";
import { Request } from '@nestjs/common';
import { Public } from "src/util/endpoint.docorator";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {} 

    @Post('signup')
    async signUp(@Body() newUserDto: SignUpRequestDto) {
        return await this.authService.signUp(newUserDto);
    }

    @Public()
    @Post('signin')
    async signIn(@Body() signinUserDto: SignInDtoRequest) {
        return await this.authService.signIn(signinUserDto);
    }

    @UseGuards(AuthGuard)
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}