import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { SignUpRequestDto } from "src/modules/auth/dto/signup.request.dto";
import { AuthService } from "../service/auth.service";
import { SignInDtoRequest } from "../dto/singin.request.dto";
import { AuthGuard } from "../../../util/jwt.guard";
import { Public } from "src/util/endpoint.docorator";
import { Request } from '@nestjs/common';


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

    @UseGuards(AuthGuard)
    @Post("validate")
    async validate(@Request() req, @Body() body: { email: string }) {
        const { email } = body;     
        return await this.authService.validateToken(req.user.uername, email);
    }
}